# Bottom Bar States

Use this file for supported bottom-bar state names and validation rules.

## Rule: Declare input mode explicitly

Bottom-bar input mode is either voice input or text input.

Why:
Mode determines the visible input prompt, keyboard/voice switch asset, pause icon metric, and active interaction.

Verify:

- Output declares `inputMode: voice` or `inputMode: text`.
- Voice default state shows `按住说话`.
- Text default state shows `提问或搜索`.
- Voice input shows the voice prompt style and voice-state material.
- Text input shows the placeholder or entered text style and text-state material.
- Do not infer input mode only from a label in the mockup.

## Rule: Center voice input content as one group

Voice input centers the voice icon and prompt text as a combined content group.

Why:
Centering only the text or only the container makes the icon/text pair look offset inside the pill.

Verify:

- Voice input contains the voice icon and `按住说话` text.
- The icon plus text group is horizontally centered inside the input pill.
- The voice icon itself renders at `13x16`.
- The group remains centered in both light and dark modes.

## Rule: Text input placeholder starts 16px from the input pill left edge

For any bottom-bar variant that contains `inputPill` and `inputMode: text`, the placeholder `提问或搜索` starts `16px` from the left edge of the `inputPill`.

Why:
Text mode is a left-aligned editing/search state. The right-side `inputModeToggle` needs reserve space for text overflow, but it must not move the placeholder start position.

Verify:

- This rule applies to `primaryPage`, `chatPage`, and any current or future bottom-bar variant that reuses `inputPill`.
- In `inputMode: text`, the placeholder text is `提问或搜索`.
- The placeholder left edge is `16px` from the `inputPill` left edge.
- Right-side `inputModeToggle` reserve space affects only the available text width and right-side overflow handling.
- Right-side `inputModeToggle` reserve space does not change the placeholder left inset.
- Do not replace the `16px` left inset with nearby approximate values such as `18px` or `20px`.
- Switching voice/text updates copy, icon, material, and alignment rule together.

## Rule: Input mode toggle shows next available mode, not current mode

The bottom-bar `inputModeToggle` represents the next available input mode, not the mode currently active.

Why:
This toggle is an action affordance. Binding the toggle icon to the current mode makes text mode show a keyboard icon and voice mode show a voice icon, which reverses the interaction and often pulls the wrong dark asset color.

Required mapping:

| Current inputMode | Input copy | Toggle icon meaning | Light asset | Dark asset |
| --- | --- | --- | --- | --- |
| `text` | `提问或搜索` | switch to voice | `assets/bottom-bar/icons/bottom-bar-mode-voice-light.svg` | `assets/bottom-bar/icons/bottom-bar-mode-voice-dark.svg` |
| `voice` | `按住说话` | switch to keyboard/text | `assets/bottom-bar/icons/bottom-bar-mode-keyboard-light.svg` | `assets/bottom-bar/icons/bottom-bar-mode-keyboard-dark.svg` |

Verify:

- In `inputMode: voice`, the input shows the `13x16` voice icon plus `按住说话`.
- In `inputMode: voice`, the icon and text are centered as one combined group.
- In `inputMode: voice`, prompt typography is PingFang SC Medium `500`, `16px`.
- In `inputMode: voice`, prompt token is `xzl/color/primary/dark-blue`.
- In `inputMode: voice`, the toggle displays the keyboard icon using `bottom-bar-mode-keyboard-light.svg` or `bottom-bar-mode-keyboard-dark.svg` by color mode.
- In `inputMode: text`, the input shows `提问或搜索`.
- In `inputMode: text`, placeholder typography is PingFang SC Regular `400`, `16px`.
- In `inputMode: text`, placeholder token is `xzl/color/text/quaternary`.
- In `inputMode: text`, the toggle displays the voice icon using `bottom-bar-mode-voice-light.svg` or `bottom-bar-mode-voice-dark.svg` by color mode.
- `inputMode: text` must not show a keyboard icon.
- `inputMode: voice` must not show a voice icon as the toggle.
- Dark text/default state must not use `assets/bottom-bar/icons/bottom-bar-mode-keyboard-dark.svg`; it uses `assets/bottom-bar/icons/bottom-bar-mode-voice-dark.svg`.
- Switching voice/text updates copy, icon, material, and state declaration together.
- Do not change only the icon or only the text.
- The toggle state is declared in structure, props, DOM, or Figma layer naming.
- Light mode uses the mapped `*-light.svg` asset for the next mode.
- Dark mode uses the mapped `*-dark.svg` asset for the next mode.
- Dark mode toggle icons render at `30x30`.

## Rule: Declare generation state explicitly

Bottom bars that can send or receive AI responses declare their generation state.

Why:
The UI changes when a response is generating or paused.

Verify:

- Supported states include `default`, `messageHint`, `hasInput`, `hasInputWithMessageHint`, and `generating`.
- Generating state shows the approved pause affordance.
- Message hint state exposes the unread or hint node rather than only changing the prompt text.

## Rule: Scene entry selection is a state, not a restyled default

Scene entries such as 自选/持股 and 交易 declare selected state when active.

Why:
Selected entries use dedicated approved assets and must not be simulated by recoloring default icons.

Verify:

- Output declares `selectedSceneEntry` when an entry is active.
- Selected entry uses `bottom-bar-entry-*-active-*.png` where provided.
- Default icon and text states use their own approved assets.

## Rule: Thinking mode selected state is explicit

AI chat bottom bars expose whether 深度思考 is selected.

Why:
Thinking mode changes behavior, not only presentation.

Verify:

- Output declares `thinkingMode: selected` or `thinkingMode: unselected` when the thinking chip is present.
- Selected thinking mode has visible selected-state evidence in the chip or icon state.
- Assistant chips such as 收藏问题, 任务助手, or other agents remain separate from thinking mode.

## Rule: Light and dark state assets must not mix

Each visible state resolves to mode-matched assets.

Why:
The bottom bar has independent light and dark assets for background, shadows, and icons.

Verify:

- Dark mode uses only `*-dark.*` bottom-bar assets for background and mode-specific icon states.
- Light mode uses only `*-light.*` bottom-bar assets for background and mode-specific icon states.
- Shared system SVGs may be token-colored, but bottom-bar PNG state assets are not recolored across modes.
- Mode-matched asset binding is the reusable rule; do not document one-off local implementation mistakes as design-system incidents.

## Rule: Standalone prototypes expose relevant bottom-bar interactions

When generating a standalone bottom-bar prototype, wire the visible state controls when the component exposes them.

Why:
Static screenshots can hide state-binding errors. A standalone component prototype should prove that input mode and selected entry states use the correct assets and materials.

Verify:

- If `inputModeToggle` is present, it is clickable.
- Voice mode switches to text mode.
- Text mode switches to voice mode.
- Voice mode displays `按住说话`, the voice input icon, and the keyboard toggle asset.
- Text mode displays `提问或搜索` placeholder and the voice toggle asset.
- Text default uses PingFang SC Regular `400`, `16px`, and `xzl/color/text/quaternary`.
- Dark text-input mode uses the approved quiet translucent material, not the dark voice gradient material.
- If scene-entry active assets exist, scene-entry buttons support default and selected states.
- Selected scene entry uses the approved active PNG asset.
- Selected scene-entry visual bounds are `86x86`, anchored to the center of the `48x48` layout box.
- Selected state does not shift entry center, change spacing, or resize the `48x48` hit area.
- Clicking the same selected entry may clear `selectedSceneEntry` in prototypes unless product requirements specify persistent selection.
