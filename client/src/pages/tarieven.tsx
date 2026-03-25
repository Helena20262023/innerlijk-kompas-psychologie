import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Tarieven() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-12 md:mb-24">
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-12" data-testid="text-page-title">Kosten & Vergoeding</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Behandelingen worden vergoed door je verzekeraar. Hieronder vind je alle informatie over tarieven en vergoedingen.
          </p>

          <div className="flex gap-8 justify-center flex-wrap">
            <a href="https://www.fundamentpartners.nl" target="_blank" rel="noopener noreferrer" data-testid="link-fundament-badge" className="group">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white group-hover:scale-105 transition-transform duration-200 shadow-lg gap-1.5" style={{ backgroundColor: '#5C3D45' }}>
                <span className="text-sm font-bold text-center leading-tight px-3">Fundament Partners</span>
                <ExternalLink size={16} className="opacity-70" />
              </div>
            </a>
            <a href="https://www.psyvisie.nl" target="_blank" rel="noopener noreferrer" data-testid="link-psyvisie-badge" className="group">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white group-hover:scale-105 transition-transform duration-200 shadow-lg gap-1.5" style={{ backgroundColor: '#5C3D45' }}>
                <span className="text-sm font-bold text-center leading-tight px-3">Psyvisie</span>
                <ExternalLink size={16} className="opacity-70" />
              </div>
            </a>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border/40 bg-white overflow-hidden"
          >
            <div className="flex">
              <div className="w-1.5 bg-primary/20 shrink-0" />
              <div className="p-7">
                <h3 className="text-xl font-serif text-foreground mb-3" data-testid="text-section-zorgverzekering">Zorgverzekering</h3>
                <p className="text-muted-foreground leading-relaxed mb-3 text-[15px]">
                  Ik ben aangesloten bij <strong>Fundament Partners GGZ</strong> en <strong>Psyvisie</strong>. Behandelingen binnen de Generalistische Basis GGZ (GBGGZ) worden vergoed vanuit je basisverzekering.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2 text-[15px]">Wat heb je nodig?</p>
                <ul className="space-y-1.5 text-muted-foreground text-[15px]">
                  <li>• Een verwijsbrief van je huisarts (met een DSM-5 vermoeden, vóór de intake)</li>
                  <li>• Je eigen risico wordt verrekend</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border/40 bg-white overflow-hidden"
          >
            <div className="flex">
              <div className="w-1.5 bg-primary/20 shrink-0" />
              <div className="p-7">
                <h3 className="text-xl font-serif text-foreground mb-3" data-testid="text-section-vergoedingen">Informatie over vergoedingen</h3>
                <p className="text-muted-foreground leading-relaxed mb-3 text-[15px]">
                  De vergoeding van je behandeling is afhankelijk van je zorgpolis en de contracten die mijn opdrachtgevers hebben afgesloten met zorgverzekeraars. Voor specifieke vragen over gecontracteerde zorg en de hoogte van je vergoeding, kun je de actuele informatie vinden op de websites van de platforms:
                </p>
                <ul className="space-y-2 mb-3">
                  <li>
                    <a href="https://www.fundamentpartners.nl" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors text-[15px]" data-testid="link-vergoeding-fundament">
                      Informatie over vergoedingen bij Fundament Partners
                    </a>
                  </li>
                  <li>
                    <a href="https://www.psyvisie.nl" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors text-[15px]" data-testid="link-vergoeding-psyvisie">
                      Informatie over vergoedingen bij Psyvisie
                    </a>
                  </li>
                </ul>
                <p className="text-sm italic text-muted-foreground">
                  Tip: Houd je polisnummer bij de hand wanneer je contact met hen opneemt.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border/40 bg-white overflow-hidden"
          >
            <div className="flex">
              <div className="w-1.5 bg-primary/20 shrink-0" />
              <div className="p-7">
                <h3 className="text-xl font-serif text-foreground mb-3" data-testid="text-section-restitutie">Restitutie (geen contract)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3 text-[15px]">
                  Voor verzekeraars waarmee geen contract is afgesloten (o.a. VGZ en labels, CZ en labels) geldt een restitutievergoeding. Afhankelijk van je polis wordt <strong>65% tot 100%</strong> van het NZa-tarief vergoed.
                </p>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Check altijd je eigen polisvoorwaarden of neem contact op met je verzekeraar voor de exacte vergoeding.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border/40 bg-white overflow-hidden"
          >
            <div className="flex">
              <div className="w-1.5 bg-primary/20 shrink-0" />
              <div className="p-7">
                <h3 className="text-xl font-serif text-foreground mb-3" data-testid="text-section-eigen-risico">Eigen risico</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  GGZ-behandelingen vallen onder het eigen risico van je zorgverzekering. Het wettelijk eigen risico bedraagt maximaal <strong>€385 per jaar</strong>. Dit wordt verrekend met de eerste behandelingen. Als je het eigen risico al (deels) hebt gebruikt voor andere zorg, betaal je minder of niets.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border/40 bg-white overflow-hidden"
          >
            <div className="flex">
              <div className="w-1.5 bg-primary/20 shrink-0" />
              <div className="p-7">
                <h3 className="text-xl font-serif text-foreground mb-3" data-testid="text-section-jouw-kosten">Jouw kosten (niet-verzekerd)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                  Voor klachten die niet in aanmerking komen voor vergoeding via de basisverzekering (zoals burn-out coaching, relatievragen of persoonlijke groei) geldt een particulier tarief.
                </p>
                <div className="rounded-lg border border-border/40 overflow-hidden mb-5">
                  <table className="w-full" data-testid="table-tarieven">
                    <thead>
                      <tr className="bg-primary/8 border-b border-border/40">
                        <th className="text-left px-5 py-3 font-bold text-foreground uppercase tracking-wide text-xs">Sessie</th>
                        <th className="text-left px-5 py-3 font-bold text-foreground uppercase tracking-wide text-xs">Tarief</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-secondary/5 border-b border-border/20">
                        <td className="px-5 py-3.5 font-medium text-foreground text-[15px]">Individuele Sessie (45 min)</td>
                        <td className="px-5 py-3.5 text-foreground font-semibold text-[15px]">€75</td>
                      </tr>
                      <tr className="bg-secondary/10 border-b border-border/20">
                        <td className="px-5 py-3.5 font-medium text-foreground text-[15px]">Relatie Sessie (60 min)</td>
                        <td className="px-5 py-3.5 text-foreground font-semibold text-[15px]">€120</td>
                      </tr>
                      <tr className="bg-secondary/5">
                        <td className="px-5 py-3.5 font-medium text-foreground text-[15px]">Te laat afgezegd / niet verschenen</td>
                        <td className="px-5 py-3.5 text-foreground font-semibold text-[15px]">€65</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3 text-[15px]">
                  Wachttijd: maximaal <strong>3 weken</strong>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Je kunt een afspraak kosteloos tot <strong>24 uur</strong> voor je afspraak afzeggen. Voor afspraken die niet of te laat worden afgezegd, wordt <strong>€65,-</strong> in rekening gebracht.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border/40 bg-white overflow-hidden"
          >
            <div className="flex">
              <div className="w-1.5 bg-primary/20 shrink-0" />
              <div className="p-7 w-full text-center">
                <h3 className="text-xl font-serif text-foreground mb-3" data-testid="text-section-aanmelden">Direct aanmelden</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                  Kies een van de onderstaande platforms om je officieel aan te melden voor een traject bij mij.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://www.fundamentpartners.nl" target="_blank" rel="noopener noreferrer" data-testid="button-aanmelden-fundament" className="w-full sm:w-auto">
                    <Button className="rounded-lg gap-2 bg-primary hover:bg-primary/90 text-white w-full sm:min-w-[250px] py-6 text-base font-bold">
                      Meld je aan via Fundament Partners
                    </Button>
                  </a>
                  <a href="https://www.psyvisie.nl" target="_blank" rel="noopener noreferrer" data-testid="button-aanmelden-psyvisie" className="w-full sm:w-auto">
                    <Button className="rounded-lg gap-2 bg-primary hover:bg-primary/90 text-white w-full sm:min-w-[250px] py-6 text-base font-bold">
                      Meld je aan via Psyvisie
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-5">
                  * Vergeet niet bij je aanmelding te vermelden dat je specifiek naar mijn begeleiding vraagt.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
