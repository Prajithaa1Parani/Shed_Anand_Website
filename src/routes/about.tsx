import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";
import founderImg from "@/assets/fatherdounder.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Anand Constructions" },
      { name: "description", content: "Learn about Anand Constructions — 10+ years of trusted shed construction expertise in Tamil Nadu." },
      { property: "og:title", content: "About Us — Anand Constructions" },
      { property: "og:description", content: "10+ years of trusted shed construction expertise in Tamil Nadu." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2020", titleEn: "Founded", titleTa: "நிறுவப்பட்டது", descEn: "Started with a small team and a big dream in Namakkal", descTa: "நாமக்கல்லில் ஒரு சிறிய குழுவுடன் பெரிய கனவுடன் தொடங்கினோம்" },
  { year: "2022", titleEn: "50th Project", titleTa: "50வது திட்டம்", descEn: "Completed our 50th project milestone", descTa: "எங்கள் 50வது திட்ட மைல்கல்லை நிறைவு செய்தோம்" },
  { year: "2024", titleEn: "Expanded Across TN", titleTa: "தமிழ்நாடு முழுவதும் விரிவடைந்தது", descEn: "Extended services across all districts of Tamil Nadu", descTa: "தமிழ்நாட்டின் அனைத்து மாவட்டங்களிலும் சேவைகளை விரிவுபடுத்தினோம்" },
  { year: "2026", titleEn: "100+ Projects", titleTa: "100+ திட்டங்கள்", descEn: "Crossed 100 projects with a growing reputation", descTa: "வளரும் நற்பெயருடன் 100 திட்டங்களை கடந்தோம்" },
];

function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="overflow-hidden">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display text-gold-gradient"
          >
            {t("about.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.sub")}
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-2xl border border-border">
                <img src={founderImg} alt="Founder of Anand Constructions" width={600} height={800} className="w-full h-auto object-cover" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display text-foreground">{t("about.founderTitle")}</h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed">{t("about.founderP1")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("about.founderP2")}</p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-xl bg-secondary/50 p-4 text-center">
                    <div className="text-2xl font-bold font-display text-gold-gradient">6+</div>
                    <p className="text-xs text-muted-foreground mt-1">{t("about.yearsExp")}</p>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-4 text-center">
                    <div className="text-2xl font-bold font-display text-gold-gradient">100+</div>
                    <p className="text-xs text-muted-foreground mt-1">{t("about.projectsDelivered")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="mx-auto max-w-4xl px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-gradient">{t("about.journey")}</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                      <h3 className="text-xl font-bold font-display text-foreground">{lang === "ta" ? m.titleTa : m.titleEn}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{lang === "ta" ? m.descTa : m.descEn}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0 glow-gold"
                    >
                      {m.year}
                    </motion.div>
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
