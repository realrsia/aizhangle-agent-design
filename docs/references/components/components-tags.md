# Tags

Tag colors may use derived tokens listed in `assets/tokens/token-mapping.json`. Do not hardcode the derived values in component styles.

Load the smallest relevant tag references:

- Shared tag base rules: `references/tags/base.md`.
- Tag layout and dense-row behavior: `references/tags/layout.md`.
- Tag state and light/dark validation: `references/tags/states.md`.

Use specialized tag references when applicable:

- Security tags and 标的标签: `references/tags/security-tags.md`.
- Signal, risk, and sentiment tags: `references/tags/signal-tags.md`.
- Tag review checklist: `references/tags/audit.md`.

Use numeric values only from:

- `assets/tokens/tag-tokens.json`

Use `assets/templates/tag-output-checklist.json` for generated tag artifacts.

## Rule: Route tags by semantic purpose

Classify tags by meaning before styling them.

Why:
Security tags, market-board tags, signal tags, and risk tags carry different meanings. Sharing one visual style across all of them makes dense financial lists harder to scan.

Verify:

- 标的标签 use `references/tags/security-tags.md`.
- 信号标签 use `references/tags/signal-tags.md`.
- Dense stock lists show security tags as compact count capsules when space is limited.
- Raw tag colors appear only in token/style definitions.

## Rule: Route outline tag colors through tag-specific rules

Use tag-specific references before choosing an outline color. Do not infer neutral outline from copy alone.

Why:
Labels with similar wording can carry different product meanings. For example, `信用` uses the brown outline tag rule, while 沪A and ETF use neutral outline.

Verify:

- 标的标签 style comes from `references/tags/security-tags.md`.
- `信用` references `assets/tokens/tag-tokens.json` `securityTags.brownOutline`.
- 沪A and ETF reference `assets/tokens/tag-tokens.json` `securityTags.neutralOutline`.
- Do not create local neutral/credit tag styles inside page or list rules.

## Rule: Dense list tags stay compact and secondary

In holdings, watchlists, and market rows, inline tags must stay compact and secondary to the main row data.

Why:
Dense financial lists need tags for classification, but users must still scan stock name, code, profit/loss, quantity, and price first.

Verify:

- Tags fit beside code or secondary metadata without breaking row alignment.
- Tags do not increase row height enough to reduce list scan density.
- Tags do not use stronger emphasis than price or profit/loss fields.

## Rule: 科创 and 美股 tags use blue

Use blue board tag tokens for 科创 and 美股.

Why:
Board/market tags need distinct classification color without colliding with red/green movement semantics.

Verify:

- Text uses `xzl/color/tag/board-blue/text`.
- Border uses `xzl/color/tag/board-blue/border`.

## Rule: 港股 tags use purple

Use purple board tag tokens for 港股.

Why:
港股 needs a stable classification color distinct from blue and financial movement colors.

Verify:

- Text uses `xzl/color/tag/board-purple/text`.
- Border uses `xzl/color/tag/board-purple/border`.

## Rule: Sentiment tags use derived backgrounds

Positive, neutral, and negative tags use approved derived background tokens and `xzl/color/text/secondary` text.

Why:
Sentiment labels should be visible but less dominant than price movement fields.

Verify:

- Positive tag text uses `xzl/color/text/secondary`, background uses `xzl/color/tag/positive/background`.
- Neutral tag text uses `xzl/color/text/secondary`, background uses `xzl/color/tag/neutral/background`.
- Negative tag text uses `xzl/color/text/secondary`, background uses `xzl/color/tag/negative/background`.
- No tag uses raw `#F62F3F`, `#00AB61`, `#FFFFFF`, or custom opacity outside token definitions.
