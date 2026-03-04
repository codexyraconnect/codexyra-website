import Link from "next/link"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Codexyra",
  description: "Transparent pricing plans for web development services. From starter packages to enterprise e-commerce solutions.",
}

const pricingPlans = [
  {
    name: "Starter Package",
    price: "8k - 12k",
    description: "Ideal for individuals and small businesses that need a simple, professional online presence.",
    features: [
      "Single page or landing page",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Social media links",
      "1 revision round",
      "Delivery in 5-7 days",
    ],
    featured: false,
  },
  {
    name: "Business Package",
    price: "20k - 35k",
    description: "For growing businesses that need a multi-page website with advanced features.",
    features: [
      "Up to 7 pages",
      "Custom design & branding",
      "Advanced SEO optimization",
      "Google Maps integration",
      "WhatsApp chat integration",
      "Social media integration",
      "3 revision rounds",
      "Free hosting setup",
      "Delivery in 10-14 days",
    ],
    featured: true,
  },
  {
    name: "Professional Package",
    price: "40k - 70k",
    description: "Comprehensive websites for established businesses with complex requirements.",
    features: [
      "Up to 15 pages",
      "Premium custom design",
      "CMS integration",
      "Blog setup",
      "Advanced animations",
      "Performance optimization",
      "5 revision rounds",
      "3 months free support",
      "Delivery in 15-21 days",
    ],
    featured: false,
  },
  {
    name: "E-commerce Package",
    price: "70k - 1,20,000+",
    description: "Full-featured online stores with payment integration and complete management dashboards.",
    features: [
      "Unlimited products",
      "Payment gateway integration",
      "Order management system",
      "Inventory management",
      "Customer accounts",
      "Admin dashboard",
      "Email notifications",
      "Security & SSL",
      "6 months free support",
      "Delivery in 21-30 days",
    ],
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Pricing
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Plans That Fit Your Budget
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Transparent pricing with no hidden costs. All prices in INR.
            Choose the plan that best suits your business needs.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-6 transition-all hover:shadow-lg",
                plan.featured
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/50 hover:shadow-primary/5"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={cn(
                  "mt-6 w-full",
                  !plan.featured && "bg-card text-foreground border border-border hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Custom Quote */}
      <Section className="bg-card/50">
        <div className="rounded-2xl border border-border bg-background p-8 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Need a Custom Quote?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Have specific requirements that do not fit into our standard packages?
            Contact us for a custom quote tailored to your needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <a href="https://wa.me/916239520582" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
