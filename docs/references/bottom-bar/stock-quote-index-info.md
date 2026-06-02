# Stock Quote Index Info Bottom Bar

Use this file only when `stockQuotePage` includes index information above the input/action row, such as `quoteInfoRow`, `indexInfo`, 指数信息, or 指数信息行.

Do not apply these rules to `primaryPage`, `chatPage`, or stock quote bottom bars that do not include index information.

## Rule: Use layered bottom-bar structure

Generate stock quote index-info bottom bars as layered components, not as a single visual approximation.

Why:
The correct design depends on separating background material, index information, actions, and system safe area. Merging these layers causes wrong spacing, clipped shadows, incorrect strokes, and extra blank areas.

Required layer order, back to front:

`backgroundAsset/shadow layer` -> `quotePanel/body panel layer` -> `quoteInfoRow` -> `divider` -> `operationRow` -> `safeArea`

Verify:

- `backgroundAsset/shadow layer` uses `assets/bottom-bar/backgrounds/bottom-bar-stock-quote-bg-light.svg` or `assets/bottom-bar/backgrounds/bottom-bar-stock-quote-bg-dark.svg`.
- `backgroundAsset/shadow layer` height is `179px`.
- `backgroundAsset/shadow layer` is not clipped by top rounded corners.
- `quotePanel/body panel layer` sits above the shadow/background layer.
- `quotePanel/body panel layer` owns the top radius `20px 20px 0 0`.
- `quoteInfoRow` contains index name, numeric group, and expand/collapse arrow.
- `divider` is a separate divider layer between information and operation rows.
- `operationRow` contains input state, input-mode toggle, and buy/sell/cancel actions.
- `safeArea` is the internal iOS bottom area and does not contain business controls.
- Do not merge the shadow/background asset and `quotePanel` into one clipped container.
- Do not use outer `overflow:hidden` plus `border-radius` in a way that clips the shadow/background top.

## Rule: Use one-line index information structure

Index information uses one horizontal row, not a two-column index card layout.

Why:
The stock quote bottom bar is a compact action surface. Dual index cards compete with the input and trading actions.

Required structure:

`指数名称 + 点位 + 涨跌额 + 涨跌幅 + 展开/收起箭头`

Verify:

- Index name appears on the left.
- The right numeric group contains point value, change amount, and change percentage.
- Expand/collapse arrow appears at the end.
- Do not render a two-column card such as `上证指数 / 深证成指`.

## Rule: Apply stock quote index typography

Use the approved typography and financial color semantics for the index row.

Why:
The index row combines Chinese text, financial numbers, trend values, and a system arrow. Each part needs the correct font and token.

Verify:

- Index name uses PingFang SC Regular `400`, `13px`, token `xzl/color/text/primary`.
- Point value, change amount, and change percentage use 涨乐财富体 Regular `13px`.
- Rising or positive values use `xzl/color/primary/red`.
- Falling or negative values use `xzl/color/primary/green`.
- Expand/collapse arrow uses token `xzl/color/text/tertiary`.
- Expand/collapse arrow token resolves to light `#6D778B` and dark `50% #FFFFFF`.

## Rule: Use component-library expand/collapse arrows

Stock quote index-info expand/collapse arrows use the shared icon component arrow shapes and token color binding.

Why:
The arrow direction, color, and size must be stable across Figma, frontend, and standalone HTML outputs. Fixed-color SVGs or CSS masks often render invisibly in local previews.

Verify:

- For the collapsed stock quote indexInfo row, where tapping expands the content upward, use `assets/icons/xzl-arrow-up.svg`.
- For the expanded stock quote indexInfo row, where tapping collapses the expanded content back down, use `assets/icons/xzl-arrow-down.svg` unless product requirements specify a different collapse direction.
- Do not default to `xzl-arrow-down.svg` just because the state is collapsed; choose the arrow by the next motion direction in this bottom bar.
- Arrow color is bound to `xzl/color/text/tertiary` (`text-d`).
- Light mode arrow resolves to `#6D778B`.
- Dark mode arrow resolves to `50% #FFFFFF`.
- Rendered arrow visual size is `18x18`.
- The `18x18` size matches `assets/templates/bottom-bar-component.json.iconMetrics.upDownExpand.visualSize`.
- Do not use `13x13` for stock quote index-info arrows.
- Do not use fixed white arrow assets without token color binding.
- Do not replace the shared arrow shape with a hand-drawn or approximate icon.

## Rule: Apply index row spacing

Use the approved index-info row spacing and divider geometry.

Why:
The index row must remain readable while leaving enough room for the operation layer below.

Verify:

- Index name is `18px` from the screen left edge.
- Expand arrow is `18px` from the screen right edge.
- Spacing between the three numeric values and the arrow is `12px`.
- Top background to index content spacing is `7px`.
- Index content to divider spacing is `7px`.
- Divider to operation area spacing is `15px`.
- Divider spans the full width.
- Divider thickness is `0.5px`.
- Divider color uses `xzl/color/input/background`.

## Rule: Controls sit directly above safe area

The operation layer sits directly above the internal safe-area region.

Why:
Extra undeclared blank space below the operation layer makes the bottom bar look detached and breaks fixed-bottom layout.

Verify:

- No extra business-area blank space appears below the operation layer.
- The remaining space from operation-layer bottom to screen bottom is only the `34px` iOS safe area.
- If using a box-model calculation, business content height equals `topGap + indexRow + indexToDividerGap + divider + dividerToActionsGap + actionHeight`.
- For the current index-info structure, the calculation is `7 + 18 + 7 + 0.5 + 15 + 48 = 95.5px`.
- Do not treat `95.5px` as the fixed height for all stock quote pages; it is the calculated business content height for this index-info structure.
- The reusable rule is that there is no extra internal blank space beyond declared rows, gaps, divider, actions, and safe area.

## Rule: Use stock quote index-info background material

Use the stock quote index-info background material only for stock quote bottom bars that include index information.

Why:
This material is part of the index-info stock quote surface. Applying it to every bottom bar would overfit a page-specific design.

Layer responsibilities:

- `backgroundAsset/shadow layer` provides the approved stock-quote shadow/background asset and remains unclipped.
- `quotePanel/body panel layer` provides the visible panel material and owns only the panel top radius.
- Stroke is an independent stroke layer on `quotePanel`, not a regular border that approximates gradient direction.

Light quotePanel:

- `border-radius: 20px 20px 0 0`
- `background: linear-gradient(190deg, #FFF 10.1%, #FFF 90.77%)`
- `box-shadow: 0 0 20px 0 rgba(107, 186, 240, 0.25)`
- `backdrop-filter: blur(15px)`
- Stroke is an independent `0.5px` gradient stroke layer.
- Stroke direction matches the panel background direction: `190deg`.
- Do not replace the independent gradient stroke with a plain solid border.
- Light quotePanel must include two independent blurred shape layers; do not approximate them with `radial-gradient`, `box-shadow`, a combined background layer, or a single merged glow.

Light blurred shape layers:

- Shape 1: size `218x106`, fill `#758AA0`, opacity `0.5`, blur `100px`.
- Shape 2: size `259.854x106`, fill `#BACCDF`, opacity `0.4`, blur `60px`.
- Both shapes sit inside `quotePanel/body panel layer`.
- Both shapes sit below content layers and below the stroke layer.
- Figma output represents the two glows as independent shape nodes.
- HTML prototype output represents the two glows as independent DOM layers, for example `.light-blob.one` and `.light-blob.two`.
- Do not replace the two independent shape layers with CSS `radial-gradient`.

Dark quotePanel:

- `border-radius: 20px 20px 0 0`
- Background exactly uses the Figma Inspect material:
  - `linear-gradient(160deg, rgba(36, 54, 103, 0.40) -7.33%, rgba(18, 26, 54, 0.01) 52.57%)`
  - `#051027`
- Stroke is an independent gradient stroke layer.
- Stroke exactly uses `linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0))`.
- Do not render the dark stroke as a solid white border.
- Do not let the stroke layer cover or replace the dark panel background.
- Dark shadow/background asset is not clipped by top rounded corners.

Verify:

- Background material layers sit below the content layers.
- Background color shapes do not cover index text, input, or buy/sell/cancel actions.
- Light blurred shapes are separate renderable layers, not radial-gradient approximations.
- Blurred shape positions come from Figma layers or are mapped proportionally to the current frame.
- Shadow/background asset is not rounded or clipped at the top.
- Top radius appears only on `quotePanel/body panel layer`.
- Do not hardcode coordinates from a single prototype width.
