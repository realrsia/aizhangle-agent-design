# Financial Table Generation Protocol

Use this file whenever generating, adjusting, or reviewing a financial table list module, including 自选列表, 持仓列表, 持股列表, quote tables, and future table-like financial lists.

This is the shared execution protocol. Scenario-specific files add differences, but they must not bypass this sequence.

## Rule: Start from the list scenario and field set

Identify the list scenario and requested fields before drawing the UI.

Why:
The same page can contain titles, tabs, search, statistics, and a financial table module. If the page shell is treated as the list structure, required table nodes are often omitted.

Verify:

- Decide whether the module is 自选列表, 持仓列表, 持股列表, or another financial table list.
- Load `references/lists/financial-table-list.md`.
- Load the matching scenario file, such as `watchlist.md` or `holdings.md`.
- Load any scenario contract and output checklist when available.
- Page chrome may surround the module but must not replace the module contract.

## Rule: Build the shared column model first

Define the complete column model before rendering header or body cells.

Why:
Repeated generation failures come from drawing rows visually first and adding headers afterward. That causes missing icons, separate scroll states, column drift, and clipped final fields.

Verify:

- The output names a `columnModel` before header and row nodes.
- Each column has a stable `columnId`, field name, width, role, alignment, frozen/scrolling state, and filterability.
- Every requested field maps to one column in the column model.
- Do not reduce a requested financial table to a simpler row/card summary unless the user explicitly asks for a non-table list.

## Rule: Render table regions from the same model

Render table regions only after the column model exists.

Why:
The header and body must share geometry and scroll state to remain auditable.

Verify:

- Render `frozenHeader` from frozen column definitions.
- Render `scrollHeader` from scrolling column definitions.
- Render `frozenRows` from the same frozen column definitions.
- Render `scrollRows` from the same scrolling column definitions.
- Header cells and body cells reference the same `columnId` values.
- Header and body right edges match for every scrolling data column.

## Rule: Instantiate required templates as rendered nodes

Use approved templates for reusable table parts; a note or asset path alone is not enough.

Why:
Small affordances such as operation icons and sort/filter icons are repeatedly lost when treated as decorative notes.

Verify:

- Every filterable header instantiates `assets/templates/filterable-table-header.json`.
- Scenario-specific frozen headers instantiate their approved template, such as `watchlist-header-tools.json` or `holding-list-left-header.json`.
- Required icons are rendered child nodes or equivalent visible structure, not only listed in notes.
- In standalone HTML/file:// prototypes, P1 icons use inline SVG or reliable copied relative assets and show rendered geometry.

## Rule: Bind one horizontal scroll state

Frozen areas stay fixed and scroll areas move together.

Why:
Independent header scroll, frozen-column drift, or transparent frozen layers break financial table comparison.

Verify:

- The frozen header and frozen body are outside the horizontal scroll transform.
- The scrolling header follows the body scroll state; it is not independently draggable.
- Frozen layers mask scrolling content and cover the left inset.
- The right-side scroll area can reveal the final field completely with the required right safety padding.

## Rule: Use divider and layer overlays consistently

Render dividers as table overlays, not local cell borders.

Why:
Local borders can be clipped by frozen layers or disappear in the fixed column area.

Verify:

- `dividerOverlayLayer` is above `frozenHeaderLayer`, `frozenBodyLayer`, `scrollHeaderLayer`, and `scrollBodyLayer`.
- Header/body and row dividers start at `18px`.
- Dividers extend to the viewport right edge with `0px` right inset.
- Dividers are not hidden by frozen-column backgrounds or scroll masks.

## Rule: Complete artifact validation before delivery

Scenario output checklists are part of generation, not optional documentation.

Why:
Visual similarity can hide missing nodes. Checklist evidence makes the artifact inspectable.

Verify:

- Complete the scenario output checklist when one exists.
- Include pass/fail/notApplicable status and evidence for every P1 item.
- If any P1 item fails, revise the artifact before delivery.
- Do not mark an item pass unless the artifact exposes a visible node, named layer, component, data attribute, or structure-tree entry as evidence.
