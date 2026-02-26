# SEO Audit Snapshot (2026-02-25)

## Scope

- Technical SEO readiness
- I18N indexability
- Metadata and structured data coverage
- On-page semantics and internal linking

## Findings Before This Implementation

1. Language switching was client-only (non-indexable locale variants).
2. Metadata coverage existed only on a small subset of pages.
3. `html lang` mismatched primary content language.
4. Structured data was missing from core templates.
5. Invalid internal links existed in footer navigation.
6. Heading hierarchy had invalid repeated `h1` usage in slider cards.
7. Image alt text quality was inconsistent on logos/partners section.

## Implemented Fixes in This Iteration

1. Locale URL model introduced (`/cs`, `/en`, `/de`), with locale-aware routing.
2. Root redirect to locale based on cookie/`Accept-Language`.
3. `next-intl` infrastructure added (routing, request config, messages).
4. Middleware logic replaced by `proxy.ts` and merged with bot protection.
5. Metadata helpers added and applied to key landing templates.
6. JSON-LD (`Organization`, `LocalBusiness`, `WebSite`) added at locale layout level.
7. Footer links corrected to valid internal routes.
8. Partner slider heading levels normalized (`h3` instead of `h1`).
9. Partner logo alt texts changed from generic labels to descriptive values.

## Remaining Work

1. Add unique metadata for every historical blog article page.
2. Add `Article` schema for blog detail templates.
3. Extend content localization coverage for high-priority pages and new posts.
4. Complete package upgrades and verify all runtime integrations on Next.js 16.
