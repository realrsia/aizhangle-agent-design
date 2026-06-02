# Holdings Table

Use this file with `references/lists/financial-table-list.md` for 持仓列表 and 持股列表.

For generation and review, also load `references/lists/table-generation-protocol.md` and `references/lists/holdings-generation-contract.md`.

Use numeric values only from `assets/tokens/list-tokens.json`.

Use `assets/templates/holding-table-module.json` as the required module structure template for 持仓列表 and 持股列表.

## Rule: Use the approved holdings column model

持仓列表 uses the approved column order and widths.

Why:
Holdings users compare position value, profit/loss, quantity, price, risk, and quote fields across stocks.

Verify:

- Column order is: 名称, 持仓金额, 持仓盈亏, 持仓/可用, 现价/成本, 今日盈亏, 个股仓位, 持仓天数, 买入均价, 代码, 最新, 涨幅, 涨跌, 涨速, 成交额, 换手率.
- Frozen name column width is `143px`.
- Each data column is `70px`.
- Holdings rows do not show mini trend charts.
- Column gap is `10px`.

## Rule: Use the approved holding-list left frozen header

持股列表 uses a dedicated left frozen header, not the 自选四图标 header and not a plain 名称 header.

Why:
持股 users need market-value sorting plus edit and multi-stock actions in the fixed identity area.

Verify:

- Trigger this rule for `持股列表`.
- The left frozen header width is `143px`.
- The header content starts at x `0` inside the frozen header.
- The header shows three groups: `市值 + 筛选图标`, `编辑图标 + 编辑`, and `多股图标 + 多股`.
- The three groups have `6px` gaps.
- The `市值` group uses the real approved `assets/icons/table-sort-arrows.svg` for the sort/filter icon; hand-drawn approximations are not allowed.
- Only the `市值` sort/filter icon is clickable for sorting/filtering; active direction uses `xzl/color/primary/red`.
- The 编辑 icon uses the real approved `assets/icons/watchlist-header-edit.svg`; hand-drawn approximations are not allowed.
- The 多股 icon uses the real approved `assets/icons/watchlist-header-multi-stock.svg`; hand-drawn approximations are not allowed.
- In standalone HTML/file:// prototypes, these P1 header icons must use inline SVG or reliable copied relative assets and must be visually visible.
- Validation checks both node existence and visual shape consistency with the approved assets.
- Header text uses PingFang SC Regular `12px`, `font-weight: 400`, and `xzl/color/text/tertiary`.
- 持股列表 must not use the 自选 `assets/templates/watchlist-header-tools.json` four-icon template.
- Use `assets/templates/holding-list-left-header.json`.

## Rule: Show filter icons only on filterable holdings fields

Holdings filterable headers keep the sort/filter affordance.

Why:
Portfolio users compare and sort account and quote fields, but headers should not show unsupported controls.

Verify:

- Filterable holdings fields are 名称, 持仓盈亏, 持仓/可用, 现价/成本, 今日盈亏, 个股仓位, 持仓天数, 买入均价, 最新, 涨幅, 涨跌, 涨速, 成交额, and 换手率.
- These filterable headers show `assets/icons/table-sort-arrows.svg` at `6x12`.
- Default arrows use `xzl/color/text/tertiary`; the active direction uses `xzl/color/primary/red`.
- Header text and filter icon gap is `2px`.
- Holdings uses the generic `assets/templates/filterable-table-header.json` for filterable fields.
- Holdings must not use the watchlist-only `assets/templates/watchlist-header-tools.json` four-icon template.
- The holdings `名称` filterable header uses the generic sort/filter icon, not watchlist operation icons.

## Rule: Keep holdings identity and market value in the frozen column

The frozen holdings column shows stock name and market value amount. 持股列表 has a stricter frozen-column structure.

Why:
Holdings identity and current position value must stay visible while users scroll through many account fields.

Verify:

- The frozen column shows stock name.
- The frozen column shows market value amount below the stock name.
- The frozen column does not show stock code.
- Stock code appears as its own horizontally scrollable data column when the holdings column model includes 代码.
- In 持股列表, the frozen column has exactly two lines: line 1 stock name, line 2 market value amount plus trade-type tag when applicable.
- In 持股列表, do not show security/market tags such as 沪, 创, 港, USA, ETF, 沪A, 科创, 港股, or 美股.
- In 持股列表, show only trade-type tags after the second-line market value amount. Current trade-type tags are 条件单 and 信用.
- 持股列表 trade-type tag rules override generic security tag rules.
- 条件单 references `assets/tokens/tag-tokens.json` `securityTags.blueOutline`.
- 信用 references `assets/tokens/tag-tokens.json` `securityTags.brownOutline`.
- Do not treat 持股列表 `信用` as a generic security tag neutral outline.
- Trade-type tags reuse `securityTags.metrics` and are omitted when the stock has no such tag.
- Current 持股列表 rules do not define multiple trade-type tags or overflow behavior.

## Rule: Use approved dual-line field semantics

Dual-line holdings fields are top-main and bottom-secondary.

Why:
Holdings rows need to show paired account values without adding extra columns.

Verify:

- 持仓/可用 shows 持仓 on top and 可用 below.
- 现价/成本 shows 现价 on top and 成本 below.
- 持仓盈亏 shows 盈亏金额 on top and 盈亏百分比 below.
- First-line main data uses 涨乐财富体 Regular `16px`.
- Second-line secondary data uses 涨乐财富体 Regular `12px`; do not use `13px` or inherit `16px`.
- Both lines in dual-line data columns are right-aligned.
- Second-line movement/profit-loss values, such as 盈亏百分比, keep red-up/green-down semantics.
- Second-line ordinary auxiliary values use the appropriate text hierarchy token, usually `xzl/color/text/tertiary`.

## Rule: Apply movement color only to holdings movement fields

Only holdings movement and profit/loss fields use red-up and green-down.

Why:
Portfolio decisions depend on profit/loss and movement color accuracy.

Verify:

- 持仓盈亏, 今日盈亏, 涨幅, 涨跌, and 涨速 use red-up and green-down.
- Non-movement fields use ordinary text tokens.
- Flat/zero values use `xzl/color/text/primary`.
- Empty values display `--`.
- 持仓盈亏 red/green reversal is a P0 issue.

## Rule: Keep holdings horizontal scroll complete through the last column

Holdings and 持股 horizontal scroll areas must show the full final data column.

Why:
The final column can be clipped by viewport padding, scroll container padding, or frozen overlays if the scrollable width is not calculated from the full column model.

Verify:

- The right-side scroll area can scroll fully to the last field.
- The final field, such as 换手率 when present, is fully visible.
- The final column keeps `18px` right safety padding after it.
- Header horizontal scroll state stays synchronized with body horizontal scroll state.
- The final column is not hidden by the viewport, scroll container padding, frozen layer, or mask.

## Rule: Hide account-sensitive numeric content consistently

When the eye privacy control hides holdings data, sensitive numeric content becomes masked while style stays unchanged.

Why:
Privacy mode must protect account values without changing table layout or hierarchy.

Verify:

- Frozen-column market value is replaced with `****`.
- 持仓盈亏, 持仓/可用, 现价/成本, 今日盈亏, 个股仓位, 持仓天数, and 买入均价 numeric content is replaced with `*****`.
- Font, size, color token, alignment, and column width remain unchanged.
- Non-sensitive quote fields such as 代码, 最新, 涨幅, 涨跌, 涨速, 成交额, and 换手率 remain governed by product privacy requirements; do not mask them unless specified.
