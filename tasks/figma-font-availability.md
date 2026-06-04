# Figma Font Availability Audit

Date: 2026-06-04
Figma file: `设计仓库`
Method: `figma.listAvailableFontsAsync()` and `figma.loadFontAsync()` in the current Figma MCP generation runtime, plus local macOS font inspection.

## Summary

- Current Figma MCP runtime reports `7739` font entries across `1723` families.
- `PingFang SC` cannot be loaded by Figma MCP in this environment.
- `涨乐财富体` cannot be loaded by Figma MCP in this environment.
- `ZLCaiFuTi` also cannot be loaded by Figma MCP, even though the font files exist locally.
- The safe current fallback for Chinese UI text is `Noto Sans SC`.
- The safe current fallback for financial numerics is either `Noto Sans HK` or `Digital Numbers`, depending on whether a special numeric look is acceptable.

## Canonical Fonts From DESIGN.md

| Intended role | Canonical font | Local machine status | Figma MCP status | Result |
|---|---|---:|---:|---|
| Chinese UI text | `PingFang SC` | Present as macOS reserved/system asset | Not callable | Cannot use directly in generated pages |
| Financial numerics | `涨乐财富体` | Present in user fonts at `/Users/penn/Library/Fonts/EagleApp/ZLCaiFuTi-*.ttf` | Not callable as `涨乐财富体` or `ZLCaiFuTi` | Cannot use directly in generated pages |

## Figma MCP Callable Fonts Tested

### Recommended For Chinese UI Text

| Font family | Styles confirmed | Source classification | Notes |
|---|---|---|---|
| `Noto Sans SC` | `Thin`, `Light`, `DemiLight`, `Regular`, `Medium`, `Bold`, `Black` | Figma runtime / not local system-dependent | Best current replacement for `PingFang SC` |
| `Noto Sans HK` | `Thin`, `Light`, `DemiLight`, `Regular`, `Medium`, `Bold`, `Black` | Figma runtime / not local system-dependent | Good fallback when matching previous generated frames |
| `Noto Sans TC` | `Thin`, `Light`, `DemiLight`, `Regular`, `Medium`, `Bold`, `Black` | Figma runtime / not local system-dependent | Use only if TC glyph flavor is acceptable |
| `Noto Sans JP` | `Thin`, `Light`, `DemiLight`, `Regular`, `Medium`, `Bold`, `Black` | Figma runtime / not local system-dependent | Avoid for simplified Chinese UI unless needed |
| `Noto Sans KR` | `Thin`, `Light`, `DemiLight`, `Regular`, `Medium`, `Bold`, `Black` | Figma runtime / not local system-dependent | Avoid for simplified Chinese UI unless needed |

### Callable But Not Preferred For This Product UI

| Font family | Styles confirmed | Notes |
|---|---|---|
| `Inter` | Full common weights | Good Latin UI font, not enough for Chinese UI copy |
| `Roboto` | Full common weights | Good Latin UI font, not enough for Chinese UI copy |
| `IBM Plex Sans` | Common weights | Good Latin UI font, not enough for Chinese UI copy |
| `Montserrat` | Full common weights | More brand/display-like; not ideal for dense Chinese finance UI |
| `Barlow Condensed` | Full common weights | Condensed Latin; useful for compact Latin/numeric labels, not Chinese body text |

### Numeric Candidates

| Font family | Styles confirmed | Source classification | Notes |
|---|---|---|---|
| `Noto Sans HK` | `Regular`, `Medium`, etc. | Figma runtime | Conservative numeric fallback; visually close to UI fallback |
| `Digital Numbers` | `Regular` | User-installed and callable | More digital/display-like; use only when that look is desired |
| `Roboto Mono` | Common mono styles | Figma runtime | Can work for tabular numeric test labels, but not brand-canonical |
| `IBM Plex Mono` | Common mono styles | Figma runtime | Can work for tabular numeric test labels, but not brand-canonical |

## Local Fonts That Exist But Are Not Callable In Figma MCP

### macOS/System Fonts

These exist locally but failed `figma.loadFontAsync()` in the MCP runtime:

- `PingFang SC`
- `Hiragino Sans GB`
- `Heiti SC`
- `Helvetica Neue`
- `Menlo`
- `Arial Unicode MS`

### User/Custom Installed Fonts

These exist in `/Users/penn/Library/Fonts` but failed `figma.loadFontAsync()`:

- `涨乐财富体` / `ZLCaiFuTi`
- `Source Han Sans SC`
- `Alibaba PuHuiTi 3.0`
- `DingTalk Sans`
- `WenCang`
- `SF Pro Display`
- `DINPro`

### User/Custom Installed And Callable

- `Digital Numbers` / `Regular`

Note: `Montserrat` and `Barlow Condensed` are installed locally and also callable in Figma MCP, but they are common web-font families. Treat them as callable Figma runtime fonts, not proof that MCP can reliably load every local custom font.

## Practical Rule For Future Generation

Until Figma MCP can load the canonical product fonts:

- Use `Noto Sans SC` for Chinese UI text.
- Use `Noto Sans HK` for ordinary financial numerics when visual consistency matters.
- Use `Digital Numbers` only for numeric tests where a display-number texture is acceptable.
- Mark generated frames as `font fallback` when they use these substitutes.
- Do not claim generated Figma pages are final typography-compliant with `DESIGN.md` until `PingFang SC` and `涨乐财富体` are truly callable.
