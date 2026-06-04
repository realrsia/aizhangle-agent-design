# PR 审核提示词与流程

本文档用于指导团队如何使用 AI Agent 审核 `zhangle-agent-design-system` 仓库的 PR。

## 审核流程总览

```
提交 PR
  ↓
Step 1：提交人自检（填写 PR Template）
  ↓
Step 2：AI Agent 自动审核（使用下方提示词）
  ↓
Step 3：人工审核（检查判断类内容）
  ↓
Step 4：合并或要求修改
```

## 角色分工

| 角色 | 职责 |
|------|------|
| 提交人 | 填写 PR Template，确保文件可解析，标注 TODO |
| AI Agent | 自动检查结构、格式、必填字段、交叉引用、常见错误 |
| 审核人 | 检查 purpose、risk、zones、business logic 等人工判断 |

## Step 1：提交人自检

提交 PR 前，确保：
- YAML 文件可以正常解析
- PR Template 中的自检清单已勾选
- 所有 TODO 已分类标注（TODO_HUMAN_CONFIRM / TODO_VERIFY_WITH_FIGMA / NEEDS_FIGMA_SELECTION）

## Step 2：AI Agent 自动审核

### 初始提示词（通用版）

复制以下提示词，替换 `{branch-name}` 和 `{pr-description}` 后发给 AI Agent：

---

```markdown
你是一位设计规范仓库的审核助手。请审核当前 Git 分支 `{branch-name}` 上的代码变更。

## 审核背景

这是一个 schema-first 的 Agent 可读设计规范仓库（zhangle-agent-design-system）。
团队有 3 人协作，人工输入主要在 `authoring/` 文件夹。
本次 PR 描述：{pr-description}

## 审核步骤

请按以下顺序执行审核，每一步给出明确的 PASS / FAIL / WARN 结论：

### 第 1 步：文件变更范围检查

1. 获取当前分支相对于 main 的所有变更文件（git diff --name-only main...HEAD）
2. 检查变更文件是否符合 PR scope 规则：
   - 每个 PR 只处理一个组件、一个场景、一个 token group、一个 checklist 或一个 binding group
   - 如果变更涉及多个不相关的组件或场景，标记为 WARN 并建议拆分
3. 检查是否有不应该被修改的文件（如 generated/ 下的文件不应手动编辑）

### 第 2 步：YAML / JSON 解析验证

对所有变更的 .yaml 和 .json 文件：
1. 验证是否可以正常解析（无语法错误）
2. 检查缩进是否一致（建议 2 空格）
3. 检查是否有重复的 key

### 第 3 步：文件命名与 ID 格式检查

1. 组件 Brief 文件必须命名为 `{component-id}.brief.yaml`
   - component-id 格式：小写字母、数字、连字符（如 button, trading-action-button）
2. 场景 Brief 文件必须命名为 `{scenario-name}.brief.yaml`
   - scenario-name 格式：小写字母、数字、连字符（如 watchlist, bottom-bar-companion-reminder）
3. Case Study 文件必须命名为 `{case-study-name}.md`
   - case-study-name 格式：小写字母、数字、连字符（如 bottom-bar-companion-reminder）
4. 组件 id 字段必须匹配 `component.{slug}` 格式
5. 场景 id 字段必须匹配 `scenario.{slug}` 格式
6. 文件名和 id 中的 slug 必须一致
7. Case Study 文件名应与关联的场景或组件名对应

### 第 4 步：Schema 必填字段验证

#### 组件 Brief（对照 schemas/component-brief.schema.yaml）

必须存在的字段：
- id, name, owner, status, purpose, usedIn, humanRules
- humanRules 必须包含 do 和 dont
- figma 必须包含 componentKey, bindingMode, bindingFailurePolicy
- classification 必须包含 primitiveFamily, componentType, riskLevel
- reviewChecklist（数组，至少 1 条）
- agentExpansion（对象）

#### 场景 Brief（对照 authoring/scenarios/_scenario.brief.yaml）

必须存在的字段：
- id, name, owner, status, purpose
- primaryUserGoal（用户目标，不能是空字符串）
- requiredContent（数组，至少 1 条，描述页面必须有哪些内容）
- forbiddenPatterns（数组，至少 1 条，描述禁止的模式）
- riskWarnings（数组，至少 1 条）

可选但建议的字段：
- allowedZones（允许的页面区域）
- companionContexts（陪伴场景分类，如果场景涉及陪伴模块）
- buttonRules（按钮规则，如果场景涉及操作按钮）
- candidateArchetype（候选页面骨架）
- candidateComponents（候选组件列表）
- reviewChecklist（审核清单，数组，每条含 id + question + passCriteria）
- agentExpansion（Agent 扩展路径）

#### Case Study（对照 authoring/case-studies/README.md）

Case Study 是 Markdown 文件，必须包含以下章节：
- `## Context`：案例背景说明
- `## Expected Behavior` 或 `## Usage Examples`：期望行为或使用示例
- `## Common Mistakes`：常见错误（至少 1 条）
- `## Related Rules`：关联的场景、组件或 checklist

建议但不强制的章节：
- `## Copy Examples`：文案示例
- `## Screenshots`：截图或 Figma 节点引用

### 第 5 步：三段式结构检查

#### 组件 Brief 和场景 Brief

确认文件包含三段，且顺序正确：

1. `01_HUMAN_REQUIRED` 或对应的注释标记
2. `02_AGENT_EXTRACTED` 或对应的注释标记
3. `03_AGENT_EXPANSION_AND_CHECKLIST` 或对应的注释标记

#### Case Study

确认 Markdown 文件结构合理：
1. 有 `## Context` 章节
2. 有 `## Expected Behavior` 或 `## Usage Examples` 章节
3. 有 `## Common Mistakes` 章节且内容不为空
4. 有 `## Related Rules` 章节且引用了有效的场景或组件 ID

### 第 6 步：TODO 标记审计

扫描所有变更文件中的 TODO 标记，分类统计：

| 类型 | 含义 | 审核要求 |
|------|------|----------|
| TODO_HUMAN_CONFIRM | 需要人工确认的判断 | 提交人必须在 PR 描述中逐条说明或标记为待确认 |
| TODO_VERIFY_WITH_FIGMA | 需要通过 Figma API 验证 | 允许保留，但需标注后续处理计划 |
| NEEDS_FIGMA_SELECTION | 需要设计师重新选中 Figma 对象 | 允许保留，但需标注后续处理计划 |
| TODO_AGENT_FILL | Agent 待填充 | 检查是否应该在本次 PR 中填充 |

如果存在没有标记类型的 TODO（如裸写的 "TODO" 或 "待确认"），标记为 FAIL。

### 第 7 步：内容质量检查

#### 组件 Brief（必检）

1. purpose 是否清晰描述了组件/场景的用途（不能是空字符串或纯占位符）
2. humanRules 的 do 和 dont 是否至少各有 1 条有意义的内容
3. riskWarnings 是否已填写（空数组视为未填写）
4. status 是否使用了合法值：draft / review / stable / deprecated
5. 高风险组件（riskLevel 为 high）必须有：
   - 明确的 riskWarnings
   - allowedZones 和 forbiddenZones
   - forbiddenPairings
   - P0 级别的 reviewChecklist 项

#### 场景 Brief（必检，如 PR 中包含场景变更）

1. purpose 是否清晰描述了场景的业务目标
2. primaryUserGoal 是否描述了用户的实际目标（不是重复 purpose）
3. requiredContent 至少有 1 条具体的内容要求
4. forbiddenPatterns 至少有 1 条具体的禁止模式
5. candidateComponents 是否列出了场景需要的组件
6. reviewChecklist 是否至少有 1 条（如果存在 checklist）
7. 场景引用的组件 ID 是否在 `authoring/components/` 中存在

#### Case Study（可选，如 PR 中包含 case study 变更）

Case Study 是可选文件，不是每个组件或场景都必须有。但如果 PR 中包含 case study 变更，需检查：

1. Context 章节是否清楚说明了案例背景
2. Expected Behavior 或 Usage Examples 是否具体可执行
3. Common Mistakes 是否列举了真实、具体的错误（不是泛泛的原则）
4. Related Rules 是否引用了有效的场景或组件 ID
5. 如果引用了 Figma 节点，nodeId 格式是否正确（如 `12:9237`）
6. 如果引用了截图或图片，路径是否存在

### 第 8 步：Figma 绑定检查

1. componentKey 状态：
   - 已填写具体值 → PASS
   - 标记为 TODO_VERIFY_WITH_FIGMA → WARN（允许，需有后续计划）
   - 缺失 → FAIL
2. bindingMode 是否已指定
3. bindingFailurePolicy 是否已指定
4. 检查是否有把本地 SVG / PNG / 字体文件路径当作 Figma 组件证据的情况

### 第 9 步：索引与交叉引用检查

1. 新增组件 Brief 时，`authoring/components/index.yaml` 是否已更新
2. agentExpansion 中的路径是否指向正确的文件
3. sourceRefs 中引用的文件是否存在
4. checklist 的 componentId 是否与组件 id 匹配
5. 新增场景时，是否关联了正确的组件
6. 场景 Brief 中 candidateComponents 引用的组件 ID 是否在 `authoring/components/` 中存在
7. Case Study 中 Related Rules 引用的场景或组件 ID 是否有效
8. Case Study 中引用的 Figma nodeId 格式是否正确

### 第 10 步：reviewChecklist 质量检查

1. reviewChecklist 至少有 1 条
2. 每条必须包含：id, severity, question, passCriteria
3. severity 使用了合法值：P0 / P1 / P2 / P3
4. question 是可执行的审核问题（不是泛泛的原则描述）
5. passCriteria 是可验证的通过标准

## 输出格式

请按以下格式输出审核结果：

### 审核摘要

- 变更文件数量：
- 组件 Brief 变更：是 / 否
- 场景 Brief 变更：是 / 否
- Case Study 变更：是 / 否
- 其他变更：

### 审核结果

| 步骤 | 结论 | 详情 |
|------|------|------|
| 1. 文件范围 | PASS / WARN / FAIL | ... |
| 2. YAML 解析 | PASS / FAIL | ... |
| 3. 命名与 ID | PASS / FAIL | ... |
| 4. 必填字段 | PASS / FAIL | ... |
| 5. 三段式结构 | PASS / FAIL | ... |
| 6. TODO 审计 | PASS / WARN | ... |
| 7. 内容质量 | PASS / WARN / FAIL | ... |
| 8. Figma 绑定 | PASS / WARN / FAIL | ... |
| 9. 索引引用 | PASS / FAIL | ... |
| 10. Checklist 质量 | PASS / FAIL | ... |

### 问题清单

列出所有 FAIL 和 WARN 的具体问题，格式：
- [严重程度] 文件路径:行号 - 问题描述 - 修复建议

### TODO 统计

- TODO_HUMAN_CONFIRM: N 处
- TODO_VERIFY_WITH_FIGMA: N 处
- NEEDS_FIGMA_SELECTION: N 处
- 其他 TODO: N 处

### 最终结论

- ✅ PASS：可以合并
- ⚠️ PASS WITH WARNINGS：可以合并，但有建议项
- ❌ NEEDS CHANGES：需要修改后重新审核
```

---

### 快速版提示词（适合小改动）

如果只是小修改（如修改一个字段、添加一个示例），可以用简化版：

---

```markdown
请审核当前分支 `{branch-name}` 的变更。

检查项：
1. YAML 可解析
2. 必填字段完整
3. id 格式正确
4. TODO 标记有分类
5. 与现有文件无冲突

输出：PASS / FAIL + 问题列表
```

---

## 参考示例

如果不确定什么是"好的 Brief"，参考 bottom-bar 系列文件：

| 类型 | 文件路径 |
|------|----------|
| 组件 Brief | `authoring/components/bottom-bar.brief.yaml` |
| 场景 Brief | `authoring/scenarios/bottom-bar-companion-reminder.brief.yaml` |
| Case Study | `authoring/case-studies/bottom-bar-companion-reminder.md` |

这三个文件覆盖了完整的三件套（组件 + 场景 + 案例），可以作为新组件/场景编写的模板参考。

## Step 3：人工审核要点

AI 审核通过后，人工审核人需要重点检查：

### 判断类内容（AI 无法替代）

1. **purpose 是否准确**：这个组件/场景的定位是否符合产品规划？
2. **riskWarnings 是否充分**：风险边界是否覆盖了所有高危场景？
3. **allowedZones / forbiddenZones 是否合理**：允许和禁止的使用区域是否正确？
4. **humanRules 的 do / dont 是否合理**：规则是否符合团队共识？
5. **examples 是否有说服力**：好的和坏的示例是否能帮助理解？

### 跨人一致性

1. 新组件是否与已有组件的命名风格一致？
2. 相似组件的风险等级是否一致？
3. 同类场景的 forbiddenPatterns 是否对齐？

## Step 4：合并条件

### 可以合并

- AI 审核结论为 PASS 或 PASS WITH WARNINGS
- 人工审核确认判断类内容无误
- 无阻塞性 TODO（或已标注后续处理计划）

### 要求修改

- AI 审核结论为 NEEDS CHANGES
- 人工审核发现判断类内容有误
- 存在未标注的 TODO
- 文件命名或 ID 格式错误

## 常见问题

### Q: TODO_VERIFY_WITH_FIGMA 可以合并吗？

A: 可以。这是标记"Agent 后续需要通过 Figma API 补齐"的字段，不要求在当前 PR 中完成。但需要在 PR 描述中说明后续处理计划。

### Q: 高风险组件和普通组件的审核标准有什么不同？

A: 高风险组件（如 trading-action-button）需要额外检查：
- 必须有明确的 riskWarnings
- 必须有 forbiddenZones
- 必须有 P0 级别的 reviewChecklist
- 必须有 forbiddenPairings
- componentKey 必须已填写或有明确的验证计划

### Q: 新增组件时还需要更新哪些文件？

A: 最少需要：
1. `authoring/components/{component-id}.brief.yaml`（组件 Brief）
2. `authoring/components/index.yaml`（索引）

如果 Agent 已扩展，还可能需要：
3. `canon/components/{component-id}.meta.yaml`
4. `canon/checklists/{component-id}-review.yaml`
5. `bindings/figma/components.yaml`

### Q: 三个人同时修改同一个文件怎么办？

A: 建议：
- 不同人负责不同组件，避免同时修改同一个 Brief 文件
- 如果确实需要修改同一文件，先在 Issue 中协商，再分别开分支
- 合并冲突时以最新的 YAML 语义为准，不要简单地选择一方
