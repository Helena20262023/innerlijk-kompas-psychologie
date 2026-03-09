import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Building2, Loader2 } from "lucide-react";
import rotterdamImg from "@/assets/images/rotterdam-willemsbrug.png";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Naam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().optional(),
  message: z.string().min(10, "Geef een kort bericht op"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: z.infer<typeof contactSchema>) => {
      const res = await apiRequest("POST", "/api/contact", values);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Bericht verzonden!",
        description: "Bedankt voor jouw bericht. Ik neem binnen 48 uur contact met je op.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    contactMutation.mutate(values);
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
                Zet de eerste stap. Neem contact op voor een intake of stel jouw vragen. Ik help je graag verder.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Rotterdam Photo & Contact Details */}
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
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jouw bericht</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beschrijf kort wat jou naar therapie brengt..." 
                            className="min-h-[150px] bg-white resize-y" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white text-lg h-14" data-testid="button-submit-contact" disabled={contactMutation.isPending}>
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Verzenden...
                      </>
                    ) : (
                      "Verzend aanvraag"
                    )}
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
