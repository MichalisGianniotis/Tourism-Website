export default function PrivacyPolicyPage() {
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
                Privacy Policy
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
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At CapitalExplorer, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By using CapitalExplorer, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect several types of information from and about users of our website:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Personal Information:</strong> Name, email address, and contact details when you create an account, subscribe to our newsletter, or contact us.
                    </li>
                    <li>
                      <strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation patterns.
                    </li>
                    <li>
                      <strong className="text-foreground">Device Information:</strong> Browser type, operating system, IP address, and device identifiers.
                    </li>
                    <li>
                      <strong className="text-foreground">Location Data:</strong> General geographic location based on your IP address to provide relevant content.
                    </li>
                    <li>
                      <strong className="text-foreground">Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze site traffic.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Providing and maintaining our services</li>
                    <li>Personalizing your experience on our platform</li>
                    <li>Sending newsletters, updates, and promotional materials (with your consent)</li>
                    <li>Responding to your inquiries and support requests</li>
                    <li>Analyzing usage patterns to improve our website</li>
                    <li>Detecting and preventing fraud or security threats</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    4. Information Sharing and Disclosure
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell your personal information. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Service Providers:</strong> With third-party vendors who assist us in operating our website and services.
                    </li>
                    <li>
                      <strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights and safety.
                    </li>
                    <li>
                      <strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.
                    </li>
                    <li>
                      <strong className="text-foreground">With Your Consent:</strong> When you have given us explicit permission to share your information.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    5. Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    6. Your Rights and Choices
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to or restrict certain processing activities</li>
                    <li>Data portability (receive your data in a structured format)</li>
                    <li>Withdraw consent at any time</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    7. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings. Types of cookies we use:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly.
                    </li>
                    <li>
                      <strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website.
                    </li>
                    <li>
                      <strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences.
                    </li>
                    <li>
                      <strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent).
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    8. International Data Transfers
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    9. Children&apos;s Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    10. Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    11. Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-secondary p-6 rounded-xl">
                    <p className="text-foreground font-medium">CapitalExplorer Privacy Team</p>
                    <p className="text-muted-foreground">Email: privacy@capitalexplorer.com</p>
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
