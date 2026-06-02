# Git Collaboration Workflow

Use Git branches and PRs to keep human judgment, Agent expansion, and review visible.

## Branch Shape

Prefer one topic per branch:

- `feature/button-brief`
- `feature/trading-action-button-brief`
- `feature/tag-brief`
- `feature/bottom-bar-binding`
- `feature/watchlist-scenario`

## PR Scope

Each PR should focus on one of:

- one component
- one page scenario
- one token group
- one checklist
- one case study
- one Figma binding group

## Expected PR Contents

- changed `authoring/*.brief.yaml`
- Agent-expanded `canon/` files
- Agent-updated `bindings/` files
- checklist changes
- generated docs when applicable
- validation results

## Review Rule

Humans review intent, risk boundaries, allowed/forbidden usage, and examples.

Agents validate structure, sync fields, detect missing bindings, and run checks.
