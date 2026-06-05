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
| 2026-06-05 23:50 Asia/Shanghai | Codex | Added OpenAI prompt to Figma generation checklist sync so prompt constraints become second-pass review rules. | `agents/openai.yaml`, `canon/checklists/figma-generation-review.yaml`, `canon/checklists/index.yaml`, `tools/sync-openai-checklist-map.rb`, `manifest.json`, `SKILL.md`, `DESIGN.md` | `ruby tools/sync-openai-checklist-map.rb`; YAML/JSON parse; custom checklist mapping validation |
| 2026-06-05 22:45 Asia/Shanghai | Codex | Added change-history workflow and routing so future collaborators record structural changes. | `docs/references/change-history.md`, `manifest.json`, `SKILL.md`, `AGENTS.md` | `manifest.json` parsed successfully |
