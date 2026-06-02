# Segmented Switch

Use numeric values from `assets/tokens/switch-tokens.json`.

## Rule: Segmented switch belongs to switch family

Do not classify segmented switches as Button or Tab.

Why:
Segmented switches express compact state selection with a moving selected segment, not action execution or page tab navigation.

Verify:

- Segmented switch follows this file, not `components-button.md`.
- It is listed as switch family in `component-decision.md`.
- It chooses status, frequency, compact mode, or another local setting.
- It has one shared track plus a selected slider/segment.
- It has no more than 3 options.
- It does not switch main page content, page sections, list views, ranking categories, or tab panels.
- If the control switches content or views, classify it as Tab and follow `components-tabs.md`.

## Rule: Use approved segmented dimensions

Segmented switch uses the fixed control geometry and adaptive width.

Why:
Consistent geometry keeps compact state selection readable.

Verify:

- Height is 28px.
- Track inset is 1px on all sides.
- Segment gap is 0.
- Track and selected segment radius are 4px.
- Maximum option count is 3.
- Selected segment width is equal division of available container width.

## Rule: Text must remain fully visible

Segmented switch text must fit without shrinking or ellipsis.

Why:
Segmented switches are small; hidden text makes state selection ambiguous.

Verify:

- Text padding inside selected segment is 10px left and right.
- Overall width is determined by the page context.
- Text displays fully at 13px.
- Do not reduce font size to force fit.
- Do not truncate with ellipsis.
- If text does not fit, shorten the label content.

## Rule: Use approved segmented colors

Container, selected segment, and text colors resolve by mode and state.

Why:
Segmented state needs strong selected contrast while staying separate from button and tab systems.

Verify:

- Values must come from `assets/tokens/switch-tokens.json`.
- Container background uses dark `xzl/color/surface/card-level-1` and light `12% #A6ACB8`.
- Selected segment background uses dark `30% xzl/color/primary/blue` and light `xzl/color/primary/red`.
- Selected text uses `xzl/color/text/on-primary` and resolves to `#FFFFFF` in both light and dark modes.
- Unselected text uses `xzl/color/text/tertiary`, resolving to light `#6D778B` and dark `50% #FFFFFF`.

## Rule: Use approved segmented typography

Segmented text uses PingFang SC 13px.

Why:
Text style communicates selected state without adding extra visual noise.

Verify:

- Selected text uses PingFang SC Medium, 13px.
- Unselected text uses PingFang SC Regular, 13px.
