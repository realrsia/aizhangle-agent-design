# Authoring 工作流

本目录是人类编辑层。

人类应在这里编写简明的 brief。Agent 根据这些 brief 扩展生成 `canon/`、`bindings/`、`canon/checklists/` 和 `docs/generated/` 中的内容。

核心原则：

> 人类负责判断，Agent 负责结构化，Figma 提供事实，Git 负责变更审查，Checklists 约束交付。

## 人类编辑什么

- `authoring/components/index.yaml`：组件 brief 索引，用于查找当前 brief 文件及其来源引用。
- `authoring/components/*.brief.yaml`：组件意图、使用规则、风险警告、区域、配对关系和示例。
- `authoring/scenarios/*.brief.yaml`：业务场景意图、必需的页面结构、组件需求和禁止模式。

对于组件维护，以最新的 YAML 融合版本作为本层当前真源。每份组件 brief 保持以下三个区域：

- `01_HUMAN_REQUIRED`：用途、场景、规则、风险警告、区域、配对关系、示例和状态。
- `02_AGENT_EXTRACTED`：Figma 事实、观察到的结构、变体、状态、插槽、tokens 和资源引用。
- `03_AGENT_EXPANSION_AND_CHECKLIST`：评审 checklist 和目标输出路径。

未解决的人工决策使用 `TODO_HUMAN_CONFIRM` 标记，尚未验证的 Figma 事实使用 `TODO_VERIFY_WITH_FIGMA` 标记。

## Agent 扩展什么

Agent 可以根据组件 brief 更新：

- `canon/components/*.meta.yaml`
- `canon/checklists/*-review.yaml`
- `bindings/figma/components.yaml`
- 资源引用发生变化时更新 `bindings/assets/manifest.yaml`
- `docs/generated/components/index.md`

Agent 可以根据场景 brief 更新：

- `canon/scenarios/*.yaml`
- `canon/archetypes/*.yaml`
- `canon/checklists/*.yaml`
- `docs/generated/scenarios/*.md`

## 必需的人工评审

以下字段必须由人工评审者确认：

- `purpose`
- `usedIn`
- `humanRules`
- `riskWarnings`
- `allowedZones`
- `forbiddenZones`
- `requiredPairings`
- `forbiddenPairings`
- `examples`
- `status`

Agent 可以起草这些字段，但在人工负责人完成评审之前，内容不能视为最终版本。

## 当前组件 Brief

以 `authoring/components/index.yaml` 作为入口。当前第一批组件包括：

- bottom bar
- button
- card
- divider
- input
- overlay
- switch
- tabs
- tag
- trading action button
- trading input
