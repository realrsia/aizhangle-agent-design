# 个股场景关联问空闲提示 Bottom Bar

## Context

这组案例来自 `Bottom bar + Alert` 画板中选中的 8 个对象。它不是新的母组件，而是基于 `bottom bar/母组件` 中 `有关联问=On` 的变体形成的使用实例。

这里有两类常用状态：

- 一级页面空闲提示：用于首页等一级页面。用户一段时间没有操作时，中间输入胶囊覆盖一个 Toast 式提示，引导用户进行系统预测、功能操作或个股分析。
- 个股详情空闲提示：用于个股或 ETF 详情页。用户一段时间没有操作时，左侧出现 Toast 引导，交易 / 买 / 卖 / 撤按钮收成一个入口按钮。

当前已记录的 4 个使用实例：

- `12:9201`：`bottom bar/首页场景关联问`，黑版
- `12:9210`：`bottom bar/首页场景关联问`，白版
- `12:9223`：`bottom bar/个股场景关联问`，黑版
- `12:9233`：`bottom bar/个股场景关联问`，白版

## Expected Behavior

- 个股场景下通常有指数数据，所以默认优先参考带指数模块的黑白版关联问变体。
- Toast 文案只能做轻量引导，不能写成投资建议、收益承诺或确定性判断。
- Toast 出现后持续存在，直到用户点击关闭。
- 一级页面的 Toast 主要覆盖输入胶囊区域。
- 个股详情的 Toast 出现在左侧，同时收起交易动作，避免形成直接下单引导。
- 用户正在输入、语音采集、下单确认或提交交易表单时，不展示空闲 Toast。

示例话术：

- 当前个股创 200 日新高，去分析一下
- 当前个股异动明显，看看可能原因
- 要不要分析一下这只个股的趋势变化

## Common Mistakes

- 把一级页面的输入胶囊覆盖 Toast 和个股详情左侧 Toast 混用。
- 在个股详情空闲提示中继续展开交易、买、卖、撤多个按钮。
- 使用不带指数模块的关联问变体作为个股详情默认状态。
- Toast 文案写成“可以买入”“一定上涨”这类交易建议或收益暗示。
- Toast 自动消失，或缺少关闭入口。

## Related Rules

- Scenario: `scenario.bottom-bar.stock-related-question-idle-toast`
- Component: `component.bottom-bar`
- Usage group: `stock-related-question-idle-toast-examples`
- Checklist:
  - `related-question-index-default-valid`
  - `related-question-idle-toast-copy-safe`
  - `stock-detail-related-question-actions-collapsed`
  - `idle-toast-not-during-active-input`
  - `idle-toast-persist-until-closed`

## Suggested Fix

审核时先判断页面是否是一级页面还是个股详情页。一级页面检查 Toast 是否覆盖输入胶囊并保持引导语义；个股详情检查是否使用带指数模块的关联问变体，并确认交易动作已经收成一个入口按钮。
