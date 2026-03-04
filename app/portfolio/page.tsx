import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Codexyra",
  description: "View our live portfolio demos showcasing websites built by Codexyra for various industries.",
}

const portfolioItems = [
  {
    title: "Photographer Portfolio",
    description: "A stunning photography portfolio with gallery, lightbox, and booking features.",
    url: "https://codexyra-photographer.vercel.app",
    category: "Portfolio",
  },
  {
    title: "Fashion Store",
    description: "Elegant fashion e-commerce website with product catalog and modern design.",
    url: "https://codexyra-fashion.vercel.app",
    category: "E-commerce",
  },
  {
    title: "Academy Website",
    description: "Professional academy website with courses, enrollment, and instructor profiles.",
    url: "https://codexyra-academy.vercel.app",
    category: "Education",
  },
  {
    title: "Opticals Store",
    description: "Modern optical shop website with product showcase and store information.",
    url: "https://codexyra-opticals.netlify.app",
    category: "Retail",
  },
  {
    title: "Mobile Shop",
    description: "Feature-rich mobile store website with product listings and specifications.",
    url: "https://codexyra-mobiledemo.netlify.app",
    category: "Retail",
  },
  {
    title: "Salon Website",
    description: "Beautiful salon website with services, pricing, gallery, and booking capabilities.",
    url: "https://mydemo-salon.netlify.app",
    category: "Beauty",
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Portfolio
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Our Live Demos
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Explore our portfolio of live demo websites. Each project showcases
            our design and development capabilities across different industries.
          </p>
        </div>
      </Section>

      <Section className="bg-card/50 pt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Preview area */}
              <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                <Globe className="size-12 text-muted-foreground/30 transition-colors group-hover:text-primary/50" />
                <span className="absolute top-3 right-3 rounded-full bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ExternalLink className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Want a Website Like These?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            We can build a custom website tailored to your brand and business
            needs. Get in touch to discuss your project.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 px-8 text-base">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}
