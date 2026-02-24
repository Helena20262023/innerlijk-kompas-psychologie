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
                  Als voormalig expat weet ik uit eerste hand hoe groot de druk kan zijn bij het aanpassen aan een nieuwe cultuur. Mijn therapeutische stijl is direct maar compassievol, waarbij ik gebruik maak van Cognitieve Gedragstherapie (CGT) en EMDR om de kernoorzaken van klachten aan te pakken.
                </p>
                <p>
                  Mijn doel is niet alleen symptoombestrijding, maar je helpen een veerkrachtig en betekenisvol leven op te bouwen dat in lijn is met je eigen innerlijke kompas.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">BIG-geregistreerd</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">EMDR Practitioner</span>
                <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">Vloeiend in EN/NL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
