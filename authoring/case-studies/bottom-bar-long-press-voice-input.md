# 长按语音输入

## Context

这组案例来自 `bottom bar/item/长按语音输入` 组件集，节点为 `12:7621`。它不是普通 Bottom Bar 的同屏附加层，而是用户长按 Bottom Bar 输入胶囊后出现的替代覆盖态。

关键规则：长按语音输入出现时，原 Bottom Bar 消失，两者不会同时出现。

## Variant Mapping

8 个变体按顺序对应：

- 1：`12:7622`，APP 深色，发送状态 On
- 2：`12:7660`，APP 深色，发送状态 Off
- 3：`12:7699`，H5，发送状态 On，背景覆盖视觉 A
- 4：`12:7736`，H5，发送状态 Off，背景覆盖视觉 A
- 5：`12:7774`，APP 浅色，发送状态 On
- 6：`12:7814`，APP 浅色，发送状态 Off
- 7：`12:7816`，H5，发送状态 On，背景覆盖视觉 B
- 8：`12:7855`，H5，发送状态 Off，背景覆盖视觉 B

## Expected Behavior

- 用户长按输入胶囊时进入长按语音输入状态。
- APP 使用通用场景变体，支持深色版和浅色版。
- H5 使用 H5 场景变体；H5 没有真正深色版，Dark=On / Off 只表示背景覆盖颜色差异。
- On / Off 状态必须清楚区分，避免误发语音。
- 长按语音输入不能放进正文、列表行或交易按钮区域。

## Common Mistakes

- 让 Bottom Bar 和长按语音输入同时出现。
- 把 H5 的 Dark=On / Off 当成 APP 深浅主题。
- 把长按语音输入当作普通 Bottom Bar 变体。
- 在交易行动按钮区域复用语音采集反馈。

## Related Rules

- Scenario: `scenario.bottom-bar.long-press-voice-input`
- Component family: `bottom-bar.voice-input`
- Figma component set: `12:7621`
- Checklist:
  - `voice-input-state-clear`
  - `voice-input-replaces-bottom-bar`
  - `voice-input-h5-not-figma-instance`
  - `voice-input-copy-verified`
