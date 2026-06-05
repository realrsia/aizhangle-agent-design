# AI Chat Authoring Expansion

## Done Criteria
- Read repository routing rules, visual rules, authoring workflow, AI Chat component briefs, AI Chat scenario brief, and relevant case-study availability before editing expanded files.
- Keep `authoring/` untouched, especially human-owned `01_HUMAN_REQUIRED` content.
- Expand only AI Chat targets: Chat Background, Chat Input, Chat Topbar, and Message Feed component meta, review checklists, Figma bindings, generated component index, component/checklist indexes, and asset manifest only if new asset references require it.
- Treat scenario content as usage and composition context, not as component identity.
- Copy confirmed authoring facts into canon/bindings; keep unresolved human decisions as `TODO_HUMAN_CONFIRM` and unresolved Figma facts as `TODO_VERIFY_WITH_FIGMA`.
- Do not change unrelated components or restructure the repository.
- Validate JSON and YAML parsing after edits.

## Plan
- [x] Inspect routing files: `SKILL.md`, `DESIGN.md`, `AGENTS.md`, `manifest.json`, authoring workflow docs, and lessons.
- [x] Scan AI Chat component briefs, AI Chat scenario brief, relevant case studies, and current target files.
- [x] Identify fields to synchronize: purpose, scenarios, risks, zones, states, variants, slots, tokens/assets, Figma bindings, cross-component composition, and review checks.
- [x] Create/update the four AI Chat canonical component meta files.
- [x] Create/update the four AI Chat review checklist files.
- [x] Update Figma and asset bindings only for the four AI Chat components.
- [x] Update generated component docs index and component/checklist indexes.
- [x] Run JSON/YAML parsing validation.
- [x] Add a review section with changed files, source provenance, remaining TODOs, and validation results.

## Review
- Created `canon/components/chat-background.meta.yaml`, `canon/components/chat-input.meta.yaml`, `canon/components/chat-topbar.meta.yaml`, and `canon/components/message-feed.meta.yaml`.
- Created `canon/checklists/chat-background-review.yaml`, `canon/checklists/chat-input-review.yaml`, `canon/checklists/chat-topbar-review.yaml`, and `canon/checklists/message-feed-review.yaml`.
- Updated `bindings/figma/components.yaml` with four AI Chat bindings:
  - Chat Background: confirmed repository background component group and four confirmed variants.
  - Chat Input: partial binding through Bottom Bar dialog variants, with non-default states and text overrides left for Figma verification.
  - Chat Topbar: partial binding from dialog GUI instance, with formal design-repository source still pending.
  - Message Feed: semantic structure binding, with child component candidates, business content candidates, usage frames, and fallback warnings.
- Updated `bindings/assets/manifest.yaml` with `asset.tokens.chat-fidelity` because `bindings/assets/files/design-tokens/chat-fidelity-tokens.json` exists locally and is referenced by Message Feed / AI Chat authoring.
- Updated `canon/components/index.yaml`, `canon/checklists/index.yaml`, and `docs/generated/components/index.md` with index-only entries for the four AI Chat components.
- Did not edit `authoring/` files or unrelated component canon/checklist files.
- Relevant case-study files for ai-chat/chat/message-feed/chat-input/chat-topbar/chat-background were not present in `authoring/case-studies/`, so no case-study content was imported.
- Remaining human confirmation: none newly added for AI Chat; existing Bottom Bar external screenshot confirmations remain unrelated in the asset manifest.
- Remaining Figma verification: Chat Background exact token/variable binding; Chat Input typography, non-default states, and text override targets; Chat Topbar formal repository source and light variant details; Message Feed typography, reasoning panel ownership, text override targets, and fallback business/chart/table component status.
- Validation passed: 89 YAML files parse with Ruby YAML; all JSON files parse with `jq`.
