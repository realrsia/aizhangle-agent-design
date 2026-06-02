# Agent 可读组件 Brief 工作流与格式框架

> 用途：本文档用于和控件细节格式框架合并，帮助团队定义“人类如何填写组件 brief，Agent 如何读取 Figma 并自动补齐结构化字段”。
>
> 核心原则：**人类写判断，Agent 写结构，Figma 给事实，Git 做审查，Checklist 做治理。**

---

## 1. 背景

我们正在搭建一个面向 Agent 的设计规范底层仓库。这个仓库不是传统设计文档，而是希望同时支持：

- Agent 读取设计规范
- Agent 基于 Figma 组件生成页面
- Agent 审核 Figma / 前端页面
- Agent 根据 checklist 修复问题
- 多人通过 Git 分支、PR、合并进行协作维护

因此，单个组件的规范文件不应该只是“组件说明”，而应该是一个 **Agent 可读、人工可维护、可校验、可扩展** 的组件 brief。

推荐工作方式：

```text
人类维护简单 brief
        ↓
Agent 读取 Figma / 现有 repo
        ↓
Agent 生成结构化初稿
        ↓
人类补充判断性内容
        ↓
Agent 扩展到 canon / bindings / checklists / docs
        ↓
Agent 校验
        ↓
Git PR 合并
```

---

## 2. 文件区域设计原则

为了避免人工漏填，建议组件 brief 文件固定分成三大区：

```text
01_HUMAN_REQUIRED
人工必填区：目的、场景、规则、风险、好坏例

02_AGENT_EXTRACTED
Agent 自动读取区：Figma node、component key、结构、尺寸、字体、variants

03_AGENT_EXPANSION_AND_CHECKLIST
Agent 扩展与自查区：要生成哪些正式文件、要跑哪些检查
```

建议把人工必填区放在文件最上方，因为这是规范制定人最需要关注的地方。

每个需要人工填写的地方，都用明显注释标出：

```yaml
# [HUMAN REQUIRED] 这里必须由设计规范负责人 / PM / 设计师填写
```

每个 Agent 可自动填充的地方，也用注释标出：

```yaml
# [AGENT GENERATED] 这里由 Agent 读取 Figma 后自动补齐
```

每个还没有确认的地方，统一使用：

```yaml
TODO_VERIFY_WITH_FIGMA
TODO_HUMAN_CONFIRM
```

---

## 3. 人类与 Agent 分工

### 3.1 人类必须定义

人类主要负责“判断性内容”：

- 这个组件为什么存在
- 适合哪些业务场景
- 不适合哪些业务场景
- 哪些行为是高风险
- 哪些场景必须二次确认
- 哪些是推荐用法
- 哪些是反例
- 这个组件是否可以进入 stable 状态

对应字段：

```yaml
purpose:
usedIn:
humanRules:
riskWarnings:
allowedZones:
forbiddenZones:
requiredPairings:
forbiddenPairings:
examples:
status:
```

### 3.2 Agent 可以补齐

Agent 主要负责“客观读取、结构化、同步与校验”：

- 从 Figma 读取 node id
- 查找 component key
- 读取 variant property
- 读取 text override fields
- 提取尺寸、间距、字体、颜色
- 生成 slots
- 生成 checklist 初稿
- 更新 Figma binding
- 更新 docs/generated
- 跑 schema 校验

对应字段：

```yaml
figma:
observedStructure:
variants:
states:
slots:
tokens:
textOverrideFields:
resourceRefs:
reviewChecklist:
```

### 3.3 Agent 不应该擅自决定

以下内容不应由 Agent 单独决定：

- 高风险操作是否允许
- 买入 / 卖出 / 撤单是否能出现在哪些页面
- 是否可以绕过 Figma 真实组件实例
- 是否可以用 lookalike frame 替代组件
- 是否把候选变体当成真实变体
- 是否将高风险组件降级为普通按钮

---

## 4. 推荐工作流

### Step 1：人类指定组件

人类可以通过三种方式告诉 Agent 要处理哪个组件。

#### 方式 A：提供 Figma 节点链接

最好提供具体到组件或组件集的 Figma URL，例如：

```text
https://www.figma.com/design/xxx/系统控件?node-id=24876-176203
```

Agent 可以从链接中读取：

- file key
- node id
- 节点名称
- 组件结构
- 属性线索
- 文案
- 尺寸
- token / variable 线索

#### 方式 B：在 Figma 中选中组件

如果工具支持当前选中节点，可以直接告诉 Agent：

```text
请读取当前 Figma 中选中的组件，并生成 brief 初稿。
```

#### 方式 C：通过组件名称或范围指定

例如：

```text
帮我整理系统控件里的普通按钮、交易按钮、标签、开关。
```

这种方式适合批量盘点，但后续最好仍回到具体 node id 或 component key。

---

### Step 2：Agent 读取客观信息

Agent 从 Figma 或现有仓库中读取客观信息。

这些信息不需要人手动填写：

```yaml
figma:
  fileKey: xxx
  nodeId: xxx
  nodeName: xxx
  componentKey: xxx
  figmaExactName: xxx

observedStructure:
  width: xxx
  height: xxx
  layout: xxx
  children: []

variants: []
states: []
typography: {}
tokens: {}
textOverrideFields: []
```

这些属于“客观结构信息”，应该由 Agent 自动提取。

---

### Step 3：Agent 生成 brief 初稿

Agent 根据读取结果生成一个人类可编辑的 brief。

建议路径：

```text
authoring/components/{component-id}.brief.yaml
```

---

### Step 4：人类补充判断性内容

人类主要补充以下内容：

```yaml
purpose:
usedIn:
humanRules:
riskWarnings:
allowedZones:
forbiddenZones:
requiredPairings:
forbiddenPairings:
examples:
```

这些内容是业务判断、风险边界和设计意图，不应该完全交给 AI 决定。

---

### Step 5：Agent 扩展成正式仓库结构

人类确认 brief 后，Agent 再扩展生成正式文件：

```text
authoring/components/trading-action-button.brief.yaml
        ↓
canon/components/trading-action-button.meta.yaml
canon/checklists/trading-action-button-review.yaml
bindings/figma/components.yaml
docs/generated/components/trading-action-button.md
```

其中：

- `authoring/`：人类维护的简化输入
- `canon/`：Agent 扩展后的权威结构
- `bindings/`：Figma / assets / code 映射
- `checklists/`：可执行审核规则
- `docs/generated/`：自动生成的人类可读文档

---

### Step 6：Agent 校验

Agent 应检查：

- YAML / JSON 是否能解析
- 必填字段是否缺失
- Figma binding 是否待确认
- component key 是否存在
- variant property 是否真实
- text override target 是否真实
- 是否缺少状态
- 是否缺少 checklist
- 是否误把高风险组件当普通组件
- 是否出现在 forbidden zone
- 是否违反 token / theme / layout 规则

---

### Step 7：Git 协作

多人协作时，不建议大家都直接改复杂底层结构。

推荐每个人开独立分支：

```text
feature/button-brief
feature/trading-action-button-brief
feature/tag-brief
feature/bottom-bar-binding
```

每个 PR 尽量只处理：

- 一个组件
- 一个页面场景
- 一组 token
- 一个 checklist
- 一个 case study

PR 说明建议包含：

```markdown
## 本次新增 / 修改

- 新增组件 brief：`component.trading-action-button`
- 来源 Figma 节点：`24876:176203`

## 人类定义内容

- purpose
- humanRules
- riskWarnings
- usedIn
- allowedZones / forbiddenZones

## Agent 自动补齐内容

- observedStructure
- slots
- checklist draft
- figma binding draft
- generated docs

## 待确认

- componentKey
- variant property 是否完整
- 是否存在更多状态
- 是否已绑定 token
```

---

## 5. 单组件 Brief 推荐框架

下面是推荐的完整组件 brief 框架。

```yaml
# ============================================================
# 01_HUMAN_REQUIRED
# 人工必填区
# 这一段必须由规范制定人、设计师或 PM 填写 / 审核。
# Agent 可以辅助润色，但不能作为最终决策来源。
# ============================================================

id: component.example
name: 组件中文名
owner: design-system
status: draft

# [HUMAN REQUIRED]
# 说明这个组件为什么存在、解决什么问题、和其他组件有什么区别。
purpose: >
  TODO_HUMAN_CONFIRM

# [HUMAN REQUIRED]
# 说明这个组件适合出现在哪些业务场景。
usedIn:
  - TODO_HUMAN_CONFIRM

# [HUMAN REQUIRED]
# 人类定义推荐用法和禁止用法。
humanRules:
  do:
    - TODO_HUMAN_CONFIRM
  dont:
    - TODO_HUMAN_CONFIRM

# [HUMAN REQUIRED]
# 高风险边界，例如交易、删除、撤单、确认、合规等。
riskWarnings:
  - TODO_HUMAN_CONFIRM

# [HUMAN REQUIRED]
# 允许出现的页面区域。
allowedZones:
  - TODO_HUMAN_CONFIRM

# [HUMAN REQUIRED]
# 禁止出现的页面区域。
forbiddenZones:
  - TODO_HUMAN_CONFIRM

# [HUMAN REQUIRED]
# 该组件出现时必须配套的上下文。
requiredPairings:
  - TODO_HUMAN_CONFIRM

# [HUMAN REQUIRED]
# 该组件不能和哪些模块 / 场景组合。
forbiddenPairings:
  - TODO_HUMAN_CONFIRM

# [HUMAN REQUIRED]
# 好例、坏例、待评审例。
examples:
  good:
    - figmaNodeId: TODO_HUMAN_CONFIRM
      reason: TODO_HUMAN_CONFIRM
  bad:
    - reason: TODO_HUMAN_CONFIRM

# ============================================================
# 02_AGENT_EXTRACTED
# Agent 自动读取区
# 这一段由 Agent 从 Figma / 现有仓库读取后填充。
# 人类只需要检查，不建议手写。
# ============================================================

figma:
  fileKey: TODO_AGENT_FILL
  exampleNodeId: TODO_AGENT_FILL
  figmaExactName: TODO_AGENT_FILL
  componentKey: TODO_VERIFY_WITH_FIGMA
  bindingMode: must_use_library_instance
  bindingFailurePolicy: stop_and_recheck
  propertyHints: {}

classification:
  primitiveFamily: TODO_AGENT_FILL
  componentType: TODO_AGENT_FILL
  riskLevel: low | medium | high
  isOrdinaryButton: false
  isTradingAction: false

observedStructure:
  root: {}
  children: []
  typography: {}
  tokens: {}

variants:
  confirmed: []
  candidates: []

states:
  required:
    - default
    - pressed
    - disabled
  optional:
    - loading

slots: {}
textOverrideFields: []
resourceRefs: []

# ============================================================
# 03_AGENT_EXPANSION_AND_CHECKLIST
# Agent 扩展与自查区
# 这一段用于说明 Agent 应该把 brief 扩展到哪些正式文件，
# 以及交付前必须检查什么。
# ============================================================

reviewChecklist:
  - id: TODO_AGENT_FILL
    severity: P0
    question: TODO_AGENT_FILL
    passCriteria: TODO_AGENT_FILL

agentExpansion:
  canonComponent:
    path: canon/components/example.meta.yaml
  checklist:
    path: canon/checklists/example-review.yaml
  figmaBinding:
    path: bindings/figma/components.yaml
  docs:
    path: docs/generated/components/example.md
  assetManifest:
    path: bindings/assets/manifest.yaml
```

---

## 6. 示例：交易行动点按钮 Brief

该示例基于 Figma 文件 `系统控件` 中读取到的节点：

```yaml
fileKey: ctuOoxsuPXdQS1DbpbjRPI
exampleNodeId: "24876:176203"
nodeName: "交易行动点按钮"
property1: 双按钮买卖
```

---

### 6.1 最小人工填写版

```yaml
# ============================================================
# 01_HUMAN_REQUIRED
# 人工必填区
# ============================================================

id: component.trading-action-button
name: 交易行动点按钮
owner: design-system
status: draft

# [HUMAN REQUIRED]
purpose: >
  用于交易相关页面中的买入、卖出、撤单等高权重行动入口。
  它不是普通按钮，涉及资金和交易风险，必须严格控制使用场景和状态。

# [HUMAN REQUIRED]
usedIn:
  - trading-order
  - stock-quote-detail

# [HUMAN REQUIRED]
humanRules:
  do:
    - 交易行动点只用于明确交易行为入口
    - 买入和卖出并列时视觉权重保持一致
    - 高风险操作必须有二次确认
  dont:
    - 不要把买入 / 卖出 / 撤单当成普通按钮处理
    - 不要在 AI 对话中直接放强交易行动按钮
    - 不要在金融列表行内使用大尺寸交易行动点

# [HUMAN REQUIRED]
riskWarnings:
  - 涉及交易行为，必须避免误触
  - 撤单、删除、取消委托必须二次确认
  - 缺少交易上下文时禁止使用

# [HUMAN REQUIRED]
examples:
  good:
    - figmaNodeId: "24876:176203"

# ============================================================
# 02_AGENT_EXTRACTED
# Agent 自动读取区
# ============================================================

figma:
  fileKey: ctuOoxsuPXdQS1DbpbjRPI
  exampleNodeId: "24876:176203"
  figmaExactName: "交易行动点按钮"
  componentKey: TODO_VERIFY_WITH_FIGMA
  propertyHints:
    property1:
      - 双按钮买卖

variants:
  confirmed:
    - paired-buy-sell
  candidates:
    - single-buy
    - single-sell
    - cancel-order
```

---

### 6.2 Agent 读取到的结构信息

```yaml
# ============================================================
# 02_AGENT_EXTRACTED
# Agent 自动读取区
# ============================================================

observedStructure:
  root:
    nodeId: "21418:69004"
    layout: horizontal
    gap: 10
    width: 354
    height: 42

  children:
    - id: buy
      nodeId: "21418:69005"
      name: 买入
      width: 172
      height: 42
      label: 买入

    - id: sell
      nodeId: "21418:69006"
      name: 卖出
      width: 172
      height: 42
      label: 卖出

  typography:
    fontFamily: PingFang SC
    fontWeight: Medium
    fontSize: 16
    lineHeight: 28
    letterSpacing: 2
    textAlign: center

  textColor:
    token: "--xzl-color-special"
    fallback: "#FFFFFF"
```

---

### 6.3 完整参考版

```yaml
# ============================================================
# 01_HUMAN_REQUIRED
# 人工必填区
# ============================================================

id: component.trading-action-button
name: 交易行动点按钮
owner: design-system
status: draft

# [HUMAN REQUIRED]
purpose: >
  用于交易相关页面中的高权重行动入口，承载买入、卖出、撤单等强操作。
  该组件不是普通按钮，而是金融交易行为的行动点，需要严格控制使用场景、
  视觉权重、文案和风险提示，避免误触或误导用户。

# [HUMAN REQUIRED]
usedIn:
  - trading-order
  - stock-quote-detail
  - holdings
  - order-cancel-flow

# [HUMAN REQUIRED]
humanRules:
  do:
    - 交易行动点只用于明确的交易行为入口。
    - 买入和卖出并列时，两者视觉权重应保持一致。
    - 禁用状态必须清楚表达不可操作原因。
    - 高风险操作必须配合二次确认或风险提示。
    - 在个股详情或交易页中使用时，应靠近交易上下文。

  dont:
    - 不要把买入 / 卖出 / 撤单当成普通按钮处理。
    - 不要在 AI 对话中直接给出强交易行动按钮。
    - 不要在行情总览页中把交易按钮作为主要内容。
    - 不要在金融列表行内使用大尺寸交易行动点。
    - 不要让多个交易行动点同时竞争主视觉。

# [HUMAN REQUIRED]
riskWarnings:
  - id: trading-action-high-risk
    severity: P0
    rule: >
      交易行动点涉及资金和交易决策，必须避免误触、误导和错误状态。

  - id: destructive-or-cancel-action
    severity: P0
    rule: >
      撤单、删除、取消委托等操作必须配套二次确认，不允许只依赖按钮颜色表达风险。

  - id: ai-chat-trading-action
    severity: P1
    rule: >
      AI 对话场景中不应直接出现买入 / 卖出强行动点，除非产品明确设计了合规交易流程。

# [HUMAN REQUIRED]
allowedZones:
  - stock_quote_bottom_action
  - trading_order_footer
  - order_entry_action_area

# [HUMAN REQUIRED]
forbiddenZones:
  - market_overview_primary_body
  - watchlist_row_inline
  - ai_chat_message_body
  - generic_card_action_area

# [HUMAN REQUIRED]
requiredPairings:
  - trading-context
  - selected-security
  - account-state-check
  - risk-check-when-needed

# [HUMAN REQUIRED]
forbiddenPairings:
  - decorative-ai-card
  - generic-dashboard-card
  - marketing-hero-section
  - tag-wall

# [HUMAN REQUIRED]
examples:
  good:
    - figmaNodeId: "24876:176203"
      name: 交易行动点按钮 / 双按钮买卖
      usage: 个股或交易相关上下文中的买卖操作入口

  needsReview:
    - name: 行情总览页中的买卖按钮
      reason: 可能抢占市场扫描内容，不建议作为主内容

  bad:
    - name: AI 对话气泡内直接出现买入按钮
      reason: 缺少交易上下文和合规确认流程

# ============================================================
# 02_AGENT_EXTRACTED
# Agent 自动读取区
# ============================================================

figma:
  fileName: 系统控件
  fileKey: ctuOoxsuPXdQS1DbpbjRPI
  exampleNodeId: "24876:176203"
  exampleNodeName: "交易行动点按钮"
  componentKey: TODO_VERIFY_WITH_FIGMA
  figmaExactName: "交易行动点按钮"
  bindingMode: must_use_library_instance
  bindingFailurePolicy: stop_and_recheck
  propertyHints:
    property1:
      - 双按钮买卖

classification:
  primitiveFamily: trading_action
  componentType: action
  riskLevel: high
  isOrdinaryButton: false
  isTradingAction: true

observedStructure:
  root:
    nodeId: "21418:69004"
    layout: horizontal
    gap: 10
    width: 354
    height: 42

  children:
    - id: buy
      nodeId: "21418:69005"
      name: 买入
      width: 172
      height: 42
      label: 买入

    - id: sell
      nodeId: "21418:69006"
      name: 卖出
      width: 172
      height: 42
      label: 卖出

  typography:
    fontFamily: PingFang SC
    fontWeight: Medium
    fontSize: 16
    lineHeight: 28
    letterSpacing: 2
    textAlign: center

  textColor:
    token: "--xzl-color-special"
    fallback: "#FFFFFF"

variants:
  - id: paired-buy-sell
    name: 双按钮买卖
    figmaProperty:
      property1: 双按钮买卖
    description: 同时展示买入和卖出两个行动入口。
    recommendedIn:
      - stock-quote-detail
      - trading-order

  - id: single-buy
    name: 单按钮买入
    status: candidate
    description: 仅展示买入行动。
    note: 需要确认 Figma 是否存在该变体。

  - id: single-sell
    name: 单按钮卖出
    status: candidate
    description: 仅展示卖出行动。
    note: 需要确认 Figma 是否存在该变体。

  - id: cancel-order
    name: 撤单
    status: candidate
    description: 用于撤销委托。
    riskLevel: high
    note: 必须二次确认。

states:
  - id: default
    name: 默认
    required: true

  - id: pressed
    name: 按下
    required: true

  - id: disabled
    name: 禁用
    required: true
    humanRule: >
      当交易条件不满足时必须进入 disabled 状态，例如未选择标的、
      价格为空、数量为空、账户不可交易、风险测评未完成等。

  - id: loading
    name: 加载中
    required: false
    humanRule: >
      提交交易请求后可以进入 loading 状态，但不能隐藏交易结果反馈。

slots:
  root:
    description: 横向容器，承载一个或多个交易行动按钮。
    layout: horizontal
    gap: 10

  actionButton:
    description: 单个行动按钮。
    allowedChildren:
      - label
      - backgroundAsset

  label:
    description: 按钮文案。
    editable: true
    defaultValues:
      - 买入
      - 卖出

tokens:
  text:
    color: "{xzl.color.text.onPrimary}"
    cssVariable: "--xzl-color-special"

  typography:
    fontFamily: PingFang SC
    fontWeight: 500
    fontSize: 16
    lineHeight: 28
    letterSpacing: 2

  layout:
    height: 42
    pairedButtonWidth: 172
    gap: 10

# ============================================================
# 03_AGENT_EXPANSION_AND_CHECKLIST
# Agent 扩展与自查区
# ============================================================

reviewChecklist:
  - id: trading-action-not-ordinary-button
    severity: P0
    question: 是否错误地把交易行动点当成普通按钮？
    passCriteria: 必须归类为 trading_action，而不是 ordinary button。

  - id: trading-context-present
    severity: P0
    question: 是否存在明确交易上下文？
    passCriteria: 页面中能看到标的、交易方向或交易表单上下文。

  - id: high-risk-state-covered
    severity: P0
    question: 高风险操作是否有确认机制？
    passCriteria: 撤单、删除、取消委托等操作必须有二次确认。

  - id: disabled-state-clear
    severity: P1
    question: 禁用状态是否清晰？
    passCriteria: 禁用时不能只变灰，最好能说明原因或由上下文解释。

  - id: text-not-clipped
    severity: P1
    question: 按钮文案是否被裁切？
    passCriteria: 买入、卖出、撤单等文案完整显示。

  - id: figma-binding-verified
    severity: P1
    question: 是否使用真实 Figma 组件实例？
    passCriteria: component key、variant property 和 text override target 已确认。

agentExpansion:
  canonComponent:
    path: canon/components/trading-action-button.meta.yaml

  checklist:
    path: canon/checklists/trading-action-button-review.yaml

  figmaBinding:
    path: bindings/figma/components.yaml

  docs:
    path: docs/generated/components/trading-action-button.md

  assetManifest:
    path: bindings/assets/manifest.yaml
```

---

## 7. 普通按钮与交易按钮的区别

建议不要把所有按钮都归为 `component.button`。

应拆成：

```text
component.button
普通按钮：低风险，适合普通 action

component.trading-action-button
交易行动点：高风险，适合买入 / 卖出 / 撤单
```

区别如下：

| 类型 | 风险 | 用途 | 是否可由 Agent 自动决定 |
|---|---|---|---|
| 普通按钮 | 低 / 中 | 查看、确认、提交、跳转 | 可辅助决定 |
| 交易行动点按钮 | 高 | 买入、卖出、撤单 | 必须人类定义边界 |
| destructive 按钮 | 高 | 删除、取消、撤销 | 必须人类定义边界 |
| ghost / link 按钮 | 低 | 辅助入口 | 可辅助决定 |

---

## 8. 交互设计自查 Checklist

这个 checklist 用于人类填写 brief 后自查，也可以用于 Agent 评审。

### 8.1 基础信息

- [ ] 组件 `id` 是否稳定、唯一？
- [ ] 组件中文名是否和团队常用叫法一致？
- [ ] `status` 是否明确？
- [ ] `owner` 是否明确？
- [ ] Figma 来源是否记录了 `fileKey` 和 `nodeId`？

### 8.2 组件目的

- [ ] 是否说明了这个组件为什么存在？
- [ ] 是否说明了它解决什么问题？
- [ ] 是否说明了它和相似组件的区别？
- [ ] 是否说明了它是否涉及高风险操作？

### 8.3 使用场景

- [ ] 是否列出推荐使用场景？
- [ ] 是否列出不推荐或禁止使用场景？
- [ ] 是否定义 allowed zones？
- [ ] 是否定义 forbidden zones？
- [ ] 是否定义 required pairings？
- [ ] 是否定义 forbidden pairings？

### 8.4 状态和变体

- [ ] 是否列出已确认 variants？
- [ ] 是否把未确认 variants 标记为 `candidate`？
- [ ] 是否包含 `default` 状态？
- [ ] 是否包含 `pressed` 状态？
- [ ] 是否包含 `disabled` 状态？
- [ ] 如果组件涉及提交或交易，是否考虑 `loading` 状态？
- [ ] 如果组件涉及风险，是否考虑确认态或风险提示态？

### 8.5 文案和内容

- [ ] 是否说明哪些文案可以覆盖？
- [ ] 是否说明文案最长长度？
- [ ] 是否检查文案不会裁切？
- [ ] 是否避免用按钮文案承载过长解释？

### 8.6 风险控制

- [ ] 是否定义高风险场景？
- [ ] 是否定义必须二次确认的操作？
- [ ] 是否说明禁用状态的触发条件？
- [ ] 是否避免把高风险组件当普通组件使用？
- [ ] 是否避免在 AI 对话中直接出现交易强行动点？

### 8.7 Figma 绑定

- [ ] 是否记录 `componentKey`？
- [ ] 是否记录 `figmaExactName`？
- [ ] 是否记录 variant property？
- [ ] 是否记录 text override target？
- [ ] 如果 component key 未确认，是否写了 `TODO_VERIFY_WITH_FIGMA`？
- [ ] 是否声明找不到绑定时 `stop_and_recheck`？

### 8.8 Token 和视觉

- [ ] 是否使用 token，而不是 raw color？
- [ ] 是否支持 light / dark？
- [ ] 是否记录 typography？
- [ ] 是否记录尺寸、间距、圆角？
- [ ] 如果是 asset-backed 组件，是否说明不要手绘替代？

### 8.9 示例

- [ ] 是否有 good example？
- [ ] 是否有 bad example？
- [ ] 是否有 needsReview example？
- [ ] 示例是否包含 Figma node id 或截图路径？

### 8.10 Agent 扩展

- [ ] 是否声明要生成的 `canon/components/*.meta.yaml`？
- [ ] 是否声明要生成的 checklist？
- [ ] 是否声明要更新的 Figma binding？
- [ ] 是否声明要生成的 docs？
- [ ] 是否声明要更新 asset manifest？

---

## 9. 建议落地方式

### 第一阶段

先做 3 个组件 brief：

```text
authoring/components/button.brief.yaml
authoring/components/trading-action-button.brief.yaml
authoring/components/tag.brief.yaml
```

### 第二阶段

让 Agent 扩展生成：

```text
canon/components/*.meta.yaml
canon/checklists/*-review.yaml
bindings/figma/components.yaml
docs/generated/components/*.md
```

### 第三阶段

接入 Git PR 流程：

```text
人类改 authoring brief
Agent 扩展结构
Agent 校验
提交 PR
设计系统负责人 review
合并 main
```

---

## 10. 最重要的协作原则

```text
人类写判断
Agent 写结构
Figma 给事实
Git 做审查
Checklist 做治理
```

也可以压缩成一句话：

> 人负责定义组件的目的、场景、禁区和风险；Agent 负责读取 Figma、补齐字段、生成结构、同步文件和校验规则。

