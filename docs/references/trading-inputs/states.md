# Trading Input States

Use this file for trading-input component states and subtype-specific behavior.

## Rule: Code input has search and clear states

代码输入 supports unentered and entered states.

Why:
The code field starts as a searchable selector and becomes a selected security entry that can be cleared.

Verify:

- Unentered code input shows placeholder text such as `请输入代码/名称`.
- Unentered code input renders a search icon at `20x20`.
- Entered code input shows security name and code text.
- Entered code input renders a clear icon at `20x20`.
- Placeholder uses `xzl/color/text/quaternary`.
- Entered text uses `xzl/color/text/primary`.
- Entered code input with a security name plus stock code splits text into runs: security name uses PingFang SC and stock code uses 涨乐财富体.
- The code input value area is horizontally centered; left empty structure and right icon structure must not make the selected value look offset.

## Rule: Numeric stepper input keeps controls visible

数字步进输入 is the default structure for price, quantity, and amount when that field is editable.

Why:
Users need direct increment and decrement controls while entering trading numbers.

Verify:

- Render minus, center value/placeholder/caret, and plus.
- The center value is horizontally centered.
- Input-in-progress does not hide minus or plus.
- Focus shows the caret, opens the keyboard in interactive prototypes, and hides placeholder text.
- Plus and minus keep their normal geometry during focus and input.
- Disabled plus or minus applies `40%` opacity to only the disabled symbol/icon.
- The field container itself is disabled only when the whole input is read-only or disabled.
- The numeric value area is horizontally centered between the structural icon zones.
- Left and right icon zones must not make the value text visually drift left or right.

## Rule: Dropdown input keeps the arrow visible

下拉选择 is used for order type and other trade selections.

Why:
The arrow communicates the field opens a selector rather than accepting free text.

Verify:

- Unentered dropdown shows placeholder text and a dropdown arrow.
- Entered dropdown shows selected text and a dropdown arrow.
- Disabled dropdown applies `40%` opacity to input background and icon/text according to disabled state rules.
- Long selected text uses `16 -> 13 -> 12 -> ellipsis`.
- The dropdown arrow renders at `20x20`.
- The selected value area is horizontally centered; the right dropdown icon zone must not make the selected text visually drift left.

## Rule: Numeric stepper plus dropdown preserves both actions

数字步进输入+下拉选择 is used when a numeric value also has a baseline or mode selector.

Why:
Initial benchmark-price controls need both numeric adjustment and selector affordance.

Verify:

- Render minus, center numeric text/placeholder/caret, dropdown arrow, and plus.
- The dropdown arrow sits between center text and plus.
- The dropdown arrow renders at `20x20`.
- The plus icon remains visible and separate from the dropdown arrow.
- Focus and input states keep minus, dropdown, and plus visible.

## Rule: Condition input has no focus state in this version

条件输入 is an action-style input and does not define a focused state for this rule set.

Why:
Current materials define unentered, entered, and disabled condition states, but not a focused condition-editing state.

Verify:

- Do not invent a condition-input focused visual state.
- Unentered condition input can show `无` plus edit.
- Entered condition input shows condition text plus delete and edit.
- Disabled entered condition input still shows delete and edit with disabled opacity.
- Delete appears only in entered and entered-disabled states.
- Edit appears for condition editing actions.
