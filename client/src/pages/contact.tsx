import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const contactSchema = z.object({
  name: z.string().min(2, "Naam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().optional(),
  service: z.string().min(1, "Selecteer een dienst"),
  message: z.string().min(10, "Geef een kort bericht op"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Akkoord gaan met de privacyverklaring is verplicht",
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false,
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor je bericht. We nemen binnen 48 uur contact met je op.",
    });
    form.reset();
  }

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
              <h1 className="text-5xl font-serif text-foreground mb-6">Contact</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Zet de eerste stap. Neem contact op voor een intake of stel je vragen. We hebben momenteel geen wachtlijst.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-[2rem] border border-border shadow-sm h-fit"
            >
              <h3 className="text-2xl font-serif mb-8">Praktijkgegevens</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Locatie</h4>
                    <p className="text-muted-foreground mt-1">Keizersgracht 123<br/>1015 CJ Amsterdam<br/>Nederland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <a href="mailto:hello@innerlijkkompas.nl" className="text-muted-foreground mt-1 hover:text-primary transition-colors">hello@innerlijkkompas.nl</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Telefoon</h4>
                    <a href="tel:+31201234567" className="text-muted-foreground mt-1 hover:text-primary transition-colors">+31 20 123 4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Openingstijden</h4>
                    <p className="text-muted-foreground mt-1">Ma - Do: 9:00 - 18:00<br/>Vr: 9:00 - 15:00<br/>Online sessies in overleg</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-serif mb-8">Stuur een bericht</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Volledige naam</FormLabel>
                          <FormControl>
                            <Input placeholder="Jan Janssen" className="bg-white" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jan@voorbeeld.nl" className="bg-white" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefoonnummer (Optioneel)</FormLabel>
                          <FormControl>
                            <Input placeholder="+31 6 12345678" className="bg-white" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interesse in</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                              data-testid="input-service"
                            >
                              <option value="" disabled>Selecteer een dienst</option>
                              <option value="individual">Individuele Therapie</option>
                              <option value="expat">Expat Ondersteuning</option>
                              <option value="couples">Relatietherapie</option>
                              <option value="online">Online Sessies</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kort bericht</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beschrijf kort wat je naar therapie brengt..." 
                            className="min-h-[150px] bg-white resize-y" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormDescription className="flex items-center gap-2 text-amber-600 font-medium">
                          <AlertCircle size={14} />
                          Let op: Deel geen gevoelige medische informatie in dit veld.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-muted/30">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-privacy"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Ik ga akkoord met de <a href="/privacy" className="text-primary hover:underline">privacyverklaring</a> (AVG).
                          </FormLabel>
                          <FormDescription>
                            Je gegevens worden vertrouwelijk behandeld.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white text-lg h-14" data-testid="button-submit-contact">
                    Verzend aanvraag
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Je informatie wordt veilig versleuteld en strikt vertrouwelijk behandeld.
                  </p>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
