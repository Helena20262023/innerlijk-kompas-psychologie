import { motion } from "framer-motion";
import { Clock, Globe, CheckCircle2, Star, Quote } from "lucide-react";
import cherryBlossomImg from "@/assets/images/cherry-blossom-dark.png";

export default function Home() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent backdrop-blur-[1px]"></div>
        </div>

        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 blob-shape z-0 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 blob-shape z-0 blur-3xl" style={{ animationDelay: '-4s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl font-serif text-foreground leading-[1.1] mb-4 tracking-tight">
                Innerlijk Kompas Psychologie
              </h1>
              <p className="text-xl md:text-2xl font-sans text-primary/80 mb-6 font-medium">
                Psychologische online behandeling
              </p>
              
              <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Iedereen verdient een stevig fundament om op terug te vallen. Of je nu kampt met trauma, somberheid, aanhoudende stress of onverwerkte rouwgevoelens: Innerlijk Kompas Psychologie biedt de professionele begeleiding die nodig is om jouw koers weer helder te krijgen. Persoonlijk, toegankelijk en volledig online. Zodat je vanuit je eigen vertrouwde omgeving kunt werken aan herstel en kunt ontdekken hoe je weer vanuit eigen kracht kunt bewegen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-white py-12 border-b border-border/50 relative z-20 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/20 transition-colors duration-300">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground group-hover:text-secondary transition-colors">Snel starten</h3>
                <p className="text-sm text-muted-foreground">Start jouw traject binnen een week online.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Wereldwijd hulp</h3>
                <p className="text-sm text-muted-foreground">Specialistische zorg voor jou, waar je ook woont.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">Evidence Based</h3>
                <p className="text-sm text-muted-foreground">Effectieve CGT & EMDR via jouw scherm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction/Bio Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif text-foreground mb-6">Online therapie: flexibel, veilig en persoonlijk.</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Als online psycholoog help ik je graag met hoogwaardige zorg, zonder dat je de deur uit hoeft. Of je nu in Nederland woont of als expat in het buitenland verblijft, je krijgt de vertrouwde hulp in je eigen taal.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Bij Innerlijk Kompas combineer ik wetenschappelijke methoden met de toegankelijkheid van online zorg. Geen reistijd, geen wachtlijsten, wel de diepgang die jij nodig hebt met een veilige video-verbinding (privacy gewaarborgd).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ervaringen Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 italic">Ervaringen</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wat anderen zeggen over hun traject bij Innerlijk Kompas.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Anoniem", text: "Sarah heeft me enorm geholpen bij mijn burn-out. Haar aanpak is warm en professioneel.", rating: 5 },
              { name: "M. van Dijk", text: "De online EMDR sessies waren een doorbraak voor mijn traumaverwerking. Heel dankbaar.", rating: 5 },
              { name: "Expats in NL", text: "Fijn om in mijn eigen taal over complexe gevoelens te kunnen praten. Een aanrader voor iedere expat.", rating: 5 },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border bg-white relative"
                data-testid={`card-review-${i}`}
              >
                <Quote className="absolute top-6 right-8 text-primary/10" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base italic mb-4 text-foreground/80 leading-relaxed">"{r.text}"</p>
                <p className="font-bold text-sm text-foreground">— {r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
