import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Globe } from "lucide-react";
import heroImg from "@/assets/images/hero-nature.jpg";
import therapistImg from "@/assets/images/therapist.jpg";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Rustige natuur" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Abstract Blob */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 blob-shape z-0 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 blob-shape z-0 blur-3xl" style={{ animationDelay: '-4s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm mb-6 text-sm font-medium text-primary">
                <CheckCircle2 size={16} />
                <span>Momenteel nieuwe cliënten geaccepteerd — Geen wachtlijst</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6">
                Vind je weg terug naar <span className="text-primary italic">balans</span>.
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl">
                Evidence-based psychologiepraktijk in Amsterdam met empathische therapie voor inwoners en expats. Beschikbaar in het Engels en Nederlands, zowel online als op locatie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-foreground text-lg px-8 py-6 shadow-lg shadow-accent/20">
                  <Link href="/contact">Plan een intake</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-white/50 backdrop-blur-sm border-white/50 hover:bg-white/80 text-lg px-8 py-6">
                  <Link href="/services">Bekijk diensten</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-white py-12 border-b border-border/50 relative z-20 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Geen wachtlijst</h3>
                <p className="text-sm text-muted-foreground">Start je traject binnen een week.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Expat Specialist</h3>
                <p className="text-sm text-muted-foreground">Therapie in Engels & Nederlands.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Evidence Based</h3>
                <p className="text-sm text-muted-foreground">CGT, EMDR en Schematherapie.</p>
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
                  alt="Therapeut" 
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
              <h2 className="text-4xl font-serif text-foreground mb-6">Veilig, inclusief en afgestemd op jou.</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Verhuizen naar of wonen in een dynamische omgeving als Amsterdam kan overweldigend zijn. Of je nu kampt met angst, burn-out, relatieproblemen of cultuuraanpassing, je hoeft het niet alleen te doen.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Bij Innerlijk Kompas bieden we een warme, no-nonsense aanpak. We combineren wetenschappelijk onderbouwde technieken met oprechte menselijke verbinding om je te helpen je gedachten te ontwarren en weer vooruit te komen.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Gepersonaliseerde behandelplannen', 'Queer-vriendelijke & inclusieve ruimte', 'Vergoeding deels mogelijk'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 size={20} className="text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0 text-lg group">
                <Link href="/about">
                  Ontmoet het team 
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-4">Hoe we kunnen helpen</h2>
            <p className="text-lg text-muted-foreground">Wij bieden gespecialiseerde psychologische ondersteuning afgestemd op jouw unieke situatie en behoeften.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Individuele Therapie", desc: "Eén-op-één sessies gericht op angst, depressie, burn-out en trauma.", icon: "🌱", color: "bg-primary/5 border-primary/20" },
              { title: "Expat Ondersteuning", desc: "Navigeer cultuuraanpassing, heimwee en carrière-overgangen in Nederland.", icon: "🌍", color: "bg-accent/5 border-accent/20" },
              { title: "Online Therapie", desc: "Flexibele videosessies vanuit je eigen vertrouwde omgeving, wereldwijd beschikbaar.", icon: "💻", color: "bg-secondary/5 border-secondary/20" }
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
                  <a className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors group">
                    Lees meer <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 max-w-3xl mx-auto leading-tight">Klaar om de eerste stap te zetten naar mentale rust?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Plan een gratis kennismakingsgesprek van 15 minuten. Geen verplichtingen, geen wachtlijst.</p>
          <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-foreground text-lg px-10 py-6 shadow-xl">
            <Link href="/contact">Plan intake</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
