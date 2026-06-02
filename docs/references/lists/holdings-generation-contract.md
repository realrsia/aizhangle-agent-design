# Holdings Generation Contract

Use this file whenever generating or reviewing 持仓列表 or 持股列表. It gathers the holdings-specific hard requirements that sit on top of `references/lists/table-generation-protocol.md` and `references/lists/financial-table-list.md`.

Load with:

- `references/lists/table-generation-protocol.md`
- `references/lists/financial-table-list.md`
- `references/lists/holdings.md`
- `references/components-tags.md`
- `references/tags/security-tags.md`
- `assets/tokens/list-tokens.json`
- `assets/tokens/tag-tokens.json`
- `assets/templates/holding-table-module.json`
- `assets/templates/filterable-table-header.json`
- For 持股列表: `assets/templates/holding-list-left-header.json`
- For 持股列表: `assets/templates/holding-output-checklist.json`

## Rule: Use the holdings table module template

持仓列表 and 持股列表 must follow the full holdings module structure template, whether generated alone or inside a complete page.

Why:
The left frozen header alone does not prove that the list has a shared column model, synchronized scrolling headers/body, correct frozen rows, and a reachable final column.

Verify:

- Use `assets/templates/holding-table-module.json` as the structure source for 持仓列表 and 持股列表 modules.
- Define the holdings `columnModel` before header and row nodes.
- Header cells and body cells reference the same `columnId` values.
- For 持股列表, instantiate `assets/templates/holding-list-left-header.json` inside the frozen header.
- For ordinary 持仓列表, use the generic filterable header behavior for `名称` and do not instantiate `watchlistHeaderTools`.
- Scrolling rows do not include mini trend chart columns.
- The final column, such as `换手率`, can scroll fully into view with `18px` right safety padding.

## Rule: Use the holdings column model

Holdings modules start from the approved holdings column model.

Why:
Portfolio users compare account, profit/loss, quantity, cost, and quote fields across the same rows. Dropping columns or changing widths breaks comparison.

Verify:

- The column model includes the requested holdings fields in the approved order from `holdings.md`.
- Frozen width is `143px`.
- Data columns are `70px`.
- Holdings rows do not include mini trend charts.
- Every requested field remains in the column model and is not simplified away.

## Rule: Use the holding-list frozen header only for 持股列表

持股列表 has a dedicated left frozen header; ordinary holdings tables do not inherit 自选四图标.

Why:
The 持股 left header combines 市值 sorting, edit, and multi-stock actions. Reusing the 自选 header or a plain text header creates the wrong operation model.

Verify:

- For 持股列表, instantiate `assets/templates/holding-list-left-header.json`.
- Render `市值 + table-sort-arrows.svg`, `编辑图标 + 编辑`, and `多股图标 + 多股`.
- Width is `143px`, content starts at x `0`, and group gap is `6px`.
- Do not use `assets/templates/watchlist-header-tools.json`.
- Header icons use approved assets and are visually rendered.

## Rule: Render holdings filterable headers

Holdings sortable/filterable fields keep the generic table sort affordance.

Why:
The portfolio table must expose sort affordances for account and quote comparisons.

Verify:

- Filterable holdings fields instantiate `assets/templates/filterable-table-header.json`.
- Sort/filter icon uses `assets/icons/table-sort-arrows.svg` at `6x12`.
- Header text and icon gap is `2px`.
- Active direction uses `xzl/color/primary/red`; header text remains `xzl/color/text/tertiary`.
- Code fields do not use table-header sorting unless the scenario explicitly defines it.

## Rule: Keep 持股 frozen rows to name and market value

持股列表 frozen rows have a stricter identity structure than ordinary quote lists.

Why:
The frozen column must keep the position identity and market value visible while account fields scroll.

Verify:

- Line 1 is stock name.
- Line 2 is market value amount plus optional trade-type tag.
- Do not show stock code in the 持股 frozen column.
- Do not show security/market tags such as 沪, 创, 港, USA, ETF, 沪A, 科创, 港股, or 美股 in the 持股 frozen column.
- Trade-type tags are only 条件单 or 信用 when applicable.
- 条件单 references `securityTags.blueOutline`.
- 信用 references `securityTags.brownOutline`.

## Rule: Apply holdings dual-line semantics

Dual-line data fields use top-main and bottom-secondary typography.

Why:
Two-line holdings fields carry paired account values and must remain scan-friendly.

Verify:

- First line uses 涨乐财富体 Regular `16px`.
- Second line uses 涨乐财富体 Regular `12px`.
- Both lines are right-aligned.
- Profit/loss percentages keep red-up/green-down semantics.
- Ordinary secondary values use the appropriate text hierarchy token, usually `xzl/color/text/tertiary`.

## Rule: Preserve complete horizontal scroll

The final data column must be reachable and fully visible.

Why:
Final fields such as 换手率 are often clipped when scroll width is calculated from the visible viewport instead of the full column model.

Verify:

- Header and body share one horizontal scroll state.
- The final field, such as 换手率, can scroll fully into view.
- The final column keeps `18px` right safety padding.
- Frozen layers, masks, and container padding do not cover the final column.

## Rule: Validate 持股 artifacts with the holding checklist

持股列表 generation must prove the dedicated header and frozen-row rules were rendered.

Why:
The repeated failures in 持股 are structural: missing approved header icons, clipped dividers, wrong frozen-row tags, and wrong dual-line typography.

Verify:

- Complete `assets/templates/holding-output-checklist.json` for generated 持股列表 modules.
- Include evidence for every P1 item.
- If any P1 item fails, revise the artifact before delivery.
- Checklist pass requires visible node, named layer, component, data attribute, or structure-tree evidence.
