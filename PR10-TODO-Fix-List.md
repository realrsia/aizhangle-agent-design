# PR #10 待修复 TODO 清单（14 处）

> **来源：** `authoring/` 文件夹，commit `4ead1fb`
> **TODO 类型：** 全部为 `TODO_VERIFY_WITH_FIGMA`
> **根本原因：** Figma MCP 无法获取 componentKey（需组件面板/Code Connect 权限）

---

## chat-background.brief.yaml（3 处）

### TODO-1: figma.componentKey

- **文件：** `authoring/components/chat-background.brief.yaml` 第 124 行
- **当前值：** `componentKey: TODO_VERIFY_WITH_FIGMA`
- **scope：** component_key
- **原因：** Figma MCP 确认了实例节点 `400:25043` 和主组件节点 `99:41960`，但 Code Connect/component key 在当前环境不可用
- **修复方式：** 打开 Figma → 选中主组件 `99:41960` → 右侧面板获取 componentKey → 填入

### TODO-2: pendingFigmaVerification — component_key

- **文件：** 第 166-171 行
- **scope：** component_key
- **原因：** 同 TODO-1
- **修复方式：** 获取 componentKey 后，将 `status: TODO_VERIFY_WITH_FIGMA` 改为 `status: verified`，补充 `componentKey` 字段

### TODO-3: pendingFigmaVerification — dark_variant

- **文件：** 第 172-176 行
- **scope：** dark_variant
- **原因：** 当前只确认 light 背景节点 `400:25043`；黑版节点和组件 key 需由 Figma 组件面板确认
- **修复方式：** 在 Figma 中找到黑版背景节点 → 记录 nodeId、exactName、componentKey → 填入 `componentFamilies` 中的 `chat-background.ai-chat-dark` 条目

---

## chat-input.brief.yaml（3 处）

### TODO-4: figma.componentKey

- **文件：** `authoring/components/chat-input.brief.yaml` 第 112 行
- **当前值：** `componentKey: TODO_VERIFY_WITH_FIGMA`
- **scope：** component_key
- **原因：** MCP 确认了 `400:25177`（full composer）和 `400:29333`（simple voice）实例，但 componentKey 需组件面板权限
- **修复方式：** 打开 Figma → 选中母组件 → 获取 componentKey → 填入

### TODO-5: pendingFigmaVerification — component_keys

- **文件：** 第 215-220 行
- **scope：** component_key
- **原因：** 同 TODO-4
- **修复方式：** 获取 componentKey/mainComponentKey/fullComposerComponentKey/simpleVoiceComposerComponentKey 后标记 verified

### TODO-6: pendingFigmaVerification — variants

- **文件：** 第 221-225 行
- **scope：** variants
- **原因：** 当前只确认白版 full composer 和 simple voice；黑版、键盘、打断、关联问展开状态需继续确认
- **修复方式：** 在 Figma 中逐一确认以下变体节点并记录：
  - 黑版 full composer（Dark: "On"）
  - 键盘弹出状态
  - 打断状态
  - 关联问展开状态

---

## chat-topbar.brief.yaml（3 处）

### TODO-7: figma.componentKey

- **文件：** `authoring/components/chat-topbar.brief.yaml` 第 107 行
- **当前值：** `componentKey: TODO_VERIFY_WITH_FIGMA`
- **scope：** component_key
- **原因：** `400:25178` 白版实例已确认，但组件集节点、componentKey 和 mainComponentKey 需 Figma 组件面板权限
- **修复方式：** 打开 Figma → 选中导航栏组件集 → 获取 componentKey → 填入

### TODO-8: pendingFigmaVerification — component_set_and_keys

- **文件：** 第 207-212 行
- **scope：** component_key
- **原因：** 同 TODO-7
- **修复方式：** 获取 componentSetNodeId、componentKey、mainComponentKey 后标记 verified

### TODO-9: pendingFigmaVerification — dark_expanded_capsules

- **文件：** 第 213-217 行
- **scope：** variants
- **原因：** 黑版、展开态和胶囊数量变体不能继续引用旧对话流重复节点，需在新 section 中重新确认
- **修复方式：** 在 Figma 新 section（`400:24983`）中确认以下变体：
  - 黑版导航栏（Dark: "On"）
  - 展开态导航栏
  - 不同胶囊数量变体

---

## message-feed.brief.yaml（3 处）

### TODO-10: pendingFigmaVerification — core_component_keys

- **文件：** `authoring/components/message-feed.brief.yaml` 第 366-371 行
- **scope：** component_key
- **原因：** 用户输入、AI 头像、回答状态、正文、关联问、思考链候选节点已确认为 `400:*`，但 componentSetKey/mainComponentKey 需组件面板权限
- **修复方式：** 逐一获取以下组件的 componentKey：
  - 用户输入（`400:25049`）
  - AI 头像（`400:25051`）
  - 回答状态（`400:25055`）
  - 正文（`400:25053`）
  - 关联问（`400:25058`）
  - 思考链候选（`400:25063`）

### TODO-11: pendingFigmaVerification — business_content_bindings

- **文件：** 第 372-376 行
- **scope：** embedded_business_content
- **原因：** 指数、A股异动、竞价、资讯分类组件尚未在新设计仓库中定位到稳定节点
- **修复方式：** 在新设计仓库中定位以下业务内容组件的 Figma 节点：
  - 指数概览组件
  - A股异动组件
  - 竞价组件
  - 资讯分类组件

### TODO-12: pendingFigmaVerification — dark_theme

- **文件：** 第 377-380 行
- **scope：** dark_theme
- **原因：** 黑版主题变体待确认
- **修复方式：** 在 Figma 中确认黑版消息流组件的节点 ID 和变体属性

---

## page-background.brief.yaml（1 处）

### TODO-13: pendingFigmaVerification — token_variable_names

- **文件：** `authoring/components/page-background.brief.yaml` 第 380-384 行
- **scope：** token_variable_names
- **原因：** Figma MCP 确认了节点但未暴露变量面板信息，token 变量名需通过 Figma 变量面板确认
- **修复方式：** 打开 Figma → 选中背景节点 → 打开变量面板 → 记录 token 变量名（如 `xzl-color-bg-*`）→ 填入 `tokens` 字段

---

## trading-page-modules.brief.yaml（1 处）

### TODO-14: pendingFigmaVerification — text_override_fields

- **文件：** `authoring/components/trading-page-modules.brief.yaml` 第 1824-1828 行
- **scope：** text_override_fields
- **原因：** 文本覆盖字段待确认
- **修复方式：** 在 Figma 中逐一检查交易页各模块的文本层，记录可覆盖的文本字段名 → 填入 `textOverrideFields`

---

## 修复优先级建议

| 优先级 | TODO | 原因 |
|--------|------|------|
| P0 | TODO-10（message-feed component keys） | 6 个核心组件的 key，影响面最大 |
| P0 | TODO-1/4/7（3 个 componentKey） | figma 层的 componentKey，影响绑定验证 |
| P1 | TODO-3/6/9/12（dark variants） | 黑版变体，影响暗色模式支持 |
| P1 | TODO-11（business content） | 嵌入业务组件，影响场景完整性 |
| P2 | TODO-13（token variable names） | token 变量名，不阻塞功能 |
| P2 | TODO-14（text override fields） | 文本覆盖字段，不阻塞功能 |
