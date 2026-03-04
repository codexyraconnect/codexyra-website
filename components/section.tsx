import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ badge, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
