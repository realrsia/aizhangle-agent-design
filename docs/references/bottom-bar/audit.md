# Bottom Bar Audit

Use this file for bottom-bar review and generation validation.

## Severity

- P0: Wrong bottom-bar variant for the page context; raw style recreation instead of approved background assets; light/dark asset mix that changes the intended mode.
- P1: Missing required input, scene entry, quote action, agent row, safe-area, icon state, or output checklist evidence.
- P1: Bottom-bar body covers critical content because the required content-to-body spacing is missing.
- P2: Wrong icon size, hit area, text style, or state naming that does not block recognition but breaks system consistency.
- P3: Minor naming or organization improvement.

## Rule: Complete the bottom-bar output checklist

Generated bottom-bar artifacts must include `assets/templates/bottom-bar-output-checklist.json` results.

Why:
Visual similarity can hide wrong assets, wrong mode state, and missing safe-area or content-spacing behavior.

Verify:

- Checklist results include `id`, `severity`, `status`, `evidence`, and `fixIfFail`.
- Every P0/P1 item has concrete structure, asset path, DOM, Figma layer, screenshot, or measurement evidence.
- Do not mark icon or background checks as pass unless the final rendered output uses the approved asset and correct mode.

## Common Findings

- Wrong variant: primary-page bottom bar reused on 个股行情页 instead of `stockQuotePage`.
- Wrong asset mode: dark page uses a light background or light icon asset.
- SVG approximation: a PNG-only special-effect icon is redrawn as a generic SVG circle.
- Missing safe area: controls sit over the iOS Home Indicator region.
- Missing content spacing: page content is hidden under the bottom-bar body.
- Missing state declaration: selected scene entry or thinking mode is visible but not represented in the structure.
- Input mode toggle inversion: text input shows keyboard asset or voice input shows voice asset because `inputModeToggle` was bound to the current mode instead of the next available mode; fix by binding text -> voice asset and voice -> keyboard asset.
