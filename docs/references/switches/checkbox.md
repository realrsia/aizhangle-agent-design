# Checkbox

Use numeric values from `assets/tokens/switch-tokens.json`.

## Rule: Multi checkbox uses a 24x24 slot and 20x20 circular container

Use multi checkbox when the control has a visible selectable container.

Why:
The 24x24 slot keeps layout and tapping consistent, while the visible control remains the approved 20x20 circle from the Figma component.

Verify:

- Layout slot is 24x24.
- Visible container is 20x20 and centered inside the slot.
- Container is circular with radius 999px.
- Selected state uses red background, no border.
- Selected state uses `assets/icons/checkbox-check.svg`.
- Selected check icon is 12x9.
- Selected check icon is horizontally and vertically centered inside the 20x20 visible container.
- Do not align the selected check icon by text baseline, line-height, or inline SVG default alignment.
- In Figma, center-align the icon to the visible container; in frontend code, use flex/grid center or absolute center positioning.
- Selected check icon uses `xzl/color/text/on-primary` and resolves to `#FFFFFF` in both light and dark modes.
- Use the token or CSS variable for `xzl/color/text/on-primary`; do not hardcode `#FFFFFF` in business component styles.
- Do not map the selected check icon to ordinary text tokens such as `xzl/color/text/primary`, `xzl/color/text/tertiary`, or `xzl/color/text/quaternary`.
- Unselected state has no background and uses 1.5px inner stroke with `xzl/color/text/quaternary`.

## Rule: Checkbox group is multi-select only

Use checkbox for option groups where more than one item can be selected.

Why:
Checkbox indicates independent choices. Mixing it with radio inside one group creates unclear selection semantics.

Verify:

- A checkbox option group does not include radio controls.
- Radio and checkbox can appear on the same page only when they belong to separate groups or fields.
- Separate mixed page-level groups with clear titles, spacing, dividers, or containers.

## Rule: Check-icon-only has no container

Use check-icon-only when the control is only the check mark.

Why:
This variant is for minimal selected indication and should not create an extra touch container.

Verify:

- Selected state shows only `assets/icons/check-icon-only.svg`.
- Check-icon-only size is 18x13.
- Check-icon-only uses `xzl/color/primary/red`.
- Unselected state is not displayed.
- Do not add a container, border, or background.

## Rule: Disabled checkbox follows special exceptions

Disabled checkbox mostly uses 40% opacity, with special unchecked dark-mode treatment.

Why:
Unchecked disabled controls need visibility in dark mode without looking active.

Verify:

- Disabled selected checkbox applies 40% overall opacity.
- Disabled unselected multi checkbox in dark mode adds background `#08152A` and applies 40% overall opacity.
- Disabled unselected check-icon-only is not displayed.
