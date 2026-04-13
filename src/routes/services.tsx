import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Home, Building2, PenTool, Wrench, Warehouse, Shield } from "lucide-react";
import residentialImg from "@/assets/residential-shed.jpg";
import commercialImg from "@/assets/commercial-shed.jpg";
import customImg from "@/assets/custom-shed.jpg";
import renovationImg from "@/assets/renovation-shed.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Kerala Shed Works" },
      { name: "description", content: "Comprehensive shed construction services including residential, commercial, custom designs, and renovation across Kerala." },
      { property: "og:title", content: "Our Services — Kerala Shed Works" },
      { property: "og:description", content: "Comprehensive shed construction services across Kerala." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Home, title: "Residential Sheds", desc: "Beautiful, durable sheds for your home — car parking, garden, storage & more.", img: residentialImg },
  { icon: Building2, title: "Commercial Sheds", desc: "Large-scale industrial and commercial warehouse structures built to last.", img: commercialImg },
  { icon: PenTool, title: "Custom Designs", desc: "Unique architectural designs tailored to your exact requirements and vision.", img: customImg },
  { icon: Wrench, title: "Renovation & Repair", desc: "Upgrade and repair existing sheds with modern materials and techniques.", img: renovationImg },
  { icon: Warehouse, title: "Agricultural Sheds", desc: "Spacious, well-ventilated structures for farming, livestock, and storage.", img: gallery1 },
  { icon: Shield, title: "Poultry & Dairy Sheds", desc: "Specialized climate-controlled sheds for poultry farms and dairy units.", img: gallery2 },
];

function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold font-display text-gold-gradient"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to completion, we deliver premium shed construction services
            with unmatched quality and craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group overflow-hidden rounded-xl border border-border bg-card h-full"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <s.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card/30">
        <div className="mx-auto max-w-5xl px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-gradient">Our Process</h2>
            <p className="mt-3 text-muted-foreground">Simple, transparent, and efficient</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your needs and vision with our experts" },
              { step: "02", title: "Design", desc: "Custom design plans tailored to your requirements" },
              { step: "03", title: "Construction", desc: "Expert team builds with premium materials" },
              { step: "04", title: "Handover", desc: "Quality inspection and project delivery" },
            ].map((p) => (
              <StaggerItem key={p.step}>
                <div className="text-center">
                  <div className="text-4xl font-bold font-display text-gold-gradient mb-3">{p.step}</div>
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
