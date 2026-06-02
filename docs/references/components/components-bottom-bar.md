# Bottom Bar

Use this file as the router for 新涨乐 AI bottom bar components: primary-page input bottom bars, AI chat input bottom bars, and stock quote bottom action bars.

Load with:

- `references/bottom-bar/base.md`
- `references/bottom-bar/variants.md`
- `references/bottom-bar/icons.md`
- `references/bottom-bar/states.md`
- `references/bottom-bar/agent-chips.md` when the bottom bar is `chatPage`, AI 对话页, 对话页输入栏, or contains an agent row/chips
- `references/bottom-bar/stock-quote-index-info.md` when `stockQuotePage` includes index information, `quoteInfoRow`, `indexInfo`, or 指数信息行
- `references/bottom-bar/audit.md` for review tasks
- `assets/templates/bottom-bar-component.json`
- `assets/templates/bottom-bar-output-checklist.json` for generation validation

Also load:

- `references/color-mode-audit.md` when light/dark mode is generated or reviewed.
- `references/components-input.md` when the bottom bar contains an input field.
- `references/components-trading-actions.md` only for trading semantics; stock quote bottom-bar buy/sell/cancel entries remain bottom-bar-specific round assets, not ordinary order-form CTA buttons.
- `references/html-prototypes.md` for standalone HTML, file://, or local static previews.

## Rule: Route bottom bars by page context and visible structure

Classify the bottom bar before styling it.

Why:
The same bottom placement can mean a primary-page AI entry, a chat composer, or a stock quote action bar. Treating them as one generic bottom navigation loses required input states, scene-entry states, and quote actions.

Verify:

- 首页, 自选, 持仓, primary page, or first-level page uses the `primaryPage` variant.
- AI 对话页, conversation page, or chat composer uses the `chatPage` variant.
- If `chatPage` contains agent chips or an agent row, also load `references/bottom-bar/agent-chips.md`.
- 个股行情页, stock quote page, 买/卖/撤 bottom actions, or quote detail action bar uses the `stockQuotePage` variant.
- If `stockQuotePage` contains index information, index row, `quoteInfoRow`, `indexInfo`, or the user mentions 指数信息, also load `references/bottom-bar/stock-quote-index-info.md`.
- Every generated bottom bar includes `variant`, `mode`, `backgroundAsset`, `safeArea`, `inputMode`, `sceneEntries`, and applicable `state` fields.

## Rule: Resolve trading wording by page context

When the user says 交易入口, 交易, 买, 卖, or 撤, decide whether the visible surface is a scene entry or a quote action before choosing assets.

Why:
首页 and other first-level pages use a trading scene entry to open a scenario. 个股行情页 uses buy/sell/cancel quote actions inside a stock quote bottom action bar. Mixing these two produces the wrong structure and wrong assets.

Verify:

- 首页, 自选, 持仓, or other `primaryPage` usage treats 交易入口 as a `sceneEntry`.
- Primary-page 交易入口 uses `assets/bottom-bar/icons/bottom-bar-entry-trade-*.png`.
- Primary-page 交易入口 never uses `assets/bottom-bar/icons/bottom-bar-action-buy-*`, `bottom-bar-action-sell-*`, or `bottom-bar-action-cancel-*`.
- 个股行情页 or explicit stock quote bottom action bar usage treats 买/卖/撤 as `quoteActions`.
- `quoteActions` appear only in `stockQuotePage` or an explicitly equivalent quote-detail bottom action context.

## Rule: Bottom bar stays fixed and above content

Bottom bars remain fixed to the bottom of the phone viewport or mobile frame.

Why:
The input and scenario actions must remain available while page content scrolls or updates.

Verify:

- Frontend output uses fixed or sticky bottom placement.
- Figma output places the bar at the bottom edge of the mobile frame.
- Bottom bar layers render above scrollable content.
- Content keeps the required bottom spacing from the bottom-bar body, excluding shadow.
