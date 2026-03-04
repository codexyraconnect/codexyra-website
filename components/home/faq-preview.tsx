"use client"

import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A basic website takes 5-7 days, while more complex projects like e-commerce stores can take 2-4 weeks. We provide a timeline estimate before starting any project.",
  },
  {
    question: "Do you provide hosting and domain?",
    answer:
      "We help you set up hosting and domain registration. The cost of hosting and domain is separate from our development charges, and we guide you through the entire process.",
  },
  {
    question: "Can I update the website content myself?",
    answer:
      "Yes! We can integrate a content management system (CMS) so you can easily update text, images, and other content without any coding knowledge.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies including Next.js, React, Tailwind CSS, Node.js, and more. We choose the best stack based on your project requirements.",
  },
]

export function FAQPreview() {
  return (
    <Section>
      <SectionHeader
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and process."
      />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
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
      <div className="mt-8 text-center">
        <Link href="/faq" className="text-sm font-medium text-primary hover:underline">
          View all FAQs &rarr;
        </Link>
      </div>
    </Section>
  )
}
