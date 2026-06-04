## 本次新增 / 修改

- 目标文件：
- 修改类型：新增组件 / 修改组件 / 新增场景 / 修改场景 / 新增案例 / token 修改 / checklist 修改 / binding 同步
- 关联分支：

## 人类定义内容

- purpose:
- humanRules (do / dont):
- riskWarnings:
- usedIn:
- allowedZones / forbiddenZones:
- requiredPairings / forbiddenPairings:
- examples (good / bad):

## Agent 自动补齐内容

- observedStructure:
- variants / states / slots:
- tokens:
- checklist draft:
- figma binding draft:
- generated docs:

## 待确认

- [ ] TODO_HUMAN_CONFIRM 项已逐条列出：
- [ ] TODO_VERIFY_WITH_FIGMA 项已逐条列出：
- [ ] NEEDS_FIGMA_SELECTION 项已逐条列出：

## 自检清单

### 结构与格式
- [ ] YAML / JSON 可以解析
- [ ] 文件名符合命名规范（组件：`{component-id}.brief.yaml`，场景：`{scenario-name}.brief.yaml`）
- [ ] id 字段格式正确（组件：`component.{slug}`，场景：`scenario.{slug}`）
- [ ] 必填字段完整（参照 `schemas/component-brief.schema.yaml` 或 `schemas/` 下对应 schema）
- [ ] 三段式结构完整：`01_HUMAN_REQUIRED` → `02_AGENT_EXTRACTED` → `03_AGENT_EXPANSION_AND_CHECKLIST`

### 内容质量
- [ ] purpose 清晰描述组件/场景的用途
- [ ] humanRules 的 do 和 dont 至少各有 1 条
- [ ] riskWarnings 已填写（高风险组件必须有明确风险边界）
- [ ] allowedZones 和 forbiddenZones 已定义（高风险组件必须有）
- [ ] examples 至少有 1 个 good 或 bad 示例
- [ ] status 字段使用了合法值：draft / review / stable / deprecated

### Figma 绑定
- [ ] componentKey 状态明确（已填写或标记为 TODO_VERIFY_WITH_FIGMA）
- [ ] bindingMode 已指定（如 `must_use_library_instance`）
- [ ] bindingFailurePolicy 已指定（如 `stop_and_recheck`）
- [ ] 没有把本地 SVG / PNG / 字体误认为真实 Figma 组件实例

### 索引与关联
- [ ] 新增组件时已更新 `authoring/components/index.yaml`
- [ ] 新增场景时已更新对应索引（如有）
- [ ] agentExpansion 中的路径指向正确文件
- [ ] checklist 与组件/场景对应关系正确

### 审核清单
- [ ] reviewChecklist 至少有 1 条
- [ ] 每条 checklist 包含 id、severity、question、passCriteria
- [ ] severity 使用了合法值：P0 / P1 / P2 / P3
- [ ] 高风险组件有 P0 级别的安全检查项

## 审核人确认

- [ ] 人类判断（purpose、risk、zones）已审核
- [ ] 结构完整性已验证
- [ ] 无阻塞性 TODO（或已标注后续处理计划）
