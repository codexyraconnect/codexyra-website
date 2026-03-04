"use client"

import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"

const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        question: "What is Codexyra?",
        answer:
          "Codexyra is a modern web development agency based in Punjab, India. We specialize in building high-quality, responsive websites and web applications for businesses of all sizes, from local startups to global enterprises.",
      },
      {
        question: "Where is Codexyra located?",
        answer:
          "We are based in Punjab, India. However, we work with clients across India and globally. All our communication and project delivery happens online, so location is never a barrier.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We work with a wide range of businesses including salons, restaurants, clinics, gyms, schools, real estate agencies, e-commerce stores, and many more. Whether you are a small local business or a growing enterprise, we have solutions tailored for you.",
      },
      {
        question: "How do I get started with Codexyra?",
        answer:
          "Simply visit our Contact page or send us a message on WhatsApp at +91 6239520582. We will discuss your requirements, provide a quote, and get started once you approve the plan.",
      },
    ],
  },
  {
    category: "Services & Process",
    faqs: [
      {
        question: "What services does Codexyra offer?",
        answer:
          "We offer a comprehensive range of web services including Website Design, Website Development, E-commerce Development, UI/UX Design, Website Maintenance, SEO Optimization, Backend Development, Shopify Development, and WordPress Development.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A basic landing page or single-page website takes about 5-7 days. Multi-page business websites take 10-14 days, while complex projects like e-commerce stores can take 2-4 weeks. We always provide a clear timeline estimate before starting.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We use cutting-edge technologies including Next.js, React, Tailwind CSS, Node.js, TypeScript, and more. For e-commerce, we work with Shopify and custom solutions. We choose the best tech stack based on your project requirements for optimal performance.",
      },
      {
        question: "Do you provide a design preview before development?",
        answer:
          "Yes, we create wireframes or mockups for your approval before starting the full development. This ensures you are happy with the design direction before we proceed with building the complete website.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. Every website we build is fully responsive and mobile-first. Your site will look and function perfectly on desktops, tablets, and all mobile devices.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    faqs: [
      {
        question: "How much does a website cost?",
        answer:
          "Our pricing starts from INR 8,000 for a basic landing page and goes up to INR 1,20,000+ for full-featured e-commerce stores. The exact cost depends on the complexity, number of pages, and features you need. Visit our Pricing page for detailed packages.",
      },
      {
        question: "Do you offer custom pricing?",
        answer:
          "Yes! If none of our standard packages fit your needs, we are happy to create a custom quote tailored specifically to your requirements and budget. Just reach out to us with your project details.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept payments via UPI, bank transfer (NEFT/IMPS), and other standard payment methods. We typically require a 50% advance to begin the project, with the remaining amount due upon completion.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, we have a clear refund policy. If we are unable to deliver the project as agreed, you are eligible for a refund based on the work completed. Please refer to our Refund Policy page for full details.",
      },
    ],
  },
  {
    category: "Post-Launch & Support",
    faqs: [
      {
        question: "Do you provide hosting and domain setup?",
        answer:
          "Yes, we help you set up hosting and domain registration. The cost of hosting and domain is separate from our development charges. We guide you through the entire process and recommend the best options based on your needs.",
      },
      {
        question: "Can I update the website content myself?",
        answer:
          "Yes! We can integrate a content management system (CMS) so you can easily update text, images, and other content without any coding knowledge. For WordPress and Shopify sites, you get a built-in admin panel.",
      },
      {
        question: "Do you offer website maintenance?",
        answer:
          "Yes, we offer ongoing maintenance packages that include security updates, content updates, performance monitoring, bug fixes, and technical support. Our professional and e-commerce packages include free support for 3-6 months.",
      },
      {
        question: "What if I need changes after the website is launched?",
        answer:
          "Minor text and image updates are usually free within the support period. For larger changes or new features, we provide a quote based on the scope of work. We are always here to help your website grow with your business.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            FAQ
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about our services, process, pricing, and
            support. Can not find your answer? Reach out to us directly.
          </p>
        </div>
      </Section>

      {/* FAQ Categories */}
      {faqCategories.map((category) => (
        <Section key={category.category} className="pt-0">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              title={category.category}
              className="mb-8 text-left"
            />
            <Accordion type="single" collapsible className="w-full">
              {category.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`${category.category}-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      ))}

      {/* Still Have Questions CTA */}
      <Section className="bg-card/50">
        <div className="rounded-2xl border border-border bg-background p-8 text-center md:p-16">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
            <MessageCircle className="size-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            We are happy to help! Reach out to us via WhatsApp or email and we
            will get back to you as soon as possible.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <a
                href="https://wa.me/916239520582"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
