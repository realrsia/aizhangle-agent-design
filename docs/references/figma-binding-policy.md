# Figma Binding Policy

Use this policy when creating, editing, or reviewing Figma screens.

## Binding Source Model

- Figma is the final truth for current component existence, component key, exact name, variant properties, variant values, and text override targets.
- `registry/critical-figma-bindings.yaml` is the maintained registry for high-risk components.
- Foundation component references define design semantics and visual rules.

## Maintenance Levels

### Strong

Strong components require real library instances in Figma:

- navigation bars
- tabs and segmented controls
- tags and badges
- bottom bars and bottom docks
- inputs and trading inputs
- list headers
- trading-critical controls

For strong components:

- verify `component_key` or exact component name
- verify variant/property names
- verify allowed variant values
- verify text override targets before overriding text
- stop and recheck when metadata is missing or stale

### Weak

Weak components are semantic guidance:

- backgrounds
- cards and ordinary surfaces
- summary modules
- leaderboard modules
- assistant modules
- ordinary visual modules

For weak components, enforce allowed placement, token usage, density, and visual role. A missing Figma key is not a blocker unless the task explicitly requires library instantiation.

### Archive

Archive items are examples, historical experiments, and one-off outputs. Do not use them as normative sources.

## Verification Result

When Figma binding matters, include:

```yaml
figma_binding_status:
  verified:
  stale_or_unknown:
  blocked:
  strong_components_checked:
  weak_components_used:
  next_recheck_needed:
```

## Update Rule

When the user asks to sync with Figma or when binding fails:

1. Inspect the target Figma component or frame.
2. Compare current metadata with `critical-figma-bindings.yaml`.
3. Update only strong component entries unless the user explicitly asks to maintain weak entries.
4. Record `verified_at`, `source_file_key`, and uncertainty notes.

Do not silently guess updated variants or text override targets.
