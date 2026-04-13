import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Home, Building2, PenTool, Wrench, Warehouse, Shield } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import residentialImg from "@/assets/residential-shed.jpg";
import commercialImg from "@/assets/commercial-shed.jpg";
import customImg from "@/assets/custom-shed.jpg";
import renovationImg from "@/assets/renovation-shed.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Anand Constructions" },
      { name: "description", content: "Comprehensive shed construction services including residential, commercial, custom designs, and renovation across Tamil Nadu." },
      { property: "og:title", content: "Our Services — Anand Constructions" },
      { property: "og:description", content: "Comprehensive shed construction services across Tamil Nadu." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    { icon: Home, titleKey: "services.residential" as const, descKey: "services.residentialDesc" as const, img: residentialImg },
    { icon: Building2, titleKey: "services.commercial" as const, descKey: "services.commercialDesc" as const, img: commercialImg },
    { icon: PenTool, titleKey: "services.custom" as const, descKey: "services.customDesc" as const, img: customImg },
    { icon: Wrench, titleKey: "services.renovation" as const, descKey: "services.renovationDesc" as const, img: renovationImg },
    { icon: Warehouse, titleKey: "services.agricultural" as const, descKey: "services.agriculturalDesc" as const, img: gallery1 },
    { icon: Shield, titleKey: "services.poultry" as const, descKey: "services.poultryDesc" as const, img: gallery2 },
  ];

  const steps = [
    { step: "01", titleKey: "services.step1" as const, descKey: "services.step1Desc" as const },
    { step: "02", titleKey: "services.step2" as const, descKey: "services.step2Desc" as const },
    { step: "03", titleKey: "services.step3" as const, descKey: "services.step3Desc" as const },
    { step: "04", titleKey: "services.step4" as const, descKey: "services.step4Desc" as const },
  ];

  return (
    <div className="overflow-hidden">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold font-display text-gold-gradient"
          >
            {t("services.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t("services.sub")}
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <StaggerItem key={s.titleKey}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group overflow-hidden rounded-xl border border-border bg-card h-full"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={s.img} alt={t(s.titleKey)} width={800} height={600} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <s.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">{t(s.titleKey)}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(s.descKey)}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="mx-auto max-w-5xl px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-gradient">{t("services.process")}</h2>
            <p className="mt-3 text-muted-foreground">{t("services.processSub")}</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((p) => (
              <StaggerItem key={p.step}>
                <div className="text-center">
                  <div className="text-4xl font-bold font-display text-gold-gradient mb-3">{p.step}</div>
                  <h3 className="text-lg font-semibold text-foreground">{t(p.titleKey)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(p.descKey)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
