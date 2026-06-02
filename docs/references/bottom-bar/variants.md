# Bottom Bar Variants

Use this file to select and verify the three supported bottom-bar structures. Keep the model open for future variants by adding new variant keys instead of changing existing meanings.

## Rule: Primary-page bottom bar combines input and scene entries

Use `primaryPage` for 首页, 自选, 持仓, and other first-level page scenarios that need an AI input plus scene entry buttons.

Why:
The primary-page bottom bar is not a plain tab bar; it combines an input mode control with entry points such as 自选/持股, 交易, or 模拟交易.

Verify:

- The structure includes `inputContainer`, `inputModeToggle`, `sceneEntries`, `backgroundAsset`, and `safeArea`.
- Scene entries can show icon default, text default, or selected states depending on context.
- 自选/持股 and 交易 entries use approved bottom-bar entry assets.
- The selected scene entry exposes a state value such as `selectedSceneEntry`.
- 交易入口 is a `sceneEntry`, not a `quoteAction`.
- 交易入口 uses `assets/bottom-bar/icons/bottom-bar-entry-trade-*.png`.
- 交易入口 does not use buy, sell, or cancel action assets.

## Rule: 首页 primaryPage entry order is trade / input / watchHold

For 首页 `primaryPage`, place the primary scene entries around the input pill in the approved order.

Why:
The available scene entry pool does not define visual order. 首页 uses the trading entry as the left scenario entrance and 自选/持股 as the right scenario entrance around the input.

Verify:

- 交易入口 renders on the left side of the input.
- 自选/持股入口 renders on the right side of the input.
- The visual order is `trade` / `inputPill` / `watchHold`.
- Do not render both scene entries after the input.
- Do not infer visual order from the `sceneEntries.availablePool` array.
- `paperTrade` remains explicit-only and does not appear unless requested.
- 交易入口 remains a `sceneEntry`, not `quoteActions`.

## Rule: Treat sceneEntries as an optional entry pool

The `sceneEntries` listed in `assets/templates/bottom-bar-component.json` are available entry types, not a requirement to render every entry each time.

Why:
Primary pages may expose different scenario entrances. Showing 模拟交易 by default just because the template knows it exists creates extra product meaning.

Verify:

- `trade`, `watchHold`, and `paperTrade` are treated as optional entries selected by page context or user request.
- `paperTrade` appears only when the page context, product requirement, or user request explicitly asks for 模拟交易.
- Generated output names which scene entries are rendered and which available entries are not applicable.
- Do not render the full entry pool by default.

## Rule: Chat-page bottom bar includes the agent row

Use `chatPage` for AI 对话页 and composer states with assistant shortcuts.

Why:
The chat composer has one additional row for thinking mode and assistant chips. Omitting it drops required AI affordances.

Verify:

- The structure includes `inputContainer`, `inputModeToggle`, `agentRow`, `sceneEntries` or shortcut chips, `backgroundAsset`, and `safeArea`.
- `agentRow` height is `26px`.
- Agent icons render at `14x14` and use approved `assets/bottom-bar/icons/bottom-bar-agent-*.svg` assets with mode color binding.
- Thinking mode selected state is explicit and not inferred only from text color.

## Rule: Chat-page bottom bar uses input row above agent row

Use the approved two-row chatPage structure for AI 对话页 bottom bars.

Why:
The chatPage bottom bar combines the same scene-entry/input row model with an additional agent chip row. Placing controls outside the input pill or reversing rows breaks the composer contract.

Verify:

- Frame/background is `390x171`.
- Body height is `89px`.
- Safe area is `34px`.
- Input row height is `48px`.
- Agent row height is `26px`.
- Input row appears above the agent row.
- Gap from input row to agent row is `15px`.
- Input row horizontal model is `left 16 + trade 48 + gap 16 + input auto + gap 16 + watchHold 48 + right 21`.
- In a `390px` frame, input auto width resolves to `225px`.
- Left trade entry is at x `16`, size `48x48`.
- Right watchHold entry has right inset `21px`, size `48x48`.
- Gap between each entry and the input is `16px`.
- `inputModeToggle` and pause controls stay inside the input pill, not as separate controls outside the pill.
- `inputModeToggle` sits on the right side inside the input pill.

## Rule: Stock quote page replaces the primary bottom bar

Use `stockQuotePage` for 个股行情页. It replaces the primary bottom bar after entering the stock quote page.

Why:
The quote page needs quote information and fast trading actions rather than the normal scene-entry bottom bar.

Verify:

- The structure includes `quoteInfoRow`, `inputContainer`, `quoteActions`, `backgroundAsset`, and `safeArea`.
- `quoteInfoRow` height is `34px`.
- Buy, sell, and cancel actions are bottom-bar-specific round entries.
- Buy/sell/cancel entries inherit trading semantics but do not use ordinary button rules or order-form CTA button structure.
- Buy/sell/cancel quote actions appear only for `stockQuotePage` or an explicitly equivalent quote-detail bottom action bar.
- When the wording is 交易入口 on a first-level page, route to `sceneEntries` instead of `quoteActions`.
- Financial numeric values in the quote info row use 涨乐财富体 according to `references/typography.md`.
- Buy follows Chinese positive/buy red semantics; sell follows the approved sell action asset; cancel uses the approved neutral cancel asset.

## Rule: Future variants must extend the variant model

Add new bottom-bar variants as new keys under `variants` in `assets/templates/bottom-bar-component.json`.

Why:
Future states should not overload the existing primary, chat, or stock quote structures.

Verify:

- New variants declare their own body, shadow, input, and safe-area metrics.
- New variants declare required rows and assets.
- Existing `primaryPage`, `chatPage`, and `stockQuotePage` metrics remain unchanged unless the source design changes.
