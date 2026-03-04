import { Section } from "@/components/section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Codexyra",
  description:
    "Read the terms and conditions for using Codexyra's web development services.",
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Legal
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Terms & Conditions"}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 2026
          </p>

          <div className="mt-12 flex flex-col gap-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By engaging Codexyra for web development services, you agree to
                these Terms and Conditions. These terms apply to all services
                provided by Codexyra.connect, including website design,
                development, maintenance, and related services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                2. Services
              </h2>
              <p>
                Codexyra provides web development services as outlined in the
                project proposal or pricing package selected by the client. The
                scope of work, deliverables, and timeline will be agreed upon
                before the project begins.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                3. Payment Terms
              </h2>
              <ul className="flex flex-col gap-2 pl-6 list-disc">
                <li>
                  A 50% advance payment is required before project work begins.
                </li>
                <li>
                  The remaining 50% is due upon project completion and before final
                  delivery.
                </li>
                <li>
                  Payments are non-refundable once work has commenced, except as
                  outlined in our Refund Policy.
                </li>
                <li>
                  All prices are in Indian Rupees (INR) unless otherwise stated.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                4. Revisions
              </h2>
              <p>
                Each package includes a specified number of revision rounds.
                Additional revisions beyond the included rounds may incur extra
                charges. Major scope changes after project approval will require a
                revised quote.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                5. Intellectual Property
              </h2>
              <p>
                Upon full payment, the client receives full ownership of the
                completed website and its custom design elements. Codexyra reserves
                the right to showcase the project in its portfolio unless the client
                requests otherwise in writing.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                6. Client Responsibilities
              </h2>
              <p>
                The client is responsible for providing all necessary content (text,
                images, logos, etc.) in a timely manner. Delays in providing
                content may affect the project timeline. The client is also
                responsible for reviewing and approving deliverables at each
                milestone.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                7. Limitation of Liability
              </h2>
              <p>
                Codexyra shall not be held liable for any indirect, incidental, or
                consequential damages arising from the use of our services or
                websites we develop. Our total liability shall not exceed the
                amount paid by the client for the specific project.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                8. Termination
              </h2>
              <p>
                Either party may terminate the project with written notice. In case
                of termination, the client will be billed for work completed up to
                the date of termination. The advance payment is non-refundable
                after work has started.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                9. Contact
              </h2>
              <p>
                For any questions regarding these terms, contact us at{" "}
                <a
                  href="mailto:codexyra.connect@gmail.com"
                  className="text-primary hover:underline"
                >
                  codexyra.connect@gmail.com
                </a>{" "}
                or call +91 6239520582.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
