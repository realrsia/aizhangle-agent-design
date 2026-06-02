# Source Boundaries

## Merge Decision

Treat AI Zhangle and New Zhanle as one design system. This fusion skill is offline complete and contains both the foundation layer and AI Zhangle-specific product-structure layer.

Do not depend on `/Users/zoc/.codex/skills/xzl-design-system` at runtime.

## What Is Merged

- AI Zhangle screen archetypes, recipes, zones, density modes, and first-viewport promises.
- AI Zhangle component placement semantics and forbidden substitutions.
- Critical Figma binding policy for high-risk controls.
- Example frame registry for retrieval and validation.
- Visual audit chain: Design Intent Reader, Visual Auditor, Figma Review Agent, Repair Brief Generator.
- AI Zhangle anti-patterns such as tag wall, card salad, agent drift, rank drift, type drift, icon drift, chart drift, and layout drift.

## What Is Not Merged As A New Truth Source

- Duplicate color values, typography values, radii, spacing, or component metrics from AI Zhangle prose when local foundation assets already define them.
- Process logs, Feishu document creation notes, `.git`, `.DS_Store`, and one-off output artifacts.
- Repo-local `SKILL.md` files as nested skills. Their procedural knowledge is converted into references instead.

## Conflict Resolution

Use this order:

1. Local foundation token and template assets from `assets/` for numeric values.
2. Fusion screen recipes for page archetype, zones, density, and forbidden substitutions.
3. Fusion critical binding registry for Figma instance requirements.
4. Figma as final evidence for current component existence, keys, variants, and text override targets.

If foundation token values conflict with AI Zhangle prose, keep the foundation asset value and note the semantic conflict.

If a screen recipe conflicts with a component placement rule, use the more specific component rule unless it removes a required zone. If it removes a required zone, stop and ask for product/design clarification.

## Maintenance Levels

`strong` means the registry is a maintained fact source and must be rechecked against Figma when stale.

`weak` means the registry is semantic guidance. It can guide placement, review, and prototypes, but missing or stale Figma keys are not blockers.

`archive` means the material is a historical example or one-off artifact. Do not use it as a normative rule.
