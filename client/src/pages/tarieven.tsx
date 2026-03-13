import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Tarieven() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6" data-testid="text-page-title">Kosten & Vergoeding</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Behandelingen worden vergoed door je verzekeraar. Hieronder vind je alle informatie over tarieven en vergoedingen.
          </p>

          <div className="flex gap-5 justify-center flex-wrap">
            <a href="https://www.fundamentpartnersggz.nl" target="_blank" rel="noopener noreferrer" data-testid="link-fundament-badge">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 cursor-pointer">
                Fundament Partners GGZ <ExternalLink size={15} />
              </div>
            </a>
            <a href="https://www.psyvisie.nl" target="_blank" rel="noopener noreferrer" data-testid="link-psyvisie-badge">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 cursor-pointer">
                Psyvisie <ExternalLink size={15} />
              </div>
            </a>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border/50 bg-white"
          >
            <h3 className="text-2xl font-serif text-foreground mb-4" data-testid="text-section-zorgverzekering">Zorgverzekering</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ik ben aangesloten bij <strong>Fundament Partners GGZ</strong> en <strong>Psyvisie</strong>. Behandelingen binnen de Generalistische Basis GGZ (GBGGZ) worden vergoed vanuit je basisverzekering.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">Wat heb je nodig?</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Een verwijsbrief van je huisarts (met een DSM-5 vermoeden, vóór de intake)</li>
              <li>• Je eigen risico wordt verrekend</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border/50 bg-white"
          >
            <h3 className="text-2xl font-serif text-foreground mb-4" data-testid="text-section-vergoedingen">Informatie over vergoedingen</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De vergoeding van je behandeling is afhankelijk van je zorgpolis en de contracten die mijn opdrachtgevers hebben afgesloten met zorgverzekeraars. Voor specifieke vragen over gecontracteerde zorg en de hoogte van je vergoeding, kun je de actuele informatie vinden op de websites van de platforms:
            </p>
            <ul className="space-y-3 mb-4">
              <li>
                <a href="https://www.fundamentpartnersggz.nl" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors" data-testid="link-vergoeding-fundament">
                  Informatie over vergoedingen bij Fundament Partners
                </a>
              </li>
              <li>
                <a href="https://www.psyvisie.nl" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors" data-testid="link-vergoeding-psyvisie">
                  Informatie over vergoedingen bij Psyvisie
                </a>
              </li>
            </ul>
            <p className="text-sm italic text-muted-foreground">
              Tip: Houd je polisnummer bij de hand wanneer je contact met hen opneemt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border/50 bg-white"
          >
            <h3 className="text-2xl font-serif text-foreground mb-4" data-testid="text-section-restitutie">Restitutie (geen contract)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Voor verzekeraars waarmee geen contract is afgesloten (o.a. VGZ en labels, CZ en labels) geldt een restitutievergoeding. Afhankelijk van je polis wordt <strong>65% tot 100%</strong> van het NZa-tarief vergoed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Check altijd je eigen polisvoorwaarden of neem contact op met je verzekeraar voor de exacte vergoeding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border/50 bg-white"
          >
            <h3 className="text-2xl font-serif text-foreground mb-4" data-testid="text-section-eigen-risico">Eigen risico</h3>
            <p className="text-muted-foreground leading-relaxed">
              GGZ-behandelingen vallen onder het eigen risico van je zorgverzekering. Het wettelijk eigen risico bedraagt maximaal <strong>€385 per jaar</strong>. Dit wordt verrekend met de eerste behandelingen. Als je het eigen risico al (deels) hebt gebruikt voor andere zorg, betaal je minder of niets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border/50 bg-white"
          >
            <h3 className="text-2xl font-serif text-foreground mb-4" data-testid="text-section-jouw-kosten">Jouw kosten (niet-verzekerd)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Voor klachten die niet in aanmerking komen voor vergoeding via de basisverzekering (zoals burn-out coaching, relatievragen of persoonlijke groei) geldt een particulier tarief.
            </p>
            <div className="rounded-xl border border-border/50 overflow-hidden mb-6">
              <table className="w-full" data-testid="table-tarieven">
                <thead>
                  <tr className="bg-secondary/20 border-b border-border/50">
                    <th className="text-left px-6 py-4 font-bold text-foreground uppercase tracking-wide text-sm">Sessie</th>
                    <th className="text-left px-6 py-4 font-bold text-foreground uppercase tracking-wide text-sm">Tarief</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-secondary/5 border-b border-border/30">
                    <td className="px-6 py-4 font-medium text-foreground">Individuele Sessie (45 min)</td>
                    <td className="px-6 py-4 text-foreground font-semibold">€75</td>
                  </tr>
                  <tr className="bg-secondary/10 border-b border-border/30">
                    <td className="px-6 py-4 font-medium text-foreground">Relatie Sessie (60 min)</td>
                    <td className="px-6 py-4 text-foreground font-semibold">€120</td>
                  </tr>
                  <tr className="bg-secondary/5">
                    <td className="px-6 py-4 font-medium text-foreground">Te laat afgezegd / niet verschenen</td>
                    <td className="px-6 py-4 text-foreground font-semibold">€65</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wachttijd: maximaal <strong>3 weken</strong>.
            </p>
            <p className="text-sm text-muted-foreground">
              Je kunt een afspraak kosteloos tot <strong>24 uur</strong> voor je afspraak afzeggen. Voor afspraken die niet of te laat worden afgezegd, wordt <strong>€65,-</strong> in rekening gebracht.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border/50 bg-white text-center"
          >
            <h3 className="text-2xl font-serif text-foreground mb-4" data-testid="text-section-aanmelden">Direct aanmelden</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kies een van de onderstaande platforms om je officieel aan te melden voor een traject bij mij.
            </p>
            <div className="flex gap-5 justify-center flex-wrap">
              <a href="https://www.fundamentpartnersggz.nl" target="_blank" rel="noopener noreferrer" data-testid="button-aanmelden-fundament">
                <Button className="rounded-lg gap-2 bg-primary hover:bg-primary/90 text-white min-w-[250px] py-6 text-base font-bold">
                  Meld je aan via Fundament Partners
                </Button>
              </a>
              <a href="https://www.psyvisie.nl" target="_blank" rel="noopener noreferrer" data-testid="button-aanmelden-psyvisie">
                <Button className="rounded-lg gap-2 bg-primary hover:bg-primary/90 text-white min-w-[250px] py-6 text-base font-bold">
                  Meld je aan via Psyvisie
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-5">
              * Vergeet niet bij je aanmelding te vermelden dat je specifiek naar mijn begeleiding vraagt.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
