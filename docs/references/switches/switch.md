# Switch

Use numeric values from `assets/tokens/switch-tokens.json`.

## Rule: Use the three approved switch sizes

Switch controls use `large`, `medium`, or `small`.

Why:
The switch track, thumb, inset, and loading stroke are a single size bundle.

Verify:

- `large`: track 46x28, thumb 24x24.
- `medium`: track 33x20, thumb 17.22x17.22.
- `small`: track 23x14, thumb 12x12.
- Do not mix track size, thumb size, inset, or loading stroke from different sizes.

## Rule: Position the thumb by state and size

On state uses the on-position values. Off state reverses the left/right values.

Why:
Thumb placement communicates on/off state and must remain precise across sizes.

Verify:

- `large` on: left 20, right 2; off: left 2, right 20.
- `medium` on: left 14.85, right 0.93; off: left 0.93, right 14.85.
- `small` on: left 10, right 1; off: left 1, right 10.
- Vertical inset: large 2, medium 1.39, small 1.

## Rule: Use approved switch colors

Track, thumb, and disabled colors resolve by mode and state.

Why:
Switch states need clear meaning in both light and dark mode.

Verify:

- On track uses `xzl/color/primary/red`.
- Off track uses dark `30% #FFFFFF` and light `CCD0D8`.
- Thumb uses dark `EEEEEE` and light `xzl-color-special` white.
- Radius for track and thumb is 999px.
- Thumb shadow uses y 3, blur 5, `8% #000000` in both modes.

## Rule: Disabled state uses switch-specific rules

Disabled switch keeps its on/off state but applies disabled treatment.

Why:
Disabled state should communicate both unavailable interaction and current value.

Verify:

- Disabled switch uses 40% overall opacity.
- Disabled on and disabled off remain visually distinguishable.

## Rule: Loading applies only to switch

Loading state is only defined for switch controls.

Why:
Loading feedback belongs to async on/off changes, not checkbox, radio, segmented, or icon toggles.

Verify:

- Loading icon is a red line segment.
- Loading line rotates clockwise.
- Loading stroke width: large 1.5, medium 1.08, small 0.75.
- Do not add loading state to other switch-family controls.
