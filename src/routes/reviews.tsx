import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Kerala Shed Works" },
      { name: "description", content: "Read what our satisfied clients say about Kerala Shed Works construction services." },
      { property: "og:title", content: "Reviews — Kerala Shed Works" },
      { property: "og:description", content: "Read what our satisfied clients say." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Rajesh Kumar", location: "Thrissur", rating: 5, text: "Exceptional quality work! The industrial shed was completed ahead of schedule. The team was professional and kept us informed throughout the project. Highly recommended!" },
  { name: "Priya Menon", location: "Ernakulam", rating: 5, text: "We needed a custom-designed shed for our farmhouse, and they delivered beyond our expectations. The attention to detail was remarkable." },
  { name: "Anil Thomas", location: "Kozhikode", rating: 5, text: "Best shed construction service in Kerala. The quality of steel and workmanship is top-notch. Our warehouse has withstood two monsoon seasons without any issues." },
  { name: "Suresh Nair", location: "Palakkad", rating: 5, text: "Very professional team. They understood our requirements perfectly for our poultry farm shed. The ventilation design was exactly what we needed." },
  { name: "Meera Krishnan", location: "Kochi", rating: 4, text: "Great experience working with Kerala Shed Works. Our car parking shed looks amazing and the whole process was smooth and hassle-free." },
  { name: "Deepak Pillai", location: "Trivandrum", rating: 5, text: "Outstanding work on our commercial warehouse. The structural integrity and finishing quality are exceptional. Will definitely use their services again." },
  { name: "Lakshmi Devi", location: "Kannur", rating: 5, text: "They renovated our old shed and it looks brand new. The team was respectful, clean, and completed the work within the quoted budget." },
  { name: "Vijay Mohan", location: "Malappuram", rating: 5, text: "From consultation to completion, every step was transparent. Our agricultural shed is perfect for our needs. Thank you for the excellent work!" },
];

function ReviewsPage() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display text-gold-gradient"
          >
            Client Reviews
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground">
            Real stories from our valued customers across Kerala
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-primary text-primary" />)}
            </div>
            <span className="text-sm font-medium text-foreground">4.9/5 Average Rating</span>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-border bg-card p-6 h-full relative"
                >
                  <Quote size={32} className="absolute top-4 right-4 text-primary/10" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                    {Array.from({ length: 5 - r.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-muted-foreground/30" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{r.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.location}, Kerala</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
