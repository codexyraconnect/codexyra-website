import { Section } from "@/components/section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Codexyra",
  description:
    "Learn about how Codexyra uses cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Legal
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 2026
          </p>

          <div className="mt-12 flex flex-col gap-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files stored on your device when you visit a
                website. They help the website remember your preferences and improve
                your browsing experience. Cookies may be set by us (first-party
                cookies) or by third-party services we use.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                2. How We Use Cookies
              </h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="mt-2 flex flex-col gap-2 pl-6 list-disc">
                <li>
                  <strong className="text-foreground">Essential Cookies:</strong>{" "}
                  Required for the website to function properly, such as
                  navigation and security.
                </li>
                <li>
                  <strong className="text-foreground">Analytics Cookies:</strong>{" "}
                  Help us understand how visitors interact with our website so we
                  can improve the user experience.
                </li>
                <li>
                  <strong className="text-foreground">
                    Preference Cookies:
                  </strong>{" "}
                  Remember your settings and preferences for future visits.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                3. Third-Party Cookies
              </h2>
              <p>
                We may use third-party services like Google Analytics that set
                their own cookies. These cookies are governed by the respective
                third party&apos;s privacy and cookie policies. We do not control
                the cookies set by third-party services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                4. Managing Cookies
              </h2>
              <p>
                You can manage or disable cookies through your browser settings.
                Please note that disabling certain cookies may affect the
                functionality of our website. Most browsers allow you to refuse
                cookies or delete existing cookies from your device.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                5. Changes to This Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated date. We encourage you
                to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                6. Contact
              </h2>
              <p>
                If you have questions about our use of cookies, please contact us
                at{" "}
                <a
                  href="mailto:codexyra.connect@gmail.com"
                  className="text-primary hover:underline"
                >
                  codexyra.connect@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
