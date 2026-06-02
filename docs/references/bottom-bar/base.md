# Bottom Bar Base

Use this file for shared bottom-bar geometry, background, safe-area, input typography, and content-spacing rules.

Numeric source: `assets/templates/bottom-bar-component.json`.
Approved visual assets: `assets/bottom-bar/backgrounds/`, `assets/bottom-bar/icons/`, and shared system icons in `assets/icons/`.

## Rule: Use the approved bottom-bar background asset for each variant and mode

Each bottom-bar variant uses its own light and dark background/shadow asset.

Why:
The background includes designed shadow and gradient behavior that should not be recreated from approximate CSS values.

Verify:

- `primaryPage` light uses `assets/bottom-bar/backgrounds/bottom-bar-home-bg-light.svg`.
- `primaryPage` dark uses `assets/bottom-bar/backgrounds/bottom-bar-home-bg-dark.svg`.
- `chatPage` light uses `assets/bottom-bar/backgrounds/bottom-bar-chat-bg-light.svg`.
- `chatPage` dark uses `assets/bottom-bar/backgrounds/bottom-bar-chat-bg-dark.svg`.
- `stockQuotePage` light uses `assets/bottom-bar/backgrounds/bottom-bar-stock-quote-bg-light.svg`.
- `stockQuotePage` dark uses `assets/bottom-bar/backgrounds/bottom-bar-stock-quote-bg-dark.svg`.
- Generated styles reference the approved asset path or component asset; they do not copy raw gradient stops into component CSS.
- Raw colors inside approved bottom-bar SVG/PNG assets are asset-internal facts and must not be extracted into one-off component styles.

## Rule: Preserve variant heights

Use the approved height model for the active variant.

Why:
The bottom bar combines a shadow area, body, input, optional shortcut rows, and iOS safe-area extension. Mixing heights clips controls or changes the page rhythm.

Verify:

- `primaryPage`: body `48px`, shadow `130px`, input `48px`, safe area `34px`.
- `chatPage`: body `89px`, shadow `171px`, input `48px`, safe area `34px`, agent row `26px`.
- `stockQuotePage`: body `131px`, shadow `179px`, input `48px`, safe area `34px`, quote info row `34px`.
- The shadow height is not counted as the content-to-bottom-bar gap.
- The safe-area extension reaches the bottom of the mobile frame and does not contain business controls.

## Rule: Bottom bar container always touches frame bottom

The complete bottom-bar container must sit flush against the bottom edge of the mobile frame or viewport.

Why:
The iOS safe area belongs inside the bottom-bar container. Moving the whole component upward creates unowned blank space and breaks the fixed-bottom shell.

Verify:

- Figma bottom-bar container touches the frame bottom.
- Frontend bottom-bar container uses `bottom: 0` or an equivalent fixed-bottom layout.
- Do not use `bottom: 34px` to push the entire bottom bar upward.
- iOS safe area is the bottom internal region of the bottom-bar container, not an external margin.
- Business controls sit above the safe area.
- Bottom-bar total height equals business content height plus safe-area height.
- Safe-area height defaults to `34px`.
- Safe area does not contain business controls.
- No extra undeclared blank area appears below the operation area.
- Unless the variant explicitly defines another bottom region, the only remaining space below the operation area is the safe area.

## Rule: Use the primaryPage home horizontal layout contract

For 首页 `primaryPage` bottom bars with `trade` and `watchHold` entries, use the fixed 390px component-frame layout contract.

Why:
The primaryPage home bottom bar depends on exact horizontal placement around the input pill. Approximate spacing or grouping entries after the input changes the component hierarchy and interaction rhythm.

Verify:

- Frame/background is `390x130`.
- Body sits `34px` from the bottom and has height `48px`.
- Left scene entry is `trade`, positioned at x `16`, size `48x48`.
- Right scene entry is `watchHold`, positioned with right inset `21`, size `48x48`.
- Input pill is placed between `trade` and `watchHold`.
- Gap from trade entry to input is `16px`.
- Gap from input to watchHold entry is `16px`.
- Input height is `48px`.
- Input radius is `999px`.
- Horizontal model resolves to `left 16 + trade 48 + gap 16 + input auto + gap 16 + watchHold 48 + right 21`.
- In a `390px` frame, input auto width resolves to `225px`.
- Do not replace these values with approximate spacing.
- Do not use responsive media rules that override this component-level spacing in the `390px` prototype or frame.

## Rule: Keep content 20px from the bottom-bar body

Scrollable page content keeps `20px` spacing to the top of the bottom-bar body, excluding shadow.

Why:
The bottom bar may visually cover content through its shadow, but important content should not collide with the control body.

Verify:

- Content bottom padding or final layout spacing accounts for `20px` from content to the bottom-bar body.
- The designed shadow may overlap content and does not count as the `20px` gap.
- Critical table rows, page actions, and readable text are not hidden under the bottom-bar body.

## Rule: Treat the bottom-bar input as a dedicated input pill

Do not style the bottom-bar input by applying only the ordinary input rules.

Why:
The bottom-bar input pill has dedicated capsule shape and light/dark materials. Generic input rules lose the designed glass, gradient, and border behavior.

Verify:

- Primary-page bottom-bar input pill height is `48px`.
- Bottom-bar input pill radius is `999px`.
- Output names the input as a bottom-bar input pill or equivalent component structure, not only as a generic input.
- Voice and text states define their own pill material; do not switch only the label text.

## Rule: Center voice input content against the full input pill

For any bottom-bar variant that contains `inputPill` and `inputMode: voice`, the `13x16` voice icon plus `按住说话` text are treated as one combined content group and centered against the full `inputPill` bounds.

Why:
The voice prompt should read as the primary centered action inside the pill. Reserving space for `inputModeToggle` by shrinking the content area or using asymmetric padding shifts the voice group away from the true pill center.

Verify:

- This rule applies to `primaryPage`, `chatPage`, and any current or future bottom-bar variant that reuses `inputPill`.
- Voice input contains the `13x16` voice icon and `按住说话` text as a combined content group.
- The combined group center aligns with the full `inputPill` center.
- `inputModeToggle` does not participate in the voice content centering calculation.
- Do not shrink the input content container by the toggle width to compute voice centering.
- Do not use left/right asymmetric padding to visually compensate for `inputModeToggle`.
- The right-side toggle may visually coexist inside the pill, but it must not change the voice group center.

## Rule: Use the approved light input pill material

The light-mode bottom-bar input pill uses the approved translucent white material for both text and voice input states.

Why:
The light material separates the input from the bottom bar while preserving the soft AI-app surface. Voice mode does not automatically mean the dark voice gradient material.

Verify:

- Light `inputMode: voice` uses the light translucent white material.
- Light `inputMode: text` uses the light translucent white material.
- Background uses `#FFFFFF 60% -> #FFFFFF 90%`.
- Border uses `0.6px #CDDCF5`.
- The material is applied to the input pill, not to the whole bottom bar background.
- Do not apply the dark voice gradient just because `inputMode` is `voice`; mode and input state must both match.

## Rule: Use the approved dark voice input pill material

Only the dark-mode voice-input pill uses the Figma Inspect three-layer gradient material.

Why:
Voice mode is a prominent action state in the dark bottom bar and depends on layered gradients, stroke, and inner shadow.

Verify:

- Background includes `linear-gradient(245deg, rgba(60,114,255,0) 69.18%, rgba(60,114,255,0.20) 96.58%)`.
- Background includes `linear-gradient(128deg, rgba(255,57,71,0) 64%, rgba(255,57,70,0.20) 104.31%)`.
- Background includes `linear-gradient(102deg, #8BE5FF -13.88%, #D1F0FF 37.07%, #C7E9FF 57.32%, #8ABFFF 104.19%)`.
- Border resolves top-to-bottom from `#FFFFFF 80%` to `#FFFFFF 29%`.
- Inner shadow is `0 0 4px rgba(62,65,122,0.24) inset`.
- These values are the approved bottom-bar material values and must not be replaced by intermediate prototype trial values.
- Do not use this dark voice material in light mode.

## Rule: Use the approved dark text input pill material

The dark text-input pill uses a quieter translucent material than dark voice input.

Why:
Text mode should read as an editable field without the high-emphasis voice gradient.

Verify:

- Background is `#FFFFFF 8%`.
- Border resolves top-to-bottom from `#FFFFFF 8%` to `#FFFFFF 3%`.
- The dark text-input material is distinct from the dark voice-input material.

## Rule: Input text uses mode-specific typography and tokens

Bottom-bar input typography changes by voice/text state.

Why:
Voice input is an action prompt, while text input is a search/question placeholder or entered text field.

Verify:

- Voice default text is `按住说话`.
- Voice prompt uses PingFang SC Medium `500`, `16px`.
- Voice prompt color uses `xzl/color/primary/dark-blue`.
- Text default placeholder is `提问或搜索`.
- Text default placeholder uses PingFang SC Regular `400`, `16px`.
- Text default placeholder uses `xzl/color/text/quaternary`; dark mode resolves to `#FFFFFF 30%`.
- Text default placeholder does not use Medium `500`.
- Entered text uses `xzl/color/text/primary` from source `text-a`.
- Light and dark values resolve through `assets/tokens/token-mapping.json`; do not hardcode token-resolved text colors in component styles.
