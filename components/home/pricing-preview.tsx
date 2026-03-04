import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter",
    price: "8k - 12k",
    description: "Perfect for individuals and small businesses just getting started.",
    features: ["Single page website", "Mobile responsive", "Contact form", "Basic SEO", "1 revision round"],
    featured: false,
  },
  {
    name: "Business",
    price: "20k - 35k",
    description: "For growing businesses that need a professional online presence.",
    features: ["Up to 5 pages", "Custom design", "SEO optimized", "Social integration", "3 revision rounds", "Free hosting setup"],
    featured: true,
  },
  {
    name: "Professional",
    price: "40k - 70k",
    description: "Full-featured websites for established businesses.",
    features: ["Up to 10 pages", "Premium design", "Advanced SEO", "CMS integration", "Performance optimized", "3 months support"],
    featured: false,
  },
]

export function PricingPreview() {
  return (
    <Section>
      <SectionHeader
        badge="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose a plan that fits your budget. All prices in INR."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-xl border p-6 transition-all hover:shadow-lg",
              plan.featured
                ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                : "border-border bg-card hover:border-primary/50 hover:shadow-primary/5"
            )}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                Popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={cn("mt-6 w-full", !plan.featured && "bg-card text-foreground border border-border hover:bg-primary hover:text-primary-foreground")}
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/pricing" className="text-sm font-medium text-primary hover:underline">
          See all plans &rarr;
        </Link>
      </div>
    </Section>
  )
}
