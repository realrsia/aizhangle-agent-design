# PR 19 Structure Update

Done means:
- PR #19 changes are applied on top of latest `origin/main` locally.
- Old chat-background references are updated to the PR's new `背景/母组件` source.
- Message-feed reasoning checklist is tightened to require the verified light reasoning variant.
- YAML files parse cleanly and Git reports no textual conflicts.

Tasks:
- [x] Create a local working branch from latest `origin/main`.
- [x] Apply PR #19 changes locally without pushing.
- [x] Update stale chat-background references in checklist, scenario, and meta.
- [x] Tighten message-feed checklist reasoning rule.
- [x] Validate YAML and diff scope.
- [x] Summarize final result and remaining decision.

Review:
- Created local branch `pr-19-structure-update` from latest `origin/main`.
- Applied PR #19 locally with no textual conflicts.
- Updated stale chat-background references from `400:25043` / `背景/背景` to `400:26745` / `背景/母组件`, with light `400:26805` and dark `400:26896`.
- Tightened `message-feed-reasoning-not-generic-card` so light reasoning must use `智能体输出/思考链` `状态=完成态, 1月版=On, Dark=Off` rather than `item/思考链/1月版`.
- Verified staged YAML parses cleanly and `git diff --cached --check` passes.
