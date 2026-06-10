---
name: zhangle-agent-design-system
description: Use this skill to generate, review, repair, or prototype AI Zhangle / New Zhangle mobile design outputs through a schema-first, Agent-readable design-system repository.
---

# Zhangle Agent Design System

这个文件是 Agent 的任务路由说明，不是路径总表，也不是设计规范的最终真源。

路径和入口以 `manifest.json` 为准。执行任务时先读取 `manifest.json` 定位相关文件，再按本文件判断任务类型、读取顺序、验证方式和交付要求。

## 基本原则

- `manifest.json` 负责维护仓库路径、入口、目录和路由。
- `SKILL.md` 只负责说明不同任务该怎么做。
- `canon/` 是设计系统真源，承载 tokens、components、archetypes、scenarios 和 checklists。
- `authoring/` 是人类维护输入层，适合写组件意图、业务场景、风险边界和示例。
- `bindings/` 是连接层，用来查 Figma、assets 和未来 code links，不把连接信息写进 canon 真源。
- `docs/` 是解释层，只在 canon、authoring、bindings 不够时作为补充阅读。
- `docs/generated/` 是生成结果，不要当作可编辑真源。
- 涉及视觉生成、视觉评审、design tasting、层级、密度、氛围或美感判断时，必须读取 `DESIGN.md`。
- 本文件是 Agent 行为和仓库维护规则的主入口；`AGENTS.md` 仅作为兼容入口。

## 仓库维护规则

### Source Of Truth

- Tokens：`canon/foundations/tokens/`
- Components：`canon/components/`
- Archetypes：`canon/archetypes/`
- Business scenarios：`canon/scenarios/`
- Review rules：`canon/checklists/`
- Aesthetic entrypoint：`DESIGN.md`
- Visual language and design tasting：`docs/references/foundations/visual-language.md`、`docs/references/process/design-taster.md`、`docs/references/process/impeccable-adaptation.md`
- Figma bindings：`bindings/figma/`
- Local assets：`bindings/assets/manifest.yaml`
- Human brief inputs：`authoring/`
- HTML low-fidelity renderer rules：`renderers/html/`

### Editing Rules

- 保持已有 ID 稳定。
- 有来源迁移或引用关系时，补充 `sourceRefs`。
- 不要把 `docs/generated/` 或生成物当作可编辑真源。
- 不要把本地 SVG、PNG、fonts、JSON templates 当作 maintained Figma component instances。
- maintained components 以 Figma component IDs 作为主要设计来源。
- H5 / HTML prototypes 可以使用 Figma IDs 作为 identity evidence，但必须通过 `renderers/html/` 规则渲染。
- Foundation 和 component files 拥有 color、typography、radius、spacing、component metrics 等准确值；视觉语言文件只补充氛围、构图、层级、密度和 design-tasting 判断。
- 不要从审美笔记中引入新的 color、typography、radius 或 spacing 系统。
- 新增或修改 component 时，同步检查 `authoring/components/index.yaml`、对应 brief、`canon/components/`、`canon/checklists/`、`bindings/figma/components.yaml` 和 schema 是否需要更新。
- 修改仓库结构、canon、bindings、checklists、docs、schemas、renderers 或 workflow 文档后，在 `docs/references/change-history.md` 追加简洁记录。
- 合并前至少运行相关 JSON / YAML 解析校验。

### Human-Owned Fields

以下内容必须由人类撰写或确认，Agent 可以起草、规范化、验证和提出建议，但不能把未确认内容当作最终事实：

- `description`
- `usageRules`
- `aiWarnings`
- `businessScenarios`
- financial risk boundaries
- destructive or trading-action rules
- `purpose`
- `usedIn`
- `humanRules`
- `riskWarnings`
- `allowedZones`
- `forbiddenZones`
- `requiredPairings`
- `forbiddenPairings`
- `examples`
- component `status`

### Collaboration Workflow

- 人类优先编辑 `authoring/` 中的简单 brief。
- Agent 将 brief 扩展到 `canon/`、`bindings/`、`canon/checklists/` 和 `docs/generated/`。
- Component 工作使用三段式 YAML brief：`01_HUMAN_REQUIRED`、`02_AGENT_EXTRACTED`、`03_AGENT_EXPANSION_AND_CHECKLIST`。
- 视觉生成或评审从 `DESIGN.md` 开始，再读取最小相关 foundation、component、scenario 和 review 文件。
- 每次 PR 或批量变更尽量聚焦一个 component、scenario、token group、checklist、Figma binding group 或 case study。

## 开始任何任务

1. 判断任务类型：设计生成、设计评审、Figma binding 查询、组件规范、页面或业务场景规范、brief 编写或扩展、H5 / HTML low-fidelity prototype、token 查询、视觉审美评审。
2. 读取 `manifest.json`，用它定位本次任务需要的入口和目录。
3. 只读取和本次任务相关的最小文件集合。
4. 如果任务涉及视觉质量，读取 `DESIGN.md`。
5. 如果需要 Figma 或本地资产，优先通过 `bindings/` 定位。
6. 交付前运行相关 `canon/checklists/`。如果目标是 Figma screen generation，必须包含 `canon/checklists/figma-generation-review.yaml`。
7. 如果改动了 Figma generation 规则，同步检查 `canon/checklists/figma-generation-review.yaml`，保证 checklist 仍覆盖这些硬性约束。
8. 如果改动了仓库结构、canon、bindings、checklists、docs、schemas、renderers 或 workflow 文档，在 `docs/references/change-history.md` 追加简洁记录。

## 业务路由关键词

这个列表只负责把用户口语中的业务词路由到正确文件，不替代 `authoring/scenarios/`、`canon/scenarios/`、`canon/archetypes/` 或组件规范。

- 大盘、市场总览、指数、涨跌榜、异动、竞价、弹幕、资讯、涨停猎手：读取 `authoring/scenarios/market-index.brief.yaml`、`canon/archetypes/market-overview-page.yaml` 和 `canon/components/market-index-modules.meta.yaml`；如果 `canon/scenarios/market-index.yaml` 已存在，再读取它作为机器场景路由。
- 自选、持仓、行情列表、金融表格、K线图、最新价、涨幅、涨跌、成交额、换手率：读取 `canon/scenarios/watchlist.yaml`、`canon/archetypes/mobile-list-page.yaml`、`docs/references/lists/financial-table-list.md`、`docs/references/lists/watchlist.md` 和相关 table/list templates。
- 交易、下单、买入、卖出、撤单、条件单、委托、历史委托、模拟交易、实盘交易：读取 `authoring/scenarios/trading.brief.yaml`、相关 trading component brief / meta 和交易风险 checklist；如果 `canon/scenarios/trading.yaml` 已存在，再读取它作为机器场景路由。
- AI 对话、消息、问答、追问、关联问题、思考过程、回答状态、底部输入栏：读取 `authoring/scenarios/ai-chat.brief.yaml`、`canon/scenarios/ai-chat.yaml`、`canon/archetypes/mobile-chat-page.yaml`、`canon/components/message-feed.meta.yaml` 和 `canon/components/chat-input.meta.yaml`。
- Bottom Bar、底部输入、语音输入、键盘输入、任务助手、陪伴、首页入口展开、个股详情预交易：读取相关 `authoring/scenarios/bottom-bar-*.brief.yaml`、`canon/components/bottom-bar.meta.yaml` 和 `bindings/figma/components.yaml` 中的 bottom-bar family。
- Action Sheet、弹窗、协议确认、AI 结果说明、输入任务、高风险交易确认：读取 `authoring/scenarios/action-sheet-modal-usage.brief.yaml`、`canon/components/action-sheet.meta.yaml` 和相关 action-sheet checklist / binding。
- 视觉风格、审美、氛围、层级、密度、polish、design tasting：读取 `DESIGN.md`、`docs/references/foundations/visual-language.md`、`docs/references/process/design-taster.md` 和 `docs/references/process/impeccable-adaptation.md`。
- Figma 组件 key、component family、variant、变量、样式、绑定缺失：读取 `bindings/figma/components.yaml`、`bindings/figma/critical-bindings.yaml`、`bindings/figma/files.yaml` 和 `bindings/figma/variables.yaml`。

## 按任务读取

### Component Generation

读取：

- `authoring/components/index.yaml`：确认可用组件 brief。
- `authoring/components/{component-id}.brief.yaml`：读取组件目的、业务场景、风险边界、区域、搭配关系、示例和状态。
- `docs/references/component-brief-workflow.md`：理解三段式 brief 模型，以及人类、Agent、Figma 之间的责任边界。
- `schemas/component-brief.schema.yaml`：验证 brief 结构。
- `schemas/component.schema.json` 和 `schemas/component-meta.schema.yaml`：验证 expanded component metadata。
- `canon/foundations/tokens/color.tokens.json`：使用 canonical color tokens，避免 raw colors。
- 对应的 `canon/components/{component-id}.meta.yaml`：读取 props、variants、states、slots、usage rules、bindings 和 review checks。
- `canon/checklists/{component-id}-review.yaml`：验证组件输出。
- `bindings/figma/components.yaml`：读取组件级 Figma binding、variant hints 和 verification gaps。
- `bindings/figma/critical-bindings.yaml`：当组件是 high-risk control 或必须是真实 Figma instance 时读取。
- `bindings/figma/components.source.yaml`：需要 Figma exact name、variant hints 或 migration evidence 时读取。
- `canon/checklists/visual-review.yaml`：交付前做视觉检查。

### Component Brief Authoring Or Expansion

读取：

- `docs/references/component-brief-workflow.md`：确认 component brief 格式。
- `authoring/components/index.yaml`：确认组件 brief 入口。
- `authoring/components/{component-id}.brief.yaml`：读取人类拥有的判断和 Agent 提取事实。
- `schemas/component-brief.schema.yaml`：验证 brief。
- `canon/components/{component-id}.meta.yaml`：扩展或核对 component metadata。
- `canon/checklists/{component-id}-review.yaml`：扩展或核对 review checklist。
- `bindings/figma/components.yaml`：更新或核对 Figma binding map。
- `docs/generated/components/index.md`：需要时更新生成索引。

`01_HUMAN_REQUIRED` 字段必须由人类撰写或确认。Agent 可以起草结构、提取 Figma facts、扩展 canon/checklist/binding，但不确定内容必须标记为 `TODO_HUMAN_CONFIRM` 或 `TODO_VERIFY_WITH_FIGMA`。

### Page Or Scenario Generation

读取：

- `DESIGN.md`：当任务是完整页面、视觉生成、redesign 或 aesthetic direction 时读取。
- `docs/references/foundations/visual-language.md`：读取 AI Zhangle 的氛围、构图、密度、层级、dark/light 姿态和 icon policy。
- `docs/references/foundations/tokens.md` 和 `docs/references/foundations/typography.md`：先确认基础 token 和字体规则，再做视觉 polish。
- `authoring/scenarios/*.brief.yaml`：当业务场景是新的，或人类意图正在调整时读取。
- `canon/archetypes/*.yaml`：读取页面骨架和 zone 结构。
- `canon/scenarios/*.yaml`：把业务意图映射到 archetypes、components 和 constraints。
- 相关 `canon/components/*.meta.yaml`：读取页面中组件的规则。
- `bindings/assets/manifest.yaml`：需要 icons、fonts、templates 或 prototype fallback assets 时读取。
- `canon/checklists/visual-review.yaml`：检查完整页面或场景输出。
- `canon/checklists/figma-generation-review.yaml`：检查组件覆盖、fixed chrome、Auto Layout、fallback labels、annotations、themes、screenshots 和 metadata。

### Aesthetic Direction Or Design Tasting

读取：

- `DESIGN.md`：确认 aesthetic route 和 source priority。
- `docs/references/foundations/visual-language.md`：读取视觉语言、氛围、布局、密度、层级、字体原则、iconography 和 composition。
- `docs/references/process/design-taster.md`：按结构化流程做 design tasting 和 polish。
- `docs/references/process/impeccable-adaptation.md`：检查 AI Zhangle 特定审美问题。
- `docs/references/visual-audit-chain.md`：按意图理解、视觉审计、证据、repair brief 的顺序评审。
- `docs/references/anti-patterns.md`：识别结构、视觉和生产质量 anti-patterns。
- `docs/references/foundations/tokens.md`、`docs/references/foundations/typography.md`、`canon/foundations/tokens/*.json` 和 theme files：改颜色、字体、圆角或间距前必须读取。

视觉判断可以补充缺失的构图和美感信息，但不能覆盖 foundation files 已经定义的 color、typography、radius、spacing 或 component metrics。

### H5 Or HTML Low-Fidelity Prototype

读取：

- 相关 `canon/scenarios/*.yaml`：确认业务路线。
- 相关 `canon/archetypes/*.yaml`：确认页面骨架。
- 相关 `canon/components/*.meta.yaml`：确认组件身份和使用规则。
- `bindings/figma/critical-bindings.yaml`：确认 maintained components 的身份要求。
- `renderers/html/component-renderers.yaml`：确认组件如何转成 low-fidelity DOM/CSS。
- `renderers/html/page-renderers.yaml`：确认页面壳和场景如何渲染。
- `bindings/assets/manifest.yaml`：仅用于 prototype fallback assets。
- `canon/checklists/visual-review.yaml`：验证 prototype 输出。

### Visual Review

读取：

- `DESIGN.md`：确认视觉评审路线。
- `canon/checklists/visual-review.yaml`：执行可检查规则。
- 相关 component、archetype 和 scenario files：确认被评审页面应遵守的源规则。
- `docs/references/foundations/review-report.md`：需要人类可读评审报告时读取。
- `docs/references/process/design-taster.md`：检查 hierarchy、density、layout、typography、icon、theme、chart 和 polish。
- `docs/references/foundations/visual-language.md`：确认 AI Zhangle aesthetic intent 和 composition rules。

### Token Or Theme Lookup

读取：

- `canon/foundations/tokens/color.tokens.json`：canonical color token values。
- `canon/foundations/themes/light.theme.yaml`：light mode semantic mappings。
- `canon/foundations/themes/dark.theme.yaml`：dark mode semantic mappings。
- `canon/foundations/tokens/xzl-token-mapping.source.json`：只在需要 provenance 或 migration check 时读取，不作为编辑真源。

### Figma Binding Lookup

读取：

- `bindings/figma/components.yaml`：组件级 Figma binding map。
- `bindings/figma/critical-bindings.yaml`：高风险控件和必须真实绑定的组件。
- `bindings/figma/files.yaml`：Figma file 信息。
- `bindings/figma/variables.yaml`：token 到 Figma variables 的映射候选。

不要把 `TODO_VERIFY_WITH_FIGMA` 当成确认过的 component key 或 node id。

判定组件是否可绑定前，必须先读取 `bindings/figma/components.yaml`。不要只根据 `canon/`、当前画板、截图效果或 `manifest.json` 路由判断组件缺失。

## Figma Generation 硬性约束

这些规则从 `agents/openai.yaml` 迁回本文件。它们是 Agent 生成或修复 Figma 页面时必须执行的核心约束，不是 UI metadata。

### 路由与读取

- 生成或评审新涨乐 / AI Zhangle 移动金融界面时，以本仓库为唯一事实来源。
- 先按 `manifest.json` 和本文件完成路由，再读取相关 `authoring/`、`canon/`、Figma `bindings/`、`assets` 和 `checklists`。
- 涉及 Figma 生成时，`bindings/figma/components.yaml` 是判断 component family、component key、component set key、variant 和 import API 的必读文件；读取失败时先停止并说明 blocker，不要直接改用 fallback。
- 涉及视觉生成或视觉评审时，必须遵循 `DESIGN.md` 的视觉语言。
- 从零生成不等于从零绘制组件。只要目标场景已有 confirmed 或 partial confirmed component family，生成前必须先完成 component-family map，列出每个模块的 `familyId`、`componentKey` / `componentSetKey`、`importApi`、variant / theme、文字覆盖状态和 blocker 状态。
- 在 component-family map 和 token-source map 完成前，不允许创建主屏主体。最多只能创建右侧 annotation 或临时 probe 节点；probe 失败后必须清理或明确标注，不得把 probe 失败直接升级为整屏重绘。

### Binding 规则

- 只有 Figma binding 已确认时，才把目标模块当作 confirmed component 使用；确认来源优先查 `bindings/figma/components.yaml`，再查对应 `canon/components/*.meta.yaml`。
- 如果 Figma component binding 缺失，或仍标记为 `TODO_VERIFY_WITH_FIGMA`，不要猜测 component key、variant 或 override property。
- 不要伪装成已绑定组件；应标记为 `binding pending`、`未绑定组件`，或停止等待补齐绑定信息。
- `componentKey: not_a_component_instance` 只表示外层容器不是可 import 的组件，不代表它的子 family 不可用。遇到这种结构时，继续读取同一条目下的 `familyBindings`；凡是 `status: verified*` 且有 `componentKey`、`componentSetKey` 或明确 `importApi` 的 family，都应按 confirmed component family 使用。

### Component 优先级

- Figma 生成必须优先使用目标 Figma 文件或已确认 library 中的 existing Components。
- 只要已有 confirmed Component，就不要用 raw frame、rectangle 或 text 重画 lookalike。
- 页面应通过 import、instantiate 或 clone confirmed Components 来搭建。
- 使用 component 前，列出页面应该使用的 component families，并对每个 confirmed `componentKey` 或 `componentSetKey` 做小型 import / instantiate probe。
- 必须选择正确 variant，并显式确认 light / dark variable mode。
- 目标 Figma 文件里的既有 frame 只能作为参考；复用任何结构前，都要检查是否存在 wrong variant、clipped clone 或 placeholder text。
- 对 confirmed fixed chrome 和核心消息组件，probe 失败是 P0 blocker，不是降级成高保真自绘的许可。示例：chat-topbar、chat-input / bottom bar、message-feed 的 verified 子组件、action-sheet mask / title / button area、trading action controls。
- 如果 required confirmed 组件整体无法 import / instantiate / clone，必须停止交付或生成明显非最终的 blocker frame；不得交付一个看起来完整但主要由 raw frames 重绘的页面。
- 允许 fallback 的范围只能是没有 confirmed binding 的局部业务模块，或 partial family 中确实缺失的子区域。fallback 必须低保真、图层名含 `未绑定组件 / binding pending`，且右侧 annotation 写清检查过哪些 binding 条目、缺失字段和失败原因。
- 每个已放置 confirmed component 都必须能在右侧 annotation 或 metadata 中追溯到来源：`componentFamily`、`componentKey` / `componentSetKey` 或 source instance node、`usageMethod`、variant / theme。没有来源证据的“像组件”按重绘失败处理。

### Token 与变量门禁

- Figma 生成必须优先使用 Figma variables、styles 或 confirmed component rendering 承载颜色、字体、圆角、阴影和间距。
- 生成前必须读取 `bindings/figma/variables.yaml`，并尽力用 `search_design_system` 或目标文件变量检查验证变量/样式是否可用。
- 不要把手写 RGB / hex 当作规范颜色。只有以下来源可以通过 token compliance：Figma variable、Figma style、confirmed component instance 的原始渲染、或 canonical token 明确映射后仍在 annotation 标为 `token binding pending` 的低保真 fallback。
- 如果变量或样式无法解析，可以做局部低保真 fallback，但必须在右侧 annotation 说明 `token binding pending`；不得声称页面“引用了规范颜色”。
- 对 red / green 等金融语义色，必须使用 canonical financial semantics 或 confirmed component token；不能按视觉感觉选色。

### Auto Layout 规则

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

### 内容规则

- 生成屏幕主体里不要留下占位、提示或说明文案，例如重复 dummy 字符、泛化标签、未解析 prompt。
- 应基于页面意图填入真实感金融、新闻或对话内容，保证页面可读。
- `文字文字`、`placeholder`、`dummy`、`TODO` 等内容只能出现在右侧说明里的明确 blocker，不得出现在产品屏幕主体或业务示例中。

### 字体兼容

- PingFang SC、涨乐财富体等商业或团队字体在当前账号权限下可能无法通过云字体解决；这些字体缺失不构成 component binding blocker。
- 字体不可用时，必须优先保留真实 component instance / clone 结构，并将内部中文文字替换为 `Noto Sans SC`，数字文字替换为 `Noto Sans HK`；不要因为 PingFang SC 或涨乐财富体缺失而降级重绘组件。
- 如果 append / mutate 被 unloaded font 拦截，先按 key import / instantiate 到隔离 probe，读取实际 text font segments，加载可用字体，替换实例内部文字字体后再 append；必要时寻找同一目标文件中来自原始 design-system source 的真实 instance clone。
- 字体替换结果写入右侧 annotation 的 component report，表述为 `font substituted: PingFang SC / ZLCaiFuTi -> Noto Sans SC / Noto Sans HK`，不要写成 binding blocker。
- 只有在字体替换后仍无法保留组件结构，且存在非字体原因导致 import / instantiate / clone 失败时，才按组件 blocker 处理。

### Clone、Partial Component 与 Fallback

- 只有在能够保留结构时，才 clone confirmed Component。
- 如果无法保留结构，使用清晰标注的 `未绑定组件` 或 `binding pending` fallback module。
- 在标记 `binding pending` 前，必须说明已经检查过的 binding 条目、缺失的字段和失败原因；如果 `familyBindings` 中存在 verified 子组件，只能对缺失的局部模块 fallback，不能把整个组件族降级为未绑定。
- fallback 原因写到右侧 annotation panel。
- partial component 只使用已确认部分。
- 例如 modal mask 已确认，但 body text override targets 仍 pending 时：使用 confirmed mask，创建明确标注的 fallback body，不要强行把业务文案写进未验证 component，也不要重画 component lookalike。

### 主题要求

- 主题是硬要求。
- 最终交付前，必须确认每个 component clone 或 instance 都解析到要求的 light / dark mode。
- 如果父级 Frame 是 light / dark mode，里面的组件不允许出现相反模式。

### 屏幕与 Annotation 边界

- 生成屏幕主体中不要放说明、binding 报告或 review 注释。
- 视觉说明、交互说明、binding 报告、review 注释和 fallback blocker 统一放在屏幕右侧 annotation card。

### 最终验证

- 生成后必须检查 Figma metadata 和 screenshot rendering。
- 扫描生成屏幕、nested imported instances 和 annotation cards，确认不存在：占位文案、未解析 prompt marker、raw TODO marker、wrong theme variant、clipped instance、Fixed Height 裁切文字、多行正文固定宽度导致换行异常、`message-feed-scroll` 没有覆盖子内容、Bottom Bar 覆盖内容或未保留 40px 间距、component lookalike。
- annotation 中缺失 binding 的说明应写成 `binding pending` 或 `text override pending`，不要保留 raw TODO marker。
- 所有问题修复后再汇报。

## 不可违反的规则

- 不要在 token source files 之外直接使用 raw colors。
- 不要把 `docs/generated/` 当作可编辑真源。
- 不要猜 Figma component variants、variable names、component keys 或 node ids。
- 不要把本地 SVG、PNG、fonts、JSON templates 当成真实 Figma component instances。
- maintained components 以 Figma component IDs 作为主要设计来源。
- H5 / HTML prototypes 可以使用 Figma IDs 作为 identity evidence，但必须通过 `renderers/html/` 规则渲染。
- 不要把金融业务页面画成通用 dashboard cards。
- 交付前不要跳过 checklist validation。
- high-risk financial interaction rules 必须由人类撰写和审核。
- 旧 source package 路径只可作为历史迁移信息；除非任务明确要求追溯旧来源，否则不要让 Agent 回头依赖旧目录。

## 交付说明

生成类任务需要说明：

- task type
- loaded canonical files
- tokens used
- component or scenario decisions
- Figma/local asset bindings
- checklist summary
- 如果目标是 Figma，补充 Figma generation checklist summary
- open gaps

评审类任务需要说明：

- severity
- location
- violated rule
- current behavior
- expected behavior
- suggested fix
- source file
