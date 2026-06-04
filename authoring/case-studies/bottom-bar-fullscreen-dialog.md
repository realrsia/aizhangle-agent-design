# 全屏对话场景 Bottom Bar

## Context

全屏对话场景包含 8 个使用实例：4 个黑版和 4 个白版。

- `bottom bar/全屏对话场景/语音-默认状态`
- `bottom bar/全屏对话场景/语音-展开任务助手`
- `bottom bar/全屏对话场景`
- `bottom bar/全屏对话场景/文字-展开任务助手`

这些实例都使用 `chat-dark` 或 `chat-light`，并包含 `bottom bar/item/输入胶囊` 子组件。

## What Went Right

全屏对话正文属于全屏对话场景上下文，但 Bottom Bar 本体只应该出现在底部输入区。这个区分可以防止 Agent 把“场景适用”误解为“组件可以放到正文任意位置”。

## Risk

如果只写“AI 对话正文不能用”，会误伤场景判断；如果只写“全屏对话场景可用”，又可能让 Agent 把 Bottom Bar 放进消息气泡。

## Expected Behavior

- 只在全屏对话页底部 composer 使用。
- 黑版使用 `chat-dark`，白版使用 `chat-light`。
- 保留输入胶囊、任务助手 / Agent 建议胶囊、AI 生成内容提示和 home indicator。
- 不用于首页、个股、交易、H5、账户、搜索、弹窗或二三级子页面。

## Related Rules

- Scenario: `scenario.bottom-bar.fullscreen-dialog`
- Component variants: `chat-dark`, `chat-light`
- Checklist: `ai-disclosure-kept-when-needed`

## Suggested Fix

审核时先区分“场景上下文”和“组件落点”：全屏对话正文可以属于场景，但 Bottom Bar 只能固定在底部输入区。
