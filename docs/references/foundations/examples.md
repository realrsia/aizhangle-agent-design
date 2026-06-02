# Positive Examples

Use this file as an index for approved positive examples. Store screenshot copies in `assets/examples/`.

When a task references a positive example, imitate only the parts relevant to the requested surface. For financial table-list tasks with explicit fields, use `Watchlist and Holdings Table Lists` as the primary layout example. Do not inherit unrelated page chrome, search bars, add buttons, bottom navigation, or old row-list structures unless the user explicitly asks for a complete page shell.

## Entry Template

```markdown
## Example: [short name]

- Screenshot: `assets/examples/[file-name]`
- Figma link:
- Page link:
- User note:
- What to imitate:
- What not to generalize:
- Related routes:
```

## Current Examples

## Example: Watchlist and Holdings Table Lists

- Screenshot: `assets/examples/list-watchlist-holdings.png`
- Figma link: https://www.figma.com/design/otAkZjevsWXeTDul44K2Qc/%E5%88%97%E8%A1%A8skill?node-id=0-1&t=EEFEFtJfLLfpPPFM-1
- Page link:
- User note: This screenshot is the approved reference for 自选列表 and 持仓列表 table structure.
- What to imitate:
  - Frozen left stock identity column with horizontally scrollable data columns.
  - Treat this as the highest-priority positive example for 自选列表 and 持仓列表 table layout when users list fields or ask for table-like list prototypes.
  - Watchlist column order, optional mini trend chart, and red-up/green-down movement fields.
  - Holdings column order, sensitive value masking behavior, and profit/loss color semantics.
  - Fixed column widths, table header, row density, dividers, and right-aligned numeric columns.
- What not to generalize:
  - Do not add mini trend charts to holdings lists.
  - Do not treat all red/green-looking values as tags; list movement semantics are separate from tag semantics.
  - Do not copy exact stock names or financial values unless requested.
- Related routes: `lists/financial-table-list.md`, `lists/watchlist.md`, `lists/holdings.md`, `lists/audit.md`, `components-tags.md`

## Example: Tag System

- Screenshot: `assets/examples/tag-system.png`
- Figma link: https://www.figma.com/design/H7Z2WIuqgotu6iUVbdo63N/%E6%A0%87%E7%AD%BEskill?node-id=0-1&t=D7p8MuSL89WnLZbQ-1
- Page link:
- User note: This screenshot is the approved reference for global security and signal tags.
- What to imitate:
  - Neutral, blue, purple, and orange outline security tags across light and dark modes.
  - Strong gradient signal/risk tags.
  - Positive, neutral, and negative signal tags with clickable arrow only when applicable.
- What not to generalize:
  - Do not use tag red/green as financial movement colors.
  - Do not hardcode raw tag colors inside business components.
- Related routes: `components-tags.md`, `tags/security-tags.md`, `tags/signal-tags.md`, `tags/audit.md`

## Example: Mobile Home Workbench

- Screenshot: `assets/examples/mobile-home-workbench.png`
- Figma link:
- Page link:
- User note: This mobile app home/workbench is correct and can be used as a positive example.
- What to imitate:
  - Mobile app frame and structure, not web or marketing page structure.
  - Light and dark mode parity for the same workbench scenarios.
  - Fixed bottom bar behavior and app-like bottom control area.
  - Dense but readable workbench modules for quotes, tasks, recommendations, listening/assistant cards, and market information.
  - Restrained card hierarchy with soft surfaces and no heavy borders.
  - Technology feeling through background atmosphere, glow, and layered depth while keeping data readable.
  - Red/green financial state usage inside market data and list fields.
- What not to generalize:
  - Do not copy exact content, mascot, illustrations, or page order unless the user asks.
  - Do not assume every page needs all shown modules.
  - Do not use decorative effects where they reduce market-data readability.
- Related routes: `pages-mobile-app.md`, `components-bottom-bar.md`, `components-card.md`, `pages-market-list.md`, `visual-effects.md`

## Example: Market Overview Page Semantics

- Screenshot: `assets/examples/market-overview-watchlist.png`
- Figma link:
- Page link:
- User note: This screenshot is an approved reference for market-page semantics and app atmosphere. It is not a layout source for 自选列表, 持仓列表, or other financial table lists.
- What to imitate:
  - Market page density with clear hierarchy for indices, price, change percentage, volume, rankings, and news/list content.
  - Market semantics, page atmosphere, light/dark parity, and red-up/green-down behavior.
  - Red-up and green-down semantics applied to index values, list fields, rankings, and change indicators.
  - Active tab and selected state use red while inactive controls stay restrained.
  - Bottom action/control area remains app-like and fixed to the phone bottom when a complete page shell is requested.
  - Technology atmosphere in dark mode supports the market UI without reducing readability.
- What not to generalize:
  - Do not use this screenshot as the structure source for 自选列表, 持仓列表, or financial data tables.
  - Do not copy the old row-style watchlist, sparkline row, search bar, add button, or bottom navigation into a table-list prototype unless the user explicitly asks for a complete market page shell.
  - Do not replace `Watchlist and Holdings Table Lists`, `financial-table-list.md`, or `watchlist-generation.md` with this example.
  - Do not copy exact stock names, news content, icon positions, or chart annotations unless the user asks.
  - Do not assume every market page needs the same amount of news content.
  - Do not use red/green outside financial movement fields.
- Related routes: `pages-mobile-app.md`, `pages-market-list.md`, `components-tabs.md`, `components-tags.md`, `components-bottom-bar.md`, `visual-effects.md`

## Example: Trading Order Page

- Screenshot: `assets/examples/trading-order-page.png`
- Figma link:
- Page link:
- User note: This trading page is correct and can be used as a positive example.
- What to imitate:
  - Mobile trading workflow structure with order form, quote context, account/amount fields, buy/sell actions, and tabbed order sections.
  - Light and dark mode parity across order entry, holdings,委托,成交,历史, and stock detail trading views.
  - Dense order information while keeping labels, values, and actions aligned for fast operation.
  - Primary buy action uses strong red emphasis; sell action uses blue in this example's trading context.
  - Input-like fields use filled backgrounds without heavy borders.
  - Tabs and selected states remain compact and readable.
  - Bottom control area remains fixed and app-like.
  - Financial red/green semantics are applied to price and change fields inside lists and stock detail content.
- What not to generalize:
  - Do not copy exact stock names, account data, order quantities, or chart details unless the user asks.
  - Do not treat the sell-button blue as a universal secondary-button rule; follow the button rules unless the task is specifically a buy/sell trading action.
  - Do not reduce operational density into marketing-style cards or hero blocks.
- Related routes: `pages-mobile-app.md`, `pages-market-list.md`, `components-input.md`, `components-button.md`, `components-tabs.md`, `components-bottom-bar.md`, `components-card.md`

## Example: Stock Detail Page

- Screenshot: `assets/examples/stock-detail-page.png`
- Figma link:
- Page link:
- User note: This stock detail page is correct and can be used as a positive example.
- What to imitate:
  - Long mobile stock-detail structure with a strong top quote area, chart/盘口 area, tabs, news/research, financial charts, rankings, and detailed data modules.
  - Light and dark mode parity across the same dense content sequence.
  - High information density while keeping section hierarchy, numeric emphasis, and chart modules readable.
  - Red-up and green-down semantics across quote values, chart annotations, order book/盘口 values, rankings, and financial indicators.
  - Compact tabs and section headers that support scanning through a long page.
  - Cards and content blocks use restrained surfaces without heavy borders.
  - Bottom control area stays fixed and app-like through long scrolling content.
  - Dark mode uses technology atmosphere and layered depth without obscuring charts or text.
- What not to generalize:
  - Do not copy exact stock, chart data, financial values, article text, or module order unless the user asks.
  - Do not assume every stock detail page needs every shown analysis module.
  - Do not use chart decoration or glow in ways that reduce data readability.
- Related routes: `pages-mobile-app.md`, `pages-market-list.md`, `components-card.md`, `components-tabs.md`, `components-bottom-bar.md`, `visual-effects.md`

## Example: Holdings Portfolio Page

- Screenshot: `assets/examples/holdings-portfolio-page.png`
- Figma link:
- Page link:
- User note: This holdings page is correct and can be used as a positive example.
- What to imitate:
  - Mobile portfolio structure with clear title, top segmented entries, today's profit/loss, total profit/loss, total asset value, and holdings list.
  - Light and dark mode parity for the same holdings content.
  - Strong hierarchy for primary money figures while keeping secondary labels subdued.
  - Holdings rows align stock name/code, profit/loss, position/available quantity, and current/cost price for quick comparison.
  - Red-up and green-down semantics apply to profit/loss figures and percentage change fields.
  - List separators are subtle and support dense scanning.
  - Bottom control area remains fixed and app-like.
  - Dark mode uses subtle atmospheric depth without weakening numeric readability.
- What not to generalize:
  - Do not copy exact account numbers, stock names, holdings quantities, or financial values unless the user asks.
  - Do not assume every asset page should omit cards; use this example mainly for dense holdings-list structure.
  - Do not use red/green on non-profit/loss labels or decorative controls.
- Related routes: `pages-mobile-app.md`, `pages-market-list.md`, `components-tabs.md`, `components-divider.md`, `components-bottom-bar.md`, `visual-effects.md`

## Example: Dense Tags in Holdings

- Screenshot: `assets/examples/holdings-portfolio-page.png`
- Figma link:
- Page link:
- User note: This tag-dense holdings page is correct and can be used as a positive example.
- What to imitate:
  - Compact inline tags beside stock codes, such as condition-order and credit tags, without breaking list row alignment.
  - Top segmented/capsule tags for account scopes such as 自选, 触发, 模拟, 持股.
  - Tags remain secondary to stock names, profit/loss, quantities, and price columns.
  - Tag color stays semantic/classificatory and does not compete with red/green profit-loss values.
  - Light and dark mode tags preserve the same meaning while adapting contrast.
  - Dense tags fit inside mobile list rows without forcing awkward wrapping or oversized row height.
- What not to generalize:
  - Do not make tags the primary visual focus of holdings rows.
  - Do not use red/green tag styling unless the tag itself communicates positive/negative sentiment as defined in `components-tags.md`.
  - Do not copy exact stock names, tag text, quantities, or financial values unless the user asks.
- Related routes: `pages-mobile-app.md`, `pages-market-list.md`, `components-tags.md`, `components-tabs.md`

## Example: Overlays, Popovers, and Sheets

- Screenshot: `assets/examples/overlays-popovers-sheets.png`
- Figma link:
- Page link:
- User note: These modal, semi-floating, and dropdown states are correct and can be used as positive examples.
- What to imitate:
  - Mobile overlay behavior across light and dark modes, including bottom sheets, centered alerts, agreement dialogs, input sheets with keyboard, confirmation sheets, and dropdown management panels.
  - Dimmed mask treatment keeps background context visible but secondary.
  - Semi-floating and dropdown surfaces use app-like rounded containers and restrained hierarchy.
  - Popover/sheet content stays dense and operational, with clear title, close affordance, content area, and action buttons.
  - Primary confirmation actions use red emphasis; cancel/secondary actions stay visually lighter.
  - Inputs inside sheets use filled backgrounds and compact structure.
  - Dark mode overlays keep enough contrast for text, buttons, and critical warnings.
  - Bottom-related controls respect phone safe area and remain visually attached to the app shell.
- What not to generalize:
  - Do not copy exact copywriting, mascot position, keyboard content, stock names, or task data unless the user asks.
  - Do not make every overlay glassy or decorative; effects should support hierarchy and readability.
  - Do not add borders to filled sheets/cards/inputs when the approved surface treatment already separates them.
- Related routes: `pages-mobile-app.md`, `components-card.md`, `components-input.md`, `components-button.md`, `components-divider.md`, `components-bottom-bar.md`, `visual-effects.md`

## Example: Button System

- Screenshot: `assets/examples/buttons-system.png`
- Figma link:
- Page link:
- User note: This button screenshot is both a positive example and a button specification reference.
- What to imitate:
  - Six ordinary button types: primary, assist, outline, text, link, ghost-outline, and ghost-text.
  - Each type supports text-only, leading-icon, trailing-icon, badge-icon, and icon-only structures.
  - Each type supports large, medium, small, and mini sizes.
  - Pressed state uses 85% container opacity; disabled state uses 40% container opacity.
  - Primary button text and icons stay white in dark mode.
  - Icons follow text color, ordinary icons align horizontally with text, and badge icons align to text bottom.
  - Buttons use pill radius and mobile-app density.
- What not to generalize:
  - Do not use ordinary button rules for trading buy/sell actions.
  - Do not invent hover states for the current mobile app product.
  - Do not add raw color values in button components; use token references and derived opacity rules.
- Related routes: `components-button.md`, `buttons/types.md`, `buttons/sizes.md`, `buttons/icons.md`, `buttons/states.md`, `buttons/layout.md`, `buttons/audit.md`

## Example: Switch System

- Screenshot: `assets/examples/switch-system.png`
- Figma link:
- Page link:
- User note: This switch screenshot is both a positive example and a switch specification reference.
- What to imitate:
  - Switch, segmented switch, checkbox, radio, and icon toggle components across light and dark modes.
  - Switch sizes, thumb placement, loading spinner treatment, and disabled opacity.
  - Segmented switch compact state selection with text fitting and max 3 options.
  - Checkbox/radio state colors, strokes, selected dot/check, and disabled exceptions.
  - Eye, sound, watch, and pin icon toggles as state controls, not ordinary icon buttons.
- What not to generalize:
  - Do not treat switch-family controls as buttons or tabs.
  - Do not add internal text/icons except segmented switch text and specified checkbox/radio marks.
  - Do not invent hover or pressed states for switch components.
- Related routes: `components-switch.md`, `switches/switch.md`, `switches/segmented.md`, `switches/checkbox.md`, `switches/radio.md`, `switches/icon-toggles.md`, `switches/audit.md`

## Example: Radio and Checkbox Components

- Screenshot: `assets/examples/radio-checkbox-switches.png`
- Figma link:
- Page link:
- User note: This Figma component screenshot is an approved reference for radio, multi checkbox, and check-icon-only variants.
- What to imitate:
  - Radio and multi checkbox use a 24x24 layout slot with a centered 20x20 visible circular container.
  - Radio selected dot remains 10x10.
  - Multi checkbox selected state uses the approved 12x9 white check icon in both light and dark modes.
  - Check-icon-only variant uses the approved 18x13 red icon without a container.
  - Light and dark mode variants preserve the same geometry while resolving colors through switch tokens.
- What not to generalize:
  - Do not infer new icon paths or sizes beyond `assets/icons/checkbox-check.svg` and `assets/icons/check-icon-only.svg`.
  - Do not use this screenshot to change ordinary switch track/thumb rules.
  - Do not classify these controls as buttons.
- Related routes: `components-switch.md`, `switches/checkbox.md`, `switches/radio.md`, `switches/audit.md`
