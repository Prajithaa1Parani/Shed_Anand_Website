import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const navLinks = [
  { to: "/" as const, key: "nav.home" as const },
  { to: "/services" as const, key: "nav.services" as const },
  { to: "/works" as const, key: "nav.works" as const },
  { to: "/about" as const, key: "nav.about" as const },
  { to: "/reviews" as const, key: "nav.reviews" as const },
  { to: "/faq" as const, key: "nav.faq" as const },
  { to: "/contact" as const, key: "nav.contact" as const },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <motion.span
            className="text-xl font-bold font-display text-gold-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Anand Constructions
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {t(link.key)}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="ml-3 flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-foreground border border-border/50 hover:bg-secondary transition-colors"
          >
            <Globe size={14} className="text-primary" />
            {lang === "en" ? "தமிழ்" : "EN"}
          </motion.button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile language toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="flex items-center gap-1 rounded-full bg-secondary/80 px-2.5 py-1.5 text-xs font-semibold text-foreground border border-border/50"
          >
            <Globe size={12} className="text-primary" />
            {lang === "en" ? "தமிழ்" : "EN"}
          </motion.button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/50 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                    activeProps={{ className: "text-primary bg-secondary/50" }}
                    activeOptions={{ exact: link.to === "/" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
