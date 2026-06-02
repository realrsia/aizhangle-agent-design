# Tokens

This file explains token usage. Do not treat it as the numeric source.

Numeric sources:

- Original table: `assets/tokens/xzl-color-tokens.csv`
- Canonical mapping: `assets/tokens/token-mapping.json`

## Rule: Use canonical tokens everywhere outside token definitions

Use canonical token names such as `xzl/color/text/primary` in Figma and convert them to CSS variables for frontend implementation.

Why:
One shared canonical name keeps Figma and frontend aligned while preserving traceability to the original color table.

Verify:

- Figma variables use `/` grouped canonical names.
- Frontend CSS variables convert `xzl/color/text/primary` to `--xzl-color-text-primary`.
- Business components use `var(--xzl-...)`, not raw color values.

## Rule: Raw color values appear only in the token layer

Raw hex, RGB, HSL, opacity color values, and gradient stops are allowed only in files generated from `assets/tokens/`.

Why:
This keeps color usage auditable and prevents UI drift across light/dark modes.

Verify:

- Component styles, chart configs, page styles, and Figma object fills reference tokens or variables.
- Any raw color outside token assets or token definition files is a P0 issue.

## Rule: Default to dual mode

Generate and check both light and dark mode token values unless the user explicitly asks for one mode.

Why:
新涨乐 pages must be production-ready across both modes, and many color bugs appear only in dark mode.

Verify:

- Every used token resolves in both modes.
- Tokens marked unavailable are not used in that mode.

## Rule: Resolve text tokens by active mode

Use the same canonical text token across light and dark modes, but resolve its mode-specific value from `assets/tokens/token-mapping.json`.

Why:
Text hierarchy should stay semantically stable while values adapt to the active mode. Copying light-mode text values into dark mode causes low contrast and breaks the color system.

Verify:

- Titles, body text, field labels, list text, table text, placeholders, and disabled text use `xzl/color/text/...` tokens.
- Dark mode text resolves to each token's dark value, not the light value.
- Do not simplify all dark text to pure white; preserve text hierarchy through `primary`, `strong`, `secondary`, `tertiary`, `quaternary`, and `disabled`.
- Do not switch only backgrounds and surfaces while leaving text values unchanged.

## Rule: Chinese financial red/green semantics

Use `xzl/color/primary/red` for rising or positive financial states and `xzl/color/primary/green` for falling or negative financial states.

Why:
Chinese financial products use red-up and green-down semantics. Reversing them is a critical product error.

Verify:

- Price change, change percentage, amount change, list movement, trend arrows, and ranking deltas follow red-up/green-down.
- Red and green are not used as ordinary decoration when no financial state is present.
