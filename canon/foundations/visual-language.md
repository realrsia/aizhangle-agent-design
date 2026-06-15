# aizhangle-agent-design

## 1. 视觉主题与氛围

AI 涨乐是一款金融行业的移动端APP，主要用户为A股市场股民。APP的视觉语言需要平衡两个目标：

- 高密度的市场信息必须保持一眼可扫
- AI 助手存在感，降低焦虑而不是制造噪声

系统围绕双主题模型构建：

- **暗色模式**是主要的"金融驾驶舱"表达：深海军蓝表面、冷蓝光晕、克制的半透明叠层、亮白数据文字、红/绿市场信号
- **亮色模式**是分析型同伴：白色和淡蓝表面、低噪音分隔、深色文字，相同组件几何结构以更轻的填充延续

核心视觉特征：

- 移动画布基线宽度为 `390px`
- 主要几何形状是圆角、胶囊状、紧凑的
- 信息密度高，但层级用文字声调、标签、间距塑造，而不是用过大的卡片
- 蓝色光带、微妙的径向辉光、半透明面板传达"AI + 金融"，而不沦为装饰性杂物
- 品牌插画作为辅助助手提示克制使用，通常出现在屏幕右上附近

一句话的设计意图：

> 构建感觉像内嵌 AI 助手的专业交易同伴的界面，而不是通用消费 App，也不是花哨的营销页面。

### 关键解读

本文档定义 AI 涨乐的**视觉语言**、**组件词汇**和**交互姿态**。它**不是**把每一个原语在每一个页面上都组合起来的许可证。

生成屏幕时：

- 先选一个屏幕原型，然后只挑该原型最少必要的原语
- 每屏保留一个清晰的主操作
- 有意识地使用密度；密度不等于杂乱
- 把品牌氛围当作辅助层，永远不是前景装饰
- 继承最接近的现有屏幕模式的情绪，而不是把所有模式平均合并
- 卡片、模块、行、底栏、胶囊组以及任何承载文字的容器默认使用 Figma Auto Layout，使内容变化不会破坏布局
- 图表默认采用外部图表库输出；不要用临时图形手绘生产图表

如果生成的屏幕感觉"技术上合规但审美上丑陋"，通常的失败原因是其中之一：

- 一个视口内太多胶囊、标签和控件互相竞争
- 装饰性辉光或渐变被提升到信息层级之上
- 字面照抄组件清单，缺乏页面级构图判断
- 处处视觉权重相等，没有焦点
- 把金融密度当作拥挤或嘈杂布局的借口

## 2. 颜色调色板与语义角色

### 主语义 Token

#### 暗色主题

| Token | 值 | 角色 |
|---|---|---|
| `xzl-color-background-a` | `#091531` | 主 App 背景 |
| `xzl-color-background-c-card` | `#608ace14` | 柔和卡片底色 / 低海拔面板 |
| `xzl-color-input` | `#59608e4d` | 暗色表面上的输入填充 |
| `xzl-color-divider-sheet` | `#59608e26` | 细线分隔 / 非激活 chip 填充 |
| `xzl-color-text-a` | `#ffffff` | 主文字 |
| `xzl-color-text-b` | `#ffffffe5` | 强次级文字 / 紧凑标签文字 |
| `xzl-color-text-c` | `#ffffffb2` | 次级文字 |
| `xzl-color-text-d` | `#ffffff80` | 三级文字 / 代码 / 元数据 |
| `xzl-color-text-e` | `#ffffff4d` | 占位 / 禁用 / 弱提示文字 |
| `xzl-color-text-special` | `#1d2850` | 高亮渐变 CTA 表面上的文字 |
| `xzl-color-special` | `#ffffff` | 白色描边和高对比强调 |
| `xzl-color-mask` | `#000000a6` | 暗化叠层 / 蒙版 |
| `xzl-color-primary-red` | `#f62f3f` | 上涨、净流入、热门动作 |
| `xzl-color-primary-green` | `#00ab61` | 下跌或图表上下文中的备选市场信号 |
| `xzl-color-primary-blue` | `#3b84ff` | 暗模下的 AI / 操作强调色 |
| `xzl-color-primary-purple` | `#9481ff` | 辅助 smart/AI 强调色，克制使用 |
| `xzl-color-primary-brown` | `#e97b2e` | 次级分类或类 ETF 暖色标记 |
| `xzl-color-primary-dark-blue` | `#2d3a67` | 密集深色 chip 或结构性强调 |

#### 亮色主题

| Token | 值 | 角色 |
|---|---|---|
| `xzl-color-text-a` | `#030303` | 主文字 |
| `xzl-color-text-b` | `#030303` | 强次级文字 |
| `xzl-color-text-c` | `#353739` | 次级文字 |
| `xzl-color-text-d` | `#6d778b` | 三级文字 / 代码 / 弱标签 |
| `xzl-color-text-e` | `#9fabc4` | 占位 / 弱元数据 |
| `xzl-color-divider-sheet` | `#e8ebfab2` | 分隔 / 淡 chip 填充 |
| `xzl-color-divider-b` | `#a6acb866` | 较强亮色分隔 |
| `xzl-color-background-c-card` | `#e1edff4d` | 淡蓝卡片着色 |
| `xzl-color-primary-red` | `#f62f3f` | 主市场正向强调 |
| `xzl-color-primary-green` | `#00ab61` | 次市场强调 |
| `xzl-color-primary-blue` | `#105eff` | 亮模下的强操作强调 |
| `xzl-color-primary-brown` | `#f36c29` | 暖色标签 / 分类强调 |
| `xzl-color-primary-dark-blue` | `#2d3a67` | 结构性深色强调 |
| `xzl-color-special` | `#ffffff` | 白色表面或反色文字 |

### 颜色规则

- `red` 和 `green` 保留给市场涨跌、资金流入流出和信号紧迫度。不要作为随意装饰使用。
- `blue` 用于 AI 助手相关、选中的辅助模式和光晕照明。
- 暗模下，大部分表面保持海军蓝加半透明叠层。避免引入扁平的中间调面板。
- 亮模下，白色作为主表面，淡蓝仅作为辅助着色。
- 跨主题保持语义对等：只有取值变化，角色名不变。

## 3. 字体规则

### 字体族

| 角色 | 字体 |
|---|---|
| 主 UI 字体 | `PingFang SC` |
| 数字 / 行情数据字体 | `涨乐财富体` |

### Figma MCP 临时字体映射

设计系统的规范字体始终是：

- UI 文字用 `PingFang SC`
- 金融数字用 `涨乐财富体`

但是，通过 **Figma MCP** 生成或编辑设计时，运行时可能无法访问这些本地安装的字体族。这种情况下，使用下列临时替换，让 agent 能继续产出结构正确的屏幕：

| 规范字体 | MCP 占位字体 | 范围 |
|---|---|---|
| `PingFang SC` | `Noto Sans SC` | UI 文字、标签、占位、Tabs、胶囊、Tags |
| `涨乐财富体` | `Noto Sans HK` | 价格、百分比、代码、成交量、紧凑金融数字 |

此 fallback 的规则：

- 把这些替换视为 **MCP 专用占位**，不是对设计系统的变更。
- 保留所有原始字体角色意图：UI 文案仍在 UI 字体轨道，数字仍在数字字体轨道。
- 最终文件在规范字体可用的环境打开时，把占位字体换回 `PingFang SC` 和 `涨乐财富体`。
- 不要在一屏内对同一角色混用多个 fallback 族。

### 已验证的字体阶梯

| 角色 | 字号 | 字重 | 行高 | 用法 |
|---|---|---|---|---|
| `Body Medium 16 / Medium` | `16px` | `500` | `100%` | 股票名、关键列表标签、强正文 |
| `Body Medium 16 / Regular` | `16px` | `400` | `100%` | 占位、标准正文 |
| `Body Medium 16 / Medium 1.6` | `16px` | `500` | `1.6` | 胶囊 CTA 文字、操作强调 |
| `Body Small / XSmall 14 / Medium` | `14px` | `500` | `100%` | 小操作按钮、激活 chip |
| `Body Small / XSmall 14 / Regular` | `14px` | `400` | `100%` | 非激活 chip、紧凑标签 |
| `Mark Large 13 / Regular` | `13px` | `400` | `100%` | 辅助入口胶囊、紧凑语义控件 |
| `Mark Medium 12 / Regular` | `12px` | `400` | `100%` | 信号 tag、元数据 |
| 微标签 | `11px` | `400` | `14px` | 如 `融`、`停`、`GDR` 这类极小市场标签 |

### 字体原则

- 界面文案、标签、占位、组件文字默认 `PingFang SC`。
- 代码、价格、百分比、成交量和紧凑金融数字用 `涨乐财富体`。
- 强调先来自字重、颜色和位置，然后才是字号跳跃。
- 在密集列表界面保持紧凑行高。大部分核心 UI 文字视觉上紧凑。
- 在产品屏幕中避免西方 SaaS 风格的超大展示标题。
- 在规范字体不可用的 Figma MCP 工作流中，临时替换 `PingFang SC -> Noto Sans SC` 和 `涨乐财富体 -> Noto Sans HK`。
- 不要在已验证字体阶梯之外引入临时字号，除非设计系统中已有的组件实例已经定义了该精确尺寸。
- 一屏内，文字应捕捉到已验证阶梯，而不是在视觉接近的自定义尺寸之间漂移。
- 草稿感觉弱时，先用字重、颜色、位置或内容裁剪修复层级，再考虑改字号。
- 文字容器应包在 Auto Layout 中，让长标签、动态值和本地化不破坏卡片或模块几何结构。

## 4. 图标系统

### 系统特征

- 图标是语义性的，大多基于线条
- 命名遵循通用系统名如 `SearchOutlined`、`DeleteOutlined`、`TopOutlined`，或项目前缀名如 `XzlPlusCircleOutlined`、`XzlSlimRightOutlined`
- 系统中观察到的常见图标尺寸：`14px`、`16px`、`18px`、`40px` 容器图标按钮

### 使用规则

- 用图标支持扫读速度，而不是装饰空白。
- 行内 tag 中，只在 tag 可下钻时使用极小尺寸的细右箭头。
- 操作胶囊中，图标放在标签前，`4px` 间距。
- 悬浮辅助按钮使用圆形容器、居中字形，与表面有可见对比。
- 保持图标线条语言一致。不要把填充卡通图标和线性交易 UI 图标混用。

### 优选开源库

- 仓库本地或 MCP 工作流中默认只用 `Lucide` 这一个开源图标族，除非团队明确改了图标策略。
- 如 Lucide 没有精确请求的符号，用 Lucide 中最接近的语义替代，而不是在同一屏混用图标族。
- `Tabler Icons`、`Iconoir` 和 `Remix Icon` 可作为研究参考，但默认不混入生成屏幕。
- 不要把字体图标库作为本系统的主要图标来源。优选单一 SVG 线性族，线条语言稳定。
- 每屏优选单一图标族，让线条节奏、转角处理和语义权重保持稳定。
- 默认开源图标尺寸是 `24px`，除非系统中某组件指定其他尺寸。
- 图标颜色只绑定到语义 token。不要为图标手挑临时 hex 颜色。

### 图标 Fallback 规则

- 精确图标不可得时，语义近似优先于视觉新颖。
- 例如，业务名词过于具体不值得做一个一次性字形时，使用通用的趋势、列表、星、铃铛、搜索、过滤或箭头图标。
- 图标覆盖缺失不是引入第二个风格族或字体图标包到同一屏的理由。

## 5. 布局系统

### 5.0 Auto Layout 规则

- 任何可复用的卡片、模块、列表行、页头、底栏、胶囊组、按钮或图表/文字容器使用 Figma Auto Layout。
- 不要把文字作为自由浮动图层放置，让卡片或模块视觉上"裂开"。
- 父子间距、对齐、padding 和拉伸行为应通过 Auto Layout 表达，再考虑手动坐标。
- 绝对定位只保留给罕见的装饰或叠加元素，不用于主要数据布局。
- 如果内容长度变化能破坏模块，那么直到 Auto Layout 被修好之前，模块在结构上就是错的。

## 5. 组件样式

### 5.1 胶囊 Tabs（`tab/胶囊`）

**已验证结构**

- 高度：`24px`
- 水平组宽度：`360px`
- 内 padding：左 `10px`、右 `8px`、垂直 `2px`
- Tabs 间隙：`8px`
- 圆角：`60px`

**状态**

- 激活：`14px Medium`、白色文字、相同胶囊几何、视觉对比更高
- 非激活：`14px Regular`、弱化文字（暗例示例 `#8b92a4`）、淡填充

**Do**

- 用于短的分类筛选和分段内容枢轴
- 标签短而易扫
- 跨亮暗主题保持视觉高度相等

**Don't**

- 不要用方形 Tabs
- 不要堆叠超过一行，除非水平滚动不可能
- 不要用高对比文字提升非激活 Tabs

### 5.2 信号标签（`1月版/信号标签`）

**已验证结构**

- 宽度灵活
- 高度：约 `18px`
- Padding：水平 `4px`、垂直 `1px`
- 文字与 chevron 间距：`2px`
- 圆角：`2px`
- 背景示例：`rgba(246, 47, 63, 0.12)`
- 文字：`12px Regular`
- Chevron：极小线性箭头，视觉次要

**用法**

- 用于可执行的市场信号，如 `主力连续4日净流入`
- 可在股票名下方或列表行中行内出现

**Do**

- 只用于有意义、有证据支撑的信号
- 文案短、事件式
- 用带语义着色的弱化填充，不要用响亮徽章

**Don't**

- 不要把每一行变成 tag 墙
- 不要把信号标签当主 CTA 按钮

### 5.3 微市场标签

**已验证结构**

- 高度：`14px`
- 描边：`0.5px`
- 圆角：`2px`
- 水平 padding：`1.5px`
- 文字：`11px`

**用法**

- 用于极小的市场限定词，如 `融`、`停`、`GDR`、`ETF`
- 紧邻代码和短标识

**规则**

- 这些标签必须保持极度紧凑。如果含义需要解释，就不该是微标签。

### 5.4 搜索输入（`委托代码搜索`）

**已验证结构**

- 尺寸：`324px × 34px`
- 背景：`xzl-color-input`
- 圆角：`4px`
- Padding：水平 `8px`、垂直 `6px`
- 搜索图标与内容间距：`8px`
- 搜索图标尺寸：`18px`
- 占位文字：`16px Regular`、`xzl-color-text-e`

**用法**

- 按代码或证券名搜索
- 常放在密集交易工作流中的暗色表面上

**Do**

- 占位描述性、双用途，如 "请输入代码/名称"
- 只用一个前置图标
- 保持低视觉噪声

**Don't**

- 默认不要加阴影、粗描边或彩色聚焦环
- 不要把占位文字居中

### 5.5 榜单切片 / Leaderboard Slices

**交互姿态**

- 榜单类模块如 `热销榜`、`人气榜`、`涨幅榜`、`跌幅榜`、`净流入榜` 在首屏默认水平切片或水平滑动组。
- 同一焦点区域不要垂直堆叠多个榜单组，除非该屏明确是完整榜单页。
- 每个切片呈现紧凑预览，并以水平移动或下钻提示更多内容可用。

**Do**

- 用水平滑动快速比较相邻榜单分类。
- 保持每个榜单切片足够紧凑以保留市场总览密度。
- 让榜单模块支撑总览，而不是替代主摘要层级。

**Don't**

- 不要把市场总览首屏做成垂直堆叠的榜单卡长串。
- 不要让榜单切片比指数摘要更高或视觉更响。

### 5.6 图表渲染

**来源规则**

- 图表应来自第三方图表系统，如 `ECharts`，再适配进设计系统布局。
- 当意图是真实金融图表时，不要用任意 Figma 矢量图形手绘生产图表。

**Do**

- K 线、走势、分时、分布、对比图表使用图表库输出。
- 图表 wrapper 保持 Auto Layout，让标题、图例、指标和辅助标签附着在图表模块。
- 图表颜色和文字样式绑回设计系统 token 和字体角色。

**Don't**

- 不要通过手动堆叠线、矩形或点近似生产图表，除非任务明确是示意性的。
- 不要让图表几何独立于周围模块布局漂移。

### 5.7 线性胶囊操作按钮

**已验证结构**

- 常见示例：`加自选`
- 描边：`0.5px` 红色 `50%` 不透明度
- 圆角：`100px`
- Padding：水平 `18px`、垂直 `10px`
- 间距：`4px`
- 图标尺寸：`16px`
- 文字：`14px Medium`

**用法**

- 次要但显著的股票操作
- 适合在列表工作流和底部操作区

**Do**

- 用于附着在当前实体上的轻量操作
- 文案短、动词开头、上下文相关

**Don't**

- 不要把此样式用于破坏性操作
- 不要无产品理由换掉红色语义

### 5.8 密集列表行（`列表信息`）

**已验证结构**

- 垂直 padding：`10px`
- 底部分隔：`0.5px`
- 水平内间距：`10px`
- 左块包含：
  - 名称 `16px Medium`
  - 代码 `12px` 数字字体
  - 可选微市场标签
  - 可选迷你图，约 `62px × 40px`
- 右块用对齐的指标列，`16px` 数字字体

**行为**

- 优先名称 + 最新值 + 涨跌
- 支持可选标签而不破坏行节奏
- 行应有数据密集感，而不是卡片感

**Do**

- 数字列保持基线对齐干净
- 红/绿只用在带运动语义的指标上

**Don't**

- 不要把行包在大卡片里
- 不要在行中插入过大的头像或插画

### 5.9 语音主 CTA

**已验证结构**

- 容器示例宽度：`220px`，高度：`48px`
- 圆角：`200px`
- 描边：`1px` 白
- 内填充：分层柔和渐变，冷蓝底，淡淡红/蓝定向光
- Padding：水平 `19px`、垂直 `13px`
- 图标 + 文字间距：`5px`
- 标签：`16px Semibold`
- 文字颜色：`xzl-color-text-special`
- 存在内嵌高光/阴影

**用法**

- 底栏中主中央助手操作
- 必须读作主要对话相关

**Do**

- 视觉精致但平静
- 在低优先级图标辅助按钮之间居中

**Don't**

- 不要把它扁平化为标准蓝色填充按钮
- 不要用响亮彩虹效果替换渐变

### 5.10 Agent 选择器胶囊

**已验证结构**

- 高度：`26px`
- 圆角：`20px`
- Padding：水平 `12px`、垂直 `4px`
- 图标和标签间距：`4px`
- 图标尺寸：`14px`
- 标签：`13px Regular`

**状态**

- 激活辅助模式：蓝色 `0.5px` 描边、蓝色文字、稍强填充
- 非激活辅助模式：相同几何、低对比文字、无激活描边

### 5.11 浮动辅助按钮（`置顶按钮`）

**已验证结构**

- 尺寸：`40px × 40px`
- 圆形容器
- 深色半透明或海军蓝调表面
- 白色 "top" 图标在 `20%` 处内嵌

**用法**

- 持久辅助操作，如返回顶部

**规则**

- 浮动辅助按钮在视觉上必须次于主语音 CTA。

### 5.12 底栏辅助图标

**已验证结构**

- 典型尺寸：`48px × 48px`
- 圆角：`200px`
- 描边：约 `0.96px`，极低白色不透明度
- 填充：深海军蓝底加冷调定向渐变
- 内处理：内嵌高光/阴影，呈现精致的玻璃金属感

**用法**

- 在底栏中夹在主语音 CTA 两侧
- 承载次级操作，如交易、个人主页或辅助工具

**Do**

- 跨所有辅助图标保持容器处理一致
- 这些只作为次级 affordance

**Don't**

- 不要让辅助图标比语音 CTA 更亮
- 不要在同一底栏混用多种容器样式

### 5.13 密集列表表头（`列表表头`)

**已验证结构**

- 全宽：`390px`
- 水平 padding：`18px`
- 垂直 padding：`5.5px`
- 表头标签：`12px Regular`
- 支持可排序的指标列，带紧凑排序符号
- 左侧可包含模式/操作图标，如编辑、多选或批量操作
- 必须有底部细线分隔

**用法**

- 用于自选股、持仓和其他密集表格式股票视图
- 必须与下方行的指标列视觉对齐

**Do**

- 标签弱化紧凑
- 当列值右对齐时，指标表头右对齐

**Don't**

- 不要把列表表头样式做成卡片或粘性 banner
- 不要把字号增大到超出行节奏

### 5.14 系统顶栏与安全区

**已验证结构**

- 使用 iPhone 风格的状态栏框架
- 时间文字用类系统 `SF Pro Text` 处理
- 灵动岛 / 黑色胶囊保留为真实的空间约束
- 状态栏下方的顶部内容在开始页面特定导航前应尊重安全区

**规则**

- 永远不要让自定义内容在视觉上与系统岛、状态图标或顶部安全区碰撞。

## 6. 布局原则

### 移动基线

- 主要设计宽度是 `390px`
- 观察到的标准内容间距：`15px` 到 `18px`
- 密集数据区比营销或设置屏幕使用更紧凑的垂直节奏

### 间距节奏

把下列间距值作为产品 UI 的操作集：

- 微：`2px`、`4px`
- 紧凑行内：`5px`、`8px`、`10px`
- 组件 padding：`12px`、`18px`、`19px`
- 区块间距：`24px+`

### 圆角阶梯

| 圆角 | 用途 |
|---|---|
| `2px` | 微标签、微徽章 |
| `4px` | 搜索字段、小辅助表面 |
| `12px` | 柔和容器 / 选择深色面板 |
| `20px` | 紧凑助手胶囊 |
| `60px` | 胶囊 Tabs |
| `100px` | 线性操作胶囊 |
| `200px` | 主语音 CTA |
| `50%` | 浮动图标按钮 |

### 布局规则

- 每屏优选一条清晰的垂直流。
- 用行和胶囊压缩信息，而不是卡片套卡片。
- 保持底部交互区稳定：主语音 CTA 居中、辅助图标两侧。
- 跨亮暗主题保留一致的屏幕节奏。
- 顶部和底部显式尊重 iOS 安全区；产品语言假定原生移动 chrome。

## 7. 屏幕构图原则

### 7.1 一屏一职责

每屏应有一个主导职责：

- 自选股扫读
- 策略复盘
- 交易搜索
- 助手交互
- 分组信号浏览

不要把多个职责合并到一屏，除非 Figma 中的参考模式已经这样做。

### 7.2 主、次、三级层级

每屏必须清晰分离：

- **主层**：用户来检查或做的事
- **次层**：筛选、分类、上下文或辅助操作
- **三级层**：元数据、小标签、辅助指示器

如果 tag、排序表头、chip 和辉光效果都同样响亮，屏幕就错了。

### 7.3 节制使用原语

这些原语强大正因为它们是选择性的：

- 胶囊 Tabs 应该分组顶层分类切换，而不是每一个本地选项
- 信号标签应该注释行，而不是替代行的信息层级
- 辅助图标按钮应该夹在主 CTA 两侧，而不是与之竞争
- 列表表头应该让用户定位，而不是成为视觉焦点

### 7.4 氛围安排

氛围只用在背景：

- 页头辉光
- 柔和径向晕染
- CTA 渐变
- 浮动控件周围的微妙光晕

避免在密集文字块、表格或多个堆叠控件后面使用氛围效果。

### 7.5 亮 vs 暗构图

- 暗模应感觉聚焦、专注、高级
- 亮模应感觉分析性、开阔、安静

不要简单地把相同密集的暗色构图重新着色为亮色。亮色屏幕通常需要更克制和更少的同时强调。

## 8. 深度、表面与运动感

### 深度语言

- 暗模深度来自半透明叠层、细线描边和冷色径向辉光
- 亮模深度来自淡蓝表面着色和微妙的分隔分离
- 沉重的投影不是主要的深度机制

### 运动指引

- 运动应感觉金融性、精确，而不是俏皮
- 在 Tabs、列表高亮和助手模式变化上用微妙的状态转场
- 避免弹跳交互、弹性卡片或夸张的缩放效果

## 9. IP 图形与品牌母题

### 已验证母题

- 小型助手肖像插画出现在屏幕右上附近
- 蓝色水平光带 / 径向辉光出现在页头或关键表面后
- 底部语音 CTA 使用分层氛围渐变，而不是扁平填充
- 浮动操作光晕柔和、冷调

### 风格规则

- 插画是辅助性的，不是主导的
- 拟人化 AI 提示只小剂量使用
- 优选冷蓝氛围而不是霓虹科幻效果
- 品牌图形保持在内容后或锚定到角落，永远不打断扫读路径

## 10. 使用模式

本系统设计用于：

- 股票列表和自选股屏幕
- 策略/历史和分组信号屏幕
- 交易搜索和委托工作流
- AI 助手锚定的底部交互
- 带紧凑语义标签的高密度金融表格

它不为以下设计：

- 图片为主的编辑型页面
- 卡片堆砌的生活方式 dashboard
- 俏皮的社交/社区 UI 语言

## 11. 数据呈现规则

- 价格、百分比、涨跌值和紧凑数字指标应优选数字字体处理。
- 列表中指标列用右对齐。
- 即使行密集，股票名块和指标块也保持视觉可分离。
- 迷你图是辅助上下文，不是行的主焦点。
- 表头中的排序控件保持紧凑，视觉上次于标签。

## 12. 品位护栏

### 正向

- 平静、高级、金融原生
- 精确、紧凑、有意为之
- 有氛围但不浮夸
- 数据优先，助手辅助
- 只有当改善强调或流时才不对称

### 负向

- 通用 SaaS dashboard
- 卡片沙拉
- "AI 酷炫"霓虹未来主义
- 过度装饰的玻璃拟态
- 没有信息目的的装饰渐变
- chip 和 tag 过载

## 13. Do 与 Don't

### Do

- 让界面金融优先、助手次之
- 用语义 token 而不是发明一次性颜色
- 复用胶囊 Tabs、信号 tag、密集列表行和底部助手控件
- 在几何和层级上保持强暗/亮对等
- UI 语言用 `PingFang SC`，数字用 `涨乐财富体`
- 在 Figma MCP 专用工作流中，规范字体不可用时用 `Noto Sans SC` 和 `Noto Sans HK` 作临时占位
- 把鲜亮强调色保留给有意义的状态

### Don't

- 不要引入通用 SaaS 渐变、白底紫的默认配色或柔和粉彩 dashboard
- 不要用过大卡片替代密集列表模式
- 不要过度使用阴影、玻璃模糊或装饰图标
- 不要在系统已有微标签和胶囊标签时创建新的徽章形状
- 不要把红、绿、蓝当装饰用而无语义含义
- 不要加多个互相竞争的主 CTA 破坏底部操作模式

## 14. AI 引导命令

当 agent 为本系统生成屏幕时，用这些规则引导它：

- 优化目标是 `high-density financial clarity`（高密度金融清晰度）
- 保留 `mobile-first 390px composition`（移动优先 390px 构图）
- 优选 `pill geometry + compact rows + semantic tags`（胶囊几何 + 紧凑行 + 语义标签）
- 保持 `AI presence calm, helpful, and secondary to data`（AI 存在平静、有用、次于数据）
- 把 `blue glow atmosphere` 用作辅助品牌信号，而不是壁纸
- 始终选择 `tokenized dark/light values`，永远不要硬编码临时颜色
- 把 `voice CTA`、`agent pills`、`tabs` 和 `list rows` 视为核心原语
- 把 `safe area + bottom dock + dense list header` 视为结构原语，而不是可选装饰
- 按 `screen job -> hierarchy -> primitives`（屏幕职责 → 层级 → 原语）构图，永远不要只按原语清单
- 不确定时，加一层装饰前先去掉一层

## 15. 反模式

- 处处 16px 圆角的通用 dashboard 卡片
- 密集金融数据背后的全屏响亮渐变
- 过大的空白间距降低信息吞吐
- 同一局部簇内多个强调色互相竞争
- 把 tag 当装饰而不是真正的语义信号
- 用普通比例 UI 字体替换数字字体处理
- 浮动辅助按钮比语音 CTA 更大或更亮
- 让自定义导航与状态栏或灵动岛碰撞
- 让可排序列表表头视觉上比数据本身更响
- 在用户看到核心信息前展示太多控件簇
- 把每一行变成徽章板
- 把装饰图表或迷你图噪声放在仅靠数值就更清晰的地方

## 16. Agent 工作流

生成任何屏幕前，按此顺序：

1. 识别屏幕原型
2. 识别用户的单一主任务
3. 选最少必要的原语集合
4. 定义主/次/三级层级
5. 主题和氛围最后应用
6. 最终化前跑一遍反模式检查

如果屏幕感觉杂乱，按此顺序修复：

1. 去掉不必要的原语
2. 减少三级标签或辅助控件
3. 软化或去掉背景氛围
4. 重建一个清晰焦点
5. 最后才调整颜色或间距

## 17. Agent Prompt 指南

### 必备 Prompt 框架

要 agent 设计新页面时，始终指定：

1. 主题：`dark` 或 `light`
2. 屏幕原型：`watchlist`、`strategy`、`trading search`、`assistant panel` 或 `detail list`
3. 数据密度：`high`、`medium` 或 `low`
4. 主操作：通常是 `voice CTA`、`add to watchlist`、`switch agent`、`filter by signal` 之一
5. 本系统中所需的原语
6. 屏幕是否包含 `dense list headers`、`bottom dock` 或 `search workflow`
7. 在前 3 秒视觉上应主导的内容

### Agent 规则

- 在发明新组件前从现有原语开始。
- 使用第 2 节的语义 token。
- 使用第 3 节的字体，金融数字用 `涨乐财富体`。
- 在规范字体不可见的 Figma MCP 环境中，使用第 3 节的临时映射：`PingFang SC -> Noto Sans SC`、`涨乐财富体 -> Noto Sans HK`。
- 存在对话流时保留底部操作架构。
- 暗模优选深海军蓝加微妙蓝光。亮模优选白色加淡蓝着色。
- 只有数据真正证明时才使用信号标签。
- 如果某组件未在此定义，从最接近的现有原语推导，而不是发明新视觉语言。
- 保留顶部和底部安全区，不要让内容与原生移动 chrome 冲突。
- 不要把本文件当组件购物清单；把它当作构图和品位约束。

### 建议 Prompt 模板

```text
Create a [dark/light] AI Zhangle mobile screen at 390px width.
Use the AI Zhangle design system strictly.
Screen type: [watchlist / trading search / strategy / assistant panel].
Primary user task: [task].
Required components: [capsule tabs, search input, list rows, signal tags, voice CTA, agent selector pills, floating top button].
Visual dominance in the first 3 seconds: [what must stand out].
Keep the interface finance-dense, calm, and token-driven.
Use PingFang SC for UI text and 涨乐财富体 for numbers.
Respect iOS safe areas, Dynamic Island spacing, and bottom dock structure.
Do not invent new colors, new corner styles, or generic dashboard cards.
Do not over-combine primitives; remove anything that does not support the primary job.
```

### Component-First Figma Prompt 模板

当输出目标是带有现有 Component 的 Figma 设计文件时，使用此模板：

```text
In the target Figma file, generate [N] mobile visual-test pages for [market/trading/chat/etc.].

Component-first rule:
- Before drawing anything, inspect the relevant scenario/component briefs and Figma bindings.
- List the component families that should be used on each page.
- Use confirmed Figma Components first. Import, instantiate, or clone existing Components instead of redrawing lookalikes with raw rectangles and text.
- Select the correct variants and explicitly verify light/dark variable mode. Theme mismatch is a hard failure.
- If a Component is missing, blocked by unavailable fonts, inaccessible, or still marked TODO_VERIFY_WITH_FIGMA, do not pretend it is bound. Use a clearly labeled fallback block named `未绑定组件` or `binding pending`, and explain the reason in a right-side annotation panel.

Layout rule:
- Keep the generated screen itself clean: no binding notes, review comments, or prompt text inside the screen.
- Put binding status, fallback reasons, and test purpose in a separate annotation card to the right.
- Use Auto Layout for real content containers where practical, and prevent wrappers from clipping component instances/clones.

Content rule:
- Use realistic financial data and Chinese finance semantics.
- Red means up/positive/hot action; green means down/negative/risk.
- Do not leave placeholder text such as `文字文字`, generic labels, or unresolved prompts.

Verification rule:
- After generation, verify Figma metadata and screenshot rendering.
- Fix theme mismatches, clipped components, placeholder text, and component lookalikes before reporting.
```

### 快速生成检查清单

- 屏幕是否做一个清晰职责？
- 主题是否正确？
- 颜色是否 token 化和语义化？
- Tabs、tag 和列表行是否用了正确几何？
- 主 CTA 是否单一且明显？
- 数字是否用数字字体处理渲染？
- 内容前是否有太多装饰氛围？
- 三级控件是否比主信息更安静？
- 页面是否感觉像 AI 涨乐而不是通用金融 App？
- Figma 生成是否复用了已确认 Component 而不是重绘 lookalike？
- 缺失或被阻塞的 binding 是否显式标记而不是隐藏？
- 每个 Component 实例/克隆是否解析到所要求的亮/暗主题？
