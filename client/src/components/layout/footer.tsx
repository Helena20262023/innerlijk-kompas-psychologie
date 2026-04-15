import { Link } from "wouter";
import { Mail, MapPin, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5C3D45] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <span className="font-serif text-lg font-bold tracking-tight block mb-1">
              Innerlijk Kompas
            </span>
            <p className="text-white/70 text-sm">
              Online behandeling in je eigen omgeving
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3">Snel naar</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/werkwijze" className="text-white/70 hover:text-white transition-colors">Werkwijze</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">Over mij</Link></li>
              <li><Link href="/tarieven" className="text-white/70 hover:text-white transition-colors">Tarieven</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3">Contact</h4>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={14} className="shrink-0" />
                <a href="mailto:info@innerlijkkompaspsychologie.nl" className="hover:text-white transition-colors">info@innerlijkkompaspsychologie.nl</a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MapPin size={14} className="shrink-0" />
                Rotterdam en omgeving
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Building2 size={14} className="shrink-0" />
                KVK: 99588390
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Innerlijk Kompas Psychologie. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="text-xs text-white/50 hover:text-white transition-colors">
              Privacyverklaring
            </Link>
            <Link href="/privacy-informatie" className="text-xs text-white/50 hover:text-white transition-colors">
              Privacy-informatiefolder
            </Link>
            <Link href="/klachten" className="text-xs text-white/50 hover:text-white transition-colors">
              Klachten en geschillen
            </Link>
            <Link href="/betalingsvoorwaarden" className="text-xs text-white/50 hover:text-white transition-colors">
              Betalingsvoorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
