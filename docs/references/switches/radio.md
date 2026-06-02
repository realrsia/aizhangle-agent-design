# Radio

Use numeric values from `assets/tokens/switch-tokens.json`.

## Rule: Do not use native/default radio styling

Build radio controls from approved token geometry instead of platform default radio appearances.

Why:
Native radio controls vary by platform and often produce the wrong stroke, fill, dot size, and dark-mode treatment.

Verify:

- Radio visuals follow this file and `assets/tokens/switch-tokens.json`.
- Do not use browser, iOS, Android, or design-tool default radio styling as the final UI.
- Selected dot remains the approved fixed size and does not shrink with inherited platform styling.
- Pay special attention to light mode, where native/default radio styling often changes the selected dot size.

## Rule: Radio uses a 24x24 slot and 20x20 circular container

Radio controls use one approved size.

Why:
Radio controls need consistent layout and tap affordance while keeping the visible circle aligned to the Figma component.

Verify:

- Layout slot is 24x24.
- Visible container is 20x20 and centered inside the slot.
- Container is circular with radius 999px.
- Container has no background in normal states.
- Stroke is inner 1.5px.
- Slot, container, radius, and stroke geometry are identical in light and dark modes.

## Rule: Selected radio uses red stroke and red dot

Selected radio communicates single-choice state through stroke and center dot.

Why:
The selected state should be clear without looking like a checkbox.

Verify:

- Selected stroke uses `xzl/color/primary/red`.
- Selected inner dot is 10x10.
- Selected inner dot remains fixed at 10x10 in all generated and reviewed states.
- Selected inner dot is identical in light and dark modes; mode changes only resolve color, not geometry.
- Selected inner dot uses `xzl/color/primary/red`.

## Rule: Radio group is single-select only

Use radio for option groups where exactly one item can be selected.

Why:
Radio communicates mutual exclusion. Mixing it with checkbox inside one group breaks that meaning.

Verify:

- A radio option group does not include checkbox controls.
- Radio and checkbox can appear on the same page only when they belong to separate groups or fields.
- Separate mixed page-level groups with clear titles, spacing, dividers, or containers.

## Rule: Unselected radio uses text-e stroke

Unselected radio uses the lower-emphasis text token as stroke.

Why:
Unselected choices should remain visible without competing with selected red.

Verify:

- Unselected stroke uses `xzl/color/text/quaternary`.
- No center dot is present.

## Rule: Disabled radio follows special unchecked dark-mode treatment

Disabled radio mostly uses 40% opacity, with a special dark-mode background for unselected state.

Why:
Unchecked disabled controls need visibility in dark mode without looking active.

Verify:

- Disabled selected radio applies 40% overall opacity.
- Disabled unselected radio in dark mode adds background `#08152A` and applies 40% overall opacity.
