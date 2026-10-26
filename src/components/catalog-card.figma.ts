// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=515-9077
// source=src/components/catalog-card.tsx
// component=CatalogCard
import figma from "figma"

const instance = figma.selectedInstance

const title = instance.getString("title") ?? instance.findText("Headline")?.textContent ?? "Catalog card"
const description =
  instance.getString("description") ??
  instance.findText("Description")?.textContent ??
  "Agent description"
const showPin = instance.getBoolean("showButton1") ?? false
const showSecondaryAction = instance.getBoolean("showButton2") ?? false

export default {
  id: "catalog-card",
  example: figma.code`<CatalogCard title="${title}" description="${description}" showPin={${showPin}} showSecondaryAction={${showSecondaryAction}} />`,
  imports: ['import { CatalogCard } from "@/components/catalog-card"'],
  metadata: {
    nestable: false,
  },
}
