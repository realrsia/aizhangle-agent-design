# Buttons

Use this file as the button router. Button rules cover the mobile app product only.

Positive/spec example:

- Use the button component matrix in canon and the confirmed Figma button bindings; do not depend on local screenshot examples.

Load the smallest relevant button references:

- Button visual type and colors: `references/buttons/types.md`.
- Size, typography, height, padding, and radius: `references/buttons/sizes.md`.
- Leading, trailing, badge-icon, and icon-only structures: `references/buttons/icons.md`.
- Default, pressed, and disabled states: `references/buttons/states.md`.
- Width, full-width, paired-button, and icon-only layout: `references/buttons/layout.md`.
- Button review checklist and severity: `references/buttons/audit.md`.

Use numeric values only from:

- `assets/tokens/button-tokens.json`

Use `assets/templates/button-output-checklist.json` for generated ordinary button artifacts.

## Rule: Ordinary buttons and trading buy/sell actions are separate systems

Apply this button system to ordinary buttons. Do not use it to decide trading buy/sell action colors.

Why:
Trading buy/sell actions have product-specific financial behavior. Ordinary buttons use visual types such as primary, assist, outline, text, link, and ghost.

Verify:

- Ordinary buttons follow `references/buttons/`.
- If the control is a buy/sell trading action, stop ordinary button routing and load `references/components-trading-actions.md`.
- Trading buy/sell actions are not classified as `button/primary`, `button/link`, or `button/outline`.

## Rule: Choose by visual type

Choose button style by visual type, then apply size, icon structure, state, and layout rules.

Why:
新涨乐 buttons are defined as a matrix of type, size, structure, state, and layout. Mixing those dimensions creates inconsistent outputs.

Verify:

- Every button has one type: `button/primary`, `button/assist`, `button/outline`, `button/text`, `button/link`, `button/ghost-outline`, or `button/ghost-text`.
- Every button has one size: `large`, `medium`, `small`, or `mini`.
- Every button has one structure: text-only, leading-icon, trailing-icon, badge-icon, or icon-only.
