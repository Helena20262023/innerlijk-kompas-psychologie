import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function Betalingsvoorwaarden() {
  useEffect(() => {
    document.title = "Betalingsvoorwaarden | Innerlijk Kompas Psychologie";
  }, []);

  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/">
                <span
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-8 gap-1"
                  data-testid="link-back-home"
                >
                  <ArrowLeft size={16} /> Terug naar home
                </span>
              </Link>
              <h1
                className="text-3xl md:text-4xl font-serif text-foreground mb-4"
                data-testid="text-betalingsvoorwaarden-title"
              >
                Betalingsvoorwaarden
              </h1>
              <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
                Innerlijk Kompas Psychologie hanteert de volgende betalingsvoorwaarden. Door een afspraak te maken gaat u akkoord met onderstaande voorwaarden.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Facturering en betaling</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Facturen worden maandelijks of per sessie verstuurd, afhankelijk van de behandelafspraken. De betalingstermijn bedraagt <strong className="text-foreground font-semibold">14 dagen</strong> na factuurdatum. Bij het uitblijven van betaling binnen de gestelde termijn behoudt Innerlijk Kompas Psychologie het recht verdere herinneringen te sturen en eventuele incassomaatregelen te treffen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Vergoeding zorgverzekeraar</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Behandelingen in het kader van de Basis GGZ worden vergoed vanuit de basisverzekering, mits u beschikt over een geldige verwijsbrief van uw huisarts en het eigen risico van toepassing kan zijn. Innerlijk Kompas Psychologie declareert rechtstreeks bij uw zorgverzekeraar. U ontvangt geen factuur voor vergoede sessies, tenzij het eigen risico nog niet is bereikt.
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                  <h2 className="text-xl font-serif text-foreground">Annuleringsbeleid</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Afspraken dienen minimaal <strong className="text-foreground font-semibold">24 uur van tevoren</strong> te worden geannuleerd. Bij annulering binnen 24 uur of bij het niet verschijnen op de afspraak (no-show), wordt <strong className="text-foreground font-semibold">€ 65,–</strong> van het tarief in rekening gebracht.
                </p>
                <p className="text-sm text-amber-700 font-medium">
                  Let op: deze kosten worden <u>niet</u> vergoed door de zorgverzekeraar.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Cliënten via Psyvisie of Fundament Partners</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Voor cliënten die via het platform van Psyvisie of Fundament Partners worden behandeld, kunnen de specifieke betalings- en annuleringsregels van het betreffende platform van toepassing zijn. U wordt hierover geïnformeerd bij de start van de behandeling.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Vragen</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Heeft u vragen over de betalingsvoorwaarden? Neem dan gerust contact op via{" "}
                  <a
                    href="mailto:info@innerlijkkompaspsychologie.nl"
                    className="text-primary hover:underline"
                  >
                    info@innerlijkkompaspsychologie.nl
                  </a>.
                </p>
              </div>

              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Deze betalingsvoorwaarden zijn voor het laatst bijgewerkt op{" "}
                  {new Date().toLocaleDateString("nl-NL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
