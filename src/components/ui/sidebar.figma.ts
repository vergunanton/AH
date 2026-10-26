// url=https://www.figma.com/design/aoplLcHmPxLiI4wctS4R0Q/Agentic-Horizon---UX-UI?node-id=474-20894
// source=src/components/ui/sidebar.tsx
// component=SidebarProvider
import figma from "figma"

export default {
  id: "sidebar-shell",
  example: figma.code`<SidebarProvider>
  <Sidebar>
    <SidebarHeader />
    <SidebarContent />
    <SidebarFooter />
  </Sidebar>
  <SidebarInset>{/* page content */}</SidebarInset>
</SidebarProvider>`,
  imports: [
    'import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider } from "@/components/ui/sidebar"',
  ],
  metadata: {
    nestable: false,
  },
}
