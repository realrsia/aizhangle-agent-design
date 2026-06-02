# Design Taster

## Purpose

Use this skill after page composition is already defined. This skill reduces AI-slop by auditing hierarchy, density, theme binding, and icon consistency without replacing the chosen archetype.

This skill is inspired by the method of [Impeccable](https://github.com/pbakaus/impeccable), but it is a project-local adaptation for AI Zhangle rather than a dependency on an external command system.

## Required Read Order

Before using this skill, read:

1. `DESIGN.md`
2. `registry/screen-recipes.yaml`
3. `registry/components.yaml`
4. `registry/icons.yaml` when icon usage is present
5. The structured output from `financial-interaction-designer`

## Inputs

Expected inputs:

- `screen_archetype`
- `page_skeleton`
- `recommended_components`
- current draft layout or design description

## Output Contract

Always return a structured result with these fields:

- `component_binding_checks`
- `text_clipping_checks`
- `throughput_issues`
- `space_efficiency_checks`
- `hierarchy_issues`
- `typography_issues`
- `density_issues`
- `layout_issues`
- `theme_binding_checks`
- `chart_source_checks`
- `rank_interaction_checks`
- `icon_recommendations`
- `polish_actions`

The result should explain what to tighten or remove, not rewrite the entire screen brief.

## Workflow

1. Audit component binding: confirm the chosen Figma component, variant-property names, variant values, and text override targets actually match the real library component.
2. Audit text clipping: check line-height, frame height, clip settings, and fixed-height text containers before any visual polish.
3. Audit typography: force all text back onto the verified type ramp from `DESIGN.md`.
4. Audit layout: confirm cards, modules, rows, and chart wrappers use Auto Layout so text and data do not break the frame.
5. Audit throughput: check whether the first viewport is carrying enough finance-relevant information for the requested density mode.
6. Audit space efficiency: check whether weak modules, empty gaps, or oversized context blocks are consuming space better used by summary, list, or preview structures.
7. Check rank interaction: on overview screens, leaderboard modules should default to horizontal swipe slices, not tall vertical piles.
8. Normalize density: remove tertiary controls, excessive tags, and duplicate pills before changing spacing or color.
9. Audit hierarchy: check whether the primary market or account information reads first.
10. Check theme binding: confirm dark/light variants preserve token role and component geometry.
11. Check chart source: confirm real financial charts come from chart-library output such as `ECharts`, not arbitrary shape drawing.
12. Audit icon policy: keep one outline family per screen and stay inside Lucide, using `registry/icons.yaml` plus semantic substitutes when exact symbols are unavailable.
13. Emit a short list of polish actions that preserve the original archetype and component intent.

## Internal Steering Actions

Use these actions as internal review steps:

- `audit_hierarchy`
- `audit_typography_ramp`
- `audit_auto_layout`
- `audit_component_binding`
- `audit_text_clipping`
- `audit_throughput`
- `audit_space_efficiency`
- `normalize_density`
- `check_chart_source`
- `check_rank_interaction`
- `trim_tag_noise`
- `check_theme_binding`
- `check_icon_consistency`
- `polish_focus`

These are not external dependencies. They are repo-local review verbs.

## Hard Rules

- Do not change the selected `screen_archetype`.
- Do not replace the main component family with a stylistically prettier but semantically wrong one.
- Do not introduce new colors, radii, typography ramps, or spacing systems.
- Do not convert finance screens into marketing hero layouts, generic dashboard cards, or SaaS-style gradient canvases.
- Do not increase decorative atmosphere when the actual problem is structural ambiguity.
- Do not solve a missing icon by mixing a second icon family or introducing a font-icon pack.
- Do not solve hierarchy problems by enlarging text beyond the verified type ramp.
- Do not accept broken card or module structure when Auto Layout would solve the problem.
- Do not treat manually drawn shape charts as valid production-chart output.
- Do not accept guessed variant property names or made-up component overrides when the real Figma component can be checked first.
- Do not enter visual polish if high-risk controls are not correctly bound to library instances.
- Do not enter visual polish if text clipping still exists in tabs, nav titles, tags, leaderboard titles, or other primary controls.
- Do not accept finance screens that are structurally valid but under-filled relative to the requested density mode.
- Do not mistake oversized spacing, oversized context blocks, or preview underuse for premium layout quality.

## Preferred Fix Order

When a draft feels wrong, fix issues in this order:

1. Restore valid component binding
2. Restore text clipping safety
3. Restore typography to the verified ramp
4. Restore Auto Layout structure
5. Restore throughput and viewport allocation
6. Restore correct leaderboard interaction
7. Remove tertiary controls
8. Reduce capsule and tag count
9. Restore subject hierarchy
10. Restore valid chart sourcing
11. Tighten icon consistency
12. Adjust atmosphere only if the hierarchy is already correct

## Failure Conditions

Treat the polish pass as wrong if any of these happen:

- High-risk controls are not true component instances
- Text in tabs, nav titles, tags, leaderboard titles, or other primary controls is clipped
- The first viewport carries too little business information for the requested density
- Oversized gaps or weak modules consume space needed by core summary, row, or preview information
- The page becomes visually cleaner but less obviously financial
- The page loses its high-density scanning quality
- Theme switching changes geometry instead of token roles
- Text sizes drift off the verified ramp
- Text or values break cards or modules because Auto Layout is missing
- Guessed component variants or property names do not match the real Figma component schema
- A real chart is built from arbitrary shapes instead of chart-library output
- A second icon family or font-icon pack is introduced
- Overview榜单 modules are stacked vertically where horizontal swipe slices are expected
- Decorative polish displaces the main summary, list, or account blocks

## Related Reference

For the project-local adaptation of Impeccable ideas and AI Zhangle-specific anti-patterns, see `references/impeccable-adaptation.md`.
