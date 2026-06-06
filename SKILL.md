---
name: zhangle-agent-design-system
description: Use this skill to generate, review, repair, or prototype AI Zhangle / New Zhangle mobile design outputs through a schema-first, Agent-readable design-system repository.
---

# Zhangle Agent Design System

Use this as the Agent entrypoint. This file is a router, not the source of truth.

## Path Map

Use these paths by responsibility:

- `manifest.json`: machine-readable index for the whole repository. Load this first to discover entrypoints, canonical folders, schemas, bindings, and generated outputs.
- `SKILL.md`: Agent task router. Use it to decide what to load for generation, review, repair, Figma lookup, component work, page work, or token lookup.
- `DESIGN.md`: aesthetic system entrypoint. Use it for visual generation, visual review, design tasting, hierarchy, density, atmosphere, and source-priority decisions between Akun foundation rules and Dengpeng visual-language rules.
- `AGENTS.md`: repository-level Agent behavior rules. Use it for editing discipline, source-of-truth rules, and human-owned fields.
- `llms.txt`: short external LLM index. Use it when a lightweight overview is needed instead of the full repository.
- `README.md`: human-facing overview. Use it to understand what this package is and how it differs from `zhangle-design-skill`.
- `INSTALL.md`: team onboarding notes. Use it when someone needs to know how to point an Agent at this folder.
- `VERSIONING.md`: object lifecycle rules. Use it when adding or changing schema-backed canonical objects.
- `docs/references/change-history.md`: collaboration change record. Append an entry after meaningful repository changes, including Agent-made canon, binding, checklist, docs, schema, renderer, or workflow updates.
- `authoring/`: human-editing layer. Use this when a human wants to define component or scenario intent without editing complex canonical structures directly.
- `authoring/README.md`: explains how humans write simple briefs and how Agents expand them.
- `authoring/components/index.yaml`: latest component authoring index imported from the YAML fusion version. Load it first when adding, reviewing, or expanding component briefs.
- `authoring/components/*.brief.yaml`: latest human-maintained component briefs. Start here when adding or changing a component; these files are the primary source for component purpose, scenarios, risk boundaries, zones, pairings, and examples.
- `authoring/scenarios/*.brief.yaml`: human-maintained business scenario briefs. Start here when adding or changing a page/business route.
- `authoring/case-studies/`: human-authored examples, bugs, and review evidence.
- `.github/PULL_REQUEST_TEMPLATE.md`: PR review checklist for human-defined content, Agent-expanded content, and validation status.
- `agents/openai.yaml`: installed-agent interface metadata imported from the Akun fusion source.
- `schemas/`: schema definitions. Use this to validate whether canonical files are shaped correctly.
- `schemas/component.schema.json`: component metadata contract. Use it when creating or reviewing `canon/components/*.meta.yaml`.
- `schemas/checklist.schema.json`: executable checklist contract. Use it when creating or reviewing `canon/checklists/*.yaml`.
- `schemas/resource.schema.json`: resource reference contract. Use it when describing Figma files, Figma variables, local assets, docs, or code links.
- `schemas/component-brief.schema.yaml`: latest component brief contract. Use it to validate `authoring/components/*.brief.yaml`.
- `schemas/component-meta.schema.yaml`: latest component meta contract. Use it to validate expanded files in `canon/components/`.
- `schemas/checklist.schema.yaml`: latest component checklist contract. Use it to validate `canon/checklists/*-review.yaml`.
- `schemas/index.yaml`: schema index for the latest YAML component workflow.
- `canon/`: canonical source layer. This is where design-system truth should live.
- `canon/foundations/tokens/`: token source of truth. Use it for colors, typography, spacing, radius, and future design-token groups.
- `canon/foundations/tokens/color.tokens.json`: first-stage canonical color tokens. Use this instead of raw colors.
- `canon/foundations/tokens/xzl-token-mapping.source.json`: copied source mapping from the old package. Use only for provenance or migration checks.
- `canon/foundations/tokens/typography.tokens.json`: typography token source imported from the Akun foundation flow.
- `canon/foundations/tokens/radius.tokens.json`: radius token source imported from the Akun foundation flow.
- `canon/foundations/themes/`: theme mappings. Use this to resolve light/dark semantic roles.
- `canon/foundations/themes/light.theme.yaml`: light-mode semantic token mapping.
- `canon/foundations/themes/dark.theme.yaml`: dark-mode semantic token mapping.
- `canon/foundations/themes/product-line-overrides/`: reserved for market, trading, account, chat, or other product-line theme differences.
- `canon/foundations/semantics/`: domain semantics. Use this for financial color meaning and other product-specific rules.
- `canon/foundations/semantics/financial-semantics.yaml`: red/green financial meaning. Use it to prevent reversed market semantics.
- `canon/components/`: canonical component metadata. Use this for props, variants, states, slots, usage rules, bindings, and review checks.
- `canon/components/index.yaml`: latest component meta index. Use it to discover expanded component metadata files.
- `canon/components/*.meta.yaml`: Agent-expanded component metadata derived from the latest component briefs.
- `canon/components/component-semantics.yaml`: fusion component semantic registry. Use it for allowed zones, forbidden substitutions, and component role guidance.
- `canon/archetypes/`: page structure models. Use this for reusable page skeletons such as list, detail, form, and chat pages.
- `canon/archetypes/mobile-list-page.yaml`: first-stage mobile financial list page skeleton.
- `canon/archetypes/mobile-chat-page.yaml`: first-stage AI chat/message page skeleton.
- `canon/archetypes/ai-zhangle-screen-recipes.source.yaml`: copied source archetype recipes from the old package. Use for migration and comparison.
- `canon/archetypes/xzl-fusion-screen-recipes.yaml`: Akun fusion page recipes. Use it as the stronger fusion source for page zones, density, and forbidden substitutions.
- `canon/scenarios/`: business scenarios. Use this to map a task such as watchlist or AI chat onto archetypes, components, and checks.
- `canon/scenarios/watchlist.yaml`: watchlist business route and constraints.
- `canon/scenarios/ai-chat.yaml`: AI chat business route and fidelity constraints.
- `canon/checklists/`: executable validation rules. Use this before delivering generated or reviewed work.
- `canon/checklists/index.yaml`: latest component checklist index.
- `canon/checklists/*-review.yaml`: component-level executable review checklists derived from the latest component briefs.
- `canon/checklists/visual-review.yaml`: first-stage cross-surface visual review checklist.
- `canon/checklists/figma-generation-review.yaml`: second-pass Figma generation checklist mapped from `agents/openai.yaml`; use it after Figma screen generation to turn prompt constraints into concrete pass/fail repair items.
- `canon/checklists/page-output-checklist.source.json`: copied source checklist from the old package. Use for migration and comparison.
- `canon/checklists/radius-output-checklist.source.json`: copied radius checklist from the fusion source. Use for migration and radius review.
- `bindings/`: connection layer. Use this to locate Figma resources, local assets, and future code links without polluting canonical rules.
- `bindings/figma/`: Figma binding layer. Use this for files, variables, components, nodes, and future Code Connect or Dev Resources links.
- `bindings/figma/files.yaml`: known Figma file keys and their roles.
- `bindings/figma/variables.yaml`: canonical token to Figma variable mapping candidates.
- `bindings/figma/critical-bindings.yaml`: strong Figma component binding registry from the Akun fusion source. Use it for high-risk controls before Figma generation or review.
- `bindings/figma/components.yaml`: latest component-level Figma binding map. Use it alongside `critical-bindings.yaml`; do not treat `TODO_VERIFY_WITH_FIGMA` entries as confirmed component keys.
- `bindings/figma/components.source.yaml`: copied source Figma component registry. Use for exact component names, variant hints, and migration.
- `bindings/assets/`: local asset binding layer. Use this to locate copied fonts, icons, backgrounds, templates, examples, and token files.
- `bindings/assets/manifest.yaml`: local asset index. Use this before referencing a file under `bindings/assets/files/`.
- `bindings/assets/manifest.yaml` also maps latest brief paths such as `assets/tokens/`, `assets/templates/`, and `assets/examples/` to the main repo's `bindings/assets/files/` storage.
- `bindings/assets/files/`: copied asset files from `zhangle-design-skill/assets/`. Use as the physical file store, not as semantic truth.
- `bindings/assets/fusion-files/`: copied asset files from the Akun fusion source. Use as offline references, prototype fallbacks, and visual evidence.
- `docs/`: human-readable explanation layer. Use this for background, examples, case studies, and long-form reference reading.
- `docs/references/`: copied reference documents from the old package. Use when prose detail is needed after canonical files.
- `docs/references/authoring-workflow.md`: human/Agent component brief workflow. Use it to understand how brief files become formal repo files.
- `docs/references/component-brief-workflow.md`: latest component brief workflow from the YAML fusion version. Use this as the current source for component brief zone format and expansion rules.
- `docs/references/foundations/tokens.md`: Akun foundation token usage rules. Use this as the primary prose rule for token use.
- `docs/references/foundations/typography.md`: Akun foundation typography and financial numeric font rules. Use this as the primary prose rule for font implementation.
- `docs/references/foundations/visual-language.md`: Dengpeng visual language and aesthetic reference. Use this for atmosphere, composition, density, hierarchy, icon policy, and design intent after foundation values are loaded.
- `docs/references/process/design-taster.md`: Dengpeng design-tasting review process adapted for AI Zhangle. Use this after the archetype and component set are selected.
- `docs/references/process/impeccable-adaptation.md`: AI Zhangle-specific aesthetic anti-pattern lens.
- `docs/references/git-collaboration.md`: Git branch and PR workflow for multi-person collaboration.
- `docs/references/change-history.md`: required modification log for collaborators and Agents.
- `docs/references/figma-binding-policy.md`: strong/weak/archive Figma binding policy imported from the Akun fusion source.
- `docs/references/source-boundaries.md`: source precedence and conflict-resolution rules from the Akun fusion source.
- `docs/references/visual-audit-chain.md`: review chain from intent reading through repair brief generation.
- `docs/references/anti-patterns.md`: named structural, visual, and production-quality anti-patterns.
- `docs/case-studies/`: reserved for structured good/bad examples and historical design bugs.
- `docs/generated/`: generated human-readable docs derived from canonical data.
- `docs/generated/components/index.md`: generated component documentation index. Keep this index-only unless long-form docs are explicitly requested.
- `docs/generated/`: generated human-readable indexes derived from canonical data. Do not edit these as source of truth.
- `renderers/`: low-fidelity renderer layer. Use it when generating H5 or HTML prototypes.
- `renderers/html/component-renderers.yaml`: maps canonical/Figma component identity to low-fidelity HTML renderer strategies.
- `renderers/html/page-renderers.yaml`: maps scenarios and archetypes to low-fidelity HTML page renderer strategies.
- `sources/`: provenance notes. Use this to record where source material came from and how it was migrated.
- `sources/README.md`: current source-package note pointing back to `zhangle-design-skill`.
- `sources/fusion-akun/README.md`: source record for the Akun fusion package merge.
- `tests/`: validation fixtures and checks. Use this for schema, checklist, and regression tests.
- `tools/`: import, export, validation, and build scripts. Use this for future automation.

## Always Start

1. Identify the task type:
   - design generation
   - design review
   - Figma binding lookup
   - component specification
   - page or business scenario specification
   - component or scenario brief authoring
   - H5 / HTML low-fidelity prototype generation
   - token lookup
   - visual generation or aesthetic review
2. Load `manifest.json`.
3. Load `DESIGN.md` when the task involves visual generation, visual review, aesthetic direction, design tasting, hierarchy, density, polish, or "does this look right".
4. Load only the matching canonical files from `canon/`.
5. Resolve Figma or local assets through `bindings/`.
6. Run the relevant checklist from `canon/checklists/`. For Figma screen generation, always include `canon/checklists/figma-generation-review.yaml`.
7. If `agents/openai.yaml` changes in `default_prompt`, `component_first_figma_generation_prompt`, or `interface.checklist_system.promptToChecklistMappings`, run `ruby tools/sync-openai-checklist-map.rb` before validation so `canon/checklists/figma-generation-review.yaml` stays mapped to the prompt rules.
8. If you changed repository files, append a concise entry to `docs/references/change-history.md` with author, time, change summary, touched areas, and validation result.

## Load By Task

### Component Generation

Load:

- `authoring/components/index.yaml`: discovers the available latest component briefs and source references.
- `authoring/components/{component-id}.brief.yaml`: primary source for component purpose, scenarios, risk boundaries, zones, pairings, examples, and status.
- `docs/references/component-brief-workflow.md`: provides the three-zone brief model and human/Agent/Figma responsibility split.
- `schemas/component-brief.schema.yaml`: validates the human-authored brief shape.
- `schemas/component.schema.json`: validates the component metadata shape.
- `schemas/component-meta.schema.yaml`: validates latest expanded component metadata when using the YAML workflow.
- `canon/foundations/tokens/color.tokens.json`: provides canonical color tokens.
- `canon/components/button.meta.yaml` or the matching component file: provides component props, variants, states, usage rules, and review checks.
- `canon/checklists/{component-id}-review.yaml`: validates the component-specific output.
- `bindings/figma/components.yaml`: provides component-level Figma binding status, variant hints, and verification gaps.
- `bindings/figma/critical-bindings.yaml` when the component is high-risk or must be a real Figma instance: provides strong binding requirements.
- `bindings/figma/components.source.yaml` when Figma components are involved: provides exact Figma component names, hints, and binding cautions.
- `canon/checklists/visual-review.yaml`: validates the output before delivery.

### Component Brief Authoring Or Expansion

Load:

- `docs/references/component-brief-workflow.md`: current source for the component brief format.
- `authoring/components/index.yaml`: component brief entry list.
- `authoring/components/{component-id}.brief.yaml`: human-owned judgment and Agent-extracted facts.
- `schemas/component-brief.schema.yaml`: brief validation.
- `canon/components/{component-id}.meta.yaml`: Agent-expanded component metadata.
- `canon/checklists/{component-id}-review.yaml`: component review checklist.
- `bindings/figma/components.yaml`: component-level Figma binding map.
- `docs/generated/components/index.md`: generated component docs index.

Keep `01_HUMAN_REQUIRED` fields human-authored or human-approved. Agents may draft structure, extract Figma facts, and expand canon/checklist/binding outputs, but must mark uncertain facts with `TODO_HUMAN_CONFIRM` or `TODO_VERIFY_WITH_FIGMA`.

### Page Or Scenario Generation

Load:

- `DESIGN.md` when the task asks for visual generation, redesign, aesthetic direction, or a complete screen.
- `docs/references/foundations/visual-language.md`: applies AI Zhangle atmosphere, density, hierarchy, dark/light posture, icon policy, and composition rules.
- `docs/references/foundations/tokens.md` and `docs/references/foundations/typography.md`: apply Akun foundation token and font rules before visual polish.
- `authoring/scenarios/*.brief.yaml` when the scenario is new or human intent is being revised: provides product-owned scenario judgment.
- `canon/archetypes/*.yaml`: provides page skeletons and zone structure.
- `canon/scenarios/*.yaml`: maps business intent to archetypes, components, and constraints.
- matching `canon/components/*.meta.yaml`: provides the component-level rules needed by the page.
- `bindings/assets/manifest.yaml`: resolves local assets such as icons, fonts, backgrounds, templates, and examples.
- `canon/checklists/visual-review.yaml`: validates the full page or scenario output.
- `canon/checklists/figma-generation-review.yaml`: validates component coverage, fixed chrome, Auto Layout, fallback labels, annotations, themes, and screenshot/metadata before delivery.

### Aesthetic Direction Or Design Tasting

Load:

- `DESIGN.md`: aesthetic source priority and route.
- `docs/references/foundations/visual-language.md`: visual language, atmosphere, layout, density, hierarchy, typography principles, iconography, and composition rules.
- `docs/references/process/design-taster.md`: structured design-tasting workflow and polish order.
- `docs/references/process/impeccable-adaptation.md`: AI Zhangle-specific aesthetic anti-patterns.
- `docs/references/visual-audit-chain.md`: review chain for intent, visual audit, evidence, and repair brief.
- `docs/references/anti-patterns.md`: named visual and structural issues.
- `docs/references/foundations/tokens.md`, `docs/references/foundations/typography.md`, `canon/foundations/tokens/*.json`, and theme files before changing any color, font, radius, or spacing.

Source priority: use Akun foundation files for numeric values and implementation rules; use Dengpeng visual-language files for aesthetic judgment and missing composition guidance.

### H5 Or HTML Low-Fidelity Prototype

Load:

- matching `canon/scenarios/*.yaml`: identifies the business route.
- matching `canon/archetypes/*.yaml`: provides the page skeleton.
- matching `canon/components/*.meta.yaml`: provides component identity and usage rules.
- `bindings/figma/critical-bindings.yaml`: verifies maintained component identity where available.
- `renderers/html/component-renderers.yaml`: maps components to low-fidelity DOM/CSS strategies.
- `renderers/html/page-renderers.yaml`: maps page shells to low-fidelity HTML strategies.
- `bindings/assets/manifest.yaml`: resolves local fallback assets for prototype use only.
- `canon/checklists/visual-review.yaml`: validates the prototype as low-fidelity output.

### Visual Review

Load:

- `DESIGN.md`: aesthetic review route and source priority.
- `canon/checklists/visual-review.yaml`: provides executable review rules.
- matching component, archetype, and scenario files: provides the expected source rules for the reviewed surface.
- `docs/references/foundations/review-report.md`: provides the human-readable report format and severity language.
- `docs/references/process/design-taster.md`: provides hierarchy, density, layout, typography, icon, theme, chart, and polish checks.
- `docs/references/foundations/visual-language.md`: provides AI Zhangle aesthetic intent and composition rules.

### Token Or Theme Lookup

Load:

- `canon/foundations/tokens/color.tokens.json`: canonical color token values.
- `canon/foundations/themes/light.theme.yaml`: light-mode semantic mappings.
- `canon/foundations/themes/dark.theme.yaml`: dark-mode semantic mappings.
- `canon/foundations/tokens/xzl-token-mapping.source.json` if source provenance is needed: old-package mapping used for migration checks, not the editing truth.

## Non-Negotiable Rules

- Do not use raw colors outside token source files.
- Do not treat `generated/` files as editable truth.
- Do not guess Figma component variants or variable names.
- Do not treat local SVGs, PNGs, fonts, or JSON templates as real Figma component instances.
- For maintained components, Figma component IDs are the primary design source.
- H5 prototypes may use Figma IDs as component identity evidence, but must render through `renderers/html/` rules.
- Do not turn financial pages into generic dashboard cards.
- Do not skip checklist validation before delivery.
- Keep high-risk financial interaction rules human-authored and human-reviewed.

## Output Expectations

For generation:

- task type
- loaded canonical files
- tokens used
- component or scenario decisions
- Figma/local asset bindings
- checklist summary
- Figma generation checklist summary when the output target is Figma
- open gaps

For review:

- severity
- location
- violated rule
- current behavior
- expected behavior
- suggested fix
- source file
