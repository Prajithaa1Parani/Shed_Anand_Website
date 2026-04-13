import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Anand Constructions" },
      { name: "description", content: "Read what our satisfied clients say about Anand Constructions shed construction services." },
      { property: "og:title", content: "Reviews — Anand Constructions" },
      { property: "og:description", content: "Read what our satisfied clients say." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Rajesh Kumar", location: "Salem", rating: 5, textEn: "Exceptional quality work! The industrial shed was completed ahead of schedule. The team was professional and kept us informed throughout the project. Highly recommended!", textTa: "சிறந்த தரமான வேலை! தொழிற்சாலை கொட்டகை நிர்ணயிக்கப்பட்ட நேரத்திற்கு முன்னரே முடிக்கப்பட்டது. குழு மிகவும் தொழில்முறையானது!" },
  { name: "Priya Devi", location: "Namakkal", rating: 5, textEn: "We needed a custom-designed shed for our farmhouse, and they delivered beyond our expectations. The attention to detail was remarkable.", textTa: "எங்கள் பண்ணை வீட்டிற்கு தனிப்பயன் கொட்டகை தேவைப்பட்டது, அவர்கள் எதிர்பார்ப்புக்கு அப்பால் வழங்கினார்கள்." },
  { name: "Anil Murugan", location: "Erode", rating: 5, textEn: "Best shed construction service in Tamil Nadu. The quality of steel and workmanship is top-notch. Our warehouse has withstood two monsoon seasons without any issues.", textTa: "தமிழ்நாட்டிலேயே சிறந்த கொட்டகை கட்டுமான சேவை. எஃகு மற்றும் வேலைப்பாடு தரம் மிகச்சிறந்தது." },
  { name: "Suresh Rajan", location: "Karur", rating: 5, textEn: "Very professional team. They understood our requirements perfectly for our poultry farm shed. The ventilation design was exactly what we needed.", textTa: "மிகவும் தொழில்முறையான குழு. எங்கள் கோழி பண்ணை கொட்டகைக்கான தேவைகளை சரியாக புரிந்துகொண்டார்கள்." },
  { name: "Meera Lakshmi", location: "Coimbatore", rating: 4, textEn: "Great experience working with Anand Constructions. Our car parking shed looks amazing and the whole process was smooth and hassle-free.", textTa: "Anand Constructions உடன் பணிபுரிந்த அனுபவம் அருமை. எங்கள் கார் நிறுத்த கொட்டகை அற்புதமாக உள்ளது." },
  { name: "Deepak Selvam", location: "Dharmapuri", rating: 5, textEn: "Outstanding work on our commercial warehouse. The structural integrity and finishing quality are exceptional. Will definitely use their services again.", textTa: "எங்கள் வணிக கிடங்கில் சிறந்த வேலை. கட்டமைப்பு ஒருமைப்பாடு மற்றும் முடிப்பு தரம் அசாதாரணமானது." },
  { name: "Lakshmi Priya", location: "Tiruchengode", rating: 5, textEn: "They renovated our old shed and it looks brand new. The team was respectful, clean, and completed the work within the quoted budget.", textTa: "எங்கள் பழைய கொட்டகையை புதுப்பித்தார்கள், இப்போது புத்தம் புதியதாக தெரிகிறது." },
  { name: "Vijay Kumar", location: "Trichy", rating: 5, textEn: "From consultation to completion, every step was transparent. Our agricultural shed is perfect for our needs. Thank you for the excellent work!", textTa: "ஆலோசனை முதல் நிறைவு வரை ஒவ்வொரு படியும் வெளிப்படையாக இருந்தது. எங்கள் விவசாய கொட்டகை எங்கள் தேவைகளுக்கு சரியானது." },
];

function ReviewsPage() {
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
            {t("reviews.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground">
            {t("reviews.sub")}
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
            <span className="text-sm font-medium text-foreground">{t("reviews.avgRating")}</span>
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
                  <p className="text-sm text-muted-foreground leading-relaxed italic">&ldquo;{lang === "ta" ? r.textTa : r.textEn}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.location}, Tamil Nadu</p>
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
