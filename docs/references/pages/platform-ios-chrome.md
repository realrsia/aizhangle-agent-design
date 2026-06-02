# Platform iOS Chrome

## Rule: Keep iOS system chrome platform-owned

Status Bar, Home Indicator, and system safe areas belong to the iOS platform or host shell. They are not New Zhanle business design-system components.

Why:
Treating platform chrome as a business component causes agents to hand-draw time, signal, Wi-Fi, and battery glyphs, then overfit local SVG repairs instead of using the correct delivery strategy.

Verify:

- The output declares `platformChromeStrategy` before describing Status Bar rendering.
- Business UI layers do not freely redraw system glyphs just because the page is a complete phone screen.
- New Zhanle business components start below or above the resolved system chrome regions.
- Do not promote hand-drawn Wi-Fi paths, battery SVG sizes, overflow fixes, or preview-tool workarounds into design-system rules.

## Strategy

| Strategy | Use When | Rule |
| --- | --- | --- |
| `systemRendered` | Native iOS or WebView implementation | The system or host renders the real Status Bar/Home Indicator; business UI reserves safe areas and does not draw system glyphs. |
| `officialFigmaResource` | Figma full-device visual comp | Use Apple Design Resources / iOS UI Kit Status Bar and system chrome components. If unavailable, declare a fallback or open gap. |
| `systemRenderedPreview` | HTML prototype that expresses a real native implementation | Reserve the safe-area/status region only; do not fake time, signal, Wi-Fi, or battery glyphs in the business layer. |
| `declaredStaticMockup` | User explicitly asks for a static full-device mockup/status bar | Simulated system chrome may be drawn, but it must be declared as a non-system, non-official mockup layer. |

## Rule: Match platform chrome strategy to delivery target

Resolve platform chrome by target medium before generating or reviewing a full mobile page.

Why:
Native implementation, Figma visual comps, and HTML prototypes have different responsibilities and capabilities.

Verify:

- Native iOS / WebView target uses `systemRendered`.
- Figma full-device visual target uses `officialFigmaResource` or declares an official-resource fallback/open gap.
- HTML prototype for native behavior uses `systemRenderedPreview` and reserves the top safe/status area without fake glyphs.
- Static mockup status bars use `declaredStaticMockup` only when the user explicitly asks for presentation/mockup device chrome.
- The output states `platformChromeOwnership`: `platformOwned`, `officialResourceOwned`, or `mockupOwned`.

## Rule: Native and WebView outputs reserve safe areas, not glyphs

For native iOS and WebView implementation targets, leave Status Bar and Home Indicator rendering to the system or host. The business page only respects safe-area geometry.

Why:
The real OS owns system status content. Business UI should not duplicate or compete with it.

Verify:

- Business code does not include time, signal, Wi-Fi, battery, or Home Indicator glyphs as New Zhanle components.
- Layout reserves the top status/safe area and bottom safe area needed by the selected shell.
- Header coordinates still follow page header rules, such as the `47px` top system region used for design alignment.

## Rule: Figma full-device comps use official Apple resources

When a Figma deliverable needs full device chrome, use Apple Design Resources / iOS UI Kit components for Status Bar and system chrome.

Why:
Official resources prevent near-iOS hand-drawn chrome from becoming a false design-system asset.

Verify:

- The Figma output identifies the official Apple/iOS UI Kit component used for Status Bar/system chrome.
- If the official library is not available, the output declares `officialFigmaResource` fallback or an open gap instead of inventing glyphs.
- New Zhanle rules own page background, Header, bottom bar, modules, and lists; Apple resources own system chrome.

## Rule: HTML native-expression prototypes do not fake system status glyphs

A browser HTML prototype cannot invoke the real iOS Status Bar. When the target is a real native/WebView implementation preview, reserve the system area and do not draw fake Status Bar glyphs.

Why:
Fake HTML glyphs are easy to mistake for product design assets and invite incorrect path-level repairs.

Verify:

- HTML includes a `.system-status-area` or equivalent reserved `47px` top region for full pages.
- HTML does not include `.status-time`, `.status-icons`, or hand-drawn time/signal/Wi-Fi/battery SVG glyphs unless the user explicitly requested a static mockup.
- The output declares `platformChromeStrategy: systemRenderedPreview`.

## Rule: Static mockup status bars must be declared

Only draw a simulated Status Bar when the user explicitly asks for a static full-device presentation/mockup status bar.

Why:
A static mockup can be useful for presentation, but it is not system-rendered iOS chrome and not part of the business design system.

Verify:

- The output declares `platformChromeStrategy: declaredStaticMockup`.
- The Status Bar layer is labeled as simulated/non-system/non-official unless it uses official Figma resources.
- Checklist evidence does not claim simulated glyphs are Apple-rendered or design-system components.

## Rule: Do not preserve local SVG repairs as durable rules

Do not add long-term rules for one-off hand-drawn Status Bar SVG paths, Wi-Fi geometry, battery dimensions, `overflow: visible`, browser preview quirks, Playwright/Chromium/file:// limitations, or similar local repairs.

Why:
Those fixes address the wrong ownership boundary. The durable rule is to choose the correct platform chrome strategy.

Verify:

- References and templates discuss ownership, strategy, safe areas, and official resources.
- References and templates do not prescribe specific custom Status Bar glyph paths or local browser workarounds.
