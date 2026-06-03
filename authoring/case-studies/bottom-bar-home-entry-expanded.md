# 首页场景入口展开态

## Context

交易页面和“我的”页面下的二级页都使用首页场景的 Bottom Bar，但展开入口的位置不同。

- 交易页面：点击左侧“交易”入口展开，左侧按钮变成向下箭头收起。
- 我的/自选二级页：点击右侧“自选”入口展开，右侧按钮变成向下箭头收起。
- 我的/模拟二级页：出现模拟入口状态，默认使用文字按钮；只有用户明确要求时才使用图标状态。

参考截图：

- `/Users/penn/Downloads/IMG_5422.PNG`
- `/Users/penn/Downloads/IMG_5423.PNG`

## What Went Right

这些页面不需要新增 Bottom Bar 母组件；它们是首页场景下的使用实例。关键差异在于左右入口的展开方向、收起按钮位置，以及“我的”页面下二级页的入口文字状态。

## Risk

Agent 容易把交易页面中的“交易入口展开态”误判成个股交易行动底栏，进而错误加入买 / 卖 / 撤语义。

Agent 也容易把自选、触发、模拟、持股误判为独立一级页面。它们应该归入“我的”页面下的二级页。

## Expected Behavior

- 交易页展开态：左侧入口触发，左侧显示向下箭头收起。
- 我的/自选二级页展开态：右侧入口触发，右侧“自选”切换为向下箭头收起。
- 我的/模拟二级页：模拟入口默认使用文字状态，图标状态只在用户明确要求时使用。
- 展开态都保留输入胶囊和 home indicator。

## Related Rules

- Scenario: `scenario.bottom-bar.home-entry-expanded`
- Component: `component.bottom-bar`
- Checklist: `home-entry-collapse-side-correct`

## Suggested Fix

生成或审核页面时，先判断这是首页入口展开态，而不是交易行动区。再检查收起箭头是否出现在触发展开的同一侧。
