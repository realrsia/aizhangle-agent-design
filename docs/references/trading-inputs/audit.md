# Trading Input Audit

Use this checklist for trading input generation, adjustment, and review.

## P0 Findings

- Trading input subtype is not classified before styling.
- Input background, placeholder, entered text, or icon color uses raw colors instead of canonical tokens.
- Financial numeric runs inside the input do not use 涨乐财富体.
- Required operation icons are missing or hand-drawn despite approved assets existing.
- Code, dropdown, numeric stepper, or numeric stepper + dropdown value text is visibly off center against the full input container.
- Operation icon rendered bounds do not keep required edge spacing.
- Disabled states do not apply the required `40%` opacity behavior.

## P1 Findings

- Icon size is declared but not verified in final rendered geometry.
- Icon visibility is inferred only from DOM/resource/CSS instead of rendered pixels or equivalent proof.
- Static HTML prototypes reference inaccessible fonts or icon assets.
- Undefined auxiliary slots create visible helper rows, extra row height, negative margins, or explanatory microcopy.
- Long text does not follow `16 -> 13 -> 12 -> ellipsis`.
- Quantity/amount switch icon source or rendered `14x14` size is not verified.

## Required Evidence

- Token list and light/dark comparison for input background, text, and icons.
- Rendered geometry evidence for value centering and icon edge spacing.
- Font evidence for financial numeric runs.
- Icon source and final visibility evidence.
- Completed `assets/templates/trading-input-output-checklist.json` results for generated trading input or order-form artifacts.
