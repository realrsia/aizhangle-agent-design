# Page Structure

## Rule: Use the standard iPhone 13/14 design viewport

Generate New Zhanle mobile pages on a single standard viewport: `390 x 844`.

Why:
A fixed app viewport keeps page chrome, safe areas, fixed headers, fixed bottom bars, and first-screen content comparable across generated artifacts.

Verify:

- Figma output uses an outer page Frame of `390 x 844`.
- HTML output uses a root app container with `width: 390px` and `min-height: 844px`.
- The root page width does not switch to another phone size unless the user explicitly asks for a new device standard.
- Content-short pages still preserve the `844` first-screen baseline.

## Rule: Put long content inside a scrollable content area

Keep the outer page viewport fixed and place overflow content inside the page content area.

Why:
Stretching the outer Frame hides header, background, safe-area, and bottom-bar mistakes. A mobile app page should preserve the device viewport while content scrolls inside it.

Verify:

- Figma output keeps the outer Frame at `390 x 844`; long content is represented as a scrollable content region or clipped page viewport with clearly declared overflow content.
- HTML output scrolls the content area instead of changing the standard viewport width or replacing the mobile shell with a long web page.
- Fixed headers and fixed bottom bars remain outside the scrolling content region.
- The final rows or controls reserve enough bottom space to avoid being covered by fixed bottom chrome.

## Rule: Separate system region, Header, Content, and optional bottom chrome

Full mobile pages reserve a top iOS system region plus page-specific `Header` + scrollable `Content` + optional fixed bottom chrome. Half-screen conversation sheets do not include the device Status Bar region.

Why:
The system region preserves coordinates and safe-area alignment, but platform chrome ownership depends on delivery target. Status Bar glyphs are not New Zhanle business components.

Verify:

- Full pages reserve the `47px` top iOS system/status region for layout alignment.
- Half-screen conversation sheets start with the sheet header and do not duplicate the device Status Bar region.
- Page Header type is selected from `references/page-headers.md`.
- Page background type is selected from `references/page-backgrounds.md`.
- Platform chrome strategy is selected from `references/platform-ios-chrome.md`.

## Rule: Resolve the iOS system chrome region by delivery target

Keep the `47px` top system region in full-page geometry, but choose Status Bar rendering through `platformChromeStrategy` instead of defaulting to hand-drawn glyphs.

Why:
Native iOS, Figma visual comps, and HTML prototypes have different ownership boundaries. The durable rule is strategy selection, not custom Wi-Fi, battery, or overflow fixes.

Verify:

- Native iOS or WebView targets use `systemRendered`: the system or host renders Status Bar content; business UI does not draw time, signal, Wi-Fi, or battery glyphs.
- Figma full-device visual comps use `officialFigmaResource`: Apple Design Resources / iOS UI Kit components are used, or fallback/open gap is declared.
- HTML prototypes that express real native implementation use `systemRenderedPreview`: `.system-status-area` or equivalent reserves `47px`, with no fake Status Bar glyphs in the business layer.
- Static mockup Status Bar drawing appears only when the user explicitly requests a static full-device mockup and the output declares `declaredStaticMockup`.
- Strategy and ownership match the output target; do not validate HTML by requiring visible time/signal/Wi-Fi/battery glyphs.
