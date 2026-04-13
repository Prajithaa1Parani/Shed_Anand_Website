import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold text-gold-gradient">Anand Constructions</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">{t("footer.quickLinks")}</h4>
            <div className="mt-3 flex flex-col gap-2">
              {[
                { to: "/services" as const, key: "nav.services" as const },
                { to: "/works" as const, key: "nav.works" as const },
                { to: "/about" as const, key: "nav.about" as const },
                { to: "/contact" as const, key: "nav.contact" as const },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">{t("footer.contactInfo")}</h4>
            <div className="mt-3 flex flex-col gap-3">
              <a href="tel:+917010058764" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} className="text-primary" />
                <span>7010058764</span>
              </a>
              <a href="mailto:anand.constructions@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" />
                <span>anand.constructions@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" />
                <span>Namakkal, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          &copy; 2024 Anand Constructions. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
