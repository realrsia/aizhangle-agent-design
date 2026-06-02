# Tag States

Use this file for tag mode, semantic state, and light/dark validation.

## Rule: Tag colors follow semantic tokens in both modes

Tags use semantic tag tokens and resolve them through the active color mode.

Why:
Tags often sit near financial red/green values. They need stable semantic colors without stealing movement meaning or falling back to raw values.

Verify:

- Security and board tags use the variants defined in `references/tags/security-tags.md`.
- Signal, risk, and sentiment tags use `references/tags/signal-tags.md`.
- Light/dark output resolves tag tokens from `assets/tokens/tag-tokens.json` and `assets/tokens/token-mapping.json`.
- No tag hardcodes red, green, white, or opacity values outside token definitions.
- Financial red/green tokens are used only when the tag explicitly represents financial movement semantics.
