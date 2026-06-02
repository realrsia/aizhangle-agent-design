# Financial Table List Audit

Use this checklist for 自选列表, 持仓列表, and future financial table-list reviews.

## Severity

- P0: Red/green financial semantics are reversed, dark mode removes red/green distinction, raw colors bypass tokens, or dark mode text becomes all white without hierarchy.
- P1: Frozen column, missing required header/filter assets, row height, column width, privacy masking, or required table structure is wrong.
- P2: Typography, alignment, sorting state, wrapping, mini trend size, divider, or spacing is wrong.
- P3: Minor density, naming, or consistency suggestion.

## Checklist

- Financial table generation must follow `lists/table-generation-protocol.md`; bypassing the shared column-model sequence is P1/P2 depending on impact.
- Scenario generation contracts, such as `watchlist-generation.md` and `holdings-generation-contract.md`, override generic page/list shortcuts.
- The list is table-like and uses a frozen left stock identity column.
- Generating a row/card summary list when the user requested a financial list with explicit fields is P1.
- The data region scrolls horizontally.
- Header and body columns stay aligned while scrolling.
- A financial table generated without a named shared column model is P1/P2 depending on whether fields or header nodes are missing.
- A 自选列表 generated without following `lists/watchlist-generation.md` is P1 when required nodes or column bindings are missing.
- Using a generic market-list shortcut instead of `watchlist-table-module.json` for 自选列表 is P1.
- A visually similar list that lacks required template nodes is P1.
- Delivering after the protocol self-check fails is P1.
- Missing `watchlist-output-checklist` results for a generated 自选列表 is P1.
- `watchlist-output-checklist` missing key P1 items is P1.
- Checklist claims that pass while the artifact lacks required nodes are P1.
- A visually similar list with no checkable structure is P1.
- Watchlist frozen column is `123px`; holdings/持股 frozen column is `143px`.
- Watchlist mini trend column is `62px`; mini trend visual is `62x40`.
- Other data columns are `70px`.
- Column gap is `10px`.
- Dividers start at `18px` and extend to the viewport right edge with `0px` right inset.
- Divider clipped or hidden by the frozen column is P2.
- Divider overlay below frozen/scroll layers, or visually clipped in the frozen-column area, is P2/P1 depending on severity.
- Default row height is `60px` when signal tags do not wrap.
- Header height is `29px`.
- Header text is `12px`, PingFang SC Regular, `xzl/color/text/tertiary`.
- Header sort/filter icon visual size and hit area are both `6x12`.
- Header text and sort icon gap is `2px`.
- Default sort arrows use `xzl/color/text/tertiary`; the active sort direction uses `xzl/color/primary/red`.
- Sort activation changes only icon state, not header text color.
- Code fields do not use table-header sorting.
- Frozen-column headers and data are left-aligned; scrolling-column headers and data are right-aligned.
- Header alignment matches corresponding body column alignment.
- Header and body cells must reference the same stable column ids; separate visual placement is P1/P2 depending on severity.
- Scrolling-column header label, filter icon, and body value share the same fixed column box and right edge.
- Misaligned right-side header/body column boxes are P1/P2 depending on severity.
- Header and body use the same column model; frozen header cells are fixed and scrolling header cells move with the body.
- Header with an independent horizontal drag/scroll interaction is P1.
- Missing requested fields from the column model is P1.
- Frozen areas mask scrolling content; data must not leak through the left inset or under the frozen column.
- Frozen column inside the horizontal scroll container, or moving with horizontal transform, is P1.
- Numeric data columns are right-aligned.
- Stock name is the primary identity.
- Global numeric content uses 涨乐财富体.
- Stock name defaults to `16px`, may shrink to `12px`, then uses ellipsis or wrapping by product need.
- Stock name must use PingFang SC Medium mapped to `font-weight: 500`; `600` or `700` is P2.
- Stock name using browser default `<strong>` bold without overriding to `font-weight: 500` is P2.
- Empty values display `--`.
- Flat percentage values display `0.00%`.
- Flat/zero values use `xzl/color/text/primary`.
- Watchlist movement fields are only K线图, 涨幅, 涨跌, and 涨速.
- Holdings movement fields are only 持仓盈亏, 今日盈亏, 涨幅, 涨跌, and 涨速.
- Holdings does not show mini trend charts.
- Watchlist can hide mini trend charts; following columns move left.
- Watchlist K线图 header cell is blank.
- Watchlist `名称代码` header overrides the generic frozen header and shows 编辑, 标签视图切换, 多股, 横屏 icons at `16x16`, gap `9.5px`, color `xzl/color/text/tertiary`.
- Watchlist `名称代码` header does not display `名称代码` text and uses the same `123px` width as the frozen body column.
- Missing any of the four required watchlist header icons is P1.
- Watchlist frozen header left blank is P1.
- Watchlist header tool assets listed only in notes, without rendered icon button nodes, are still missing and remain P1.
- Watchlist header icons that are decorative instead of clickable operation entries are P1/P2 depending on implementation impact.
- Showing `名称代码` text in the watchlist header tool area is P1.
- Filterable headers retain the `6x12` sort/filter icon; default arrows use `xzl/color/text/tertiary`, active direction uses `xzl/color/primary/red`.
- Missing sort/filter icon on a filterable field is P1.
- A filterable header that only mentions `table-sort-arrows.svg` in notes but does not render an icon node is P1.
- Applying the watchlist-only four-icon header template to holdings, 持股, or other lists is P1.
- 持股列表 left frozen header missing `市值+筛选图标`, `编辑图标+编辑`, or `多股图标+多股` is P1.
- 持股列表 header icons not using approved assets, using hand-drawn approximations, or invisible in standalone HTML/file:// output is P1.
- 持股列表 left frozen header width not `143px`, x start not `0`, or group gap not `6px` is P1/P2 depending on severity.
- 持股列表 showing stock code in the frozen column is P1/P2.
- 持股列表 showing security/market tags such as 沪/创/港/USA/ETF in the frozen column is P1/P2.
- 持股列表 trade-type tags appear only after the second-line market value amount; wrong placement is P2.
- 持股列表 条件单 uses blue outline; 信用 uses brown outline. Treating 持股 信用 as generic neutral security tag is P2.
- Holdings dual-line secondary values use 涨乐财富体 Regular `12px`; inheriting `16px` or using `13px` is P2.
- Holdings horizontal scroll must reveal the final field, such as 换手率, with `18px` right safety padding; clipping the last column is P1/P2 depending on severity.
- Missing `holding-output-checklist` results for a generated 持股列表 is P1.
- Ignoring `holdings-generation-contract.md` for 持股/持仓 generation is P1 when required columns, header tools, scroll completeness, frozen-row rules, or dual-line typography are affected.
- Using the old Market Overview row/sparkline/price-change summary as a substitute for the table-list contract is P1.
- Mini trend charts use archived Figma-exported assets and are not hand-drawn approximations.
- Watchlist declares one list-level `miniTrendState`; missing declaration is P2.
- If unspecified by the user, `miniTrendState` defaults to `5日`.
- One watchlist instance shows only one mini trend state, not 5日/分时/日K simultaneously.
- Mixed `data-chart-state` values or mixed mini trend asset families in one watchlist instance are P1/P2 depending on visual impact.
- Holdings privacy mode masks specified sensitive numeric content without changing style or layout.
- Security and signal tags follow `components-tags.md` and tag-specific references.
- Dense financial-list security tags use short display labels and preserve full semantic labels; applying short-label mapping to business group tabs is P2.
- Real security tag text is shown by default when it fits; defaulting to numeric tag capsules is P2.
- Numeric security tag count capsules are allowed only as overflow adaptation for the current identity area.
- Numeric security tag count capsules that add `+`, use the wrong font, use ordinary badge styling, or use movement colors are P2.
- Dark mode preserves text hierarchy and red/green movement distinction.

## Finding Format

For list findings, include:

- Severity.
- List type and row/column location.
- Violated list rule.
- Why the rule exists.
- Current design.
- Expected token, value, or behavior.
- Suggested fix.
- Rule source file.

