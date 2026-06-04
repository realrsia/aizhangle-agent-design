# Lessons

## Figma Bottom Bar Test Generation

- When the user has selected reference items in Figma, inspect those selected/reference items first and use their layer names, component variant names, and visible values to name generated test frames and populate realistic sample data.
- Do not leave Bottom Bar generated tests with placeholder values such as `文字文字` or `1000.00`; replace them with realistic finance-format values before reporting completion.
- When a human provides exact review/test copy, update both the generated Figma frame and the related authoring/case-study examples so future runs use the same pattern.

## Figma Font Generation

- Before promising typography compliance in generated Figma pages, check `figma.listAvailableFontsAsync()` and `figma.loadFontAsync()` for the exact font family and style.
- In the current Figma MCP runtime, `PingFang SC`, `涨乐财富体`, and `ZLCaiFuTi` are not callable even though some are present on the local machine.
- Until canonical fonts are callable, use `Noto Sans SC` for Chinese UI text and `Noto Sans HK` or carefully marked `Digital Numbers` for numerics, and label outputs as font fallback.
