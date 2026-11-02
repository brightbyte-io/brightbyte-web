# Page metadata

Edit pageMetadata.json for title and description values. pages holds main routes, services holds each service slug, and defaults is the fallback. Admin is marked noindex.

Blog article metadata uses database title and summary, controlled by blog.titleTemplate and blog.descriptionFallback. Add a slug entry under blog.overrides with title and description to override an article centrally.

The shared PageMetadata component updates document title, description, Open Graph, Twitter and robots tags when navigating. The Vite build uses JSON home metadata in the initial HTML. Other route tags update when JavaScript runs; static hosting does not prerender unique HTML for each route.
