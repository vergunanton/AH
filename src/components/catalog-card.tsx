import * as React from "react"
import { cn } from "cn"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

export type CatalogCardProps = {
  title: string
  description: string
  className?: string
  /** Pin / favorite action (maps to Figma showButton1) */
  showPin?: boolean
  /** Secondary icon action (maps to Figma showButton2) */
  showSecondaryAction?: boolean
  onPinClick?: () => void
  onSecondaryActionClick?: () => void
  pinIcon?: LucideIcon
  secondaryIcon?: LucideIcon
}

export function CatalogCard({
  title,
  description,
  className,
  showPin = false,
  showSecondaryAction = false,
  onPinClick,
  onSecondaryActionClick,
  pinIcon: PinIcon,
  secondaryIcon: SecondaryIcon,
}: CatalogCardProps) {
  return (
    <article
      data-slot="catalog-card"
      className={cn(
        "flex max-w-lg flex-col gap-1 rounded-3xl border border-border bg-card px-4 py-4",
        className
      )}
    >
      <div className="flex h-9 items-center gap-2">
        <h3 className="min-w-0 flex-1 truncate text-base font-semibold leading-6 text-card-foreground">
          {title}
        </h3>
        {showPin && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 shrink-0 rounded-full"
            onClick={onPinClick}
            aria-label="Pin agent"
          >
            {PinIcon ? <PinIcon className="size-5" /> : null}
          </Button>
        )}
        {showSecondaryAction && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 shrink-0 rounded-full"
            onClick={onSecondaryActionClick}
            aria-label="Secondary action"
          >
            {SecondaryIcon ? <SecondaryIcon className="size-5" /> : null}
          </Button>
        )}
      </div>
      <p className="line-clamp-3 text-sm leading-5 text-muted-foreground">
        {description}
      </p>
    </article>
  )
}
