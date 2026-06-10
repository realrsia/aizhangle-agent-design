# Zhangle Agent Design System 文件结构说明

> 本文帮助团队成员理解 `zhangle-agent-design-system` 的当前文件结构，以及人、Agent、Figma、Git 应该如何在这套结构里协作。仓库后续会区分**构建版**（团队维护用）和**发布版**（Agent 运行用）两种形态，本文在分层表中标注了两种版本的保留范围。

## 历史记录

本次更新前的原文档已备份为独立历史文档（含 2026-06-05、2026-06-09 和 2026-06-10 三个版本）：

- [历史记录｜文件结构说明｜2026-06-05 更新前](https://y0htr35pce.feishu.cn/wiki/VQWlwbbATiQoFSkNx8sc77wjncf)
- [历史记录｜文件结构说明｜2026-06-09 更新前](https://y0htr35pce.feishu.cn/wiki/UFjjdvk5woNIshxHATkcA8lynRg)

本次 2026-06-10 更新主要反映：在分层表中新增构建版/发布版保留范围标注，补充构建版与发布版的定义说明，更新相关目录说明。

## 一句话说明

`zhangle-agent-design-system` 是一个面向 Agent 可读、可生成、可审核的设计规范底层仓库。它把人的设计判断、Figma 资源、本地素材、组件规范、页面规范和审核规则拆成不同层级，让团队可以通过 Git 协作，也让 Agent 能按固定路径读取、扩展和校验。

## 构建版与发布版

仓库有两种使用形态：

- **构建版**：给团队继续补 Brief、扩展 canon、修 binding、写 checklist、做评测用。保留全部目录和文件。
- **发布版**：给 Agent 实际生成、评审、修复设计用，只保留运行必需的规则、索引、绑定和资源。裁剪掉 `tools/`、`tests/`、`sources/`、`docs/generated/`、协作流程文档和未被引用的素材。

下面分层表中的"构建版"和"发布版"两列标注了每层在两种形态下的保留情况。

## 当前结构快照

当前仓库顶层