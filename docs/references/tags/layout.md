# Tag Layout

Use this file for tag placement and density rules, especially inside financial lists.

## Rule: Tags stay compact in dense financial rows

Tags in watchlists, holdings, and market tables must preserve scan density and row alignment.

Why:
Tags classify rows, but users primarily scan stock identity and financial values.

Verify:

- Inline tags fit beside code or secondary metadata without changing the column model.
- Tags do not inflate row height unless the product explicitly requires wrapped signals.
- Tags do not overlap adjacent text, numeric values, or action areas.
- Tags remain visually secondary to price, profit/loss, and stock identity fields.
- When space is tight, prefer the compact tag form defined by `assets/tokens/tag-tokens.json` instead of inventing smaller local styles.
