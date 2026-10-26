// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=474-18604
// source=src/components/ui/button.tsx
// component=Button
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString("Label") ?? instance.findText("Text")?.textContent ?? "Button"
const variant = instance.getEnum("Variant", {
  Default: "default",
  Primary: "default",
  Secondary: "secondary",
  Outline: "outline",
  Ghost: "ghost",
  Destructive: "destructive",
  Link: "link",
})
const size = instance.getEnum("Size", {
  Default: "default",
  Small: "sm",
  Medium: "default",
  Large: "lg",
  Icon: "icon",
})

export default {
  id: "button",
  example: figma.code`<Button variant="${variant ?? "default"}" size="${size ?? "default"}">${label}</Button>`,
  imports: ['import { Button } from "@/components/ui/button"'],
  metadata: {
    nestable: true,
  },
}
