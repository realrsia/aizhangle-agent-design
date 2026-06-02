# Trading Input Icons

Use this file for trading-input icon source, rendered sizes, token color, edge visibility, and static HTML prototype reliability.

Use approved icon library assets from `assets/icons/` or an equivalent shared icon component asset. Source SVG files keep the icon-library default size and style; rendered size is controlled by this reference.

## Rule: Render approved icon sizes

Use the approved trading input icons and render them at product sizes.

Why:
The source SVGs are library assets. Their file viewport is not the component's rendered size.

Verify:

- Search, clear, dropdown, plus, minus, delete, and edit icons render at `20x20`.
- The quantity/amount switch icon renders at `14x14`.
- Icons use the token assigned by state; do not preserve hardcoded SVG white fill in rendered output.
- Disabled icon and symbol nodes apply `40%` opacity.
- Icon nodes reference `assets/icons/` or equivalent approved icon component assets.
- Do not hand-draw or approximate plus, minus, dropdown, clear, search, delete, edit, or switch icons when the approved SVG asset exists.
- Standalone HTML prototypes may inline the approved SVG content, but they must not hand-draw approximate icon shapes.

## Rule: Verify final icon visibility in previews

Trading input icons must be visibly rendered in the target preview environment.

Why:
DOM nodes, resource paths, and CSS dimensions can appear correct while the final icon is invisible because of mask behavior, fill/stroke inheritance, missing assets, or same-color rendering.

Verify:

- Each required icon has non-zero rendered dimensions.
- Each required icon has visible fill, stroke, or pixels in the rendered preview.
- Icon color resolves to the required token for its state.
- Icon color has visible contrast against the input background.
- Static HTML, `file://`, or local preview artifacts use inline approved SVG or reliable relative/served assets rather than relying only on external SVG masks.
- Do not mark an icon as passing by DOM presence, path existence, or CSS width/height alone.
