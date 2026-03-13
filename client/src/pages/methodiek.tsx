import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import compassBgImg from "@/assets/images/kompas-dome.png";

const traumamethodieken = [
  { slug: "emdr", title: "EMDR", desc: "Schokkende herinneringen herverwerken door het werkgeheugen te belasten." },
  { slug: "ie", title: "Imaginaire Exposure", desc: "De herinnering opzoeken in een veilige setting, zodat de spanning structureel afneemt." },
  { slug: "ir", title: "Imaginaire Rescripting", desc: "In verbeelding ingrijpen in een nare herinnering om jezelf te geven wat je nodig had." },
  { slug: "net", title: "Narratieve Exposure Therapie", desc: "Losse pijnlijke herinneringen omvormen tot een samenhangend levensverhaal." },
];

const methodieken: Record<string, { title: string; content: string[] }> = {
  cgt: {
    title: "Cognitieve Gedragstherapie (CGT)",
    content: [
      "CGT gaat ervan uit dat gedachten, gevoelens en gedrag onlosmakelijk met elkaar verbonden zijn. Vaak hebben we onbewuste, negatieve gedachten over onszelf of situaties die ons angstig of somber maken.",
      "Samen onderzoeken we of deze gedachten wel kloppen met de realiteit. Door kritisch naar je overtuigingen te kijken en stapsgewijs met nieuw gedrag te oefenen, leer je anders tegen situaties aan te kijken. Dit geeft direct verlichting bij angst- en stemmingsklachten.",
    ],
  },
  mindfulness: {
    title: "Mindfulness",
    content: [
      "In onze drukke maatschappij leven we vaak op de 'automatische piloot' of zijn we in ons hoofd constant bezig met het verleden of de toekomst. Mindfulness helpt je om terug te keren naar het huidige moment.",
      "We gebruiken specifieke aandachtsoefeningen om je bewustzijn te vergroten. Je leert om emoties en gedachten te observeren zonder er direct over te oordelen of erdoor meegesleurd te worden. Dit is een krachtig middel tegen stress, piekeren en emotieregulatieproblemen.",
    ],
  },
  sft: {
    title: "Schemagerichte therapie (SFT)",
    content: [
      "Soms merk je dat je steeds in dezelfde valkuilen stapt, ongeacht hoe hard je je best doet. Dit komt vaak door 'schema's': diepgewortelde overtuigingen over jezelf en anderen die in je jeugd zijn ontstaan (bijvoorbeeld: \"Ik ben niet goed genoeg\" of \"Mensen laten me altijd in de steek\").",
      "We maken deze patronen zichtbaar en begrijpelijk. We werken aan het 'gezonde volwassene'-deel in jou, zodat je minder vanuit oude pijn reageert en gezondere keuzes kunt maken in relaties en voor jezelf.",
    ],
  },
  oplossingsgerichte: {
    title: "Oplossingsgerichte therapie",
    content: [
      "Bij oplossingsgerichte therapie staat niet het probleem centraal, maar de oplossing. In plaats van uitgebreid stil te staan bij wat er misgaat, richten we ons op wat al wél werkt en hoe je daar op kunt voortbouwen. Samen onderzoeken we jouw krachten, mogelijkheden en wat je al in huis hebt om verandering te bewerkstelligen.",
      "Deze vorm van therapie is praktisch en toekomstgericht: we werken met concrete doelen en kijken stap voor stap naar hoe jij je leven wilt vormgeven. Oplossingsgerichte therapie is vaak kortdurend en geschikt als je behoefte hebt aan een heldere richting en merkbare vooruitgang op relatief korte termijn.",
    ],
  },
  inzichtgevende: {
    title: "Inzichtgevende therapie",
    content: [
      "Inzichtgevende therapie richt zich op het begrijpen van de diepere oorzaken achter je klachten. Vaak hebben patronen in het heden hun wortels in eerdere ervaringen — in de opvoeding, belangrijke relaties of ingrijpende gebeurtenissen. Door hier samen naar te kijken, ontstaat er begrip voor waarom je reageert zoals je reageert en waarom bepaalde patronen zich blijven herhalen.",
      "Dit inzicht vormt de basis voor echte en duurzame verandering. Inzichtgevende therapie vraagt om bereidheid om naar binnen te kijken en is bij uitstek geschikt als je het gevoel hebt vast te lopen in terugkerende patronen die je zelf niet goed begrijpt.",
    ],
  },
  emdr: {
    title: "EMDR (Eye Movement Desensitization and Reprocessing)",
    content: [
      "EMDR is een wetenschappelijk bewezen en zeer effectieve therapievorm voor het verwerken van schokkende of pijnlijke gebeurtenissen die in het hier en nu nog steeds klachten geven.",
      "Terwijl je terugdenkt aan de gebeurtenis, wordt je werkgeheugen belast door een afleidende taak (zoals een bewegend object op je scherm). Hierdoor wordt de herinnering opnieuw opgeslagen, maar dan zonder de overweldigende emotionele lading. Na de behandeling worden deze herinneringen als aanzienlijk minder pijnlijk en belastend ervaren. Hoewel EMDR bekend staat als traumatherapie, is het breed toepasbaar. Het kan ook zeer effectief worden ingezet bij andere psychische problemen, zoals angstklachten, paniek of een negatief zelfbeeld dat is ontstaan door nare ervaringen in het verleden.",
    ],
  },
  ie: {
    title: "Imaginaire Exposure (IE)",
    content: [
      "Wanneer je iets ingrijpends hebt meegemaakt, is de natuurlijke neiging om alles wat daaraan herinnert te vermijden. Hoewel dit op de korte termijn rust geeft, houdt het de angst op de lange termijn juist in stand.",
      "In een veilige setting zoeken we de herinnering juist op. Door de gebeurtenis in de tegenwoordige tijd en met detail te herbeleven in je verbeelding, leert je brein dat het gevaar nu geweken is. De spanning neemt hierdoor structureel af.",
    ],
  },
  ir: {
    title: "Imaginaire Rescripting (IR)",
    content: [
      "Deze methode wordt vaak ingezet bij trauma's die te maken hebben met jeugdervaringen of sociale pijn.",
      "In je verbeelding gaan we terug naar een nare herinnering. In plaats van de gebeurtenis lijdzaam te ondergaan, grijpen we in de verbeelding in om jezelf te geven wat je op dat moment nodig had, zoals veiligheid of troost. Dit helpt om diepe emotionele wonden te verzachten.",
    ],
  },
  net: {
    title: "Narratieve Exposure Therapie (NET)",
    content: [
      "NET is bijzonder effectief wanneer je in je leven te maken hebt gehad met meerdere traumatische gebeurtenissen (meervoudig trauma).",
      "We kijken naar de context van je hele leven. Samen leggen we een 'tijdlijn' neer van je levensverhaal. We staan uitgebreid stil bij de ingrijpende gebeurtenissen en schrijven deze uit. Dit helpt om losse, pijnlijke herinneringen om te vormen tot een samenhangend verhaal dat een plek krijgt in je biografie.",
    ],
  },
  traumabehandeling: {
    title: "Specialistische traumabehandeling",
    content: [
      "Trauma vraagt om een specifieke, zorgvuldige benadering. Wanneer schokkende gebeurtenissen uit het verleden een grote impact blijven hebben op je huidige leven, bijvoorbeeld in de vorm van PTSS, herbelevingen of emotionele blokkades, kunnen er gerichte traumamethodieken ingezet worden.",
      "Deze methoden zijn erop gericht de emotionele lading van nare herinneringen te verminderen, zodat ze een plek kunnen krijgen in je geschiedenis zonder je heden te beheersen.",
      "EMDR (Eye Movement Desensitization and Reprocessing) is een wetenschappelijk bewezen en zeer effectieve therapievorm voor het verwerken van schokkende of pijnlijke gebeurtenissen. Terwijl je terugdenkt aan de gebeurtenis, wordt je werkgeheugen belast door een afleidende taak. Hierdoor wordt de herinnering opnieuw opgeslagen, maar dan zonder de overweldigende emotionele lading.",
      "Imaginaire Exposure (IE) zoekt de herinnering juist op in een veilige setting. Door de gebeurtenis in de tegenwoordige tijd en met detail te herbeleven in je verbeelding, leert je brein dat het gevaar nu geweken is. De spanning neemt hierdoor structureel af.",
      "Imaginaire Rescripting (IR) wordt vaak ingezet bij trauma's die te maken hebben met jeugdervaringen of sociale pijn. In je verbeelding gaan we terug naar een nare herinnering en grijpen we in om jezelf te geven wat je op dat moment nodig had, zoals veiligheid of troost.",
      "Narratieve Exposure Therapie (NET) is bijzonder effectief bij meervoudig trauma. Samen leggen we een tijdlijn neer van je levensverhaal en staan we uitgebreid stil bij de ingrijpende gebeurtenissen, zodat losse pijnlijke herinneringen een samenhangend verhaal worden dat een plek krijgt in je biografie.",
    ],
  },
};

export default function Methodiek() {
  const params = useParams<{ slug: string }>();
  const data = methodieken[params.slug || ""];

  if (!data) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Pagina niet gevonden</h1>
          <Link href="/werkwijze">
            <span className="text-primary hover:underline cursor-pointer">Terug naar Werkwijze</span>
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href="/werkwijze">
              <span className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-6 gap-1" data-testid="link-back-werkwijze">
                <ArrowLeft size={16} /> Terug naar Werkwijze
              </span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif text-foreground" data-testid="text-methodiek-title">{data.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {data.content.map((paragraph, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {params.slug === "traumabehandeling" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-serif text-foreground mb-6">Traumamethodieken</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
