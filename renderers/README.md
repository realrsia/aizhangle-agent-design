# Renderers

本目录用于存放低保真输出渲染器。

对于持续维护的组件，Figma 组件 ID 仍是首要设计真源。HTML 渲染器使用这些 ID 作为组件身份和绑定依据，但通过本地 DOM/CSS 规则进行渲染。

本地 SVG、PNG、字体和 JSON 模板可以用作原型兜底资源，但它们不是持续维护的 Figma 组件实例。

## Reusable Fixed Chrome

统一 Top Bar：

- `renderers/html/components/top-bar/top-bar.assets.inline.js`
- `renderers/html/components/top-bar/top-bar.inline.js`

当前包含首页体系 `<xzl-home-top-bar>` 和 AI 对话页
`<xzl-chat-top-bar>` 两类场景。

统一 Bottom Bar：

- `renderers/html/components/bottom-bar/bottom-bar.assets.inline.js`
- `renderers/html/components/bottom-bar/bottom-bar.inline.js`

一级页面背景：

- `renderers/html/components/page-background/page-background.assets.inline.js`
- `renderers/html/components/page-background/page-background.inline.js`

生成单 HTML Demo 时：

1. 依次内联统一 Top Bar 素材和 runtime；首页体系使用 `<xzl-home-top-bar theme="light|dark">`，AI 对话页使用 `<xzl-chat-top-bar theme="light|dark">`。
3. 首页、AI 对话、早点听、涨停猎手和事件捕手依次内联一级页面背景素材和 runtime，使用 `<xzl-page-background scene="..." theme="light|dark">`。
4. 依次内联 Bottom Bar 素材文件和组件文件。
5. 使用 `<xzl-bottom-bar scene="home|chat|stock" theme="light|dark" companion="on|off">`。
6. 次级页面、专题页或无持续底部操作需求的页面不渲染 Bottom Bar。
7. 默认保持静态展示；只有用户明确要求交互时才增加事件处理。
8. 不要逐页重画或改写组件内部 DOM、尺寸、图标和主题材质。

交易页和个股详情页背景尚未纳入当前 HTML runtime，等待后续补充。

该 HTML runtime 与 Figma 生成链路相互独立。Figma 任务仍通过
`bindings/figma/components.yaml` 使用正式组件绑定；renderer 中记录的具体节点只用于 HTML 视觉验收。
