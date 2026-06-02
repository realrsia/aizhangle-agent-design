# Independent HTML Prototype Rules

Use this file when generating standalone HTML prototypes, file:// prototypes, or single-file previews for 新涨乐 pages and components.

## Rule: Do not fake iOS system chrome in native-expression HTML

Browser HTML prototypes cannot call the real iOS Status Bar or Home Indicator. When an HTML prototype is meant to express a native iOS/WebView implementation, reserve safe-area geometry and do not draw fake platform glyphs in the New Zhanle business layer.

Why:
Hand-drawn Apple-like time, signal, Wi-Fi, and battery icons create false design-system assets and invite path-level repairs for platform-owned UI.

Verify:

- Complete mobile HTML prototypes load `references/platform-ios-chrome.md`.
- Native-expression HTML declares `platformChromeStrategy: systemRenderedPreview`.
- HTML keeps a `.system-status-area` or equivalent `47px` top safe/status region when full-page geometry needs it.
- HTML does not include `.status-time`, `.status-icons`, or Status Bar glyph SVGs unless the user explicitly requests a static full-device mockup.
- Self-drawn Apple-like glyphs do not pass as system-rendered or official Apple components.
- Do not add Status Bar SVG paths, Wi-Fi geometry, battery dimensions, `overflow: visible`, or browser preview quirks as New Zhanle design-system assets or rules.

## Rule: Declare static mockup system chrome when explicitly requested

If the user explicitly asks for a static full-device mockup with a visible Status Bar, the HTML may draw simulated system chrome only as a declared mockup layer.

Why:
Static presentation mockups can need visual device chrome, but that layer is not native system rendering and not a New Zhanle component contract.

Verify:

- Output declares `platformChromeStrategy: declaredStaticMockup`.
- The simulated Status Bar is labeled as non-system/non-official unless it uses an official Figma resource in a Figma deliverable.
- The mockup layer is separate from business page components and checklist evidence does not claim it is system-rendered.

## Rule: Bundle runtime assets for standalone HTML prototypes

Standalone HTML / local preview prototypes must package required runtime assets inside the prototype-accessible directory and reference them with relative or served URLs.

Why:
Browser-rendered prototypes cannot reliably load files from skill directories or local absolute filesystem paths when served over localhost. Fonts and icons may silently fall back or disappear even when CSS declarations look correct.

Verify:

- `@font-face` URLs are relative to the HTML file or served from the same local preview root.
- Required font assets such as `assets/fonts/ZLCaiFuTi-Regular.ttf` are present in the prototype directory when financial numbers are rendered.
- Do not reference `/Users/...`, `$CODEX_HOME/...`, skill directory paths, or other local absolute filesystem paths from deliverable HTML/CSS.
- For 新涨乐 prototypes, financial numeric runs use `ZLCaiFuTi`, and the font file is actually accessible from the preview URL.

## Rule: Lead component prototypes with the component surface

When the user asks for a component prototype, the component itself is the primary visible output.

Why:
Component prototypes are used to inspect the component contract. Large fake page modules, decorative scenes, or checklist panels can obscure the component and make the artifact read as a specification page instead of a usable component prototype.

Verify:

- The component surface appears first and is visually dominant.
- Specs, checklist results, debug measurements, and explanatory panels are visually secondary or placed below the component.
- Decorative page content, fake business modules, gap markers, and large checklist tables do not compete with the component surface unless explicitly requested.
- For bottom-bar component prototypes, show a `390x130` component frame first.
- Optional phone-placement previews may follow the component frame.
- The prototype does not look like a specification page when the user asks for a component prototype.

## Rule: Bottom-bar prototypes use direct approved file assets

Standalone bottom-bar HTML prototypes must make every approved visual asset available to the prototype and reference those assets directly.

Why:
Bottom-bar icons and backgrounds include approved bitmap/SVG details. Replacing them with inline SVG, CSS masks, or local absolute paths hides asset-binding mistakes.

Verify:

- Bottom-bar backgrounds are copied into the prototype-accessible asset directory.
- Entry icons are copied into the prototype-accessible asset directory.
- Agent icons are copied into the prototype-accessible asset directory as approved SVG assets.
- Input mode icons are copied into the prototype-accessible asset directory.
- Selected-state icons are copied into the prototype-accessible asset directory.
- Arrow icons from the shared icon component library, such as `assets/icons/xzl-right-outlined.svg`, are copied into the prototype-accessible asset directory when rendered in HTML.
- HTML references assets with relative paths such as `<img src="./assets/...">`.
- Deliverable HTML does not reference `/Users/...` absolute paths.
- Do not use inline SVG in place of approved bottom-bar icons.
- Bottom-bar icons follow this direct file-asset rule even though other P1 icons may allow inline SVG.
- For color-bound SVG icons in standalone HTML, use the approved SVG shape asset and mode-correct color binding or a prototype-local mode-colored copy derived from the approved SVG; do not redraw or substitute the icon.
- Do not use CSS masks in place of approved bottom-bar icons unless the design-system rule explicitly requires mask rendering for that asset.
- For `file://` prototypes, P1 icons are visible through direct file resources.
- For stockQuote indexInfo expand/collapse arrows, prefer inline approved component-library SVG path plus `currentColor` over external `<use>`; `file://` previews can render external `<use>` inconsistently.
- Keep an asset trace near the inline SVG, such as `data-asset="assets/icons/xzl-arrow-up.svg"` or a nearby implementation comment, so review can verify the source shape.
- For bottom-bar expand/collapse arrows and other shared component-library SVGs that need token coloring, inline the original component-library SVG path only when necessary and bind `fill="currentColor"` or `stroke="currentColor"`.
- The wrapper uses the canonical token CSS variable, for example `color: var(--xzl-color-text-tertiary)` for `xzl/color/text/tertiary`.
- Do not generate light/dark derived SVG files to replace shared component-library assets unless the design system itself provides mode-specific assets.
- If an `<img>` references a fixed-color SVG, do not claim the icon is token-color-bound.
- Expand/collapse arrows and other bottom-bar P1 icons must not be rendered by CSS mask as their only visible mechanism.

## Rule: Use verifiable currentColor SVG binding in HTML prototypes

When an approved SVG icon needs light/dark mode coloring, the HTML prototype must render it in a way that can inherit or bind the intended token color.

Why:
SVG files that use `currentColor` do not inherit the parent document color when loaded through `<img>`. A screenshot may show the wrong color even though the asset file itself is correct.

Verify:

- Mode-changing SVG icons use inline SVG plus `currentColor`, `<symbol>/<use>` plus `currentColor`, or another color binding that can be proven through DOM, computed style, or screenshot evidence.
- Do not use `<img>` alone for a `currentColor` SVG and claim it inherited parent `color`.
- Fixed-color SVG resources may use `<img>` only when the fixed color exactly matches the current mode requirement.
- Agent chip icons that need mode color, including `bottom-bar-agent-*.svg`, follow this rule.
- Task-assistant `xzl-right-outlined.svg` follows this rule when it needs light `#2D3A67` or dark `#B2CFFF`.

## Rule: Preserve asset trace for inlined approved SVGs

When an approved SVG is inlined to support token color binding, the prototype keeps a trace to the original asset.

Why:
Inlining should preserve the design-system asset relationship, not become a hand-drawn replacement.

Verify:

- Inline SVG includes `data-asset="assets/.../xxx.svg"` or an adjacent comment naming the original asset path.
- The path/shape comes from the approved SVG asset.
- Do not hand-draw approximate icons to satisfy color binding.

## Rule: State icons are mutually exclusive in final rendering

For one control, selected/default, active/default, and expanded/collapsed icons must not render visibly at the same time.

Why:
Keeping both icons in the DOM can be valid for state transitions, but final visibility must match the declared state. Generic icon display rules can accidentally override state hiding.

Verify:

- If multiple state icons exist in DOM, the CSS or component variant rules make exactly one state icon visible.
- Verification checks final rendered visibility, not only DOM existence.
- Deep-thinking agent chip selected and unselected icons never appear at the same time.
- CSS selector priority does not allow a generic icon display rule to override selected/default hidden states.

## Rule: P1 icons must be visually rendered in standalone HTML

P1 icons cannot exist only as structure, external absolute SVG paths, or CSS masks in independent HTML/file:// prototypes.

Why:
Standalone prototypes often run from `file://`. Cross-directory SVG references and CSS masks can exist in the DOM but fail to render, creating false structural passes.

Verify:

- Watchlist header operation icons are visually visible, not only present in DOM or JSON.
- Sort/filter icons are visually visible, not only present in DOM or JSON.
- Prefer inline SVG for P1 icons in standalone HTML unless a component-specific rule requires direct file assets.
- Bottom-bar icons follow the direct approved file-asset rule above, not inline SVG substitution.
- Alternatively copy assets into the prototype directory and reference them with relative paths.
- Do not rely only on absolute external SVG paths for P1 icons.
- Do not rely only on CSS mask rendering for P1 icons.
- If an icon node exists but has no rendered geometry, no pixels, zero size, transparent fill, failed mask, or failed resource load, the prototype fails.

## Rule: Use reliable icon rendering for static prototypes

Critical icons in independent HTML, `file://`, and local static previews must not rely only on external SVG masks. Prefer inline SVG derived from the approved icon asset, or a reliable `<img>` that references a prototype-accessible copied asset.

Why:
Static preview environments can fail to paint external SVG masks even when the DOM, resource path, and CSS size look correct. Inline SVG or copied `<img>` assets make icon rendering inspectable and reliable.

Verify:

- Critical icons use inline SVG derived from approved component-library icon assets with `currentColor` token binding, or `<img>` elements that reference copied relative/served assets when token color binding is not required.
- For bottom-bar arrows, inline SVG keeps an asset trace to the approved source asset; do not use anonymous hand-copied paths.
- Critical icons do not rely only on `mask-image` / `-webkit-mask` with an external SVG URL.
- For fixed-color SVGs referenced by `<img>`, verify the fixed color already matches the required token; otherwise use inline approved SVG path plus `currentColor`.
- If a mask is used as enhancement, there is still a reliable rendered icon fallback or proof that the icon paints in the target preview.
- Do not hand-draw approximate icon shapes when an approved asset exists.

## Rule: Validate rendered icon geometry

Standalone HTML prototypes must verify that P1 icons have visible rendered geometry.

Why:
DOM presence is not enough when the browser fails to paint an external icon.

Verify:

- Header icon buttons have visible SVG/path geometry or visible image pixels.
- Sort/filter icons have visible SVG/path geometry or visible image pixels.
- P1 icons have non-zero rendered size.
- P1 icons have visible color or non-transparent pixels.
- In screenshot review, invisible P1 icons are treated as missing.

## Rule: Validate final icon visibility

Icon validation must check final rendered visibility, not only DOM nodes, resource paths, or CSS dimensions.

Why:
An icon can have the correct DOM node, asset path, width, and height while still painting transparent, falling back to the wrong color, blending into the background, or failing to rasterize.

Verify:

- Icon rendered bounds are non-zero.
- Icon fill, stroke, or pixels are visible and non-transparent.
- Icon color resolves to the expected token for the component state.
- Icon color has enough contrast against its immediate background to be visible.
- A passing review includes screenshot, pixel, computed-style, or equivalent rendered evidence; DOM/resource/CSS declarations alone are insufficient.
