# Impeccable Adaptation For AI Zhangle

This reference captures the parts of Impeccable's design-tasting method that are useful for AI Zhangle without turning the project into a dependency on an external skill system.

## What We Borrow

- Anti-pattern thinking: detect structurally valid but visually weak drafts
- Steering mindset: review a draft in explicit passes instead of one vague "make it prettier" step
- Environment portability: keep the rules in static repo files so local agents can read them directly

## What We Do Not Borrow

- External command dependencies
- Generic web-landing heuristics as the primary visual standard
- Styling moves that conflict with AI Zhangle's dense financial product posture

## AI Zhangle-Specific Anti-Patterns

- Tag wall: a page looks busy because tags and capsules replaced real hierarchy
- Card salad: financial data is split into too many generic cards
- Agent drift: assistant or companion controls become the page subject instead of the market or account subject
- Theme drift: dark and light modes use different visual logic instead of the same geometry with different token roles
- Icon drift: more than one outline family appears in a single viewport without a clear reason
- Type drift: text leaves the verified type ramp and starts using ad-hoc sizes
- Layout drift: text and values escape module bounds because the screen is not using Auto Layout correctly
- Chart drift: production charts are mimicked with loose shapes instead of being sourced from a chart library
- Rank drift: overview榜单 sections are piled vertically instead of behaving like compact horizontal slices

## Review Lens

When tasting a draft, ask:

1. Does the screen read as a finance product first?
2. Is the primary market or account information obvious in the first viewport?
3. Are tags and capsules supporting scan speed instead of replacing structure?
4. Are text sizes snapped to the verified ramp instead of improvised per block?
5. Are cards, rows, and chart wrappers structurally stable under Auto Layout?
6. Are real charts sourced from a chart library instead of hand-built shapes?
7. Do overview榜单 modules behave like horizontal slices instead of stacked cards?
8. Does the dark/light switch preserve shape, rhythm, and token semantics?
9. Would removing one tertiary control improve clarity immediately?

## Preferred Actions

- Remove before adding
- Compress before restyling
- Re-rank information before touching atmosphere
- Snap typography back to the approved ramp before resizing anything
- Rebuild broken modules with Auto Layout before nudging positions manually
- Replace ad-hoc chart shapes with chart-library output before polishing their shell
- Prefer semantic icon substitution over multi-library icon mixing
- Keep one clear focal point and one primary action
- Prefer calm precision over flashy novelty
