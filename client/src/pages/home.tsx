import { useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Globe, CheckCircle2 } from "lucide-react";
import cherryBlossomImg from "@/assets/images/cherry-blossom-dark.png";

export default function Home() {
  useEffect(() => {
    document.title = "Innerlijk Kompas Psychologie | Online Psycholoog | CGT & EMDR";
  }, []);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={cherryBlossomImg} 
            alt="Japanse Bloesem - Rustige omgeving voor online therapie" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.15] mb-5 tracking-tight">
                Innerlijk Kompas Psychologie
              </h1>
              <div className="w-16 h-[2px] bg-primary/40 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 font-light tracking-wide">
                Psychologische online behandeling
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <p className="text-base md:text-lg text-foreground/75 leading-[1.8] max-w-2xl mx-auto">
                Iedereen verdient een stevig fundament om op terug te vallen. Of je nu kampt met trauma, somberheid, aanhoudende stress of onverwerkte rouwgevoelens, Innerlijk Kompas Psychologie biedt de professionele begeleiding die nodig is om jouw koers weer helder te krijgen. Persoonlijk, toegankelijk en volledig online, zodat je vanuit je eigen vertrouwde omgeving kunt werken aan herstel. Binnen de praktijk worden kortdurende, klachtgerichte behandeltrajecten aangeboden in de Basis GGZ (BGGZ). De gemiddelde duur van een traject bedraagt maximaal 10 tot 15 sessies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="bg-white py-14 border-b border-border/30 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-3">
                <Clock size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">Snel starten</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Start jouw traject binnen een week, volledig online.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                <Globe size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">Wereldwijd bereikbaar</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Specialistische zorg in het Nederlands, waar je ook woont.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">Evidence-based</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Bewezen effectieve methoden zoals CGT en EMDR.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online therapie */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-foreground mb-3">Online therapie</h2>
              <p className="text-sm uppercase tracking-widest text-primary/60 mb-8">Flexibel · Veilig · Persoonlijk</p>
              <p className="text-base text-foreground/75 leading-[1.85] mb-5">
                Als online psycholoog bied ik hoogwaardige zorg, zonder dat je de deur uit hoeft. Of je nu in Nederland woont of als expat in het buitenland verblijft, je krijgt vertrouwde hulp in je eigen taal.
              </p>
              <p className="text-base text-foreground/75 leading-[1.85]">
                Bij Innerlijk Kompas combineer ik wetenschappelijke methoden met de toegankelijkheid van online zorg. Geen reistijd, geen wachtlijsten, wel de diepgang die jij nodig hebt via een veilige, privacybeschermde video-verbinding.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
