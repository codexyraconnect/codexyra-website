import { Section, SectionHeader } from "@/components/section"
import { Code2, Users, Globe, Award, Target, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Codexyra",
  description: "Learn about Codexyra, a modern web development agency from Punjab, India, building premium websites for businesses globally.",
}

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Every project starts with understanding your business goals and target audience.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We use the latest technologies and design trends to build future-proof websites.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "We never compromise on code quality, design aesthetics, or performance standards.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work closely with you throughout the process to ensure your vision is realized.",
  },
]

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "9+", label: "Services Offered" },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            About Us
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Building the Web, One Business at a Time
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Codexyra.connect is a modern web development agency based in Punjab, India.
            We specialize in designing and building premium, high-performance websites
            for businesses across India and globally.
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-card/50">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founded with a passion for clean code and beautiful design, Codexyra started
              as a small freelance operation and has grown into a full-service web development
              agency. We believe every business deserves a professional, modern website that
              reflects their brand and drives growth.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our team combines creative design thinking with technical expertise to deliver
              websites that not only look great but also perform exceptionally. From local
              businesses in Punjab to clients across the globe, we are committed to making
              the web a better place, one project at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-xl border border-border bg-background p-6 text-center"
              >
                <span className="text-3xl font-bold text-primary">{stat.value}</span>
                <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          badge="Our Values"
          title="What Drives Us"
          description="The principles that guide every project we take on."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <value.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-card/50">
        <SectionHeader
          badge="Our Stack"
          title="Technologies We Use"
          description="We leverage modern tools and frameworks to build fast, scalable, and maintainable websites."
        />
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {[
            "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
            "WordPress", "Shopify", "MongoDB", "PostgreSQL", "Figma",
            "Vercel", "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>
    </div>
  )
}
