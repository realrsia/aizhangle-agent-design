# Cards

## Rule: First-level cards use background-c

Use `xzl/color/surface/card-level-1` for first-level cards. This maps to original `xzl-color-background-c-card`.

Why:
First-level cards need a consistent product surface hierarchy across light and dark modes.

Verify:

- First-level cards use `xzl/color/surface/card-level-1`.
- They do not use arbitrary white, black, or neutral backgrounds.

## Rule: Second- and third-level cards use background-d

Use `xzl/color/surface/card-level-2` for second- and third-level cards. This maps to original `xzl-color-background-d-card`.

Why:
Nested hierarchy should be visible through approved surface tokens, not borders or invented colors.

Verify:

- Second-level and third-level cards use `xzl/color/surface/card-level-2`.
- Card hierarchy does not introduce unapproved colors.

## Rule: Cards with background color do not use borders

Do not add borders to cards that already have an approved card background.

Why:
新涨乐 card hierarchy relies on surface color and spacing. Borders make the app feel heavy and inconsistent.

Verify:

- Colored cards have no stroke/border.
- If separation is needed, use spacing or approved dividers outside the card.

## Rule: Do not nest cards inside cards

Avoid card-in-card structures.

Why:
Nested cards reduce information density and make mobile financial pages feel cluttered.

Verify:

- Repeated modules are siblings or sections, not cards inside cards.

## Rule: Use confirmed radius values

Use only the confirmed radius scale.

Why:
Fixed radii keep app surfaces consistent across generated pages and Figma designs.

Verify:

- 20px: dropdown popovers, semi-floating panels, work areas.
- 16px: first-level cards.
- 8px: toast, modal dialogs, second-level cards, third-level cards.
- 4px: inputs.
- 2px: tags.
