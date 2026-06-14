---
name: zhangle-agent-design-system
description: 为新涨乐 / AI 涨乐产品经理生成接近视觉稿、可直接交付设计师微调的移动端原型图（HTML 或 Figma 两种形态）。基于团队 Figma 组件库和 design tokens 严格约束，确保产出符合设计规范。触发场景：做原型图、画原型、出稿、给设计师看的稿、PRD 配图、demo、视觉稿、交易页、自选股页、AI 对话页、下单页、市场行情页、Bottom Bar、Action Sheet 等业务页面或组件的原型设计。即使用户只说"画个页面 / 做个 demo / 出张稿"，只要涉及新涨乐 / AI 涨乐移动端，都应触发本 skill。
---

# AI Zhangle Agent Design system

本 skill 为产品经理生成接近视觉稿的移动端原型（HTML 或 Figma）。agent 进入后按下方任务路由读取最小文件集。



## 1. 真源地图



## 1.1 基本原则

- `manifest.json` 负责维护仓库路径、入口、目录和路由。
- `SKILL.md` 只负责说明不同任务该怎么做。
- `canon/` 是设计系统真源，承载 tokens、components、archetypes、scenarios 和 checklists。
- `authoring/` 是人类维护输入层，适合写组件意图、业务场景、风险边界和示例。
- `bindings/` 是连接层，用来查 Figma、assets 和未来 code links，不把连接信息写进 canon 真源。
- `docs/` 是解释层，只在 canon、bindings 不够时作为补充阅读。
- `docs/generated/` 是生成结果，不要当作可编辑真源。
- 涉及视觉生成、视觉评审、design tasting、层级、密度、氛围或美感判断时，必须读取 `DESIGN.md`。


### 1.2 Source Of Truth

- Tokens：`canon/foundations/tokens/`
- Components：`canon/components/`
- Archetypes：`canon/archetypes/`
- Business scenarios：`canon/scenarios/`
- Review rules：`canon/checklists/`
- Aesthetic entrypoint：`DESIGN.md`
- Visual language and design tasting：`canon/foundations/visual-language.md`、`docs/references/process/design-taster.md`、`docs/references/process/impeccable-adaptation.md`
- Figma bindings：`bindings/figma/`
- Local assets：`bindings/assets/manifest.yaml`
- H5 / HTML Prototype renderer rules：`renderers/html/`

### 1.3 真源使用规则


- 不要把 `docs/generated/` 或生成物当作可编辑真源。
- 不要把本地 SVG、PNG、fonts、JSON templates 当作 maintained Figma component instances。
- maintained components 以 Figma component IDs 作为主要设计来源。
- H5 / HTML prototypes 可以使用 Figma IDs 作为 identity evidence，但必须通过 `renderers/html/` 规则渲染。
- Foundation 和 component files 拥有 color、typography、radius、spacing、component metrics 等准确值；视觉语言文件只补充氛围、构图、层级、密度和 design-tasting 判断。
- 不要从审美笔记中引入新的 color、typography、radius 或 spacing 系统。
- 颜色/字号/行高/圆角/间距取值必须来自 token 系统或 confirmed component rendering，不允许手写 hex 或任意值。


## 2. 任务路由

### 2.1 开始任何任务

1. 判断任务类型：生成Figma设计稿、生成H5 / HTML 高保真页面/原型
2. 读取 `manifest.json`，用它定位本次任务需要的入口和目录。
3. 只读取和本次任务相关的最小文件集合。
4. 如果任务涉及视觉质量，读取 `DESIGN.md`。
5. 如果需要 Figma 或本地资产，优先通过 `bindings/` 定位。
6. 交付前运行相关 `canon/checklists/`。如果目标是 Figma screen generation，必须包含 `canon/checklists/figma-generation-review.yaml`。


### 2.2 业务路由关键词

这个列表只负责把用户口语中的业务词路由到正确文件，不替代 `canon/scenarios/`、`canon/archetypes/` 或组件规范。

- 大盘、市场总览、指数、涨跌榜、异动、竞价、弹幕、资讯、涨停猎手：读取 `authoring/scenarios/market-index.brief.yaml`、`canon/archetypes/market-overview-page.yaml` 和 `canon/components/market-index-modules.meta.yaml`；如果 `canon/scenarios/market-index.yaml` 已存在，再读取它作为机器场景路由。
- 自选、持仓、行情列表、金融表格、K线图、最新价、涨幅、涨跌、成交额、换手率：读取 `canon/scenarios/watchlist.yaml`、`canon/archetypes/mobile-list-page.yaml`、`docs/references/lists/financial-table-list.md`、`docs/references/lists/watchlist.md` 和相关 table/list templates。
- 交易、下单、买入、卖出、撤单、条件单、委托、历史委托、模拟交易、实盘交易：读取 `authoring/scenarios/trading.brief.yaml`、相关 trading component brief / meta 和交易风险 checklist；如果 `canon/scenarios/trading.yaml` 已存在，再读取它作为机器场景路由。
- AI 对话、消息、问答、追问、关联问题、思考过程、回答状态、底部输入栏：读取 `authoring/scenarios/ai-chat.brief.yaml`、`canon/scenarios/ai-chat.yaml`、`canon/archetypes/mobile-chat-page.yaml`、`canon/components/message-feed.meta.yaml` 和 `canon/components/chat-input.meta.yaml`。
- Bottom Bar、底部输入、语音输入、键盘输入、任务助手、陪伴、首页入口展开、个股详情预交易：读取相关 `authoring/scenarios/bottom-bar-*.brief.yaml`、`canon/components/bottom-bar.meta.yaml` 和 `bindings/figma/components.yaml` 中的 bottom-bar family。
- Action Sheet、弹窗、协议确认、AI 结果说明、输入任务、高风险交易确认：读取 `authoring/scenarios/action-sheet-modal-usage.brief.yaml`、`canon/components/action-sheet.meta.yaml` 和相关 action-sheet checklist / binding。
- 视觉风格、审美、氛围、层级、密度、polish、design tasting：读取 `DESIGN.md`、`canon/foundations/visual-language.md`、`docs/references/process/design-taster.md` 和 `docs/references/process/impeccable-adaptation.md`。
- Figma 组件 key、component family、variant、变量、样式、绑定缺失：读取 `bindings/figma/components.yaml`、`bindings/figma/critical-bindings.yaml`、`bindings/figma/files.yaml` 和 `bindings/figma/variables.yaml`。

### 2.3按任务读取

#### Component Generation

读取：

- `canon/foundations/tokens/color.tokens.json`：使用 canonical color tokens，避免 raw colors。
- 对应的 `canon/components/{component-id}.meta.yaml`：读取 props、variants、states、slots、usage rules、bindings 和 review checks。
- `canon/checklists/{component-id}-review.yaml`：验证组件输出。
- `bindings/figma/components.yaml`：读取组件级 Figma binding、variant hints 和 verification gaps。
- `bindings/figma/critical-bindings.yaml`：当组件是 high-risk control 或必须是真实 Figma instance 时读取。
- `bindings/figma/components.source.yaml`：需要 Figma exact name、variant hints 时读取。
- `canon/checklists/visual-review.yaml`：交付前做视觉检查。


#### Page Or Scenario Generation

读取：

- `DESIGN.md`：当任务是完整页面、视觉生成、redesign 或 aesthetic direction 时读取。
- `canon/foundations/visual-language.md`：读取 AI Zhangle 的氛围、构图、密度、层级、dark/light 姿态和 icon policy。
- `docs/references/foundations/tokens.md` 和 `docs/references/foundations/typography.md`：先确认基础 token 和字体规则，再做视觉 polish。
- `canon/archetypes/*.yaml`：读取页面骨架和 zone 结构。
- `canon/scenarios/*.yaml`：把业务意图映射到 archetypes、components 和 constraints。
- 相关 `canon/components/*.meta.yaml`：读取页面中组件的规则。
- `bindings/assets/manifest.yaml`：需要 icons、fonts、templates 或 prototype fallback assets 时读取。
- `canon/checklists/visual-review.yaml`：检查完整页面或场景输出。
- `canon/checklists/figma-generation-review.yaml`：检查组件覆盖、fixed chrome、Auto Layout、fallback labels、annotations、themes、screenshots 和 metadata。

#### Aesthetic Direction Or Design Tasting

读取：

- `DESIGN.md`：确认 aesthetic route 和 source priority。
- `canon/foundations/visual-language.md`：读取视觉语言、氛围、布局、密度、层级、字体原则、iconography 和 composition。
- `docs/references/process/design-taster.md`：按结构化流程做 design tasting 和 polish。
- `docs/references/process/impeccable-adaptation.md`：检查 AI Zhangle 特定审美问题。
- `docs/references/visual-audit-chain.md`：按意图理解、视觉审计、证据、repair brief 的顺序评审。
- `docs/references/anti-patterns.md`：识别结构、视觉和生产质量 anti-patterns。
- `docs/references/foundations/tokens.md`、`docs/references/foundations/typography.md`、`canon/foundations/tokens/*.json` 和 theme files：改颜色、字体、圆角或间距前必须读取。

视觉判断可以补充缺失的构图和美感信息，但不能覆盖 foundation files 已经定义的 color、typography、radius、spacing 或 component metrics。

#### H5 / HTML Prototype

读取：

- 相关 `canon/scenarios/*.yaml`：确认业务路线。
- 相关 `canon/archetypes/*.yaml`：确认页面骨架。
- 相关 `canon/components/*.meta.yaml`：确认组件身份和使用规则。
- `bindings/figma/critical-bindings.yaml`：确认 maintained components 的身份要求。
- `renderers/html/component-renderers.yaml`：确认组件如何转成 low-fidelity DOM/CSS。
- `renderers/html/page-renderers.yaml`：确认页面壳和场景如何渲染。
- `bindings/assets/manifest.yaml`：仅用于 prototype fallback assets。
- `canon/checklists/visual-review.yaml`：验证 prototype 输出。

生成单 HTML Demo 时，Bottom Bar 必须优先直接复用：

- `renderers/html/components/bottom-bar/bottom-bar.assets.inline.js`
- `renderers/html/components/bottom-bar/bottom-bar.inline.js`

先内联素材文件，再内联组件文件，不要逐页重画组件内部结构。使用：

- 核心一级页面：`<xzl-bottom-bar scene="home" theme="light|dark">`
- AI 对话页 / 任务助手页：`<xzl-bottom-bar scene="chat" theme="light|dark">`
- 个股详情页：`<xzl-bottom-bar scene="stock" theme="light|dark">`
- 陪伴叠加：在已有场景上增加 `companion="on"`；它覆盖正文，不占位、不推高页面。
- 次级页面、专题页或无持续底部操作需求的页面：不渲染该组件。

Top Bar 必须直接复用统一 runtime：

- `renderers/html/components/top-bar/top-bar.assets.inline.js`
- `renderers/html/components/top-bar/top-bar.inline.js`

先内联素材文件，再内联组件文件。首页出招、首页大盘、首页早点听、
首页提醒和首页任务使用 `<xzl-home-top-bar theme="light|dark">`；
AI 对话页和任务助手页使用 `<xzl-chat-top-bar theme="light|dark">`。
二级页面不要误用上述 Top Bar。

当前已确认的一级页面背景必须直接复用：

- `renderers/html/components/page-background/page-background.assets.inline.js`
- `renderers/html/components/page-background/page-background.inline.js`

先内联素材文件，再内联组件文件，使用
`<xzl-page-background scene="home|chat|morning-brief|limit-up-hunter|event-catcher" theme="light|dark">`。
它适用于首页、AI 对话、早点听、涨停猎手和事件捕手，固定为 `390x844`，
位于页面根层最底部。不得使用纯色、手绘渐变或页面截图替代。交易页和个股详情页
背景尚未完成本轮专项治理，不得提前猜测或复用该一级背景。

- 未明确要求点击交互时保持静态展示。
- 该 runtime 仅用于 HTML；Figma 任务继续使用 `bindings/figma/components.yaml` 中的正式组件绑定。

#### Visual Review

读取：

- `DESIGN.md`：确认视觉评审路线。
- `canon/checklists/visual-review.yaml`：执行可检查规则。
- 相关 component、archetype 和 scenario files：确认被评审页面应遵守的源规则。
- `docs/references/foundations/review-report.md`：需要人类可读评审报告时读取。
- `docs/references/process/design-taster.md`：检查 hierarchy、density、layout、typography、icon、theme、chart 和 polish。
- `canon/foundations/visual-language.md`：确认 AI Zhangle aesthetic intent 和 composition rules。

#### Token Or Theme Lookup

读取：

- `canon/foundations/tokens/color.tokens.json`：canonical color token values。
- `canon/foundations/themes/light.theme.yaml`：light mode semantic mappings。
- `canon/foundations/themes/dark.theme.yaml`：dark mode semantic mappings。
- `canon/foundations/tokens/xzl-token-mapping.source.json`：只在需要 provenance 或 migration check 时读取，不作为编辑真源。

#### Figma Binding Lookup

读取：

- `bindings/figma/components.yaml`：组件级 Figma binding map。
- `bindings/figma/critical-bindings.yaml`：高风险控件和必须真实绑定的组件。
- `bindings/figma/files.yaml`：Figma file 信息。
- `bindings/figma/variables.yaml`：token 到 Figma variables 的映射候选。




## 3. 产出硬性约束

### 3.1 Component 优先级

- Figma 生成必须优先使用目标 Figma 文件或已确认 library 中的 existing Components。
- 只要已有 confirmed Component，就不要用 raw frame、rectangle 或 text 重画。
- 页面应优先通过 import、instantiate 或 clone confirmed Components 来搭建。
- 使用 component 前，列出页面应该使用的 component families，并对每个 confirmed `componentKey` 或 `componentSetKey` 做小型 import / instantiate probe。
- 必须选择正确 variant，并显式确认 light / dark variable mode。
- 不允许只按 `Dark=On`、`Dark=Off`、组件名包含关系或循环覆盖式 fuzzy match 选择 component set child。选择 variant 时必须一次性匹配完整 `expectedVariantProperties` / `variantProperties`；如果 confirmed variant 已有 `componentKey`，优先直接 `importComponentByKeyAsync` 导入该 variant。
- 放置 confirmed component 后必须反查实际来源和 variant：记录 `mainComponent.name`、`mainComponent.parent.name`、可读的 `componentProperties` 或实际 variant 名；若与 expected variant 不一致，必须修复后再交付。
- AI Chat 场景的背景和底部输入是 P0 语义组件：背景必须使用已确认的 `新版工作区/一级` 对话背景变体或对应 HTML runtime，不得退回旧版背景、纯色或手绘渐变；底部输入必须使用 `场景=对话` 的 chat input / bottom bar variant，不得使用 `场景=默认` 首页 Bottom Bar。
- 目标 Figma 文件里的既有 frame 只能作为参考；复用任何结构前，都要检查是否存在 wrong variant、clipped clone 或 placeholder text。
- 对 confirmed fixed chrome 和核心消息组件，probe 失败是 P0 blocker，不是降级成高保真自绘的许可。示例：chat-topbar、chat-input / bottom bar、message-feed 的 verified 子组件、action-sheet mask / title / button area、trading action controls。
- 允许重绘的范围只能是没有 confirmed binding 的局部业务模块，或 partial family 中确实缺失的子区域。


### 3.2 Binding 规则

- 只有 Figma binding 已确认时，才把目标模块当作 confirmed component 使用；确认来源优先查 `bindings/figma/components.yaml`，再查对应 `canon/components/*.meta.yaml`。
- 如果 Figma component binding 缺失，或仍标记为 `TODO_VERIFY_WITH_FIGMA`，不要猜测 component key、variant 或 override property。
- `componentKey: not_a_component_instance` 只表示外层容器不是可 import 的组件，不代表它的子 family 不可用。遇到这种结构时，继续读取同一条目下的 `familyBindings`；凡是 `status: verified*` 且有 `componentKey`、`componentSetKey` 或明确 `importApi` 的 family，都应按 confirmed component family 使用。
- 不要把 `TODO_VERIFY_WITH_FIGMA` 当成确认过的 component key 或 node id。
- 判定组件是否可绑定前，必须先读取 `bindings/figma/components.yaml`。不要只根据 `canon/`、当前画板、截图效果或 `manifest.json` 路由判断组件缺失。


### 3.3 Token 与变量门禁

- Figma 生成必须优先使用 Figma variables、styles 或 confirmed component rendering 承载颜色、字体、圆角、阴影和间距。
- 生成前必须读取 `bindings/figma/variables.yaml`，并尽力用 `search_design_system` 或目标文件变量检查验证变量/样式是否可用。
- 在创建主屏主体前，必须产出 `token-source map` 和 `typography-source map`，至少覆盖 page background、card/surface、divider、primary/secondary/tertiary text、action blue、finance red/green、radius、正文/标题/标签字号和多行行高。map 必须写入右侧 annotation 或任务记录，并标明每项来源是 Figma variable、Figma style、confirmed component rendering、canonical token pending，还是 blocker。
- 不要把手写 RGB / hex 当作规范颜色。合规来源：Figma variable、Figma style、confirmed component instance 的原始渲染、canon token。
- 如果变量或样式无法解析，可以参考规范做局部重绘，取值应该优先来源于已有规范素材。
- 对 red / green 等金融语义色，必须使用 canonical financial semantics 或 confirmed component token；不能按视觉感觉选色。
- 多行正文和对话正文必须映射到 typography scale，并按规范使用 160% line-height；金融数字必须使用涨乐财富体或记录明确的数字字体替代，不能静默使用普通字体。

### 3.4 Auto Layout 规则

- 每个 screen、module、card、list row、bottom area 和承载文字的容器都要使用 Auto Layout。
- 卡片内容应根据真实内容和 padding 自适应伸缩，不要依赖固定手工坐标。
- 移动端 frame 可从 390px 宽开始，但页面高度不必固定为 844px；当场景需要滚动内容时，允许 frame 纵向增长。
- Status Bar、Top Bar、Bottom Bar / Chat Input 等固定 chrome 应独立放在顶部或底部，不要混入普通内容流。
- 内容区可以用多层 Auto Layout 承载 section、card、row 和内部 module。
- 任何包含 Instance 的 Auto Layout wrapper，高度都必须大于或等于内部 Instance，避免组件被裁切。
- 含文字内容的非结构容器优先 Hug Contents，不要用 Fixed Height 裁切真实业务文案。
- Auto Layout 内的多行正文文字优先 Fill Container；只有小标签、数字列、图标标签或已验证组件内部可以固定宽度。
- 对话页 `message-feed-scroll` 必须覆盖全部消息流子内容；reasoning panel 或 message-feed wrapper 缩放后要重新计算父级高度。
- Bottom Bar / Chat Input 必须固定在 frame 最底部，并与内容区保留至少 40px 可见间距，不允许覆盖消息流。

### 3.5 内容规则

- 生成屏幕主体里不要留下占位、提示或说明文案，例如重复 dummy 字符、泛化标签、未解析 prompt。
- 应基于页面意图填入真实感金融、新闻或对话内容，保证页面可读。
- 在 AI Chat / message-feed 中，PRD 里的“快捷追问”“后续追问”“关联问题”“related questions”“follow-up prompts”默认都是同一个 `message-feed.related-question` 语义槽。只要该 confirmed component 可用，不允许再新增第二个自绘快捷追问 / 关联问 fallback 卡片。
- 如果 `message-feed.related-question` 的文案无法通过 verified property 覆盖，保留组件结构并在 annotation 标记 `text override pending`；不要为了写入文案而额外画一个重复模块。只有 PRD 明确要求两个不同模块，且 annotation 说明语义差异时，才允许同时出现。

### 3.6 字体兼容

- PingFang SC、涨乐财富体等商业或团队字体在当前账号权限下可能无法通过云字体解决；这些字体缺失不构成 component binding blocker。
- 字体不可用时，必须优先保留真实 component instance / clone 结构，并将内部中文文字替换为 `Noto Sans SC`，数字文字替换为 `Noto Sans HK`；不要因为 PingFang SC 或涨乐财富体缺失而降级重绘组件。
- 如果 append / mutate 被 unloaded font 拦截，先按 key import / instantiate 到隔离 probe，读取实际 text font segments，加载可用字体，替换实例内部文字字体后再 append；必要时寻找同一目标文件中来自原始 design-system source 的真实 instance clone。
- 只有在字体替换后仍无法保留组件结构，且存在非字体原因导致 import / instantiate / clone 失败时，才按组件 blocker 处理。

### 3.7 Clone、Partial Component 与 Fallback

- 只有在能够保留结构时，才 clone confirmed Component。
- 如果无法保留结构，使用清晰标注的 `未绑定组件` 或 `binding pending` fallback module。
- 在标记 `binding pending` 前，必须说明已经检查过的 binding 条目、缺失的字段和失败原因；如果 `familyBindings` 中存在 verified 子组件，只能对缺失的局部模块 fallback，不能把整个组件族降级为未绑定。
- partial component 只使用已确认部分。
- 例如 modal mask 已确认，但 body text override targets 仍 pending 时：使用 confirmed mask，创建明确标注的 fallback body，不要强行把业务文案写进未验证 component，也不要重画 component lookalike。

### 3.8 主题要求

- 主题是硬要求。
- 最终交付前，必须确认每个 component clone 或 instance 都解析到要求的 light / dark mode。
- 如果父级 Frame 是 light / dark mode，里面的组件不允许出现相反模式。


### 3.9 路由与读取

- 生成新涨乐 / AI Zhangle App端界面时，以本仓库为唯一事实来源。
- 先按 `manifest.json` 和本文件完成路由，再读取相关 `canon/`、Figma `bindings/`、`assets` 和 `checklists`。
- 涉及 Figma 生成时，`bindings/figma/components.yaml` 是判断 component family、component key、component set key、variant 和 import API 的必读文件；读取失败时先停止并说明 blocker，不要直接改用 fallback。
- 涉及视觉生成或视觉评审时，必须遵循 `DESIGN.md` 的视觉语言。
- 从零生成不等于从零绘制组件。只要目标场景已有 confirmed 或 partial confirmed component family，生成前必须先完成 component-family map，列出每个模块的 `familyId`、`componentKey` / `componentSetKey`、`importApi`、variant / theme、文字覆盖状态和 blocker 状态。
- 在 component-family map 和 token-source map 完成前，不允许创建主屏主体。最多只能创建临时 probe 节点；probe 失败后必须清理或明确标注，不得把 probe 失败直接升级为整屏重绘。


## 4. 不可违反的规则

- 不要在 token source files 之外直接使用 raw colors。
- 不要猜 Figma component variants、variable names、component keys 或 node ids。
- 不要把金融业务页面画成通用 dashboard cards。
- 交付前不要跳过 checklist validation。

