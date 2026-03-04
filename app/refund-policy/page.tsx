import { Section } from "@/components/section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy | Codexyra",
  description:
    "Understand Codexyra's refund policy for web development services.",
}

export default function RefundPolicyPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Legal
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 2026
          </p>

          <div className="mt-12 flex flex-col gap-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                1. Overview
              </h2>
              <p>
                At Codexyra, we are committed to delivering high-quality web
                development services. We understand that sometimes circumstances
                change, and this policy outlines the conditions under which
                refunds may be issued.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                2. Before Project Starts
              </h2>
              <p>
                If you cancel your project before any work has begun, you are
                eligible for a full refund of any advance payment made. The
                cancellation must be communicated in writing via email or
                WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                3. During Development
              </h2>
              <p>
                Once work has commenced, refunds will be calculated based on the
                percentage of work completed. If 50% or more of the project is
                complete, the advance payment is non-refundable. For projects less
                than 50% complete, a partial refund may be issued after deducting
                charges for work completed.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                4. After Project Delivery
              </h2>
              <p>
                Once the project has been delivered and approved by the client, no
                refunds will be issued. We encourage clients to review all
                deliverables thoroughly during the revision rounds before final
                approval.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                5. Non-Refundable Services
              </h2>
              <ul className="flex flex-col gap-2 pl-6 list-disc">
                <li>Domain name registration fees</li>
                <li>Third-party hosting charges</li>
                <li>Third-party plugin or software licenses</li>
                <li>Rush delivery fees</li>
                <li>Additional revision rounds beyond the package limit</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                6. How to Request a Refund
              </h2>
              <p>
                To request a refund, contact us at{" "}
                <a
                  href="mailto:codexyra.connect@gmail.com"
                  className="text-primary hover:underline"
                >
                  codexyra.connect@gmail.com
                </a>{" "}
                with your project details and reason for the refund request. We
                will review your request and respond within 3-5 business days.
                Approved refunds will be processed within 7-10 business days.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                7. Disputes
              </h2>
              <p>
                If you are not satisfied with the outcome of a refund request, we
                encourage you to reach out to us directly so we can work together
                to find a fair resolution. Our goal is to ensure every client is
                satisfied with our services.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
