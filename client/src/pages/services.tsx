import { motion } from "framer-motion";
import therapyRoomImg from "@/assets/images/therapy-room.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "individual",
      title: "Individual Therapy",
      description: "Personalized one-on-one sessions tailored to your specific mental health goals. We utilize evidence-based treatments such as Cognitive Behavioral Therapy (CBT), EMDR for trauma, and Schema Therapy.",
      areas: ["Anxiety & Panic", "Depression & Low Mood", "Burnout & Stress", "Trauma & PTSD", "Self-esteem issues"],
    },
    {
      id: "expat",
      title: "Expat & Internationals Support",
      description: "Moving to a new country brings unique psychological challenges. Our specialized expat counseling helps you navigate the complexities of international life in the Netherlands.",
      areas: ["Cultural adjustment", "Homesickness & Isolation", "Career transitions", "Identity issues", "Navigating the Dutch healthcare system"],
    },
    {
      id: "online",
      title: "Online Therapy",
      description: "High-quality psychological care from the comfort of your own home. Perfect for busy professionals, frequent travelers, or those who prefer the familiarity of their own space.",
      areas: ["Secure video calls", "Flexible scheduling", "Continuous care while traveling", "Access from anywhere in NL"],
    },
    {
      id: "couples",
      title: "Couples Counseling",
      description: "EFT (Emotionally Focused Therapy) based counseling for couples looking to improve communication, rebuild trust, or navigate difficult life transitions together.",
      areas: ["Communication breakdown", "Intimacy issues", "Cross-cultural relationships", "Conflict resolution"],
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-serif text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              We provide evidence-based psychological treatments in a warm, welcoming environment. Find the support that fits your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Services List */}
            <div className="lg:col-span-7 space-y-24">
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
                  
                  <div className="bg-white p-8 rounded-[2rem] border border-border/50 shadow-sm">
                    <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm">Areas of Focus</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.areas.map((area, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                          <span className="text-foreground/80">{area}</span>
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
                  <img src={therapyRoomImg} alt="Our therapy room" className="w-full h-full object-cover" />
                </div>
                
                <div className="bg-primary text-primary-foreground p-8 rounded-[2rem]">
                  <h3 className="text-2xl font-serif mb-4">Rates & Insurance</h3>
                  <p className="mb-6 opacity-90 leading-relaxed">
                    As a private practice, our sessions are typically self-pay. However, depending on your Dutch health insurance policy (restitutiepolis), you may be eligible for partial or full reimbursement.
                  </p>
                  <ul className="space-y-3 mb-8 opacity-90">
                    <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                      <span>Individual Session (45m)</span>
                      <strong>€135</strong>
                    </li>
                    <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                      <span>Couples Session (75m)</span>
                      <strong>€195</strong>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-foreground text-lg rounded-full">
                    <Link href="/contact">Book an Intake</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
