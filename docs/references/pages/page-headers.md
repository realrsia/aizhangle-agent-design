# Page Headers

## Asset map

Use normalized asset names in rules and output. Do not cite raw source filenames as the implementation contract.

- Home sidebar entry: `assets/page-headers/home-sidebar-entry-light.png`, `assets/page-headers/home-sidebar-entry-dark.png`.
- Level-2 close button: `assets/icons/header-close-filled-light.svg`, `assets/icons/header-close-filled-dark.svg`.
- Level-2 tabs: `assets/page-headers/level2-tab-{2char|3char}-{selected|unselected}-{light|dark}.png`.
- Level-3 back icon: `assets/icons/header-back-outlined.svg`.
- Full-screen conversation icons: `assets/icons/header-message-outlined.svg`, `assets/icons/header-play-outlined.svg`.
- Half-screen conversation icons: `assets/icons/header-close-outlined.svg`, `assets/icons/header-fullscreen-outlined.svg`, `assets/icons/header-play-outlined-sheet.svg`.

## Rule: Choose one header type per visible page shell

Use one of five header types: home, level-2, level-3, full-screen conversation, or half-screen conversation. Full page headers sit below the `47px` top iOS system region. Half-screen conversation headers do not include the device system region.

Why:
Each header type has different height, alignment, assets, and mode behavior. A generic title bar will not match the system.

Verify:

- The output names the selected header type.
- Full pages reserve the top iOS system region before the Header; half-screen conversation sheets include only the sheet Header.
- Header background is transparent and follows `references/page-backgrounds.md`.

## Rule: Home header uses only the sidebar entry

Home pages use a `40px` header after a `9px` gap below the `47px` top iOS system region. Complete top structure height is `47 + 9 + 40 = 96`.

Why:
The home header is a compact right-side entry, not a title/search/nav structure.

Verify:

- Top iOS system region height is `47px`; its rendering strategy comes from `references/platform-ios-chrome.md`.
- Gap from the top iOS system region to home header is `9px`.
- Header layout box is `40 x 40`, positioned at `x=330`, `y=56` on a `390 x 844` page.
- The layout box right edge is `20px` from the screen right edge.
- The sidebar entry asset is mode-matched and displayed at its native `78 x 78` visual size; the visual shadow/glow may overflow the `40 x 40` layout box.
- No title, search, tab, or bottom divider appears in the home header.

## Rule: Level-2 headers use left information and optional right tabs

Level-2 headers apply to 自选, 持仓页, trading pages, stock detail pages, and pages entered from level-1 entries. Gap from the top iOS system region is `0`. Use one of three heights:

- `34px` header, complete top height `81`: close button + title, no tab.
- `39px` header, complete top height `86`: close button + title + right tabs.
- `53px` header, complete top height `100`: close button + title + description + right tabs.

Why:
Level-2 pages combine a left page identity with optional compact mode tabs on the right.

Verify:

- Close button uses `header-close-filled-light.svg` or `header-close-filled-dark.svg`, displayed at `19 x 19` for level-2 pages.
- Close button left edge is `18px` from the screen left edge.
- Title is `24px` PingFang SC Medium, color `text-a` (`xzl/color/text/primary`), and starts `10px` to the right of the close-button layout box.
- Description text is `14px` PingFang SC Regular, color `text-c`; numeric runs use 涨乐财富体 Regular at `14px`, also color `text-c`.
- In the `34px` variant, close button and title are vertically centered in the header.
- In the `39px` variant, close button and title are vertically centered to each other; the left row and tab group top-align to the header top.
- In the `53px` variant, close button vertically centers to the title+description text group; the text group and tab group top-align to the header top, with tabs aligned to the title row.
- Avoid title strings that collide with right tabs; list this as an open gap instead of compressing, wrapping, or inventing alternate layout.

## Rule: Level-2 right tabs use image backgrounds and tokenized text

When level-2 tabs are present, place them in the right area.

Why:
The tabs use exported background assets with glow/selected effects, so ordinary CSS pills will not match.

Verify:

- Tab group right edge is `18px` from the screen right edge.
- Multiple tabs have `10px` horizontal spacing.
- Two-character tab layout box is `50 x 35`; three-character tab layout box is `64 x 35`.
- Selected visual assets may overflow to `56 x 45` for two characters and `70 x 45` for three characters; layout still uses the standard `50/64 x 35` box.
- Text is horizontally centered inside the tab.
- Text top offset inside the tab background is `7.5px`.
- Selected text uses PingFang SC Medium `14px`, token `text-b`.
- Unselected text uses PingFang SC Regular `14px`, token `text-c`.
- Light/dark mode selects the matching tab background asset and token mode values.

## Rule: Level-3 header is a centered-title nav bar

Level-3 pages are pages entered from level-2 pages. They use a `44px` header below the `47px` top iOS system region; complete top height is `47 + 44 = 91`.

Why:
Level-3 pages need a stable iOS-style return path and centered page title.

Verify:

- Back icon is `24 x 24`, color `text-a`, from the system icon assets.
- Back icon left edge is `12px` from the screen left edge and vertically centered in the `44px` header.
- Title is centered relative to the full `390px` page width, not merely between left and right controls.
- Title is PingFang SC Medium `17px`, color `text-a`.
- Avoid overlong titles that collide with right-side actions; list this as an open gap instead of wrapping or compressing.
- Right side is one of: none; one text button; or up to two `24 x 24` icons.
- Text button uses PingFang SC Regular `13px`, color `text-a`, with right edge `18px` from the screen right edge.
- Right icon buttons use color `text-a`, have `12px` spacing between icons, and the rightmost icon right edge is `18px` from the screen right edge.
- No search, tab, or bottom divider appears.

## Rule: Full-screen conversation header uses compact controls

Full-screen conversation pages use a `44px` header below the `47px` top iOS system region; complete top height is `91`.

Why:
Conversation pages prioritize the chat surface and use compact icon controls without a title.

Verify:

- Left close button reuses the filled close asset pair, displayed at `22 x 22`, with left edge `16px` from the screen left edge.
- Right icons display at `22 x 22`, vertically centered in the `44px` header.
- Right icon order from left to right is message, then play.
- The two right icons have `24px` spacing; the play icon right edge is `16px` from the screen right edge.
- Light mode uses `xzl/color/primary/dark-blue` for right icons.
- Dark mode uses `xzl/color/text/primary` for right icons.
- This is a mode-specific token switch, not one token's light/dark mapping.
- No title, search, tab, or bottom divider appears.

## Rule: Half-screen conversation header belongs to the sheet

Half-screen conversation sheets use a `44px` header and do not include the device top system region. The header is fixed at the top of the sheet and does not scroll with sheet content.

Why:
The half-screen sheet is a floating conversation surface with its own chrome.

Verify:

- Header height is `44px`.
- Close icon displays at `22 x 22`, left edge `16px`, vertically centered.
- Right icon order from left to right is fullscreen, then play.
- Right icons display at `22 x 22`, use `xzl/color/text/primary`, have `24px` spacing, and the rightmost icon right edge is `16px` from the sheet right edge.
- Header is transparent over the sheet background image.
- No device system region, title, search, tab, divider, or drag handle appears.
