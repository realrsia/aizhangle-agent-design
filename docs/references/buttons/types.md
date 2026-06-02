# Button Types

Use the color rules here for ordinary mobile app buttons. Do not apply these rules to trading buy/sell actions.

## Rule: `button/primary`

Use red background, white text, and white icons. Do not invert text/icon color in dark mode. Do not add a border.

Why:
Primary buttons need strong product emphasis and stable readability across light and dark modes.

Verify:

- Background uses `xzl/color/primary/red`.
- Text uses `xzl/color/text/on-primary`.
- Icons follow text color.
- No border is present.
- Dark mode text and icons remain white.

## Rule: `button/assist`

Use red text/icons, red 10% background, and no border.

Why:
Assist buttons are secondary but still action-related. Red at low opacity preserves action meaning without competing with primary buttons.

Verify:

- Text and icons use `xzl/color/primary/red`.
- Background is derived from `xzl/color/primary/red` at 10% opacity in both modes.
- No border is present.

## Rule: `button/outline`

Use red text/icons, transparent background, and 0.5px red 50% border.

Why:
Outline buttons provide secondary emphasis while staying connected to the primary action color.

Verify:

- Text and icons use `xzl/color/primary/red`.
- Background is transparent or absent.
- Border width is 0.5px.
- Border color uses `xzl/color/primary/red/50`.

## Rule: `button/text`

Use red text/icons with no background and no border.

Why:
Text buttons support lightweight actions without adding surface weight.

Verify:

- Text and icons use `xzl/color/primary/red`.
- No background is present.
- No border is present.

## Rule: `button/link`

Use blue text/icons with no background and no border.

Why:
Link buttons communicate navigation or detail expansion instead of primary app action.

Verify:

- Text and icons use `xzl/color/primary/blue`.
- No background is present.
- No border is present.

## Rule: `button/ghost-outline`

Use `xzl/color/text/tertiary` text/icons, transparent background, and 0.5px `xzl/color/text/quaternary` border.

Why:
Ghost outline buttons are low-emphasis controls that should not compete with action or financial-state colors.

Verify:

- Text and icons use `xzl/color/text/tertiary`.
- Background is transparent or absent.
- Border width is 0.5px.
- Border color uses `xzl/color/text/quaternary`.

## Rule: `button/ghost-text`

Use `xzl/color/text/tertiary` text/icons with no background and no border.

Why:
Ghost text buttons provide the weakest action treatment.

Verify:

- Text and icons use `xzl/color/text/tertiary`.
- No background is present.
- No border is present.

## Rule: Icons follow text color

Button icons, including badge icons, follow the button text color.

Why:
Keeping icon and text color aligned makes button type easy to audit.

Verify:

- Icon color equals the resolved text token for the same button type.
- No independent icon color is introduced.
