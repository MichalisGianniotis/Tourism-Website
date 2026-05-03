import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Building2, Users } from "lucide-react"
import capitals from "@/data/capitals"
import features from "@/data/features"

const featuredCapitals = capitals.filter((capital) => capital.featured)

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
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
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-primary-foreground">
                <Link href="/capitals">
                  Explore Capitals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary/30 text-secondary-foreground hover:bg-primary-foreground/10 hover:text-secondary">
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
                  key={capital.slug}
                  href={`/capitals/${capital.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={capital.image}
                        alt={`${capital.name}, ${capital.country}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-medium">
                          {capital.continent}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {capital.name}
                          </h3>
                          <p className="text-muted-foreground text-sm flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {capital.country}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                        {capital.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {capital.population}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {capital.highlights.length} landmarks
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {capital.highlights.slice(0, 3).map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all mt-auto">
                        Explore More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </article>
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
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:border-secondary/30 hover:text-secondary">
              <Link href="/capitals">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
