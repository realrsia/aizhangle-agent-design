# Security Tags

Use this file with `references/components-tags.md` for stock/security classification tags.

Use numeric and color values only from `assets/tokens/tag-tokens.json` after tokenization.

## Rule: Use compact security tag metrics

Security tags keep compact metrics in dense stock lists.

Why:
Stock identity columns are narrow, so security tags must classify without pushing names, codes, or values out of alignment.

Verify:

- Text line-height is `14px`.
- Horizontal padding is `1.5px` left and right.
- Vertical padding is `0px` top and bottom.
- Radius is `2px`.
- Dense list implementations must reference `assets/tokens/tag-tokens.json` `securityTags.metrics`; do not substitute default tag padding.

## Rule: Use neutral outline tags for ordinary market/security labels

Use neutral outline tags for 沪A and ETF.

Why:
These labels classify a stock without implying movement or sentiment. `信用` no longer uses neutral outline; use the brown outline rule instead.

Verify:

- Dark text resolves to `90% #FFFFFF`.
- Dark border resolves to `30% #FFFFFF`.
- Light text resolves to `#030303`.
- Light border resolves to `30% #030303`.
- Do not use red or green for these tags.
- Do not apply neutral outline to `信用`.

## Rule: Use blue outline tags for technology or conditional labels

Use blue outline tags for 科创, 美股, and trade-type 条件单.

Why:
These labels need visible classification while staying separate from financial red/green. `条件单` is currently used as a holding-list trade-type tag, not as a market security label.

Verify:

- Dark text uses `#3B84FF`.
- Dark border uses `50% #3B84FF`.
- Light text uses `#105EFF`.
- Light border uses `50% #105EFF`.

## Rule: Use purple outline tags for 港股

Use purple outline tags for 港股.

Why:
港股 needs a distinct market classification color.

Verify:

- Dark text uses `#9481FF`.
- Dark border uses `50% #9481FF`.
- Light text uses `#5A43EB`.
- Light border uses `50% #5A43EB`.

## Rule: Use orange outline tags for 融

Use orange outline tags for 融.

Why:
融资-related labels need a distinct classification style and should not use the ordinary neutral tag.

Verify:

- Dark text uses `#E97B2E`.
- Dark border uses `50% #E97B2E`.
- Light text uses `#F36C29`.
- Light border uses `50% #F36C29`.

## Rule: Use brown outline for 信用

`信用` uses the brown outline tag style from `assets/tokens/tag-tokens.json` `securityTags.brownOutline`.

Why:
信用 is an account/trading capability label and should not look like an ordinary neutral market/security label.

Verify:

- Use this rule wherever `信用` appears as a tag.
- In 持股列表 frozen columns, the tag appears after the second-line market value amount.
- Text uses `xzl/color/primary/brown`.
- Border uses `50% xzl/color/primary/brown`.
- Do not use neutral outline for `信用`.
- Do not duplicate brown color values in list rules; reference `securityTags.brownOutline`.

## Rule: Use short display labels in dense financial lists

Dense financial lists use short display labels for market/security tags while preserving the full semantic label in structure.

Why:
The frozen identity column is narrow. Short labels preserve classification without crowding stock names and codes.

Verify:

- In 自选列表, 行情列表, and other dense financial table lists, display `沪A` as `沪`.
- Display `科创` as `创`.
- Display `创业` as `创`.
- Display `港股` as `港`.
- Display `美股` as `USA`.
- Preserve the full semantic label in structure, such as `data-full-label`, Figma layer metadata, or component props.
- Labels not in the mapping, such as `ETF`, `融`, and `信用`, keep their original display text.
- Page or business group tabs such as `港美股` are not security tags and do not use this short-label mapping.

## Rule: Prefer real security tags before using a count capsule

Dense stock table lists show real security tag text after the code whenever it fits. Numeric count capsules are only an overflow adaptation for the current identity area.

Why:
Real security tags such as 沪A, 科创, ETF, 港股, 融, and 信用 carry useful classification information. A numeric capsule should preserve layout only when the real labels cannot fit.

Verify:

- Security tags appear after the stock code as real tag text by default.
- Use a count capsule only when the real security tags cannot fit in the current frozen identity area.
- If available space cannot be determined, show real tag text instead of defaulting to a number.
- Expanded tag details are not forced into the frozen column when they would break the layout.
- The count capsule remains secondary to stock name and code.

## Rule: Use approved tag-count capsule formatting

When dense stock lists collapse security tags into a count capsule because the current identity area cannot fit the real tags, the number represents a count, not a financial value.

Why:
A plus sign or wrong font makes the count look like a price movement or generic badge instead of security-tag metadata.

Verify:

- Tag-count capsule numbers do not add `+`.
- Tag-count capsule numbers use 涨乐财富体 Regular `11px`.
- Tag-count capsule container reuses the neutral/security tag style.
- Tag-count capsule does not use red/green movement semantics.

