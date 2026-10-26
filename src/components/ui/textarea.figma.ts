// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=6-ba8a338
// source=src/components/ui/textarea.tsx
// component=Textarea
import figma from "figma"

const instance = figma.selectedInstance
const placeholder =
  instance.getString("Placeholder") ?? instance.getString("Value") ?? "Type a message…"

export default {
  id: "textarea",
  example: figma.code`<Textarea placeholder="${placeholder}" />`,
  imports: ['import { Textarea } from "@/components/ui/textarea"'],
  metadata: {
    nestable: true,
  },
}
