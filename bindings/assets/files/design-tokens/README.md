# Design Tokens

This folder collects machine-readable token sources copied from existing packages.

## Current Sources

- `token-mapping.json`: canonical XZL token mapping.
- `xzl-color-tokens.csv`: original XZL color table.
- `button-tokens.json`, `switch-tokens.json`, `tag-tokens.json`, `list-tokens.json`: component-specific XZL token sources.
- `nzl-chat-tokens.json`: NZL chat/message fidelity token source.

## Source Priority

1. Use XZL token files for production UI generation.
2. Use NZL chat tokens for fidelity reconstruction.
3. Use AI Zhangle `DESIGN.md` token tables as semantic guidance until machine-readable AI tokens are extracted.

## 待补充

- Extract AI Zhangle tokens from `references/foundations/visual-language.md`.
- Define conflict resolution between NZL fidelity tokens and XZL production tokens.
