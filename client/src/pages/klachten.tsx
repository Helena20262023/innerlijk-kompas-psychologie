import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Klachten() {
  useEffect(() => {
    document.title = "Klachten en geschillen | Innerlijk Kompas Psychologie";
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
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4" data-testid="text-klachten-title">Klachten en geschillen</h1>
              <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
                Ik vind het belangrijk dat u tevreden bent over mijn zorgverlening. Ik doe mijn best u zo goed mogelijk zorg te bieden. Toch kan het gebeuren dat er dingen misgaan of anders lopen dan u verwacht. Dit hoor ik graag, zodat ik samen met u naar een oplossing kan zoeken en ik mijn zorgverlening kan verbeteren.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Ga het gesprek aan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wanneer u als cliënt ontevreden bent over de door mij geleverde zorg, probeer dan eerst met mij het gesprek aan te gaan. Wij proberen er dan samen uit te komen. Mocht het overleg dat wij samen voeren niet tot een oplossing leiden, dan heeft u de mogelijkheid een officiële klacht in te dienen bij de klachtenfunctionaris.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Een klacht indienen</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Uw klacht kan betrekking hebben op uw zorg of de manier waarop er met u wordt omgegaan. De klachtenregeling is ondergebracht bij ZZP-er In De Zorg. U kunt een klacht indienen via het online klachtenformulier. U kunt zelf een klacht indienen; uw vertegenwoordiger kan dat ook namens u doen.
                </p>
                <a
                  href="https://www.zzp-erindezorg.nl/klacht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  data-testid="link-klachtenformulier"
                >
                  Online klachtenformulier <ExternalLink size={14} />
                </a>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Klachtenfunctionaris</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Ik beschik over een onafhankelijke klachtenfunctionaris. De klachtenfunctionaris is een onafhankelijk persoon die u kan ondersteunen bij het zoeken naar een oplossing voor uw klacht. Wanneer de klachtenfunctionaris uw klacht heeft ontvangen, neemt hij of zij contact met u op. U krijgt de ruimte om uw klacht toe te lichten.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Vervolgens worden er afspraken gemaakt. De klachtenfunctionaris stelt mij ook op de hoogte van de ingediende klacht en gaat kijken of er nog een gesprek mogelijk is; eventueel kan de klachtenfunctionaris daarbij aanwezig zijn om te bemiddelen. Binnen zes weken ontvangt u van mij als zorgaanbieder een schriftelijke reactie op uw klacht.
                </p>
                <div className="bg-muted/40 rounded-lg p-4 space-y-1.5 text-sm text-muted-foreground">
                  <p>De klachtenfunctionaris is bereikbaar via:</p>
                  <p>E-mail: <a href="mailto:klachtenfunctionaris@zzp-erindezorg.nl" className="text-primary hover:underline">klachtenfunctionaris@zzp-erindezorg.nl</a></p>
                  <p className="text-xs mt-2 italic">Het contact met de klachtenfunctionaris is gratis en vertrouwelijk.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Van klacht naar geschil</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Indien u het niet eens bent met de manier waarop uw klacht is opgelost en komen wij met de hulp van de klachtenfunctionaris niet tot een oplossing, dan verandert uw klacht in een geschil. U kunt uw geschil dan onder de aandacht brengen van de Geschilleninstantie. De klachtenfunctionaris kan u hierbij begeleiden als u dat wenst.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Geschilleninstantie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  De uiteindelijke geschilleninstantie is <strong className="text-foreground font-semibold">De Geschillencommissie Zorg (gevestigd in Den Haag)</strong>. Deze instantie is onafhankelijk en onpartijdig. De Geschillencommissie Zorg geeft binnen 6 maanden een oordeel over het geschil. De uitspraak is bindend voor alle partijen. U als cliënt en ik als zorgaanbieder kunnen hiertegen dus niet in beroep.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  De klachtenfunctionaris registreert uw klacht en uw persoonsgegevens en werkt volgens de privacyregels van de Algemene Verordening Gegevensbescherming (AVG). Daarnaast registreert zzp-erindezorg.nl anoniem alle klachten.
                </p>
              </div>

              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Klachtenregeling ondergebracht bij <a href="https://www.zzp-erindezorg.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ZZP-er In De Zorg</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
