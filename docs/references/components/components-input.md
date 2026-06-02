# Inputs

## Rule: Background inputs do not use borders

Inputs with an approved background color do not add a border.

Why:
The filled input style should stay light and app-like; extra borders make it visually noisy.

Verify:

- Filled input background uses `xzl/color/input/background`.
- Filled input border/stroke is absent.

## Rule: Placeholder text uses text-e

Unentered hint or placeholder text uses `xzl/color/text/quaternary`, mapped from original `xzl-color-text-e`.

Why:
Placeholder content should be weaker than real input text but still readable in both modes.

Verify:

- Placeholder references `xzl/color/text/quaternary` or `--xzl-color-text-quaternary`.
- Placeholder does not use primary, secondary, or arbitrary gray.

## Rule: Inputs use 4px radius

Use 4px radius for inputs.

Why:
Inputs need a compact control feel distinct from cards and dialogs.

Verify:

- Input radius is 4px.
