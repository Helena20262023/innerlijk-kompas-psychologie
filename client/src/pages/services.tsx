import { motion } from "framer-motion";
import therapyRoomImg from "@/assets/images/werkwijze-kamer-creme.png";
import compassBgImg from "@/assets/images/kompas-dome.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const individualFocusAreas = [
    { focus: "Angst & Paniek", description: "Overmatige bezorgdheid, sociale angst of paniekaanvallen die je bewegingsvrijheid beperken." },
    { focus: "Somberheid", description: "Gevoelens van neerslachtigheid, verlies van plezier of aanhoudende depressieve klachten." },
    { focus: "Trauma & PTSS", description: "Klachten als gevolg van schokkende gebeurtenissen, zoals herbelevingen, vermijding en verhoogde waakzaamheid." },
    { focus: "Emotieregulatie", description: "Moeite met het hanteren van intense emoties, waardoor je je snel overspoeld voelt of juist blokkeert." },
    { focus: "Onverwerkte rouw", description: "Vastlopen in het proces na het verlies van een dierbare of een andere ingrijpende levensgebeurtenis." },
    { focus: "Stress & Burn-out", description: "Chronische overbelasting, spanningsklachten en het gevoel de grip op je dagelijkse taken te verliezen." },
    { focus: "Zelfbeeld", description: "Werken aan hardnekkige onzekerheid en negatieve overtuigingen over je eigenwaarde." },
  ];

  const services = [
    {
      id: "couples",
      title: "Online Relatietherapie",
      description: "Counseling voor koppels die hun communicatie willen verbeteren, vertrouwen willen herstellen of samen door moeilijke levensfasen willen navigeren. Gericht op het herstellen van verbinding en emotionele veiligheid.",
      areas: ["Communicatieproblemen", "Intimiteitsvraagstukken", "Cross-culturele relaties", "Conflictbeheersing", "EFT-methode"],
    },
    {
      id: "trauma",
      title: "Traumabehandeling",
      description: "Samen werken we aan het verwerken van schokkende gebeurtenissen die jouw leven nu nog beïnvloeden. Ik maak gebruik van krachtige methoden zoals EMDR, Imaginaire Exposure (IE) en Narrative Exposure Therapy (NET).",
      areas: ["EMDR", "Imaginaire Exposure", "NET", "Vroegkinderlijk trauma", "PTSS"],
    },
    {
      id: "methodieken",
      title: "Specialistische Methodieken",
      description: "Ik integreer verschillende therapeutische kaders om de zorg te bieden die het beste bij jou past, waaronder CGT, Schematherapie en ACT.",
      areas: ["CGT", "Schematherapie", "ACT", "Mindfulness"],
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
        {/* Decorative Compass for Header */}
        <div 
          className="absolute right-[-5%] top-[-10%] w-[500px] h-[500px] opacity-[0.18] pointer-events-none rotate-[-15deg]"
          style={{ 
            backgroundImage: `url(${compassBgImg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'sepia(0.6) saturate(1.2) contrast(1.1)',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight">Mijn Werkwijze</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Ik bied evidence-based behandelingen in een warme omgeving. Samen kijken we welke methode het beste bij jou en jouw hulpvraag past.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Full Section Background Compass */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ 
            backgroundImage: `url(${compassBgImg})`,
            backgroundSize: '800px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'sepia(0.6) saturate(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground italic mb-8">Hoe we te werk gaan</h2>
              
              <p>
                Hulp zoeken is een moedige stap, maar ik weet dat de drempel soms hoog kan aanvoelen. Spanning of twijfel bij de start is heel normaal. Juist daarom staat een veilige en vertrouwde sfeer bij mij voorop. Het grote voordeel van onze online behandelingen is dat je deze gesprekken voert vanuit je eigen omgeving—een plek waar jij je volledig op je gemak voelt.
              </p>

              <p>
                We beginnen altijd met een intakegesprek. Hierin nemen we de tijd voor jouw geschiedenis en formuleren we heldere doelen. Ik geloof niet in een eenzijdige aanpak; we beslissen samen welke behandelmethode het beste aansluit bij jouw specifieke klachten en persoonlijkheid. Gedurende het traject monitoren we regelmatig of we nog op de goede weg zitten of dat we de koers iets moeten bijstellen.
              </p>

              <p>
                In de sessies kijken we naar wat er nu speelt. Soms ligt de oplossing in het aanpakken van actuele situaties en het aanleren van nieuwe vaardigheden. In andere gevallen is het waardevol om verbanden te leggen met het verleden, om te begrijpen waar bepaalde blokkades vandaan komen.
              </p>

              <p>
                Echte verandering vindt niet alleen plaats tijdens ons gesprek, maar juist in de tijd daartussenin. Daarom werken we met praktische oefeningen en tools waar je thuis direct mee aan de slag kunt. Door in je eigen omgeving te oefenen met nieuwe inzichten, leer je weer te vertrouwen op je eigen innerlijke kompas. Zo varen we stap voor stap toe naar het moment waarop je met zelfvertrouwen je eigen koers weer kunt varen.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Services List */}
            <div className="lg:col-span-7 space-y-24">
              <motion.div
                id="individual"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <h2 className="text-3xl font-serif text-foreground mb-6">Individuele online behandeling</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Binnen de individuele behandeling richten we ons op een breed scala aan psychische klachten. We kijken niet alleen naar de symptomen, maar ook naar de onderliggende patronen die je belemmeren in je dagelijks leven.
                </p>

                <div className="bg-white rounded-[2rem] border border-border/50 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <table className="w-full" data-testid="table-focus-areas">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left px-6 py-4 font-bold text-foreground uppercase tracking-wide text-sm">Focusgebieden</th>
                        <th className="text-left px-6 py-4 font-bold text-foreground uppercase tracking-wide text-sm">Omschrijving</th>
                      </tr>
                    </thead>
                    <tbody>
                      {individualFocusAreas.map((area, i) => (
                        <tr key={i} className="border-b border-border/30 last:border-b-0 hover:bg-secondary/5 transition-colors" data-testid={`row-focus-area-${i}`}>
                          <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap align-top">{area.focus}</td>
                          <td className="px-6 py-4 text-muted-foreground leading-relaxed">{area.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                id="behandelmethodieken"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <h2 className="text-3xl font-serif text-foreground mb-6">Behandelmethodieken</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Bij Innerlijk Kompas Psychologie wordt er met wetenschappelijk onderbouwde methoden gewerkt (evidence-based).
                </p>

                <div className="bg-white rounded-[2rem] border border-border/50 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 mb-12">
                  <table className="w-full" data-testid="table-methodieken">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left px-6 py-4 font-bold text-foreground uppercase tracking-wide text-sm">Methodiek</th>
                        <th className="text-left px-6 py-4 font-bold text-foreground uppercase tracking-wide text-sm">Omschrijving</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/30 hover:bg-secondary/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap align-top">CGT</td>
                        <td className="px-6 py-4 text-muted-foreground leading-relaxed">Gedachten, gevoelens en gedrag onderzoeken en bijsturen voor directe verlichting bij angst- en stemmingsklachten.</td>
                      </tr>
                      <tr className="border-b border-border/30 hover:bg-secondary/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap align-top">Mindfulness</td>
                        <td className="px-6 py-4 text-muted-foreground leading-relaxed">Terugkeren naar het huidige moment en emoties leren observeren zonder oordeel — krachtig tegen stress en piekeren.</td>
                      </tr>
                      <tr className="last:border-b-0 hover:bg-secondary/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap align-top">SFT</td>
                        <td className="px-6 py-4 text-muted-foreground leading-relaxed">Diepgewortelde patronen uit je jeugd zichtbaar maken en werken aan gezondere keuzes in relaties en voor jezelf.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-serif text-foreground mb-4">Cognitieve Gedragstherapie (CGT)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      CGT gaat ervan uit dat gedachten, gevoelens en gedrag onlosmakelijk met elkaar verbonden zijn. Vaak hebben we onbewuste, negatieve gedachten over onszelf of situaties die ons angstig of somber maken.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Samen onderzoeken we of deze gedachten wel kloppen met de realiteit. Door kritisch naar je overtuigingen te kijken en stapsgewijs met nieuw gedrag te oefenen, leer je anders tegen situaties aan te kijken. Dit geeft direct verlichting bij angst- en stemmingsklachten.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-foreground mb-4">Mindfulness</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In onze drukke maatschappij leven we vaak op de 'automatische piloot' of zijn we in ons hoofd constant bezig met het verleden of de toekomst. Mindfulness helpt je om terug te keren naar het huidige moment.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We gebruiken specifieke aandachtsoefeningen om je bewustzijn te vergroten. Je leert om emoties en gedachten te observeren zonder er direct over te oordelen of erdoor meegesleurd te worden. Dit is een krachtig middel tegen stress, piekeren en emotieregulatieproblemen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-foreground mb-4">Schemagerichte therapie (SFT)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Soms merk je dat je steeds in dezelfde valkuilen stapt, ongeacht hoe hard je je best doet. Dit komt vaak door 'schema's': diepgewortelde overtuigingen over jezelf en anderen die in je jeugd zijn ontstaan (bijvoorbeeld: "Ik ben niet goed genoeg" of "Mensen laten me altijd in de steek").
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We maken deze patronen zichtbaar en begrijpelijk. We werken aan het 'gezonde volwassene'-deel in jou, zodat je minder vanuit oude pijn reageert en gezondere keuzes kunt maken in relaties en voor jezelf.
                    </p>
                  </div>
                </div>
              </motion.div>

              {services.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-32"
                >
                  <h2 className="text-3xl font-serif text-foreground mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-white p-8 rounded-[2rem] border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
                    <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm group-hover:text-primary transition-colors">Focusgebieden</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.areas.map((area, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <CheckCircle2 size={18} className="text-primary mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar / Info Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-[4/3]">
                  <img src={therapyRoomImg} alt="Online therapie kamer voor EMDR, ACT en Schematherapie" className="w-full h-full object-cover" />
                </div>
                
                <div className="bg-primary text-primary-foreground p-8 rounded-[2rem]">
                  <h3 className="text-2xl font-serif mb-4">Tarieven & Vergoeding</h3>
                  <p className="mb-6 opacity-90 leading-relaxed">
                    Als particuliere praktijk worden sessies doorgaans zelf betaald. Echter, afhankelijk van je Nederlandse zorgverzekering (restitutiepolis), kom je mogelijk in aanmerking voor gedeeltelijke of volledige vergoeding.
                  </p>
                  <ul className="space-y-3 mb-8 opacity-90">
                    <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                      <span>Individuele Sessie (45m)</span>
                      <strong>€135</strong>
                    </li>
                    <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                      <span>Relatie Sessie (75m)</span>
                      <strong>€195</strong>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-foreground text-lg rounded-full">
                      Plan een intake
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
