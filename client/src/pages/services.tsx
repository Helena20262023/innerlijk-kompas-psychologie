import { motion } from "framer-motion";
import therapyRoomImg from "@/assets/images/werkwijze-kamer.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "individual",
      title: "Individuele Online Behandeling",
      description: "Gepersonaliseerde één-op-één sessies afgestemd op jouw specifieke doelen. We maken gebruik van evidence-based behandelingen zoals Cognitieve Gedragstherapie (CGT), EMDR voor trauma en Schematherapie.",
      areas: ["Angst & Paniek", "Depressie & Somberheid", "Burn-out & Stress", "Trauma & PTSS", "Zelfbeeld problematiek"],
    },
    {
      id: "couples",
      title: "Online Relatietherapie",
      description: "Counseling voor koppels die hun communicatie willen verbeteren, vertrouwen willen herstellen of samen door moeilijke levensfasen willen navigeren. Gericht op het herstellen van verbinding en emotionele veiligheid.",
      areas: ["Communicatieproblemen", "Intimiteitsvraagstukken", "Cross-culturele relaties", "Conflictbeheersing", "EFT-methode"],
    },
    {
      id: "trauma",
      title: "Traumabehandeling",
      description: "Samen werken we aan het verwerken van schokkende gebeurtenissen die jouw leven nu nog beïnvloeden. Ik maak gebruik van krachtige methoden zoals EMDR, Imaginaire Exposure (IE) en Narrative Exposure Therapy (NET).",
      areas: ["EMDR", "Imaginaire Exposure", "NET", "Vroegkinderlijk trauma", "PTSS"],
    },
    {
      id: "methodieken",
      title: "Specialistische Methodieken",
      description: "Ik integreer verschillende therapeutische kaders om de zorg te bieden die het beste bij jou past, waaronder CGT, Schematherapie en ACT.",
      areas: ["CGT", "Schematherapie", "ACT", "Mindfulness"],
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight">Mijn Werkwijze</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Ik bied evidence-based behandelingen in een warme omgeving. Samen kijken we welke methode het beste bij jou en jouw hulpvraag past.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Services List */}
            <div className="lg:col-span-7 space-y-24">
              {services.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-32"
                >
                  <h2 className="text-3xl font-serif text-foreground mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-white p-8 rounded-[2rem] border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
                    <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm group-hover:text-primary transition-colors">Focusgebieden</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.areas.map((area, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <CheckCircle2 size={18} className="text-primary mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar / Info Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-[4/3]">
                  <img src={therapyRoomImg} alt="Online therapie kamer voor EMDR, ACT en Schematherapie" className="w-full h-full object-cover" />
                </div>
                
                <div className="bg-primary text-primary-foreground p-8 rounded-[2rem]">
                  <h3 className="text-2xl font-serif mb-4">Tarieven & Vergoeding</h3>
                  <p className="mb-6 opacity-90 leading-relaxed">
                    Als particuliere praktijk worden sessies doorgaans zelf betaald. Echter, afhankelijk van je Nederlandse zorgverzekering (restitutiepolis), kom je mogelijk in aanmerking voor gedeeltelijke of volledige vergoeding.
                  </p>
                  <ul className="space-y-3 mb-8 opacity-90">
                    <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                      <span>Individuele Sessie (45m)</span>
                      <strong>€135</strong>
                    </li>
                    <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                      <span>Relatie Sessie (75m)</span>
                      <strong>€195</strong>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-foreground text-lg rounded-full">
                    <Link href="/contact">Plan een intake</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
