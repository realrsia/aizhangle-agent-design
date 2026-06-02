# Trading Input Layout

Use this file for trading-input value centering, internal spacing, rendered geometry, and auxiliary-slot behavior.

## Rule: Center value text independently from operation icons

Trading input value text must be visually centered against the full input container, not merely centered inside the remaining space after icon zones are laid out.

Why:
Code inputs, dropdown inputs, numeric steppers, and numeric stepper-dropdown controls combine centered business values with fixed edge operation icons. If value text and icons share a normal flow layout, asymmetric icon zones can visually push the value away from the input center.

Verify:

- Code input selected value is visually centered within the full input container.
- Dropdown selected value is visually centered within the full input container.
- Numeric stepper value is visually centered within the full input container.
- Numeric stepper plus/minus icons do not shift the value center.
- For inputs with only one visible side icon, an equivalent invisible structural reserve or independent value layer preserves visual centering.
- Verify using rendered geometry, not only `text-align`, flex, or grid declarations.

## Rule: Use approved internal spacing by component type

Use the measured internal spacing from the trading-input spacing reference.

Why:
The controls rely on small, repeatable hit and text zones. Arbitrary padding causes icons and centered values to drift.

Verify:

- Code input: left empty inset is `42px`; text has `7px` vertical padding; clear/search icon area keeps `15px` left spacing and `8px` right spacing.
- Code input and dropdown input right-side icons are `8px` from the input's right edge.
- Numeric stepper input: minus icon is `8px` from the left edge; text has `7px` vertical padding; text-to-plus spacing is `15px`; plus icon is `8px` from the right edge.
- Dropdown input: left empty inset is `42px`; text has `7px` vertical padding; dropdown icon area keeps `15px` left spacing and `8px` right spacing.
- Numeric stepper + dropdown input: minus icon is `8px` from the left edge; text-to-dropdown spacing is `15px`; dropdown-to-plus spacing is `8px`; plus icon is `8px` from the right edge.
- Condition input: text has `7px` vertical padding; icon gap is `5px`; outer icon side spacing is `8px`.
- Verify icon edge spacing in addition to icon size.

## Rule: Measure icon edge spacing from the rendered icon bounds

Trading input icon edge spacing must be measured from the rendered icon bounding box to the input container edge.

Why:
Icon zones, CSS padding, grid tracks, and flex alignment can make declarations appear correct while the visible icon itself is offset. The product metric is the visible icon's final position.

Verify:

- Code and dropdown right-side icons have an `8px` distance from the rendered icon bounds to the input container's right edge.
- Numeric stepper minus icon has an `8px` distance from the rendered icon bounds to the input container's left edge.
- Numeric stepper plus icon has an `8px` distance from the rendered icon bounds to the input container's right edge.
- Numeric stepper + dropdown preserves the required icon order and spacing, and the final plus icon still resolves to `8px` from the right edge.
- Do not accept padding, grid column width, or icon-zone width as proof unless rendered bounds are equivalent.
- Evidence should use rendered measurements or an equivalent layout proof, not declarations alone.

## Rule: Validate value centering and icon spacing together

Trading input validation must confirm value centering and rendered icon edge spacing at the same time. Passing one without the other is not sufficient.

Why:
The business value's visual center belongs to the whole input container, while operation-icon spacing belongs to the rendered icon body. A layout can satisfy one metric and still fail the other.

Verify:

- The value center aligns with the input container center in final rendered geometry.
- Operation icon bounding boxes keep the required `8px` edge spacing.
- The same rendered state is used to verify both metrics.
- Do not pass a trading input if value centering is correct but icons are offset, or if icons are correctly spaced but the value center is shifted.

## Rule: Keep P1 auxiliary information as a reserved slot

Trading auxiliary information is acknowledged but not specified in this version.

Why:
行情信息, 买上限/卖下限, 可买/可卖, and related helper rows need separate source material before hard rules are written.

Verify:

- Component specs may expose an `auxiliaryInfoSlot`.
- Undefined auxiliary slots do not participate in form row spacing.
- Do not generate helper rows, negative margins, explanatory microcopy, or extra placeholder height for undefined auxiliary information.
- Do not invent auxiliary information colors, spacing, or business validation behavior in this version.
- If auxiliary content is generated, mark its details as an open gap unless a later reference defines them.
