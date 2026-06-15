#!/usr/bin/env python3
"""Record, check, and update installed skill version."""

from __future__ import annotations

import argparse
import datetime as dt
import json
import pathlib
import re
import subprocess
import sys
import urllib.error
import urllib.request


SKILL_ID = "aizhangle-agent-design"
USER_AGENT = f"{SKILL_ID}-version-check"
UPDATE_HINT = f"请从 GitHub 拉取或重新安装 {SKILL_ID}。"


def utc_now() -> str:
    return dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()


def skill_root_from_script() -> pathlib.Path:
    return pathlib.Path(__file__).resolve().parents[1]


def load_json(path: pathlib.Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: pathlib.Path, data: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def install_record_path() -> pathlib.Path:
    return pathlib.Path.home() / ".codex" / "state" / SKILL_ID / "install.json"


def git_commit(root: pathlib.Path) -> str | None:
    try:
        result = subprocess.run(
            ["git", "rev-parse", "HEAD"],
            cwd=root,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.DEVNULL,
            check=True,
        )
    except Exception:
        return None
    return result.stdout.strip() or None


def run_git(root: pathlib.Path, *args: str, check: bool = True) -> subprocess.CompletedProcess:
    return subprocess.run(
        ["git", *args],
        cwd=root,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=check,
    )


def is_git_install(root: pathlib.Path) -> bool:
    try:
        run_git(root, "rev-parse", "--is-inside-work-tree")
    except Exception:
        return False
    return True


def git_remote_url(root: pathlib.Path) -> str | None:
    try:
        result = run_git(root, "remote", "get-url", "origin")
    except Exception:
        return None
    return result.stdout.strip() or None


def normalize_repo_url(url: str | None) -> str:
    if not url:
        return ""
    normalized = url.strip()
    if normalized.startswith("git@github.com:"):
        normalized = "https://github.com/" + normalized.removeprefix("git@github.com:")
    if normalized.endswith(".git"):
        normalized = normalized[:-4]
    return normalized.rstrip("/")


def worktree_dirty(root: pathlib.Path) -> bool:
    result = run_git(root, "status", "--porcelain", check=False)
    if result.returncode != 0:
        return True
    return bool(result.stdout.splitlines())


def raw_manifest_url(manifest: dict) -> str:
    repo = manifest.get("repository", {})
    if repo.get("rawManifestUrl"):
        return repo["rawManifestUrl"]

    url = repo.get("url", "")
    branch = repo.get("branch", "main")
    match = re.match(r"https://github\.com/([^/]+)/([^/.]+)(?:\.git)?$", url)
    if match:
        owner, name = match.groups()
        return f"https://raw.githubusercontent.com/{owner}/{name}/{branch}/manifest.json"

    raise ValueError("manifest.repository.rawManifestUrl or repository.url is required")


def version_key(version: str) -> tuple:
    """Comparable key for semver-ish versions such as 0.2.1."""
    main, _, suffix = version.partition("-")
    parts = []
    for part in main.split("."):
        try:
            parts.append(int(part))
        except ValueError:
            parts.append(0)
    while len(parts) < 3:
        parts.append(0)
    prerelease_rank = 0 if suffix else 1
    return (*parts[:3], prerelease_rank, suffix)


def fetch_latest_manifest(url: str, timeout: float) -> dict:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8"))


def fetch_latest_manifest_from_git(root: pathlib.Path, branch: str) -> dict:
    run_git(root, "fetch", "--quiet", "origin", branch)
    result = run_git(root, "show", f"origin/{branch}:manifest.json")
    return json.loads(result.stdout)


def record_install(root: pathlib.Path) -> dict:
    manifest_path = root / "manifest.json"
    manifest = load_json(manifest_path)
    record_path = install_record_path()
    record = {
        "skillId": manifest["id"],
        "installedVersion": manifest["version"],
        "installedAt": utc_now(),
        "sourceRepository": manifest.get("repository", {}).get("url"),
        "sourceBranch": manifest.get("repository", {}).get("branch"),
        "installCommit": git_commit(root),
        "manifestPath": str(manifest_path),
    }
    try:
        write_json(record_path, record)
    except OSError as error:
        return {
            "status": "record_skipped",
            "recordPath": str(record_path),
            "reason": str(error),
            **record,
        }
    return {"status": "recorded", "recordPath": str(record_path), **record}


def check_latest(root: pathlib.Path, timeout: float) -> dict:
    manifest = load_json(root / "manifest.json")
    record_path = install_record_path()
    record_warning = None
    if not record_path.exists():
        record_result = record_install(root)
        if record_result.get("status") == "record_skipped":
            record_warning = record_result.get("reason")

    try:
        record = load_json(record_path) if record_path.exists() else {}
    except (OSError, json.JSONDecodeError):
        record = {}
    current_version = manifest["version"]
    installed_version = record.get("installedVersion", current_version)

    latest_url = None
    try:
        branch = manifest.get("repository", {}).get("branch", "main")
        if is_git_install(root):
            latest_manifest = fetch_latest_manifest_from_git(root, branch)
            latest_url = f"git:origin/{branch}:manifest.json"
        else:
            latest_url = raw_manifest_url(manifest)
            latest_manifest = fetch_latest_manifest(latest_url, timeout)
        latest_version = latest_manifest["version"]
    except (
        OSError,
        urllib.error.URLError,
        TimeoutError,
        ValueError,
        KeyError,
        json.JSONDecodeError,
        subprocess.CalledProcessError,
    ) as error:
        return {
            "status": "check_failed",
            "installedVersion": installed_version,
            "currentVersion": current_version,
            "recordWarning": record_warning,
            "error": str(error),
        }

    update_available = version_key(latest_version) > version_key(current_version)
    return {
        "status": "update_available" if update_available else "current",
        "installedVersion": installed_version,
        "currentVersion": current_version,
        "latestVersion": latest_version,
        "latestManifestUrl": latest_url,
        "recordWarning": record_warning,
        "updateHint": UPDATE_HINT if update_available else None,
    }


def update_skill(root: pathlib.Path) -> dict:
    manifest = load_json(root / "manifest.json")
    expected_repo = manifest.get("repository", {}).get("url")
    branch = manifest.get("repository", {}).get("branch", "main")

    if not is_git_install(root):
        return {
            "status": "update_unsupported",
            "reason": "当前 skill 目录不是 Git 仓库，无法自动拉取更新。",
            "fallback": "请重新从 GitHub 下载最新版并替换本地 skill 目录。",
        }

    actual_repo = git_remote_url(root)
    if normalize_repo_url(actual_repo) != normalize_repo_url(expected_repo):
        return {
            "status": "update_blocked",
            "reason": "当前 Git remote 与 manifest.repository.url 不一致，已停止自动更新。",
            "expectedRepository": expected_repo,
            "actualRepository": actual_repo,
        }

    if worktree_dirty(root):
        return {
            "status": "update_blocked",
            "reason": "当前 skill 目录存在未提交或未暂存的本地改动，已停止自动更新以避免覆盖使用者改动。",
        }

    before_version = manifest["version"]
    before_commit = git_commit(root)
    try:
        pull = run_git(root, "pull", "--ff-only", "origin", branch)
    except subprocess.CalledProcessError as error:
        return {
            "status": "update_failed",
            "reason": "git pull --ff-only 执行失败。",
            "stdout": error.stdout,
            "stderr": error.stderr,
        }

    after_manifest = load_json(root / "manifest.json")
    record = record_install(root)
    result = {
        "status": "updated",
        "beforeVersion": before_version,
        "afterVersion": after_manifest["version"],
        "beforeCommit": before_commit,
        "afterCommit": git_commit(root),
        "gitOutput": pull.stdout.strip(),
        "recordPath": record["recordPath"],
    }
    if record.get("status") == "record_skipped":
        result["recordWarning"] = record.get("reason")
    return result


def main() -> int:
    parser = argparse.ArgumentParser(description="Record, check, and update aizhangle-agent-design skill version.")
    parser.add_argument("--skill-root", default=None, help="Skill repository root. Defaults to the script parent.")
    parser.add_argument("--record-install", action="store_true", help="Write the local installed-version record.")
    parser.add_argument("--check-latest", action="store_true", help="Check GitHub manifest.json for a newer version.")
    parser.add_argument("--update", action="store_true", help="Update this skill with git pull --ff-only when installed from Git.")
    parser.add_argument("--timeout", type=float, default=5.0, help="GitHub request timeout in seconds.")
    args = parser.parse_args()

    root = pathlib.Path(args.skill_root).resolve() if args.skill_root else skill_root_from_script()
    selected = [args.record_install, args.check_latest, args.update]
    if sum(bool(item) for item in selected) != 1:
        parser.error("choose exactly one of --record-install, --check-latest, or --update")

    if args.record_install:
        result = record_install(root)
    elif args.check_latest:
        result = check_latest(root, args.timeout)
    else:
        result = update_skill(root)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
