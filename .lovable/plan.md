

# Plan: Tamil/English Toggle + Business Info Update

## Changes Overview

### 1. Create Translation System
- Create `src/lib/i18n.tsx` — a React context with `useLanguage()` hook and `LanguageProvider`
- Contains all English and Tamil translations for every text string across all 7 pages, header, and footer
- Stores language preference in localStorage
- Toggle between "EN" and "தமிழ்"

### 2. Add Language Toggle to Header
- Add a toggle button (EN / தமிழ்) in the header nav bar (desktop and mobile)
- Animated switch style matching the dark/gold theme

### 3. Update Business Details (all pages)
- **Company name**: "Kerala Shed Works" → "Anand Constructions"
- **Phone**: +91 98765 43210 → 7010058764
- **Email**: info@keralashedworks.com → anand.constructions@gmail.com
- **Location**: Kochi, Kerala → Namakkal, Tamil Nadu
- **WhatsApp link**: Update to 917010058764

### 4. Update Stats (Home + About)
- 10+ years experience (not 15)
- 100+ happy clients (not 450)
- 100+ projects (not 500)
- Remove "Awards Won" counter entirely
- Update milestones timeline to match 10+ years

### 5. Update All Page Content for Tamil Context
- Change "Kerala" references to "Tamil Nadu" / "Namakkal"
- Update review locations to Tamil Nadu cities
- Update FAQ answers for Tamil Nadu context
- Update SEO meta tags across all routes

### Files Modified
- **New**: `src/lib/i18n.tsx` (translation context + all strings)
- **Edit**: `src/routes/__root.tsx` (wrap with LanguageProvider)
- **Edit**: `src/components/Header.tsx` (add toggle, use translations)
- **Edit**: `src/components/Footer.tsx` (use translations, update contact)
- **Edit**: `src/routes/index.tsx` (translations, updated stats)
- **Edit**: `src/routes/services.tsx` (translations)
- **Edit**: `src/routes/works.tsx` (translations, Tamil Nadu locations)
- **Edit**: `src/routes/about.tsx` (translations, updated stats/timeline)
- **Edit**: `src/routes/reviews.tsx` (translations, Tamil Nadu locations)
- **Edit**: `src/routes/faq.tsx` (translations, Tamil Nadu context)
- **Edit**: `src/routes/contact.tsx` (translations, updated contact info)

### Fix Hydration Error
- The Footer has a hydration mismatch with email text — will fix inline text rendering

