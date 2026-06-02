# Bottom Bar Icons

Use this file for bottom-bar icon assets, dimensions, hit areas, and mode/state matching.

Approved bottom-bar assets live in `assets/bottom-bar/icons/`. Shared system arrows live in `assets/icons/`.

## Rule: Use the approved asset type for each icon family

Special-effect icons use approved bitmap assets when SVG cannot match the visual design. Agent chip icons use approved SVG assets with mode color binding.

Why:
Several bottom-bar icons include shadows, glows, gradients, or bitmap effects that differ from simplified SVG exports. Agent chip icons are simpler symbol assets and should remain color-bindable SVGs.

Verify:

- Buy, sell, cancel, and scene-entry selected states use approved PNG assets when those are the supplied source.
- Agent chip icons use `assets/bottom-bar/icons/bottom-bar-agent-*.svg` with `currentColor` binding.
- Generated HTML, Figma, or component output references the normalized asset path.
- Do not redraw special-effect bitmap icons with generic SVG, CSS circles, emoji, or library icons.
- Do not replace agent SVG icons with PNG, emoji, lucide icons, CSS masks, or hand-drawn shapes.
- The final render shows non-zero visible pixels and the correct light/dark asset.

## Rule: Scene entry layout uses a stable 48x48 box

Self-selected/holding, trading, and simulated trading entry icons use the approved entry metric.

Why:
These entries are primary bottom-bar scene switches and need a stable touch target.

Verify:

- Scene entry default layout box is `48x48`.
- Scene entry click/tap hit area is `48x48`.
- 自选/持股 entry default state uses the `48x48` layout box and hit area.
- 交易/模拟交易 entry default state uses the `48x48` layout box and hit area.
- Default icon and text variants use the matching light/dark approved assets.
- Default state shows the icon-only label by default.
- Text-label entry assets appear only when the page context or user request explicitly requires a text version.
- Selected entries use the selected-state approved asset, not a recolored default asset.

## Rule: Scene entry selected visual bounds do not change layout position

Selected scene-entry assets include a larger shadow/glow visual area.

Why:
The selected bitmap can be visually larger than the tappable entry. Treating the selected image size as layout size shifts neighboring controls and breaks the bottom-bar rhythm.

Verify:

- Selected scene-entry asset visual bounds are `86x86`.
- The `86x86` selected-state size is visual bounds only.
- The selected-state layout box remains `48x48`.
- The selected-state hit area remains `48x48`.
- The `86x86` selected visual is anchored to the center point of the `48x48` layout box.
- Selecting an entry does not move the entry center or change spacing between bottom-bar controls.

## Rule: Input mode and pause icons use their approved metrics

Voice/keyboard mode switching and generation pause states use distinct metrics by mode.

Why:
These are small interactive affordances inside the input area; wrong sizing makes the composer feel unbalanced.

Verify:

- Keyboard/voice switch icon renders `30x30` in both light and dark modes.
- Keyboard/voice switch hit area is `30x30` in both modes.
- Voice icon inside the input renders `13x16`.
- Pause icon renders `14x14` in voice-input state and `30x30` in text-input state.
- Pause icon hit area is `14x14` in voice-input state and `30x30` in text-input state.
- Toggle asset binding is based on the current input mode and the next available mode, not the current mode icon.
- Current `inputMode: text` displays the voice switch asset: `assets/bottom-bar/icons/bottom-bar-mode-voice-light.svg` in light mode and `assets/bottom-bar/icons/bottom-bar-mode-voice-dark.svg` in dark mode.
- Current `inputMode: voice` displays the keyboard switch asset: `assets/bottom-bar/icons/bottom-bar-mode-keyboard-light.svg` in light mode and `assets/bottom-bar/icons/bottom-bar-mode-keyboard-dark.svg` in dark mode.
- Voice input mode displays the keyboard icon because it represents switching to keyboard/text input.
- Text input mode displays the voice icon because it represents switching to voice input.
- Light mode uses the mapped `*-light.svg` switch asset and dark mode uses the mapped `*-dark.svg` switch asset.

## Rule: Quote action icons use approved round assets

Stock quote buy, sell, and cancel actions are bottom-bar-specific round action entries.

Why:
They inherit trading semantics but have their own circular icon treatment and hit target.

Verify:

- 买 uses `assets/bottom-bar/icons/bottom-bar-action-buy-light.png` or `bottom-bar-action-buy-dark.png` by mode.
- 卖 uses `assets/bottom-bar/icons/bottom-bar-action-sell-light.png` or `bottom-bar-action-sell-dark.png` by mode.
- 撤 uses `assets/bottom-bar/icons/bottom-bar-action-cancel-light.png` or `bottom-bar-action-cancel-dark.png` by mode.
- Each action renders at `48x48` with a `48x48` hit area.
- Do not replace these actions with ordinary rectangular trading CTA buttons.

## Rule: Agent and system icons use approved metrics

Agent shortcuts and system arrows use small icon metrics inside chips or compact controls.

Why:
Agent affordances should stay secondary to the input and page actions.

Verify:

- Agent icons render at `14x14` from `assets/bottom-bar/icons/bottom-bar-agent-*.svg` and have no independent hit area unless the surrounding chip defines one.
- Agent icon color is bound by mode: light `#2D3A67`, dark `#B2CFFF`.
- Right-expand icon renders `14x14` from `assets/icons/xzl-right-outlined.svg`.
- Up and down expand/collapse icons render `18x18` from `assets/icons/xzl-arrow-up.svg` and `assets/icons/xzl-arrow-down.svg`.

## Asset Name Mapping

Use normalized asset names in generated output. Original Chinese filenames are source-trace only.

- 首页背景_浅色版.svg -> `assets/bottom-bar/backgrounds/bottom-bar-home-bg-light.svg`
- 首页背景_深色版.svg -> `assets/bottom-bar/backgrounds/bottom-bar-home-bg-dark.svg`
- 对话页背景_浅色版.svg -> `assets/bottom-bar/backgrounds/bottom-bar-chat-bg-light.svg`
- 对话页背景_深色版.svg -> `assets/bottom-bar/backgrounds/bottom-bar-chat-bg-dark.svg`
- 个股行情页背景_浅色版.svg -> `assets/bottom-bar/backgrounds/bottom-bar-stock-quote-bg-light.svg`
- 个股行情页背景_深色版.svg -> `assets/bottom-bar/backgrounds/bottom-bar-stock-quote-bg-dark.svg`
- 买_浅色版.png -> `assets/bottom-bar/icons/bottom-bar-action-buy-light.png`
- 卖_浅色版.png -> `assets/bottom-bar/icons/bottom-bar-action-sell-light.png`
- 撤_浅色版.png -> `assets/bottom-bar/icons/bottom-bar-action-cancel-light.png`
- XzlArrow-down.svg -> `assets/icons/xzl-arrow-down.svg`
- XzlArrow-up.svg -> `assets/icons/xzl-arrow-up.svg`
- XzlRightOutlined.svg -> `assets/icons/xzl-right-outlined.svg`
