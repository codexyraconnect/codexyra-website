import { Section, SectionHeader } from "@/components/section"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
    content: "Codexyra built an amazing website for my restaurant. The design is beautiful and my online orders have increased significantly.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Salon Owner",
    content: "Very professional team. They understood exactly what I needed and delivered a stunning website on time. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Real Estate Agent",
    content: "My property listings website looks incredible. The team was responsive and made the whole process smooth and easy.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Fashion Boutique",
    content: "The e-commerce store they built for us is fantastic. Clean design, fast loading, and my customers love the shopping experience.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <Section className="bg-card/50">
      <SectionHeader
        badge="Testimonials"
        title="What Our Clients Say"
        description="Hear from businesses that have trusted Codexyra to build their online presence."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-xl border border-border bg-background p-6"
          >
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {`"${testimonial.content}"`}
            </p>
            <div>
              <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
              <div className="text-xs text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
