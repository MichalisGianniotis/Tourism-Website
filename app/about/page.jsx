import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, Award, Heart } from "lucide-react"

const stats = [
  { value: "195+", label: "Capitals Covered" },
  { value: "50K+", label: "Monthly Visitors" },
  { value: "1M+", label: "Photos Shared" },
  { value: "4.9", label: "User Rating" },
]

const values = [
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We believe in celebrating the diversity of cultures and traditions that make each capital city unique.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our community of travelers and locals share authentic experiences to help others explore with confidence.",
  },
  {
    icon: Award,
    title: "Quality Content",
    description: "Every guide is carefully curated with accurate information, stunning visuals, and practical tips.",
  },
  {
    icon: Heart,
    title: "Sustainable Travel",
    description: "We promote responsible tourism that respects local communities and preserves cultural heritage.",
  },
]

const team = [
  { name: "Sarah Chen", role: "Founder & CEO", image: "/images/paris.jpg" },
  { name: "Marcus Weber", role: "Head of Content", image: "/images/berlin.jpg" },
  { name: "Elena Rodriguez", role: "Lead Designer", image: "/images/madrid.jpg" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Inspiring Global <br />
                <span className="text-primary">Exploration</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                CapitalExplorer was founded with a simple mission: to help travelers discover the heart and soul of every nation through its capital city. We believe that understanding a country begins with exploring where its power, culture, and history converge.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/capitals">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Wanderlust to Platform
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    What started as a personal travel blog documenting visits to world capitals has grown into a comprehensive platform serving hundreds of thousands of travelers worldwide.
                  </p>
                  <p>
                    Our team of travel enthusiasts, photographers, and local experts work tirelessly to bring you the most accurate, up-to-date, and inspiring content about capital cities across the globe.
                  </p>
                  <p>
                    Whether you&apos;re planning your first international trip or you&apos;re a seasoned traveler looking for hidden gems, CapitalExplorer is your trusted companion for discovering the world&apos;s most fascinating cities.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/hero.jpg"
                  alt="World exploration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Drives Us Forward
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card p-6 md:p-8 rounded-xl border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The People Behind CapitalExplorer
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-border">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Join Our Community of Explorers
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect with travelers from around the world, share your experiences, and discover your next adventure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-secondary hover:border-secondary/30">
                <Link href="/capitals">
                  Explore Capitals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-accent-foreground hover:bg-primary-foreground/10 hover:border-secondary/30 hover:text-secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
