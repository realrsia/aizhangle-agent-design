# Action Sheet 弹窗使用场景

## Context

Figma `Bottom bar + Alert / 3.9 ActionSheet` 中有 6 个页面样例，用来说明 Action Sheet 在真实页面里的使用方式：

- `99:57080`：行情速览浮层，GUI阅读型，带 Bottom Bar 上下文。
- `99:57174`：持仓列表-标的操作栏弹层-买入，GUI任务型常规模态。
- `99:57161`：行情速览浮层，带装饰的协议 / 确认类弹层。
- `99:57358`：我的，AI 选股结果说明弹窗。
- `99:57484`：我的，自选 / 分组输入任务型弹窗。
- `99:57631`：撤买确认，高风险交易确认弹窗。

## What Went Right

这些样例清楚区分了两种 Action Sheet 使用上下文：

- GUI阅读型出现在有 Bottom Bar 的页面上下文里，使用阅读型遮罩。
- 其余常规 Action Sheet 使用完整模态遮罩，用于任务、协议、AI 说明、输入和交易确认。

## Risk

Agent 容易把 Figma 页面样例误写成新的组件定义，或者把 GUI阅读型和常规模态弹窗混用。更严重的是，交易确认、协议同意和 AI 免责声明可能被降级成普通提示。

## Expected Behavior

- 页面样例只进入 `usageInstanceGroups`、scenario brief 或 case study。
- 真实 component set / variant 只来自 `Action sheet/母组件`、`Action sheet/遮罩`、标题区、内容区、按钮区和装饰区。
- GUI阅读型保留 Bottom Bar 场景和 reading mask。
- GUI任务型、LUI对话型、Dialog弹窗使用 regular full modal mask。
- 撤买、撤单、订单确认等高风险交易场景必须保留风险提示和明确确认按钮。
- AI 结果说明必须保留来源、限制或免责声明语义。

## Related Rules

- Scenario: `scenario.action-sheet-modal-usage`
- Component: `component.action-sheet`
- Usage groups:
  - `action-sheet.usage.gui-reading-market-overview-dark`
  - `action-sheet.usage.position-action-buy-sheet-dark`
  - `action-sheet.usage.market-overview-agreement-decorated-dark`
  - `action-sheet.usage.ai-stock-selection-result-dialog-dark`
  - `action-sheet.usage.watchlist-input-task-sheet-dark`
  - `action-sheet.usage.batch-cancel-order-confirm-dark`
- Checklist:
  - `action-sheet-usage-example-not-component-definition`
  - `action-sheet-mask-type-matches-action-sheet-variant`
  - `action-sheet-risk-level-matches-family`
  - `action-sheet-explicit-confirmation-for-high-risk`
  - `action-sheet-ai-source-disclosure-clear`

## Suggested Fix

审核 Action Sheet 页面时，先判断选中对象是组件还是页面样例。组件写入 `componentFamilies` 和 variant rules；页面样例只写入场景和案例。再按风险判断是否需要明确确认、风险提示、来源说明和正确遮罩。
