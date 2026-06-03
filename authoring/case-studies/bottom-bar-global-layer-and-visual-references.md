# Bottom Bar 全局层级与视觉参考

## Context

这组案例来自 Bottom Bar 画板中的 14 个使用案例。它们用于后续页面视觉生成和设计审核参考，不是新的组件母体。

全局规则：

- Bottom Bar 应位于页面常驻交互层最前方。
- Bottom Bar 的 Y 轴位置应贴合移动端屏幕最下方。
- 页面正文、图表、列表或普通浮层不能遮挡 Bottom Bar。

## Reference Pairs

左侧 1-7 为深色主题，右侧 8-14 为浅色主题，按顺序一一对应。

- 1 / 8：早点听
- 2 / 9：AI 对话
- 3 / 10：AI 对话重复参考，后续不优先使用
- 4 / 11：早点听 + 陪伴场景
- 5 / 12：个股详情交易页
- 6 / 13：个股场景关联问
- 7 / 14：个股详情 + 陪伴场景

## Expected Use

- 做页面生成时，优先引用 active 的黑白配对案例。
- AI 对话重复案例只保留一组作为主要参考。
- 参考这些页面时，只学习布局、层级、贴底位置和场景组合，不把页面 frame 当成组件定义。

## Common Mistakes

- 把 14 个页面 frame 当作新的 component family。
- 只参考黑版或白版，导致主题切换缺少对应关系。
- 让图表、列表、正文内容盖住 Bottom Bar。
- 把重复的 AI 对话页面当成新的场景类型。

## Related Rules

- `bottom-bar-layer-foremost`
- `bottom-bar-y-axis-screen-bottom`
- `visual-reference-theme-pairing-valid`
- `visual-reference-duplicate-not-prioritized`
