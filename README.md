# [AI 涨乐 Agent 设计规范知识库](https://y0htr35pce.feishu.cn/wiki/YMovwjSS1imiYTkjJ2zcMbS0nuc)
---
# Zhangle Agent Design System

This folder is the schema-first upgrade of `zhangle-design-skill`.

It keeps the useful materials from the integrated skill package, but changes the operating model:

- `authoring/` is the human-editing layer for simple component and scenario briefs.
- `SKILL.md` routes agents to the right materials.
- `DESIGN.md` routes visual generation and aesthetic review.
- `schemas/` defines the machine-readable model.
- `canon/` stores the source of truth for tokens, components, archetypes, scenarios, and checklists.
- `bindings/` connects canonical objects to Figma and local assets.
- `renderers/` maps canonical/Figma identity to low-fidelity H5 or HTML prototype output.
- `docs/` keeps human-readable references and case studies.
- `docs/generated/` keeps generated indexes derived from canonical data.
- `sources/` records provenance and points back to the original package.

## Current Status

This is a first-stage MVP scaffold. It is not a full rewrite of the existing design skill.

The first working slice focuses on:

1. latest component brief authoring workflow
2. color tokens
3. Figma variable binding
4. route-only `SKILL.md`
5. executable visual review checklist
6. human/Agent component brief workflow
7. Akun fusion source bindings, semantics, audit chain, radius/typography additions
8. component-level canon, review checklists, Figma binding map, YAML schemas, and generated component docs index
9. aesthetic entrypoint for visual generation, visual audit, design tasting, hierarchy, density, and polish

## Source Package

Primary source used for this scaffold:

`/Users/penn/Desktop/SketchTemp/AI Zhangle 底层仓库搭建/zhangle-design-skill`

Fusion source merged into this scaffold:

`/Users/penn/Desktop/SketchTemp/AI Zhangle 底层仓库搭建/各自的分支/0602xzl-design-system-fusion-version_阿琨合并版`

Latest YAML component workflow source merged into this scaffold:

`/Users/penn/Desktop/SketchTemp/AI Zhangle 底层仓库搭建/各自的分支/0602xzl-design-system-fusion-version_基于最新的yaml合并版`

Foundation source priority:

`/Users/penn/Desktop/SketchTemp/AI Zhangle 底层仓库搭建/各自的分支/阿坤-组件搭建`

Supplemental visual-language source:

`/Users/penn/Desktop/SketchTemp/AI Zhangle 底层仓库搭建/各自的分支/邓鹏-设计生成repo`

## Principle

Schema and canon files carry truth. Markdown explains truth. Bindings locate resources. Checklists govern output.

Humans should edit `authoring/` first. Agents expand briefs into `canon/`, `bindings/`, `canon/checklists/`, and `docs/generated/`.

For component work, use `authoring/components/index.yaml` and the matching `authoring/components/{component-id}.brief.yaml` first. The latest component brief files are the current source for component purpose, usage scenarios, risk boundaries, zones, pairings, and examples.

For visual generation or aesthetic review, start with `DESIGN.md`. Use Akun foundation files for numeric values and implementation rules, then use Dengpeng visual-language files for atmosphere, composition, hierarchy, density, icon policy, and design-tasting judgment.

Figma component IDs are the primary design source for maintained components. Local SVGs, PNGs, fonts, and JSON templates are offline references and prototype fallback assets unless a matching Figma binding is verified.
