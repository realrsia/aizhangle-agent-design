# Icon Toggles

Use numeric values from `assets/tokens/switch-tokens.json`.

## Rule: Icon toggles are state controls, not icon buttons

Use icon toggles for visibility, sound, watch, and pin states.

Why:
Icon toggles indicate persistent state. Ordinary icon buttons trigger one-off actions.

Verify:

- Icon toggles do not use ordinary button type, size, or state rules.
- No container background is added.
- Icon color follows the toggle-specific state rule.
- Check row structure before matching icon semantics.
- In setting-list rows with left main/sub text and a standard right control, do not use eye, sound, watch, or pin icon toggles.
- In selection-list rows, do not replace left-side Checkbox or Radio controls with eye, sound, watch, or pin icon toggles.
- Use eye, sound, watch, or pin only for a function switch entry, shortcut state entry, toolbar action, or operation slot whose control itself is an icon.
- A matching word such as visibility, sound, watchlist, monitoring, fixed, or pinned is not enough by itself; the structure must also be an icon-toggle entry or the design must explicitly show an icon toggle.
- Do not use eye, sound, watch, or pin as decorative, leading, helper, or standard list-control icons in ordinary list rows.
- Prefer the approved product icon library when assets are available; do not invent final eye, sound, watch, or pin shapes from scratch.

## Rule: Eye toggle uses text-d

Eye visible/hidden toggle uses one fixed size and color.

Why:
Visibility toggle should stay low-emphasis and not imply financial state.

Verify:

- Size is 16x16.
- Color uses `xzl/color/text/tertiary`.

## Rule: Sound toggle uses text-a

Sound toggle uses primary text color.

Why:
Sound state needs stronger readability than low-emphasis utility toggles.

Verify:

- Size is 22x22.
- Color uses `xzl/color/text/primary`.

## Rule: Watch and pin toggles use text-b off and red on

Watch and pin toggles have two sizes by scenario and red enabled state.

Why:
These toggles mark active monitoring or fixed status and need clear on/off distinction.

Verify:

- Normal watchlist settings page uses 22x22.
- Long-press stock bubble uses 16x16.
- Off state uses `xzl/color/text/strong`.
- On state uses `xzl/color/primary/red`.
- No background container is added.
