import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kerala Shed Works" },
      { name: "description", content: "Learn about Kerala Shed Works — 15+ years of trusted shed construction expertise in Kerala." },
      { property: "og:title", content: "About Us — Kerala Shed Works" },
      { property: "og:description", content: "15+ years of trusted shed construction expertise in Kerala." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2008", title: "Founded", desc: "Started with a small team and a big dream in Kochi" },
  { year: "2012", title: "100th Project", desc: "Completed our 100th project milestone" },
  { year: "2016", title: "Expanded Statewide", desc: "Extended services across all districts of Kerala" },
  { year: "2019", title: "300 Projects", desc: "Reached 300 completed projects with zero complaints" },
  { year: "2023", title: "500+ Projects", desc: "Crossed 500 projects with a growing reputation" },
];

function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display text-gold-gradient"
          >
            About Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A legacy of quality construction, built on trust and dedication.
          </motion.p>
        </div>
      </section>

      {/* Founder */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <img src={founderImg} alt="Founder of Kerala Shed Works" width={600} height={800} className="w-full h-auto object-cover" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display text-foreground">The Man Behind the Work</h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  With over 15 years of hands-on experience in steel shed construction, our founder has
                  built a reputation for delivering exceptional quality across Kerala. What started as a
                  small contracting business has grown into one of the most trusted names in shed construction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every project is personally supervised to ensure the highest standards of craftsmanship,
                  safety, and customer satisfaction. Our commitment to using premium materials and modern
                  techniques sets us apart from the competition.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-xl bg-secondary/50 p-4 text-center">
                    <div className="text-2xl font-bold font-display text-gold-gradient">15+</div>
                    <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-4 text-center">
                    <div className="text-2xl font-bold font-display text-gold-gradient">500+</div>
                    <p className="text-xs text-muted-foreground mt-1">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card/30">
        <div className="mx-auto max-w-4xl px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-gradient">Our Journey</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                      <h3 className="text-xl font-bold font-display text-foreground">{m.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
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
