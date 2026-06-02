# Switch Audit

Use this checklist for switch generation, adjustment, and review.

## Severity

- P0: Switch-family component is built as Button/Tab, or switch behavior semantics are wrong.
- P1: On/off, selected/unselected, disabled, loading, or light/dark colors are wrong.
- P2: Size, thumb position, radius, stroke, typography, icon size, loading stroke, or segmented text fitting is wrong.
- P3: External label, local layout, or minor consistency suggestion.

## Checklist

- Component is correctly classified as switch family.
- Correct switch subtype is used: switch, segmented, checkbox, radio, or icon toggle.
- State is correct: on/off, selected/unselected, disabled, or loading where applicable.
- Light/dark values match `assets/tokens/switch-tokens.json`.
- Segmented switch is not misclassified as Button or Tab when it selects status, frequency, or mode.
- Tab segmented control is not misclassified as segmented switch when it switches main content, sections, list views, or tab panels.
- Switch size bundle is not mixed.
- Switch thumb position matches state and size.
- Switch loading is red line segment, clockwise, and switch-only.
- Segmented switch has at most 3 options.
- Segmented switch uses one shared track plus selected slider/segment.
- Segmented colors come from `assets/tokens/switch-tokens.json`, including light container `12% #A6ACB8`, light selected background `xzl/color/primary/red`, selected text `#FFFFFF` through `xzl/color/text/on-primary`, and unselected text through `xzl/color/text/tertiary`.
- Segmented text is fully visible, not shrunk or truncated.
- Checkbox container variant uses a 24x24 slot and centered 20x20 circular visible container.
- Checkbox selected state uses red background, no border, and `assets/icons/checkbox-check.svg` as a 12x9 check using `xzl/color/text/on-primary`, which resolves to `#FFFFFF` in both modes; unselected state uses no background and 1.5px inner `xzl/color/text/quaternary` stroke.
- Checkbox selected check icon is horizontally and vertically centered inside the 20x20 visible container, not aligned by text baseline, line-height, or inline SVG defaults.
- Checkbox check icon uses the `xzl/color/text/on-primary` token or CSS variable, not hardcoded `#FFFFFF` in business component styles and not ordinary text tokens.
- Check-icon-only variant uses `assets/icons/check-icon-only.svg` at 18x13 and has no container.
- Radio does not use native/default radio styling.
- Radio uses a 24x24 slot, centered 20x20 circular visible container, 1.5px stroke, and selected dot fixed at 10x10.
- Radio geometry is mode-invariant: light and dark modes keep the same slot, visible container, stroke width, and 10x10 selected dot.
- Icon toggles use correct size and color by scenario, with no container background.
- Eye toggle is 16x16 and uses `xzl/color/text/tertiary`.
- Sound toggle is 22x22 and uses `xzl/color/text/primary`.
- Watch and pin toggles use 22x22 in normal watchlist settings, 16x16 in long-press stock bubbles, `xzl/color/text/strong` off, and `xzl/color/primary/red` on.
- Row structure is checked before icon semantics: setting-list rows use standard right controls, selection-list rows use Checkbox/Radio with text, and icon toggles appear only in function-entry, shortcut-state, toolbar, or operation-slot structures.
- Setting-list rows with left main/sub text and a standard right control do not use eye, sound, watch, or pin icon toggles, even when the copy mentions visibility, sound, watchlist/monitoring, fixed, or pinned.
- Selection-list rows do not replace left-side Checkbox or Radio controls with eye, sound, watch, or pin icon toggles.
- One option group does not mix radio and checkbox controls; radio and checkbox can coexist on one page only when separated into different groups, fields, or business questions.
- No invented internal text or icons are added.

## Finding Format

For switch findings, include:

- Severity.
- Component location.
- Switch subtype, size, state, and mode.
- Violated switch rule.
- Why the rule exists.
- Current design.
- Expected token or value.
- Suggested fix.
- Rule source file.
