# Button Audit

Use this checklist for button generation, adjustment, and review.

## Severity

- P0: Raw non-token color appears in a button outside the token layer, trading buy/sell action colors are judged using ordinary button rules, or a trading sell button does not use `xzl/color/trading/sell-button/background`.
- P1: Button/Tab classification is wrong, button type color is wrong, primary text/icon color reverses in dark mode, button font family/weight is wrong, trading action font/state inheritance is wrong, disabled state swaps colors instead of using 40% container opacity, or pressed state swaps colors instead of using 85% container opacity.
- P2: Size bundle is mixed, or height, font size, padding, radius, icon size, icon spacing, icon alignment, paired-button gap, or icon-only square sizing is wrong.
- P3: Button ordering, wording, or local layout could be clearer but does not violate the system.

## Checklist

- Button has one approved type.
- Button has one approved size.
- Button has one approved structure.
- Component is correctly classified as Button rather than Tab/Segmented Control.
- Explicit buy/sell trading actions are excluded from ordinary button audit and checked with `components-trading-actions.md`.
- Explicit buy/sell trading actions still inherit ordinary button base rules for size, font, radius, state, icon behavior, and layout where applicable.
- Color, background, and border match the selected type.
- Icons follow text color.
- Primary button text/icons remain white in dark mode.
- Assist button uses red 10% background with no border.
- Outline button uses red 50% 0.5px border.
- Ghost outline button uses text-d text/icons and text-e 0.5px border.
- Pressed state uses 0.85 opacity on the button container.
- Disabled state uses 0.4 opacity on the button container.
- No custom hover state is introduced.
- Radius is 999px.
- Size values match `assets/tokens/button-tokens.json`.
- Size values are used as an atomic bundle; height, font size, padding, and icon sizes are not mixed across sizes.
- Chinese button text uses PingFang SC / Medium in Figma or `"PingFang SC", -apple-system, BlinkMacSystemFont, system-ui, sans-serif` with `font-weight: 500` in frontend.
- Paired buttons are equal width with 15px gap.
- Icon-only buttons are square and contain only an icon.
- Badge icons align to text bottom; ordinary icons align horizontally with text.

## Finding Format

For button findings, include:

- Severity.
- Button location.
- Button type, size, structure, and state.
- Violated button rule.
- Why the rule exists.
- Current design.
- Expected token or value.
- Suggested fix.
- Rule source file.
