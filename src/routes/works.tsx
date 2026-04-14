import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import commercialImg from "@/assets/commercial-shed.jpg";
import customImg from "@/assets/custom-shed.jpg";
import renovationImg from "@/assets/renovation-shed.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import heroImg from "@/assets/hero-shed.jpg";
import residentialImg1 from "@/assets/works/residential/res.jpeg";
import residentialImg2 from "@/assets/works/residential/res 3.jpeg";
import residentialImg3 from "@/assets/works/residential/res 4.jpeg";
import residentialImg4 from "@/assets/works/residential/residential.jpeg";
import residentialImg5 from "@/assets/works/residential/residential (2).jpeg";
import residentialImg6 from "@/assets/works/residential/custom and residential.jpeg";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Works — Anand Constructions" },
      { name: "description", content: "Browse our portfolio of completed shed construction projects across Tamil Nadu." },
      { property: "og:title", content: "Our Works — Anand Constructions" },
      { property: "og:description", content: "Browse our portfolio of completed shed projects." },
    ],
  }),
  component: WorksPage,
});

const projects = [
  { img: residentialImg1, title: "Villa Car Parking Shed", category: "Residential", location: "Namakkal" },
  { img: residentialImg2, title: "Covered Patio Roofing", category: "Residential", location: "Salem" },
  { img: residentialImg3, title: "Traditional Roof Structure", category: "Residential", location: "Erode" },
  { img: residentialImg4, title: "Premium Terrace Shade", category: "Residential", location: "Tiruchengode" },
  { img: residentialImg5, title: "Decorative Home Roofing", category: "Residential", location: "Karur" },
  { img: residentialImg6, title: "Custom Residential Roofing", category: "Residential", location: "Coimbatore" },
  { img: commercialImg, title: "Industrial Warehouse", category: "Commercial", location: "Namakkal" },
  { img: customImg, title: "Modern Glass Shed", category: "Custom", location: "Erode" },
  { img: renovationImg, title: "Warehouse Renovation", category: "Commercial", location: "Karur" },
  { img: gallery1, title: "Farm Equipment Shed", category: "Agricultural", location: "Dharmapuri" },
  { img: gallery2, title: "Poultry Farm Shed", category: "Agricultural", location: "Tiruchengode" },
  { img: heroImg, title: "Event Hall Structure", category: "Commercial", location: "Coimbatore" },
];

function WorksPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { t } = useLanguage();

  const categoryKeys = [
    { value: "All", key: "works.all" as const },
    { value: "Residential", key: "works.residential" as const },
    { value: "Commercial", key: "works.commercial" as const },
    { value: "Agricultural", key: "works.agricultural" as const },
    { value: "Custom", key: "works.customCat" as const },
  ];

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
            {t("works.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground">
            {t("works.sub")}
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
            {categoryKeys.map((cat) => (
              <motion.button
                key={cat.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === cat.value
                    ? "bg-primary text-primary-foreground glow-gold"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(cat.key)}
              </motion.button>
            ))}
          </AnimatedSection>

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
                    <p className="text-xs text-muted-foreground mt-1">{p.location}, Tamil Nadu</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

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
