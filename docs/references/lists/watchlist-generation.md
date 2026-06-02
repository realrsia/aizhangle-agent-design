# Watchlist Generation

Use this file whenever generating, adjusting, or reviewing a 自选列表 module or a complete 自选 page that contains a 自选列表 module.

This file contains the watchlist generation flow, hard structure contract, and artifact validation rules. It extends `references/lists/table-generation-protocol.md`; do not bypass the shared financial table generation sequence.

Load with:

- `references/lists/table-generation-protocol.md`
- `references/lists/financial-table-list.md`
- `references/lists/watchlist.md`
- `references/components-tags.md`
- `references/tags/security-tags.md`
- `assets/tokens/list-tokens.json`
- `assets/tokens/tag-tokens.json`
- `assets/templates/filterable-table-header.json`
- `assets/templates/watchlist-header-tools.json`
- `assets/templates/watchlist-table-module.json`
- `assets/templates/watchlist-output-checklist.json`

## Generation Protocol

## Rule: Use template-first generation

Generate the 自选列表 module from `assets/templates/watchlist-table-module.json` before interpreting screenshots or page examples.

Why:
Repeated failures happen when the model falls back to a generic market/watchlist row pattern. The approved screenshot can guide visual polish, but the table module structure must come from the template.

Verify:

- Load `assets/templates/watchlist-table-module.json` before creating the list module.
- Treat screenshots and positive examples as visual checks only after the module structure exists.
- A visually similar list is still invalid if it lacks required template nodes.
- Do not use a generic market list pattern as the structure source.

## Rule: Follow the required generation sequence

The 自选列表 module must be generated in this order.

Why:
Generating rows first causes blank frozen headers, missing sort icons, and header/body misalignment.

Verify:

- Step 1: Decide whether the current page/surface contains a 自选列表 module.
- Step 2: Load `watchlist-table-module.json`.
- Step 3: Define the shared `columnModel`.
- Step 4: Render `frozenHeader` from `columnModel.nameCode`.
- Step 5: Render `scrollHeader` from the scrolling columns in the same `columnModel`.
- Step 6: Render `frozenRows` from `columnModel.nameCode`.
- Step 7: Render `scrollRows` from the same scrolling column ids.
- Step 8: Bind header and body to one horizontal scroll state.
- Step 9: Run the self-check in this protocol before delivery.
- Step 10: Complete `assets/templates/watchlist-output-checklist.json` and include the checklist results with the final output.

## Rule: Instantiate required header nodes

The 自选列表 header must render the required nodes from the templates.

Why:
Small header affordances are repeatedly omitted when they are treated as decoration or notes.

Verify:

- The frozen `名称代码` header instantiates `assets/templates/watchlist-header-tools.json`.
- The frozen `名称代码` header renders four clickable icon buttons: 编辑, 标签视图切换, 多股, 横屏.
- The frozen `名称代码` header is not blank.
- The frozen `名称代码` header does not show the text `名称代码`.
- Every filterable header instantiates `assets/templates/filterable-table-header.json`.
- Every filterable header renders both `labelText` and `sortFilterIcon`.
- The K线图 header is blank.

## Rule: Do not use generic market-list shortcuts

自选列表 cannot be replaced by a generic market/quote list pattern.

Why:
The generic pattern produces stock name, trend, latest price, and change percentage, but misses the approved header tools, filter icons, and shared column model.

Verify:

- Do not use a structure that is only stock name + trend + latest + change percentage.
- Do not use plain text headers for filterable columns.
- Do not leave the left frozen header blank.
- Do not generate body rows first and approximate the header visually.
- Do not omit requested fields from the column model.

## Rule: Validate the final artifact, not only the intent

After rendering, validate the produced artifact with `assets/templates/watchlist-output-checklist.json`.

Why:
A generated screenshot can look like a financial list while missing required nodes. Artifact validation forces the result to prove the nodes exist.

Verify:

- Complete every item in `assets/templates/watchlist-output-checklist.json`.
- Include status and evidence for every P1 checklist item.
- If any P1 item fails, revise before delivery.
- Do not mark an item pass unless the artifact has a visible node, named layer, component, data attribute, or structure-tree entry as evidence.

## Rule: Run self-check before delivery

If any self-check item fails, revise the output before delivery.

Why:
The recurring failures are structural. They must be caught before the user reviews the screenshot.

Verify:

- `columnModel` is defined before header and row nodes.
- `columnModel` includes `nameCode`, `miniTrend`, `latest`, `changePercent`, `changeAmount`, `changeSpeed`, `turnoverAmount`, and `turnoverRate` when the full watchlist field set is requested.
- Frozen header, scrolling header, frozen rows, and scrolling rows reference the same column ids.
- Four watchlist header icon buttons are rendered.
- Every filterable header has a rendered `sortFilterIcon`.
- `最新` header right edge matches the 最新 body value right edge.
- `涨幅` header right edge matches the 涨幅 body value right edge.
- Header and body share one horizontal scroll state.
- K线图 header is blank.
- Real security tags are shown by default when they fit, using dense-list short display labels where applicable.
- P1 icons are visually visible in standalone HTML/file:// prototypes.
- The list declares one `miniTrendState`; if unspecified it defaults to `5日`.
- One 自选列表 instance uses only one mini trend state and asset family.
- Divider overlay is above frozen and scroll layers and is not visually clipped.
- Stock name font-weight is exactly `500`, including when `<strong>` is used.
- The result is not a generic market-list shortcut.
- The final output includes `watchlist-output-checklist` results with pass/fail evidence for every P1 item.

## Structure Contract

Use this file whenever generating or reviewing a 自选列表. This is a hard checklist that gathers required assets, table structure, and layout contracts from the list references.

Use this contract even when the user says 页面, 原型, 参考正例, or 直接生成原型. A complete 自选 page may include page chrome, but the 自选列表 module inside it still requires this table-list contract. Explicit watchlist fields require the table-list contract and must not be simplified into a row-style 行情 summary.

Load with:

- `references/lists/table-generation-protocol.md`
- `references/lists/financial-table-list.md`
- `references/lists/watchlist.md`
- `references/components-tags.md`
- `references/tags/security-tags.md`
- `assets/tokens/list-tokens.json`
- `assets/tokens/tag-tokens.json`
- `assets/templates/filterable-table-header.json`
- `assets/templates/watchlist-header-tools.json`
- `assets/templates/watchlist-table-module.json`
- `assets/templates/watchlist-output-checklist.json`

## Rule: Start from the shared column model

Generate the 自选列表 module from the shared column model before drawing header or row cells.

Why:
The four watchlist header icons and sort/filter icons disappear when the table is treated as visual rows plus a separate text header. A shared column model makes the required header nodes and right edges explicit.

Verify:

- Output names a `columnModel` before header and row nodes.
- The `columnModel` includes `nameCode`, `miniTrend`, `latest`, `changePercent`, `changeAmount`, `changeSpeed`, `turnoverAmount`, and `turnoverRate`.
- Each column has a stable `columnId`, width, alignment, and frozen/scrolling role.
- Header cells and body cells reference the same `columnId`.
- Do not generate the body rows first and then approximate the header visually.

## Rule: Output the required watchlist structure explicitly

Generated 自选列表 specs must name the header/body regions and asset usage. When generating a complete 自选 page, these requirements apply to the list module inside the page.

Why:
Repeated misses happen when rules are read as visual guidance instead of a required structure. Naming the regions and assets makes omissions auditable.

Verify:

- Output includes a frozen header cell.
- Output includes a scrolling header row.
- Output includes a frozen body column.
- Output includes scrolling body columns.
- Output includes a header/body column-id and column-width mapping.
- Output includes a required assets list.
- Output maps every requested field into the watchlist column model: 名称代码, K线图, 最新, 涨幅, 涨跌, 涨速, 成交额, 换手率.
- Output does not reduce the requested fields to only 最新 and 涨幅.
- Output includes light/dark token comparison for list and tag tokens.
- Output instantiates `assets/templates/watchlist-table-module.json` or an equivalent structure with the same required rendered nodes.

## Rule: Treat missing header assets as incomplete output

Self-selected watchlist headers must explicitly reference the approved header assets.

Why:
The name/code header is an operation cluster, not a text header. If assets are not listed, generators often omit the icons.

Verify:

- `名称代码` header does not show `名称代码` text.
- `名称代码` header must not be blank.
- `名称代码` header overrides the generic frozen header and must instantiate the watchlist-specific template.
- `名称代码` header lists and uses `assets/icons/watchlist-header-edit.svg`.
- `名称代码` header lists and uses `assets/icons/watchlist-header-tag-view.svg`.
- `名称代码` header lists and uses `assets/icons/watchlist-header-multi-stock.svg`.
- `名称代码` header lists and uses `assets/icons/watchlist-header-landscape.svg`.
- `名称代码` header must instantiate `assets/templates/watchlist-header-tools.json`.
- The four icon buttons must exist as rendered child nodes in the visual or structure tree; mentioning asset paths in notes is not sufficient.
- This four-icon header template is watchlist-only and must not be applied to 持仓列表 or other list types.
- Each operation icon is `16x16`, color `xzl/color/text/tertiary`, gap `9.5px`.
- The icons are laid out left-to-right from x `0` inside the `123px` frozen header area.
- Each icon is a clickable operation entry: 编辑, 标签视图切换, 多股, 横屏.
- The header operation area width is `123px`.

## Rule: Treat missing filter icons as incomplete output

Every watchlist filterable header must show the approved sort/filter icon.

Why:
Filterable columns need visible affordances. The icon is required in the default state, not only after a sort is active.

Verify:

- Filterable fields are 最新, 涨幅, 涨跌, 涨速, 成交额, and 换手率.
- Each filterable field uses `assets/icons/table-sort-arrows.svg`.
- Each filterable field must instantiate `assets/templates/filterable-table-header.json`.
- The sort/filter icon must exist as a rendered child node in the header cell; mentioning the icon in notes is not sufficient.
- Icon visual size and hit area are `6x12`.
- Header text and icon gap is `2px`.
- Default arrows use `xzl/color/text/tertiary`.
- Active direction uses `xzl/color/primary/red`.

## Rule: Use the watchlist table module template

The 自选列表 module must follow the full module structure template, whether generated alone or inside a complete page.

Why:
Repeated misses happen when header tools, sort icons, and tag overflow behavior are treated as optional details. The module template makes them part of the structure tree.

Verify:

- Use `assets/templates/watchlist-table-module.json` as the structure source for 自选列表 modules.
- The frozen header instantiates `assets/templates/watchlist-header-tools.json`.
- The scrolling header contains one blank K线图 header plus filterable headers for 最新, 涨幅, 涨跌, 涨速, 成交额, and 换手率.
- Header cells and row cells reference the same `columnId` values from the module column model.
- Each filterable header instantiates `assets/templates/filterable-table-header.json`.
- Frozen rows contain stock name, stock code, and a security tag area.
- Scrolling rows contain K线图, 最新, 涨幅, 涨跌, 涨速, 成交额, and 换手率 columns.
- Header and body share one horizontal scroll state; the header cannot scroll independently.

## Rule: Keep frozen areas opaque above the scrolling layer

The frozen header and frozen body column must mask horizontally scrolling content.

Why:
When the scroll layer passes under a transparent left inset or frozen column, data leaks into the left margin and breaks the table illusion.

Verify:

- Frozen header cell has an opaque background or equivalent mask.
- Frozen body column has an opaque background or equivalent mask.
- The frozen mask covers from the viewport left edge through the frozen column right edge.
- Scrolling columns are clipped under the frozen mask and do not appear inside the left `18px` inset.
- Frozen areas render above scrolling columns.
- Figma uses separate frozen/scroll/header/body layers plus a divider overlay layer.
- Frontend keeps frozen layers outside the horizontal scroll container; frozen layers must not receive horizontal transform.
- Header horizontal movement is driven by the body list scroll state; the header must not be independently horizontally draggable.
- Frozen layer background matches the page background and is not transparent.

## Rule: Right-align every scrolling header and body column in the same column box

Right-side table headers and data must share one fixed column box per field.

Why:
Right-aligning only body data is not enough; users compare by column, so header labels and values must share the same right edge.

Verify:

- Every scrolling data column uses a fixed `70px` column box except the mini trend column.
- Header label, filter icon, and body values for each scrolling field share the same column id and column box.
- Header label plus filter icon is right-aligned within that box.
- Body value is right-aligned within that box.
- The mini trend column uses its fixed `62px` chart area.

## Rule: Use exact divider geometry

List and header/body dividers use the approved left inset and no right inset.

Why:
Using equal left and right insets makes the list feel narrower than the app shell and misaligns with the approved screenshot.

Verify:

- Divider starts at x `18px`.
- Divider extends to the viewport right edge.
- Divider right inset is `0px`.
- Divider thickness is `0.5px`.
- Divider color is `xzl/color/divider/sheet`.
- Divider is above both frozen and scroll content and is not clipped by the frozen layer.

## Rule: Prefer real security tags and use numeric count only for overflow

The stock identity area shows real security tag text by default; numeric count capsules are only an overflow adaptation.

Why:
Using numeric capsules as the default makes classification tags look like ordinary badges and hides useful market/security information.

Verify:

- Stock identity priority is stock name, then stock code, then real security tags, then numeric overflow count.
- If a real security tag fits in the current name/code area, show the real tag text such as 沪A, 科创, ETF, 港股, 融, or 信用.
- Real security tags must use `references/tags/security-tags.md` plus `assets/tokens/tag-tokens.json`; do not restate tag color, border, padding, radius, or font rules in the watchlist implementation.
- Use a numeric count capsule only when the real tags cannot fit in the current row's available identity area.
- If available space cannot be determined, default to real tag text rather than a numeric capsule.
- Numeric count capsules do not add `+`.
- Numeric count capsules use 涨乐财富体 Regular `11px`.
- Numeric count capsules reuse the security tag capsule style and do not use red/green movement colors.

## Rule: Run prototype self-check before delivery

Direct prototype generation must pass the table-list contract before final delivery.

Why:
Prototype generation often prioritizes visual completion and can omit required rendered nodes unless checked explicitly.

Verify:

- Four watchlist header icon buttons are rendered.
- Every filterable header has a rendered sort/filter icon.
- Header and body share the same column model and scroll state.
- All requested fields are present as columns.
- Real security tags are shown by default when they fit.
- Numeric tag count capsules appear only as overflow adaptation and use the approved format.
- Complete `assets/templates/watchlist-output-checklist.json` and include the results with the final output.
- If any protocol or output checklist check fails, revise the prototype before delivery.

## Output Validation

## Rule: The final artifact must be structurally checkable

The generated output must expose enough structure to verify required watchlist table nodes.

Why:
Screenshots alone can look close while missing required header tools, sort icons, and shared column bindings.

Verify:

- Figma output uses named layers or nodes for `columnModel`, `frozenHeader`, `scrollHeader`, `frozenRows`, `scrollRows`, `watchlistHeaderTools`, and `filterableHeaderCell`.
- Frontend output uses component names, DOM structure, or data attributes that expose the same nodes.
- Static specs output a structure tree with the same required node names.
- A purely visual image with no checkable structure is not enough for final validation.

## Rule: Use the watchlist output checklist

Every generated 自选列表 output must complete `assets/templates/watchlist-output-checklist.json`.

Why:
The recurring failures are easy to miss visually. A checklist makes the final artifact prove the required nodes exist.

Verify:

- Output includes the checklist results, not only a statement that validation passed.
- Every P1 checklist item is `pass` before delivery.
- If any P1 checklist item fails, revise the artifact before delivery.
- If a checklist item is not applicable, state why; do not mark it pass by default.

## Rule: Required proof points

The final output must prove the presence of the core self-selected table structure.

Why:
The table must be generated from the approved module template, not approximated from a generic market list.

Verify:

- `columnModel` exists.
- P1 icons are visually visible in the rendered artifact.
- Standalone HTML/file:// prototypes do not rely only on external absolute SVG paths or CSS masks for P1 icons.
- `watchlistHeaderTools` exists.
- Four header icon buttons exist.
- `filterableHeaderCell` exists for each filterable field.
- `sortFilterIcon` exists for each filterable field.
- Header and body cells share column ids.
- `最新` header and 最新 body values share a right edge.
- `涨幅` header and 涨幅 body values share a right edge.
- K线图 header is blank.
- The result is not a generic market-list shortcut.
- The list declares exactly one `miniTrendState` and does not mix mini trend assets.
- Dense-list security tags use short display labels while preserving full semantic labels.
- Dividers are rendered by `dividerOverlayLayer` above frozen and scroll content.
- Stock name font-weight is `500`, not `600` or `700`.

## Rule: Checklist claims must match the artifact

Checklist output is invalid if it claims pass while the artifact visibly or structurally lacks the required node.

Why:
The checklist is a validation artifact, not a decoration. False pass results hide generation failures.

Verify:

- A checklist pass must be backed by a visible node, named layer, component, data attribute, or structure-tree entry.
- If the screenshot lacks four header icons, `hasFourHeaderIconButtons` cannot pass.
- If the screenshot lacks sort icons, filter-icon checklist items cannot pass.
- If headers and body values are placed independently, `headerBodyShareColumnIds` cannot pass.
