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
              <h1 className="text-5xl font-serif text-foreground mb-6">About Innerlijk Kompas</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe that therapy should be accessible, effective, and free from judgment. Our approach combines scientific rigor with genuine human warmth.
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
              <img src={therapistImg} alt="Founder" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-foreground mb-6">Dr. Sarah van der Meer</h2>
              <p className="text-lg text-primary font-medium mb-6 uppercase tracking-wider text-sm">Lead Clinical Psychologist & Founder</p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 12 years of clinical experience across the Netherlands and the UK, I founded Innerlijk Kompas to create a space where both locals and internationals feel truly understood.
                </p>
                <p>
                  As an expat myself at one point, I know firsthand the unique stress of adapting to a new culture. My therapeutic style is direct but compassionate, utilizing Cognitive Behavioral Therapy (CBT) and EMDR to address the root causes of distress.
                </p>
                <p>
                  My goal is not just symptom reduction, but helping you build a resilient, meaningful life aligned with your own inner compass.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">BIG-registered</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">EMDR Practitioner</span>
                <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">Fluent in EN/NL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
