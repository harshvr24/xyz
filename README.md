# XYZ Tannery

The website for XYZ Tannery, a working name for a leather and textile house that makes saddlery, horse rugs, horse accessories, and dog products for export buyers.

The site presents the house, its four product ranges, how the goods are made, and a way to request a quote. It is a bold editorial layout in a heritage palette: an ivory canvas, espresso ink, oxblood and gold accents, and serif display type.

## Project status

The site is complete in structure and in **placeholder status** for content.

- Home, collections, craft, about, awards, contact, terms, and privacy routes are built.
- The catalogue holds four ranges and 41 products. 25 products carry a placeholder photograph and 16 show a labelled placeholder frame.
- Team entries, awards, addresses, phone numbers, and the email address are placeholders.
- While `contentStatus` in `app/lib/site.ts` is `placeholder`, every page is served `noindex, nofollow` and `robots.txt` disallows crawling.

## Technology

- Nuxt 4 and Vue 3
- TypeScript
- Tailwind CSS v4
- Shadcn Vue with Reka UI
- Nuxt Icon with Lucide
- Nuxt Image
- Nuxt Fonts with Boska and Switzer from Fontshare
- VueUse
- Lenis
- GSAP
- Zod

## Local development

Requirements:

- A current Node.js LTS release
- npm

~~~bash
npm install
npm run dev
~~~

The application is available at http://localhost:3000 by default.

## Available commands

~~~bash
npm run dev
npm run typecheck
npm run build
npm run generate
npm run preview
~~~

`npm run build` prerenders every route, including all range and product pages.

## Configuration

Copy `.env.example` to `.env` and set what the environment needs.

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_SITE_URL` | The public origin, for example `https://www.example.com`. Canonical links, Open Graph URLs, the sitemap, and breadcrumbs use it. Required for a production build. |
| `NUXT_RESEND_API_KEY` | Server-only key for sending enquiry emails through Resend. |
| `NUXT_ENQUIRY_TO` | The inbox that receives enquiries. |
| `NUXT_ENQUIRY_FROM` | The verified sender address for enquiry emails. |

Without the three enquiry values, the form works in development and logs that delivery is not configured. In production it shows the visitor an error with a link to email instead.

Images use the Vercel image provider. To deploy elsewhere, change `image.provider` in `nuxt.config.ts`.

## Where things live

~~~text
app/lib/site.ts        Brand name, contacts, navigation, content status
app/lib/catalogue/     Ranges and products, one file per range
app/components/        Page sections, cards, shared blocks, UI primitives
app/composables/       Motion, SEO, and integration composables
app/pages/             One file per route
server/                Enquiry endpoint, sitemap, robots
shared/schemas/        Validation shared by the form and the server
public/images/products Product photographs
~~~

To rename the company, change `name`, `legalName`, `description`, `tagline`, and `cookieName` in `app/lib/site.ts`.

To add or change a product, edit its range file in `app/lib/catalogue`. To add a photograph, place it under `public/images/products/<range>/` and add an `image` entry with its width, height, and `fit`.

See [Architecture](docs/ARCHITECTURE.md) for dependency boundaries and placement rules.

## Launch checklist

Complete every item before setting `contentStatus` to `final`.

- [ ] Confirm the right to use the design and code this site was built from.
- [ ] Replace the working name, tagline, and description in `app/lib/site.ts`.
- [ ] Replace the placeholder email, phone numbers, unit addresses, city, and time zone.
- [ ] Replace every product photograph marked `status: 'placeholder'` with photography the house owns or has licensed, and add photographs for the 16 products without one.
- [ ] Supply hero, workshop, and unit photography.
- [ ] Have the house confirm all product copy, the craft and process copy, and the FAQ answers.
- [ ] Replace the team placeholders with names, roles, portraits, and profiles.
- [ ] Replace the awards placeholders with real awards, certificates, and memberships, or remove the page.
- [ ] Publish the terms and privacy policies.
- [ ] Set `NUXT_PUBLIC_SITE_URL` and the three enquiry variables, then send a test enquiry.
- [ ] Set `contentStatus` to `final`, rebuild, and confirm `robots.txt` and the robots meta tag allow indexing.

## Documentation

- [AI agent guide](AGENTS.md)
- [Project rules](docs/RULES.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Content and SEO guide](docs/CONTENT_GUIDE.md)
- [AI workflow and Git delivery](docs/AI_WORKFLOW.md)
- [Claude Code guide](CLAUDE.md)

## Contributing

Keep changes focused, reuse established patterns, and verify the affected behavior before delivery. Review and update the relevant documentation with every feature, refactor, bug fix, dependency update, configuration change, or design-system change.
