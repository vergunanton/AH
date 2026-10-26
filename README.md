# Agentic Horizon Design System (code)

React + [Next.js](https://nextjs.org) implementation of the **Agentic Horizon — Design System** Figma library (shadcn/ui **base-nova**). Use this repository as the source of truth for product UI and for [Figma Code Connect](https://www.figma.com/developers/code-connect).

**Canonical GitHub home:** [vergunanton/AH](https://github.com/vergunanton/AH) (personal account for Figma GitHub app). Development may also live on [anverhun/Cursor](https://github.com/anverhun/Cursor) branch `cursor/agentic-horizon-design-system-b158` until mirrored.

## Figma sources

| Asset | Link |
| --- | --- |
| Design system library | Team library **Agentic Horizon — Design System** (subscribed in UX/UI file) |
| Product screens | [Agentic Horizon — UX/UI](https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI) |

## Stack

- Next.js App Router, React 19, TypeScript
- Tailwind CSS v4 + shadcn/ui (`components.json` → `style: base-nova`)
- Tokens in `src/app/globals.css` (synced from Figma variables: Open Sans, Deloitte green `#86bc25`, sidebar neutrals, radii)

## Components (v1)

| Figma | Code |
| --- | --- |
| Button, IconButton | `@/components/ui/button` |
| Badge | `@/components/ui/badge` |
| Input, Label, Textarea | `@/components/ui/input`, `label`, `textarea` |
| Card | `@/components/ui/card` |
| Sidebar (+ menu primitives) | `@/components/ui/sidebar` |
| CommandItem | `@/components/ui/command` → `CommandItem` |
| Seperator | `@/components/seperator` (re-export of `Separator`) |
| IconButton | `@/components/ui/button` (`size="icon"`) |
| CatalogCard | `@/components/catalog-card` |

## Code Connect

1. Install the Figma Code Connect CLI (`@figma/code-connect`) and authenticate.
2. Point the Figma file/repo integration at this GitHub repository.
3. Publish mappings from the templates:

```bash
npx figma connect publish
```

Templates live next to components (`*.figma.ts`). Configuration: `figma.config.json`.

**Note:** Code Connect requires components **published** to the team library and an Org/Enterprise seat with Code Connect enabled. Templates reference node IDs discovered via Figma MCP from the UX/UI file.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the component gallery.

```bash
npm run build
npm run lint
```
