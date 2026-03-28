import { useEffect } from "react";
import { motion } from "framer-motion";
import heleenImg from "@/assets/images/heleen-portrait.jpeg";

export default function About() {
  useEffect(() => {
    document.title = "Over mij | Helena | Innerlijk Kompas Psychologie";
  }, []);
  return (
    <div className="pt-20">
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Over mij</h1>
            </motion.div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 md:mb-24 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full rounded-[2rem] overflow-hidden shadow-xl md:sticky md:top-28"
            >
              <img
                src={heleenImg}
                alt="Helena, Psycholoog bij Innerlijk Kompas Psychologie"
                className="w-full max-h-72 md:max-h-none md:h-auto object-cover object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] md:text-base">
                <p>
                  Ieder mens bewandelt een uniek pad, maar soms kom je in een fase terecht waarin het leven niet meer vanzelf lijkt te gaan. Je voelt dat de balans zoek is, dat je vastloopt in terugkerende patronen of dat emoties simpelweg te zwaar worden om alleen te dragen. Op zulke momenten kan het helpend zijn om stil te staan, te vertragen en samen met een onafhankelijke professional te onderzoeken wat er werkelijk nodig is om weer richting te vinden.
                </p>
                <p>
                  Mijn naam is Helena en als psycholoog begeleid ik volwassenen die worstelen met uiteenlopende hulpvragen, zoals trauma, angst, burn-out of een negatief zelfbeeld. Na jarenlang brede ervaring te hebben opgedaan in diverse praktijken in Den Haag en Rotterdam, bied ik mijn expertise nu online aan. Wat mij drijft in dit vak is het gezamenlijk zoeken naar ruimte: ruimte om te voelen, te begrijpen en uiteindelijk weer te groeien. Ik geloof dat werkelijke verandering ontstaat wanneer je opnieuw in contact komt met jezelf en leert vertrouwen op je eigen kracht.
                </p>
                <p>
                  In mijn werkwijze combineer ik een warme, betrokken houding met wetenschappelijk onderbouwde methoden, altijd afgestemd op jouw persoonlijke verhaal. We bepalen samen het tempo en de richting, waarbij we niet alleen kijken naar het verminderen van klachten, maar vooral naar het versterken van je autonomie en zelfcompassie. Ik vind het belangrijk dat je weer gaat ervaren dat je veel meer bent dan de problemen waar je tegenaan loopt. We geven ruimte aan moeilijke ervaringen, maar kijken ook naar wat deze je hebben geleerd en hoe ze je gevormd hebben.
                </p>
                <p>
                  Mijn nieuwsgierigheid naar de wereld en wat mensen beweegt, stopt niet bij de grens van mijn praktijk. In mijn vrije tijd onderneem ik graag nieuwe dingen; of ik nu de diepte opzoek tijdens het duiken, nieuwe culturen ontdek op reis of mezelf verlies in een goed boek. Ik geniet volop van de mooie momenten met mijn familie en vrienden. Deze persoonlijke betrokkenheid en open blik neem ik mee in ons contact: ik ben een luisterend oor met oprechte aandacht voor wie jij bent, zodat je met meer innerlijke stevigheid en veerkracht de uitdagingen van het leven tegemoet kunt treden.
                </p>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">KVK nummer: 99588390</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
