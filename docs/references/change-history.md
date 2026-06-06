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
| 2026-06-06 16:55 Asia/Shanghai | Codex | Re-verified and repaired AI Chat related-question Figma binding after the component mapping changed; updated mapping to the current linked component key and text property. | `bindings/figma/components.yaml`, `tasks/todo.md`, `tasks/lessons.md` | Figma metadata/screenshot verification; YAML parse |
| 2026-06-06 16:20 Asia/Shanghai | Codex | Hardened Figma generation prompt and checklist after AI Chat repair comparison: confirmed component usage now requires source evidence, prior generated-frame clones no longer count as component usage, partial components require minimal fallback, token source evidence is required, and font blockers must be recorded. | `agents/openai.yaml`, `canon/checklists/figma-generation-review.yaml`, `tasks/todo.md` | `ruby tools/sync-openai-checklist-map.rb`; YAML parse; mapped rule ID validation |
| 2026-06-06 10:32 Asia/Shanghai | Codex | Added routing reminder for OpenAI prompt/checklist sync so Agents and humans know to run the mapping script after prompt changes. | `SKILL.md`, `tools/README.md`, `canon/checklists/figma-generation-review.yaml` | `ruby tools/sync-openai-checklist-map.rb`; YAML/JSON parse |
| 2026-06-05 23:50 Asia/Shanghai | Codex | Added OpenAI prompt to Figma generation checklist sync so prompt constraints become second-pass review rules. | `agents/openai.yaml`, `canon/checklists/figma-generation-review.yaml`, `canon/checklists/index.yaml`, `tools/sync-openai-checklist-map.rb`, `manifest.json`, `SKILL.md`, `DESIGN.md` | `ruby tools/sync-openai-checklist-map.rb`; YAML/JSON parse; custom checklist mapping validation |
| 2026-06-05 22:45 Asia/Shanghai | Codex | Added change-history workflow and routing so future collaborators record structural changes. | `docs/references/change-history.md`, `manifest.json`, `SKILL.md`, `AGENTS.md` | `manifest.json` parsed successfully |
