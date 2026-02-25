import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Behandelmethoden() {
  const methoden = [
    { title: "CGT (Cognitieve Gedragstherapie)", desc: "Focus op het veranderen van niet-helpende gedachten en gedragspatronen." },
    { title: "EMDR", desc: "Effectieve methode voor het verwerken van traumatische ervaringen." },
    { title: "ACT (Acceptance and Commitment Therapy)", desc: "Leren omgaan met moeilijke gedachten en gevoelens terwijl je investeert in wat voor jou waardevol is." },
    { title: "EFT (Emotionally Focused Therapy)", desc: "Gericht op emotionele verbinding en patronen binnen relaties." }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 italic">Behandelmethoden</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Evidence-based methoden die we inzetten om jouw persoonlijke groei te ondersteunen.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {methoden.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-[2rem] border bg-card/50 glass-card">
              <CheckCircle2 className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-serif mb-4">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
