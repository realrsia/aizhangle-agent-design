# Authoring Workflow

This folder is the human-editing layer.

Humans should write simple briefs here. Agents expand those briefs into `canon/`, `bindings/`, `canon/checklists/`, and `docs/generated/`.

Core principle:

> Humans write judgment. Agents write structure. Figma provides facts. Git reviews changes. Checklists govern delivery.

## What Humans Edit

- `authoring/components/index.yaml`: component brief index. Use it to find the current brief file and source references.
- `authoring/components/*.brief.yaml`: component intent, usage rules, risk warnings, zones, pairings, and examples.
- `authoring/scenarios/*.brief.yaml`: business scenario intent, required page structure, component needs, and forbidden patterns.
- `authoring/case-studies/*.md`: good examples, bad examples, historical bugs, and review evidence.

For component work, the latest YAML fusion version is the current source for this layer. Keep each component brief in three zones:

- `01_HUMAN_REQUIRED`: purpose, scenarios, rules, risk warnings, zones, pairings, examples, and status.
- `02_AGENT_EXTRACTED`: Figma facts, observed structure, variants, states, slots, tokens, and resource refs.
- `03_AGENT_EXPANSION_AND_CHECKLIST`: review checklist and target output paths.

Use `TODO_HUMAN_CONFIRM` for unresolved human decisions and `TODO_VERIFY_WITH_FIGMA` for unverified Figma facts.

## What Agents Expand

From a component brief, Agent may update:

- `canon/components/*.meta.yaml`
- `canon/checklists/*-review.yaml`
- `bindings/figma/components.yaml`
- `bindings/assets/manifest.yaml` when asset references change
- `docs/generated/components/index.md`

From a scenario brief, Agent may update:

- `canon/scenarios/*.yaml`
- `canon/archetypes/*.yaml`
- `canon/checklists/*.yaml`
- `docs/generated/scenarios/*.md`

## Required Review

Human reviewers must approve:

- `purpose`
- `usedIn`
- `humanRules`
- `riskWarnings`
- `allowedZones`
- `forbiddenZones`
- `requiredPairings`
- `forbiddenPairings`
- `examples`
- `status`

Agents may draft these fields, but they are not final until reviewed by a human owner.

## Current Component Briefs

Use `authoring/components/index.yaml` as the entry point. The current first batch covers:

- bottom bar
- button
- card
- divider
- input
- overlay
- switch
- tabs
- tag
- trading action button
- trading input
