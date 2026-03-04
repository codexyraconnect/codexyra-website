import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactPreview() {
  return (
    <Section>
      <SectionHeader
        badge="Get in Touch"
        title="Let's Discuss Your Project"
        description="Have a project in mind? Reach out and we'll get back to you within 24 hours."
      />
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Phone className="size-5" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">Phone / WhatsApp</h3>
          <a href="tel:+916239520582" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            +91 6239520582
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Mail className="size-5" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">Email</h3>
          <a href="mailto:codexyra.connect@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            codexyra.connect@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MapPin className="size-5" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">Location</h3>
          <p className="text-sm text-muted-foreground">Punjab, India</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/contact">Send a Message</Link>
        </Button>
      </div>
    </Section>
  )
}
