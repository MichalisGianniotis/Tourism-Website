import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ExternalLink, Mail, Calendar } from "lucide-react"

const pressReleases = [
  {
    date: "March 15, 2026",
    title: "CapitalExplorer Reaches 1 Million Monthly Active Users",
    excerpt: "The leading travel platform for world capitals celebrates a major milestone as user growth accelerates globally.",
  },
  {
    date: "February 8, 2026",
    title: "CapitalExplorer Launches AI-Powered Trip Planner",
    excerpt: "New feature uses artificial intelligence to create personalized itineraries based on user preferences and travel history.",
  },
  {
    date: "January 20, 2026",
    title: "Partnership Announcement: CapitalExplorer x Global Hotels Group",
    excerpt: "Strategic partnership brings exclusive hotel deals and booking integration to CapitalExplorer users worldwide.",
  },
  {
    date: "December 5, 2025",
    title: "CapitalExplorer Named Top Travel Platform of 2025",
    excerpt: "Industry recognition highlights our commitment to quality content and exceptional user experience.",
  },
]

const mediaFeatures = [
  { name: "TechCrunch", quote: "The go-to platform for capital city exploration" },
  { name: "Travel + Leisure", quote: "Redefining how we discover world capitals" },
  { name: "Forbes", quote: "A must-have tool for modern travelers" },
  { name: "The New York Times", quote: "Comprehensive and beautifully designed" },
]

const stats = [
  { value: "195+", label: "Capitals Covered" },
  { value: "1M+", label: "Monthly Users" },
  { value: "50+", label: "Countries Reached" },
  { value: "4.9", label: "App Store Rating" },
]

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                Press & Media
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                News & <span className="text-primary">Resources</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Find the latest news, press releases, and media resources about CapitalExplorer. For press inquiries, please contact our media team.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="mailto:press@capitalexplorer.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Press Team
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                As Featured In
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Media Coverage
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.name}
                  </h3>
                  <p className="text-muted-foreground text-sm italic">
                    &quot;{feature.quote}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                Latest Updates
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Press Releases
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {pressReleases.map((release) => (
                <div
                  key={release.title}
                  className="bg-card p-6 md:p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    {release.date}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {release.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {release.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                  Brand Assets
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Media Kit & Resources
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Download our official logos, brand guidelines, product screenshots, and other media assets for use in your publications. Please follow our brand guidelines when using these materials.
                </p>
                <div className="space-y-4">
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="mr-2 h-5 w-5" />
                    Download Media Kit
                  </Button>
                  <p className="text-muted-foreground text-sm">
                    Includes: Logos, screenshots, founder photos, fact sheet
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">CE</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Logo Pack</p>
                  <p className="text-xs text-muted-foreground">SVG, PNG, EPS</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/hero.jpg"
                      alt="Screenshots"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground">Screenshots</p>
                  <p className="text-xs text-muted-foreground">High-res images</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground">Aa</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Brand Guide</p>
                  <p className="text-xs text-muted-foreground">Colors & fonts</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src="/images/paris.jpg"
                      alt="Team photos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground">Team Photos</p>
                  <p className="text-xs text-muted-foreground">Founder & team</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Press Inquiries
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              For interviews, media coverage, or any press-related questions, our communications team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">
                  General Contact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
