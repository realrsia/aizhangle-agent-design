# Aesthetic Layer Routing

## Done Criteria
- Identify which files should own visual generation and visual review aesthetics in `zhangle-agent-design-system`.
- Use Akun component/foundation materials as the primary source for basic rules such as color, typography, spacing, radius, fonts, and checklists.
- Use Dengpeng design-generation materials as the supplemental source for visual language, atmosphere, composition judgment, and design-tasting review.
- Add a clear `DESIGN.md` aesthetic entrypoint if useful.
- Update `SKILL.md`, `manifest.json`, `README.md`, `AGENTS.md`, and `llms.txt` so Agents can discover the aesthetic layer.
- Validate Markdown routing plus JSON/YAML parse status after edits.

## Plan
- [x] Inspect the current main repository structure and branch state.
- [x] Compare Akun's component/foundation repo with Dengpeng's design-generation repo.
- [x] Add or update the aesthetic entrypoint and source-priority documentation.
- [x] Update Agent routing files.
- [x] Clean generated metadata and validate JSON/YAML.
- [x] Record the review.

## Review
- Added root `DESIGN.md` as the aesthetic entrypoint for visual generation and visual review.
- Defined source priority: Akun foundation/component sources own numeric values and implementation rules; Dengpeng design-generation sources supplement visual atmosphere, composition, hierarchy, density, icon policy, and design-tasting review.
- Updated `SKILL.md`, `manifest.json`, `README.md`, `AGENTS.md`, and `llms.txt` so Agents can discover the aesthetic route.
- Added source notes under `sources/akun-foundation/` and `sources/dengpeng-design-generation/`.
- Removed `.DS_Store` metadata files from the repository tree.
- Verified all JSON parses with `jq`; verified 72 YAML files parse with Ruby YAML under UTF-8 locale.
