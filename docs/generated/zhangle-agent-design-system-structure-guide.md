# Zhangle Agent Design System 文件结构说明

本文用于帮助团队理解 `zhangle-agent-design-system` 的仓库结构，以及人和 Agent 应该如何在这套结构里协作。

## 一句话说明

`zhangle-agent-design-system` 是一个面向 Agent 可读、可生成、可审核的设计规范底层仓库。它把人的设计判断、Figma 资源、本地素材、组件规范、页面规范和审核规则拆成不同层级，让团队可以用 Git 协作，让 Agent 可以按固定路径读取和扩展。

## 这套结构解决什么问题

当前团队有三类材料需要统一：

1. Figma 连接型材料：通过 Figma 文件、变量、组件和节点 ID，让 Agent 能找到真实设计资源。
2. 本地资产型材料：通过图片、字体、模板、示例和属性文件，让 Agent 能离线理解样式和生成低保真原型。
3. 规范判断型材料：通过组件、页面、业务场景、审核清单，让 Agent 知道什么是对的、什么不能做。

这个仓库的目标不是把所有内容堆在一个说明文档里，而是把材料分层存放：

- 人写简单 Brief。
- Agent 扩展成规范化结构。
- Figma 和本地素材只作为绑定资源。
- Canon 文件承载真正的设计规则。
- Checklist 负责最后审核。

## 总体分层

| 层级 | 对应路径 | 主要用途 | 谁主要维护 |
| --- | --- | --- | --- |
| 入口与路由层 | `SKILL.md`、`manifest.json`、`README.md`、`llms.txt` | 告诉 Agent 和团队应该从哪里开始读 | Agent 维护，人工审核 |
| 人类输入层 | `authoring/` | 人用简单格式定义组件、场景和案例意图 | 设计师、产品、研究同学 |
| 结构契约层 | `schemas/` | 定义机器可读文件必须长什么样 | Agent 维护，工程/设计审核 |
| 规范真相源 | `canon/` | 存放 token、主题、组件、页面、场景、审核规则 | 人和 Agent 共同维护 |
| 资源绑定层 | `bindings/` | 连接 Figma 文件、变量、组件和本地素材 | Agent 整理，设计师确认 |
| 原型渲染层 | `renderers/` | 定义 H5/HTML 低保真原型如何表达组件和页面 | Agent 维护，团队验证 |
| 人类说明层 | `docs/` | 放背景解释、流程、案例、参考资料和生成说明 | 人和 Agent 共同维护 |
| 派生产物层 | `generated/` | 放由规范生成出来的 CSS、JSON、索引等 | Agent 生成，不作为人工真相源 |
| 溯源层 | `sources/` | 记录材料来自哪个旧仓库或分支 | Agent 维护 |
| 验证与工具层 | `tests/`、`tools/` | 后续放校验脚本、导入导出脚本、回归测试 | Agent 或工程同学维护 |

## 关键路径说明

### `SKILL.md`

这是 Agent 的主入口。它负责告诉 Agent：不同任务要加载哪些文件。比如生成组件、审核页面、查 token、查 Figma 绑定、做 HTML 低保真原型时，读取路径是不一样的。

注意：`SKILL.md` 是路由说明，不是设计规则本身。真正的规则要回到 `canon/`、`bindings/` 和 `docs/references/`。

### `manifest.json`

这是机器可读的仓库索引。Agent 可以先读它，快速知道有哪些入口、Schema、Canon 文件、绑定文件和生成文件。

它适合用于自动化：比如让 Agent 扫描仓库、构建索引、生成文档、检查缺失路径。

### `authoring/`

这是人最应该优先编辑的地方。它用更简单的 Brief 文件承载人的判断。

典型内容包括：

- `authoring/components/*.brief.yaml`：组件 Brief。用于描述组件用途、状态、风险、变体、禁用场景。
- `authoring/scenarios/*.brief.yaml`：业务场景 Brief。用于描述页面或业务任务的意图。
- `authoring/case-studies/`：人工记录的案例、问题、历史 bug、审核证据。

建议协作方式：人先写 Brief，再让 Agent 根据 Brief 扩展到 `canon/`、`bindings/`、`docs/` 和 `checklists/`。

### `schemas/`

这里定义规范文件的格式。它的作用是让 Agent 生成的 YAML/JSON 不随意生长。

当前重点包括：

- `component.schema.json`：组件元数据格式。
- `checklist.schema.json`：审核清单格式。
- `resource.schema.json`：资源引用格式。

如果团队后续发现每个人写法不同，应该优先把共同字段沉淀到 Schema，而不是只靠口头约定。

### `canon/`

这是最重要的一层。`canon` 表示规范真相源。

主要内容包括：

- `canon/foundations/tokens/`：颜色、字号、圆角等 token。
- `canon/foundations/themes/`：明暗主题映射。
- `canon/foundations/semantics/`：金融语义，比如涨跌颜色含义。
- `canon/components/`：组件规范，比如按钮、标签、输入框、底部栏等。
- `canon/archetypes/`：页面骨架，比如列表页、聊天页、交易页等。
- `canon/scenarios/`：业务场景，比如自选列表、AI 聊天。
- `canon/checklists/`：可执行的审核规则。

原则：如果一个规则会影响生成、审核或修复结果，它应该进入 `canon/`，而不是只停留在长篇说明文档中。

### `bindings/`

这是资源连接层。它不负责定义规则，而是负责告诉 Agent 到哪里找资源。

主要内容包括：

- `bindings/figma/`：Figma 文件、变量、组件和关键绑定。
- `bindings/assets/`：本地图片、字体、图标、模板、示例和资产清单。
- `bindings/assets/fusion-files/`：阿琨合并版中的本地素材、token、模板和示例。

重要原则：Figma 中维护中的组件，以 Figma component ID 为主。本地 PNG、SVG、字体、JSON 模板可以作为离线参考、原型 fallback 和视觉证据，但不能默认等同于真实 Figma 组件。

### `renderers/`

这里用于低保真 H5/HTML 原型生成。

它的定位不是还原完整 Figma 视觉，而是让 Agent 能把 canonical 组件、页面骨架和场景规则转成可运行的低保真结构，用于快速验证信息架构、布局逻辑和交互范围。

当前重点路径：

- `renderers/html/component-renderers.yaml`
- `renderers/html/page-renderers.yaml`

### `docs/`

这里是人类阅读层，放解释、流程、参考和案例。

重要内容包括：

- `docs/references/authoring-workflow.md`：人和 Agent 如何通过 Brief 协作。
- `docs/references/figma-binding-policy.md`：Figma 绑定强弱规则。
- `docs/references/source-boundaries.md`：不同来源冲突时如何判断优先级。
- `docs/references/visual-audit-chain.md`：设计审核链路。
- `docs/references/anti-patterns.md`：常见错误模式。
- `docs/generated/`：由 Agent 生成的说明文档和信息图。

### `generated/`

这里放由规范生成出来的结果，比如 CSS token、JSON bundle、Markdown 文档和搜索索引。

原则：不要把 `generated/` 当成人工编辑的真相源。要改规则时回到 `authoring/` 或 `canon/`，再重新生成。

### `sources/`

这里记录来源。比如旧版 `zhangle-design-skill` 和阿琨 fusion source 的合并记录。

它的价值是方便团队追溯：某个 token、模板、绑定、审核规则最初来自哪里，后续为什么被迁移到现在的位置。

## 人和 Agent 的推荐协作方式

### 新增或修改一个组件

1. 人在 `authoring/components/` 写或改组件 Brief。
2. Agent 读取 Brief，并参考 `schemas/component.schema.json`。
3. Agent 扩展或更新 `canon/components/` 中的组件规范。
4. Agent 通过 `bindings/figma/` 绑定真实 Figma 组件。
5. Agent 通过 `canon/checklists/` 补充审核项。
6. 团队通过 PR 审核人的判断是否正确。

### 新增或修改一个页面/业务场景

1. 人在 `authoring/scenarios/` 写场景 Brief。
2. Agent 选择或补充 `canon/archetypes/` 页面骨架。
3. Agent 更新 `canon/scenarios/`，把业务意图连接到组件、token 和检查项。
4. Agent 使用 `bindings/` 查找 Figma 或本地素材。
5. 如需原型，Agent 使用 `renderers/html/` 生成低保真输出。
6. 最后按 `canon/checklists/` 进行审核。

### 做设计审核

1. Agent 先读 `SKILL.md` 判断任务类型。
2. Agent 读取相关 `canon/` 文件，明确期望规则。
3. Agent 读取 `bindings/`，确认资源来源和 Figma 绑定强度。
4. Agent 执行 `canon/checklists/`。
5. 输出审核结果：问题位置、违反规则、影响、修复建议、引用来源。

## 协作流程入口

本文只说明仓库结构。多人协作、分支、PR 和合并流程统一看这篇：

[设计规范仓库 Git 协作流程与工作方式](https://y0htr35pce.feishu.cn/wiki/Pk7jwMkXFiSDChkMgS0ccfIhnKc)

## 当前阶段重点

当前仓库已经完成了第一阶段的统一骨架：

- 有 Agent 入口：`SKILL.md`、`manifest.json`、`llms.txt`。
- 有人类输入层：`authoring/`。
- 有规范真相源：`canon/`。
- 有 Figma 和本地资源绑定：`bindings/`。
- 有阿琨 fusion source 的素材、模板、token、绑定和审核规则迁移。
- 有低保真渲染入口：`renderers/html/`。
- 有协作与审核参考文档：`docs/references/`。

下一阶段建议优先做三件事：

1. 先把常用组件的 Brief 补齐，而不是一开始就扩展所有复杂字段。
2. 让 Agent 把 Brief 自动扩展为 `canon/components/`、`bindings/` 和 checklist。
3. 用 1 到 2 个真实页面场景验证整条链路，比如自选列表页或 AI 聊天页。

## 结论

这套仓库的核心不是“文件多”，而是把职责拆清楚：

- 人负责判断和意图。
- Agent 负责扩展和结构化。
- Figma 负责真实设计资源。
- Canon 负责规则真相。
- Checklist 负责交付前审核。
- 协作流程由独立文档统一说明。

这样团队后续可以从简单 Brief 开始工作，再让 Agent 自动补齐必要结构，既降低人工维护成本，也避免三个人各写各的、格式继续分裂。
