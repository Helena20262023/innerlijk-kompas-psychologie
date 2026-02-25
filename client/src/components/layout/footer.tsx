import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/">
            <a className="font-serif text-2xl font-bold tracking-tight mb-4 block">
              Innerlijk Kompas
            </a>
          </Link>
          <p className="text-muted/80 max-w-sm mb-6 leading-relaxed">
            Serene, toegankelijke therapie voor zowel inwoners als expats in Nederland.
            Evidence-based praktijken in een veilige, verwelkomende omgeving.
          </p>
          <p className="text-sm text-muted/60">
            © {new Date().getFullYear()} Innerlijk Kompas. Alle rechten voorbehouden.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Diensten</h4>
          <ul className="space-y-3">
            <li><Link href="/services"><a className="text-muted/80 hover:text-white transition-colors">Individuele Therapie</a></Link></li>
            <li><Link href="/services"><a className="text-muted/80 hover:text-white transition-colors">Relatietherapie</a></Link></li>
            <li><Link href="/services"><a className="text-muted/80 hover:text-white transition-colors">Expat Ondersteuning</a></Link></li>
            <li><Link href="/services"><a className="text-muted/80 hover:text-white transition-colors">Online Sessies</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Juridisch</h4>
          <ul className="space-y-3">
            <li><Link href="/privacy"><a className="text-muted/80 hover:text-white transition-colors">Privacyverklaring</a></Link></li>
            <li><Link href="/terms"><a className="text-muted/80 hover:text-white transition-colors">Algemene Voorwaarden</a></Link></li>
            <li><Link href="/checklist"><a className="text-muted/80 hover:text-white transition-colors">Lanceringschecklist</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-muted/80">
            <li>Keizersgracht 123</li>
            <li>1015 CJ Amsterdam</li>
            <li>Nederland</li>
            <li className="pt-2"><a href="mailto:hello@innerlijkkompas.nl" className="hover:text-white transition-colors">hello@innerlijkkompas.nl</a></li>
            <li><a href="tel:+31201234567" className="hover:text-white transition-colors">+31 20 123 4567</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
