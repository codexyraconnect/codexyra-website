import Link from "next/link"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Scissors,
  UtensilsCrossed,
  Stethoscope,
  Building2,
  Dumbbell,
  GraduationCap,
  BookOpen,
  Home,
  User,
  Briefcase,
  FileText,
  ShoppingCart,
  School,
  Car,
  Plane,
  PartyPopper,
  Search,
  PenTool,
  Code,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Codexyra",
  description: "Explore 20+ website solutions we build for businesses including e-commerce, portfolios, restaurants, salons, and more.",
}

const projects = [
  { icon: Smartphone, title: "Mobile Shop Website", description: "Showcase and sell mobile phones and accessories online with a modern product catalog.", price: "15k - 25k" },
  { icon: Scissors, title: "Salon Website", description: "Elegant website for salons with service listings, booking integration, and gallery.", price: "12k - 20k" },
  { icon: UtensilsCrossed, title: "Restaurant Website", description: "Appetizing website with online menu, table reservations, and location details.", price: "15k - 25k" },
  { icon: Stethoscope, title: "Clinic Website", description: "Professional website for clinics with doctor profiles, appointment booking, and services.", price: "15k - 25k" },
  { icon: Building2, title: "Hospital Website", description: "Comprehensive hospital website with departments, doctors, and patient resources.", price: "40k - 70k" },
  { icon: Dumbbell, title: "Gym Website", description: "Energetic website showcasing membership plans, trainers, schedules, and facilities.", price: "15k - 25k" },
  { icon: School, title: "School Website", description: "Informative school website with admissions, faculty, events, and news updates.", price: "20k - 35k" },
  { icon: GraduationCap, title: "College Website", description: "Feature-rich college website with courses, faculty profiles, and campus information.", price: "35k - 60k" },
  { icon: Home, title: "Real Estate Website", description: "Property listing website with search filters, virtual tours, and agent profiles.", price: "30k - 50k" },
  { icon: User, title: "Portfolio Website", description: "Stunning personal portfolio to showcase your work, skills, and achievements.", price: "8k - 15k" },
  { icon: Briefcase, title: "Business Website", description: "Professional corporate website that establishes credibility and generates leads.", price: "20k - 35k" },
  { icon: FileText, title: "Landing Page", description: "High-converting landing page designed to capture leads and drive action.", price: "8k - 12k" },
  { icon: ShoppingCart, title: "E-commerce Store", description: "Full-featured online store with cart, checkout, payments, and order management.", price: "70k - 1,20,000+" },
  { icon: BookOpen, title: "Coaching Institute Website", description: "Website for coaching centers with courses, batches, results, and enrollment forms.", price: "20k - 35k" },
  { icon: Car, title: "Car Rental Website", description: "Car rental platform with vehicle catalog, booking system, and pricing details.", price: "25k - 45k" },
  { icon: Plane, title: "Travel Agency Website", description: "Travel website with tour packages, itineraries, booking, and customer reviews.", price: "25k - 45k" },
  { icon: PartyPopper, title: "Event Management Website", description: "Event planning website with services, gallery, testimonials, and inquiry forms.", price: "20k - 35k" },
  { icon: Search, title: "Job Portal Website", description: "Job listing platform with search, filters, employer/candidate dashboards.", price: "50k - 80k" },
  { icon: PenTool, title: "Blog Website", description: "Clean, fast blog with categories, search, and SEO-optimized content management.", price: "10k - 18k" },
  { icon: Code, title: "Custom Web Application", description: "Fully custom web application tailored to your unique business requirements.", price: "70k - 1,50,000+" },
]

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Projects
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Website Solutions for Every Business
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We build websites for businesses across all industries. Explore our
            range of solutions and find the perfect fit for your business.
          </p>
        </div>
      </Section>

      <Section className="bg-card/50 pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <project.icon className="size-5" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">{project.title}</h3>
              <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <Badge variant="secondary" className="w-fit text-xs text-accent">
                {project.price}
              </Badge>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"Don't See What You Need?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            We build custom solutions for unique requirements. Tell us about
            your project and we will make it happen.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 px-8 text-base">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}
