#!/usr/bin/env python3
"""Install or update the aizhangle-agent-design skill."""

from __future__ import annotations

import argparse
import json
import pathlib
import shutil
import subprocess
import sys


SKILL_ID = "aizhangle-agent-design"
REPO_URL = "https://github.com/realrsia/aizhangle-agent-design.git"
BRANCH = "main"


def default_install_dir() -> pathlib.Path:
    return pathlib.Path.home() / ".codex" / "skills" / SKILL_ID


def run(command: list[str], cwd: pathlib.Path | None = None, check: bool = True) -> subprocess.CompletedProcess:
    return subprocess.run(
        command,
        cwd=cwd,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=check,
    )


def normalize_repo_url(url: str | None) -> str:
    if not url:
        return ""
    normalized = url.strip()
    if normalized.startswith("git@github.com:"):
        normalized = "https://github.com/" + normalized.removeprefix("git@github.com:")
    if normalized.endswith(".git"):
        normalized = normalized[:-4]
    return normalized.rstrip("/")


def ensure_git_available() -> None:
    if shutil.which("git") is None:
        raise RuntimeError("未找到 git，无法安装或更新 GitHub skill。")


def is_git_repo(path: pathlib.Path) -> bool:
    result = run(["git", "rev-parse", "--is-inside-work-tree"], cwd=path, check=False)
    return result.returncode == 0 and result.stdout.strip() == "true"


def remote_url(path: pathlib.Path) -> str | None:
    result = run(["git", "remote", "get-url", "origin"], cwd=path, check=False)
    if result.returncode != 0:
        return None
    return result.stdout.strip()


def record_install(path: pathlib.Path) -> dict:
    result = run([sys.executable, "scripts/version_check.py", "--record-install"], cwd=path)
    return json.loads(result.stdout)


def update_existing(path: pathlib.Path) -> dict:
    result = run([sys.executable, "scripts/version_check.py", "--update"], cwd=path)
    return json.loads(result.stdout)


def install_skill(path: pathlib.Path) -> dict:
    ensure_git_available()
    path = path.expanduser().resolve()

    if path.exists() and any(path.iterdir()):
        if not is_git_repo(path):
            return {
                "status": "install_blocked",
                "reason": "目标目录已存在且不是 Git 仓库，已停止安装以避免覆盖本地文件。",
                "installDir": str(path),
            }
        actual_remote = remote_url(path)
        if normalize_repo_url(actual_remote) != normalize_repo_url(REPO_URL):
            return {
                "status": "install_blocked",
                "reason": "目标目录已存在，但 origin 不是 aizhangle-agent-design 仓库。",
                "installDir": str(path),
                "actualRepository": actual_remote,
                "expectedRepository": REPO_URL,
            }
        update_result = update_existing(path)
        if update_result.get("status") not in {"updated", "current"}:
            return {"status": "install_update_blocked", "installDir": str(path), "updateResult": update_result}
        record = record_install(path)
        return {"status": "installed_existing", "installDir": str(path), "updateResult": update_result, "record": record}

    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists():
        path.rmdir()
    try:
        clone = run(["git", "clone", "--branch", BRANCH, "--single-branch", REPO_URL, str(path)])
    except subprocess.CalledProcessError as error:
        return {
            "status": "install_failed",
            "reason": "git clone 执行失败。",
            "installDir": str(path),
            "stdout": error.stdout,
            "stderr": error.stderr,
        }
    record = record_install(path)
    return {"status": "installed", "installDir": str(path), "gitOutput": clone.stdout.strip(), "record": record}


def main() -> int:
    parser = argparse.ArgumentParser(description="Install or update the aizhangle-agent-design skill.")
    parser.add_argument("--install-dir", default=str(default_install_dir()), help="Target skill directory.")
    args = parser.parse_args()

    try:
        result = install_skill(pathlib.Path(args.install_dir))
    except Exception as error:
        result = {"status": "install_failed", "reason": str(error)}
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
