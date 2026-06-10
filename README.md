# AI 涨乐 Agent 设计系统

[AI 涨乐 Agent 设计规范知识库](https://y0htr35pce.feishu.cn/wiki/YMovwjSS1imiYTkjJ2zcMbS0nuc)

这个仓库是面向 Agent 和维护者的设计系统知识库，用来支持 AI 涨乐 / 新涨乐移动端页面的生成、评审、修复和低保真原型输出。

仓库的目标不是保存一堆说明文档，而是把设计规则、业务场景、Figma 绑定、本地资源、渲染规则和检查清单整理成 Agent 可读取、可验证、可维护的结构。

## 先读哪里

- `SKILL.md`：Agent 主入口，负责任务路由、业务关键词、读取顺序、编辑纪律、Figma 生成硬性约束和交付要求。
- `manifest.json`：机器可读路径索引，用来定位仓库入口、目录和关键文件。
- `DESIGN.md`：视觉生成、视觉评审、审美方向、层级、密度、氛围和 polish 的入口。
- `AGENTS.md`：兼容入口，仅用于会自动查找 `AGENTS.md` 的工具；实际规则以 `SKILL.md` 为准。
- `llms.txt`：给其他 LLM / Agent 的极简入口说明。

## 目录职责

- `authoring/`：人类维护输入层。组件 brief、场景 brief、业务意图、风险边界和示例先写在这里。
- `canon/`：设计系统真源。承载 tokens、components、archetypes、scenarios 和 checklists。
- `bindings/`：连接层。维护 Figma component key、variant、variables、本地 assets manifest 等绑定信息。
- `renderers/`：低保真 H5 / HTML prototype 的渲染规则。
- `schemas/`：机器可读模型和 YAML / JSON 结构约束。
- `docs/references/`：解释层和人工参考资料，只在 canon、authoring、bindings 信息不够时补充读取。
- `docs/generated/`：生成结果和索引，不要当作可编辑真源。
- `agents/openai.yaml`：Skill Creator 风格的 UI metadata，不承载生成约束。

## 工作原则

- `SKILL.md` 负责告诉 Agent “遇到什么任务该读哪些文件、怎么验证、怎么交付”。
- `manifest.json` 负责告诉 Agent “文件在哪里”。
- `canon/` 负责保存稳定真源，Markdown 只解释真源。
- `bindings/` 负责连接 Figma 和本地资源，不把连接信息写进 canon 真源。
- Figma component IDs 是 maintained components 的主要设计来源。
- 本地 SVG、PNG、fonts、JSON templates 只作为离线参考或 prototype fallback，不等同于真实 Figma component instance。
- 高风险金融交互、交易动作、破坏性操作和关键业务边界必须由人类撰写或确认。

## 常见维护流程

新增或修改组件时：

1. 先编辑 `authoring/components/index.yaml` 和对应 `authoring/components/{component-id}.brief.yaml`。
2. 再扩展或核对 `canon/components/{component-id}.meta.yaml`。
3. 同步 `canon/checklists/{component-id}-review.yaml`。
4. 如果涉及 Figma 事实，同步 `bindings/figma/components.yaml`。
5. 必要时更新 schema、generated index 和变更记录。

新增或修改业务场景时：

1. 先编辑 `authoring/scenarios/*.brief.yaml`。
2. 再扩展到 `canon/scenarios/` 和对应 `canon/archetypes/`。
3. 根据页面中使用的组件读取相关 `canon/components/*.meta.yaml`。
4. 更新必要的 checklist 和 Figma binding。

做视觉生成或视觉评审时：

1. 先读 `SKILL.md` 判断任务路由。
2. 再读 `DESIGN.md` 确认视觉语言、source priority 和审美评审方式。
3. 按任务读取最小必要的 foundation、component、scenario、binding 和 checklist。
4. 交付前运行对应 `canon/checklists/`。

## 业务路由提示

用户描述通常会用自然语言，不一定直接说文件名。可以先用 `SKILL.md` 中的“业务路由关键词”定位：

- 大盘、市场总览、指数、涨跌榜、异动、竞价、资讯：走 market-index 场景。
- 自选、持仓、行情列表、金融表格：走 watchlist / list page 场景。
- 交易、下单、买入、卖出、撤单、条件单、委托：走 trading 场景。
- AI 对话、消息、问答、追问、关联问题、思考过程：走 ai-chat 场景。
- Bottom Bar、底部输入、语音输入、任务助手、陪伴、个股预交易：走 bottom-bar 相关场景。
- Action Sheet、弹窗、协议确认、AI 结果说明、高风险交易确认：走 action-sheet 场景。

## 变更记录

修改仓库结构、canon、bindings、checklists、docs、schemas、renderers 或 workflow 文档后，请在 `docs/references/change-history.md` 追加记录，说明修改内容和验证结果。
