# AI Zhangle Aesthetic System

This file is the aesthetic entrypoint for visual generation and visual review.

It answers one question: after the Agent knows the components, tokens, and page structure, what makes the result feel like AI Zhangle instead of a generic finance screen?

## Source Priority

Use this order when visual rules overlap:

1. Foundation and component sources for numeric rules, component structure, typography implementation, spacing, radius, token usage, asset paths, and output checklists.
2. Confirmed component briefs and Figma bindings in this repository for component purpose, risk boundaries, variants, and maintained component identity.
3. Visual-language references for visual atmosphere, composition judgment, density, hierarchy, icon policy, Figma MCP font fallback, and design-tasting review.
4. Human reviewer judgment for unresolved product intent, risk boundary, or visual direction.

Do not create a new color, type, radius, or spacing system from visual-language notes when foundation files already define the value.

## What Owns Aesthetics

Load these files for aesthetic decisions:

- `docs/references/foundations/visual-language.md`: primary visual language and composition reference. It defines the AI Zhangle mood, density, hierarchy, dark/light posture, icon policy, layout principles, and common aesthetic failure modes.
- `docs/references/process/design-taster.md`: design-tasting review process. Use it after a draft has a selected page archetype and component set.
- `docs/references/process/impeccable-adaptation.md`: local anti-pattern lens for AI Zhangle aesthetics.
- `docs/references/visual-audit-chain.md`: visual review chain from intent reading to repair brief.
- `docs/references/anti-patterns.md`: named structural and visual issues to catch during review.

Load these files for the foundation values that aesthetic work must obey:

- `docs/references/foundations/tokens.md`: token usage rules.
- `docs/references/foundations/typography.md`: global typography and financial numeric font rules.
- `canon/foundations/tokens/color.tokens.json`: canonical color token source.
- `canon/foundations/tokens/typography.tokens.json`: typography token source.
- `canon/foundations/tokens/radius.tokens.json`: radius token source.
- `canon/foundations/themes/light.theme.yaml`: light theme mapping.
- `canon/foundations/themes/dark.theme.yaml`: dark theme mapping.
- `canon/foundations/semantics/financial-semantics.yaml`: Chinese financial red-up and green-down semantics.
- `bindings/assets/manifest.yaml`: font, token, template, example, and local asset locator.

## Visual Generation Route

For screen generation or redesign:

1. Select the page archetype and scenario from `canon/archetypes/` and `canon/scenarios/`.
2. Load matching component briefs and component meta files.
3. Load foundation sources for tokens, typography, radius, spacing, fonts, and component metrics.
4. Load `docs/references/foundations/visual-language.md` to apply AI Zhangle atmosphere, density, hierarchy, and dark/light posture.
5. Run the relevant component checklist plus `canon/checklists/visual-review.yaml`.
6. For Figma generation, also run `canon/checklists/figma-generation-review.yaml` so the hard constraints in `SKILL.md` become concrete second-pass repair items.

## Visual Review Route

For visual audit, design QA, or "does this look right" tasks:

1. Confirm the intended screen archetype and primary job.
2. Check component binding and high-risk controls before judging beauty.
3. Check tokens, typography, radius, and financial color semantics against foundation sources.
4. Use `docs/references/process/design-taster.md` for hierarchy, density, layout, icon consistency, and polish order.
5. Use `docs/references/process/impeccable-adaptation.md` and `docs/references/anti-patterns.md` to name aesthetic failures.
6. Produce repair actions in structure-first order. Do not solve structural problems with decorative atmosphere.

## Non-Negotiable Aesthetic Rules

- The screen must read as a finance product first.
- AI atmosphere supports the main content; it must not replace market, account, trading, or list hierarchy.
- Use high density intentionally. Density means fast scanning, not clutter.
- Keep one primary job and one primary action per screen.
- Use red and green only for financial semantics or approved trading actions.
- Keep typography on the approved ramp and use the numeric font for financial values.
- Use Auto Layout for text-bearing Figma structures whenever the output target is Figma.
- Use real chart-library output for production financial charts.
- Keep icon style consistent within a screen.
- Prefer removing noise, tightening hierarchy, and restoring component structure before adding visual effects.

## Content And Layout Resilience

These rules apply to generated Figma screens and visual review, especially AI chat pages with long financial answers.

- Replace placeholder copy with realistic business content before delivery. Repeated dummy text such as `文字文字`, generic labels, unresolved prompts, and raw TODO markers are failed output.
- Text-bearing Auto Layout containers should Hug Contents on the text height and on non-structural parent containers, so real copy is not clipped by Fixed Height.
- Multi-line body text inside an Auto Layout parent should use Fill Container width unless the text is a deliberately small label, icon label, numeric column, or verified component internal.
- Component wrappers must cover their children. Reasoning panels, message-feed stacks, and imported instances cannot be shorter than visible nested content.
- Mobile chat pages must keep `message_feed` as the scroll zone between fixed chrome. Long answers, cards, charts, reasoning content, and related questions scroll inside it instead of being cut off.
- Bottom Bar / Chat Input stays at the frame bottom and remains outside the message feed. Content must reserve at least 40px of visible gap before the bottom input, using an explicit spacer when needed.
