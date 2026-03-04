import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "E-commerce Store",
    description: "Full-featured online shopping platform with payment integration and inventory management.",
    price: "Starting from 70k",
    tags: ["Next.js", "Payments", "Dashboard"],
  },
  {
    title: "Business Website",
    description: "Professional website for brands to showcase services and build credibility online.",
    price: "Starting from 20k",
    tags: ["Responsive", "SEO", "Modern"],
  },
  {
    title: "Portfolio Website",
    description: "Stunning portfolio sites for creatives to showcase their work beautifully.",
    price: "Starting from 8k",
    tags: ["Animations", "Gallery", "Minimal"],
  },
  {
    title: "Restaurant Website",
    description: "Engaging website with online menu, reservation system, and location details.",
    price: "Starting from 15k",
    tags: ["Menu", "Booking", "Maps"],
  },
]

export function FeaturedProjects() {
  return (
    <Section className="bg-card/50">
      <SectionHeader
        badge="Our Work"
        title="Featured Projects"
        description="A selection of website solutions we build for businesses across industries."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="text-xs font-medium text-accent">{project.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/projects" className="text-sm font-medium text-primary hover:underline">
          View all projects &rarr;
        </Link>
      </div>
    </Section>
  )
}
