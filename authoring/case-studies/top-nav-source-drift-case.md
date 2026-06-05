# Top Nav Source Drift Case

## Context

- A local out-of-skill asset was used to replace the source-faithful sidebar entry orb.
- Dark mode reused a light-mode semantic text value.
- Glass background, local stroke, and glow effects were approximated instead of following node-specific values.
- Semantic token naming existed, but theme resolution and source priority were not enforced before implementation started.

## Expected Behavior

- Lock the Figma source node before implementation starts.
- Follow fixed source priority: Figma source node, then in-skill bound asset, then in-skill fallback.
- Resolve theme mapping as a paired light/dark contract rather than a single reused token value.
- Keep shared tokens separate from node-private visual values when the values are component-specific and not shared.
- Preserve node-specific glass background, stroke, and glow values instead of approximating them from local assets.

## Common Mistakes

- Implementation started before the source node was locked.
- A local visual asset was treated as equivalent to the maintained Figma source.
- Light-mode semantic text values were reused in dark mode without validating the dark token contract.
- Component-specific visual effects were forced into generic token assumptions instead of being recorded as node-private values.

## Related Rules

- `bindings/figma/components.yaml`
- `bindings/figma/critical-bindings.yaml`
- `canon/components/component-semantics.yaml`
- `docs/references/visual-audit-chain.md`
- `docs/references/anti-patterns.md`
