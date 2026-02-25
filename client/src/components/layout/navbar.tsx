import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/werkwijze", label: "Werkwijze" },
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
        {/* Logo */}
        <Link href="/">
          <a className="font-serif text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-lg">
              IK
            </span>
            Innerlijk Kompas
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-white px-6"
          >
            <Link href="/contact">Maak Afspraak</Link>
          </Button>
          <div className="flex items-center gap-2 border-l pl-6">
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">EN</span>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm font-bold text-foreground">NL</span>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Button asChild className="w-full mt-4 rounded-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Maak Afspraak
                </Link>
              </Button>
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">English</span>
                <span className="text-sm font-bold text-foreground">Nederlands</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
