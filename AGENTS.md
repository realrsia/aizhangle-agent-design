# Agent Instructions

This repository is schema-first. Prefer canonical files over prose.

## Read Order

1. `manifest.json`
2. `SKILL.md`
3. `DESIGN.md` when the task involves visual generation, aesthetic review, design tasting, hierarchy, density, atmosphere, or polish
4. `authoring/components/index.yaml` and the matching component brief when the task is about adding or changing a component
5. `docs/references/component-brief-workflow.md` when the task touches component brief format or expansion
6. `authoring/` scenario brief when the task is about adding or changing a scenario
7. matching files under `canon/`
8. matching files under `bindings/`
9. renderer files under `renderers/` when the task is H5 / HTML low-fidelity prototype generation
10. human explanation under `docs/` only when needed

## Source Of Truth

- Tokens: `canon/foundations/tokens/`
- Components: `canon/components/`
- Archetypes: `canon/archetypes/`
- Business scenarios: `canon/scenarios/`
- Review rules: `canon/checklists/`
- Aesthetic entrypoint: `DESIGN.md`
- Visual language and design tasting: `docs/references/foundations/visual-language.md`, `docs/references/process/design-taster.md`, `docs/references/process/impeccable-adaptation.md`
- Figma bindings: `bindings/figma/`
- Local assets: `bindings/assets/manifest.yaml`
- Human brief inputs: `authoring/`
- HTML low-fidelity renderer rules: `renderers/html/`

## Editing Rules

- Keep IDs stable.
- Add `sourceRefs` when a file comes from prior work.
- Do not edit generated artifacts as truth.
- When adding a component, add or update:
  - `authoring/components/index.yaml`
  - `authoring/components/{component-id}.brief.yaml`
  - `canon/components/{component-id}.meta.yaml`
  - `canon/checklists/{component-id}-review.yaml`
  - `bindings/figma/components.yaml` when Figma facts or verification status change
  - schema files only if the format itself changes
- Do not treat local SVGs, PNGs, fonts, or JSON templates as maintained Figma component instances.
- For maintained components, Figma component IDs are the primary design source.
- HTML prototypes may use Figma IDs as component identity and binding evidence, but must render through local HTML renderer rules.
- For visual rules, Akun foundation/component files own numeric values and implementation details. Dengpeng design-generation files supplement atmosphere, composition, hierarchy, density, and design-tasting review.
- Do not introduce new color, typography, radius, or spacing systems from aesthetic notes when foundation files already define the value.

## Human-Owned Fields

Humans should author or approve:

- `description`
- `usageRules`
- `aiWarnings`
- `businessScenarios`
- financial risk boundaries
- destructive or trading-action rules
- `purpose`
- `usedIn`
- `humanRules`
- `riskWarnings`
- `allowedZones`
- `forbiddenZones`
- `requiredPairings`
- `forbiddenPairings`
- `examples`
- component `status`

Agents may draft, normalize, validate, and suggest improvements, but must not invent these rules as final truth.

## Collaboration Workflow

- Humans edit simple briefs in `authoring/`.
- Agents expand briefs into `canon/`, `bindings/`, `canon/checklists/`, and `docs/generated/`.
- For component work, use the latest YAML brief workflow: `01_HUMAN_REQUIRED`, `02_AGENT_EXTRACTED`, and `03_AGENT_EXPANSION_AND_CHECKLIST`.
- For visual generation or review, start with `DESIGN.md` and then load the smallest relevant foundation, component, scenario, and review files.
- PRs should focus on one component, one scenario, one token group, one checklist, one Figma binding group, or one case study.
- Use `.github/PULL_REQUEST_TEMPLATE.md` for review notes.
- Run JSON/YAML validation before merging.

## Fusion Source Rule

`sources/fusion-akun/` records the merge from the Akun fusion package.

Use imported fusion files as follows:

- `authoring/components/*.brief.yaml`: current component brief source for purpose, scenarios, risk boundaries, zones, pairings, and examples.
- `bindings/figma/components.yaml`: component-level Figma binding status and variant hints; entries marked `TODO_VERIFY_WITH_FIGMA` are not confirmed component keys.
- `bindings/figma/critical-bindings.yaml`: strong Figma binding requirements.
- `canon/components/component-semantics.yaml`: component semantic placement guidance.
- `canon/archetypes/xzl-fusion-screen-recipes.yaml`: fusion page recipes.
- `docs/references/visual-audit-chain.md` and `docs/references/anti-patterns.md`: review workflow and anti-pattern lenses.
- `bindings/assets/fusion-files/`: offline reference and prototype fallback assets.
