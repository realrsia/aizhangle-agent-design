# Visual Audit Chain

Use this workflow for review, audit, critique, Figma comments, and repair briefs.

## Step 1: Design Intent Reader

Purpose: identify what the screen is trying to do before scoring it.

Inputs:

- screenshot or Figma frame
- designer note or product context if available
- target theme and device if known
- current or guessed page type

Output:

```yaml
intent_summary:
  inferred_screen_archetype:
  confidence:
  primary_job:
  target_user_read:
  theme:
  device:
  density_expectation:
expected_structure:
  hero_zone:
  required_zones:
  optional_zones:
  first_viewport_goals:
  expected_scan_path:
review_standard:
  recommended_components:
  high_risk_controls:
  forbidden_substitutions:
  key_anti_patterns:
assumptions:
handoff_to_visual_auditor:
```

Do not score in this step.

## Step 2: Visual Auditor

Purpose: score and diagnose whether the screen matches the design system.

Hard failure gates:

- primary controls or data modules have visible text clipping
- custom content collides with safe area, Dynamic Island, or bottom dock
- strong components are lookalike frames instead of real Figma instances
- required zones are missing
- production financial charts are hand-drawn arbitrary shapes
- page is reviewed under the wrong archetype
- primary business content is displaced by decoration or assistant chrome

Score dimensions when scoring is requested:

- page intent and structure
- component semantics and allowed placement
- hierarchy, density, and scan path
- theme, typography, icon, and color semantics
- layout stability and content resilience
- brand fit and taste

## Step 3: Figma Review Agent

Use when a Figma frame is available and comments/evidence are needed.

Verify:

- strong components are real instances
- component names, keys, variants, and text targets match registry/Figma
- text clipping and Auto Layout facts
- safe area and bottom dock stability
- chart source plausibility
- icon family and semantic use
- overview leaderboards use compact horizontal slices when expected

Comments should be local, actionable, and grouped by root cause.

## Step 4: Repair Brief Generator

Turn audit findings into designer-facing actions.

Use this order:

1. Restore correct page task and required zones.
2. Restore strong component bindings.
3. Fix text clipping, safe area, and layout stability.
4. Rebuild primary/secondary/tertiary hierarchy.
5. Remove excessive tags, capsules, cards, and low-value empty space.
6. Normalize theme, typography, icon, and color semantics.
7. Polish atmosphere last.

Repair brief sections:

- Summary
- Fix First
- Then Polish
- Keep As Is
- Acceptance Checklist
- Open Questions
