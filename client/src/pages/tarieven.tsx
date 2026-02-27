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
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-white rounded-[2rem] border border-border/50 shadow-sm overflow-hidden">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2rem] border bg-card/50 glass-card">
              <h3 className="text-2xl font-serif mb-4 italic">Wat is inbegrepen</h3>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li>• Intakegesprek (vrijblijvend)</li>
                <li>• Online video consult</li>
                <li>• Verslaglegging inbegrepen</li>
              </ul>
              <Link href="/contact" className="w-full">
                <Button className="w-full rounded-full">
                  Afspraak maken
                </Button>
              </Link>
            </div>
            <div className="p-8 rounded-[2rem] border bg-card/50 glass-card border-primary/20">
              <h3 className="text-2xl font-serif mb-4 italic">Vergoedingen</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Als particuliere praktijk worden sessies doorgaans zelf betaald. Echter, afhankelijk van je Nederlandse zorgverzekering (restitutiepolis), kom je mogelijk in aanmerking voor gedeeltelijke of volledige vergoeding.
              </p>
              <div className="p-4 bg-muted/30 rounded-xl text-sm">
                <p><strong>Let op:</strong> Geen wachtlijst voor particuliere trajecten.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
