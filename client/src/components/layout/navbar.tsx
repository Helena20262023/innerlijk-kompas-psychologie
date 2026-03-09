import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const behandelmethodieken = [
  { slug: "cgt", label: "CGT" },
  { slug: "mindfulness", label: "Mindfulness" },
  { slug: "sft", label: "SFT" },
  { slug: "oplossingsgerichte", label: "Oplossingsgerichte therapie" },
  { slug: "inzichtgevende", label: "Inzichtgevende therapie" },
  { slug: "emdr", label: "EMDR" },
  { slug: "ie", label: "Imaginaire Exposure" },
  { slug: "ir", label: "Imaginaire Rescripting" },
  { slug: "net", label: "Narratieve Exposure Therapie" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileWerkwijzeOpen, setIsMobileWerkwijzeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/werkwijze", label: "Werkwijze", hasDropdown: true },
    { href: "/about", label: "Over mij" },
    { href: "/ervaringen", label: "Ervaringen" },
    { href: "/tarieven", label: "Tarieven" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="font-serif text-2xl font-bold text-primary tracking-tight flex items-center gap-2 cursor-pointer">
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-lg">
              IK
            </span>
            Innerlijk Kompas
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="relative group">
                <Link href={link.href}>
                  <span
                    className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer inline-flex items-center gap-1 ${
                      location === link.href || location.startsWith("/werkwijze/")
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </span>
                </Link>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-lg border border-border/50 py-2 min-w-[240px]">
                    {behandelmethodieken.map((m) => (
                      <Link key={m.slug} href={`/werkwijze/${m.slug}`}>
                        <span className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/10 transition-colors cursor-pointer" data-testid={`dropdown-${m.slug}`}>
                          {m.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            )
          )}
          <Link href="/contact">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-6">
              Maak Afspraak
            </Button>
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <nav className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href}>
                    <div className="flex items-center justify-between">
                      <Link href={link.href}>
                        <span
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-lg font-medium cursor-pointer ${
                            location === link.href || location.startsWith("/werkwijze/")
                              ? "text-primary"
                              : "text-foreground"
                          }`}
                        >
                          {link.label}
                        </span>
                      </Link>
                      <button
                        onClick={() => setIsMobileWerkwijzeOpen(!isMobileWerkwijzeOpen)}
                        className="p-2 text-foreground/60"
                      >
                        <ChevronDown size={18} className={`transition-transform ${isMobileWerkwijzeOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {isMobileWerkwijzeOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {behandelmethodieken.map((m) => (
                            <Link key={m.slug} href={`/werkwijze/${m.slug}`}>
                              <span
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-1.5 text-sm text-foreground/70 hover:text-primary cursor-pointer"
                              >
                                {m.label}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <span
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium cursor-pointer ${
                        location === link.href ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                )
              )}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4 rounded-full">
                  Maak Afspraak
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
