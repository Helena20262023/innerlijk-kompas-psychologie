import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Tarieven() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 italic">Tarieven & Kosten</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transparantie over de kosten van jouw traject, zodat je precies weet waar je aan toe bent.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[2rem] border bg-card/50 glass-card">
            <h3 className="text-2xl font-serif mb-4 italic">Individuele Sessie</h3>
            <p className="text-4xl font-serif mb-6 text-primary">€95 <span className="text-lg text-muted-foreground font-sans">/ 45 min</span></p>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li>• Intakegesprek (vrijblijvend)</li>
              <li>• Online video consult</li>
              <li>• Verslaglegging inbegrepen</li>
            </ul>
            <Button asChild className="w-full rounded-full"><Link href="/contact">Afspraak maken</Link></Button>
          </div>
          <div className="p-8 rounded-[2rem] border bg-card/50 glass-card border-primary/20">
            <h3 className="text-2xl font-serif mb-4 italic">Vergoedingen</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Veel van de behandelingen worden (deels) vergoed vanuit jouw aanvullende verzekering. Neem contact op met jouw verzekeraar voor de specifieke voorwaarden.
            </p>
            <div className="p-4 bg-muted/30 rounded-xl text-sm">
              <p><strong>Let op:</strong> Geen wachtlijst voor particuliere trajecten.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
