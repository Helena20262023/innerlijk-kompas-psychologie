import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="pt-20">
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center"
          >
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Bedankt voor je bericht!</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Ik neem zo snel mogelijk contact met je op.
            </p>
            <Link href="/">
              <span className="inline-block px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors cursor-pointer">
                Terug naar home
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
