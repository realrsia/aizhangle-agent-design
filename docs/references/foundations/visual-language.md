# AI Zhangle Design System

## 1. Visual Theme & Atmosphere

AI Zhangle is a mobile-first financial AI interface. The visual language balances two goals:

- high-density market information that must remain scannable at a glance
- a calm AI-assistant presence that reduces anxiety rather than increasing noise

The system is built around a dual-theme model:

- **Dark mode** is the primary “financial cockpit” expression: deep navy surfaces, cool blue glows, restrained translucent overlays, bright white data text, and red/green market signals
- **Light mode** is the analytical companion: white and pale-blue surfaces, low-noise dividers, dark text, and the same component geometry carried over with lighter fills

Core visual characteristics:

- Mobile canvas baseline is `390px` wide
- Primary geometry is rounded, pill-based, and compact
- Information density is high, but hierarchy is created with text tone, tags, and spacing instead of oversized cards
- Blue light bands, subtle radial glows, and translucent panels communicate “AI + finance” without becoming decorative clutter
- Brand illustration is used sparingly as a supporting assistant cue, usually near the top-right of a screen

Design intent in one sentence:

> Build interfaces that feel like a professional trading companion with an embedded AI assistant, not a generic consumer app and not a flashy marketing page.

### Critical Interpretation

This document defines the **visual language**, **component vocabulary**, and **interaction posture** of AI Zhangle. It is **not** a license to combine every primitive on every page.

When generating a screen:

- choose one screen archetype first, then select only the minimum primitives needed for that archetype
- preserve one clear primary action per screen
- use density intentionally; density does not mean clutter
- use brand atmosphere as a supporting layer, never as foreground decoration
- inherit the mood of the closest existing screen pattern instead of averaging all patterns together
- default to Figma Auto Layout for cards, modules, rows, docks, pill groups, and any text-bearing container so content changes do not break the layout
- default to external chart-library output for charts; do not hand-draw production charts from ad-hoc shapes

If a generated screen feels “technically compliant but aesthetically ugly”, the usual failure is one of these:

- too many pills, tags, and controls competing in one viewport
- decorative glow or gradients promoted above information hierarchy
- component inventory copied literally without page-level composition judgment
- equal visual weight everywhere, causing no focal point
- treating financial density as an excuse for cramped or noisy layouts

## 2. Color Palette & Semantic Roles

### Primary Semantic Tokens

#### Dark Theme

| Token | Value | Role |
|---|---|---|
| `xzl-color-background-a` | `#091531` | Primary app background |
| `xzl-color-background-c-card` | `#608ace14` | Soft card wash / low-elevation panel |
| `xzl-color-input` | `#59608e4d` | Input fill on dark surfaces |
| `xzl-color-divider-sheet` | `#59608e26` | Hairline divider / inactive chip fill |
| `xzl-color-text-a` | `#ffffff` | Primary text |
| `xzl-color-text-b` | `#ffffffe5` | Strong secondary text / compact tag text |
| `xzl-color-text-c` | `#ffffffb2` | Secondary text |
| `xzl-color-text-d` | `#ffffff80` | Tertiary text / codes / metadata |
| `xzl-color-text-e` | `#ffffff4d` | Placeholder / disabled / faint hint text |
| `xzl-color-text-special` | `#1d2850` | Text on bright gradient CTA surfaces |
| `xzl-color-special` | `#ffffff` | White strokes and high-contrast accents |
| `xzl-color-mask` | `#000000a6` | Dim overlay / scrim |
| `xzl-color-primary-red` | `#f62f3f` | Upward move, positive inflow, hot action |
| `xzl-color-primary-green` | `#00ab61` | Downward or alternative market signal depending on chart context |
| `xzl-color-primary-blue` | `#3b84ff` | AI/action accent in dark mode |
| `xzl-color-primary-purple` | `#9481ff` | Auxiliary smart/AI accent, used sparingly |
| `xzl-color-primary-brown` | `#e97b2e` | Secondary category or ETF-like warm marker |
| `xzl-color-primary-dark-blue` | `#2d3a67` | Dense dark-chip or structural accent |

#### Light Theme

| Token | Value | Role |
|---|---|---|
| `xzl-color-text-a` | `#030303` | Primary text |
| `xzl-color-text-b` | `#030303` | Strong secondary text |
| `xzl-color-text-c` | `#353739` | Secondary text |
| `xzl-color-text-d` | `#6d778b` | Tertiary text / code / muted labels |
| `xzl-color-text-e` | `#9fabc4` | Placeholder / faint metadata |
| `xzl-color-divider-sheet` | `#e8ebfab2` | Divider / pale chip fill |
| `xzl-color-divider-b` | `#a6acb866` | Stronger light divider |
| `xzl-color-background-c-card` | `#e1edff4d` | Pale blue card tint |
| `xzl-color-primary-red` | `#f62f3f` | Primary positive market accent |
| `xzl-color-primary-green` | `#00ab61` | Secondary market accent |
| `xzl-color-primary-blue` | `#105eff` | Strong action accent in light mode |
| `xzl-color-primary-brown` | `#f36c29` | Warm tag/category accent |
| `xzl-color-primary-dark-blue` | `#2d3a67` | Structural dark accent |
| `xzl-color-special` | `#ffffff` | White surfaces or reverse text |

### Color Rules

- Reserve `red` and `green` for market movement, inflow/outflow, and signal urgency. Do not use them as casual decoration.
- Use `blue` for AI-assistant affordances, selected helper modes, and halo lighting.
- In dark mode, most surfaces should remain navy plus translucent overlays. Avoid introducing flat mid-tone panels.
- In light mode, use white as the primary surface and pale blue only as a supporting tint.
- Keep semantic parity across themes: only the values change, not the role names.

## 3. Typography Rules

### Font Families

| Role | Font |
|---|---|
| Primary UI font | `PingFang SC` |
| Numeric / market data font | `涨乐财富体` |

### Figma MCP Temporary Font Mapping

The canonical design-system fonts remain:

- `PingFang SC` for UI text
- `涨乐财富体` for financial numerics

However, when generating or editing designs through **Figma MCP**, the runtime may not have access to these locally installed font families. In that case, use the following temporary substitutions so the agent can continue producing structurally correct screens:

| Canonical Font | MCP Placeholder Font | Scope |
|---|---|---|
| `PingFang SC` | `Noto Sans SC` | UI text, labels, placeholders, tabs, pills, tags |
| `涨乐财富体` | `Noto Sans HK` | prices, percentages, codes, volumes, compact financial numerics |

Rules for this fallback:

- Treat these substitutions as **MCP-only placeholders**, not a change to the design system.
- Preserve all original font-role intent: UI copy stays on the UI font track, numerics stay on the numeric font track.
- When the final file is opened in an environment with the canonical fonts available, replace the placeholder fonts back to `PingFang SC` and `涨乐财富体`.
- Do not mix multiple fallback families for the same role within one screen.

### Verified Type Ramp

| Role | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `Body Medium 16 / Medium` | `16px` | `500` | `100%` | stock names, key list labels, strong body text |
| `Body Medium 16 / Regular` | `16px` | `400` | `100%` | placeholder, standard body text |
| `Body Medium 16 / Medium 1.6` | `16px` | `500` | `1.6` | pill CTA text, action emphasis |
| `Body Small / XSmall 14 / Medium` | `14px` | `500` | `100%` | small action buttons, active chips |
| `Body Small / XSmall 14 / Regular` | `14px` | `400` | `100%` | inactive chips, compact labels |
| `Mark Large 13 / Regular` | `13px` | `400` | `100%` | helper entry pills, compact semantic controls |
| `Mark Medium 12 / Regular` | `12px` | `400` | `100%` | signal tags, metadata |
| Micro label | `11px` | `400` | `14px` | tiny market tags such as `融`, `停`, `GDR` |

### Typography Principles

- Default to `PingFang SC` for interface copy, labels, placeholders, and component text.
- Use `涨乐财富体` for codes, prices, percentages, volumes, and compact financial numerics.
- Emphasis comes from weight, color, and placement before it comes from size jumps.
- Keep line-height tight in dense list interfaces. Most core UI text is visually compact.
- Avoid Western SaaS-style oversized display headings in product screens.
- In Figma MCP workflows where the canonical fonts are unavailable, temporarily substitute `PingFang SC -> Noto Sans SC` and `涨乐财富体 -> Noto Sans HK`.
- Do not introduce ad-hoc font sizes outside the verified type ramp unless a component instance in the design system already defines that exact size.
- Within one screen, text should snap to the verified ramp rather than drift between visually similar custom sizes.
- If a draft feels weak, fix hierarchy with weight, color, placement, or content pruning before changing font size.
- Text containers should be wrapped in Auto Layout so long labels, dynamic values, and localization do not break card or module geometry.

## 4. Iconography

### System Characteristics

- Icons are semantic and mostly outline-based
- Naming follows either generic system names such as `SearchOutlined`, `DeleteOutlined`, `TopOutlined` or project-prefixed names such as `XzlPlusCircleOutlined`, `XzlSlimRightOutlined`
- Common icon sizes observed in the system: `14px`, `16px`, `18px`, `40px` container icon buttons

### Usage Rules

- Use icons to support scan speed, not to decorate empty space.
- For inline tags, use the slim right chevron at very small scale only when the tag is drillable.
- For action pills, place the icon before the label with a `4px` gap.
- For floating utilities, use circular containers with centered glyphs and visible contrast against the surface.
- Keep icon stroke language consistent. Do not mix filled cartoon icons with outline trading UI icons.

### Preferred Open-Source Libraries

- Default to `Lucide` as the only open-source icon family for repo-local or MCP workflows unless the team explicitly changes the icon policy.
- If Lucide does not contain the exact requested symbol, use the nearest semantic substitute from Lucide instead of mixing icon families in the same screen.
- `Tabler Icons`, `Iconoir`, and `Remix Icon` may be used as research references, but should not be mixed into generated screens by default.
- Do not use font-icon libraries as the primary icon source for this system. Prefer a single SVG outline family with stable stroke language.
- Prefer a single icon family per screen so stroke rhythm, corner treatment, and semantic weight remain stable.
- Default open-source icon size is `24px` unless a component in the system specifies a different size.
- Bind icon color to semantic tokens only. Do not hand-pick temporary hex colors for icons.

### Icon Fallback Rule

- If an exact icon is unavailable, prefer semantic approximation over visual novelty.
- For example, use a generic trend, list, star, bell, search, filter, or arrow icon when the business noun is too specific to warrant a one-off glyph.
- Missing icon coverage is not a reason to introduce a second style family or a font-icon pack into the same screen.

## 5. Layout System

### 5.0 Auto Layout Rule

- Use Figma Auto Layout for any reusable card, module, list row, header, dock, pill group, button, or chart/text container.
- Do not place text as free-floating layers that visually "break open" a card or module.
- Parent-child spacing, alignment, padding, and stretch behavior should be expressed through Auto Layout before manual coordinates are used.
- Absolute positioning is reserved for rare decorative or overlay elements, not for primary data layout.
- If content length changes can break the module, the module is structurally wrong until Auto Layout is fixed.

## 5. Component Stylings

### 5.1 Capsule Tabs (`tab/胶囊`)

**Verified structure**

- Height: `24px`
- Horizontal group width: `360px`
- Inner padding: `10px` left, `8px` right, `2px` vertical
- Gap between tabs: `8px`
- Radius: `60px`

**States**

- Active: `14px Medium`, white text, same capsule geometry, visually higher contrast
- Inactive: `14px Regular`, muted text (`#8b92a4` in dark examples), subdued fill

**Do**

- Use for short category filters and segmented content pivots
- Keep labels short and scannable
- Preserve equal visual height across light and dark themes

**Don’t**

- Don’t use square tabs
- Don’t stack more than one row unless horizontal scroll is impossible
- Don’t promote inactive tabs with high-contrast text

### 5.2 Signal Tags (`1月版/信号标签`)

**Verified structure**

- Flexible width
- Height: approximately `18px`
- Padding: `4px` horizontal, `1px` vertical
- Gap between text and chevron: `2px`
- Radius: `2px`
- Background example: `rgba(246, 47, 63, 0.12)`
- Text: `12px Regular`
- Chevron: very small outline arrow, visually secondary

**Usage**

- Used for actionable market signals such as `主力连续4日净流入`
- May appear inline under a stock name or in a list row

**Do**

- Use only for meaningful, evidence-backed signals
- Keep copy short and event-like
- Use muted fills with semantic color tint, not loud badges

**Don’t**

- Don’t turn every row into a tag wall
- Don’t use signal tags as primary CTA buttons

### 5.3 Micro Market Tags

**Verified structure**

- Height: `14px`
- Border: `0.5px`
- Radius: `2px`
- Horizontal padding: `1.5px`
- Text: `11px`

**Usage**

- For tiny market qualifiers such as `融`, `停`, `GDR`, `ETF`
- Lives next to codes and short identifiers

**Rule**

- These tags must remain extremely compact. If the meaning needs explanation, it should not be a micro tag.

### 5.4 Search Input (`委托代码搜索`)

**Verified structure**

- Size: `324px × 34px`
- Background: `xzl-color-input`
- Radius: `4px`
- Padding: `8px` horizontal, `6px` vertical
- Gap between search icon and content: `8px`
- Search icon size: `18px`
- Placeholder text: `16px Regular`, `xzl-color-text-e`

**Usage**

- Search by code or security name
- Often placed on dark surfaces inside dense trading workflows

**Do**

- Keep placeholder descriptive and dual-purpose, e.g. “请输入代码/名称”
- Use only one leading icon
- Maintain low visual noise

**Don’t**

- Don’t add shadows, thick borders, or colored focus rings by default
- Don’t center placeholder text

### 5.5 榜单切片 / Leaderboard Slices

**Interaction posture**

- 榜单类模块如 `热销榜`, `人气榜`, `涨幅榜`, `跌幅榜`, `净流入榜` should default to horizontal slices or horizontal swipe groups in the first viewport.
- Do not stack multiple leaderboard groups vertically in the same focal area unless the screen is explicitly a full leaderboard page.
- Each slice should present a compact preview and signal that more content is available by horizontal movement or drill-in.

**Do**

- Use horizontal swiping to compare adjacent leaderboard categories quickly.
- Keep each leaderboard slice compact enough to preserve market overview density.
- Let leaderboard modules support the overview, not replace the main summary hierarchy.

**Don't**

- Don’t build market overview first screens as long vertical piles of leaderboard cards.
- Don’t make leaderboard slices taller or visually louder than the index summary.

### 5.6 Chart Rendering

**Source rule**

- Charts should come from a third-party charting system such as `ECharts`, then be adapted into the design system layout.
- Do not draw production charts manually from arbitrary Figma vector shapes when the intent is a real financial chart.

**Do**

- Use chart-library output for K-line, trend, intraday, distribution, and comparison charts.
- Keep chart wrappers in Auto Layout so titles, legends, metrics, and helper labels remain attached to the chart module.
- Bind chart colors and text styling back to design-system tokens and typography roles.

**Don't**

- Don’t approximate production charts by manually stacking lines, rectangles, or dots unless the task is explicitly illustrative.
- Don’t let chart geometry drift independently from the surrounding module layout.

### 5.7 Outline Pill Action Button

**Verified structure**

- Common example: `加自选`
- Border: `0.5px` red at `50%` opacity
- Radius: `100px`
- Padding: `18px` horizontal, `10px` vertical
- Gap: `4px`
- Icon size: `16px`
- Text: `14px Medium`

**Usage**

- Secondary but prominent stock actions
- Suitable inside list workflows and bottom action regions

**Do**

- Use for lightweight actions attached to a current entity
- Keep copy short, verb-led, and contextual

**Don’t**

- Don’t use this style for destructive actions
- Don’t swap the red semantic without a product reason

### 5.8 Dense List Row (`列表信息`)

**Verified structure**

- Vertical padding: `10px`
- Bottom divider: `0.5px`
- Horizontal internal gap: `10px`
- Left block includes:
  - name at `16px Medium`
  - code at `12px` numeric font
  - optional micro market tags
  - optional sparkline at roughly `62px × 40px`
- Right block uses aligned metric columns in `16px` numeric type

**Behavior**

- Prioritize name + latest value + change
- Support optional tags without breaking row rhythm
- The row should feel data-dense, not card-like

**Do**

- Keep baseline alignment clean across numeric columns
- Use red/green only on the metrics that carry movement semantics

**Don’t**

- Don’t wrap rows in large cards
- Don’t insert oversized avatars or illustrations into rows

### 5.9 Voice Primary CTA

**Verified structure**

- Container example width: `220px`, height: `48px`
- Radius: `200px`
- Border: `1px` white
- Inner fill: layered soft gradient with cool blue base and faint red/blue directional light
- Padding: `19px` horizontal, `13px` vertical
- Icon + text gap: `5px`
- Label: `16px Semibold`
- Text color: `xzl-color-text-special`
- Inner inset highlight/shadow present

**Usage**

- Primary central assistant action in bottom dock
- Must read as the main conversational affordance

**Do**

- Keep it visually premium but calm
- Center it between lower-priority icon utilities

**Don’t**

- Don’t flatten it into a standard blue filled button
- Don’t replace the gradient with a loud rainbow treatment

### 5.10 Agent Selector Pills

**Verified structure**

- Height: `26px`
- Radius: `20px`
- Padding: `12px` horizontal, `4px` vertical
- Gap between icon and label: `4px`
- Icon size: `14px`
- Label: `13px Regular`

**States**

- Active helper mode: blue border `0.5px`, blue text, slightly stronger fill
- Inactive helper mode: same geometry, lower-contrast text, no active border

### 5.11 Floating Utility Button (`置顶按钮`)

**Verified structure**

- Size: `40px × 40px`
- Circular container
- Dark translucent or navy-toned surface
- White “top” icon inset at `20%`

**Usage**

- Persistent utility actions such as returning to top

**Rule**

- Floating utilities must stay visually secondary to the primary voice CTA.

### 5.12 Bottom Dock Utility Icons

**Verified structure**

- Typical size: `48px × 48px`
- Radius: `200px`
- Border: about `0.96px` with very low white opacity
- Fill: dark navy base plus cool directional gradient
- Inner treatment: inset highlight/shadow for a polished glass-metal feel

**Usage**

- Flanks the primary voice CTA in the bottom dock
- Holds secondary actions such as trade, profile, or auxiliary tools

**Do**

- Keep the container treatment consistent across all utility icons
- Use these as secondary affordances only

**Don’t**

- Don’t make utility icons brighter than the voice CTA
- Don’t mix multiple container styles in the same dock

### 5.13 Dense List Header (`列表表头`)

**Verified structure**

- Full width: `390px`
- Horizontal padding: `18px`
- Vertical padding: `5.5px`
- Header labels: `12px Regular`
- Supports sortable metric columns with a compact sort glyph
- Left side may contain mode/action icons such as edit, multi-select, or bulk actions
- Bottom hairline divider is required

**Usage**

- For watchlists, holdings, and other dense tabular stock views
- Must visually align with metric columns in rows below

**Do**

- Keep labels muted and compact
- Right-align metric headers when their column values are right-aligned

**Don’t**

- Don’t style list headers like cards or sticky banners
- Don’t increase type size beyond the row rhythm

### 5.14 System Top Bar & Safe Area

**Verified structure**

- Uses iPhone-style status bar framing
- Time text uses system-like `SF Pro Text` treatment
- Dynamic Island / black capsule is preserved as a real spatial constraint
- Top content below the status bar should respect the safe area before beginning page-specific navigation

**Rule**

- Never let custom content visually collide with the system island, status icons, or top safe area.

## 6. Layout Principles

### Mobile Baseline

- Primary design width is `390px`
- Standard content gutters observed: `15px` to `18px`
- Dense data areas use tighter vertical rhythm than marketing or settings screens

### Spacing Rhythm

Use the following spacing values as the operating set for product UI:

- Micro: `2px`, `4px`
- Compact inline: `5px`, `8px`, `10px`
- Component padding: `12px`, `18px`, `19px`
- Section spacing: `24px+`

### Radius Scale

| Radius | Use |
|---|---|
| `2px` | tiny tags, micro badges |
| `4px` | search fields, small utility surfaces |
| `12px` | soft containers / select dark panels |
| `20px` | compact assistant pills |
| `60px` | capsule tabs |
| `100px` | outline action pills |
| `200px` | primary voice CTA |
| `50%` | floating icon buttons |

### Layout Rules

- Prefer one clear vertical flow per screen.
- Use rows and capsules to compress information instead of cards on cards.
- Keep bottom interaction zones stable: primary voice CTA centered, utility icons flanking it.
- Preserve consistent screen rhythm across light and dark themes.
- Respect iOS safe areas explicitly at top and bottom; the product language assumes native mobile chrome.

## 7. Screen Composition Principles

### 7.1 One Screen, One Job

Every screen should have one dominant job:

- watchlist scan
- strategy review
- trading search
- assistant interaction
- grouped signal browsing

Do not merge multiple jobs into one screen unless the reference pattern in Figma already does so.

### 7.2 Primary, Secondary, Tertiary Hierarchy

Each screen must clearly separate:

- **Primary layer**: the thing the user came to inspect or do
- **Secondary layer**: filters, categories, context, or helper actions
- **Tertiary layer**: metadata, small tags, helper indicators

If tags, sort headers, chips, and glow effects all feel equally loud, the screen is wrong.

### 7.3 Use Primitives Sparingly

These primitives are powerful specifically because they are selective:

- capsule tabs should group top-level category shifts, not every local option
- signal tags should annotate a row, not replace its information hierarchy
- utility icon buttons should flank the primary CTA, not compete with it
- list headers should orient the user, not become the visual focal point

### 7.4 Atmosphere Placement

Use atmosphere in the background only:

- header glow
- soft radial wash
- CTA gradient
- subtle halo around floating controls

Avoid using atmospheric effects behind dense text blocks, tables, or multiple stacked controls.

### 7.5 Light vs Dark Composition

- Dark mode should feel concentrated, focused, and premium
- Light mode should feel analytical, open, and quieter

Do not simply recolor the same dense dark composition into light mode. Light screens usually need more restraint and fewer simultaneous accents.

## 8. Depth, Surface, and Motion Feel

### Depth Language

- Dark mode depth comes from translucent overlays, hairline borders, and cool radial glows
- Light mode depth comes from pale blue surface tint and subtle divider separation
- Heavy drop shadows are not the primary depth mechanism

### Motion Guidance

- Motion should feel financial and precise, not playful
- Use subtle state transitions on tabs, list highlighting, and assistant mode changes
- Avoid bouncy interactions, elastic cards, or exaggerated scale effects

## 9. IP Graphics & Brand Motifs

### Verified Motifs

- Small assistant portrait illustration appears near the top-right of screens
- Blue horizontal light band / radial glow appears behind headers or key surfaces
- Bottom voice CTA uses layered atmospheric gradient rather than flat fill
- Floating action halos are soft and cool-toned

### Style Rules

- Illustration is supportive, not dominant
- Use humanized AI cues only in small doses
- Prefer cool blue atmosphere over neon sci-fi effects
- Keep brand graphics behind content or anchored to corners so they never interrupt scan paths

## 10. Usage Patterns

This system is designed for:

- stock list and watchlist screens
- strategy/history and grouped-signal screens
- trading search and entrust workflows
- AI-assistant anchored bottom interactions
- high-density financial tables with compact semantic tags

It is not designed for:

- image-first editorial pages
- card-heavy lifestyle dashboards
- playful social/community UI language

## 11. Data Presentation Rules

- Prices, percentages, rise/fall values, and compact numeric metrics should prefer the numeric font treatment.
- Use right alignment for metric columns in lists.
- Keep the stock name block and metric block visually separable even when the row is dense.
- Sparklines are supportive context, not the main focus of a row.
- Sort controls in headers should remain compact and visually secondary to the label.

## 12. Taste Guardrails

### Positive Direction

- calm, premium, finance-native
- precise, compact, and intentional
- atmospheric but not flashy
- data-first with assistant support
- asymmetric only when it improves emphasis or flow

### Negative Direction

- generic SaaS dashboard
- card salad
- “AI cool” neon futurism
- over-decorated glassmorphism
- ornamental gradients without informational purpose
- chip-and-tag overload

## 13. Do’s and Don’ts

### Do

- Keep the interface finance-first and assistant-second
- Use semantic tokens instead of inventing one-off colors
- Reuse capsule tabs, signal tags, dense list rows, and bottom assistant controls
- Maintain strong dark/light parity in geometry and hierarchy
- Use `PingFang SC` for UI language and `涨乐财富体` for numbers
- In Figma MCP-only workflows, use `Noto Sans SC` and `Noto Sans HK` as temporary placeholders when the canonical fonts are unavailable
- Reserve bright accents for meaningful states

### Don’t

- Don’t introduce generic SaaS gradients, purple-on-white defaults, or soft pastel dashboards
- Don’t replace dense list patterns with oversized cards
- Don’t overuse shadows, glass blur, or decorative icons
- Don’t create new badge shapes when the system already uses micro-tags and pill tags
- Don’t use red, green, or blue decoratively without semantic meaning
- Don’t break the bottom action pattern by adding multiple competing primary CTAs

## 14. AI Steering Commands

When an agent generates screens for this system, steer it with these rules:

- Optimize for `high-density financial clarity`
- Preserve `mobile-first 390px composition`
- Prefer `pill geometry + compact rows + semantic tags`
- Keep `AI presence calm, helpful, and secondary to data`
- Use `blue glow atmosphere` as supporting brand signal, not as wallpaper
- Always choose `tokenized dark/light values`, never hardcoded ad-hoc colors
- Treat `voice CTA`, `agent pills`, `tabs`, and `list rows` as core primitives
- Respect `safe area + bottom dock + dense list header` as structural primitives, not optional decoration
- Compose by `screen job -> hierarchy -> primitives`, never by primitive checklist alone
- If unsure, remove one decorative layer before adding another

## 15. Anti-Patterns

- Generic dashboard cards with 16px radius everywhere
- Loud all-screen gradients behind dense financial data
- Oversized empty spacing that lowers information throughput
- Multiple accent colors competing in the same local cluster
- Using tags as decoration instead of real semantic signal
- Replacing numeric font treatment with ordinary proportional UI font
- Floating utilities larger or brighter than the voice CTA
- Letting custom navigation collide with the status bar or Dynamic Island
- Making sortable list headers visually louder than the data itself
- Showing too many control clusters before the user sees the core information
- Turning every row into a badge board
- Putting decorative charts or sparkline noise where values alone would be clearer

## 16. Agent Workflow

Before generating any screen, follow this order:

1. identify the screen archetype
2. identify the user’s single primary job
3. pick the smallest set of primitives needed
4. define primary/secondary/tertiary hierarchy
5. apply theme and atmosphere last
6. run an anti-pattern check before finalizing

If a screen feels busy, fix it in this order:

1. remove unnecessary primitives
2. reduce tertiary tags or helper controls
3. soften or remove background atmosphere
4. re-establish one clear focal point
5. only then adjust colors or spacing

## 17. Agent Prompt Guide

### Required Prompt Frame

When asking an agent to design a new page, always specify:

1. theme: `dark` or `light`
2. screen archetype: `watchlist`, `strategy`, `trading search`, `assistant panel`, or `detail list`
3. data density: `high`, `medium`, or `low`
4. primary action: usually one of `voice CTA`, `add to watchlist`, `switch agent`, `filter by signal`
5. required primitives from this system
6. whether the screen includes `dense list headers`, `bottom dock`, or `search workflow`
7. what should be visually dominant in the first 3 seconds

### Agent Rules

- Start from existing primitives before inventing new components.
- Use semantic tokens from Section 2.
- Use typography from Section 3, with `涨乐财富体` for financial numerics.
- In Figma MCP environments where the canonical fonts are not visible, use the temporary mapping in Section 3: `PingFang SC -> Noto Sans SC`, `涨乐财富体 -> Noto Sans HK`.
- Preserve the bottom action architecture when a conversational flow exists.
- In dark mode, prefer deep navy plus subtle blue glow. In light mode, prefer white plus pale blue tint.
- Use signal tags only when the data actually justifies them.
- If a component is not defined here, derive it from the nearest existing primitive instead of inventing a new visual language.
- Preserve top and bottom safe areas and do not let content conflict with native mobile chrome.
- Do not treat this file as a component shopping list; use it as a composition and taste constraint.

### Suggested Prompt Template

```text
Create a [dark/light] AI Zhangle mobile screen at 390px width.
Use the AI Zhangle design system strictly.
Screen type: [watchlist / trading search / strategy / assistant panel].
Primary user task: [task].
Required components: [capsule tabs, search input, list rows, signal tags, voice CTA, agent selector pills, floating top button].
Visual dominance in the first 3 seconds: [what must stand out].
Keep the interface finance-dense, calm, and token-driven.
Use PingFang SC for UI text and 涨乐财富体 for numbers.
Respect iOS safe areas, Dynamic Island spacing, and bottom dock structure.
Do not invent new colors, new corner styles, or generic dashboard cards.
Do not over-combine primitives; remove anything that does not support the primary job.
```

### Quick Generation Checklist

- Is the screen doing one clear job?
- Is the theme correct?
- Are colors tokenized and semantic?
- Are tabs, tags, and list rows using the right geometry?
- Is the primary CTA singular and obvious?
- Are numerics rendered in the numeric font treatment?
- Is there too much decorative atmosphere in front of content?
- Are tertiary controls quieter than primary information?
- Does the page feel like AI Zhangle rather than a generic finance app?
