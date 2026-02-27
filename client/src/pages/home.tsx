import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Globe, ShieldCheck } from "lucide-react";
import cherryBlossomImg from "@/assets/images/cherry-blossom-dark.png";
import therapistImg from "@/assets/images/therapist.png";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={cherryBlossomImg} 
            alt="Japanse Bloesem - Rustige omgeving voor online therapie" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent backdrop-blur-[1px]"></div>
        </div>

        {/* Abstract Blob */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm mb-6 text-sm font-medium text-primary hover:bg-white/80 transition-colors cursor-default">
                <CheckCircle2 size={16} />
                <span>Online Psycholoog Nederland — Geen wachtlijst</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif text-foreground leading-[1.1] mb-4 tracking-tight">
                Innerlijk Kompas Psychologie
              </h1>
              <p className="text-xl md:text-2xl font-sans text-primary/80 mb-6 font-medium">
                Psychologische online behandeling
              </p>
              
              <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Iedereen verdient een stevig fundament om op terug te vallen. Of je nu kampt met trauma, somberheid, aanhoudende stress of onverwerkte rouwgevoelens: Innerlijk Kompas Psychologie biedt de professionele begeleiding die nodig is om jouw koers weer helder te krijgen. Persoonlijk, toegankelijk en volledig online. Zodat je vanuit je eigen vertrouwde omgeving kunt werken aan herstel en kunt ontdekken hoe je weer vanuit eigen kracht kunt bewegen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-foreground text-lg px-8 py-6 shadow-lg shadow-accent/20 transition-all hover:scale-105 active:scale-95">
                    Direct intake plannen
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="rounded-full bg-white/50 backdrop-blur-sm border-white/50 hover:bg-white/80 text-lg px-8 py-6 transition-all hover:border-primary/30">
                    Ontmoet Sarah
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-6 opacity-70">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <ShieldCheck size={20} className="text-secondary" />
                  BIG-Geregistreerd
                </div>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-primary">VU</div>
                  VU Amsterdam Alumna
                </div>
              </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10 shadow-2xl">
                <img 
                  src={therapistImg} 
                  alt="Online psycholoog expats nederland - Dr. Sarah van der Meer VU Amsterdam" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-6 bg-secondary/20 rounded-[3rem] -z-10 transform rotate-3"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif text-foreground mb-6">Online therapie: flexibel, veilig en persoonlijk.</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Als geregistreerd psycholoog help ik je graag met hoogwaardige zorg, zonder dat je de deur uit hoeft. Of je nu in Nederland woont of als expat in het buitenland verblijft, je krijgt de vertrouwde hulp in je eigen taal.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Bij Innerlijk Kompas combineer ik wetenschappelijke methoden met de toegankelijkheid van online zorg. Geen reistijd, geen wachtlijsten, wel de diepgang die jij nodig hebt.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Veilige video-verbinding (privacy gewaarborgd)', 'Gespecialiseerd in angst & burn-out bij vrouwen', 'Alumni van Vrije Universiteit Amsterdam'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 size={20} className="text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 text-lg group">
                  Meer over mijn expertise 
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-4">Gespecialiseerde Online Hulp</h2>
            <p className="text-lg text-muted-foreground">Expertise gericht op de uitdagingen van drukke professionals en Nederlanders in het buitenland.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Individuele Therapie", desc: "Online CGT sessies voor angst, somberheid en persoonlijke groei vanuit je eigen huis.", icon: "🌱", color: "bg-primary/5 border-primary/20" },
              { title: "Burn-out Coach Vrouw", desc: "Specifieke ondersteuning voor vrouwelijke professionals bij stress en burn-out klachten.", icon: "⚡", color: "bg-accent/5 border-accent/20" },
              { title: "Relatietherapie Online", desc: "Samen werken aan jullie verbinding via video-consult, waar jullie je ook bevinden.", icon: "🤝", color: "bg-secondary/5 border-secondary/20" }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-[2rem] border ${service.color} hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.desc}</p>
                <Link href="/services">
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors group cursor-pointer">
                    Diensten bekijken <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-muted text-foreground">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 max-w-3xl mx-auto leading-tight">Start vandaag nog met jouw traject, waar je ook bent.</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Vrijblijvend kennismakingsgesprek van 15 minuten. Geen reistijd, direct deskundige hulp voor jou.</p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 shadow-xl">
              Boek direct jouw intake
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
