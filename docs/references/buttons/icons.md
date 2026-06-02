# Button Icons

Use numeric values from `assets/tokens/button-tokens.json`.

## Rule: Support five structures

Every button uses one structure: text-only, leading-icon, trailing-icon, badge-icon, or icon-only.

Why:
Separating structure from visual type lets each of the six button types support consistent variants.

Verify:

- Leading icon order is icon then text.
- Trailing icon order is text then icon.
- Badge-icon style places the small status icon next to text.
- Icon-only buttons contain only an icon.

## Rule: Ordinary icons use approved sizes

Ordinary leading/trailing icons use the size mapped to button size.

Why:
Icon scale must match label scale to keep buttons balanced.

Verify:

- `large`: ordinary icon 20x20.
- `medium`: ordinary icon 18x18.
- `small`: ordinary icon 16x16.
- `mini`: ordinary icon 14x14.

## Rule: Badge icons use approved sizes and bottom alignment

Badge icons use the size mapped to button size and align to the text bottom.

Why:
Badge icons are visual status marks beside text, not normal action icons.

Verify:

- `large`: badge icon 12x12.
- `medium`: badge icon 12x12.
- `small`: badge icon 8x8.
- `mini`: badge icon 8x8.
- Badge icon aligns to the bottom of the text.
- This bottom-alignment rule is used only for badge-icon structure.

## Rule: Ordinary icons align horizontally with text

Leading and trailing ordinary icons align horizontally with text.

Why:
Ordinary button icons are part of the action label and should read as one centered unit.

Verify:

- Icon and text are vertically centered together.
- Badge bottom alignment is not applied to ordinary icons.

## Rule: Icon spacing follows size

Icon-to-text spacing follows the approved size mapping.

Why:
Spacing must scale down for mini buttons without crowding larger buttons.

Verify:

- `large`: ordinary icon gap 4px, badge icon gap 4px.
- `medium`: ordinary icon gap 4px, badge icon gap 4px.
- `small`: ordinary icon gap 4px, badge icon gap 4px.
- `mini`: ordinary icon gap 2px, badge icon gap 2px.

## Rule: Icon-only buttons use icon-only sizing

Icon-only buttons contain only an icon and use the icon-only size mapping.

Why:
Independent icon buttons must stay compact and square.

Verify:

- `large`: icon-only icon 22x22.
- `medium`: icon-only icon 20x20.
- `small`: icon-only icon 18x18.
- `mini`: icon-only icon 16x16.
- No text is present.
