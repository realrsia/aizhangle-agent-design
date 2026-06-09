# Tools

Reserved for importers, exporters, validators, and build scripts.

## Prompt / Checklist Sync

- `sync-openai-checklist-map.rb`: run `ruby tools/sync-openai-checklist-map.rb` after editing `agents/openai.yaml` prompt rules or `interface.checklist_system.promptToChecklistMappings`.
- The script copies OpenAI prompt-to-rule mappings into `canon/checklists/figma-generation-review.yaml` so Figma generation constraints stay available as second-pass checklist items.

Recommended next scripts:

- validate canonical YAML/JSON against `schemas/`
- generate CSS from DTCG-style token JSON
- generate Markdown docs from canonical component and scenario files
- verify Figma variable/component bindings
