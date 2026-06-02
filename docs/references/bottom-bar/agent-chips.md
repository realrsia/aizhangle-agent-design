# Bottom Bar Agent Chips

Use this file for `chatPage` bottom-bar agent chips, including 深度思考, 收藏问题, 任务助手, and other assistant chips in the agent row.

Use with:

- `references/bottom-bar/base.md`
- `references/bottom-bar/variants.md`
- `references/bottom-bar/icons.md`
- `references/bottom-bar/states.md`
- `assets/templates/bottom-bar-component.json`

## Rule: Center the chatPage agent row by default

The `chatPage` agent row is centered as one content group inside the `390px` frame by default.

Why:
The agent row is a secondary assistant shortcut row under the input. Starting the chips from the left edge with only `padding-left: 16px` makes the whole row look off-center when the chip group is narrower than the frame.

Verify:

- Agent row height remains `26px`.
- Agent chips keep the spacing defined by the design system.
- When the total chip width is less than the visible frame width, the chip group is horizontally centered.
- The visual center of the agent-row content group aligns with the center of the `390px` frame.
- Do not left-align the row by default with only `padding-left: 16px`.
- Horizontal scrolling, clipping, or edge fade strategies are allowed only when the total chip width exceeds the visible frame width.

## Rule: Use the approved agent chip material

Agent chips share one compact capsule material.

Why:
The agent row should read as secondary shortcut chips below the input row, not as full buttons or tags.

Verify:

- Background is `#799FFF 10%`.
- Default agent chips have no border.
- Text uses PingFang SC Regular `400`, `12px`.
- Icon renders `14x14`.
- Horizontal padding is `12px` on both sides.
- Vertical padding is `4px` top and bottom.
- Icon-to-text gap is `2px`.
- Light mode text and icon color is `#2D3A67`.
- Dark mode text and icon color is `#B2CFFF`.
- Agent icon uses an approved `assets/bottom-bar/icons/bottom-bar-agent-*.svg` asset.
- Ordinary agent chip icons and text use the same mode color.
- Do not replace agent icons with hand-drawn SVG, emoji, lucide icons, CSS masks, or locally drawn shapes.
- Agent SVG color is bound by mode: light `#2D3A67`, dark `#B2CFFF`.
- In Figma, bind the icon to the mode color variable or an equivalent mode-specific color property.
- In HTML prototypes, mode-changing agent SVGs must use inline SVG, `symbol`/`use` with `currentColor`, or another token-color binding that can be verified by DOM/computed style/screenshot.
- Do not use `<img src="...bottom-bar-agent-*.svg">` alone and claim the SVG inherited parent `color`; `<img>` does not inherit `currentColor` from the parent document.
- Inline SVG output keeps asset trace such as `data-asset="assets/bottom-bar/icons/bottom-bar-agent-*.svg"` or an adjacent source-path comment.
- Do not use CSS filters to recolor old PNG assets.

## Rule: Deep-thinking selected and unselected icons are explicit and exclusive

深度思考 is a special agent chip with explicit selected and unselected icon states.

Why:
Thinking mode changes AI behavior and must be structurally declared. Selected and unselected icons cannot both remain visible, and the unselected SVG still needs mode-color binding.

Verify:

- Output declares `thinkingMode: selected` or `thinkingMode: unselected`.
- Selected background remains `#799FFF 10%`.
- Selected state adds a `0.5px` border.
- Light selected border color is `#2D3A67`.
- Dark selected border color is `#B2CFFF`.
- Selected light icon uses `assets/bottom-bar/icons/deep-thinking-selected-light.svg`.
- Selected dark icon uses `assets/bottom-bar/icons/deep-thinking-selected-dark.svg`.
- Unselected icon uses the original shape from `assets/bottom-bar/icons/bottom-bar-agent-deep-thinking.svg`.
- Unselected icon color is mode-bound: light `#2D3A67`, dark `#B2CFFF`.
- HTML prototypes render the unselected icon through `currentColor` or an equivalent verifiable token-color binding, not only `<img src="...bottom-bar-agent-deep-thinking.svg">`.
- Selected and unselected icon render states are mutually exclusive.
- In `thinkingMode: selected`, only the selected icon is visible.
- In `thinkingMode: unselected`, only the unselected icon is visible.
- If both state icons exist in DOM/layers, the visibility rule or variant condition has enough priority to prevent generic `.agent-chip .agent-icon { display: block }` rules from revealing both icons.
- Do not use `check-icon-only.svg`, `checkbox-check.svg`, hand-drawn check marks, CSS temporary icons, or generic selected icons for 深度思考.

## Rule: Task-assistant chip includes divider and right arrow

任务助手 chip has a compound internal structure.

Why:
The divider and arrow communicate a navigable assistant entry while keeping it visually inside the agent chip family.

Required structure:

`agent icon + text + divider + right arrow`

Verify:

- Content group is horizontally centered.
- Text-to-divider gap is `6px`.
- Divider-to-arrow gap is `6px`.
- Divider height is `12px`.
- Divider thickness is `0.5px`.
- Light divider color is `#2D3A67 50%`.
- Dark divider color is `#B2CFFF 50%`.
- Right arrow renders `14x14`.
- Light arrow color is `#2D3A67`.
- Dark arrow color is `#B2CFFF`.
- Right arrow uses the original shape/path from the shared icon component asset `assets/icons/xzl-right-outlined.svg`.
- Change arrow color through the icon component's color/state binding; do not create bottom-bar-specific arrow copies.
- The arrow color follows the current agent chip mode color: light `#2D3A67`, dark `#B2CFFF`.
- HTML prototypes must not render the final arrow as a fixed-white `<img src="./assets/icons/xzl-right-outlined.svg">`.
- HTML prototypes may inline the approved SVG path with `currentColor` and `data-asset="assets/icons/xzl-right-outlined.svg"`.
- Do not replace the arrow with CSS mask, hand-drawn path, lucide, emoji, or an approximate icon.
