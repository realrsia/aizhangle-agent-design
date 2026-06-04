# 陪伴场景 Bottom Bar 提醒

## Context

这组案例来自 `Bottom bar + Alert` 画板中选中的 18 个对象。第一行是陪伴场景的母组件变体，第二行是对应的使用实例。

第一行有三类语义：

- 首页陪伴：用于首页，例如提醒用户有免费的 Level 2 待领取，并引导“去领取”或“去看看”。
- 预交易陪伴：用于“我的”体系或预交易场景，引导用户处理当前需要点击或查看的事项。
- 个股详情陪伴：用于个股或 ETF 详情页，例如提示当前股价低于 200 日价格，并引导用户分析原因。

## Usage Examples

当前已记录的使用实例：

- `12:9237` / `12:9243`：有提醒，无按钮，黑白版
- `12:9240` / `12:9247`：有提醒，有按钮，黑白版
- `12:9238` / `12:9244`：有提醒，有详情链接，黑白版
- `12:9239` / `12:9246`：有提醒，有详情链接，有按钮，黑白版
- `12:9241` / `12:9245`：个股详情陪伴提醒，黑白版
- `12:9242` / `12:9248`：个股详情陪伴提醒，有操作，黑白版

## Expected Behavior

- 有两个操作选项时展示两个按钮。
- 只有一个操作选项时，只保留左侧按钮。
- 按钮必须左对齐。
- 超链接只用于查看提醒或文案详情，不能替代主操作。
- 首页、预交易、个股详情的提醒文案不能混用。
- 个股详情文案可以引导分析原因，但不能承诺收益或直接建议买卖。

## Copy Examples

- 你有免费的 Level 2 待领取，快去领取
- 当前有待处理的交易相关事项，去看看
- 当前个股股价低于 200 日价格，去分析一下原因

## Common Mistakes

- 把首页权益领取提示放到个股详情页。
- 把预交易处理事项写成直接下单建议。
- 单按钮时居中显示，或保留右侧空按钮占位。
- 用“详情链接”替代“去看看”“去领取”等主按钮。
- 陪伴气泡遮挡指数模块、输入胶囊或交易风险信息。

## Related Rules

- Scenario: `scenario.bottom-bar.companion-reminder`
- Component: `component.bottom-bar`
- Usage group: `companion-scene-bottom-bar-examples`
- Checklist:
  - `companion-context-matches-page`
  - `companion-buttons-left-aligned`
  - `companion-link-not-primary-action`
  - `companion-copy-not-investment-advice`
  - `companion-height-accounted`
