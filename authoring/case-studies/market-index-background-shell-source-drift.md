## Market Index Background Shell Source Drift

## Context

- Background shell work mixed component family source nodes with first-screen usage instance nodes without making the source type explicit.
- A layered market shell was flattened into a generic dashboard-style card with simplified background, border, and shadow treatment.
- Light and dark shells were treated as palette swaps instead of structural variants with distinct glow, texture, stroke, and inner-effect relationships.
- Visual accidents such as dark edge artifacts or visible seams between top light effects and the card body were discussed as if they were normative rules.

## Expected Behavior

- Always distinguish component family source of truth from scenario usage instance source of truth before implementation.
- For first-screen restoration, follow the first-screen instance node first; use the family node to explain component origin and variant structure.
- Preserve layered shell structure instead of collapsing the module into a generic dashboard card.
- Review light and dark shells as structural variants rather than recolored copies.
- Treat black edges, seams, and one-off layering defects as implementation accidents to be documented in repair notes, not as normative skill or brief rules.

## Common Mistakes

- The restoration flow did not lock the source node type first, so family truth and instance truth drifted together.
- The task target was not clarified early enough as first-screen restoration versus family normalization.
- Shared token logic was over-applied to a module that still depends on node-private layered effects.
- Implementation-side visual accidents were mistaken for design-system guidance rather than repair issues.

## Related Rules

- `authoring/scenarios/market-index.brief.yaml`
- `canon/archetypes/mobile-market-index-page.yaml`
- `canon/checklists/market-index-review.yaml`
- `SKILL.md` `Background Shells And High-Risk Layered Modules`
