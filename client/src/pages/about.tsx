import { motion } from "framer-motion";
import therapistImg from "@/assets/images/therapist.jpg";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-serif text-foreground mb-6">Over Innerlijk Kompas</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wij geloven dat therapie toegankelijk, effectief en vrij van oordeel moet zijn. Onze aanpak combineert wetenschappelijke nauwkeurigheid met oprechte menselijke warmte.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img src={therapistImg} alt="Oprichter" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-foreground mb-6">Dr. Sarah van der Meer</h2>
              <p className="text-lg text-primary font-medium mb-6 uppercase tracking-wider text-sm">GZ-Psycholoog & Oprichter</p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Met meer dan 12 jaar klinische ervaring in Nederland en het VK, heb ik Innerlijk Kompas opgericht om een plek te creëren waar zowel inwoners als internationals zich echt begrepen voelen.
                </p>
                <p>
                  Als <strong>VU Amsterdam alumna</strong> en BIG-geregistreerd psycholoog combineer ik academische expertise met een direct maar compassievolle stijl. Ik maak gebruik van Cognitieve Gedragstherapie (CGT) en EMDR om de kernoorzaken van klachten aan te pakken.
                </p>
                <p>
                  Mijn doel is niet alleen symptoombestrijding, maar je helpen een veerkrachtig en betekenisvol leven op te bouwen dat in lijn is met je eigen innerlijke kompas, waar ter wereld je ook bent.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20 shadow-sm">BIG-geregistreerd</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 shadow-sm">VU Amsterdam Alumna</span>
                <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium border border-accent/30 shadow-sm">EMDR Practitioner</span>
                <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border shadow-sm">Vloeiend in EN/NL</span>
              </div>

              <div className="mt-12 p-6 glass-card rounded-2xl border-primary/10">
                <p className="italic text-foreground/80">"Online therapie biedt de flexibiliteit die moderne professionals nodig hebben, zonder in te leveren op de kwaliteit van de verbinding of de effectiviteit van de behandeling."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
