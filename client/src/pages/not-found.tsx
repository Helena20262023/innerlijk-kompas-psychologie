import { useEffect } from "react";
import { Link } from "wouter";

export default function NotFound() {
  useEffect(() => {
    document.title = "Pagina niet gevonden | Innerlijk Kompas Psychologie";
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background pt-20">
      <div className="text-center px-6 max-w-md">
        <p className="text-6xl font-serif text-primary/30 mb-6">404</p>
        <h1 className="text-2xl font-serif text-foreground mb-4">Pagina niet gevonden</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          De pagina die je zoekt bestaat niet of is verplaatst. Ga terug naar de homepage of neem contact op.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <span className="inline-block px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors cursor-pointer">
              Terug naar home
            </span>
          </Link>
          <Link href="/contact">
            <span className="inline-block px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/5 font-medium transition-colors cursor-pointer">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
