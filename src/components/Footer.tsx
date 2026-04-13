import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold text-gold-gradient">Kerala Shed Works</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Premium shed construction services across Kerala. Quality craftsmanship with 15+ years of experience.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2">
              {[
                { to: "/services" as const, label: "Services" },
                { to: "/works" as const, label: "Our Works" },
                { to: "/about" as const, label: "About Us" },
                { to: "/contact" as const, label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact Info</h4>
            <div className="mt-3 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary" /> +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="text-primary" /> info@keralashedworks.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" /> Kochi, Kerala, India
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Kerala Shed Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
