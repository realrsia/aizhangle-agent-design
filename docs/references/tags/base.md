# Tag Base

Use this file for shared tag classification, token sourcing, and raw-color policy before loading specialized tag references.

Use with:

- `references/components-tags.md`
- `references/tags/security-tags.md` when the tag identifies a security, board, or market.
- `references/tags/signal-tags.md` when the tag expresses signal, risk, sentiment, or similar state.
- `assets/tokens/tag-tokens.json`
- `assets/templates/tag-output-checklist.json`

## Rule: Classify tag semantics before styling

A tag's semantic purpose determines its token family and variant.

Why:
Similar text can carry different product meaning. Styling from copy alone causes board tags, security tags, and signal tags to collapse into one generic label style.

Verify:

- 标的标签 and board/market labels route to `security-tags.md`.
- 信号、风险、情绪 labels route to `signal-tags.md`.
- Dense list tags remain secondary to list identity and financial values.
- Raw color values appear only in token definitions, not local tag styles.
