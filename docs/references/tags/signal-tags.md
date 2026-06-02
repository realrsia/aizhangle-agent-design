# Signal Tags

Use this file with `references/components-tags.md` for signal and risk labels.

Use numeric and color values only from `assets/tokens/tag-tokens.json` after tokenization.

## Rule: Use gradient tags for strong signal labels

Use gradient filled tags for 同类领先 and 重大风险.

Why:
These labels are stronger signals than ordinary classification tags and need higher emphasis.

Verify:

- 同类领先 uses white text and a `#F62F3F` to `#FF7A60` gradient background.
- 重大风险 uses white text and a `#F36C29` to `#FFE460` gradient background.
- These gradients appear only in token/style definitions, not hardcoded in business components.

## Rule: Use semantic background tags for positive, neutral, and negative signals

正向信号, 中性信号, and 负向信号 use derived semantic backgrounds with `xzl/color/text/secondary` text.

Why:
Signal tags should express sentiment while staying secondary to price and profit/loss values.

Verify:

- 正向信号 text and arrow use `xzl/color/text/secondary`; background resolves to dark `12% #F62F3F` and light `4% #F62F3F`.
- 中性信号 text and arrow use `xzl/color/text/secondary`; background resolves to dark `6% #FFFFFF` and light `10% #A6ACB8`.
- 负向信号 text and arrow use `xzl/color/text/secondary`; background resolves to dark `12% #00AB61` and light `4% #00AB61`.

## Rule: Use arrows only for clickable semantic signal tags

Only clickable 正向信号, 中性信号, and 负向信号 tags add the trailing arrow.

Why:
The arrow communicates navigation or drill-down, not sentiment by itself.

Verify:

- Non-clickable 正向/中性/负向 signal tags have no arrow.
- Clickable 正向/中性/负向 signal tags add a trailing arrow.
- 同类领先 and 重大风险 do not add this arrow unless separately specified.
- Arrow color follows the tag text color token.

## Rule: Let signal tags wrap in dense lists when needed

Signal tags default to one line but may wrap if the row needs complete display.

Why:
Signal tags can carry decision context, and some rows need full signal visibility.

Verify:

- Signal tags default to one line.
- Signal tags may wrap to additional lines.
- Row height may increase when signal tags wrap.
- Column widths do not change because of wrapping signal tags.

## Rule: Use neutral numeric styling for count-only signal tags

When a signal tag displays only a number, treat the number as a count, not a financial movement value.

Why:
Count-only signal tags classify available signals. Adding plus signs or movement styling makes them look like price changes.

Verify:

- Count-only signal tags do not add a `+` sign.
- Count-only signal tags reuse the neutral security tag container style, not the `信用` brown outline style.
- Count-only signal tag numbers use 涨乐财富体 Regular `11px`.
- Count-only signal tag number color uses `xzl/color/text/strong` (`text-b`).
- Count-only signal tag numbers do not use red/green movement formatting.

