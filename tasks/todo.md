# Action Sheet Authoring Expansion

## Done Criteria
- Read the repository routing rules and Action Sheet authoring sources before editing generated/canonical files.
- Keep `authoring/` untouched, especially human-owned `01_HUMAN_REQUIRED` content.
- Expand only Action Sheet targets: component meta, review checklist, Figma binding, generated component index, component/checklist indexes, and asset manifest only if new local assets are needed.
- Copy confirmed authoring facts into canon/bindings; keep unresolved human decisions as `TODO_HUMAN_CONFIRM` and unresolved Figma facts as `TODO_VERIFY_WITH_FIGMA`.
- Do not change unrelated components or restructure the repository.
- Validate JSON and YAML parsing after edits.

## Plan
- [x] Inspect routing files: `SKILL.md`, `DESIGN.md`, `AGENTS.md`, `manifest.json`, authoring workflow docs, and lessons.
- [x] Scan Action Sheet component brief, scenario brief, case study, and current target files.
- [x] Identify fields to synchronize: purpose, scenarios, risks, zones, layout/mask rules, families, variants, slots, tokens, usage examples, Figma bindings, and review checks.
- [x] Create Action Sheet canonical meta and checklist.
- [x] Update Action Sheet Figma binding and indexes/docs.
- [x] Check asset manifest needs and avoid duplicate mappings.
- [x] Run JSON/YAML parsing validation.
- [x] Add a review section with changed files and remaining TODOs.
- [x] Re-check updated Action Sheet authoring after human/Figma TODO cleanup.
- [x] Sync resolved Action Sheet authoring facts back into canon, checklist, and Figma binding files.
- [x] Re-run JSON/YAML parsing validation after the follow-up sync.

## Review
- Created `canon/components/action-sheet.meta.yaml` with Action Sheet purpose, modal/mask contract, risk boundaries, allowed/forbidden zones, required/forbidden pairings, confirmed component families, confirmed main/mask/decoration variants, slot rules, token references, text override fields, usage examples, source refs, and checklist/binding links.
- Created `canon/checklists/action-sheet-review.yaml` with executable P0/P1/P2/P3 review questions from the Action Sheet component brief, scenario brief, and case study.
- Updated `bindings/figma/components.yaml` with confirmed Action Sheet family bindings and confirmed main/mask/decoration variants; recorded title/content/button variant groups by count and source path; removed pending business-scenario family bindings that are no longer present in authoring as unresolved Figma selections.
- Updated `canon/components/index.yaml`, `canon/checklists/index.yaml`, and `docs/generated/components/index.md` with Action Sheet entries.
- Checked `bindings/assets/manifest.yaml`; no update was needed because Action Sheet authoring has no new local asset path. It only references existing token aliases and Figma image hashes for decoration images.
- Did not edit `authoring/` files or unrelated components.
- Synced the updated close/dismissal rule from authoring: close is conditional by variant and risk, not globally required.
- Validation passed after the follow-up sync: all YAML files parse with Ruby YAML; all JSON files parse with `jq`.
- Remaining human confirmation: none found in Action Sheet authoring or Action Sheet expansion files.
- Remaining Figma verification: exact body/button/source text override property IDs; whether Figma image hashes should ever be exported into local assets.
