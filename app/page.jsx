import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Compass, Camera, Users } from "lucide-react"

const featuredCapitals = [
  {
    name: "Paris",
    country: "France",
    image: "/images/paris.jpg",
    description: "The City of Light awaits with iconic landmarks and culinary delights.",
  },
  {
    name: "Tokyo",
    country: "Japan",
    image: "/images/tokyo.jpg",
    description: "Where ancient traditions meet cutting-edge innovation.",
  },
  {
    name: "London",
    country: "United Kingdom",
    image: "/images/london.jpg",
    description: "Royal heritage and modern culture in perfect harmony.",
  },
]

const features = [
  {
    icon: MapPin,
    title: "195+ Capitals",
    description: "Explore every capital city across the globe with detailed guides.",
  },
  {
    icon: Compass,
    title: "Expert Guides",
    description: "Curated recommendations from local experts and seasoned travelers.",
  },
  {
    icon: Camera,
    title: "Visual Stories",
    description: "Stunning photography that brings each destination to life.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow travelers and share your experiences.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt="World travel"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-primary-foreground">
            <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Discover the World
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
              Explore the World&apos;s <br className="hidden md:block" />
              <span className="text-accent">Capital Cities</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
              Embark on a journey through history, culture, and adventure. Discover what makes each capital city unique and plan your next unforgettable trip.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/capitals">
                  Explore Capitals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Gateway to World Capitals
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card p-6 md:p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Capitals Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
              <div>
                <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                  Featured Destinations
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Popular Capitals to Explore
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/capitals">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredCapitals.map((capital) => (
                <Link
                  key={capital.name}
                  href="/capitals"
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={capital.image}
                      alt={`${capital.name}, ${capital.country}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-primary-foreground/80 text-sm">
                        {capital.country}
                      </p>
                      <h3 className="text-xl font-bold text-primary-foreground">
                        {capital.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {capital.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join thousands of travelers who have discovered their next adventure through CapitalExplorer.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/capitals">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
