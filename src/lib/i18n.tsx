import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "en" | "ta";

const translations = {
  // Header
  "nav.home": { en: "Home", ta: "முகப்பு" },
  "nav.services": { en: "Services", ta: "சேவைகள்" },
  "nav.works": { en: "Works", ta: "பணிகள்" },
  "nav.about": { en: "About", ta: "எங்களை பற்றி" },
  "nav.reviews": { en: "Reviews", ta: "மதிப்புரைகள்" },
  "nav.faq": { en: "FAQ", ta: "கேள்விகள்" },
  "nav.contact": { en: "Contact", ta: "தொடர்பு" },

  // Footer
  "footer.tagline": {
    en: "Premium shed construction services across Tamil Nadu. Quality craftsmanship with 10+ years of experience.",
    ta: "தமிழ்நாடு முழுவதும் தரமான கொட்டகை கட்டுமான சேவைகள். 10+ ஆண்டுகள் அனுபவம்.",
  },
  "footer.quickLinks": { en: "Quick Links", ta: "விரைவு இணைப்புகள்" },
  "footer.contactInfo": { en: "Contact Info", ta: "தொடர்பு தகவல்" },
  "footer.rights": { en: "All rights reserved.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },

  // Home
  "home.hero": { en: "Building Tamil Nadu's Finest Sheds", ta: "தமிழ்நாட்டின் சிறந்த கொட்டகைகளை கட்டுகிறோம்" },
  "home.heroSub": {
    en: "10+ years of expertise in crafting premium steel structures across Tamil Nadu. From residential to industrial — we build it all.",
    ta: "தமிழ்நாடு முழுவதும் தரமான இரும்பு கட்டமைப்புகளை உருவாக்குவதில் 10+ ஆண்டுகள் அனுபவம். குடியிருப்பு முதல் தொழிற்சாலை வரை — அனைத்தையும் நாங்கள் கட்டுகிறோம்.",
  },
  "home.getQuote": { en: "Get a Free Quote", ta: "இலவச மதிப்பீடு பெறுங்கள்" },
  "home.viewWorks": { en: "View Our Works", ta: "எங்கள் பணிகளை பாருங்கள்" },
  "home.projectsDone": { en: "Projects Done", ta: "முடிக்கப்பட்ட திட்டங்கள்" },
  "home.yearsExp": { en: "Years Experience", ta: "ஆண்டுகள் அனுபவம்" },
  "home.happyClients": { en: "Happy Clients", ta: "மகிழ்ச்சியான வாடிக்கையாளர்கள்" },
  "home.featuredWorks": { en: "Featured Works", ta: "சிறப்பு பணிகள்" },
  "home.featuredSub": { en: "A glimpse of our recent masterpieces", ta: "எங்கள் சமீபத்திய சிறந்த படைப்புகள்" },
  "home.viewAll": { en: "View All Projects", ta: "அனைத்து திட்டங்களையும் பாருங்கள்" },
  "home.clientsSay": { en: "What Clients Say", ta: "வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்" },
  "home.ctaTitle": { en: "Ready to Build Your Dream Shed?", ta: "உங்கள் கனவு கொட்டகையை கட்ட தயாரா?" },
  "home.ctaSub": { en: "Get a free consultation and quote today. We'll bring your vision to life.", ta: "இன்றே இலவச ஆலோசனையும் மதிப்பீடும் பெறுங்கள். உங்கள் கனவை நனவாக்குவோம்." },
  "home.contactNow": { en: "Contact Us Now", ta: "இப்போது தொடர்பு கொள்ளுங்கள்" },

  // Services
  "services.title": { en: "Our Services", ta: "எங்கள் சேவைகள்" },
  "services.sub": {
    en: "From concept to completion, we deliver premium shed construction services with unmatched quality and craftsmanship.",
    ta: "கருத்து முதல் நிறைவு வரை, ஒப்பற்ற தரம் மற்றும் கைவினைத்திறனுடன் தரமான கொட்டகை கட்டுமான சேவைகளை வழங்குகிறோம்.",
  },
  "services.residential": { en: "Residential Sheds", ta: "குடியிருப்பு கொட்டகைகள்" },
  "services.residentialDesc": { en: "Beautiful, durable sheds for your home — car parking, garden, storage & more.", ta: "உங்கள் வீட்டிற்கான அழகான, நீடித்த கொட்டகைகள் — கார் நிறுத்தம், தோட்டம், சேமிப்பு மற்றும் பல." },
  "services.commercial": { en: "Commercial Sheds", ta: "வணிக கொட்டகைகள்" },
  "services.commercialDesc": { en: "Large-scale industrial and commercial warehouse structures built to last.", ta: "நீண்ட காலம் நிலைக்கும் பெரிய அளவிலான தொழிற்சாலை மற்றும் வணிக கிடங்கு கட்டமைப்புகள்." },
  "services.custom": { en: "Custom Designs", ta: "தனிப்பயன் வடிவமைப்புகள்" },
  "services.customDesc": { en: "Unique architectural designs tailored to your exact requirements and vision.", ta: "உங்கள் தேவைகள் மற்றும் கற்பனைக்கு ஏற்ற தனித்துவ கட்டிடக்கலை வடிவமைப்புகள்." },
  "services.renovation": { en: "Renovation & Repair", ta: "புதுப்பித்தல் & பழுதுபார்ப்பு" },
  "services.renovationDesc": { en: "Upgrade and repair existing sheds with modern materials and techniques.", ta: "நவீன பொருட்கள் மற்றும் நுட்பங்களுடன் இருக்கும் கொட்டகைகளை மேம்படுத்தவும் பழுதுபார்க்கவும்." },
  "services.agricultural": { en: "Agricultural Sheds", ta: "விவசாய கொட்டகைகள்" },
  "services.agriculturalDesc": { en: "Spacious, well-ventilated structures for farming, livestock, and storage.", ta: "விவசாயம், கால்நடை மற்றும் சேமிப்புக்கான பரந்த, நல்ல காற்றோட்ட கட்டமைப்புகள்." },
  "services.poultry": { en: "Poultry & Dairy Sheds", ta: "கோழி & பால் பண்ணை கொட்டகைகள்" },
  "services.poultryDesc": { en: "Specialized climate-controlled sheds for poultry farms and dairy units.", ta: "கோழி பண்ணைகள் மற்றும் பால் பண்ணை அலகுகளுக்கான சிறப்பு கொட்டகைகள்." },
  "services.process": { en: "Our Process", ta: "எங்கள் செயல்முறை" },
  "services.processSub": { en: "Simple, transparent, and efficient", ta: "எளிமையான, வெளிப்படையான மற்றும் திறமையான" },
  "services.step1": { en: "Consultation", ta: "ஆலோசனை" },
  "services.step1Desc": { en: "Discuss your needs and vision with our experts", ta: "எங்கள் நிபுணர்களுடன் உங்கள் தேவைகளை கலந்தாலோசிக்கவும்" },
  "services.step2": { en: "Design", ta: "வடிவமைப்பு" },
  "services.step2Desc": { en: "Custom design plans tailored to your requirements", ta: "உங்கள் தேவைகளுக்கு ஏற்ற தனிப்பயன் வடிவமைப்பு திட்டங்கள்" },
  "services.step3": { en: "Construction", ta: "கட்டுமானம்" },
  "services.step3Desc": { en: "Expert team builds with premium materials", ta: "தரமான பொருட்களுடன் நிபுணர் குழு கட்டுகிறது" },
  "services.step4": { en: "Handover", ta: "ஒப்படைப்பு" },
  "services.step4Desc": { en: "Quality inspection and project delivery", ta: "தர ஆய்வு மற்றும் திட்ட வழங்கல்" },

  // Works
  "works.title": { en: "Our Works", ta: "எங்கள் பணிகள்" },
  "works.sub": { en: "Every project tells a story of precision, quality, and trust.", ta: "ஒவ்வொரு திட்டமும் துல்லியம், தரம் மற்றும் நம்பிக்கையின் கதையைச் சொல்கிறது." },
  "works.all": { en: "All", ta: "அனைத்தும்" },
  "works.residential": { en: "Residential", ta: "குடியிருப்பு" },
  "works.commercial": { en: "Commercial", ta: "வணிகம்" },
  "works.agricultural": { en: "Agricultural", ta: "விவசாயம்" },
  "works.customCat": { en: "Custom", ta: "தனிப்பயன்" },

  // About
  "about.title": { en: "About Us", ta: "எங்களை பற்றி" },
  "about.sub": { en: "A legacy of quality construction, built on trust and dedication.", ta: "நம்பிக்கை மற்றும் அர்ப்பணிப்பின் மீது கட்டப்பட்ட தரமான கட்டுமான பாரம்பரியம்." },
  "about.founderTitle": { en: "The Man Behind the Work", ta: "பணிக்குப் பின்னால் உள்ள மனிதர்" },
  "about.founderP1": {
    en: "With years of hands-on experience in steel shed construction, our founder has built a reputation for delivering exceptional quality across Tamil Nadu. What started as a small contracting business has grown into one of the most trusted names in shed construction.",
    ta: "இரும்பு கொட்டகை கட்டுமானத்தில் பல ஆண்டுகள் நேரடி அனுபவத்துடன், எங்கள் நிறுவனர் தமிழ்நாடு முழுவதும் சிறந்த தரத்தை வழங்குவதில் நற்பெயரை பெற்றுள்ளார்.",
  },
  "about.founderP2": {
    en: "Every project is personally supervised to ensure the highest standards of craftsmanship, safety, and customer satisfaction. Our commitment to using premium materials and modern techniques sets us apart from the competition.",
    ta: "ஒவ்வொரு திட்டமும் கைவினைத்திறன், பாதுகாப்பு மற்றும் வாடிக்கையாளர் திருப்தியின் உயர்ந்த தரநிலைகளை உறுதிசெய்ய தனிப்பட்ட முறையில் மேற்பார்வையிடப்படுகிறது.",
  },
  "about.yearsExp": { en: "Years Experience", ta: "ஆண்டுகள் அனுபவம்" },
  "about.projectsDelivered": { en: "Projects Delivered", ta: "வழங்கப்பட்ட திட்டங்கள்" },
  "about.journey": { en: "Our Journey", ta: "எங்கள் பயணம்" },

  // Reviews
  "reviews.title": { en: "Client Reviews", ta: "வாடிக்கையாளர் மதிப்புரைகள்" },
  "reviews.sub": { en: "Real stories from our valued customers across Tamil Nadu", ta: "தமிழ்நாடு முழுவதும் உள்ள எங்கள் மதிப்புமிக்க வாடிக்கையாளர்களின் உண்மையான கதைகள்" },
  "reviews.avgRating": { en: "4.9/5 Average Rating", ta: "4.9/5 சராசரி மதிப்பீடு" },

  // FAQ
  "faq.title": { en: "FAQ", ta: "அடிக்கடி கேட்கப்படும் கேள்விகள்" },
  "faq.sub": { en: "Everything you need to know about our services", ta: "எங்கள் சேவைகளைப் பற்றி நீங்கள் தெரிந்துகொள்ள வேண்டிய அனைத்தும்" },

  // Contact
  "contact.title": { en: "Contact Us", ta: "எங்களை தொடர்பு கொள்ளுங்கள்" },
  "contact.sub": { en: "Let's discuss your project. Get a free quote today.", ta: "உங்கள் திட்டத்தை விவாதிப்போம். இன்றே இலவச மதிப்பீடு பெறுங்கள்." },
  "contact.name": { en: "Full Name", ta: "முழு பெயர்" },
  "contact.namePlaceholder": { en: "Your name", ta: "உங்கள் பெயர்" },
  "contact.phone": { en: "Phone Number", ta: "தொலைபேசி எண்" },
  "contact.email": { en: "Email Address", ta: "மின்னஞ்சல் முகவரி" },
  "contact.projectType": { en: "Project Type", ta: "திட்ட வகை" },
  "contact.selectType": { en: "Select project type", ta: "திட்ட வகையை தேர்ந்தெடுக்கவும்" },
  "contact.message": { en: "Your Message", ta: "உங்கள் செய்தி" },
  "contact.messagePlaceholder": { en: "Tell us about your project...", ta: "உங்கள் திட்டத்தைப் பற்றி சொல்லுங்கள்..." },
  "contact.send": { en: "Send Message", ta: "செய்தி அனுப்பு" },
  "contact.sent": { en: "Message Sent!", ta: "செய்தி அனுப்பப்பட்டது!" },
  "contact.sentSub": { en: "We'll get back to you within 24 hours.", ta: "24 மணி நேரத்திற்குள் உங்களை தொடர்பு கொள்வோம்." },
  "contact.sendAnother": { en: "Send Another Message", ta: "மற்றொரு செய்தி அனுப்பு" },
  "contact.getInTouch": { en: "Get in Touch", ta: "தொடர்பில் இருங்கள்" },
  "contact.phoneLbl": { en: "Phone", ta: "தொலைபேசி" },
  "contact.emailLbl": { en: "Email", ta: "மின்னஞ்சல்" },
  "contact.locationLbl": { en: "Location", ta: "இடம்" },
  "contact.whatsapp": { en: "Chat on WhatsApp", ta: "WhatsApp இல் உரையாடுங்கள்" },
  "contact.mapLocation": { en: "Namakkal, Tamil Nadu", ta: "நாமக்கல், தமிழ்நாடு" },
  "contact.mapSub": { en: "Serving all districts across Tamil Nadu", ta: "தமிழ்நாடு முழுவதும் சேவை செய்கிறோம்" },
  "contact.residential": { en: "Residential Shed", ta: "குடியிருப்பு கொட்டகை" },
  "contact.commercialInd": { en: "Commercial / Industrial", ta: "வணிக / தொழிற்சாலை" },
  "contact.agriculturalShed": { en: "Agricultural Shed", ta: "விவசாய கொட்டகை" },
  "contact.customDesign": { en: "Custom Design", ta: "தனிப்பயன் வடிவமைப்பு" },
  "contact.renovationRepair": { en: "Renovation / Repair", ta: "புதுப்பித்தல் / பழுதுபார்ப்பு" },
  "contact.other": { en: "Other", ta: "மற்றவை" },
} as const;

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => translations[key]?.en ?? key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ta") setLang("ta");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const t = (key: TranslationKey) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export type { TranslationKey };
