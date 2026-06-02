# Color Mode Audit

Use this file for light/dark generation and review. Numeric values come only from `assets/tokens/token-mapping.json`.

## Rule: Resolve every token by active mode

Use the same canonical token names across modes, but resolve each token to its light or dark value according to the active mode.

Why:
Mode support depends on token resolution, not on manually copying or guessing colors.

Verify:

- Light mode uses light values.
- Dark mode uses dark values.
- Tokens marked unavailable are not used in that mode.
- No light value is copied into dark mode unless the token mapping explicitly has the same light and dark value.

## Rule: Text hierarchy must switch to dark values

All text tokens must resolve to their dark values in dark mode.

Why:
Dark mode readability depends on text hierarchy values such as `FFFFFF`, `90% FFFFFF`, `70% FFFFFF`, and lower-emphasis text values.

Verify:

- `xzl/color/text/primary` resolves to dark `FFFFFF`.
- `xzl/color/text/strong` resolves to dark `90% FFFFFF`.
- `xzl/color/text/secondary` resolves to dark `70% FFFFFF`.
- `xzl/color/text/tertiary` resolves to dark `50% FFFFFF`.
- `xzl/color/text/quaternary` resolves to dark `30% FFFFFF`.
- `xzl/color/text/disabled` resolves to dark `30% FFFFFF`.
- `xzl/color/text/auxiliary` and `xzl/color/text/muted-blue` resolve to their dark values.
- Do not use light-mode dark text values such as `#030303`, `353739`, `6D778B`, `9FABC4`, or `CCD0D8` in dark mode.

## Rule: Components must resolve their mode values too

Check surfaces, inputs, dividers, tags, buttons, overlays, and trading actions against mode-specific tokens.

Why:
Dark mode bugs often happen when background changes but text, dividers, inputs, or tags keep light-mode values.

Verify:

- Page background and surfaces use dark values.
- Card level 1 and card level 2 use their dark values.
- Input background uses its dark value.
- Placeholder uses `xzl/color/text/quaternary` dark value.
- Dividers, especially `xzl/color/divider/sheet`, use dark values.
- Tags use their derived light/dark values.
- Buttons use `xzl/color/text/on-primary` where required.
- Trading sell buttons use `xzl/color/trading/sell-button/background`.

## Rule: Dark mode backgrounds must remain continuous across adjacent layers

Check page, module, input, bottom bar, and safe-area background layers together so dark mode does not reveal undefined or light-mode blocks between adjacent surfaces.

Why:
Dark mode can pass individual token checks while still showing visual gaps where neighboring containers, safe areas, or fixed bars use missing, transparent, or light-mode backgrounds.

Verify:

- Page background, module surfaces, input containers, fixed bottom bars, and safe-area regions all resolve to intentional dark-mode tokens or intentionally inherited backgrounds.
- Adjacent background layers do not expose undefined color blocks, light-mode fills, or accidental white gaps.
- Fixed bottom bars and safe-area padding do not cover or reveal mismatched background strips.
- Inputs remain visually connected to their module surface without unexplained color patches around them.
- Do not force a specific container to be transparent; either explicit dark token or intentional inheritance can pass when the rendered result is continuous.

## Severity

- P0: Dark mode text uses light-mode values and becomes unreadable, or raw hardcoded color bypasses token mode resolution.
- P1: Dark mode text or component color does not resolve to the token's dark value, or adjacent backgrounds expose undefined/light-mode strips.
- P2: Text hierarchy token is semantically wrong but still readable.
- P3: Minor mode consistency suggestion.
