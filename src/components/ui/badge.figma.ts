// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=987-ffc68
// source=src/components/ui/badge.tsx
// component=Badge
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString("Label") ?? instance.findText("Text")?.textContent ?? "Badge"
const variant = instance.getEnum("Variant", {
  Default: "default",
  Secondary: "secondary",
  Outline: "outline",
  Destructive: "destructive",
  Ghost: "ghost",
})

export default {
  id: "badge",
  example: figma.code`<Badge variant="${variant ?? "default"}">${label}</Badge>`,
  imports: ['import { Badge } from "@/components/ui/badge"'],
  metadata: {
    nestable: true,
  },
}
