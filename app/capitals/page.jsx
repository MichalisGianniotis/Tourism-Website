'use client'

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { MapPin, Users, Building2, ArrowRight} from "lucide-react"
import Link from "next/link"
import capitals from "@/data/capitals"

const continents = ["All", "Europe", "Asia", "North America", "South America", "Africa", "Oceania"]

function CapitalsContent() {

  const searchParams = useSearchParams()
  const router = useRouter()
  const continentParam = searchParams.get("continent")
  const [selectedContinent, setSelectedContinent] = useState(continentParam || "All")

  useEffect(() => {
    if (continentParam && continents.includes(continentParam)) {
      setSelectedContinent(continentParam)
    }
  }, [continentParam])

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent)
    if (continent === "All") {
      router.push("/capitals")
    } else {
      router.push(`/capitals?continent=${encodeURIComponent(continent)}`)
    }
  }

  const filteredCapitals = selectedContinent === "All"
    ? capitals
    : capitals.filter((capital) => capital.continent === selectedContinent)


  const [visibleCount, setVisibleCount] = useState(3)

  const visibleCapitals = filteredCapitals.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCapitals.length

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Page Header */}
        <section className="bg-secondary py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                Explore
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                World Capitals
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Discover the political and cultural hearts of nations around the world. Each capital tells a unique story of history, power, and progress.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="border-b border-border sticky top-16 md:top-20 bg-background z-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              {continents.map((continent) => (
                <button
                  key={continent}
                  onClick={() => setSelectedContinent(continent)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    continent === selectedContinent
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {continent}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Capitals Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            {filteredCapitals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visibleCapitals.map((capital) => (
                  <Link
                    key={capital.slug}
                    href={`/capitals/${capital.slug}`}
                    className="group block"
                  >
                  <article
                    className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col"
                  >
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
                          <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {capital.name}
                          </h2>
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
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No capitals found
                </h3>
                <p className="text-muted-foreground mb-6">
                  We don&apos;t have any capitals listed for {selectedContinent} yet.
                </p>
                <button
                  onClick={() => setSelectedContinent("All")}
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  View All Capitals
                </button>
              </div>
            )}

            {/* Load More */}
            {hasMore && (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Showing {Math.min(visibleCount, filteredCapitals.length)} of {filteredCapitals.length} capitals
              </p>

                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="px-8 py-3 rounded-lg border border-border bg-card hover:bg-secondary text-foreground font-medium transition-colors"
                >
                  Load More Capitals
                </button>
            </div>
            )}
            
          </div>
        </section>
      </main>
    </div>
  )
}

export default function CapitalsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CapitalsContent />
    </Suspense>
  )
}