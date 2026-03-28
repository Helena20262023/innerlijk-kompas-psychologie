import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacyverklaring | Innerlijk Kompas Psychologie";
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
                <span className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-8 gap-1" data-testid="link-back-home">
                  <ArrowLeft size={16} /> Terug naar home
                </span>
              </Link>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-12" data-testid="text-privacy-title">Privacyverklaring</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Innerlijk Kompas Psychologie hecht grote waarde aan de bescherming van jouw persoonsgegevens. In deze verklaring leg ik uit hoe ik omga met jouw gegevens en welke rechten je hebt.
              </p>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">1. Persoonsgegevens die worden verwerkt</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Wanneer je gebruikmaakt van het contactformulier op deze website, verwerkt Innerlijk Kompas Psychologie de volgende gegevens:
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  <li>• Voor- en achternaam</li>
                  <li>• E-mailadres</li>
                  <li>• Telefoonnummer (indien ingevuld)</li>
                  <li>• Informatie die je zelf invult in het berichtveld</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">2. Doel van de gegevensverwerking</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Ik verwerk deze gegevens uitsluitend om:
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  <li>• Contact met je op te nemen naar aanleiding van je hulpvraag.</li>
                  <li>• Een eventueel kennismakingsgesprek in te plannen.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">3. Bewaartermijn</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gegevens die via het contactformulier worden verzonden, worden niet langer bewaard dan strikt noodzakelijk is om de eerste stap in het contact te realiseren. Als er geen behandeling volgt, worden de gegevens binnen 30 dagen verwijderd. Bij de start van een behandeling worden de gegevens onderdeel van je medisch dossier, waarvoor een wettelijke bewaartermijn van 20 jaar geldt (WGBO).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">4. Beveiliging van gegevens</h2>
                <p className="text-muted-foreground leading-relaxed">
                  De website van Innerlijk Kompas Psychologie maakt gebruik van een SSL-certificaat om te borgen dat jouw gegevens niet in verkeerde handen vallen. Daarnaast vindt de online behandeling plaats via een beveiligde zorgomgeving die voldoet aan de strengste privacy-eisen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">5. Jouw rechten</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Je kunt een verzoek tot inzage of verwijdering sturen naar mijn zakelijke e-mailadres.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">6. Contactgegevens</h2>
                <div className="text-muted-foreground leading-relaxed space-y-1">
                  <p>Innerlijk Kompas Psychologie</p>
                  <p>E-mail: <a href="mailto:info@innerlijkkompaspsychologie.nl" className="text-primary hover:underline">info@innerlijkkompaspsychologie.nl</a></p>
                  <p>KVK: 99588390</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Deze privacyverklaring is voor het laatst bijgewerkt op {new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
