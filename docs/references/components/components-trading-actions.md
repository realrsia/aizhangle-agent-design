# Trading Actions

Use this file for explicit buy/sell trading action buttons. These rules override ordinary button visual-type rules.

## Rule: Trading actions are business-action buttons

If a button explicitly represents buy or sell order submission, classify it as a trading action instead of an ordinary button.

Why:
Buy/sell controls carry trading semantics. They must not be confused with ordinary primary, link, outline, or secondary buttons.

Verify:

- Buy/sell controls are not classified as `button/primary`, `button/link`, `button/outline`, or other ordinary button types.
- Ordinary button audit does not judge buy/sell color choices.
- Trading action audit uses this file.

## Rule: Trading actions inherit ordinary button base structure

Trading buy/sell buttons are not ordinary visual types, but they inherit ordinary button base rules for size, typography, radius, state, icon behavior, and layout where applicable.

Why:
Trading actions need dedicated business colors, but they should still feel like product buttons and remain consistent with the mobile button system.

Verify:

- Size bundle follows `references/buttons/sizes.md`.
- Chinese text uses PingFang SC / Medium or frontend `font-weight: 500`.
- Radius is `999px`.
- Pressed state uses 85% container opacity.
- Disabled state uses 40% container opacity.
- Icons follow text color and icon sizing/alignment rules when present.
- Layout follows `references/buttons/layout.md` where applicable.
- Background color is still controlled only by trading action rules.

## Rule: Buy button uses primary red

Buy buttons use `xzl/color/primary/red` as the background and `xzl/color/text/on-primary` for text/icons.

Why:
Buy is a dedicated trading action and uses strong red emphasis in this product context.

Verify:

- Buy button background uses `xzl/color/primary/red`.
- Buy button text and icons use `xzl/color/text/on-primary`.
- No arbitrary red or ordinary-button explanation is used.

## Rule: Sell button uses trading sell blue

Sell buttons use `xzl/color/trading/sell-button/background` as the background and `xzl/color/text/on-primary` for text/icons.

Why:
Sell is a dedicated trading action with its own product blue. It is not ordinary link blue or primary blue.

Verify:

- Sell button background uses `xzl/color/trading/sell-button/background`.
- Sell button does not use `xzl/color/primary/blue`, `xzl/color/primary/blue/30`, link button styling, or arbitrary blue.
- Sell button text and icons use `xzl/color/text/on-primary`.

## Rule: Sell blue does not affect financial red/green semantics

Use trading sell blue only for explicit sell action buttons.

Why:
行情, 盈亏, 涨跌, and list movement still use Chinese financial red-up and green-down semantics.

Verify:

- Down/falling/negative market fields still use `xzl/color/primary/green`.
- Sell blue is not used for negative values,跌幅, loss, or ordinary links.

## Severity

- P0: Buy/sell action button color is wrong, sell button does not use `xzl/color/trading/sell-button/background`, or trading action is judged by ordinary button rules causing wrong color.
- P1: Trading action text or icons are not `xzl/color/text/on-primary`, or trading action font/state behavior does not inherit ordinary button base rules.
- P2: Trading action size bundle, radius, icon sizing/alignment, or layout conflicts with ordinary button base rules but colors are correct.
