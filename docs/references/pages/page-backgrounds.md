# Page Backgrounds

## Rule: Classify the page background before generating content

Choose the background by explicit scene first, then by explicit page list, then by route depth. If the route is unknown, infer from visible structure and declare the inference in the output.

Why:
New Zhanle page backgrounds encode page hierarchy. Guessing from visual similarity alone can assign the wrong shell to 自选, 持仓, or trading pages.

Verify:

- Special conversation sheet backgrounds override normal page hierarchy.
- Explicit page assignments override route-depth inference.
- Route-depth inference is identified as an inference when no product route is provided.
- The output lists the selected background category and the evidence used to select it.

## Rule: Use level-specific backgrounds

Use these background assignments:

- Level 1, currently confirmed: 首页、AI 对话、早点听、涨停猎手、事件捕手. Use the confirmed `新版工作区/一级` Figma page-shell/background component.
- Pending专项治理: trading and stock-detail backgrounds are not yet complete in the HTML runtime. Do not infer or reuse the level-1 background for them until their variants are confirmed.
- Level 3: pages entered from a level-2 page. Use the design token `background-a` (`xzl/color/background/page`, source `xzl-color-background-a`) instead of an image.

Why:
Level 1 and level 2 pages use the maintained Figma background shell when available; level 3 pages use the plain page background token.

Verify:

- 首页、AI 对话、早点听、涨停猎手、事件捕手 use the confirmed level-1 background.
- Trading and stock-detail pages remain pending until their exact background variants are added.
- Level-3 pages use `background-a` and do not use the level-1 or level-2 shell treatment.

## Rule: Display page background shells at viewport size

When a Figma background shell is cloned or an HTML preview fallback is used, place it at the viewport design size.

Why:
Using raw export dimensions directly can break the `390 x 844` viewport.

Verify:

- Level-1 and level-2 page backgrounds display at `390 x 844`.
- Background images are placed below the content layer.
- Do not add a background color, overlay, opacity layer, blur, or gradient mask on top of these page backgrounds.

## Rule: Use conversation sheet backgrounds only on the sheet container

Agent and temporary conversation backgrounds belong to the bottom sheet or conversation panel, not the full underlying page.

Why:
Conversation sheets have their own fixed dimensions and should not replace the page-level background behind them.

Verify:

- Agent conversation sheet uses the confirmed Figma sheet background, displayed at `390 x 760`.
- Temporary conversation sheet uses the confirmed Figma sheet background, displayed at `390 x 674`.
- The active light/dark mode selects the matching sheet background variant.
- The sheet background sits below the sheet header and sheet content.
- Minor source-asset pixel differences caused by export rounding are allowed; displayed design dimensions must match the specified 1x size.

## Rule: Keep transparent headers visually continuous with the current background

Page headers are transparent by default. When fixed during scroll, the header background must be a continuation or crop of the current page or sheet background, not a new unrelated color.

Why:
The header should feel integrated with the page shell while staying legible during scroll.

Verify:

- Header layers do not introduce unrelated fills over level-1, level-2, or sheet backgrounds.
- Fixed header state preserves the current background image/token area behind it.
- Level-3 fixed headers use `background-a` continuity.
