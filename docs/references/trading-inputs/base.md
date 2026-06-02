# Trading Input Base

Use this file for trading-input component family classification, base metrics, token usage, text scaling, and typography.

Use canonical tokens only:

- Input background: `xzl/color/input/background` (internal `input`)
- Placeholder, clear icon, plus/minus icon, dropdown arrow, and inactive operation icons: `xzl/color/text/quaternary` (internal `text-input`)
- Entered text and label-switch icon: `xzl/color/text/primary` (internal `text-a`)

## Rule: Preserve base input metrics

Trading input containers use the approved compact input metrics.

Why:
The trading order area is dense and repeated. Stable height and radius keep code, type, price, quantity, amount, and condition controls aligned.

Verify:

- Input container height is `36px`.
- Input radius is `4px`.
- Filled input background uses `xzl/color/input/background`.
- Filled input containers do not add borders.
- A standalone component may adapt width to its page, but only the middle text region changes width.
- Fixed icon zones and internal spacing do not compress unless a future product rule explicitly allows it.

## Rule: Use canonical color tokens by state

Trading inputs use semantic tokens and opacity rather than raw colors.

Why:
Inputs must work in both light and dark modes while keeping the same design-system meaning.

Verify:

- Default input background uses `xzl/color/input/background`.
- Placeholder text uses `xzl/color/text/quaternary`.
- Entered text uses `xzl/color/text/primary`.
- Clear, plus, minus, and dropdown icons use `xzl/color/text/quaternary`.
- Quantity/amount label-switch icon uses `xzl/color/text/primary`.
- Disabled input background uses `xzl/color/input/background` at `40%` opacity.
- Disabled icon and symbol nodes use their normal token at `40%` opacity.
- Output includes light/dark token comparison for these tokens.

## Rule: Use approved text scaling

Trading input text defaults to 16px and scales down only when needed.

Why:
Long order types and condition names need to fit without wrapping or breaking row height.

Verify:

- Default text size is `16px`.
- If content does not fit, reduce to `13px`.
- If it still does not fit, reduce to `12px`.
- If `12px` still does not fit, use ellipsis.
- Text does not wrap by default.
- The rule applies to labels, entered text, placeholder text, dropdown long text, condition long text, and numeric-font content.
- Trading inputs inherit `references/typography.md`: every financial numeric run uses 涨乐财富体, even inside inputs, dropdowns, condition text, tags, or auxiliary information.
- Use PingFang SC Regular for Chinese text and dropdown/condition text unless numeric content is required.
- Use 涨乐财富体 Regular for stock codes, numeric prices, quantities, amounts, percentages, ratios, and other financial numeric runs.
