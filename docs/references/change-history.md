# Change History

This file records human and Agent changes that affect repository structure, canonical rules, bindings, checklists, generated indexes, or workflow documentation.

## Recording Rule

Every collaborator should append one entry after making a meaningful change.

Required fields:

- Date and time
- Author
- Change summary
- Files or areas changed
- Validation result, if any

Agents may add entries automatically when they modify repository files. Human-authored `authoring/` content should still be attributed to the human or teammate who made the brief change.

## Entries

| Time | Author | Change | Files / Areas | Validation |
|---|---|---|---|---|
| 2026-06-10 15:15 Asia/Shanghai | Codex | Consolidated Agent-facing repository rules into `SKILL.md`, added business keyword routing, reduced `AGENTS.md` to a compatibility entry, and rewrote `README.md` in Chinese for maintainers. | `SKILL.md`, `AGENTS.md`, `README.md`, `llms.txt`, `manifest.json`, `docs/references/change-history.md`, `tasks/todo.md` | Manifest JSON parse; Skill frontmatter parse; key YAML parse; stale AGENTS-as-rule-source search; routed-file existence check |
| 2026-06-10 11:20 Asia/Shanghai | Codex | Corrected font handling rule: missing PingFang SC / ZLCaiFuTi is not a component blocker under current team-account constraints; generators must preserve real component instances/clones and substitute Noto Sans fonts instead of redrawing. | `SKILL.md`, `canon/checklists/figma-generation-review.yaml`, `tasks/lessons.md`, `tasks/todo.md` | YAML parse; manifest JSON parse; targeted rule search |
| 2026-06-10 11:01 Asia/Shanghai | Codex | Hardened from-scratch Figma generation after Skill评测 review: generation now requires a pre-write component-family map, component key probes, token-source evidence, font substitution that preserves component structure, and blocks delivery of polished all-fallback redraws when confirmed components exist. | `SKILL.md`, `canon/checklists/figma-generation-review.yaml`, `tasks/lessons.md`, `tasks/todo.md` | YAML parse; manifest JSON parse; targeted rule search |
| 2026-06-09 17:20 Asia/Shanghai | Codex | Cleaned obsolete historical source-package paths and collaborator-source naming from the active repository reading path; replaced old external asset/token references with repo-local paths and removed obsolete `sources/` source-package notes. | `README.md`, `AGENTS.md`, `DESIGN.md`, `llms.txt`, `bindings/assets/manifest.yaml`, `canon/foundations/tokens/color.tokens.json`, `sources/` | Targeted legacy-keyword search; YAML parse; JSON parse |
| 2026-06-09 17:02 Asia/Shanghai | Codex | Moved Figma generation constraints out of `agents/openai.yaml` and into `SKILL.md`; reduced `agents/openai.yaml` to Skill Creator-style UI metadata; updated checklist/tool references so `SKILL.md` is the rule source and `canon/checklists/figma-generation-review.yaml` is the executable validation surface. | `SKILL.md`, `agents/openai.yaml`, `canon/checklists/figma-generation-review.yaml`, `tools/README.md`, `tools/sync-openai-checklist-map.rb`, `DESIGN.md`, `bindings/figma/components.yaml` | YAML parse; JSON parse; targeted stale-rule-source search |
| 2026-06-09 16:36 Asia/Shanghai | Codex | Clarified repository routing responsibilities: `manifest.json` is now the machine-readable path index, while `SKILL.md` is a Chinese task router for maintainers and Agents; removed the duplicated Path Map and old source-package routing cues from the skill file. | `SKILL.md`, `manifest.json` | `python3 -m json.tool manifest.json`; targeted stale-routing search; manifest path-field existence check |
| 2026-06-09 16:36 Asia/Shanghai | Codex |沉淀 6 条 Figma 评测修复规则：真实业务文案、文字 Hug / Fill、message-feed 子内容覆盖、reasoning panel 高度覆盖、Bottom Bar 底部固定与 40px 间距；同时恢复 OpenAI prompt 到 checklist 的同步映射。 | `DESIGN.md`, `agents/openai.yaml`, `canon/checklists/figma-generation-review.yaml`, `canon/archetypes/mobile-chat-page.yaml`, `canon/components/message-feed.meta.yaml`, `canon/components/chat-input.meta.yaml` | `ruby tools/sync-openai-checklist-map.rb`; YAML parse; targeted rule search |
| 2026-06-09 15:39 Asia/Shanghai | Codex | Expanded the PR #17 message-feed authoring update into formal component, Figma binding, index, and checklist layers; added a P0 guard against importing old `系统控件` keys for agent output components. | `authoring/components/index.yaml`, `bindings/figma/components.yaml`, `canon/components/message-feed.meta.yaml`, `canon/checklists/message-feed-review.yaml`, `tasks/todo.md` | YAML parse; targeted old-key search; targeted source-area/policy search |
| 2026-06-06 16:55 Asia/Shanghai | Codex | Re-verified and repaired AI Chat related-question Figma binding after the component mapping changed; updated mapping to the current linked component key and text property. | `bindings/figma/components.yaml`, `tasks/todo.md`, `tasks/lessons.md` | Figma metadata/screenshot verification; YAML parse |
| 2026-06-06 16:20 Asia/Shanghai | Codex | Hardened Figma generation prompt and checklist after AI Chat repair comparison: confirmed component usage now requires source evidence, prior generated-frame clones no longer count as component usage, partial components require minimal fallback, token source evidence is required, and font blockers must be recorded. | `agents/openai.yaml`, `canon/checklists/figma-generation-review.yaml`, `tasks/todo.md` | `ruby tools/sync-openai-checklist-map.rb`; YAML parse; mapped rule ID validation |
| 2026-06-06 10:32 Asia/Shanghai | Codex | Added routing reminder for OpenAI prompt/checklist sync so Agents and humans know to run the mapping script after prompt changes. | `SKILL.md`, `tools/README.md`, `canon/checklists/figma-generation-review.yaml` | `ruby tools/sync-openai-checklist-map.rb`; YAML/JSON parse |
| 2026-06-05 23:50 Asia/Shanghai | Codex | Added OpenAI prompt to Figma generation checklist sync so prompt constraints become second-pass review rules. | `agents/openai.yaml`, `canon/checklists/figma-generation-review.yaml`, `canon/checklists/index.yaml`, `tools/sync-openai-checklist-map.rb`, `manifest.json`, `SKILL.md`, `DESIGN.md` | `ruby tools/sync-openai-checklist-map.rb`; YAML/JSON parse; custom checklist mapping validation |
| 2026-06-05 22:45 Asia/Shanghai | Codex | Added change-history workflow and routing so future collaborators record structural changes. | `docs/references/change-history.md`, `manifest.json`, `SKILL.md`, `AGENTS.md` | `manifest.json` parsed successfully |
