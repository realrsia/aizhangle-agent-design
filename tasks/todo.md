# Authoring Structure Expansion TODO

## Scope

- [x] Read Feishu wiki structure guidance through `lark-cli`.
- [x] Inspect updated local authoring files for AI Chat, Page Background, Trading modules, and Top Nav drift case.
- [x] Update only required canon/checklist/binding/docs files for this authoring batch.
- [x] Keep `authoring/` unchanged.
- [x] Run YAML/JSON parse validation on changed structured files.
- [x] Record final review notes and unresolved verification items.

## Done Criteria

- Page Background has canon, checklist, Figma binding, and index entries.
- AI Chat component bindings and rules reflect the current dialog-flow source nodes.
- Trading module rules keep source priority and top-nav drift risks explicit.
- No unrelated component files are changed.
- YAML/JSON parsing succeeds for updated files.

## Review

- Added Page Background canon/checklist/index/binding entries from updated authoring.
- Synced AI Chat background/input/topbar/message-feed canon and Figma bindings to current design-repository dialog-flow nodes.
- Kept message-feed embedded business content refs as `TODO_VERIFY_WITH_FIGMA` where the updated brief no longer confirms component keys.
- Resolved Figma verification items with Figma Plugin API and replaced remaining Page Background human-confirm item with fixed top 390x844 plus bottom-color long-page extension.
- Did not modify `authoring/` files.
- YAML/JSON parse validation passed with Ruby.
