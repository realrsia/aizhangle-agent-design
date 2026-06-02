# Typography

Use this file for global 新涨乐 typography and font implementation rules.

## Rule: Map PingFang SC weights consistently

Use the approved weight mapping for all PingFang SC text.

Why:
Figma names such as Regular and Medium must map predictably in frontend and design specs. Using heavier weights makes dense financial UI feel too bold.

Verify:

- PingFang SC Regular maps to `font-weight: 400`.
- PingFang SC Medium maps to `font-weight: 500`.
- Do not use `600` or `700` to simulate PingFang SC Medium.
- Stock names, Chinese UI labels, headers, and titles use the mapped weight from the component rule.

## Rule: Use 涨乐财富体 for all financial numeric runs

Use the bundled 涨乐财富体 font for every financial numeric run across 新涨乐 pages, components, lists, cards, forms, tags, and auxiliary information.

Why:
新涨乐 uses a dedicated numeric typeface for financial reading. Replacing financial numbers with PingFang SC or system fonts makes quotes, trading forms, cards, tags, and helper information visually inconsistent.

Verify:

- Stock codes, prices, quantities, amounts, turnover, change amounts, change percentages, ratios, rankings, net values, returns, costs, and market values use 涨乐财富体.
- Financial numeric runs inside inputs, tags, buttons, cards, titles, normal text, helper rows, and auxiliary information still use 涨乐财富体.
- Composite text splits numeric runs by content type. In `招商银行 600036`, `招商银行` uses PingFang SC and `600036` uses 涨乐财富体.
- Do not downgrade financial numbers to PingFang SC because the outer component is an input, tag, button, card title, or ordinary text block.
- Chinese text, punctuation, units, and ordinary explanatory text use PingFang SC unless a component rule says otherwise.
- Figma `涨乐财富体 常规体` maps to the bundled regular face.
- Frontend output references `assets/fonts/ZLCaiFuTi-Regular.ttf` for regular numeric text.
- Do not substitute PingFang SC, SF Pro, or system monospace fonts for financial numbers.

## Font Assets

- Regular: `assets/fonts/ZLCaiFuTi-Regular.ttf`
- Bold: `assets/fonts/ZLCaiFuTi-Bold.ttf`
- Light: `assets/fonts/ZLCaiFuTi-Light.ttf`
