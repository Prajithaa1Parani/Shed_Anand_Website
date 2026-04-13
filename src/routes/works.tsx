import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { X } from "lucide-react";
import residentialImg from "@/assets/residential-shed.jpg";
import commercialImg from "@/assets/commercial-shed.jpg";
import customImg from "@/assets/custom-shed.jpg";
import renovationImg from "@/assets/renovation-shed.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroImg from "@/assets/hero-shed.jpg";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Works — Kerala Shed Works" },
      { name: "description", content: "Browse our portfolio of completed shed construction projects across Kerala." },
      { property: "og:title", content: "Our Works — Kerala Shed Works" },
      { property: "og:description", content: "Browse our portfolio of completed shed projects." },
    ],
  }),
  component: WorksPage,
});

const categories = ["All", "Residential", "Commercial", "Agricultural", "Custom"];

const projects = [
  { img: residentialImg, title: "Villa Car Parking Shed", category: "Residential", location: "Thrissur" },
  { img: commercialImg, title: "Industrial Warehouse", category: "Commercial", location: "Ernakulam" },
  { img: customImg, title: "Modern Glass Shed", category: "Custom", location: "Kozhikode" },
  { img: renovationImg, title: "Warehouse Renovation", category: "Commercial", location: "Kannur" },
  { img: gallery1, title: "Farm Equipment Shed", category: "Agricultural", location: "Palakkad" },
  { img: gallery2, title: "Poultry Farm Shed", category: "Agricultural", location: "Malappuram" },
  { img: gallery3, title: "Premium Car Port", category: "Residential", location: "Kochi" },
  { img: heroImg, title: "Event Hall Structure", category: "Commercial", location: "Trivandrum" },
];

function WorksPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="overflow-hidden">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display text-gold-gradient"
          >
            Our Works
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground">
            Every project tells a story of precision, quality, and trust.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Filter Tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground glow-gold"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </AnimatedSection>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card"
                  onClick={() => setSelectedImg(p.img)}
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={p.img} alt={p.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.location}, Kerala</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="absolute top-4 right-4 p-2 text-foreground hover:text-primary"
              onClick={() => setSelectedImg(null)}
            >
              <X size={28} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg}
              alt="Project"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
