// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=2-43434c
// source=src/components/ui/button.tsx
// component=Button
import figma from "figma"

const instance = figma.selectedInstance

const ariaLabel =
  instance.getString("Label") ??
  instance.getString("Aria label") ??
  instance.findText("Label")?.textContent ??
  "Action"

const variant = instance.getEnum("Variant", {
  Default: "default",
  Primary: "default",
  Secondary: "secondary",
  Outline: "outline",
  Ghost: "ghost",
  Destructive: "destructive",
})

const icon = instance.getInstanceSwap("Icon") ?? instance.findInstance("Icon")
let iconCode
if (icon && icon.type === "INSTANCE") {
  iconCode = icon.executeTemplate().example
}

const buttonProps = figma.code`variant="${variant ?? "ghost"}" size="icon" aria-label="${ariaLabel}"`

export default {
  id: "icon-button",
  example: iconCode
    ? figma.code`<Button ${buttonProps}>${iconCode}</Button>`
    : figma.code`<Button ${buttonProps} />`,
  imports: ['import { Button } from "@/components/ui/button"'],
  metadata: {
    nestable: true,
  },
}
