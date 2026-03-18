import { motion } from "framer-motion";
import { MapPin, Mail, Building2 } from "lucide-react";
import rotterdamImg from "@/assets/images/rotterdam-willemsbrug.png";

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Contact</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Zet de eerste stap. Neem contact op voor een intake of stel jouw vragen. Ik help je graag verder.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-fit"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img 
                  src={rotterdamImg} 
                  alt="Rotterdam Willemsbrug bij avond" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={16} className="shrink-0 text-primary" />
                  <a href="mailto:info@innerlijkkompaspsychologie.com" className="hover:text-primary transition-colors">info@innerlijkkompaspsychologie.com</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={16} className="shrink-0 text-primary" />
                  <span>Rotterdam en omgeving</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Building2 size={16} className="shrink-0 text-primary" />
                  <span>KVK: 99588390</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-serif mb-8">Stuur een bericht</h3>
              <form name="contact" method="POST" data-netlify="true" action="/" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><label>Vul dit niet in: <input name="bot-field" /></label></p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">Volledige naam</label>
                    <input id="name" name="name" type="text" placeholder="Jan Janssen" required className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-testid="input-name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                    <input id="email" name="email" type="email" placeholder="jan@voorbeeld.nl" required className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-testid="input-email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none">Telefoonnummer (Optioneel)</label>
                    <input id="phone" name="phone" type="tel" placeholder="+31 6 12345678" className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-testid="input-phone" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">Jouw bericht</label>
                  <textarea 
                    id="message"
                    name="message"
                    placeholder="Beschrijf kort wat jou naar therapie brengt..." 
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y" 
                    required
                    minLength={10}
                    data-testid="input-message"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                    data-testid="checkbox-privacy"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                    Ik ga akkoord met de{" "}
                    <a href="/privacy" className="text-primary underline underline-offset-2 hover:text-primary/80">
                      privacyverklaring
                    </a>
                  </label>
                </div>

                <button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white text-lg h-14 font-medium transition-colors" data-testid="button-submit-contact">
                  Verstuur
                </button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Je informatie wordt veilig versleuteld en strikt vertrouwelijk behandeld.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
