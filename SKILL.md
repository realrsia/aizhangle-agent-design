---
name: aizhangle-agent-design
description: 为新涨乐 / AI 涨乐产品经理生成接近视觉稿、可直接交付设计师微调的移动端原型图（HTML 或 Figma 两种形态）。基于团队 Figma 组件库和 design tokens 严格约束，确保产出符合设计规范。触发场景：做原型图、画原型、出稿、给设计师看的稿、PRD 配图、demo、视觉稿、交易页、自选股页、AI 对话页、下单页、市场行情页、Bottom Bar、Action Sheet 等业务页面或组件的原型设计。即使用户只说"画个页面 / 做个 demo / 出张稿"，只要涉及新涨乐 / AI 涨乐移动端，都应触发本 skill。
---

# aizhangle-agent-design

本 skill 为产品经理生成接近视觉稿的移动端原型（HTML 或 Figma）。agent 进入后按下方任务路由读取最小文件集。

## 1. 真源地图

## 1.1 基本原则

- `manifest.json` 是机器可读的路径索引，用于定位仓库入口和运行资源。
- `SKILL.md` 负责任务路由、最小读取范围和全局执行门禁。
- `DESIGN.md` 涉及视觉生成、design tasting、层级、密度、氛围或美感判断时，必须读取。
- `canon/` 是设计系统真源，承载 tokens、components、archetypes、scenarios 和 checklists。
- `bindings/` 是连接层，用来查 Figma、assets，记录规范与 Figma、本地素材之间经过确认的绑定关系。
- `renderers/` 定义 HTML 等目标形态的运行时表达和渲染协议。
- `docs/` 提供特定任务所需的解释、流程和实施指引，只在 canon、bindings 不够时作为补充阅读。

### 1.2 运行时来源地图

#### 规范真源

| 规范类型 | 来源 | 作用 |
| --- | --- | --- |
| 基础规范 | `canon/foundations/` | 定义 tokens、themes、金融语义和视觉语言 |
| 组件规范 | `canon/components/` | 定义组件结构、状态、使用规则和约束 |
| 页面骨架 | `canon/archetypes/` | 定义页面区域、布局结构和滚动关系 |
| 业务场景 | `canon/scenarios/` | 将业务需求映射到页面骨架、组件和约束 |
| 检查规则 | `canon/checklists/` | 用于生成、评审和交付前检查 |

#### 目标绑定与渲染

| 目标类型 | 来源 | 作用 |
| --- | --- | --- |
| Figma 绑定 | `bindings/figma/` | 记录 Figma 文件、组件、variant 和变量的绑定状态与证据 |
| HTML 渲染 | `renderers/html/` | 定义 HTML 高保真组件、页面结构和运行时复用协议 |
| 本地资源 | `bindings/assets/manifest.yaml` | 定位字体、图标、图片、模板和 HTML runtime 素材 |

#### 视觉与评审入口

| 任务类型 | 来源 | 作用 |
| --- | --- | --- |
| 视觉生成与评审 | `DESIGN.md` | 定义视觉任务的阅读顺序、来源优先级和审美判断入口 |
| 视觉优化流程 | `docs/references/process/` | 提供 design tasting、视觉审计和优化方法 |


### 1.3 来源优先级与冲突处理

- 颜色、字体、行高、圆角、间距和组件尺寸必须读取对应的 `canon/` 文件或 confirmed component rendering，不得自行编写任意值。
- Figma 输出必须使用 `bindings/figma/` 中已确认的 component key、variant 和变量绑定；未确认字段不得猜测。
- 本地 SVG、PNG、字体和 JSON templates 仅作为 HTML 资源或明确允许的 fallback，不得当作 maintained Figma component。
- HTML 输出可以使用 Figma ID 识别组件身份，但必须按照 `renderers/html/` 的高保真协议渲染。
- 视觉判断用于调整氛围、构图、层级、密度和 polish，不得覆盖 canon 中的精确规范。




## 2. 任务路由

### 2.1 通用流程

1. 判断任务目标：生成 Figma 设计稿、生成 HTML 高保真原型。
2. 完整页面生成、视觉调整或视觉评审必须读取 `DESIGN.md`，确认视觉方向、信息密度、页面层级和来源优先级。
3. 优先读取对应的 `canon/scenarios/`，确定业务目标、必要组件和场景约束；再读取其关联的 `canon/archetypes/`，确定页面区域、固定层和滚动结构。
4. 如果对应的 scenario 尚未建立，只使用现有 archetype、component 规范和已确认的 binding 或 renderer，不得猜测缺失的业务规则。
5. 根据输出形态读取执行来源：
   - Figma 设计稿读取相关 `bindings/figma/`。
   - HTML 高保真原型优先读取 `renderers/html/page-renderers.yaml` 和 `renderers/html/component-renderers.yaml`。
6. 仅在需要实现、调整或检查具体组件时，读取相关 `canon/components/*.meta.yaml`；已有完整 HTML runtime 的组件直接按 renderer 复用，不必重复解析全部组件内部规则。
7. 需要自建页面内容或调整视觉值时，再读取相关 tokens、themes、semantics 和本地 assets；不要加载与当前任务无关的规范文件。
8. 初稿完成后，使用 `docs/references/process/design-taster.md`、`docs/references/process/impeccable-adaptation.md` 和 `canon/checklists/visual-review.yaml` 进行视觉优化与交付检查。
9. Figma 页面交付前还必须执行 `canon/checklists/figma-generation-review.yaml` 和相关的 component checklist 和 `canon/checklists/visual-review.yaml`；
10. 最终回复前执行 `python scripts/version_check.py --check-latest-if-stale`。若返回 `status=update_available`，在最终回复末尾追加一句轻提示，说明当前版本、最新版本以及 `manifest.json` 中的 `releaseNotes.summary`；若返回 `current`、缓存结果或 `check_failed`，不打断当前任务。

### 2.2 业务场景路由

本节只将用户的业务表达映射到完整页面或业务场景。

| 用户表达 | 优先读取 |
| --- | --- |
| AI 对话、消息、问答、追问、思考过程、回答状态、关联问题、任务助手 | `canon/scenarios/ai-chat.yaml`，并按其引用读取对应 archetype 和 components |
| 自选、自选股、行情列表、最新价、涨跌幅、成交额、换手率 | `canon/scenarios/watchlist.yaml`、`canon/archetypes/mobile-list-page.yaml` 和相关 list references |
| 持仓、账户持仓、持仓列表、持仓盈亏 | `canon/archetypes/mobile-list-page.yaml` 和 holdings 相关规范 |
| 大盘、市场总览、指数、涨跌榜、异动、竞价、市场资讯、涨停猎手 | `canon/archetypes/market-overview-page.yaml`、`canon/components/market-index-modules.meta.yaml` 和对应 renderer、checklist |
| 交易、下单、买入、卖出、撤单、条件单、委托、模拟交易、实盘交易 | trading 相关 component canon、references 和 checklists |

业务关键词只用于确定首批读取文件。最终页面结构、组件、主题和资源仍以对应 canon、binding 和 renderer 为准。



### 2.3 输出形态路由

确定业务场景后，根据输出形态读取对应的执行规范。


#### HTML 高保真原型

优先读取：

- `renderers/html/page-renderers.yaml`，确定页面结构、固定区域、滚动区域和必须复用的 runtime；
- `renderers/html/component-renderers.yaml`，确定组件的 HTML 表达和适用场景；
- 相关 scenario、archetype 和 component 规范；
- `bindings/assets/manifest.yaml`，定位需要使用的字体、图标、图片和 runtime 素材；
- `canon/checklists/visual-review.yaml`。

已有 HTML runtime 的组件必须直接复用，不得逐页重画内部结构。具体 custom element、属性、适用场景和内联顺序以 `renderers/html/` 为准。

移动端页面默认使用 `390×844` 视口。内容超出可视区域时，保持页面背景、Top Bar 和 Bottom Bar 固定，仅允许中间内容区域独立纵向滚动。

Bottom Bar 的完整组件高度包含顶部透明渐变 / 阴影区。页面正文允许延伸到该透明区域下方，只需避让实体操作区和 safe area，并与实体操作区顶部保持 `20px` 间距；不得按 Bottom Bar 完整高度再增加额外 spacer。

未明确要求交互时，默认生成静态展示。HTML runtime 只用于 HTML 输出，不替代 Figma 正式组件绑定。

AI 对话页和任务助手页的问答区域必须优先复用 `renderers/html/components/ai-message/` runtime。用户输入、Yomi 身份行、智能体输出状态和回答结束辅助功能分别使用 `xzl-user-bubble`、`xzl-yomi-identity`、`xzl-yomi-status`、`xzl-yomi-assist-actions`；回答正文、业务卡片、图表、来源和免责声明仍按用户需求在 message feed 中生成，不放入 runtime 黑盒。


##### Bottom Bar 必须优先直接复用：

- `renderers/html/components/bottom-bar/bottom-bar.assets.inline.js`
- `renderers/html/components/bottom-bar/bottom-bar.inline.js`

先内联素材文件，再内联组件文件，不要逐页重画组件内部结构。使用：

- 核心一级页面：`<xzl-bottom-bar scene="home" theme="light|dark">`
- AI 对话页 / 任务助手页：`<xzl-bottom-bar scene="chat" theme="light|dark">`
- 个股详情页：`<xzl-bottom-bar scene="stock" theme="light|dark">`
- 陪伴叠加：在已有场景上增加 `companion="on"`；它覆盖正文，不占位、不推高页面。
- 次级页面、专题页或无持续底部操作需求的页面：不渲染该组件。

##### Top Bar 必须直接复用统一 runtime：

- `renderers/html/components/top-bar/top-bar.assets.inline.js`
- `renderers/html/components/top-bar/top-bar.inline.js`

先内联素材文件，再内联组件文件。按页面场景选择对应 custom element：

- 首页出招、首页大盘、首页提醒、首页任务，以及首页中的早点听入口卡片场景：`<xzl-home-top-bar theme="light|dark">`
- AI 对话页和任务助手页：`<xzl-chat-top-bar theme="light|dark">`
- 交易 / 下单 / 委托 / 条件单页面：`<xzl-trade-top-bar theme="light|dark">`
- 早点听详情页：`<xzl-morning-top-bar theme="light|dark">`
- 自选页：`<xzl-watchlist-top-bar theme="light|dark" active="自选|触发|模拟|持股">`
- 个股详情页：`<xzl-stock-top-bar theme="light|dark">`
- 除以上特殊声明场景外的次级页面：`<xzl-secondary-top-bar theme="light|dark" title="标题">`

不得逐页重画 Top Bar 内部结构。自选页标签按钮必须使用 runtime 内已绑定的 3x PNG 背景切图，不得用 CSS/SVG 手绘替代。

##### 当前已确认的一级页面背景必须直接复用：

- `renderers/html/components/page-background/page-background.assets.inline.js`
- `renderers/html/components/page-background/page-background.inline.js`

先内联素材文件，再内联组件文件，使用
`<xzl-page-background scene="home|chat|morning-brief|limit-up-hunter|event-catcher" theme="light|dark">`。
它适用于首页、AI 对话、早点听详情页、涨停猎手和事件捕手，默认固定为 `390x844`，当页面内容超出可视区域时，保持页面背景、Top Bar 和 Bottom Bar 尺寸及位置不变，允许中间内容区域独立纵向滚动
位于页面根层最底部。不得使用纯色、手绘渐变或页面截图替代。交易页和个股详情页
背景尚未完成本轮专项治理，不得提前猜测或复用该一级背景。

- 未明确要求点击交互时保持静态展示。
- 该 runtime 仅用于 HTML；


#### Figma 设计稿

读取：

- 相关 scenario、archetype 和 component 规范：确定业务目标、页面结构、必要组件及组件使用规则。
- `bindings/figma/components.yaml`：查询组件 family、component key、component set key、variant、文字覆盖能力和当前确认状态。
- `bindings/figma/critical-bindings.yaml`：确认必须使用正式 Figma 实例的高风险组件及其阻断条件。
- `bindings/figma/variables.yaml`：查询 token 对应的 Figma variable 候选，并在使用前验证 collection 和 mode。
- `bindings/figma/files.yaml`：确定目标 Figma 文件、设计来源和文件职责。
- 相关 component checklist：检查具体组件的结构、状态、主题和使用方式。
- `canon/checklists/visual-review.yaml`：检查页面视口、视觉层级、金融语义、主题和文本适应性。
- `canon/checklists/figma-generation-review.yaml`：检查组件复用、Auto Layout、固定区域、fallback、主题和交付完整性。

对于标记为 `partial`、`pending` 或 `TODO_VERIFY_WITH_FIGMA` 的 binding，只使用其中已经确认的字段。未确认的 component key、variant、node ID、变量名或 override property 不得根据名称、截图或相似组件推测。



Figma 输出只使用已经确认的 component key、variant、变量和绑定信息。标记为 partial、pending 或 `TODO_VERIFY_WITH_FIGMA` 的字段不得猜测。




## 3. 生成与交付门禁

### 3.1 组件与绑定

- 已有 confirmed component 时，必须优先复用正式组件，不得使用 raw frame、rectangle 或 text 重画相似组件。
- Figma 输出只使用 `bindings/figma/` 中已经确认的 component key、variant、变量和绑定字段。
- 对 `partial`、`pending` 或 `TODO_VERIFY_WITH_FIGMA` 的 binding，只使用已经确认的字段；未确认的 component key、variant、node ID、变量名或 override property 不得推测。
- HTML 输出中已有 runtime 的组件必须直接复用，并遵循 `renderers/html/` 中定义的组件属性和页面组合方式。
- 组件导入、variant 验证、probe 和来源检查按 `canon/checklists/figma-generation-review.yaml` 执行。

### 3.2 视觉值与主题

- 颜色、字体、行高、圆角、间距和组件尺寸必须来自 canon token、theme、Figma variable、style 或 confirmed component rendering，不得自行编写任意规范值。
- 金融涨跌颜色必须遵循 `canon/foundations/semantics/` 中的金融语义。
- 页面和组件必须使用一致的 Light 或 Dark 主题，不得混用相反主题的组件。
- 视觉优化可以调整构图、层级、密度和氛围，但不得覆盖 canon 中已经定义的精确规范。

### 3.3 布局与内容

- 页面必须保持清晰的固定区域和内容区域；Top Bar、Bottom Bar、Chat Input 等固定区域不得混入普通内容流。
- 动态内容必须适应真实文案，不得出现文字裁切、组件遮挡或父容器小于子内容的问题。
- 内容超出移动端视口时，仅允许指定内容区域滚动，固定区域不得随内容增长或覆盖正文。
- 页面必须使用符合业务意图的真实感金融、新闻或对话内容，不得保留占位文字、未解析 prompt 或无意义标签。
- 金融业务页面必须保持金融信息优先，不得生成通用 Dashboard 式卡片堆叠。

### 3.4 Partial 与 Fallback

- Partial component 只使用已经确认的部分；存在 verified 子组件时，不得将整个组件族降级为 fallback。
- Binding 缺失或组件确实无法使用时，只对受影响的局部区域使用 fallback。
- Fallback 必须遵循现有 token、主题和视觉规范，并明确标记未绑定状态，不得伪装成 confirmed component。
- 字体缺失不构成重画正式组件的理由；应优先保留组件结构并使用允许的替代字体。

### 3.5 交付检查

- 初稿完成后执行相关 component checklist 和 `canon/checklists/visual-review.yaml`。
- Figma 页面还必须执行 `canon/checklists/figma-generation-review.yaml`。
- 检查未通过时，应先修复组件、主题、布局、内容和绑定问题，再交付最终结果。
