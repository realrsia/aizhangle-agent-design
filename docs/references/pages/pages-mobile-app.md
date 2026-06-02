# Mobile App Pages

## Rule: Generate mobile app structure by default

When the user asks for a 新涨乐 page without specifying platform, design as a mobile app page, not a web landing page.

Why:
新涨乐 is an app product context. App pages need persistent navigation/actions, dense task content, and mobile-safe structure.

Verify:

- The page has app-like content hierarchy instead of marketing hero structure.
- Primary task/data content appears in the first screen.
- Touch targets and spacing feel usable on phone-sized screens.
- Bottom bars or fixed actions do not cover content.

## Rule: Keep the bottom bar fixed when present

Bottom navigation or bottom action bars must stay fixed to the bottom of the viewport.

Why:
Mobile financial workflows need stable navigation and actions while lists scroll.

Verify:

- Bottom bar uses fixed/sticky bottom positioning in frontend output.
- Bottom bar renders above scrollable list content in the visual stack.
- Scrollable lists reserve enough bottom safe space so the last row is not covered by the bottom bar.
- Figma layout places bottom bar at the bottom of the phone frame.
- Scrollable content has enough bottom padding to avoid being hidden.

## Rule: Preserve mobile setting-list and selection-list structure

When generating settings pages, classify row controls by row structure before matching keywords in the copy.

Why:
Setting rows often mention visibility, sound, watchlist, monitoring, fixed, or pinned states. Those words should not replace standard setting-list controls with icon toggles or misclassify local segmented selectors as tabs.

Verify:

- Setting-list rows use left main/sub text plus a standard right control such as Switch or Segmented Switch.
- Setting-row segmented controls that choose status, frequency, compact mode, or local display mode follow `components-switch.md` and `switches/segmented.md`, not `components-tabs.md`.
- Selection-list rows use Checkbox or Radio with option text and do not replace the selection control with eye, sound, watch, or pin icon toggles.
- Eye, sound, watch, and pin icon toggles appear only in icon-toggle entry, shortcut state, toolbar action, or operation-slot structures.

## Rule: Produce direct UI design deliverables

For generation, include token usage, light/dark comparison, page structure, applied component rules, and open gaps.

Why:
The output must be usable for UI design review, not only as a visual idea.

Verify:

- Output includes the required design notes.
- Missing rules are listed as gaps rather than guessed.

## Rule: Treat pages as containers for modules

A complete mobile page may contain page chrome, list modules, cards, tabs, controls, and bottom navigation.

Why:
Generation fails when a page shell is treated as a substitute for the required module structure. A page-level reference can provide context, but each visible module still needs its own component or list contract.

Verify:

- Page chrome such as title, search, tabs, market statistics, add buttons, and bottom navigation is allowed when requested or present in the target surface.
- If the page contains a financial list module, the module uses `references/lists/financial-table-list.md` plus the matching scenario file such as `lists/watchlist.md` or `lists/holdings.md`.
- Page chrome must not reduce the list module's required fields, header assets, frozen columns, scroll behavior, typography, tags, or dividers.
- Review page output by checking both levels: page container correctness and each module's own contract.

## Rule: Reference examples by requested surface

When generating a prototype from a positive example, copy only the relevant structure for the requested surface.

Why:
A full-page positive example can accidentally pull in search bars, add buttons, bottom navigation, or old row-list layouts that are unrelated to a requested financial table list.

Verify:

- If the user asks for a financial list with explicit fields, prioritize the table-list contract over unrelated page chrome.
- Do not add search, plus, tab, or bottom navigation elements solely because they appear in a positive example.
- Include page chrome only when the user requests a complete page shell or those elements are part of the target surface.
