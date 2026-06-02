# Bug: Platform iOS Status Bar Ownership

Context:
A New Zhanle home page HTML prototype was generated as a full mobile page.

Symptom:
The page hand-drew an iOS-like Status Bar in the business UI. Review then focused on repeated local repairs: it did not look like Apple, icons were clipped, and the Wi-Fi shape looked wrong.

Root Cause:
Platform chrome ownership was incorrectly assigned to the New Zhanle business page layer. Status Bar, Home Indicator, and system safe areas are iOS/host responsibilities, not New Zhanle component contracts.

Wrong Pattern:
Treating a complete phone page as a requirement to draw time, signal, Wi-Fi, and battery glyphs in HTML or as design-system SVG assets.

Correct Rule:
Resolve platform chrome by delivery target. Native iOS/WebView uses system-rendered chrome. Figma full-device comps use Apple Design Resources / iOS UI Kit or declare a fallback/open gap. HTML prototypes that express native implementation reserve the safe/status area and do not fake system glyphs. Static mockup status bars are allowed only when explicitly requested and must be declared as mockup-owned.

Why:
The stable design-system decision is ownership and delivery strategy, not the shape of one hand-drawn Wi-Fi or battery icon.

Do Not Promote:
Do not turn Wi-Fi SVG paths, battery SVG dimensions, `overflow: visible`, browser/file preview quirks, Playwright/Chromium issues, or other local repairs into durable New Zhanle rules.

Applies To:
Full mobile page generation, HTML prototypes, Figma device comps, native/WebView implementation guidance, Status Bar and Home Indicator review.

Severity:
P0 for full-page generation and review because wrong ownership leads to repeated false fixes and non-system UI.

Related References:
- `references/platform-ios-chrome.md`
- `references/page-structure.md`
- `references/html-prototypes.md`
- `assets/templates/page-output-checklist.json`
