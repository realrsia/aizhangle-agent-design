# Market Lists

This file provides market-data semantics only. It does not define financial list layout.

Use `references/lists/financial-table-list.md` for list layout, column model, frozen columns, headers, filters, horizontal scrolling, dividers, typography, and tag metrics. Then use this file only to decide market movement meaning and red/green semantics.

## Rule: Financial list layout comes from table-list references

New Zhanle market, quote, watchlist, holdings, ranking, and ordinary financial data lists default to financial table lists.

Why:
Old row-style watchlist summaries can cause missing headers, missing filter icons, incomplete fields, and column misalignment.

Verify:

- Do not use this file as a row/card list layout source.
- Do not replace `financial-table-list.md` with a simplified price/change row layout.
- If the user provides explicit fields, map every field into the table column model.
- Simple row/card lists require an explicit user request such as 简版, 卡片式, 非表格, 不需要表头, 不需要横向滑动, or 只展示少量字段.

## Rule: Make price, change, and volume scan-friendly

Market lists must make price, change percentage, and volume visually clear and easy to compare.

Why:
Users scan行情 pages quickly to compare movement and liquidity. Weak hierarchy makes the page feel decorative instead of useful.

Verify:

- Price, change percentage, and volume have clear hierarchy within the active table-list layout.
- Numeric columns align consistently according to `financial-table-list.md`.
- Comparable values use consistent placement and emphasis.

## Rule: Apply red-up and green-down to every movement field

All list fields that express rising, falling, positive, or negative movement follow Chinese financial red/green semantics.

Why:
Users rely on color to interpret movement instantly across tables and lists.

Verify:

- Price change amount uses red for positive/up and green for negative/down.
- Change percentage uses red for positive/up and green for negative/down.
- Trend arrows, deltas, rankings, and list status fields follow the same rule.

## Rule: Do not overuse red and green

Use red and green only for financial state.

Why:
Decorative red/green reduces scan accuracy and can look like false market movement.

Verify:

- Non-financial icons, dividers, cards, and decorations do not use primary red/green.
