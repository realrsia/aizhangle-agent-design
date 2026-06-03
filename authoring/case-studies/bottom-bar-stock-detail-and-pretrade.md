# 个股详情与预交易 Bottom Bar

## Context

个股相关 Bottom Bar 有两个容易混淆的使用语义：

- 个股详情：用于个股、ETF 等场内交易标的详情页。
- 预交易：用于“我的”页面下的自选、触发、模拟、持股四个二级页。

预交易区别于普通 Bottom Bar 的关键是：它会多出指数展示信息。

## Required Index Fields

预交易中的指数模块需要保留这些字段：

- 指数名称
- 指数数据
- 指数现价
- 当日涨跌额
- 当日涨跌幅度

如果生成控件时没有真实行情数据，可以虚构一组数据，但必须保持当前格式。例如：

- 指数名称：上证指数
- 指数数据：000001
- 指数现价：3083.97
- 当日涨跌额：+8.87
- 当日涨跌幅度：+0.22%

## Risk

Agent 容易把预交易当成普通 Bottom Bar，省略指数模块；也可能把预交易误当成下单确认区。

## Expected Behavior

- 个股详情只用于明确的个股、ETF 等场内交易标的。
- 预交易只用于“我的 / 自选”“我的 / 触发”“我的 / 模拟”“我的 / 持股”。
- 预交易必须展示指数模块信息。
- 指数信息必须保持金融语义和原有格式。

## Related Rules

- Scenario: `scenario.bottom-bar.stock-detail-and-pretrade`
- Component: `component.bottom-bar`
- Checklist:
  - `stock-detail-target-context-valid`
  - `pretrade-only-in-my-secondary-tabs`
  - `pretrade-index-fields-complete`

## Suggested Fix

审核页面时，先判断它是“个股详情”还是“预交易”。如果是预交易，必须检查指数模块是否存在，并确认五个指数相关字段是否完整。
