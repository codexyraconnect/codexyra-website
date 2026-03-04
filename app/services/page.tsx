import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
import { Button } from "@/components/ui/button"
import {
  Palette,
  Code,
  ShoppingCart,
  Layout,
  Wrench,
  Search,
  Server,
  Store,
  Globe,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Codexyra",
  description: "Explore our full range of web development services including design, development, e-commerce, SEO, and more.",
}

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "We create visually stunning, brand-aligned designs that capture attention and keep visitors engaged. From wireframes to pixel-perfect mockups.",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Custom-built, high-performance websites using modern technologies like Next.js, React, and Tailwind CSS for a fast, seamless experience.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Full-featured online stores with product management, payment integration, order tracking, and everything you need to sell online.",
  },
  {
    icon: Layout,
    title: "UI / UX Design",
    description:
      "User-centered design that prioritizes usability and delight. We design intuitive interfaces that guide users toward conversion.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with our maintenance plans. Bug fixes, content updates, security patches, and performance monitoring.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies to improve your search engine rankings, increase organic traffic, and boost your online visibility.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Robust server-side solutions with APIs, databases, authentication, and business logic tailored to your application needs.",
  },
  {
    icon: Store,
    title: "Shopify Development",
    description:
      "Custom Shopify stores with tailored themes, app integrations, and optimized checkout experiences to maximize your sales.",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Professional WordPress websites with custom themes, plugins, and CMS setup so you can manage your content effortlessly.",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Our Services
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Everything You Need to Go Online
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            From design to deployment and beyond, we provide comprehensive web
            development services to help your business thrive online.
          </p>
        </div>
      </Section>

      <Section className="bg-card/50 pt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Need a Custom Solution?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Every business is unique. Contact us to discuss your specific
            requirements and we will create a tailored solution for you.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 px-8 text-base">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}
