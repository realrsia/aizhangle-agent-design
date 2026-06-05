# OpenAI Prompt To Figma Generation Checklist Sync

## Done Criteria
- Add an artifact-level Figma generation review checklist for second-pass validation.
- Map `agents/openai.yaml` prompt sections to checklist rule IDs.
- Add a sync tool so the mapping in `agents/openai.yaml` can refresh checklist metadata.
- Register the checklist in checklist indexes and generation routing docs.
- Validate YAML/JSON and run the sync tool.

## Plan
- [x] Inspect current checklist schema, visual checklist style, OpenAI YAML, and routing docs.
- [x] Create `canon/checklists/figma-generation-review.yaml`.
- [x] Add OpenAI YAML mapping metadata and sync policy.
- [x] Add sync script and update index/routing docs.
- [x] Run sync and validation.
- [x] Record change history and review.

## Review
- Added `canon/checklists/figma-generation-review.yaml` with 12 second-pass Figma generation rules.
- Added `interface.checklist_system` to `agents/openai.yaml`, mapping prompt sections to checklist rule IDs.
- Added `tools/sync-openai-checklist-map.rb` to sync `promptToChecklistMappings` into the checklist `sourcePromptMappings`.
- Registered the checklist in `canon/checklists/index.yaml`, `manifest.json`, `SKILL.md`, and `DESIGN.md`.
- Appended change history in `docs/references/change-history.md`.
- Validation passed: sync tool ran, all YAML parsed, `manifest.json` parsed, checklist has required fields, and all mapped rule IDs exist.

---

# Skill Evaluation Figma Dark Pages For Docs 01 And 03

## Done Criteria
- Read `01_GUI交易前置校验.md` and `03_AI对话支持多模态.md`.
- Select one representative dark-theme scene from each document.
- Generate two visual pages in the `Skill评测` Figma file.
- Use confirmed existing components where safe; do not expose uneditable placeholder component text.
- Use fixed top/bottom chrome and nested Auto Layout content areas.
- Mark unbound modules as `未绑定组件`.
- Put binding/review notes in right-side annotation cards.
- Verify screenshots.

## Plan
- [x] Select 03 representative scene: 图片识股加自选.
- [x] Select 01 representative scene: 半屏下单前置校验 / 科创板权限未开通.
- [x] Generate two dark pages and right-side annotations in Figma.
- [x] Verify screenshots and record review.

## Review
- Generated in `Skill评测`:
  - `Skill Eval / 03 AI对话主界面 / 深色 / 图片识股加自选` (`68:59966`)
  - `Skill Eval / 01 GUI交易前置校验 / 深色 / 半屏买入权限校验` (`68:60319`)
- Added right-side annotation cards:
  - `Annotation / Skill Eval / 03 AI对话主界面 / 图片识股` (`68:60312`)
  - `Annotation / Skill Eval / 01 GUI交易前置校验 / 半屏买入权限校验` (`68:60598`)
- Verified screenshots for both frames.
- Confirmed no dummy placeholder text remains in the generated screen bodies.
- Used confirmed components where safe; unbound business/result/trading modules are explicitly marked `未绑定组件`.
- Trading high-risk action is not represented as an ordinary button; it remains pending/blocked until `trading-action-button` binding is confirmed.

---

# Authoring Structure Expansion TODO

## Scope

- [x] Read Feishu wiki structure guidance through `lark-cli`.
- [x] Inspect updated local authoring files for AI Chat, Page Background, Trading modules, and Top Nav drift case.
- [x] Update only required canon/checklist/binding/docs files for this authoring batch.
- [x] Keep `authoring/` unchanged.
- [x] Run YAML/JSON parse validation on changed structured files.
- [x] Record final review notes and unresolved verification items.

## Done Criteria

- Page Background has canon, checklist, Figma binding, and index entries.
- AI Chat component bindings and rules reflect the current dialog-flow source nodes.
- Trading module rules keep source priority and top-nav drift risks explicit.
- No unrelated component files are changed.
- YAML/JSON parsing succeeds for updated files.

## Review

- Added Page Background canon/checklist/index/binding entries from updated authoring.
- Synced AI Chat background/input/topbar/message-feed canon and Figma bindings to current design-repository dialog-flow nodes.
- Kept message-feed embedded business content refs as `TODO_VERIFY_WITH_FIGMA` where the updated brief no longer confirms component keys.
- Resolved Figma verification items with Figma Plugin API and replaced remaining Page Background human-confirm item with fixed top 390x844 plus bottom-color long-page extension.
- Did not modify `authoring/` files.
- YAML/JSON parse validation passed with Ruby.
