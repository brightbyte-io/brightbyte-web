# Page metadata

Manage titles and descriptions under Admin > SEO Settings. Values are stored in PostgreSQL page_metadata and read through /api/metadata. Service pages and individual blog articles have separate entries. Clear both article fields to restore automatic metadata from its title and summary. The blog-template entry controls the automatic article title and fallback description. Administration always remains noindex.

pageMetadata.json now seeds new database entries during npm run db:migrate and provides build-time HTML fallback values. Migration never overwrites saved admin edits. Runtime navigation updates title, description, Open Graph and Twitter tags from the database without rebuilding.

The initial static HTML still uses the build-time homepage fallback; route metadata updates when JavaScript runs. Static hosting requires the configured Node API for database changes to appear.
