# 输入胶囊子组件

## Context

`bottom bar/item/输入胶囊` 是一个真实 Figma 组件集，节点为 `12:8494`，当前确认有 26 个变体。

它的属性包括：

- 输入方式
- 状态
- 场景
- 有消息提示
- 有关联问
- Dark
- 关联问
- 键盘输入文字

## What Went Right

输入胶囊没有被当作普通视觉元素处理，而是被登记为 Bottom Bar 下的独立子组件 family。这样 Agent 后续能根据真实属性选择语音、键盘、未输入、已输入、暂停、黑版或白版状态。

## Risk

Agent 可能只看到输入胶囊外观，然后手绘一个类似控件，或者把交易场景输入胶囊放到全屏对话 / 首页中。

## Expected Behavior

- 输入胶囊只作为 Bottom Bar 内部子组件使用。
- 语音 / 键盘输入状态必须来自真实 Figma 变体。
- 交易场景输入胶囊只用于个股交易上下文。
- 文本覆盖字段不能保留占位长文本。

## Related Rules

- Scenario: `scenario.bottom-bar.input-pill-states`
- Component family: `bottom-bar.input-pill`
- Figma node: `12:8494`
- Checklist: `input-pill-structure-valid`

## Suggested Fix

生成 Bottom Bar 前，先确认目标场景，再选择输入胶囊的真实变体；如果输入胶囊属性无法确认，停止并标记 `TODO_VERIFY_WITH_FIGMA`。
