# Button States

Use numeric values from `assets/tokens/button-tokens.json`.

## Rule: Default state follows button type

Default state uses the base visual type rules.

Why:
The default state is the source of truth for every button type.

Verify:

- Type color, background, and border match `references/buttons/types.md`.
- No extra opacity is applied in default state.

## Rule: Pressed state uses 85% container opacity

Pressed state applies 85% opacity to the entire button container.

Why:
Container opacity preserves the button type while giving tactile feedback.

Verify:

- The button root/container opacity is 0.85.
- Text, icons, background, and border are affected together.
- The pressed state does not swap token colors.

## Rule: Disabled state uses 40% container opacity

Disabled state applies 40% opacity to the entire button container while preserving the original button type colors.

Why:
Disabled buttons should remain recognizable but clearly unavailable.

Verify:

- The button root/container opacity is 0.4.
- Original type colors are not replaced with unrelated gray tokens.
- Text, icons, background, and border are affected together.

## Rule: Do not define hover state

Do not introduce a hover visual state for the mobile app button system.

Why:
The current product is mobile app only, and hover is not part of the confirmed button spec.

Verify:

- No custom hover color, background, border, or opacity rule is added.
- If platform tooling provides hover by default, list it as an implementation detail to confirm rather than product spec.
