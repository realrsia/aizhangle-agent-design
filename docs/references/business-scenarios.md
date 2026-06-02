# Business Scenarios

Load this file after `SKILL.md`. It tells the agent which integrated materials to use for each business scene.

## Shared Foundations

Load for any full page, component family, or review:

- `references/foundations/visual-language.md`
- `references/foundations/tokens.md`
- `references/foundations/typography.md`
- `references/foundations/component-decision.md` when choosing button/tab/switch behavior
- `references/page-archetypes/screen-recipes.yaml` for full-page composition
- `references/components/ai-component-registry.yaml` for component semantic placement
- `references/components/icon-registry.yaml` when icons appear

Use assets:

- `assets/design-tokens/`
- `assets/fonts/`
- `assets/icons/`
- `assets/templates/`

## Market Overview

Use when the user asks for A股行情首屏、市场总览、指数、涨跌分布、榜单摘要、板块总览。

Load:

- shared foundations
- `references/process/financial-interaction-designer.md`
- `references/process/market-patterns.md`
- `references/pages/page-structure.md`
- `references/pages/page-backgrounds.md`
- `references/pages/page-headers.md`
- `references/pages/pages-mobile-app.md`
- `references/pages/platform-ios-chrome.md`
- `references/pages/pages-market-list.md` when quote/ranking data appears
- `references/lists/table-generation-protocol.md` and `references/lists/financial-table-list.md` when visible table columns appear
- `references/bottom-bar/base.md`, `references/bottom-bar/variants.md`, and `references/components/components-bottom-bar.md` when a bottom bar appears

Archetype:

- `market_overview`

Checklist:

- `assets/templates/page-output-checklist.json`
- add component/list/bottom-bar checklists for visible modules

## Watchlist

Use when the user asks for 自选、自选列表、自选股表格、行内信号、名称代码、K线图、最新、涨幅、涨跌、成交额、换手率。

Load:

- shared foundations
- `references/process/financial-interaction-designer.md`
- `references/pages/page-structure.md`
- `references/lists/table-generation-protocol.md`
- `references/lists/financial-table-list.md`
- `references/lists/watchlist.md`
- `references/lists/watchlist-generation.md`
- `references/components/components-tags.md`
- `references/tags/base.md`
- `references/tags/security-tags.md`
- `references/tags/signal-tags.md`

Use templates/assets:

- `assets/templates/watchlist-table-module.json`
- `assets/templates/watchlist-header-tools.json`
- `assets/templates/filterable-table-header.json`
- `assets/templates/watchlist-output-checklist.json`
- `assets/charts/mini-trends/`
- `assets/icons/table-sort-arrows.svg`
- `assets/icons/watchlist-header-*.svg`

Archetype:

- `watchlist` for full pages
- table/list route first for modules

Checklist:

- `assets/templates/watchlist-output-checklist.json`
- `assets/templates/page-output-checklist.json` when it is a complete page

## Holdings And Account

Use when the user asks for 持仓、持股、账户、资产总览、资金明细、市值、持仓盈亏、可用数量。

Load:

- shared foundations
- `references/process/financial-interaction-designer.md`
- `references/pages/page-structure.md`
- `references/lists/table-generation-protocol.md`
- `references/lists/financial-table-list.md`
- `references/lists/holdings.md`
- `references/lists/holdings-generation-contract.md`
- `references/components/components-tags.md`
- `references/tags/security-tags.md`

Use templates/assets:

- `assets/templates/holding-table-module.json`
- `assets/templates/holding-list-left-header.json`
- `assets/templates/filterable-table-header.json`
- `assets/templates/holding-output-checklist.json`

Archetype:

- `account`

Checklist:

- `assets/templates/holding-output-checklist.json`
- `assets/templates/page-output-checklist.json` when it is a complete page

## Trading And Order Form

Use when the user asks for 交易、下单、买入、卖出、撤单、代码输入、类型选择、价格、数量、金额、条件单。

Load:

- shared foundations
- `references/pages/page-structure.md`
- `references/components/components-input.md`
- `references/components/components-trading-inputs.md`
- `references/components/components-trading-actions.md`
- `references/product-trading-order-form.md`
- `references/trading-inputs/base.md`
- `references/trading-inputs/layout.md`
- `references/trading-inputs/states.md`
- `references/trading-inputs/icons.md`
- `references/trading-inputs/audit.md`

Use templates/assets:

- `assets/templates/trading-input-component.json`
- `assets/templates/trading-order-form-inputs.json`
- `assets/templates/trading-input-output-checklist.json`

Archetype:

- `trading_search` for search-to-trade flows
- `detail_list` when trading controls sit in a stock/detail context

Checklist:

- `assets/templates/trading-input-output-checklist.json`
- button checklist only for ordinary buttons; buy/sell actions use trading action rules

## Stock Quote Detail

Use when the user asks for 个股行情、个股详情、报价详情、买卖撤底部操作、指数信息行。

Load:

- shared foundations
- `references/pages/page-structure.md`
- `references/pages/page-backgrounds.md`
- `references/pages/page-headers.md`
- `references/pages/platform-ios-chrome.md`
- `references/pages/pages-market-list.md`
- `references/bottom-bar/base.md`
- `references/bottom-bar/variants.md`
- `references/bottom-bar/stock-quote-index-info.md`
- `references/bottom-bar/states.md`
- `references/bottom-bar/icons.md`
- `references/bottom-bar/audit.md`

Use assets:

- `assets/bottom-bar/backgrounds/bottom-bar-stock-quote-bg-*.svg`
- `assets/bottom-bar/icons/bottom-bar-action-buy-*.png`
- `assets/bottom-bar/icons/bottom-bar-action-sell-*.png`
- `assets/bottom-bar/icons/bottom-bar-action-cancel-*.png`
- `assets/templates/bottom-bar-component.json`
- `assets/templates/bottom-bar-output-checklist.json`

Archetype:

- `detail_list`

Checklist:

- `assets/templates/bottom-bar-output-checklist.json`
- `assets/templates/page-output-checklist.json`

## AI Chat And Message Pages

Use when the user asks for AI 对话、聊天页、消息页、推理面板、相关问题、chat fidelity、按 Figma 聊天页还原。

Load:

- `references/fidelity/chat-fidelity-reconstruction.md`
- `assets/design-tokens/chat-fidelity-tokens.json`
- `references/pages/page-structure.md` when output is a full mobile page
- `references/bottom-bar/base.md`
- `references/bottom-bar/variants.md`
- `references/bottom-bar/agent-chips.md`
- `references/bottom-bar/states.md`
- `references/components/components-bottom-bar.md`
- `references/foundations/typography.md`
- `references/foundations/tokens.md` when production consistency is required

Archetype:

- `assistant_panel` for new AI-assistant product pages
- chat fidelity route for restoration against the known Figma source

Checklist:

- `assets/templates/bottom-bar-output-checklist.json` for chat bottom bar
- NZL acceptance criteria in `references/fidelity/chat-fidelity-reconstruction.md` until a JSON checklist is added

## Bottom Bar

Use for 首页底栏、AI 输入底栏、对话输入栏、个股详情买卖撤操作栏、scene entries。

Load:

- `references/components/components-bottom-bar.md`
- `references/bottom-bar/base.md`
- `references/bottom-bar/variants.md`
- `references/bottom-bar/icons.md`
- `references/bottom-bar/states.md`
- `references/bottom-bar/agent-chips.md` for chat bottom bars
- `references/bottom-bar/stock-quote-index-info.md` for quote detail bottom bars
- `references/bottom-bar/audit.md`

Use assets:

- `assets/bottom-bar/`
- `assets/templates/bottom-bar-component.json`
- `assets/templates/bottom-bar-output-checklist.json`

Checklist:

- `assets/templates/bottom-bar-output-checklist.json`

## Component Families

Buttons:

- `references/components/components-button.md`
- `references/buttons/*.md`
- `assets/templates/button-output-checklist.json`

Switch, radio, checkbox, segmented, icon toggles:

- `references/components/components-switch.md`
- `references/switches/*.md`
- `assets/templates/switch-output-checklist.json`

Tags:

- `references/components/components-tags.md`
- `references/tags/*.md`
- `assets/templates/tag-output-checklist.json`

Inputs:

- `references/components/components-input.md`
- trading inputs use Trading And Order Form route

Cards, overlays, dividers, tabs:

- matching `references/components/components-*.md`

## HTML Prototype

Use when the output is standalone HTML, `file://`, or local static preview.

Load:

- the matching business scene materials
- `references/pages/html-prototypes.md`
- `references/pages/platform-ios-chrome.md`

Always use local assets from `assets/` and validate visible icons/backgrounds.

## Review And Repair

Use when the user asks to inspect, review, audit, fix, or repair a design.

Load:

- matching business scene materials
- `references/foundations/review-report.md`
- `references/process/design-taster.md`
- relevant audit files such as `references/lists/audit.md`, `references/bottom-bar/audit.md`, `references/buttons/audit.md`, `references/switches/audit.md`, or `references/tags/audit.md`

Output findings before summary.

