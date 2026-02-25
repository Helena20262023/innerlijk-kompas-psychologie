import { motion } from "framer-motion";
import { CheckCircle2, Globe, Zap, Search, Accessibility, Layout, MessageSquare, BarChart3, ShieldCheck, Activity, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const checklistCategories = [
  {
    title: "Technische Controles",
    icon: <Zap className="text-amber-500" />,
    items: [
      { task: "Mobielvriendelijkheid (Responsive Design)", tool: "Google Mobile-Friendly Test" },
      { task: "Laadsnelheid optimalisatie (Lighthouse score > 90)", tool: "PageSpeed Insights" },
      { task: "Controle op gebroken links (404s)", tool: "Screaming Frog / Dr. Link Check" },
      { task: "SSL-certificaat (HTTPS) verificatie", tool: "SSL Labs" },
    ]
  },
  {
    title: "SEO Verificatie",
    icon: <Search className="text-blue-500" />,
    items: [
      { task: "Meta-titels & beschrijvingen per pagina", tool: "SEO Meta in 1 Click" },
      { task: "XML Sitemap & Robots.txt aanwezig", tool: "Google Search Console" },
      { task: "Alt-teksten bij alle afbeeldingen", tool: "Lighthouse" },
      { task: "Schema Markup (JSON-LD) voor Psycholoog", tool: "Rich Results Test" },
    ]
  },
  {
    title: "Toegankelijkheid (WCAG)",
    icon: <Accessibility className="text-green-500" />,
    items: [
      { task: "Contrastratio's van tekst & knoppen", tool: "WebAIM Contrast Checker" },
      { task: "Toetsenbord navigatie test", tool: "Handmatige tab-test" },
      { task: "Screenreader compatibiliteit (Aria labels)", tool: "WAVE Tool / NVDA" },
    ]
  },
  {
    title: "Browser & Apparaat",
    icon: <Layout className="text-purple-500" />,
    items: [
      { task: "Cross-browser testen (Chrome, Safari, Firefox, Edge)", tool: "BrowserStack" },
      { task: "iOS & Android weergave controle", tool: "Responsively App" },
    ]
  },
  {
    title: "Interactie & Conversie",
    icon: <MessageSquare className="text-primary" />,
    items: [
      { task: "Contactformulier inzendingen testen", tool: "Handmatige test" },
      { task: "Bevestigingsmails (Auto-responders)", tool: "Mailtrap (voor staging)" },
      { task: "Click-to-call & Email links", tool: "Handmatige test" },
    ]
  },
  {
    title: "Wettelijk & Privacy",
    icon: <ShieldCheck className="text-red-500" />,
    items: [
      { task: "AVG/GDPR-proof Privacybeleid", tool: "Veiliginternetten.nl" },
      { task: "Cookie-banner & Toestemming", tool: "Cookiebot / CookieYes" },
      { task: "Bedrijfsgegevens (KVK/BTW) in footer", tool: "KVK Register" },
    ]
  },
  {
    title: "Analytics & Monitoring",
    icon: <BarChart3 className="text-indigo-500" />,
    items: [
      { task: "Google Analytics 4 (GA4) setup", tool: "Tag Assistant" },
      { task: "Uptime monitoring instellen", tool: "UptimeRobot / BetterStack" },
      { task: "Foutopsporing in browser console", tool: "DevTools" },
    ]
  }
];

export default function LaunchChecklist() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6 italic">Lanceringschecklist</h1>
          <p className="text-xl text-muted-foreground">
            Een volledige gids om Innerlijk Kompas met vertrouwen live te zetten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {checklistCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full glass-card border-none overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 bg-muted/30 pb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {category.icon}
                  </div>
                  <CardTitle className="font-serif text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex flex-col gap-1">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                          <span className="font-medium text-foreground">{item.task}</span>
                        </div>
                        <div className="ml-7 flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 w-fit px-2 py-1 rounded">
                          <Globe size={12} />
                          <span>Tool: {item.tool}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-[2rem] bg-primary text-white text-center max-w-4xl mx-auto shadow-xl"
        >
          <Activity className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-serif mb-4 italic">Klaar voor de start?</h2>
          <p className="mb-8 opacity-90">Zodra alle vakjes zijn afgevinkt, is Innerlijk Kompas klaar om cliënten te verwelkomen.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors text-sm">
              Speed Test <ExternalLink size={14} />
            </a>
            <a href="https://search.google.com/test/rich-results" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors text-sm">
              SEO Test <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
