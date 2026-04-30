import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: April 1, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Welcome to CapitalExplorer. By accessing or using our website, mobile applications, or any of our services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms constitute a legally binding agreement between you and CapitalExplorer. We may modify these Terms at any time, and your continued use of our services constitutes acceptance of any modifications.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    2. Description of Services
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CapitalExplorer provides travel information, guides, and resources about capital cities around the world. Our services include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Comprehensive guides to world capitals</li>
                    <li>Travel tips and recommendations</li>
                    <li>Photo galleries and visual content</li>
                    <li>Newsletter subscriptions</li>
                    <li>Community features and user-generated content</li>
                    <li>Trip planning tools and resources</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    3. User Accounts
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Some features of our services may require you to create an account. When creating an account, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information as necessary</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Be responsible for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized access</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    4. User Conduct
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When using our services, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on the rights of others, including intellectual property rights</li>
                    <li>Post false, misleading, or defamatory content</li>
                    <li>Harass, threaten, or intimidate other users</li>
                    <li>Upload viruses, malware, or other harmful code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use automated tools to scrape or collect data without permission</li>
                    <li>Interfere with the proper functioning of our services</li>
                    <li>Impersonate any person or entity</li>
                    <li>Use our services for commercial purposes without authorization</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    5. Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All content on CapitalExplorer, including text, graphics, logos, images, photographs, videos, and software, is the property of CapitalExplorer or our content suppliers and is protected by intellectual property laws.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Copy, modify, or distribute our content without permission</li>
                    <li>Use our trademarks or branding without authorization</li>
                    <li>Remove any copyright or proprietary notices</li>
                    <li>Create derivative works based on our content</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Limited personal, non-commercial use of our content is permitted with proper attribution.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    6. User-Generated Content
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you submit content to CapitalExplorer (including reviews, photos, comments, or other materials), you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content</li>
                    <li>Represent that you own or have the right to submit the content</li>
                    <li>Agree that we may modify or remove content at our discretion</li>
                    <li>Understand that we are not responsible for user-generated content</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    7. Disclaimer of Warranties
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Our services will be uninterrupted or error-free</li>
                    <li>The information provided is accurate, complete, or current</li>
                    <li>Our services will meet your specific requirements</li>
                    <li>Any defects will be corrected</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Travel information can change rapidly. Always verify details with official sources before making travel plans.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the fullest extent permitted by law, CapitalExplorer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. This includes damages for loss of profits, data, goodwill, or other intangible losses. Our total liability shall not exceed the amount you paid us, if any, in the past twelve months.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    9. Third-Party Links
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of any third-party sites. Your use of third-party services is at your own risk, and you should review their terms and privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    10. Indemnification
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify, defend, and hold harmless CapitalExplorer, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any rights of a third party.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    11. Termination
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use our services will cease immediately. Provisions that by their nature should survive termination shall remain in effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    12. Governing Law
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in San Francisco, California.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    13. Dispute Resolution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any dispute arising from these Terms or your use of our services shall first be attempted to be resolved through informal negotiation. If the dispute cannot be resolved informally, it shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    14. Severability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    15. Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-secondary p-6 rounded-xl">
                    <p className="text-foreground font-medium">CapitalExplorer Legal Team</p>
                    <p className="text-muted-foreground">Email: legal@capitalexplorer.com</p>
                    <p className="text-muted-foreground">Address: 123 Explorer Avenue, San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
