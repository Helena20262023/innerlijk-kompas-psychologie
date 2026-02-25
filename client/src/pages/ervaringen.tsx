import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Ervaringen() {
  const reviews = [
    { name: "Anoniem", text: "Sarah heeft me enorm geholpen bij mijn burn-out. Haar aanpak is warm en professioneel.", rating: 5 },
    { name: "M. van Dijk", text: "De online EMDR sessies waren een doorbraak voor mijn traumaverwerking. Heel dankbaar.", rating: 5 },
    { name: "Expats in NL", text: "Fijn om in mijn eigen taal over complexe gevoelens te kunnen praten. Een aanrader voor iedere expat.", rating: 5 }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 italic">Ervaringen</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Wat anderen zeggen over hun traject bij Innerlijk Kompas.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-[2rem] border bg-card/50 glass-card relative">
              <Quote className="absolute top-6 right-8 text-primary/10" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
              </div>
              <p className="text-lg italic mb-6 text-foreground/80 leading-relaxed">"{r.text}"</p>
              <p className="font-bold text-foreground">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
