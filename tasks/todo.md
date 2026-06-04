# Bottom Bar Figma Test Data And Naming Correction

## Done Criteria
- Inspect the current selected Figma items and the provided `12:7933` reference node before editing generated test frames.
- Replace placeholder market numbers in generated Bottom Bar tests with realistic data modeled from the selected source items.
- Rename generated test frames to follow the selected/reference item naming style instead of generic English-only test names.
- Update both generated `个股场景关联问` text bubbles to `你盯这只股票好久啦！不如先模拟交易试试。`
- Record the correction pattern in `tasks/lessons.md` so future Figma tests use selected source item names and data.
- Verify the updated Figma frames and record the review.

## Plan
- [x] Review repository instructions and current task notes.
- [x] Inspect selected Figma items/reference node and generated test frames.
- [x] Apply Figma updates for data, frame names, and related-question copy.
- [x] Update `tasks/lessons.md` and this review section.
- [x] Verify Figma metadata/screenshot after edits.

## Review
- Inspected reference node `12:7933`: `bottom bar/item/默认场景/交易`, variant `交易类型=模拟, icon版=Off, 选中态=Off, Dark=On`.
- Renamed the generated frames to Chinese / component-semantic names:
  - `Bottom Bar Test / 首页场景 / AI助手入口`
  - `Bottom Bar Test / 个股场景关联问 / 个股详情`
  - `Bottom Bar Test / 预交易 / 模拟入口 / 交易类型=模拟, icon版=Off, 选中态=Off, Dark=On`
  - `Bottom Bar Test / 输入胶囊 / 长按语音态`
  - `Bottom Bar Test / review-test / 失败案例`
- Replaced generated Bottom Bar instance placeholders in the two `个股场景关联问` examples:
  - `文字文字` -> `上证指数`
  - `1000.00` -> `3083.97`, `+8.87`, `+0.22%`
  - bubble text -> `你盯这只股票好久啦！不如先模拟交易试试。`
- Updated visible Pre-trade labels to reference the selected simulated trading item.
- Added the new related-question copy example to the Bottom Bar component brief, scenario brief, and case study.
- Added `tasks/lessons.md` so future Figma generation uses selected reference item names and realistic sample data instead of placeholders.
- Verification passed: Figma metadata reports five test frames, no `1000.00` or `文字文字` placeholder text remains in generated tests, and screenshot review showed no obvious overflow.
- Validation passed for edited YAML files with Ruby YAML.

---

# Bottom Bar Figma Generation Chain Test

## Done Criteria
- Read the requested routing, design, authoring, canon, Figma binding, asset, scenario, and case-study sources before generating frames.
- Do not edit Bottom Bar authoring, canon, checklist, binding, or unrelated repository structure.
- Generate 3 to 5 Figma test frames in the provided `设计仓库` file.
- Prefer confirmed Bottom Bar Figma component instances; if instantiation cannot be confirmed, label output as `binding pending` / `prototype fallback`.
- Cover Home AI Entry, Stock Detail, Pre-trade, Input States, and Review Failure Case.
- For each frame, document scenario, variant/state, source files, binding status, checklist result, and manual confirmation gaps.
- Verify the created Figma frames and add a review section here before reporting back.

## Plan
- [x] Review existing lessons and repository routing rules.
- [x] Read requested Bottom Bar source files and identify confirmed vs pending bindings.
- [x] Inspect Figma file/library availability for Bottom Bar component import.
- [x] Generate Bottom Bar test frames using confirmed instances when available, otherwise clearly marked fallback frames.
- [x] Verify created frames through Figma metadata/screenshot or plugin inspection.
- [x] Run checklist-based review and prepare final test report.

## Review
- Created five Figma test frames inside the provided `设计仓库` target frame `119:65144` (`测试`):
  - `Bottom Bar Test / Home AI Entry`
  - `Bottom Bar Test / Stock Detail`
  - `Bottom Bar Test / Pre-trade`
  - `Bottom Bar Test / Input States`
  - `Bottom Bar Test / Review Failure Case`
- Confirmed Figma nodeId access works for recorded Bottom Bar components and variants, including `12:10172`, `12:10173`, `12:10372`, `12:7621`, and `12:7622`.
- ComponentKey import failed in the MCP environment for the recorded Bottom Bar family keys, so this run used accessible confirmed component nodeIds to create instances.
- Applied DESIGN.md MCP font fallback because `PingFang SC` and `涨乐财富体` were unavailable in the MCP runtime; instance text was normalized to `Noto Sans SC` / `Noto Sans HK`.
- Verified by Figma metadata that all five frames exist and that the first four include real `INSTANCE` nodes; the review failure case is intentionally hand-drawn and marked as `review-test fail`.
- Screenshot review passed for nonblank rendering, visible Bottom Bar placement, and no obvious clipping. Stock Detail was corrected from dark Bottom Bar to light Bottom Bar to keep theme pairing valid.
- Checklist outcome: four functional test frames pass the intended Bottom Bar routing checks with noted binding gaps; `Review Failure Case` intentionally fails P0/P1 checks for fake component use, crowded controls, unsafe trade copy, and missing safe area.
- No authoring, canon, checklist, binding, or unrelated repository source files were changed.

---

# Bottom Bar Authoring Expansion

## Done Criteria
- Read the repository routing rules and Bottom Bar authoring sources before editing generated/canonical files.
- Keep `authoring/` untouched, especially human-owned `01_HUMAN_REQUIRED` content.
- Expand only Bottom Bar targets: component meta, review checklist, Figma binding, asset manifest, generated component index, and indexes only if needed.
- Copy confirmed authoring facts into canon/bindings; keep unresolved human decisions as `TODO_HUMAN_CONFIRM` and unresolved Figma facts as `TODO_VERIFY_WITH_FIGMA`.
- Do not change unrelated components or restructure the repository.
- Validate JSON and YAML parsing after edits.

## Plan
- [x] Inspect routing files: `SKILL.md`, `DESIGN.md`, `AGENTS.md`, `manifest.json`, authoring workflow docs.
- [x] Scan Bottom Bar component brief, scenario briefs, case studies, and current target files.
- [x] Identify fields that need synchronization: usage, scenarios, risks, zones, states, variants, slots, assets, Figma families, and review checks.
- [x] Update Bottom Bar canonical meta and checklist.
- [x] Update Bottom Bar Figma and asset bindings.
- [x] Update generated component docs index if needed.
- [x] Run JSON/YAML parsing validation.
- [x] Add a review section with what changed and remaining TODOs.

## Review
- Updated `canon/components/bottom-bar.meta.yaml` with Bottom Bar purpose, usage, zones, risk boundaries, layout contract, component families, scenarios, variants, states, slots, token references, asset references, source references, checklist link, and Figma binding link.
- Updated `canon/checklists/bottom-bar-review.yaml` with executable P0/P1/P2/P3 review questions from the Bottom Bar component brief, scenario briefs, and case studies.
- Updated `bindings/figma/components.yaml` with confirmed Bottom Bar family bindings and confirmed variant keys available in authoring; kept unverified Figma facts as `TODO_VERIFY_WITH_FIGMA`.
- Updated `bindings/assets/manifest.yaml` with Bottom Bar background, icon, example, positive-example, annotation, and external home-entry screenshot references; external screenshots remain `TODO_HUMAN_CONFIRM`.
- Updated `docs/generated/components/index.md` with an index-only Bottom Bar entry.
- Did not edit `authoring/` files or unrelated component files.
- Existing `canon/components/index.yaml` and `canon/checklists/index.yaml` already contained Bottom Bar, so no index change was needed there.
- Validation passed: 72 YAML files parse with Ruby YAML; all JSON files parse with `jq`.
- Remaining human confirmation: whether `/Users/penn/Downloads/IMG_5422.PNG` and `/Users/penn/Downloads/IMG_5423.PNG` should become formal repo assets.
- Remaining Figma verification: other observed item family node/key details, home-entry expanded frame node IDs, stock detail/pretrade scenario example node IDs, missing main variant component keys, and companion link text target.
