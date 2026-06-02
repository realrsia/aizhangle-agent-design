# Financial Interaction Designer

## Purpose

Use this skill when a request requires page composition for AI Zhangle product screens, especially `market_overview`, `watchlist`, `grouped_signal`, `detail_list`, or `account`.

This skill is responsible for choosing the right `screen_archetype`, ordering required zones, and shortlisting components that match the task. It is not a visual-styling skill.

## Required Read Order

Before using this skill, read:

1. `DESIGN.md`
2. `registry/screen-recipes.yaml`
3. `registry/components.yaml`
4. `registry/example-frames.yaml` when examples are needed
5. `registry/icons.yaml` when icon usage is part of the requested screen

## Inputs

Expected request inputs:

- `user_request`
- `theme`
- `device`
- `primary_job`

If any of these are implicit, infer them conservatively from the task and the core spec.

## Output Contract

Always return a structured result with these fields:

- `screen_archetype`
- `primary_job`
- `composition_pattern`
- `density_mode`
- `viewport_allocation`
- `scan_priority`
- `compression_rules`
- `expansion_rules`
- `hero_zone`
- `secondary_flow`
- `control_binding_priority`
- `required_zones`
- `optional_zones`
- `recommended_components`
- `forbidden_components`
- `page_skeleton`

Keep the output compact and operational. Do not return free-form mood language as the main result.

## Workflow

1. Determine the closest `screen_archetype` from the user request.
2. Read the matching recipe and extract required zones, optional zones, preferred composition patterns, default density mode, first-viewport goals, zone-weight targets, compression defaults, expansion triggers, default hero zone, and creative guardrails.
3. Determine the likely business scan intent from the prompt.
4. Choose exactly one `composition_pattern` that fits the prompt without changing required zones.
5. Choose `density_mode`, `viewport_allocation`, `scan_priority`, `compression_rules`, and `expansion_rules` so the first viewport serves that scan intent.
6. Resolve zone-appropriate components from `registry/components.yaml`.
7. Check the Figma binding hints for those components and prefer components with explicit binding coverage when multiple options exist.
8. Mark high-risk controls such as tabs, nav, tags, and bottom dock as `must_bind` in `recommended_components`.
9. Remove components that violate `allowed_zones`, `forbidden_pairings`, or recipe-level `forbidden_substitutions`.
10. Assemble a minimal page skeleton in top-to-bottom order, using structural rhythm, compression, and preview logic rather than decorative modules to create variation.
11. Emit explicit `forbidden_components` when the prompt is likely to trigger the wrong retrieval.

## Hard Rules

- Do not invent new tokens, colors, radii, spacing systems, typography scales, or component families.
- Treat `DESIGN.md` as the visual and structural authority, not as a shopping list.
- Use Auto Layout as the default structural layout mode for reusable modules and text-bearing containers.
- When text inside Auto Layout may wrap, plan for fill-width plus auto-height behavior instead of fixed text boxes.
- Treat tabs, nav, tags, and bottom dock as high-risk controls that must be instantiated from true library components, not approximated with plain frames.
- High-density finance pages should prefer `high_scan` density mode unless the prompt clearly calls for a calmer, more contextual page.
- `signal_tag` may annotate market rows or summaries, but it must never become the primary market body.
- `Agent` or companion components must not occupy `行情 / 自选 / 盯盘` primary content zones unless the recipe explicitly allows them.
- `market_overview` must begin with market summary structures such as index summary, breadth, ranking, or overview data before any assistant or decorative content.
- `market_overview` rank-list zones should default to horizontal swipe slices for leaderboard modules such as `热销榜` or `人气榜`.
- `watchlist` must prioritize dense list header plus dense rows before helper modules.
- `account` must prioritize account summary and dense entries before assistant or marketing modules.
- If the page contains a real financial chart, prefer chart-library output such as `ECharts` instead of manually drawn shapes.
- If icons are needed, prefer approved names from `registry/icons.yaml` before searching for alternatives.
- Use structure-level creativity only: vary focus, zone rhythm, and preview ordering without inventing new surfaces, extra tag systems, or pseudo-cards.
- Choose exactly one `composition_pattern` per screen.
- For market overview and watchlist first viewports, do not let empty atmosphere, explanatory text, or weak secondary modules consume more space than the main summary, list, or leaderboard preview.
- Compression is preferred over expansion unless the prompt explicitly asks for a context-heavy layout.

## Non-Goals

- Do not do aesthetic polishing.
- Do not select illustration style.
- Do not tune icon stroke language beyond the icon policy already defined by the core spec.
- Do not override the archetype after a downstream visual-polish pass.
- Do not treat structural creativity as permission to add modules outside the recipe or to weaken component-library binding.

## Failure Conditions

Treat the result as wrong and retry if any of these happen:

- A market page becomes mostly tags, capsules, or helper pills.
- An assistant module replaces index summary, market breadth, leaderboard, holdings, or other subject-matter blocks.
- A dense list page lacks a clear header/body relationship.
- Text or data breaks the module because the structure is not built with Auto Layout.
- The chosen component cannot be bound cleanly because the variant or property schema was guessed instead of verified.
- A real chart is represented by arbitrary hand-drawn shapes instead of chart-library output.
- A high-risk control is represented by a lookalike frame instead of a real component instance.
- The chosen composition pattern changes required zones or introduces decorative structures as false creativity.
- The first viewport leaves too much low-value empty space relative to the requested density.
- The chosen density mode does not match the user's scan intent or page type.
- The chosen component list conflicts with `allowed_zones` or recipe `forbidden_substitutions`.

## Default Coverage

Version 1 of this skill explicitly supports:

- `market_overview`
- `watchlist`
- `grouped_signal`
- `detail_list`
- `account`

If a request falls outside these archetypes, choose the closest supported archetype and state that the mapping is provisional.

## Related Reference

For prompt-to-archetype heuristics and common market-layout patterns, see `references/market-patterns.md`.
