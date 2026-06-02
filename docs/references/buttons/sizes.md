# Button Sizes

Use numeric values from `assets/tokens/button-tokens.json`.

## Rule: Use the four approved sizes

Buttons must use one of four sizes: `large`, `medium`, `small`, or `mini`.

Why:
The button system relies on fixed size steps for predictable mobile app density.

Verify:

- `large`: height 42px, font size 16px, horizontal padding 24px.
- `medium`: height 35px, font size 14px, horizontal padding 18px.
- `small`: height 27px, font size 12px, horizontal padding 12px.
- `mini`: height 23px, font size 10px, horizontal padding 10px.

## Rule: Treat each size as an atomic bundle

Do not mix height, font size, horizontal padding, ordinary icon size, badge icon size, or icon-only icon size from different sizes.

Why:
Buttons become visually inconsistent when one dimension is scaled without the rest of the size system.

Verify:

- `large` uses height 42px, font 16px, padding 24px, ordinary icon 20x20, badge icon 12x12, icon-only icon 22x22.
- `medium` uses height 35px, font 14px, padding 18px, ordinary icon 18x18, badge icon 12x12, icon-only icon 20x20.
- `small` uses height 27px, font 12px, padding 12px, ordinary icon 16x16, badge icon 8x8, icon-only icon 18x18.
- `mini` uses height 23px, font 10px, padding 10px, ordinary icon 14x14, badge icon 8x8, icon-only icon 16x16.
- If any value comes from another size, report a size bundle mismatch.

## Rule: Use PingFang Medium for Chinese button text

Chinese button text uses PingFang SC with Medium weight.

Why:
Button labels need consistent emphasis across the mobile app.

Verify:

- In Figma, Chinese button text uses PingFang SC / Medium.
- In frontend, Chinese button text uses `"PingFang SC", -apple-system, BlinkMacSystemFont, system-ui, sans-serif` or an equivalent stack with PingFang SC first.
- Frontend font weight is 500, equivalent to Medium.
- Do not use Regular, Semibold, or Bold for ordinary button labels.
- Font size matches the button size.
- Icons have no font family, font size, or font weight requirement; verify icon size and color instead.

## Rule: Use large rounded buttons

All button types and sizes use `border-radius: 999px`, including icon-only buttons.

Why:
The product button style is pill-shaped and independent from the card/input radius scale.

Verify:

- `border-radius` is 999px or equivalent fully pill-shaped radius.
- The card/input radius scale is not applied to buttons.
