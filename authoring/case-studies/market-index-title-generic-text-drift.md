## Market Index Title Generic Text Drift

## Context

- A maintained market-index title was implemented as a generic text row instead of using the dedicated title node as evidence.
- The implementation focused on font, color, and size, but did not record whether the title belonged to the card content flow.
- The dark and light title versions were treated as a simple text color swap even though the source nodes use different visual treatments.
- One-off browser alignment fixes were discussed as if they were design-system rules.

## Expected Behavior

- Always lock the dedicated title source node before implementing a high-identity title module.
- Preserve main title text, status dot, and status text as separate elements when the source node defines them separately.
- Evaluate market-index title placement relative to the card content flow for both first-screen and full-page scenarios.
- Review dark and light title variants as variant-specific visual treatments, not as recolored copies.
- Keep temporary padding, gap, fallback, and pixel-alignment repairs in repair notes or prototype debug notes, not in the brief body.

## Common Mistakes

- The title source node was not locked before implementation.
- The internal relationship between main title text, status dot, and status text was treated as ordinary copy rather than component structure.
- Layout ownership was not clarified, so title placement drifted between screen anchoring and card content flow.
- Implementation repairs were mixed with stable scenario facts.

## Related Rules

- `authoring/scenarios/market-index.brief.yaml`
- `canon/checklists/market-index-review.yaml`
- `SKILL.md` `High-Identity Title Modules`
