import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { PricingPreview } from "@/components/home/pricing-preview"
import { Testimonials } from "@/components/home/testimonials"
import { FAQPreview } from "@/components/home/faq-preview"
import { CTASection } from "@/components/home/cta-section"
import { ContactPreview } from "@/components/home/contact-preview"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <PricingPreview />
      <Testimonials />
      <FAQPreview />
      <CTASection />
      <ContactPreview />
    </>
  )
}
