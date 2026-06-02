# Overlays

## Rule: Use mobile-native overlay patterns

Use bottom sheets, semi-floating panels, centered alerts, popovers, and dropdown panels as mobile app interaction layers, not web-style dialogs.

Why:
新涨乐 overlays must support fast financial workflows on a phone while preserving page context.

Verify:

- Overlay placement matches the interaction: bottom sheets for action lists/forms, centered alerts for short confirmations, dropdown panels for grouped selection.
- Background context is dimmed through `xzl/color/mask/default` when modal focus is needed.
- Content remains readable in both light and dark modes.

## Rule: Overlay surfaces follow radius and surface rules

Use 20px radius for dropdown popovers, semi-floating panels, and work areas. Use 8px radius for modal dialogs.

Why:
Different overlay types need recognizable hierarchy while staying inside the approved radius scale.

Verify:

- Bottom sheets, dropdowns, and semi-floating panels use 20px radius where applicable.
- Centered modal dialogs use 8px radius.
- Filled overlay surfaces do not add heavy borders.

## Rule: Overlay actions keep hierarchy clear

Primary confirmation actions use red emphasis. Cancel and secondary actions stay visually lighter.

Why:
Financial confirmation flows need clear decision hierarchy without visual noise.

Verify:

- Confirm/primary action uses `xzl/color/primary/red`.
- Cancel/secondary action uses a lighter treatment consistent with button rules.
- Critical warnings remain readable and do not rely on decoration alone.

## Rule: Keyboard and safe-area states remain usable

Input overlays with keyboard must keep title, input content, actions, and keyboard-safe spacing visible.

Why:
Mobile editing flows fail if actions or content are hidden by the keyboard or bottom safe area.

Verify:

- Action buttons are visible above the keyboard.
- Input text and character count remain readable.
- Bottom safe area is respected.
