import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
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

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "Beautiful, modern designs that capture your brand identity and engage visitors.",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Custom-built websites using the latest technologies for optimal performance.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Full-featured online stores that drive sales and scale with your business.",
  },
  {
    icon: Layout,
    title: "UI / UX Design",
    description: "User-centered design that delivers intuitive and delightful experiences.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support and updates to keep your website running smoothly.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to boost your rankings and organic traffic.",
  },
]

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeader
        badge="Our Services"
        title="What We Build"
        description="From design to deployment, we offer end-to-end web development services tailored to your business needs."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="size-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/services"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all services &rarr;
        </Link>
      </div>
    </Section>
  )
}
