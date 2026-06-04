# Top Nav Source Drift Case

## Problem

- A local out-of-skill asset was used to replace the source-faithful sidebar entry orb.
- Dark mode reused a light-mode semantic text value.
- Glass background, local stroke, and glow effects were approximated instead of following node-specific values.

## Cause

- The source node was not locked before implementation started.
- Semantic token naming existed, but theme resolution was not enforced.
- Shared tokens and node-private visual values were not separated clearly enough.

## Lesson

- Follow fixed source priority: Figma source node, then in-skill bound asset, then in-skill fallback.
- Theme mapping must be resolved as a paired light/dark contract rather than a single reused token value.
- Node-private visual values do not need to be forced into global tokens when they are component-specific and not shared.
