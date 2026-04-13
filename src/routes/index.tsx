import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-shed.jpg";
import residentialImg from "@/assets/residential-shed.jpg";
import commercialImg from "@/assets/commercial-shed.jpg";
import customImg from "@/assets/custom-shed.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kerala Shed Works — Premium Shed Construction in Kerala" },
      { name: "description", content: "Professional shed construction services across Kerala. 15+ years, 500+ projects, 100% satisfaction." },
    ],
  }),
  component: HomePage,
});

function Counter({ target, label }: { target: number; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(count, target, { duration: 2, ease: "easeOut" });
      }}
    >
      <div className="text-4xl md:text-5xl font-bold font-display text-gold-gradient">
        <span ref={ref}>0</span>+
      </div>
      <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

const heroWords = "Building Kerala's Finest Sheds".split(" ");

const featuredWorks = [
  { img: residentialImg, title: "Residential Villa Shed", location: "Thrissur, Kerala" },
  { img: commercialImg, title: "Industrial Warehouse", location: "Ernakulam, Kerala" },
  { img: customImg, title: "Custom Modern Design", location: "Kozhikode, Kerala" },
];

const testimonials = [
  { name: "Rajesh Kumar", text: "Exceptional quality work. The shed was completed ahead of schedule and within budget.", rating: 5 },
  { name: "Priya Menon", text: "Very professional team. They understood our requirements perfectly and delivered beyond expectations.", rating: 5 },
  { name: "Anil Thomas", text: "Best shed construction service in Kerala. Highly recommend their work to everyone.", rating: 5 },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kerala shed construction" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-foreground"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            15+ years of expertise in crafting premium steel structures across Kerala.
            From residential to industrial — we build it all.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground glow-gold transition-all"
              >
                Get a Free Quote <ArrowRight size={16} />
              </motion.div>
            </Link>
            <Link to="/works">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-semibold text-foreground hover:bg-secondary/50 transition-all"
              >
                View Our Works
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card/30">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter target={500} label="Projects Done" />
          <Counter target={15} label="Years Experience" />
          <Counter target={450} label="Happy Clients" />
          <Counter target={12} label="Awards Won" />
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-gradient">Featured Works</h2>
            <p className="mt-3 text-muted-foreground">A glimpse of our recent masterpieces</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorks.map((work) => (
              <StaggerItem key={work.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={work.img}
                      alt={work.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{work.title}</h3>
                      <p className="text-sm text-muted-foreground">{work.location}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection delay={0.3} className="text-center mt-10">
            <Link to="/works">
              <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View All Projects <ArrowRight size={16} />
              </motion.span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-card/30">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gold-gradient">What Clients Say</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                  <p className="mt-4 text-sm font-semibold text-foreground">{t.name}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">Ready to Build Your Dream Shed?</h2>
            <p className="mt-4 text-muted-foreground">Get a free consultation and quote today. We'll bring your vision to life.</p>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground glow-gold"
              >
                Contact Us Now <ArrowRight size={16} />
              </motion.div>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
