import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Briefcase, Heart, Globe, Users, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in the world. We believe great work happens wherever you are.",
  },
  {
    icon: Heart,
    title: "Travel Perks",
    description: "Annual travel stipend and discounts with our partner hotels and airlines.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Join a diverse team of passionate travelers and creative professionals.",
  },
  {
    icon: Sparkles,
    title: "Growth",
    description: "Learning budget, mentorship programs, and clear career progression paths.",
  },
]

const openPositions = [
  {
    title: "Senior Content Writer",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling travel guides and destination content that inspires millions of travelers worldwide.",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain our platform using Next.js, TypeScript, and modern web technologies.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Shape the user experience of our platform and create beautiful, intuitive interfaces.",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    description: "Lead our marketing initiatives and grow our community of travel enthusiasts.",
  },
  {
    title: "Travel Photographer",
    department: "Content",
    location: "Remote",
    type: "Contract",
    description: "Capture stunning images of capital cities around the world for our platform.",
  },
  {
    title: "Community Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Engage with our community, moderate discussions, and foster meaningful connections.",
  },
]

const values = [
  "Curiosity drives everything we do",
  "We celebrate diverse perspectives",
  "Quality over quantity, always",
  "Sustainable and responsible travel",
  "Collaboration makes us stronger",
  "We ship fast and iterate often",
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                Careers
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Join Our <span className="text-primary">Adventure</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Help us inspire millions of travelers to explore the world&apos;s capital cities. We&apos;re looking for passionate individuals who share our love for travel and discovery.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                Why Join Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Benefits & Perks
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-card p-6 md:p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-medium mb-2 tracking-wider uppercase text-sm">
                  Our Culture
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What We Believe In
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed">
                  At CapitalExplorer, we&apos;re more than just a company - we&apos;re a community of explorers united by our passion for travel and discovery. Our values guide everything we do.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 bg-primary-foreground/10 px-4 py-3 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="positions" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                Open Positions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Find Your Role
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position) => (
                <div
                  key={position.title}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                          {position.department}
                        </span>
                        <span className="px-2 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-medium">
                          {position.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {position.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 md:flex-shrink-0">
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We&apos;re always looking for talented people. Send us your resume and tell us how you can contribute to our mission.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
