# Screen Archetypes

Use archetypes before selecting components. The goal is to identify the user's primary job, first-viewport promise, density mode, required zones, and forbidden substitutions.

## Supported Archetypes

- `market_overview`: browse market state, breadth, and leaderboard previews.
- `watchlist`: scan tracked symbols and row-level signals.
- `grouped_signal`: browse symbols by signal group and switch active groups.
- `trading_search`: search by code/name and enter trading or detail flows.
- `assistant_panel`: complete AI-assisted question, screening, or follow-up workflows where assistant content is primary.
- `detail_list`: inspect a stock, sector, theme, or metric-specific detail page.
- `account`: inspect assets, holdings, cash, or account status.

## Decision Workflow

1. List visible business objects: market summary, index numbers, stock rows, account values, search field, chart, tabs, tags, assistant content, bottom dock.
2. Identify the primary user job. Prefer financial/account jobs over assistant framing unless assistant content is the actual page subject.
3. Select the closest archetype from `registry/screen-recipes.yaml`.
4. Extract required zones, optional zones, fallback order, forbidden substitutions, first-viewport goals, default density mode, and default hero zone.
5. Select one composition pattern from the recipe.
6. Resolve zone-appropriate components using `registry/component-semantics.yaml` and foundation component references.
7. Mark strong-maintenance components from `registry/critical-figma-bindings.yaml`.

## Output Contract

For generation or redesign, return:

```yaml
screen_archetype:
primary_job:
composition_pattern:
density_mode:
hero_zone:
required_zones:
optional_zones:
first_viewport_goals:
scan_priority:
recommended_components:
forbidden_components:
figma_binding_requirements:
page_skeleton:
assumptions:
```

Keep the result operational. Do not replace structured decisions with mood language.

## Guardrails

- Do not invent a new archetype unless the page cannot reasonably map to any supported archetype.
- Do not use signal tags, capsules, assistant chrome, or decorative atmosphere as a substitute for required market/account/list content.
- On `market_overview`, leaderboard modules should default to compact horizontal slices in the first viewport.
- On `watchlist`, dense list header and dense rows are primary.
- On `account`, account summary and holdings/funds entries are primary.
- On `assistant_panel`, assistant content may be primary, but do not leak that pattern into market or account pages.
