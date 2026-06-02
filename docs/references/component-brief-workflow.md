# Component Brief Workflow

Use this reference when creating, rewriting, reviewing, or expanding Agent-readable component briefs for New Zhanle / AI Zhangle.

## Core Principle

Use this division of labor:

```text
Human writes judgment
Agent writes structure
Figma gives facts
Git does review
Checklist does governance
```

Do not let Agent decisions replace human-owned risk, purpose, scenario, or forbidden-zone decisions.

## Repository Shape

Use this structure for design-system specification repositories:

```text
authoring/
  components/
    {component-id}.brief.yaml

canon/
  components/
    {component-id}.meta.yaml
  checklists/
    {component-id}-review.yaml

bindings/
  figma/
    components.yaml
  assets/
    manifest.yaml

docs/
  generated/
    components/
      index.md

schemas/
  component-brief.schema.yaml
  component-meta.schema.yaml
  checklist.schema.yaml
```

`authoring/` is the human-maintained input. `canon/` and `bindings/` are Agent-expanded outputs after human confirmation. `docs/generated/` is optional and should stay index-only unless a user explicitly asks for long-form generated documentation.

## Brief Zone Model

Every component brief should use three fixed zones, in this order:

```text
01_HUMAN_REQUIRED
02_AGENT_EXTRACTED
03_AGENT_EXPANSION_AND_CHECKLIST
```

Use these markers:

```yaml
# [HUMAN REQUIRED]
# [AGENT GENERATED]
TODO_HUMAN_CONFIRM
TODO_VERIFY_WITH_FIGMA
TODO_AGENT_FILL
```

## 01_HUMAN_REQUIRED

Human-owned fields:

```yaml
id:
name:
owner:
status:
purpose:
usedIn:
humanRules:
  do: []
  dont: []
riskWarnings: []
allowedZones: []
forbiddenZones: []
requiredPairings: []
forbiddenPairings: []
examples:
  good: []
  needsReview: []
  bad: []
```

Rules:

- Put this zone first.
- Keep `id` stable and unique, usually `component.{slug}`.
- Use `status: draft | review | stable | deprecated`.
- Use `TODO_HUMAN_CONFIRM` when purpose, risk, zone, pairing, or examples need human ownership.
- Do not infer high-risk boundaries from visual style alone.

## 02_AGENT_EXTRACTED

Agent-owned factual fields:

```yaml
figma:
  fileName:
  fileKey:
  exampleNodeId:
  exampleNodeName:
  figmaExactName:
  componentKey:
  bindingMode: must_use_library_instance
  bindingFailurePolicy: stop_and_recheck
  propertyHints: {}

classification:
  primitiveFamily:
  componentType:
  riskLevel: low | medium | high
  isOrdinaryButton:
  isTradingAction:

observedStructure:
  root: {}
  children: []
  typography: {}
  tokens: {}

variants:
  confirmed: []
  candidates: []

states: []
slots: {}
tokens: {}
textOverrideFields: []
resourceRefs: []
```

Rules:

- Use Figma for actual component existence, component keys, variant properties, and text override targets.
- Mark unverified Figma facts as `TODO_VERIFY_WITH_FIGMA`.
- Keep confirmed variants separate from candidate variants.
- Do not use lookalike frames as production component evidence.
- For HTML prototypes, record visual equivalence only; do not claim Figma instance compliance.

## 03_AGENT_EXPANSION_AND_CHECKLIST

Expansion and governance fields:

```yaml
reviewChecklist:
  - id:
    severity: P0 | P1 | P2 | P3
    question:
    passCriteria:

agentExpansion:
  canonComponent:
    path: canon/components/{component-id}.meta.yaml
  checklist:
    path: canon/checklists/{component-id}-review.yaml
  figmaBinding:
    path: bindings/figma/components.yaml
  docs:
    path: docs/generated/components/index.md
  assetManifest:
    path: bindings/assets/manifest.yaml
```

Checklist items must be executable review questions, not broad principles. Avoid duplicating component summaries in generated docs when the brief and canon files already carry the same information.

## Recommended First Briefs

Start with:

```text
authoring/components/button.brief.yaml
authoring/components/trading-action-button.brief.yaml
authoring/components/tag.brief.yaml
```

This covers ordinary action, high-risk financial action, and semantic display components.

## Risk Classification

Do not flatten all buttons into `component.button`.

Use separate IDs when risk or governance differs:

```text
component.button
component.trading-action-button
component.destructive-button
component.link-button
```

High-risk examples:

- trading actions: buy, sell, cancel order
- destructive actions: delete, revoke, cancel
- compliance-sensitive actions: submit risk assessment, confirm authorization

High-risk components require human-defined boundaries and Figma binding verification before canon promotion.

## Validation Checklist

Before accepting a brief or generated canon output, check:

- YAML or JSON parses.
- Required human fields are present or marked `TODO_HUMAN_CONFIRM`.
- Figma `fileKey`, `nodeId`, `figmaExactName`, and `componentKey` are recorded or marked `TODO_VERIFY_WITH_FIGMA`.
- Variant properties are real and candidates are not promoted as confirmed.
- Text override fields are real or marked for verification.
- Required states include `default`, `pressed`, and `disabled`; loading is considered for submit/trading components.
- Tokens are used instead of raw color decisions where tokens exist.
- High-risk components are not treated as ordinary buttons.
- Allowed zones, forbidden zones, required pairings, and forbidden pairings are defined for high-risk components.
- Review checklist exists and includes severity, question, and pass criteria.

## PR Governance

Keep each PR scoped to one component, one page scenario, one token group, one checklist, or one case study.

PR summaries should include:

```markdown
## 本次新增 / 修改

## 人类定义内容

## Agent 自动补齐内容

## 待确认
```

List unresolved `TODO_HUMAN_CONFIRM` and `TODO_VERIFY_WITH_FIGMA` items explicitly.
