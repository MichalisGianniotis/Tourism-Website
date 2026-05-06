import Link from "next/link"
import { Globe, Instagram, Twitter, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold tracking-tight">
                CapitalExplorer
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Discover the world&apos;s most fascinating capital cities. Plan your journey, explore cultures, and create unforgettable memories.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://mail.google.com/" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/capitals?continent=All" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  All Capitals
                </Link>
              </li>
              <li>
                <Link href="/capitals?continent=Europe" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="/capitals?continent=Asia" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Asia
                </Link>
              </li>
              <li>
                <Link href="/capitals?continent=North America" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Americas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 CapitalExplorer. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
