# [AI 涨乐 Agent 设计规范知识库](https://y0htr35pce.feishu.cn/wiki/YMovwjSS1imiYTkjJ2zcMbS0nuc)
---
# Zhangle Agent Design System

This repository is a schema-first, Agent-readable design-system source for AI Zhangle / New Zhangle mobile screens.

It organizes design rules, Figma bindings, local assets, renderer guidance, and review checklists so Agents and maintainers can generate, review, and repair design outputs with a shared source of truth.

- `authoring/` is the human-editing layer for simple component and scenario briefs.
- `SKILL.md` routes agents to the right materials.
- `DESIGN.md` is the design-system entrypoint for visual generation, aesthetic review, source priority, and foundation-source routing.
- `schemas/` defines the machine-readable model.
- `canon/` stores the source of truth for tokens, components, archetypes, scenarios, and checklists.
- `bindings/` connects canonical objects to Figma and local assets.
- `renderers/` maps canonical/Figma identity to low-fidelity H5 or HTML prototype output.
- `docs/` keeps human-readable references and case studies.
- `docs/generated/` keeps generated indexes derived from canonical data.

## Current Status

This is a first-stage MVP scaffold. It is not a full rewrite of the existing design skill.

The first working slice focuses on:

1. latest component brief authoring workflow
2. color tokens
3. Figma variable binding
4. route-only `SKILL.md`
5. executable visual review checklist
6. human/Agent component brief workflow
7. Figma binding, component semantics, audit chain, radius, and typography additions
8. component-level canon, review checklists, Figma binding map, YAML schemas, and generated component docs index
9. aesthetic entrypoint for visual generation, visual audit, design tasting, hierarchy, density, and polish

## Principle

Schema and canon files carry truth. Markdown explains truth. Bindings locate resources. Checklists govern output.

`DESIGN.md` should stay as the entrypoint and reading protocol, not a duplicate copy of every token table. It may summarize foundation principles, source priority, conflict resolution, and file locations. Exact colors, typography values, radius values, theme mappings, and component metrics should remain in `canon/` or the referenced foundation files.

Humans should edit `authoring/` first. Agents expand briefs into `canon/`, `bindings/`, `canon/checklists/`, and `docs/generated/`.

For component work, use `authoring/components/index.yaml` and the matching `authoring/components/{component-id}.brief.yaml` first. The latest component brief files are the current source for component purpose, usage scenarios, risk boundaries, zones, pairings, and examples.

For visual generation or aesthetic review, start with `DESIGN.md`. Use its foundation map to locate color, theme, typography, radius, financial semantics, fonts, and asset sources. Use canon files for exact values, foundation references for implementation rules, and visual-language references for atmosphere, composition, hierarchy, density, icon policy, and design-tasting judgment.

Figma component IDs are the primary design source for maintained components. Local SVGs, PNGs, fonts, and JSON templates are offline references and prototype fallback assets unless a matching Figma binding is verified.
