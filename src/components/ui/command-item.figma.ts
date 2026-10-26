// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=c7-d651a4
// source=src/components/ui/command.tsx
// component=CommandItem
import figma from "figma"

const instance = figma.selectedInstance

const label =
  instance.getString("Label") ??
  instance.getString("Text") ??
  instance.findText("Label")?.textContent ??
  "Command item"

export default {
  id: "command-item",
  example: figma.code`<CommandItem>${label}</CommandItem>`,
  imports: ['import { CommandItem } from "@/components/ui/command"'],
  metadata: {
    nestable: true,
  },
}
