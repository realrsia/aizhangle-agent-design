# Watchlist Table

Use this file with `references/lists/financial-table-list.md` for 自选列表.

Use numeric values only from `assets/tokens/list-tokens.json`.

## Rule: Use the approved watchlist column model

自选列表 uses the approved column order and widths.

Why:
Watchlist users scan identity, trend, price, movement, and liquidity fields quickly.

Verify:

- Column order is: 名称代码, K线图, 最新, 涨幅, 涨跌, 涨速, 成交额, 换手率.
- Frozen name column width is `123px`.
- K线图 column width is `62px`.
- Other data columns are `70px`.
- Column gap is `10px`.

## Rule: Use approved watchlist header controls

The 自选列表 `名称代码` header has a specialized control cluster that overrides the generic frozen table header, and the mini-trend header stays blank.

Why:
The watchlist header combines table identity and list operations. The mini-trend column is visual-only and should not add redundant header text.

Verify:

- `名称代码` header must instantiate `assets/templates/watchlist-header-tools.json` and shows four icons in this order: 编辑, 标签视图切换, 多股, 横屏.
- The header cell does not display `名称代码` text.
- The header cell must not be blank; an empty frozen header is a failed watchlist structure.
- This watchlist-specific frozen header overrides any generic financial-table frozen header behavior.
- The four-icon header area width is the same as the watchlist frozen name column: `123px`.
- The four icons are laid out left-to-right inside the `123px` area, with the first icon starting at x `0` of the frozen header cell.
- Each icon is a clickable operation entry, not a decorative icon.
- Each header icon uses the approved asset in `assets/icons/`.
- Generated output must explicitly list the four header icon asset paths; omission is an incomplete watchlist output.
- Each icon is displayed at `16x16` with a `16x16` hit area.
- Header icon gap is `9.5px`.
- Header icon color uses `xzl/color/text/tertiary`.
- The K线图/走势图 header cell is blank and does not show `走势图` or `K线图` text.
- Header text and sort icon gap is `2px`.
- The left operation header is fixed like the frozen body column; the right header columns scroll with the list body.
- In Figma, represent this as a `watchlistHeaderTools` layer/frame outside the horizontal scroll layer.
- In frontend, represent each operation as an icon button with an accessible label matching its function.
- Use `assets/templates/watchlist-header-tools.json` for this area.
- This four-icon template applies only to 自选列表; 持仓列表 and other financial lists must not inherit it.
- The four icons must be rendered child nodes, not only named in the output notes.

## Rule: Keep stock identity in the frozen column

The frozen watchlist column shows the stock name, stock code, and security tags.

Why:
The stock name is the most important list identity and must stay visible during horizontal scroll.

Verify:

- Stock name is the primary text.
- Stock code is secondary text.
- Security tags appear after the stock code as real tag text by default.
- Security tags must reference `references/tags/security-tags.md` and `assets/tokens/tag-tokens.json`; do not define watchlist-only tag colors, borders, padding, radius, or typography.
- A compact numeric count capsule appears only when the real security tags cannot fit in the current frozen identity area.
- The frozen column remains visible while data columns scroll.

## Rule: Support optional mini trend column

Watchlist mini trend charts are fixed by default but may be hidden.

Why:
Some watchlist views need trend context; others need more data density.

Verify:

- K线图 is shown by default in the approved watchlist model.
- Users may close/hide the K线图 column.
- When hidden, following data columns move left.
- No blank placeholder column remains after hiding K线图.
- The mini trend visual remains `62x40` when visible.
- Use archived Figma-exported assets from `assets/charts/mini-trends/` for 5日, 分时, and 日K; do not recreate approximate chart paths.
- Declare a list-level `miniTrendState` for each 自选列表 instance.
- `miniTrendState` is one of `5日`, `分时`, or `日K`.
- If the user does not specify a mini trend state, default `miniTrendState` to `5日`.
- All rows in one 自选列表 instance use the same `miniTrendState` asset family.
- The three mini trend styles are mutually exclusive states; one watchlist instance shows only one of 5日, 分时, or 日K.
- Do not display three mini trend styles, mixed row-level chart states, or three mini trend columns at the same time.

## Rule: Apply movement color only to watchlist movement fields

Only watchlist movement fields use red-up and green-down.

Why:
Overusing red/green reduces scan accuracy.

Verify:

- K线图, 涨幅, 涨跌, and 涨速 use red-up and green-down.
- 最新, 成交额, 换手率, stock name, stock code, and tags use ordinary text/tag tokens unless their own component rule says otherwise.
- Flat movement values use `xzl/color/text/primary`.
- Empty values display `--`.

## Rule: Show filter icons only on filterable watchlist fields

Watchlist filterable data headers keep the sort/filter affordance.

Why:
Users need visible filtering and sorting affordances on comparable quote fields, but non-filterable structural columns should stay clean.

Verify:

- Filterable watchlist fields are 最新, 涨幅, 涨跌, 涨速, 成交额, and 换手率.
- Each filterable header is a combined cell of `labelText + sortFilterIcon`, right-aligned inside the same `70px` column box as the body value.
- These filterable headers show `assets/icons/table-sort-arrows.svg` at `6x12`.
- Generated output must explicitly list `assets/icons/table-sort-arrows.svg` for every filterable field; omission is an incomplete watchlist output.
- Default arrows use `xzl/color/text/tertiary`; the active direction uses `xzl/color/primary/red`.
- Header text and filter icon gap is `2px`.
- 名称代码 and K线图 do not show this filter icon in the watchlist header.

## Rule: Use approved signal tag behavior

Signal tags may appear in watchlist rows and follow the global tag rules.

Why:
Signals add decision context but should not disrupt table alignment.

Verify:

- Signal tags use `components-tags.md` and `references/tags/signal-tags.md`.
- Signal tags default to one line.
- Signal tags may wrap when needed, increasing row height.
- Wrapped signal tags do not change column widths.

