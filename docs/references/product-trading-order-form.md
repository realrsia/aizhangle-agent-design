# Trading Order Form

Use this file for trading order form modules that combine 代码, 类型, 价格, 数量, 金额, condition controls, and buy/sell trading actions.

Use with:

- `references/components-trading-inputs.md`
- `references/components-trading-actions.md`
- `references/components-input.md`

Use `assets/templates/trading-order-form-inputs.json` for the required structure when generating or reviewing order-form inputs.

## Rule: Treat the order form as a module composed from trading input components

The order form controls layout and field relationships; each right-side control still follows the trading input component family.

Why:
Trading pages vary by business scenario, but the field rows and control structures must remain auditable.

Verify:

- The module names or exposes order-form rows for `code`, `orderType`, `price`, `quantity`, and `amount` when present.
- Code uses the 代码输入 component.
- Type uses the 下拉选择 component.
- Price uses 数字步进输入 or 数字步进输入+下拉选择 when a baseline selector is present.
- Quantity uses 数字步进输入 when editable.
- Amount uses 数字步进输入 when editable and pure text when read-only.
- Buy/sell buttons use `references/components-trading-actions.md`.

- Code, price, quantity, amount input, and read-only amount display inherit the global financial numeric font rule from `references/typography.md`.
- Stock codes, prices, quantities, and amount values use 涨乐财富体 even when nested inside input or read-only display components.
- Composite code values split text runs: name uses PingFang SC, code uses 涨乐财富体.

## Rule: Preserve fixed trading form row geometry

Trading order rows use fixed module geometry in the current mobile form.

Why:
The left label column and right input area align repeated order rows and leave room for auxiliary information.

Verify:

- Screen left and right module margins are `18px`.
- Left label region width is `98px`.
- Right input region width is `245px` in the current mobile order form.
- Right input region contains symbols and icons inside its width.
- Standalone trading input components may adapt width outside this module, but the order form uses the fixed right region unless a page-specific rule overrides it.
- Label text follows `16 -> 13 -> 12 -> ellipsis` and does not wrap by default.

## Rule: Place the quantity/amount switch at the label

The user switches quantity and amount input modes from the label text area.

Why:
Quantity and amount are mutually exclusive editable fields. The switch belongs to the row label relationship, not inside the input container.

Verify:

- The switch icon appears after the label text, such as after `数量`.
- The switch icon uses `assets/icons/switch-outlined.svg` or an equivalent approved icon component asset.
- Rendered switch icon size is `14x14`.
- The switch icon source and rendered size must both be verified; do not treat label placement alone as sufficient.
- Switch icon color uses `xzl/color/text/primary`.
- Disabled switch icon uses `40%` opacity.
- The switch node is visible and named or otherwise structurally checkable.

## Rule: Quantity and amount have mutually exclusive input modes

Only one of quantity and amount is editable at a time.

Why:
The user can choose whether to place the order by quantity or by amount. The non-active field becomes a calculated read-only display.

Verify:

- When quantity is editable, quantity uses 数字步进输入 and amount is read-only text.
- When amount is editable, amount uses 数字步进输入 and quantity is read-only.
- Read-only amount display is pure text, not a filled input container.
- Read-only amount display does not render plus or minus.
- Read-only quantity does not accept input or show editable stepper controls unless a later product rule defines a different presentation.
- Output states which mode is active: `quantityInputMode` or `amountInputMode`.

## Rule: Keep amount read-only display distinct from input fields

金额 may be a calculated display rather than an input.

Why:
Calculated amount should read as output from price and quantity, not as another editable field.

Verify:

- Read-only amount row shows left label `金额`.
- The right side is text-only and does not use the input background.
- The right side does not show minus or plus icons.
- Numeric text uses 涨乐财富体 and follows `16 -> 13 -> 12 -> ellipsis`.
- The text color uses `xzl/color/text/primary` unless a later rule defines a different hierarchy.

## Rule: Leave auxiliary information slots explicit

Trading helper rows are P1 reserved slots in this version.

Why:
行情信息, 买上限/卖下限, 可买/可卖, and related helper content require follow-up material before hard layout rules are added.

Verify:

- Code, price, quantity, and amount rows may expose `auxiliaryInfoSlot`.
- The slot is named, but detailed visual rules are marked as pending or an open gap.
- A reserved/P1/pending `auxiliaryInfoSlot` is only a structural reservation; it does not render a visible helper row by default.
- Do not add visible helper text, helper-row height, placeholder helper content, or extra spacing for a reserved slot unless the task, reference artifact, or a later rule defines that auxiliary information.
- Do not invent business validation or helper-row values in this version.

## Rule: Do not freeze one universal trading form structure

Trading pages can vary by transaction type and product scenario.

Why:
The input component rules should be reusable across ordinary order, condition order, and future trading modules.

Verify:

- Use this file to validate rows that are present.
- Do not require every trading page to contain every field unless the user asks for this specific order form.
- Keep condition controls available as components without forcing them into the fixed code/type/price/quantity/amount sequence.
