import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { 
  MapPin, 
  Users, 
  Globe, 
  Clock, 
  Thermometer, 
  Calendar,
  Landmark,
  Lightbulb,
  ArrowLeft,
  ChevronRight
} from "lucide-react"
import capitals from "@/lib/capitals"

// export async function generateStaticParams() {
//   return capitals.map((capital) => ({
//     slug: capital.slug,
//   }))
// }
// export function getAllCapitalSlugs(){
//   return capitals.map((capital) => capital.slug)
// }

// export function getCapitalBySlug(slug) {
//   return capitals.find((capital) => capital.slug === slug)
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params
//   const capital = getCapitalBySlug(slug)
  
//   if (!capital) {
//     return {
//       title: "Capital Not Found",
//     }
//   }

//   return {
//     title: `${capital.name}, ${capital.country} - CapitalExplorer`,
//     description: capital.description,
//   }
// }

const CapitalPage = async ({ params }) => {
  const { slug } = await params
  const capital = capitals.find((c) => c.slug === slug)

  if (!capital) {
    notFound()
  }

  const otherCapitals = capitals.filter((c) => c.slug !== capital.slug).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          
          <Image
            src={capital.image}
            alt={`${capital.name}, ${capital.country}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <Link 
                  href="/capitals" 
                  className="inline-flex items-center gap-2 text-foreground m-4 transition-colors bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Capitals
            </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            
            <div className="container mx-auto">
              
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  {capital.continent}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
                {capital.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {capital.country}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 border-b border-border bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Population</p>
                  <p className="font-semibold text-foreground text-sm">{capital.population}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Language</p>
                  <p className="font-semibold text-foreground text-sm">{capital.language}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">$</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Currency</p>
                  <p className="font-semibold text-foreground text-sm">{capital.currency}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Timezone</p>
                  <p className="font-semibold text-foreground text-sm">{capital.timezone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Thermometer className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Climate</p>
                  <p className="font-semibold text-foreground text-sm">{capital.climate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Best Time</p>
                  <p className="font-semibold text-foreground text-sm">{capital.bestTimeToVisit.split(",")[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                About {capital.name}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {capital.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Landmark className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Top Attractions
                </h2>
                <p className="text-muted-foreground">Must-see places in {capital.name}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capital.attractions.map((attraction, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{attraction.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Travel Tips
                </h2>
                <p className="text-muted-foreground">Insider advice for visiting {capital.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {capital.travelTips.map((tip, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50"
                >
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Best Time to Visit
              </h2>
              <p className="text-xl opacity-90">
                {capital.bestTimeToVisit}
              </p>
              <p className="mt-4 opacity-75">
                The {capital.climate.toLowerCase()} climate of {capital.name} makes these months ideal for exploring the city.
              </p>
            </div>
          </div>
        </section>

        {/* Other Capitals */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Explore Other Capitals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherCapitals.map((otherCapital) => (
                <Link 
                  key={otherCapital.slug}
                  href={`/capitals/${otherCapital.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={otherCapital.image}
                        alt={`${otherCapital.name}, ${otherCapital.country}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-medium">
                          {otherCapital.continent}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {otherCapital.name}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {otherCapital.country}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/capitals"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View All Capitals
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default CapitalPage