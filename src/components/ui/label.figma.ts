// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=3-feace6f
// source=src/components/ui/label.tsx
// component=Label
import figma from "figma"

const instance = figma.selectedInstance

const label =
  instance.getString("Label") ??
  instance.getString("Text") ??
  instance.findText("Label")?.textContent ??
  "Label"

export default {
  id: "label",
  example: figma.code`<Label>${label}</Label>`,
  imports: ['import { Label } from "@/components/ui/label"'],
  metadata: {
    nestable: true,
  },
}
