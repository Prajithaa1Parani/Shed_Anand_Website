import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Kerala Shed Works" },
      { name: "description", content: "Get in touch for a free consultation and quote. Contact Kerala Shed Works for all your shed construction needs." },
      { property: "og:title", content: "Contact Us — Kerala Shed Works" },
      { property: "og:description", content: "Get a free consultation and quote for your shed project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display text-gold-gradient"
          >
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground">
            Let's discuss your project. Get a free quote today.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-border bg-card p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20"
                  >
                    <CheckCircle size={40} className="text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-display text-foreground">Message Sent!</h3>
                  <p className="mt-3 text-muted-foreground">We'll get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input
                        id="name"
                        required
                        maxLength={100}
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        maxLength={15}
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      maxLength={255}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground">Project Type</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, projectType: v })}>
                      <SelectTrigger className="bg-secondary/50 border-border">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Shed</SelectItem>
                        <SelectItem value="commercial">Commercial / Industrial</SelectItem>
                        <SelectItem value="agricultural">Agricultural Shed</SelectItem>
                        <SelectItem value="custom">Custom Design</SelectItem>
                        <SelectItem value="renovation">Renovation / Repair</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Your Message</Label>
                    <Textarea
                      id="message"
                      required
                      maxLength={1000}
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-gold">
                      <Send size={16} /> Send Message
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                <h3 className="text-lg font-bold font-display text-foreground">Get in Touch</h3>
                {[
                  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: Mail, label: "Email", value: "info@keralashedworks.com", href: "mailto:info@keralashedworks.com" },
                  { icon: MapPin, label: "Location", value: "Kochi, Kerala, India", href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] p-4 text-sm font-semibold text-white transition-all"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </motion.a>

              {/* Map Placeholder */}
              <div className="rounded-2xl border border-border bg-card overflow-hidden aspect-[4/3]">
                <div className="w-full h-full bg-secondary/30 flex items-center justify-center">
                  <div className="text-center px-4">
                    <MapPin size={32} className="text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">Kochi, Kerala</p>
                    <p className="text-xs text-muted-foreground mt-1">Serving all districts across Kerala</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
