# Button Layout

Use numeric values from `assets/tokens/button-tokens.json`.

## Rule: Ordinary buttons are content-sized by default

Ordinary buttons size to their content unless the surrounding layout requires full width.

Why:
Buttons appear in dense mobile app layouts where forced full-width buttons can waste space.

Verify:

- Buttons do not stretch by default.
- Width comes from text, icons, padding, and local layout.

## Rule: Bottom primary actions may fill width

Bottom primary action buttons may fill available width when the page layout calls for it.

Why:
Bottom action areas often need large touch targets and clear primary action emphasis.

Verify:

- Full width is controlled by the containing layout.
- Button internal size rules still apply.

## Rule: Paired buttons are equal width with 15px gap

Two side-by-side action buttons use equal width and 15px spacing.

Why:
Balanced paired actions make confirmation/cancel decisions easier to scan.

Verify:

- Both buttons share equal width.
- Gap between buttons is 15px.

## Rule: Icon-only buttons are square

Icon-only buttons use equal width and height for the selected size.

Why:
Independent icon buttons should look stable and be easy to tap.

Verify:

- Width equals height.
- Height matches the selected size's button height.
- Icon-only padding is 10px on all sides unless the layout provides an equivalent square size.

## Rule: Icon-only buttons exist for every button type

Each of the six button types may have an icon-only variant.

Why:
Icon-only is a structure variant, not a separate visual type.

Verify:

- Icon-only primary, assist, outline, text, link, ghost-outline, and ghost-text follow their type colors.
- Icon-only buttons contain no text.
