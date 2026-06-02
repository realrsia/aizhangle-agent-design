# Template Authoring

Use this file when adding or reviewing machine-readable templates under `assets/templates/`. It defines structure expectations only; component rules still live in `references/`.

## Checklist Templates

Checklist templates validate generated artifacts. They should use this shape:

- `name`: stable kebab-case template name.
- `description`: one sentence explaining the artifact being validated.
- `appliesTo`: list of surfaces or component families.
- `resultFormat`: allowed status values and required result fields.
- `checks`: ordered validation items.

Each item in `checks` should include:

- `id`: stable camelCase identifier.
- `severity`: `P0`, `P1`, `P2`, or `P3`.
- `mustPass`: boolean for required validation.
- `question`: user-readable validation question.
- `evidenceRequired`: concrete evidence expected from DOM, Figma, screenshot, measurement, asset path, token list, or structure.
- `fixIfFail`: actionable correction when the check fails.
- `appliesOnlyWhen`: optional condition for variant/state-specific checks.

## Component Templates

Component templates describe reusable component structure and metrics. Prefer this shape when applicable:

- `name`
- `description`
- `appliesTo`
- `requiredReferences` when a template depends on specific rules.
- `tokens` or token source references when token bundles apply.
- `metrics` for dimensions and spacing.
- `icons` or `stateAssets` for approved asset bindings.
- `components` or variant-specific structures.
- `validation` for template-level constraints.

## Module Templates

Module templates describe composed UI modules such as financial tables. Prefer this shape:

- `name`
- `description`
- `appliesTo`
- `requiredReferences`
- `module`
- `validation`

## Authoring Rules

- Do not put long prose rules into JSON when a `references/` file should hold the rule.
- Do not duplicate token numeric values when a token JSON is the numeric source.
- Do not create one-off local fields for a single prototype bug; add reusable fields or checklist items.
- Keep existing field names stable when downstream references may already use them.
- When adding a new checklist item, prefer a stable `id` and concrete evidence over broad visual language.
