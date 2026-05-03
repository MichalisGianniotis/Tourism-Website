import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@capitalexplorer.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "350 Fifth Avenue",
    description: "New York, NY 10118",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday",
    description: "9:00 AM - 6:00 PM EST",
  },
]

const faqs = [
  {
    question: "How can I contribute to CapitalExplorer?",
    answer: "We welcome contributions from travel enthusiasts! You can share your photos, write guest articles, or join our community of local experts.",
  },
  {
    question: "Do you offer travel planning services?",
    answer: "While we primarily provide information and guides, we partner with travel agencies who can help plan your trip based on our recommendations.",
  },
  {
    question: "How do I report incorrect information?",
    answer: "If you find any outdated or incorrect information, please email us at corrections@capitalexplorer.com and we will update it promptly.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Have questions about a destination? Want to partner with us? Or just want to say hello? We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                  Send a Message
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  We&apos;re Here to Help
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Fill out the form and our team will get back to you within 24 hours. Whether you have a question about our content, want to report an issue, or are interested in partnerships, we&apos;re eager to assist.
                </p>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Frequently Asked Questions
                  </h3>
                  {faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-border pb-4">
                      <h4 className="font-medium text-foreground mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="content">Content Contribution</option>
                      <option value="correction">Report an Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
