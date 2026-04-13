import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Anand Constructions" },
      { name: "description", content: "Frequently asked questions about our shed construction services, pricing, and timelines." },
      { property: "og:title", content: "FAQ — Anand Constructions" },
      { property: "og:description", content: "Common questions about shed construction in Tamil Nadu." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { qEn: "What types of sheds do you construct?", qTa: "நீங்கள் எந்த வகையான கொட்டகைகளை கட்டுகிறீர்கள்?", aEn: "We construct a wide range of sheds including residential car parking sheds, commercial warehouses, agricultural storage sheds, poultry farm sheds, industrial structures, and custom-designed architectural sheds.", aTa: "குடியிருப்பு கார் நிறுத்த கொட்டகைகள், வணிக கிடங்குகள், விவசாய சேமிப்பு கொட்டகைகள், கோழி பண்ணை கொட்டகைகள், தொழிற்சாலை கட்டமைப்புகள் மற்றும் தனிப்பயன் கட்டிடக்கலை கொட்டகைகள் உட்பட பல்வேறு வகையான கொட்டகைகளை கட்டுகிறோம்." },
  { qEn: "What areas in Tamil Nadu do you serve?", qTa: "தமிழ்நாட்டில் எந்தெந்த பகுதிகளில் சேவை செய்கிறீர்கள்?", aEn: "We serve all districts across Tamil Nadu including Namakkal, Salem, Erode, Coimbatore, Karur, Trichy, Dharmapuri, and more. We also take projects in neighboring states for larger contracts.", aTa: "நாமக்கல், சேலம், ஈரோடு, கோயம்புத்தூர், கரூர், திருச்சி, தர்மபுரி உள்ளிட்ட தமிழ்நாட்டின் அனைத்து மாவட்டங்களிலும் சேவை செய்கிறோம்." },
  { qEn: "How long does a typical shed construction take?", qTa: "ஒரு கொட்டகை கட்ட எவ்வளவு நேரம் ஆகும்?", aEn: "The timeline depends on the project size and complexity. A residential shed typically takes 2-4 weeks, while larger commercial projects may take 6-12 weeks. We always provide a clear timeline during consultation.", aTa: "காலஅவகாசம் திட்டத்தின் அளவு மற்றும் சிக்கலான தன்மையைப் பொறுத்தது. குடியிருப்பு கொட்டகை 2-4 வாரங்கள், பெரிய வணிக திட்டங்கள் 6-12 வாரங்கள் ஆகலாம்." },
  { qEn: "What materials do you use?", qTa: "என்ன பொருட்களை பயன்படுத்துகிறீர்கள்?", aEn: "We use premium-grade structural steel, galvanized steel for corrosion resistance, high-quality roofing sheets (color-coated, polycarbonate, or GI sheets), and concrete foundations. All materials come with quality certifications.", aTa: "தரமான கட்டமைப்பு எஃகு, துருப்பிடிக்காத கால்வனேற்றப்பட்ட எஃகு, உயர்தர கூரை தாள்கள் மற்றும் கான்கிரீட் அடித்தளங்களைப் பயன்படுத்துகிறோம்." },
  { qEn: "Do you provide design and engineering services?", qTa: "வடிவமைப்பு மற்றும் பொறியியல் சேவைகளை வழங்குகிறீர்களா?", aEn: "Yes! Our in-house team creates custom structural designs and engineering drawings. We handle everything from initial concept and 3D visualization to final construction drawings and municipal approvals.", aTa: "ஆம்! எங்கள் குழு தனிப்பயன் கட்டமைப்பு வடிவமைப்புகள் மற்றும் பொறியியல் வரைபடங்களை உருவாக்குகிறது." },
  { qEn: "What is the approximate cost of shed construction?", qTa: "கொட்டகை கட்டுமானத்தின் தோராயமான விலை என்ன?", aEn: "Costs vary based on size, design, materials, and location. A basic residential shed starts from ₹350-500 per sq ft, while commercial structures range from ₹400-700 per sq ft. We provide free detailed quotations.", aTa: "விலை அளவு, வடிவமைப்பு, பொருட்கள் மற்றும் இடத்தைப் பொறுத்து மாறுபடும். அடிப்படை குடியிருப்பு கொட்டகை சதுர அடிக்கு ₹350-500 முதல் தொடங்கும்." },
  { qEn: "Do you offer any warranty?", qTa: "உத்தரவாதம் வழங்குகிறீர்களா?", aEn: "Yes, we provide a comprehensive warranty on all our constructions — typically 5 years on structural integrity and 1-2 years on roofing and accessories. We also offer post-construction maintenance support.", aTa: "ஆம், அனைத்து கட்டுமானங்களுக்கும் விரிவான உத்தரவாதம் வழங்குகிறோம் — கட்டமைப்பு ஒருமைப்பாட்டிற்கு 5 ஆண்டுகள் மற்றும் கூரைக்கு 1-2 ஆண்டுகள்." },
  { qEn: "Can you renovate or repair existing sheds?", qTa: "இருக்கும் கொட்டகைகளை புதுப்பிக்க முடியுமா?", aEn: "Absolutely! We specialize in shed renovation, upgrades, and repairs. Whether it's replacing damaged roofing, strengthening the structure, or a complete makeover — we handle it all.", aTa: "நிச்சயமாக! கொட்டகை புதுப்பித்தல், மேம்படுத்தல் மற்றும் பழுதுபார்ப்பில் நிபுணத்துவம் பெற்றுள்ளோம்." },
  { qEn: "How do I get started with a project?", qTa: "ஒரு திட்டத்தை எப்படி தொடங்குவது?", aEn: "Simply reach out through our contact form, call us, or send a WhatsApp message. We'll schedule a free site visit and consultation, after which we'll provide a detailed proposal and quotation.", aTa: "எங்கள் தொடர்பு படிவம், தொலைபேசி அல்லது WhatsApp மூலம் தொடர்பு கொள்ளுங்கள். இலவச தள பார்வை மற்றும் ஆலோசனை திட்டமிடுவோம்." },
  { qEn: "Do you handle permits and approvals?", qTa: "அனுமதிகள் மற்றும் ஒப்புதல்களை கையாள்வீர்களா?", aEn: "Yes, we assist with all necessary permits and municipal approvals required for shed construction. Our team is experienced with local regulations across Tamil Nadu.", aTa: "ஆம், கொட்டகை கட்டுமானத்திற்கு தேவையான அனைத்து அனுமதிகள் மற்றும் நகராட்சி ஒப்புதல்களிலும் உதவுகிறோம்." },
];

function FAQPage() {
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
            {t("faq.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-lg text-muted-foreground">
            {t("faq.sub")}
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
                      {lang === "ta" ? faq.qTa : faq.qEn}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {lang === "ta" ? faq.aTa : faq.aEn}
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
