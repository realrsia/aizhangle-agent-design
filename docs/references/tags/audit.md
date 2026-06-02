# Tag Audit

Use this checklist for security tags, signal tags, and dense-list tag reviews.

## Severity

- P0: Tag uses red/green in a way that conflicts with financial movement semantics, or raw colors are hardcoded in business components.
- P1: Tag semantic style is wrong, clickable arrow is misleading, or light/dark mode mapping is wrong.
- P2: Tag density, wrapping, count capsule, border opacity, metrics, or typography is wrong.
- P3: Minor copy, naming, or consistency suggestion.

## Checklist

- 沪A and ETF use neutral outline tags; `信用` uses brown outline tags via `securityTags.brownOutline`.
- 科创, 美股, and 条件单 use blue outline tags; 持股列表 trade-type `条件单` also uses blue outline.
- 港股 uses purple outline tags.
- 融 uses orange outline tags.
- 同类领先 uses white text on red-orange gradient.
- 重大风险 uses white text on orange-yellow gradient.
- 正向信号, 中性信号, and 负向信号 use semantic background tags.
- Clickable arrows appear only for clickable 正向/中性/负向 signal tags.
- Arrow color follows tag text.
- Dense stock lists show real security tag text after code when it fits; count capsules are overflow adaptation only.
- Dense financial-list security tags use short display labels: 沪A→沪, 科创/创业→创, 港股→港, 美股→USA, while preserving full semantic labels.
- Business group tabs such as 港美股 are not affected by security-tag short-label mapping.
- Security tag line-height is `14px`, horizontal padding is `1.5px`, vertical padding is `0px`, and radius is `2px`.
- Dense list security tags explicitly use `tag-tokens.json` `securityTags.metrics`; default component padding is not accepted.
- Security tag-count capsules do not add `+`, use 涨乐财富体 Regular `11px`, and do not use movement color semantics.
- Signal tags may wrap without changing table column widths.
- Count-only signal tags do not add `+`, use 涨乐财富体 Regular `11px`, and reuse the neutral security tag container style, not the `信用` brown outline style.
- Count-only signal tag number color uses `xzl/color/text/strong` (`text-b`).
- Tag raw color values appear only in token/style definitions.

