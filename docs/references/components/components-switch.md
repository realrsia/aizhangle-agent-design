# Switches

Use this file as the switch router. Switch rules cover mobile app UI and Figma generation/review.

Positive/spec example:

- `assets/examples/switch-system.png`

Load the smallest relevant switch references:

- Switch track/thumb/loading rules: `references/switches/switch.md`.
- Segmented switch rules: `references/switches/segmented.md`.
- Checkbox and check-icon rules: `references/switches/checkbox.md`.
- Radio rules: `references/switches/radio.md`.
- Eye, sound, watch, and pin icon toggles: `references/switches/icon-toggles.md`.
- Switch review checklist and severity: `references/switches/audit.md`.

Use numeric values only from:

- `assets/tokens/switch-tokens.json`

## Rule: Switch family is state control, not action control

Use switch-family components for state selection or state toggling, not for actions.

Why:
Buttons execute actions; switches represent persistent state or selection. Mixing them causes wrong states, sizes, and accessibility semantics.

Verify:

- Switches, checkboxes, radios, segmented switches, and icon toggles are not styled with ordinary button rules.
- Switch-family controls use switch states: on/off, selected/unselected, disabled, or loading where applicable.

## Rule: Decide list structure before icon semantics

Choose the switch-family subtype by row structure before matching words such as visibility, sound, watchlist, or pin.

Why:
Setting lists, selection lists, and icon-toggle entries can all describe state. If wording is checked before structure, icon toggles can incorrectly replace standard list controls.

Verify:

- Setting-list row means left main/sub text with a standard control area; use Switch or Segmented Switch as the right control.
- Selection-list row means Checkbox or Radio plus option text; Checkbox or Radio may appear before the text on the left.
- Icon-toggle entry means a function switch entry, shortcut state entry, toolbar action, or operation slot whose control itself is an icon.
- Do not use eye, sound, watch, or pin icon toggles as standard controls in setting-list or selection-list rows.
- Use eye, sound, watch, or pin icon toggles only when the structure is an icon-toggle entry or the provided design explicitly uses an icon toggle.

## Rule: Do not mix selection models inside one option group

Use one selection model for one question, field, or option group.

Why:
Radio means single choice and checkbox means multiple choice. Mixing them inside the same group makes the user's selection rules unclear.

Verify:

- One option group uses radio only when exactly one option can be selected.
- One option group uses checkbox only when multiple options can be selected.
- Do not mix radio and checkbox within the same question, field, or option group.
- Radio and checkbox may coexist on the same page when they belong to different setting groups, fields, or business questions.
- When radio and checkbox coexist on one page, separate groups with a clear title, spacing, divider, or container boundary.

## Rule: Do not invent internal text or icons

Only segmented switches may contain text inside the control. Other switch-family controls use external labels or icon-only state.

Why:
Extra text/icons inside switch controls change their component identity and break compact mobile layouts.

Verify:

- Switch tracks do not contain text or invented icons.
- Checkbox/radio controls do not include extra internal icons beyond the specified check/dot.
- Icon toggles use only the specified icon.

Use `assets/templates/switch-output-checklist.json` for generated switch-family artifacts.
