import { Section } from "@/components/section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Codexyra",
  description:
    "Learn how Codexyra collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Legal
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 2026
          </p>

          <div className="mt-12 flex flex-col gap-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                1. Information We Collect
              </h2>
              <p>
                When you use our website or contact us, we may collect the following
                information: your name, email address, phone number, project
                requirements, and budget range. We also collect technical data such
                as your IP address, browser type, and usage patterns through cookies
                and analytics tools.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                2. How We Use Your Information
              </h2>
              <p>We use the collected information to:</p>
              <ul className="mt-2 flex flex-col gap-1 pl-6 list-disc">
                <li>Respond to your inquiries and project requests</li>
                <li>Provide and improve our web development services</li>
                <li>Send project updates and communications</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                3. Data Protection
              </h2>
              <p>
                We implement appropriate security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the Internet is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                4. Third-Party Services
              </h2>
              <p>
                We may use third-party services such as analytics tools, hosting
                providers, and communication platforms. These services have their own
                privacy policies, and we encourage you to review them. We do not
                sell or share your personal information with third parties for
                marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                5. Your Rights
              </h2>
              <p>
                You have the right to access, update, or delete your personal
                information at any time. You may also opt out of any marketing
                communications. To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:codexyra.connect@gmail.com"
                  className="text-primary hover:underline"
                >
                  codexyra.connect@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                6. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact
                us at{" "}
                <a
                  href="mailto:codexyra.connect@gmail.com"
                  className="text-primary hover:underline"
                >
                  codexyra.connect@gmail.com
                </a>{" "}
                or call us at +91 6239520582.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
