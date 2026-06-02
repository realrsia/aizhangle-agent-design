# Market Patterns Reference

This reference helps the `financial-interaction-designer` skill map user requests into the correct AI Zhangle screen archetype and avoid common structural mistakes.

## Prompt To Archetype Heuristics

- `A股行情首屏`, `市场总览`, `大盘总览`, `看涨跌分布`
  - Prefer `market_overview`
- `自选页`, `我的自选`, `浏览自选标的`, `看行内信号`
  - Prefer `watchlist`
- `盯盘`, `按信号分组看股票`, `异动信号分组`
  - Prefer `grouped_signal`
- `个股详情`, `板块详情`, `主题详情`, `切换指标看明细`
  - Prefer `detail_list`
- `账户页`, `持仓页`, `资金明细`, `账户总览`
  - Prefer `account`

## Required First-Impression Blocks

### market_overview

The first meaningful screen read should establish market state, not helper chrome.

Business scan model:

- `state_scan`
  - 指数, 涨跌家数, 市场温度, breadth
- `opportunity_scan`
  - 热销榜, 人气榜, 涨幅榜, 净流入榜 preview
- `continuation_path`
  - 横滑榜单, 查看更多, 进入细分榜单或板块

Preferred composition patterns:

- `index_first_dense`
  - Use when the prompt emphasizes index movement, market opening state, or broad market orientation.
- `breadth_first_compact`
  - Use when the prompt emphasizes涨跌分布, breadth, or cross-market temperature.
- `leaderboard_preview_first_compact`
  - Use when the prompt emphasizes榜单入口, sector scanning, or quick leaderboard comparison in the first viewport.

Preferred opening order:

1. `top_nav`
2. `top_filter`
3. `top_summary`
4. `breadth_summary`
5. `rank_list`
6. `bottom_dock`

Good starting modules:

- `指数模块`
- `1月版/item/指数模块`
- dense ranking or leaderboard structures when available through approved components

Leaderboard behavior:

- `热销榜`, `人气榜`, `涨幅榜`, `跌幅榜`, `净流入榜` should read as compact horizontal slices in overview screens.
- Avoid representing these modules as a long vertical sequence unless the requested page is specifically a full榜单 page.

Density guidance:

- Default to `high_scan`
- Compress榜单 into preview slices before expanding supporting context
- Keep low-information spacing subordinate to summary and preview modules

### watchlist

The first meaningful read should answer "what do I hold or track, and what changed?"

Business scan model:

- `position_scan`
  - 名称, 现价, 涨跌幅, 核心行信息
- `signal_scan`
  - 行内信号, 小标签, 触发事件
- `exception_scan`
  - 异动, 提醒, 重要状态标签

Preferred composition patterns:

- `signal_dense_compact`
  - Use when the prompt emphasizes行内信号 and per-row annotations.
- `movement_scan_dense`
  - Use when the prompt emphasizes涨跌幅, latest move, or compact numeric scanning.
- `group_switch_compact`
  - Use when the prompt emphasizes watchlist categories or top-level grouping changes.

Preferred opening order:

1. `top_nav`
2. `top_filter`
3. `list_header`
4. `list_body`
5. row-level `signal_tag` or `micro_tag`
6. `bottom_dock`

Good starting modules:

- `列表信息`
- `1月版/信号标签`
- `1月版/小标签`

Density guidance:

- Default to `high_scan`
- Expand `list_body` before expanding decorative or explanatory modules
- Keep header and filters compact so more rows enter the first viewport

### grouped_signal

The first meaningful read should answer "which group is active, and what symbols belong to it?"

Business scan model:

- `group_scan`
  - 当前分组, 切换路径, active context
- `signal_scan`
  - 当前组内的信号密度和标的分布

Preferred composition patterns:

- `group_pivot_first`
  - Use when switching groups is the main job in the first viewport.
- `signal_stack_first`
  - Use when the active signal grouping itself is the main scanning surface.

Preferred opening order:

1. `top_nav`
2. `top_filter`
3. `local_filter`
4. `list_body`
5. optional `list_header`
6. `bottom_dock`

Density guidance:

- Default to `high_scan`
- Let local filter and list body dominate the first viewport
- Avoid oversized summary chrome unless the prompt explicitly asks for context-first grouping

### detail_list

The first meaningful read should establish the subject and the active metric context.

Business scan model:

- `subject_scan`
  - 当前标的或主题 headline
- `metric_scan`
  - 指标切换, 关键摘要值, 当前上下文

Preferred composition patterns:

- `metric_context_first`
  - Use when the prompt emphasizes指标切换 or contextual metric comparison.
- `subject_summary_first`
  - Use when the prompt emphasizes the subject, headline values, or immediate detail orientation.

Preferred opening order:

1. `top_nav`
2. `top_summary`
3. `local_filter`
4. `list_body`
5. `detail_footer` or `assistant_footer` only if recipe permits
6. `bottom_dock`

Density guidance:

- Default to `balanced`
- Keep summary and metric context compact enough to preserve the list continuation path

### account

The first meaningful read should establish assets, holdings, or account status before secondary tooling.

Business scan model:

- `balance_scan`
  - 总资产, 可用资金, 账户状态
- `holding_scan`
  - 持仓主体, 仓位变化, 盈亏
- `cashflow_or_position_change_scan`
  - 资金变动或仓位变化入口

Preferred composition patterns:

- `asset_summary_balanced`
  - Use when total assets, balance, or account state is the primary headline.
- `holding_scan_dense`
  - Use when holdings, positions, or detailed account rows are the main scan target.

Preferred opening order:

1. `top_nav`
2. `top_summary`
3. `list_header`
4. `list_body`
5. `bottom_dock`

Density guidance:

- Default to `balanced`
- Summary should be clear but not oversized
- If the prompt emphasizes持仓扫描, compress summary and expand dense rows earlier

## Common Structural Misfires

- Using `signal_tag` as the primary page body
- Building a market screen from capsule tabs plus helper pills only
- Promoting assistant or companion modules into the main market zone
- Replacing dense list rows with entry controls such as `行情/自选` or `行情/提醒`
- Solving missing structure by adding more tags instead of restoring summary or list hierarchy
- Treating a novel arrangement of pseudo-cards as "creative" when the recipe already defines the required structure
- Using non-instance lookalike tabs, nav bars, or tags to fake component-library compliance

## Retry Guidance

If a first draft looks like an "Agent demo page" instead of a finance screen:

1. Re-check the chosen `screen_archetype`
2. Rebuild from required zones only
3. Remove all non-required pills, tags, and helper modules
4. Re-introduce row annotations only after the main hierarchy reads correctly
