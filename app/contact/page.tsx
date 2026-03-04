"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 6239520582",
    href: "tel:+916239520582",
  },
  {
    icon: Mail,
    label: "Email",
    value: "codexyra.connect@gmail.com",
    href: "mailto:codexyra.connect@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@codexyra.connect",
    href: "https://instagram.com/codexyra.connect",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Punjab, India",
  },
]

const projectTypes = [
  "Landing Page",
  "Business Website",
  "E-commerce Store",
  "Portfolio Website",
  "Blog Website",
  "Custom Web Application",
  "Shopify Store",
  "WordPress Website",
  "Other",
]

const budgetRanges = [
  "Under 10k",
  "10k - 20k",
  "20k - 40k",
  "40k - 70k",
  "70k - 1,20,000",
  "1,20,000+",
]

export default function ContactPage() {

  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!formRef.current) return

    emailjs
      .sendForm(
        "service_omoduix",
        "template_9qf3m6b",
        formRef.current,
        "HXMsFmVT39n1ztqWs"
      )
      .then(() => {
        setSubmitted(true)
        formRef.current?.reset()
      })
      .catch((error) => {
        console.log(error)
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <div className="pt-20">

      {/* Header */}

      <Section>
        <div className="mx-auto max-w-3xl text-center">

          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Contact
          </span>

          <h1 className="text-4xl font-bold md:text-5xl">
            Let's Build Something Great
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Ready to start your project? Get in touch and we will get back to you
            within 24 hours.
          </p>

        </div>
      </Section>

      {/* Contact Info */}

      <Section className="pt-0">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-xl border p-6 text-center"
            >

              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-5" />
              </div>

              <h3 className="text-sm font-semibold">{item.label}</h3>

              {item.href ? (
                <a href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{item.value}</p>
              )}

            </div>
          ))}

        </div>

      </Section>

      {/* Contact Form */}

      <Section className="pt-0">

        <div className="grid gap-8 lg:grid-cols-5">

          <div className="lg:col-span-3">

            <div className="rounded-xl border bg-card p-6 md:p-8">

              <h2 className="text-2xl font-bold">Send Us a Message</h2>

              {submitted ? (

                <div className="mt-8 text-center">

                  <Send className="mx-auto mb-4 text-primary" size={40} />

                  <h3 className="text-lg font-semibold">Message Sent!</h3>

                  <p className="text-muted-foreground">
                    We will contact you soon.
                  </p>

                </div>

              ) : (

                <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">

                  <Input name="user_name" placeholder="Full Name" required />

                  <Input name="user_email" type="email" placeholder="Email" required />

                  <Input name="phone" placeholder="Phone Number" required />

                  <Select name="project_type">
                    <SelectTrigger>
                      <SelectValue placeholder="Project Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select name="budget">
                    <SelectTrigger>
                      <SelectValue placeholder="Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                  />

                  <Button type="submit" size="lg">
                    Send Message
                  </Button>

                </form>

              )}

            </div>

          </div>

          {/* WhatsApp */}

          <div className="lg:col-span-2">

            <div className="rounded-xl border bg-card p-6">

              <h3 className="font-semibold">Prefer WhatsApp?</h3>

              <p className="text-sm text-muted-foreground mt-2">
                For quick responses, chat with us directly on WhatsApp.
              </p>

              <Button asChild className="mt-4 w-full" variant="outline">

                <a
                  href="https://wa.me/916239520582"
                  target="_blank"
                >
                  Chat on WhatsApp
                </a>

              </Button>

            </div>

          </div>

        </div>

      </Section>

    </div>
  )
}