import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

export default function Tarieven() {
  const whatsappUrl = "https://wa.me/31600000000";

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 italic" data-testid="text-page-title">Kosten & Vergoeding</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Ik ben aangesloten bij <strong>Fundament Partners GGZ</strong> en <strong>Psyvisie</strong>. Behandelingen worden vergoed door je verzekeraar.
          </p>
          <div className="flex justify-center gap-10 flex-wrap">
            <a href="https://fundamentpartnersggz.nl" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group" data-testid="link-fundament">
              <div className="w-[100px] h-[100px] rounded-full bg-[#4A6741] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-sm tracking-wide">FGGZ</span>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Fundament Partners GGZ</span>
            </a>
            <a href="https://psyvisie.nl" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group" data-testid="link-psyvisie">
              <div className="w-[100px] h-[100px] rounded-full bg-[#5D7B8A] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-sm tracking-wide">Psyvisie</span>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Psyvisie</span>
            </a>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] border bg-card/50 glass-card"
          >
            <h3 className="text-2xl font-serif mb-4" data-testid="text-section-zorgverzekering">Zorgverzekering</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ik ben aangesloten bij <strong>Fundament Partners GGZ</strong>. Behandelingen binnen de Generalistische Basis GGZ (GBGGZ) worden vergoed vanuit je basisverzekering.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">Wat heb je nodig?</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Een verwijsbrief van je huisarts (met een DSM-5 vermoeden, vóór de intake)</li>
              <li>• Je eigen risico wordt verrekend</li>
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full gap-2" data-testid="button-whatsapp-zorgverzekering">
                <MessageCircle size={18} />
                Vragen? WhatsApp ons
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] border bg-card/50 glass-card"
          >
            <h3 className="text-2xl font-serif mb-4" data-testid="text-section-gecontracteerd">Gecontracteerde verzekeraars</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bij de volgende verzekeraars wordt rechtstreeks gedeclareerd:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground mb-4">
              <li>• Zilveren Kruis (en labels)</li>
              <li>• ONVZ (en labels)</li>
              <li>• Menzis (en labels)</li>
              <li>• a.s.r. (en labels)</li>
              <li>• DSW (en labels)</li>
              <li>• Eno (en labels)</li>
            </ul>
            <div className="p-4 bg-muted/30 rounded-xl text-sm text-muted-foreground">
              <p><strong>Let op:</strong> Afwijkende situatie? Neem contact op voor een exacte inschatting van de kosten.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] border bg-card/50 glass-card"
          >
            <h3 className="text-2xl font-serif mb-4" data-testid="text-section-restitutie">Restitutie (geen contract)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Voor verzekeraars waarmee geen contract is afgesloten (o.a. VGZ en labels, CZ en labels) geldt een restitutievergoeding. Afhankelijk van je polis wordt <strong>65% tot 100%</strong> van het NZa-tarief vergoed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Check altijd je eigen polisvoorwaarden of neem contact op met je verzekeraar voor de exacte vergoeding.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full gap-2" data-testid="button-whatsapp-restitutie">
                <MessageCircle size={18} />
                Vragen? WhatsApp ons
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] border bg-card/50 glass-card"
          >
            <h3 className="text-2xl font-serif mb-4" data-testid="text-section-eigen-risico">Eigen risico</h3>
            <p className="text-muted-foreground leading-relaxed">
              GGZ-behandelingen vallen onder het eigen risico van je zorgverzekering. Het wettelijk eigen risico bedraagt maximaal <strong>€385 per jaar</strong>. Dit wordt verrekend met de eerste behandelingen. Als je het eigen risico al (deels) hebt gebruikt voor andere zorg, betaal je minder of niets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] border bg-card/50 glass-card border-primary/20"
          >
            <h3 className="text-2xl font-serif mb-4" data-testid="text-section-jouw-kosten">Jouw kosten (niet-verzekerd)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Voor klachten die niet in aanmerking komen voor vergoeding via de basisverzekering (zoals burn-out coaching, relatievragen of persoonlijke groei) geldt een particulier tarief.
            </p>
            <div className="bg-white rounded-[2rem] border border-border/50 shadow-sm overflow-hidden mb-6">
              <table className="w-full" data-testid="table-tarieven">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left px-6 py-4 font-bold text-foreground uppercase tracking-wide text-sm">Sessie</th>
                    <th className="text-left px-6 py-4 font-bold text-foreground uppercase tracking-wide text-sm">Tarief</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-secondary/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">Individuele Sessie (45 min)</td>
                    <td className="px-6 py-4 text-primary font-serif text-xl">€135</td>
                  </tr>
                  <tr className="last:border-b-0 hover:bg-secondary/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">Relatie Sessie (75 min)</td>
                    <td className="px-6 py-4 text-primary font-serif text-xl">€195</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wachttijd: maximaal <strong>3 weken</strong>. Geen wachtlijst voor particuliere trajecten.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full gap-2" data-testid="button-whatsapp-kosten">
                <MessageCircle size={18} />
                Vragen? WhatsApp ons
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] border bg-card/50 glass-card text-center"
          >
            <h3 className="text-2xl font-serif mb-4" data-testid="text-section-aanmelden">Direct aanmelden</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kies een van de onderstaande platforms om je officieel aan te melden voor een traject bij mij.
            </p>
            <div className="flex gap-5 justify-center flex-wrap">
              <a href="https://fundament-partners.nl" target="_blank" rel="noopener noreferrer" data-testid="button-aanmelden-fundament">
                <Button className="rounded-lg gap-2 bg-[#4A6741] hover:bg-[#3d5636] text-white min-w-[250px] py-6 text-base font-bold">
                  Meld je aan via Fundament Partners
                </Button>
              </a>
              <a href="https://www.psyvisie.nl" target="_blank" rel="noopener noreferrer" data-testid="button-aanmelden-psyvisie">
                <Button className="rounded-lg gap-2 bg-[#5D7B8A] hover:bg-[#4e6975] text-white min-w-[250px] py-6 text-base font-bold">
                  Meld je aan via Psyvisie
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-5">
              * Vergeet niet bij je aanmelding te vermelden dat je specifiek naar mijn begeleiding vraagt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-secondary/10 border border-border/50 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Aangesloten bij <strong>Fundament Partners GGZ</strong> & <strong>Psyvisie</strong>
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Vragen over kosten of vergoedingen?{" "}
              <Link href="/contact" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors" data-testid="link-contact-footer">
                Neem contact op
              </Link>
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
