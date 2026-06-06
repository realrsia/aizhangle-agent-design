# Related Question Component Mapping Repair

## Done Criteria
- Identify the correct linked related-question component instance and the broken new-version fallback nodes.
- Repair the intended rightmost copied boards, not stale older frames.
- Update `bindings/figma/components.yaml` to the current related-question component source evidence.
- Verify screenshot and metadata after repair.

## Plan
- [x] Inspect current related-question bindings and scan Figma candidates.
- [x] Revert accidental edit on the older frame.
- [x] Locate the intended rightmost copied doc 03 boards.
- [x] Replace related-question fallback blocks with true linked component instances.
- [x] Update Figma binding metadata.
- [x] Verify screenshots and YAML.

## Review
- Correct linked component evidence found from existing instances: `mainComponentId: 11:3623`, `mainComponentKey: 90d4a50a7da35de7572a6d0bd18dbad4d0f4fa88`, text property `文字内容#21900:6`, `Dark=On`.
- Updated `bindings/figma/components.yaml` for `message-feed.related-question`.
- Repaired intended rightmost copied boards:
  - `26:9767` / `03 AI多模态 / 图片识股加自选 / Dark`
  - `26:10406` / `03 AI多模态 / 金融PDF分析结果 / Dark`
- Replaced fallback nodes `26:10043` and `26:10588` with linked instances `123:17049`, `123:17053`, `123:17057`, and `123:17061`.
- Old fallback nodes are hidden and renamed as replaced evidence.
- Screenshots and metadata verified; YAML parse passed for `bindings/figma/components.yaml`.

---

# Component Source Evidence And Checklist Hardening

## Done Criteria
- Add AI chat repair-case lessons into `agents/openai.yaml`.
- Add checklist rules for original component source evidence, generated-frame clone misuse, minimal partial fallback, token source evidence, and font blockers.
- Sync `agents/openai.yaml` prompt mappings into `canon/checklists/figma-generation-review.yaml`.
- Validate YAML and mapped rule IDs.

## Plan
- [x] Update OpenAI prompt mappings and generation rules.
- [x] Add new Figma generation checklist rules.
- [x] Run checklist mapping sync.
- [x] Validate YAML and mapped rule IDs.
- [x] Record review.

## Review
- Updated `agents/openai.yaml` to require component source evidence and to reject prior generated frames as confirmed component sources.
- Added stricter partial-component handling: verified subcomponents must be used before fallback, and fallback must cover only the missing gap.
- Added token-source rules: hardcoded fallback colors must be marked token pending and cannot be reported as token compliant.
- Added font blocker handling: missing fonts, attempted steps, affected component, and final handling must be recorded.
- Added five new checklist rules to `canon/checklists/figma-generation-review.yaml` and synced prompt mappings with `ruby tools/sync-openai-checklist-map.rb`.
- Validation passed: YAML parsed and all mapped checklist rule IDs exist.

---

# AI Chat Flow Copy And Component Repair Comparison

## Done Criteria
- Keep the existing two AI chat flow frames as baseline problem examples.
- Duplicate the baseline frames and only repair the duplicated versions.
- Use original confirmed component keys/source instances where available, not previously generated lookalikes.
- Replace broad self-drawn message areas with verified message-feed subcomponent instances where possible.
- Mark only the genuinely missing/token-pending parts as fallback.
- Add right-side comparison notes and verify screenshots/metadata.

## Plan
- [x] Record the failure cause and comparison goal.
- [x] Probe/import original AI Chat component keys from bindings.
- [x] Duplicate the two existing frames and repair only the copies.
- [x] Run visual and metadata checks.
- [x] Record review.

## Review
- Kept the baseline frames unchanged:
  - `96:68657` / `Skill Eval / AI对话流测试 / 黑板 / 盘前策略复盘`
  - `96:85060` / `Skill Eval / AI对话流测试 / 黑板 / 财报解读追问`
- Created repaired comparison copies:
  - `105:54030` / `Skill Eval / AI对话流测试 / 黑板 / 盘前策略复盘 / 修复对比版`
  - `105:71842` / `Skill Eval / AI对话流测试 / 黑板 / 财报解读追问 / 修复对比版`
- Added comparison annotations:
  - `105:63540`
  - `105:81307`
- Repair evidence:
  - Imported original componentKey instances for `component.chat-background` Dark=On and `component.chat-topbar` Dark=On.
  - Imported original componentKey instances for `message-feed.assistant-avatar` and `message-feed.reasoning-panel`.
  - Preserved the real chat-input instance because direct `chat-input` import/append is blocked by unavailable PingFang fonts in the current execution environment.
  - Kept answer body, business data cards, and related-question copy areas as fallback/pending where keys or font-safe overrides are still incomplete.
- Final metadata scan passed for the repaired copies: component-source evidence is present, fixed zones are absolute, screen-body repair notes were removed, and remaining fallback areas are explicitly labeled.

---

# Two AI Chat Flow Dark Figma Tests

## Done Criteria
- Read repository routing, AI Chat scenario, Figma bindings, and generation checklist before drawing.
- Generate two dark-theme AI dialogue flow test frames in `Skill评测`.
- Prefer confirmed/available component instances for chat background, topbar, and chat input.
- Use nested Auto Layout for message flow and content cards; mark partial/unbound modules clearly as `未绑定组件`.
- Put component coverage and checklist review in right-side annotation cards.
- Run screenshot and metadata verification, then repair P0/P1 issues.

## Plan
- [x] Read Agent prompt, AI Chat authoring/canon/bindings, checklists, and local lessons.
- [x] Probe current Figma file for reusable AI Chat component instances.
- [x] Generate two dark AI dialogue flow frames and annotations.
- [x] Run checklist metadata/screenshot review and repair.
- [x] Record review.

## Review
- Generated `Skill Eval / AI对话流测试 / 黑板 / 盘前策略复盘` (`96:68657`) and `Skill Eval / AI对话流测试 / 黑板 / 财报解读追问` (`96:85060`) in `Skill评测`.
- Added right-side annotation cards `96:77109` and `96:93687` with component coverage and second-pass checklist status.
- Used cloned confirmed instances for chat background, chat topbar, and chat input/bottom bar. Kept message-feed answer body, reasoning panel, financial data card, and related-question cards as explicitly labeled `未绑定组件` fallback.
- Second-pass repair expanded both frames to 390 x 960, fixed horizontal Auto Layout row heights, and verified screenshots.
- Final metadata scan passed: no placeholder/raw marker text, fixed chrome separated, annotation outside screen, fallback labels present.

---

# Checklist Repair For Skill Eval Figma Frames

## Done Criteria
- Check the two generated Skill评测 frames against `canon/checklists/figma-generation-review.yaml`.
- Fix P0/P1 generation issues directly in Figma where possible.
- Ensure right-side annotation cards include component coverage and checklist status.
- Re-verify screenshots after repair.
- Record review notes and remaining manual confirmations.

## Plan
- [x] Load the Figma generation checklist and current task context.
- [x] Inspect generated frame screenshots and metadata.
- [x] Repair layout, clipping, annotation, fallback, and content issues in Figma.
- [x] Re-run screenshot checks and update this review.

## Review
- Repaired `Skill Eval / 03 AI对话主界面 / 深色 / 图片识股加自选` (`68:59966`) by making fixed top/status/bottom zones absolute and keeping the content body as nested Auto Layout.
- Repaired `Skill Eval / 01 GUI交易前置校验 / 深色 / 半屏买入权限校验` (`68:60319`) by moving content below the actual top-nav render height, fixing clipped stock/result text, and hiding the underlying pending trading action while the permission sheet is open.
- Recreated right-side checklist annotation cards with component coverage and pass/manual-confirm status:
  - `Annotation / Skill Eval / 03 AI对话主界面 / 图片识股` (`85:54391`)
  - `Annotation / Skill Eval / 01 GUI交易前置校验 / 半屏买入权限校验` (`85:62166`)
- Verified final screenshots and metadata: no placeholder/TODO text, fallback labels present, fixed zones separated, nested Auto Layout retained, high-risk trading action not represented as an ordinary order button.

---

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
