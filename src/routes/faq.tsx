import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Kerala Shed Works" },
      { name: "description", content: "Frequently asked questions about our shed construction services, pricing, and timelines." },
      { property: "og:title", content: "FAQ — Kerala Shed Works" },
      { property: "og:description", content: "Common questions about shed construction in Kerala." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "What types of sheds do you construct?", a: "We construct a wide range of sheds including residential car parking sheds, commercial warehouses, agricultural storage sheds, poultry farm sheds, industrial structures, and custom-designed architectural sheds." },
  { q: "What areas in Kerala do you serve?", a: "We serve all districts across Kerala including Ernakulam, Thrissur, Kozhikode, Trivandrum, Palakkad, Kannur, Malappuram, and more. We also take projects in neighboring states for larger contracts." },
  { q: "How long does a typical shed construction take?", a: "The timeline depends on the project size and complexity. A residential shed typically takes 2-4 weeks, while larger commercial projects may take 6-12 weeks. We always provide a clear timeline during consultation." },
  { q: "What materials do you use?", a: "We use premium-grade structural steel, galvanized steel for corrosion resistance, high-quality roofing sheets (color-coated, polycarbonate, or GI sheets), and concrete foundations. All materials come with quality certifications." },
  { q: "Do you provide design and engineering services?", a: "Yes! Our in-house team creates custom structural designs and engineering drawings. We handle everything from initial concept and 3D visualization to final construction drawings and municipal approvals." },
  { q: "What is the approximate cost of shed construction?", a: "Costs vary based on size, design, materials, and location. A basic residential shed starts from ₹350-500 per sq ft, while commercial structures range from ₹400-700 per sq ft. We provide free detailed quotations." },
  { q: "Do you offer any warranty?", a: "Yes, we provide a comprehensive warranty on all our constructions — typically 5 years on structural integrity and 1-2 years on roofing and accessories. We also offer post-construction maintenance support." },
  { q: "Can you renovate or repair existing sheds?", a: "Absolutely! We specialize in shed renovation, upgrades, and repairs. Whether it's replacing damaged roofing, strengthening the structure, or a complete makeover — we handle it all." },
  { q: "How do I get started with a project?", a: "Simply reach out through our contact form, call us, or send a WhatsApp message. We'll schedule a free site visit and consultation, after which we'll provide a detailed proposal and quotation." },
  { q: "Do you handle permits and approvals?", a: "Yes, we assist with all necessary permits and municipal approvals required for shed construction. Our team is experienced with local regulations across Kerala." },
];

function FAQPage() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display text-gold-gradient"
          >
            FAQ
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about our services
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <AccordionItem value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6 overflow-hidden">
                    <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
