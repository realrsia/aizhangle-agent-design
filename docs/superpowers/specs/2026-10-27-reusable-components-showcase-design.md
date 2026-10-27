# 可复用组件总览页设计

## 目标

生成一个可直接在浏览器打开的 HTML 总览页，平铺展示当前 Skill 中已由 JavaScript Web Component 实现的可复用样式。

## 展示范围

- Top Bar：7 种 Custom Element。
- 一级页面背景：5 种 scene。
- Bottom Bar：3 种 scene，额外展示 companion 叠加态。
- AI 消息：用户气泡、Yomi 身份行、输出状态、回答辅助操作栏。
- 每个组件同时展示 Light 和 Dark，不使用主题切换代替并列展示。

## 布局

- 使用桌面端宽屏“组件目录墙”。
- 按 Page Background、Top Bar、Bottom Bar、AI Message 分区。
- 各预览容器保持 `390px` 移动端基准宽度；页面背景使用等比缩略容器。
- 每张卡片显示组件名称、Custom Element 和必要的 scene/attribute 说明。

## 技术边界

- 直接按“assets runtime → component runtime”顺序加载现有脚本。
- 不复制、重画或修改现有 Web Component 内部结构。
- 总览页自身的桌面排版 CSS 只负责平铺、标注和预览容器，不成为 Skill runtime。
- 金融表格、交易按钮和大盘模块等只有 renderer 声明的内容不纳入已实现组件展示。
- 页面使用相对路径加载 Skill 内脚本，因此应放在仓库根目录。

## 验收

- 13 个 Custom Element 全部出现，Light/Dark 同时可见。
- 页面无 JavaScript 报错、无失败资源请求。
- 顶栏、底栏和消息组件在 `390px` 宽度下不裁切。
- 宽屏下并列展示，窄屏下自动换行，不影响组件基准宽度。

