# Trading Inputs

Use this file as the trading-input router for 新涨乐交易输入框组件族, including 代码输入, 数字步进输入, 下拉选择, 数字步进输入+下拉选择, and 条件输入.

Use with `references/components-input.md` for generic input background and radius rules. Use with `references/trading-order-form.md` when these inputs appear inside a trading order form.

Load the smallest relevant trading-input references:

- Component family, tokens, base metrics, color, typography, and text scaling: `references/trading-inputs/base.md`.
- Full-container value centering, internal spacing, rendered icon-edge geometry, and auxiliary slots: `references/trading-inputs/layout.md`.
- Approved icon assets, rendered icon sizes, icon visibility, and static-prototype icon rules: `references/trading-inputs/icons.md`.
- Code, numeric stepper, dropdown, numeric stepper + dropdown, condition, focus, entered, disabled, and read-only states: `references/trading-inputs/states.md`.
- Trading-input review checklist and severity: `references/trading-inputs/audit.md`.

Use numeric values only from:

- `assets/templates/trading-input-component.json`
- `assets/templates/trading-order-form-inputs.json`
- `assets/templates/trading-input-output-checklist.json`

Use approved icon library assets from `assets/icons/` or an equivalent shared icon component asset. Source SVG files keep the icon-library default size and style; rendered size is controlled by the trading-input references.

## Rule: Treat trading inputs as a component family

Classify trading form controls by structure before applying ordinary input rules.

Why:
Trading controls combine business labels, stepper icons, dropdown arrows, clear actions, and editable condition actions. Treating them as generic text inputs drops required interactive nodes.

Verify:

- 代码输入 uses the code-search or code-selected structure.
- 数字步进输入 uses minus, center text/caret, and plus.
- 下拉选择 uses center text and dropdown arrow.
- 数字步进输入+下拉选择 uses minus, center text/caret, dropdown arrow, and plus.
- 条件输入 uses center text plus edit, and shows delete only when already entered.
- All interactive icons are rendered visible nodes, not notes.
