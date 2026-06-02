---
name: chat-fidelity-reconstruction
description: Use this skill when reconstructing or testing fidelity for AI chat and message screens based on the Figma source file QYybrg0tr5g1BMRIpGyEuo. This skill is optimized for page restoration tests, not full design-system expansion.
---

# Chat Fidelity Reconstruction

Use this skill for page fidelity testing against the Figma source file `QYybrg0tr5g1BMRIpGyEuo`.

This skill is for:

- chat page reconstruction
- message page reconstruction
- light and dark theme fidelity comparison
- multi-model restoration testing

This skill is not for:

- full component library generation
- deep cleanup of historical Figma instances
- inventing new tokens or new visual styles

## Source Of Truth

Read in this order:

1. `01 Foundations`
2. `Screen/Chat/Light`
3. `Screen/Chat/Dark`
4. `Screen/Message/Dark`
5. `00 Audit - Dedup`
6. `02 Skill Guide`

## Hard Rules

### Always

1. Always restore page structure before visual detail.
2. Always use the provided tokens from `tokens.json` before introducing raw values.
3. Always prefer renamed high-level layers over numbered `Frame` or `Group` layers.
4. Always keep light and dark themes aligned through semantic mapping.
5. Always preserve the current chat-product hierarchy: shell, layout, block, item, content, action.

### Never

1. Never use numbered `Frame`, `Group`, `Rectangle`, `Vector`, or `Ellipse` layers as semantic component sources.
2. Never treat decorative blue overlay strokes as core UI borders.
3. Never invent new colors, spacing values, or radii unless the source file cannot express the target.
4. Never expand this skill into a generic design-system build during fidelity testing.

## Priority Layers

Use these as the main reconstruction anchors:

- `Screen/Chat/Light`
- `Screen/Chat/Dark`
- `Screen/Message/Dark`
- `Shell/BottomInputBar`
- `Nav/ChatTopBar`
- `Entry/NotificationPill`
- `Layout/ChatViewport`
- `Layout/ConversationStack`
- `Layout/AssistantContentStack`
- `Layout/MessageFeed`
- `Block/AssistantResponse`
- `Block/AssistantAnswer`
- `Block/AnswerStatus`
- `Block/ReasoningPanel`
- `Block/AnswerFooter`
- `Block/RelatedQuestions`
- `Content/AnswerRichText`
- `Query/RelatedQuestion-01`
- `Query/RelatedQuestion-02`
- `Query/RelatedQuestion-03`

## Reconstruction Workflow

1. Read `01 Foundations` and load tokens from `tokens.json`.
2. Choose the closest source page from the three screen samples.
3. Rebuild the page shell and layout containers first.
4. Rebuild high-level blocks next.
5. Apply semantic colors, spacing, radius, and typography.
6. Add repeated items such as reasoning steps, related questions, and message links.
7. Only after structure is stable, refine visual detail.

## Acceptance Criteria

A reconstruction passes if:

- the correct source page was chosen
- shell and layout hierarchy match the source page
- light and dark theme usage follows semantic mapping
- spacing and radius match token values
- major blocks and repeated items are named and structured clearly
- no numbered historical layers are used as the main source of truth

## Known Limits

- This skill is optimized for fidelity testing only.
- Some deep historical instances inside the Figma file remain unnormalized.
- Foundations are intentionally shallow and cover only high-value reconstruction assets.
