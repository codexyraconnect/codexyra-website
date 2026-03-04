import Link from "next/link"
import { Code2, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code2 className="size-5" />
              </div>
              <span className="text-xl font-bold text-foreground">Codexyra</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Modern web development agency building premium websites for businesses across India and globally.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+916239520582" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="size-4" />
                +91 6239520582
              </a>
              <a href="mailto:codexyra.connect@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="size-4" />
                codexyra.connect@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4" />
                Punjab, India
              </span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Pages</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Get Started</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Ready to build your next website? Let us help you create a stunning online presence.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Codexyra.connect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/codexyra.connect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/916239520582"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
