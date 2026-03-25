import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import compassBgImg from "@/assets/images/kompas-dome.png";

const behandelmethodieken = [
  { slug: "cgt", title: "CGT", desc: "Cognitieve gedragstherapie richt zich op gedachten, gevoelens en gedrag." },
  { slug: "mindfulness", title: "Mindfulness", desc: "Terugkeren naar het huidige moment en emoties leren observeren zonder oordeel." },
  { slug: "sft", title: "SFT", desc: "Diepgewortelde patronen uit je jeugd zichtbaar maken en werken aan gezondere keuzes." },
  { slug: "oplossingsgerichte", title: "Oplossingsgerichte therapie", desc: "Niet het probleem, maar de oplossing staat centraal. Praktisch en toekomstgericht." },
  { slug: "inzichtgevende", title: "Inzichtgevende therapie", desc: "Begrijpen van de diepere oorzaken achter je klachten en terugkerende patronen." },
];

const traumamethodieken = [
  { slug: "emdr", title: "EMDR", desc: "Schokkende herinneringen herverwerken door het werkgeheugen te belasten." },
  { slug: "ie", title: "Imaginaire Exposure", desc: "De herinnering opzoeken in een veilige setting, zodat de spanning structureel afneemt." },
  { slug: "ir", title: "Imaginaire Rescripting", desc: "In verbeelding ingrijpen in een nare herinnering om jezelf te geven wat je nodig had." },
  { slug: "net", title: "Narratieve Exposure Therapie", desc: "Losse pijnlijke herinneringen omvormen tot een samenhangend levensverhaal." },
];

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

  return (
    <div className="pt-20">
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
        <div
          className="absolute right-[-5%] top-[-10%] w-[500px] h-[500px] opacity-[0.18] pointer-events-none rotate-[-15deg]"
          style={{
            backgroundImage: `url(${compassBgImg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: "sepia(0.6) saturate(1.2) contrast(1.1)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Mijn Werkwijze</h1>
            <p className="text-lg text-foreground/80 leading-relaxed">Samen kijken we welke methode het beste bij jou en jouw hulpvraag past.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url(${compassBgImg})`,
            backgroundSize: "800px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "sepia(0.6) saturate(1.2) contrast(1.1)",
            mixBlendMode: "multiply",
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
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">Hoe we te werk gaan</h2>

              <p>
                Hulp zoeken is een moedige stap, maar ik weet dat de drempel soms hoog kan aanvoelen. Spanning of twijfel bij de start is heel normaal. Juist daarom staat een veilige en vertrouwde sfeer bij mij voorop. Het grote voordeel van onze online behandelingen is dat je deze gesprekken voert vanuit je eigen omgeving, een plek waar jij je volledig op je gemak voelt.
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

          <div className="max-w-4xl mx-auto space-y-24">
            <motion.div
              id="individual"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-32"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Individuele online behandeling</h2>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full overflow-hidden rounded-[2rem] shadow-md"
            >
              <img
                src="/therapy-room-new.png"
                alt="Behandelkamer Innerlijk Kompas Psychologie"
                className="w-full h-72 md:h-96 object-cover"
              />
            </motion.div>

            <motion.div
              id="behandelmethodieken"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-32"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Behandelmethodieken</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Bij Innerlijk Kompas Psychologie wordt er met wetenschappelijk onderbouwde methoden gewerkt (evidence-based).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {behandelmethodieken.map((m, i) => (
                  <motion.div
                    key={m.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link href={`/werkwijze/${m.slug}`}>
                      <div
                        className="bg-white rounded-2xl border border-border/50 shadow-sm p-6 h-full flex flex-col justify-between hover:shadow-lg hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 cursor-pointer"
                        data-testid={`card-methodiek-${m.slug}`}
                      >
                        <div>
                          <h3 className="text-xl font-serif text-foreground mb-3">{m.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.desc}</p>
                        </div>
                        <span className="inline-flex items-center text-sm font-semibold text-primary gap-1">
                          Lees meer <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="traumabehandeling"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-32"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Specialistische traumabehandeling</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Trauma vraagt om een specifieke, zorgvuldige benadering. Wanneer schokkende gebeurtenissen uit het verleden een grote impact blijven hebben op je huidige leven, bijvoorbeeld in de vorm van PTSS, herbelevingen of emotionele blokkades, kunnen er gerichte traumamethodieken in.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Deze methoden zijn erop gericht de emotionele lading van nare herinneringen te verminderen, zodat ze een plek kunnen krijgen in je geschiedenis zonder je heden te beheersen. Binnen Innerlijk Kompas Psychologie wordt er gebruik gemaakt van de volgende specialistische methodieken:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {traumamethodieken.map((m, i) => (
                  <motion.div
                    key={m.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link href={`/werkwijze/${m.slug}`}>
                      <div
                        className="bg-white rounded-2xl border border-border/50 shadow-sm p-6 h-full flex flex-col justify-between hover:shadow-lg hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 cursor-pointer"
                        data-testid={`card-trauma-${m.slug}`}
                      >
                        <div>
                          <h3 className="text-xl font-serif text-foreground mb-3">{m.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.desc}</p>
                        </div>
                        <span className="inline-flex items-center text-sm font-semibold text-primary gap-1">
                          Lees meer <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="bg-secondary/10 p-8 rounded-[2rem] border border-border/50">
                <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Welke methode is passend?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Er zijn veel verschillende manieren om aan herstel te werken en de keuze daarin maak je niet alleen. Samen kijken we naar wat er speelt: de aard van je klachten, je persoonlijke geschiedenis en wat in het verleden al helpend is geweest of juist niet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bij Innerlijk Kompas Psychologie werken we niet met een standaardaanpak. Na de intake bespreken we welke methode, of combinatie van methoden, het beste aansluit bij jouw situatie. Zo ontstaat er een route die écht bij je past.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
