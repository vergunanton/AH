import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Seperator } from "@/components/seperator";
import { CatalogCard } from "@/components/catalog-card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronDown, Heart } from "lucide-react";

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10">
      <header className="space-y-2">
        <p className="text-sm font-medium text-primary">Agentic Horizon</p>
        <h1 className="text-3xl font-semibold tracking-tight">Design system (code)</h1>
        <p className="max-w-2xl text-muted-foreground">
          shadcn/ui (base-nova) aligned to the published Figma library{" "}
          <strong>Agentic Horizon — Design System</strong>. Connect this repo in Figma Code
          Connect using <code className="text-sm">figma.config.json</code> and the{" "}
          <code className="text-sm">*.figma.ts</code> templates under{" "}
          <code className="text-sm">src/components</code>.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Actions</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">
            All categories
            <ChevronDown className="size-4" data-icon="inline-end" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Favorite">
            <Heart className="size-4" />
          </Button>
          <Badge>Assistant</Badge>
          <Badge variant="secondary">Agent</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <Seperator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Forms</h2>
        <div className="grid max-w-md gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="search">Search</Label>
            <Input id="search" placeholder="Search agents…" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Ask anything…" rows={3} />
          </div>
        </div>
      </section>

      <Seperator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Catalog</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CatalogCard
            title="ETL assistant"
            description="Uses your technical documentation, pipeline configurations, and troubleshooting guides to investigate ETL failures and explain how data moves between systems."
          />
          <CatalogCard
            title="Catalog card"
            description="Uses Confluence and Git docs to answer ETL questions, explain configurations, and deliver actionable fixes based on documentation."
            showPin
            pinIcon={Heart}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Command list</h2>
        <Command className="max-w-md rounded-3xl border">
          <CommandInput placeholder="Filter recents…" />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Recents">
              <CommandItem>Quarterly pipeline review</CommandItem>
              <CommandItem>Schema drift in staging</CommandItem>
              <CommandItem>Onboarding checklist</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>
    </main>
  );
}
