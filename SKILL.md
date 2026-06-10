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
- 涉及仓库编辑纪律、人类拥有字段、source-of-truth 规则时，遵循 `AGENTS.md`。

## 开始任何任务

1. 判断任务类型：设计生成、设计评审、Figma binding 查询、组件规范、页面或业务场景规范、brief 编写或扩展、H5 / HTML low-fidelity prototype、token 查询、视觉审美评审。
2. 读取 `manifest.json`，用它定位本次任务需要的入口和目录。
3. 只读取和本次任务相关的最小文件集合。
4. 如果任务涉及视觉质量，读取 `DESIGN.md`。
5. 如果需要 Figma 或本地资产，优先通过 `bindings/` 定位。
6. 交付前运行相关 `canon/checklists/`。如果目标是 Figma screen generation，必须包含 `canon/checklists/figma-generation-review.yaml`。
7. 如果改动了 Figma generation 规则，同步检查 `canon/checklists/figma-generation-review.yaml`，保证 checklist 仍覆盖这些硬性约束。
8. 如果改动了仓库结构、canon、bindings、checklists、docs、schemas、renderers 或 workflow 文档，在 `docs/references/change-history.md` 追加简洁记录。

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
- `bindings/assets/manifest.yaml`：需要 icons、fonts、backgrounds、templates 或 examples 时读取。
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

- 如果因字体或权限导致 Component 无法 instantiate 或 append，先尝试保留真实 component instance。
- 放置前可把实例内部文字字体覆盖为项目当前可用字体。
- 当前 Figma 用户体系未开通商业版或团队版时，不要假设引用字体能上传云端。
- 字体不可用时，中文文字使用 `Noto Sans SC`，数字文字使用 `Noto Sans HK`，并在右侧 annotation 说明 blocker。

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
