# Versioning

Use semantic versioning for canonical object files when possible.

## Stable Object Fields

All canonical objects should include:

- `id`
- `kind`
- `schemaVersion`
- `version`
- `status`
- `title`
- `summary`
- `owners`
- `sourceRefs`

## Status Values

- `draft`: usable for exploration only
- `beta`: usable with review
- `stable`: can be used for production generation or review
- `deprecated`: retained for compatibility, not for new work
