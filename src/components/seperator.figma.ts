// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=675-140048
// source=src/components/seperator.tsx
// component=Seperator
import figma from "figma"

const instance = figma.selectedInstance

const orientation = instance.getEnum("Orientation", {
  Horizontal: "horizontal",
  Vertical: "vertical",
})

export default {
  id: "seperator",
  example: figma.code`<Seperator${orientation === "vertical" ? ' orientation="vertical"' : ""} />`,
  imports: ['import { Seperator } from "@/components/seperator"'],
  metadata: {
    nestable: true,
  },
}
