import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacyverklaring | Innerlijk Kompas Psychologie";
  }, []);
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/">
                <span className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-8 gap-1" data-testid="link-back-home">
                  <ArrowLeft size={16} /> Terug naar home
                </span>
              </Link>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4" data-testid="text-privacy-title">Uw privacy</h1>
              <p className="text-muted-foreground mb-12">Informatie voor cliënten</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Vooraf</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Volgens de Algemene verordening gegevensbescherming (AVG) ben ik verplicht om een privacy statement op mijn website te plaatsen dan wel beschikbaar te hebben in de praktijk. Deze brochure is niet bedoeld als vervanging van het privacy statement, maar als een aanvulling daarop.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Uw dossier</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Voor een goede behandeling is het noodzakelijk dat ik als behandelaar een dossier aanleg: op papier, digitaal of een combinatie van beide. Dit betekent dat ik vanaf het moment van uw aanmelding uw gegevens hierin noteer. Het gaat om gegevens over uw gezondheid, bijvoorbeeld uw voorgeschiedenis en verslagen van gesprekken. Maar ook om administratieve gegevens, zoals uw naam, geboortedatum, adres en telefoonnummer. Als zorgverlener ben ik verplicht om uw identiteit vast te stellen en uw burgerservicenummer (bsn) te noteren.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ik bewaar in uw dossier ook de voor uw behandeling noodzakelijke gegevens die ik via andere zorgverleners heb gekregen, zoals de verwijsbrief van de huisarts of informatie van een andere behandelaar.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Beveiliging van uw dossier</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ik heb alle wettelijk verplichte maatregelen getroffen om ervoor te zorgen dat uw gegevens veilig worden opgeborgen en dat deze niet verloren raken of in onbevoegde handen vallen. Mochten er toch gegevens lekken of zoekraken, dan ben ik verplicht dit te melden bij de Autoriteit Persoonsgegevens en passende maatregelen te nemen om herhaling in de toekomst te voorkomen. Ik zal u dan ook op de hoogte stellen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Toegang tot uw dossier</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Alle personen in de praktijk die bij uw behandeling betrokken zijn, hebben toegang tot uw dossier. Dit geldt ook voor de collega die mij vervangt bij afwezigheid wegens ziekte, vakantie of om andere redenen. Zij zijn net als ik gehouden aan het beroepsgeheim. Uw dossier wordt alleen ingezien voor zover dit nodig is om u van goede zorg te voorzien.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Informatie delen</h2>

                <h3 className="text-base font-semibold text-foreground mb-2 mt-5">Huisarts / verwijzer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alleen met uw toestemming mag ik informatie verstrekken aan de huisarts/verwijzer of eventueel aan een behandelaar naar wie ik u doorverwijs. Het kan bijvoorbeeld gaan om informatie over doorverwijzing of een rapportage. Het gaat dan om relevante gegevens uit uw dossier. Telkens als er daadwerkelijk informatie wordt gedeeld, zal ik u opnieuw om toestemming vragen, zodat u weet welke informatie ik met welk doel deel en met wie. Als u toestemming geeft voor of bezwaar maakt tegen het geven van informatie aan de huisarts, dan maak ik daarvan een notitie in het dossier. Bij bezwaar zal ik de informatie niet verstrekken.
                </p>

                <h3 className="text-base font-semibold text-foreground mb-2 mt-5">Zorgverzekeraars</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">• Ik ben wettelijk verplicht om een aantal van uw persoons- en behandelgegevens vast te leggen. Een deel van deze gegevens komt ook op de rekening voor de zorgverzekeraar te staan (zoals naam, adres, woonplaats, bsn). Met ingang van 2022 ben ik ook verplicht om de zorgvraagtypering vast te leggen en op de rekening naar de zorgverzekeraar te vermelden. In de gespecialiseerde ggz gaat het daarnaast ook om uw diagnose op hoofdgroepniveau (dus niet specifiek) en in de generalistische basis-ggz om het profiel (kort, middel, intensief of chronisch).</li>
                  <li className="leading-relaxed">• Als u hier bezwaar tegen heeft, kunt u een privacyverklaring ondertekenen. Dat is een formulier waarmee u aangeeft dat de zorgvraagtypering en de diagnose op hoofdgroepniveau niet mag worden doorgegeven aan uw zorgverzekeraar. De privacyverklaring dient vóór de eerste factuur (dus binnen 1 maand na de start van de behandeling) ingevuld te zijn.</li>
                  <li className="leading-relaxed">• Voor sommige behandelingen heeft u alleen recht op vergoeding als uw zorgverzekeraar hier vooraf toestemming voor heeft gegeven (machtiging). U bent als patiënt zelf verantwoordelijk voor de machtiging. Als u bezwaar heeft tegen informatieverstrekking en u wilt niet dat er informatie naar de zorgverzekeraar gaat, dan kunt u dit kenbaar maken door een privacyverklaring te ondertekenen.</li>
                  <li className="leading-relaxed">• Zorgverzekeraars mogen controleren of mijn administratie op orde is en de rekeningen kloppen. Ik ben verplicht hieraan mee te werken, maar alleen als aan een aantal strikte wettelijke voorwaarden is voldaan. In die gevallen is uw toestemming niet vereist; ik zal u hierover wel vooraf informeren.</li>
                </ul>

                <h3 className="text-base font-semibold text-foreground mb-2 mt-5">Nederlandse Zorgautoriteit (NZa)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">• De NZa ontvangt gegevens over declaraties in de ggz via Vektis. Deze gegevens betreffen de zorgvraagtypering zoals die op de factuur vermeld staat. Als u de privacyverklaring heeft ondertekend, verstrek ik deze gegevens niet aan uw zorgverzekeraar en komen ze dus ook niet bij de NZa terecht.</li>
                  <li className="leading-relaxed">• Daarnaast dien ik mogelijk de antwoorden op de HoNOS+-vragenlijst rechtstreeks aan te leveren bij de NZa. Als u hiertegen bezwaar heeft, kunt u de privacyverklaring ondertekenen.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Zorgvraagtypering en andere vragenlijsten</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ggz-aanbieders zijn wettelijk verplicht om een zorgvraagtypering te doen. Hiervoor gebruik ik de HoNOS+-vragenlijst. Daarnaast kan ik u, als dit in de behandeling past, aan het begin, tussentijds en aan het eind van de behandeling vragen om digitaal een vragenlijst in te vullen. Deze informatie komt in uw dossier. Met deze gegevens kan ik het verloop van de behandeling nauwkeurig volgen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Visitatie, intervisie, supervisie en consultatie</h2>

                <h3 className="text-base font-semibold text-foreground mb-2">Visitatie</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Eens in de vijf jaar vindt er in mijn praktijk een interne kwaliteitscontrole plaats, visitatie genoemd. Dit gebeurt door collega's die net als ik een wettelijk beroepsgeheim hebben. Als u bezwaar heeft tegen inzage van uw dossier in het kader van deze visitatie, dan kunt u dat aan mij doorgeven. Ik neem uw bezwaar expliciet op in het dossier. Als u bezwaar heeft, mogen de visiteurs het dossier alleen inzien nadat ik alle gegevens waaruit uw identiteit blijkt, verwijderd heb.
                </p>

                <h3 className="text-base font-semibold text-foreground mb-2">Intervisie, supervisie of consultatie</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In het kader van intervisie, supervisie of consultatie maak ik alleen gebruik van gegevens waaruit uw identiteit niet af te leiden is.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Derden</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Mochten andere personen of instanties informatie vragen over uw behandeling, dan ben ik niet verplicht die te geven. Ik heb er in ieder geval uw gerichte toestemming voor nodig en zal vooraf met u doornemen om welke informatie het gaat en voor welk doel deze wordt gebruikt. Denk aan een verzoek van een bedrijfsarts, een arbeidsongeschiktheidsverzekeraar of een letselschadeverzekeraar.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ook als u toestemming geeft om informatie aan een derde te verstrekken, moet ik een eigen afweging maken of dit gezien mijn beroepsgeheim geoorloofd is. Ik kan dan alsnog besluiten om geen informatie te verstrekken als dit naar mijn oordeel de behandeling kan tegenwerken of schadelijk voor u kan zijn.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Bewaartermijn van uw dossier</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Als uw behandeling is afgerond, wordt uw dossier ten minste 20 jaar bewaard. Als u uw dossier wilt laten vernietigen, dan kan de bewaartermijn korter zijn.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Uw rechten</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Als cliënt heeft u volgens de wet een aantal rechten die gaan over de gegevens die over u worden vastgelegd in uw dossier. Namens u kan ook uw wettelijke vertegenwoordiger (ouder, voogd of mentor) of een door u schriftelijk gemachtigde een beroep doen op deze rechten.
                </p>

                <h3 className="text-base font-semibold text-foreground mb-2">Recht op inzage en afschrift</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  U heeft recht om uw dossier in te zien en u kunt om een kopie vragen; ik reageer binnen één maand op uw verzoek. U heeft recht op één gratis kopie. Voor een tweede kopie mag ik een redelijke vergoeding vragen op basis van de administratieve kosten.
                </p>

                <h3 className="text-base font-semibold text-foreground mb-2">Recht op correctie of aanvulling</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Als u vindt dat bepaalde gegevens in uw dossier niet kloppen, dan kunt u mij vragen deze te wijzigen, corrigeren of aan te vullen. Het gaat hierbij alleen om feitelijke onjuistheden; wijzigen of corrigeren van mijn professionele oordeel is niet mogelijk. Ik reageer binnen één maand op uw verzoek.
                </p>

                <h3 className="text-base font-semibold text-foreground mb-2">Recht op vernietiging</h3>
                <p className="text-muted-foreground leading-relaxed">
                  U kunt schriftelijk verzoeken (een deel van) uw gegevens uit uw behandeldossier te laten vernietigen. Ik reageer dan binnen een maand op uw verzoek. Voor uw gegevens in mijn administratie (factuur, declaratiesysteem) geldt dat ik deze vanwege fiscale wetgeving en controles door zorgverzekeraars langer moet bewaren.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Veilige communicatie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Om buiten de afgesproken behandelsessies om veilig met elkaar te communiceren, raad ik u aan om geen persoonlijke informatie rondom de behandeling naar mij te e-mailen, whatsappen of facetimen. Dat kan alleen als de verbinding is beveiligd. Ik gebruik hiervoor een beveiligd e-mailprogramma.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-foreground mb-3">Contactgegevens</h2>
                <div className="text-muted-foreground leading-relaxed space-y-1">
                  <p>Innerlijk Kompas Psychologie</p>
                  <p>E-mail: <a href="mailto:info@innerlijkkompaspsychologie.nl" className="text-primary hover:underline">info@innerlijkkompaspsychologie.nl</a></p>
                  <p>KVK: 99588390</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Deze privacyinformatie is voor het laatst bijgewerkt op {new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
