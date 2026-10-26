// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=81-735e38
// source=src/components/ui/input.tsx
// component=Input
import figma from "figma"

const instance = figma.selectedInstance

const placeholder =
  instance.getString("Placeholder") ??
  instance.getString("Value") ??
  instance.findText("Placeholder")?.textContent ??
  "Search…"

export default {
  id: "input",
  example: figma.code`<Input placeholder="${placeholder}" />`,
  imports: ['import { Input } from "@/components/ui/input"'],
  metadata: {
    nestable: true,
  },
}
