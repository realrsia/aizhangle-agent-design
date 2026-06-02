# Component Decision

Use this file before applying button or tab rules.

## Rule: Decide by behavior before appearance

Classify the component by what it does, not by whether it looks like a pill, chip, or red control.

Why:
Buttons and tabs can share rounded shapes and red selected/action colors. Applying the wrong rule set creates inconsistent behavior, states, sizing, and review findings.

Verify:

- If it switches content or views inside the same page, classify it as Tab or Segmented Control.
- If it triggers submit, confirm, cancel, execute, open, navigate, or command behavior, classify it as Button.
- If multiple peer options share one active/selected state, classify it as Tab or Segmented Control.
- If it is a single action entry, classify it as Button.

## Rule: Separate segmented switch from tab segmented control

Classify compact segmented controls by their behavior and structure before naming them.

Why:
Segmented switch and tab segmented control can both look like grouped pills. Treating a status selector as a tab, or a page-content switcher as a segmented switch, causes wrong tokens, states, and review findings.

Verify:

- Segmented switch chooses status, frequency, compact mode, or another local setting.
- Segmented switch has one shared track plus a selected slider/segment.
- Segmented switch has no more than 3 options.
- Segmented switch does not switch the main page content, main sections, list views, or tab panels.
- Tab segmented control switches main page content, page sections, list views, ranking categories, or tab panels.
- When the visible purpose is page navigation or content replacement, classify it as Tab even if it has a track-like background.

## Rule: Tabs do not use the button size system

Do not apply button height, padding, icon, radius, or state bundles to tabs.

Why:
Tabs express selection and content switching. Buttons express actions and use a different size/state system.

Verify:

- Tab states are active/selected/inactive, not default/pressed/disabled.
- Tab dimensions are not forced to `button-tokens.json` values.
- Tab selected style follows `components-tabs.md`.

## Rule: Buttons do not use tab selected styles

Do not apply tab active/selected styling to ordinary buttons.

Why:
Buttons need clear action states. Tab selected styles can make actions look like filters or view switches.

Verify:

- Buttons use default/pressed/disabled states.
- Buttons follow `components-button.md` and `references/buttons/`.
- Buttons do not become one option in a selected tab group unless the component is reclassified as Tab/Segmented Control.

## Rule: Switch-family controls are not buttons

Classify switch-family controls by state-toggle behavior before applying button or tab rules.

Why:
Switches, checkboxes, radios, and icon toggles control state. They often look compact like buttons or tabs, but their behavior, states, sizing, and colors are different.

Verify:

- Switch controls one boolean setting on/off.
- Segmented switch belongs to the switch family when it selects status, frequency, or mode without switching main content.
- Checkbox controls multi-select or check state and is not treated as Button.
- Radio controls single-choice state and is not treated as Button.
- Icon toggles such as eye, sound, watch, and pin represent state and are not ordinary icon buttons.
- Switch-family controls follow `components-switch.md`.

## Severity

- P1: Button/Tab classification is wrong and changes expected behavior or state semantics.
- P2: Button/Tab visual rules are mixed but behavior remains understandable.
