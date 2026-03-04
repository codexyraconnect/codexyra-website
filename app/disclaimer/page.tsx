import { Section } from "@/components/section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | Codexyra",
  description:
    "Read the disclaimer for Codexyra's website and web development services.",
}

export default function DisclaimerPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Legal
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Disclaimer
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 2026
          </p>

          <div className="mt-12 flex flex-col gap-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                1. General Information
              </h2>
              <p>
                The information provided on this website is for general
                informational purposes only. While we strive to keep the
                information accurate and up to date, Codexyra makes no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, or suitability of
                the information contained on this website.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                2. Project Timelines
              </h2>
              <p>
                All project timelines and delivery estimates mentioned on this
                website are approximate and may vary depending on the complexity of
                the project, client responsiveness, and other factors. Actual
                timelines will be confirmed during the project consultation phase.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                3. Pricing
              </h2>
              <p>
                Prices listed on this website are indicative and subject to change
                without prior notice. Final pricing will be provided in a detailed
                project proposal based on your specific requirements. All prices
                are in Indian Rupees (INR) unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                4. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites or services.
                Codexyra is not responsible for the content, privacy practices, or
                accuracy of information on external websites. The inclusion of any
                link does not imply endorsement by Codexyra.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                5. Portfolio Projects
              </h2>
              <p>
                The portfolio items and demo websites showcased on this website are
                for demonstration purposes. They represent the type and quality of
                work we deliver. Actual project outcomes may vary based on client
                requirements and specifications.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                6. No Guarantee of Results
              </h2>
              <p>
                While we build websites following industry best practices and SEO
                guidelines, we do not guarantee specific business results, traffic
                numbers, or search engine rankings from the websites we develop.
                Online success depends on many factors beyond website development.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                7. Contact
              </h2>
              <p>
                If you have any questions about this disclaimer, please contact us
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
