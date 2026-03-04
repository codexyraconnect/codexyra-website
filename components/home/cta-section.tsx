import Link from "next/link"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <Section className="bg-card/50">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 md:p-16 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Ready to Build Your Dream Website?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Let us help you create a stunning online presence that drives results.
            Get in touch today for a free consultation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <a href="https://wa.me/916239520582" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
