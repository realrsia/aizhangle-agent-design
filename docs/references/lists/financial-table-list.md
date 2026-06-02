# Financial Table Lists

Use this file for dense mobile financial table lists with a frozen name column and horizontally scrollable data columns.

Use with `references/lists/table-generation-protocol.md` for generation order and artifact validation.

Use numeric values only from `assets/tokens/list-tokens.json`.

Also follow `references/typography.md` for PingFang SC weight mapping and 涨乐财富体 numeric font rules.

New Zhanle financial lists default to this table-list model. Do not generate row/card summary lists unless the user explicitly asks for a simplified, non-table list.

## Rule: Use a frozen name column plus horizontal data columns

Financial table lists keep the stock identity fixed on the left while data columns scroll horizontally.

Why:
Users compare many financial fields without losing the stock name context.

Verify:

- The stock name column is fixed on the left.
- Data columns scroll horizontally.
- Columns remain aligned with the header while scrolling.
- The list is table-like, not card-like.
- If the user provides a field list, every field must be mapped into the column model; do not simplify to only price and change columns.

## Rule: Build the column model before rendering cells

Financial table lists must define the complete column model before rendering headers or rows.

Why:
Repeated failures happen when a list is drawn visually first and table details are added afterward. That creates missing header nodes, independent header layout, and misaligned numeric columns.

Verify:

- Define all columns first, including column id, width, role, alignment, and whether the column is frozen or scrolling.
- Render the frozen header, scrolling header, frozen rows, and scrolling rows from the same column model.
- Do not place header labels independently from body values.
- Do not add sort/filter icons as loose overlays; they belong inside the same header cell for that column id.
- Do not create rows first and then approximate the table header by visual placement.
- Every generated spec names the shared column model before listing header or row nodes.

## Rule: Bind header and body to the same column model

Table headers and table body rows must share the same frozen and scrolling column structure.

Why:
If the header and body use different widths, alignment, or scroll containers, fields wrap or drift away from their data columns.

Verify:

- Header left frozen cell width equals the body frozen column width.
- Header left frozen cell remains fixed while horizontal data columns scroll.
- Header right scroll area scrolls horizontally in sync with the body data area.
- Header right scroll area is not independently draggable; it follows the body list's horizontal scroll state.
- Header column ids, widths, gaps, and alignment match the corresponding body columns.
- Header labels and icons do not wrap or increase the approved header height.
- The frozen header/body layer has an opaque background or mask that covers from the viewport left edge through the frozen column right edge.
- Scrolling columns are clipped below the frozen layer and must not show through the left `18px` inset.
- Figma structure uses separate `frozenHeaderLayer`, `scrollHeaderLayer`, `frozenBodyLayer`, `scrollBodyLayer`, and `dividerOverlayLayer`.
- Frontend structure keeps frozen layers outside the horizontal scroll container; only the scroll layer owns horizontal transform.
- Frozen layers use the page background token and are not transparent.
- Forbidden: frozen column inside horizontal scroll container, frozen column following horizontal transform, scrolling content visible in left inset.

## Rule: Preserve approved list metrics

Use approved dimensions for table structure.

Why:
Fixed metrics keep 自选 and 持仓 lists dense, aligned, and scannable.

Verify:

- Default row height is `60px` when signal tags do not wrap.
- Header height is `29px`.
- Header text is `12px`, PingFang SC Regular, `xzl/color/text/tertiary`.
- Header sort/filter icon visual size and hit area are both `6x12`.
- Header text and sort icon gap is `2px`.
- List top and bottom padding is `10px`.
- Left screen inset is `18px`.
- Header right screen inset is `18px`.
- Column gap is `10px`.
- Row divider is `0.5px`, uses `xzl/color/divider/sheet`, and starts at `18px` from the left edge.
- The divider between header and list data is `0.5px`, uses `xzl/color/divider/sheet`, and starts at `18px` from the left edge.
- List and header/body dividers extend to the viewport right edge with `0px` right inset.
- In HTML prototypes, implement table dividers with an independent overlay or pseudo-element, not a border on one local header cell.
- Divider is an overlay layer above frozen and scrolling content; it is not clipped or hidden by the frozen column background.
- `dividerOverlayLayer` z-order is above `frozenHeaderLayer`, `frozenBodyLayer`, `scrollHeaderLayer`, and `scrollBodyLayer`.
- If the divider visually disappears in the frozen-column area or is cut into segments, implementation fails.

## Rule: Use fixed column widths

Column widths are fixed by column type.

Why:
Dense quote and holdings tables need stable comparison across rows and scroll positions.

Verify:

- Watchlist frozen name column width is `123px`.
- Holdings frozen name column width is `143px`.
- Mini trend chart column width is `62px`.
- Mini trend chart visual size is `62x40`.
- Other data columns are `70px`.
- Mini trend charts are not resized, cropped, or distorted.

## Rule: Align by content type

Align identity fields and numeric fields consistently.

Why:
Financial values are compared vertically; inconsistent alignment slows scanning.

Verify:

- Frozen-column headers and data are left-aligned.
- Scrolling data-column headers and data are right-aligned.
- Every scrolling column uses one fixed column box identified by a stable column id; header text, filter icon, and body value align to the same right edge.
- Header alignment must match the corresponding body column alignment.
- Numeric data columns are right-aligned.
- Dual-line numeric columns are right-aligned on both lines.
- Mini trend chart stays in its fixed display area.

## Rule: Use approved typography

Use PingFang SC for Chinese labels and 涨乐财富体 for numbers.

Why:
The product has separate text and numeric typefaces; mixing them makes lists look inconsistent.

Verify:

- Stock name defaults to PingFang SC Medium `16px`; implementation maps Medium to `font-weight: 500`, not `600` or `700`.
- Do not use browser default `<strong>` bold as the stock-name style. If `<strong>` is used for a stock name, explicitly set `font-weight: 500`.
- PingFang SC Regular maps to `font-weight: 400`; follow `references/typography.md` globally.
- Header text uses PingFang SC Regular `12px`.
- Stock code uses 涨乐财富体 Regular `12px`.
- Stock name and stock code gap is `1px`.
- Data numbers use 涨乐财富体 Regular `16px`.
- Holdings market value in the frozen name column uses 涨乐财富体 Regular `12px`.
- Global numeric content uses the bundled 涨乐财富体 font.

## Rule: Handle long text by product need

Use the global scaling rule before truncation or wrapping.

Why:
Financial lists need to keep important names readable while preserving table density.

Verify:

- Text defaults to `16px` where the component defines `16px`.
- Long stock names may shrink to `12px`.
- If content still does not fit, use ellipsis when complete display is not required.
- Use wrapping only when the product requires complete display.
- Table list stock names do not wrap by default.

## Rule: Keep signal tags flexible without breaking table alignment

Signal tags default to one line and may wrap when needed.

Why:
Signals can be important, but dense list alignment must remain readable.

Verify:

- Signal tags default to one line.
- Signal tags may wrap to a second or later line when needed.
- Row height may increase when signal tags wrap.
- Wrapped rows keep all columns aligned within that row.

## Rule: Support header sorting except code fields

Headers support sorting for sortable fields, but code fields do not sort in the table header.

Why:
Sorting is a data operation; code fields have separate management interactions and should not inherit data-column sorting behavior.

Verify:

- Sortable headers can show default, ascending, and descending icon states.
- Sorting changes only the icon state; header text color does not change.
- Default sort/filter arrows use `xzl/color/text/tertiary`; the active direction uses `xzl/color/primary/red`.
- Header text and sort/filter icon gap is `2px`.
- Code fields do not show table-header sorting.
- Use `assets/icons/table-sort-arrows.svg` for sort/filter icon shape.
- Filterable headers must keep this icon; do not remove filter affordance when sorting is present.
- For every field listed in the current list's `filterableColumns`, render the header with `assets/templates/filterable-table-header.json`.
- The sort/filter icon must be a visible child node of the header cell, not only a referenced asset path or note.
- Header text always remains `xzl/color/text/tertiary`; active red applies only to the active icon direction.
- Header cells cannot be independently horizontally scrollable; they follow the body list horizontal scroll state.

## Rule: Apply red-up and green-down only to movement fields

Use Chinese financial red/green semantics only for fields that express movement, profit/loss, or trend.

Why:
Users rely on red/green to read market movement instantly.

Verify:

- Positive/up/profit values use `xzl/color/primary/red`.
- Negative/down/loss values use `xzl/color/primary/green`.
- Flat/zero values use `xzl/color/text/primary`.
- Empty values display `--`.
- Flat percentage values display `0.00%`.
- Non-movement fields use ordinary text tokens.
- Dark mode must not turn all text white or remove red/green distinction.

## Rule: Use assets for mini trend charts

Use approved mini trend assets from Figma instead of inventing chart shapes.

Why:
Tiny chart drawings are easy to distort or over-style; approved assets keep list rows stable.

Verify:

- Three chart states are `5日`, `分时`, and `日K`.
- Each chart uses the fixed `62x40` visual size.
- The chart area does not change size when the chart state changes.
- Generated specs reference approved Figma/assets and do not hand-draw final mini trend charts unless explicitly asked.
- Use the archived SVG assets in `assets/charts/mini-trends/` for `5日`, `分时`, and `日K` in light and dark modes when available.

