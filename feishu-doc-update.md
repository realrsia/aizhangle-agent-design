# Zhangle Agent Design System 文件结构说明

> 本文帮助团队成员理解 `zhangle-agent-design-system` 的当前文件结构，以及人、Agent、Figma、Git 应该如何在这套结构里协作。

## 历史记录

本次更新前的原文档已备份为独立历史文档（含 2026-06-05 和 2026-06-09 两个版本）：

- [历史记录｜文件结构说明｜2026-06-05 更新前](https://y0htr35pce.feishu.cn/wiki/VQWlwbbATiQoFSkNx8sc77wjncf)
- [历史记录｜文件结构说明｜2026-06-09 更新前](https://y0htr35pce.feishu.cn/wiki/UFjjdvk5woNIshxHATkcA8lynRg)

本次 2026-06-10 更新主要反映：清理 sources/ 目录、移除 fusion-files 冗余资产、移除 sync-openai-checklist-map.rb 脚本、新增 chat-input 和 message-feed 组件、更新 manifest.json 和 SKILL.md 中的组件绑定路由规则。

## 一句话说明

`zhangle-agent-design-system` 是一个面向 Agent 可读、可生成、可审核的设计规范底层仓库。它把人的设计判断、Figma 资源、本地素材、组件规范、页面规范和审核规则拆成不同层级，让团队可以通过 Git 协作，也让 Agent 能按固定路径读取、扩展和校验。

## 当前结构快照

当前仓库顶层结构是：

```
zhangle-agent-design-system/
  .github/
  agents/
  authoring/
  bindings/
  canon/
  docs/
  renderers/
  schemas/
  tests/
  tools/
  AGENTS.md
  DESIGN.md
  README.md
  SKILL.md
  llms.txt
  manifest.json
```

这份结构以 `manifest.json` 和 `SKILL.md` 为机器入口，以 `AGENTS.md`、`README.md`、`DESIGN.md` 和 `docs/references/` 为人类说明入口。

## 总体分层

| 层级 | 对应路径 | 主要用途 | 谁主要维护 |
|------|----------|----------|------------|
| 入口与路由层 | `manifest.json`、`SKILL.md`、`AGENTS.md`、`README.md`、`llms.txt` | 告诉 Agent 和团队应该从哪里开始读 | Agent 维护，人工审核 |
| 视觉与审美入口 | `DESIGN.md`、`docs/references/foundations/visual-language.md`、`docs/references/process/` | 承载视觉生成、审美判断、设计复盘和反模式检查 | 设计负责人 + Agent |
| 人类输入层 | `authoring/` | 人用简单 Brief 定义组件、场景和案例意图 | 设计师、产品、研究同学 |
| 结构契约层 | `schemas/` | 定义机器可读文件必须长什么样 | Agent 维护，工程/设计审核 |
| 规范真相源 | `canon/` | 存放 token、主题、组件、页面骨架、业务场景和审核规则 | 人和 Agent 共同维护 |
| 资源绑定层 | `bindings/` | 连接 Figma 文件、变量、组件和本地素材 | Agent 整理，设计师确认 |
| 原型渲染层 | `renderers/` | 定义 H5/HTML 低保真原型如何表达组件和页面 | Agent 维护，团队验证 |
| 人类说明层 | `docs/` | 放背景解释、流程、案例、参考资料和生成索引 | 人和 Agent 共同维护 |
| 验证与工具层 | `tests/`、`tools/` | 放校验脚本、回归测试和自动化工具 | Agent 或工程同学维护 |

注意：当前生成索引放在 `docs/generated/`，不是仓库根目录的 `generated/`。需要改规则时应回到 `authoring/` 或 `canon/`，不要把生成结果当作人工真相源。

## 关键入口文件

### `manifest.json`

机器可读的仓库索引。Agent 可以先读它，快速知道有哪些入口、Schema、Canon 文件、绑定文件、渲染器和生成索引。

适合用于自动化：扫描仓库、构建索引、生成文档、检查缺失路径。

当前 bindings 部分已新增 `figmaFiles` 和 `figmaVariables` 两个路径，Agent 生成 Figma 页面时应一并读取。

### `SKILL.md`

Agent 的主路由文件。它告诉 Agent 在不同任务下应该加载哪些文件，例如组件生成、组件 Brief 扩展、页面场景生成、视觉审核、Figma 绑定查询、H5 低保真原型和 token 查询。

`SKILL.md` 是路由说明，不是设计规则本身。真正的规则要回到 `canon/`、`bindings/`、`authoring/` 和 `docs/references/`。

本次更新新增了关键约束：判定组件是否可绑定前，必须先读取 `bindings/figma/components.yaml`；`componentKey: not_a_component_instance` 只表示外层容器不是可 import 的组件，不代表子 family 不可用。

### `AGENTS.md`

仓库级 Agent 行为规则。它强调 schema-first、source of truth、编辑边界、人类拥有字段和协作流程。

Agent 处理这个仓库时，应优先遵守这里的读文件顺序和编辑规则。

### `DESIGN.md`

视觉生成和审美审核入口。凡是涉及页面生成、视觉复盘、审美方向、层级、密度、氛围、设计感或 polish 的任务，都应该加载它。

### `.github/PULL_REQUEST_TEMPLATE.md`

团队提交 PR 时的自检模板。它配合 PR 审核文档使用，帮助提交人说明人工判断、Agent 扩展、验证结果和待确认事项。

## 主要目录说明

### `authoring/`

这是人最应该优先编辑的地方。它用更简单的 Brief 文件承载人的判断。

当前包含：

- `authoring/components/`：组件 Brief。当前已有 20 个组件 Brief，包括 action-sheet、bottom-bar、button、card、chat-background、chat-input、chat-topbar、divider、input、market-index-modules、message-feed、overlay、page-background、switch、tabs、tag、trading-action-button、trading-input、trading-page-modules 等。
- `authoring/scenarios/`：业务场景 Brief，包括 ai-chat、trading、market-index、bottom-bar 系列场景等。
- `authoring/case-studies/`：案例、问题、历史 bug 和审核证据。
- `authoring/README.md`：人如何写 Brief、Agent 如何扩展的说明。

建议协作方式：人先写 Brief，再让 Agent 根据 Brief 扩展到 `canon/`、`bindings/`、`canon/checklists/` 和 `docs/generated/`。

### `schemas/`

这里定义规范文件的格式。它的作用是让 Agent 生成的 YAML/JSON 不随意生长。

当前重点包括：

- `component-brief.schema.yaml`
- `component-meta.schema.yaml`
- `checklist.schema.yaml`
- `component.schema.json`
- `checklist.schema.json`
- `resource.schema.json`
- `index.yaml`

如果团队后续发现每个人写法不同，应该优先把共同字段沉淀到 Schema，而不是只靠口头约定。

### `canon/`

这是最重要的一层。`canon` 表示规范真相源。

当前包含：

- `canon/foundations/tokens/`：颜色、字体、圆角等 token。
- `canon/foundations/themes/`：明暗主题映射。
- `canon/foundations/semantics/`：金融语义，比如涨跌颜色含义。
- `canon/components/`：组件规范，当前已有 21 个组件 meta 文件，包括 action-sheet、bottom-bar、button、card、chat-background、chat-input、chat-topbar、divider、input、market-index-modules、message-feed、overlay、page-background、switch、tabs、tag、trading-action-button、trading-input、trading-page-modules 等，以及 component-semantics.yaml 和 index.yaml。
- `canon/archetypes/`：页面骨架，包括 mobile-list-page、mobile-chat-page、market-overview-page 和 fusion screen recipes。
- `canon/scenarios/`：业务场景，当前包括 ai-chat 和 watchlist。
- `canon/checklists/`：可执行的审核规则，包含各组件级审核文件和 figma-generation-review.yaml 全局审核。

原则：如果一个规则会影响生成、审核或修复结果，它应该进入 `canon/`，而不是只停留在长篇说明文档中。

### `bindings/`

这是资源连接层。它不负责定义规则，而是负责告诉 Agent 到哪里找资源。

当前包含：

- `bindings/figma/`：Figma 文件、变量、组件和关键绑定。核心文件包括 `components.yaml`（组件绑定状态）、`components.source.yaml`（绑定源数据）、`critical-bindings.yaml`（强绑定要求）、`files.yaml`（Figma 文件索引）、`variables.yaml`（变量绑定）。
- `bindings/assets/manifest.yaml`：本地资产索引。
- `bindings/assets/files/`：本地资产，包含 bottom-bar、design-tokens、fonts、icons、page-shells、product-lines、templates 等子目录。

重要原则：维护中的 Figma 组件以 Figma component ID 为主。本地 PNG、SVG、字体、JSON 模板可以作为离线参考、原型 fallback 和视觉证据，但不能默认等同于真实 Figma 组件。

### `renderers/`

这里用于低保真 H5/HTML 原型生成。

当前重点路径：

- `renderers/html/component-renderers.yaml`
- `renderers/html/page-renderers.yaml`

它的定位不是还原完整 Figma 视觉，而是让 Agent 能把 canonical 组件、页面骨架和场景规则转成可运行的低保真结构，用于快速验证信息架构、布局逻辑和交互范围。

### `docs/`

这里是人类阅读层，放解释、流程、参考和案例。

当前重点包括：

- `docs/references/component-brief-workflow.md`
- `docs/references/git-collaboration.md`
- `docs/references/pr-review-prompt.md`
- `docs/references/figma-binding-policy.md`
- `docs/references/source-boundaries.md`
- `docs/references/visual-audit-chain.md`
- `docs/references/anti-patterns.md`
- `docs/generated/components/index.md`

`docs/generated/` 是由 canonical 数据派生出来的人类可读索引，不应该作为人工编辑真相源。

### `tests/` 与 `tools/`

这里用于后续沉淀校验脚本、回归检查和自动化工具。

当前如果需要验证 YAML/JSON，优先对相关文件做解析检查；复杂校验可以逐步沉淀到 `tools/`。

### Figma 二次验证结构

> 2026-06-05 到 2026-06-06 已在仓库中补上 Figma 生成后的二次验证结构。它不是单独自动跑的 CI，而是 Agent 在交付 Figma 生成结果前必须执行的第二遍检查门禁。

| 结构位置 | 作用 | 当前关键文件 |
|----------|------|-------------|
| `manifest.json` | 把 Figma 生成检查表登记为 canonical checklist 入口。 | `canonical.figmaGenerationChecklist` |
| `SKILL.md` | 要求 Agent 在 Figma screen generation 时一定加载并运行二次验证清单。 | `canon/checklists/figma-generation-review.yaml` |
| `DESIGN.md` | 把二次验证接到视觉生成路线中，位于普通组件和视觉审核之后。 | Visual Generation Route 第 6 步 |
| `canon/checklists/` | 保存真正可执行的二次验证规则。 | `figma-generation-review.yaml` |

当前运行顺序：

1. 先按 `SKILL.md` 和 `manifest.json` 判断任务类型，确认是否属于 Figma 页面生成或修复。
2. 读取 `DESIGN.md`、相关 `authoring/`、`canon/`、`bindings/figma/` 和普通组件检查表。**必须读取 `bindings/figma/components.yaml` 判断组件绑定状态。**
3. 生成前列出页面需要的 component families，并对 confirmed component 做 import 或 instantiate probe。
4. 生成后输出 component coverage report 和 source evidence，说明哪些组件已使用、哪些 pending、哪些 blocked。
5. 运行 `canon/checklists/figma-generation-review.yaml` 做第二遍检查。
6. 凡是 error 级失败，都必须先修复，再重新检查 metadata 和 screenshot，不能只写说明后交付。

| 二次验证重点 | 通过标准 |
|-------------|----------|
| 组件覆盖 | required / confirmed / partial / pending / used / blocker 必须说清楚。 |
| 组件来源证据 | confirmed component 必须能追溯到 componentKey、source nodeId 或同源真实实例。 |
| 禁止伪组件 | 不能把旧生成稿 clone 或 raw frame/text lookalike 当成真实组件使用。 |
| Fallback 边界 | 缺 binding 时只能做明确标注的低保真 fallback，图层名包含未绑定组件或 binding pending。 |
| Partial component | 已验证子组件必须优先使用，只对缺失的最小部分 fallback。 |
| 固定 chrome | Status Bar、Top Bar、Bottom Bar、Chat Input、Action Sheet 等固定区域不能混进滚动内容。 |
| Auto Layout 和裁切 | screen、module、card、row、文字容器和 instance wrapper 必须可编辑且不裁切内部组件。 |
| 内容和主题 | 不能留占位文案、raw TODO、错主题组件或硬编码颜色冒充 token 合规。 |
| 最终验证 | 必须重新检查 Figma metadata 和 screenshot rendering，失败项变成修复项。 |

> 当前注意点：agents/openai.yaml 中的 interface.checklist_system 已在 2026-06-08 清理中移除，同步脚本 tools/sync-openai-checklist-map.rb 也已删除。figma-generation-review.yaml 本身仍保留之前同步好的规则映射，可直接作为审核依据。后续如需修改 prompt 中的审核规则，应直接编辑 figma-generation-review.yaml。

## 人和 Agent 的推荐协作方式

### 新增或修改一个组件

1. 人在 `authoring/components/` 写或改组件 Brief。
2. Agent 读取 `authoring/components/index.yaml`、目标 brief、Schema 和组件工作流说明。
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

1. Agent 先读 `manifest.json` 和 `SKILL.md` 判断任务类型。
2. Agent 读取相关 `canon/` 文件，明确期望规则。
3. Agent 读取 `bindings/`，确认资源来源和 Figma 绑定强度。
4. Agent 执行对应 `canon/checklists/`。
5. 输出审核结果：问题位置、违反规则、影响、修复建议、引用来源。

## 推荐阅读顺序

1. 本文：先理解仓库结构。
2. [组件 Brief 工作流与格式框架](https://y0htr35pce.feishu.cn/wiki/OpqrwSTt7iu5t7kglN1c3aaAndX)：理解人如何写组件 Brief。
3. [设计规范仓库 Git 协作流程与工作方式](https://y0htr35pce.feishu.cn/wiki/Pk7jwMkXFiSDChkMgS0ccfIhnKc)：理解多人如何开分支、提交和合并。
4. [PR 审核流程与 AI 辅助检查](https://y0htr35pce.feishu.cn/wiki/Xx7Ww87TWibyKPkKv1tcRtl0nrW)：理解每次提交如何自检、AI 审核和人工审核。

## 当前阶段重点

当前仓库已经完成了第一阶段的统一骨架：

- 有 Agent 入口：`manifest.json`、`SKILL.md`、`AGENTS.md`、`llms.txt`。
- 有视觉入口：`DESIGN.md`。
- 有人类输入层：`authoring/`，当前已有 20 个组件 Brief 和 10+ 个场景 Brief。
- 有规范真相源：`canon/`，包含 21 个组件 meta 文件、多个 archetype 和 scenario。
- 有 Figma 和本地资源绑定：`bindings/`，包含 figma 组件绑定、文件索引和变量绑定。
- 有低保真渲染入口：`renderers/html/`。
- 有协作与审核参考文档：`docs/references/`。

下一阶段建议优先做三件事：

1. 先把常用组件的 Brief 补齐，而不是一开始就扩展所有复杂字段。
2. 让 Agent 把 Brief 自动扩展为 `canon/components/`、`bindings/figma/` 和 checklist。
3. 用 1 到 2 个真实页面场景验证整条链路，比如自选列表页或 AI 聊天页。

## 结论

这套仓库的核心不是文件多，而是把职责拆清楚：

- 人负责判断和意图。
- Agent 负责扩展和结构化。
- Figma 负责真实设计资源。
- Canon 负责规则真相。
- Checklist 负责交付前审核。
- Git 和 PR 负责多人协作。

这样团队后续可以从简单 Brief 开始工作，再让 Agent 自动补齐必要结构，既降低人工维护成本，也避免多人各写各的、格式继续分裂。
