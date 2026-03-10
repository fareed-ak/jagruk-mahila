// ============================================================
// constants/constitutionData.js
// Jagruk Mahila — Indian Constitution & Women
//
// RENDERING GUIDE FOR constitution.jsx
// ─────────────────────────────────────
// This file exports a single object: CONSTITUTION_DATA
//
// NAVIGATION LEVELS (3 levels deep):
//
//   Level 0 — SUBCATEGORY LIST (constitution.jsx entry screen)
//     Render: CONSTITUTION_DATA.subcategories[]
//     Show:   item.label[lang], item.description[lang], item.icon
//     Action: router.push with subcategoryId
//
//   Level 1 — ITEMS LIST (list of articles / topics)
//     Render: subcategory.items[]
//     Show:   item.title[lang], item.subtitle[lang], item.icon
//     Action: router.push with itemId  OR  open modal (your choice)
//
//   Level 2 — ITEM DETAIL (full article content)
//     Render: item.sections[]
//     Each section has a "type":
//
//       type: 'constitutional_text'
//         → Render as a highlighted notice box
//         → Fields: section.text[lang]
//
//       type: 'points'
//         → Render as a bulleted list
//         → Fields: section.heading[lang], section.points[]
//         → Each point: { bold[lang], text[lang] }
//         → If point.bold is empty string — skip bold label, just show text
//
//       type: 'highlight'
//         → Render as a colored callout/info card
//         → Fields: section.heading[lang], section.text[lang]
//
//       type: 'text'
//         → Render as plain paragraph
//         → Fields: section.heading[lang] (optional), section.text[lang]
//
// LANGUAGE KEY:
//   Always access content as:  field[currentLanguage] || field.en
//   currentLanguage comes from: i18n.language  ('en' | 'hi' | 'ur')
//
// TRANSLATION STATUS:
//   [x] English  — complete
//   [ ] Hindi    — fill in hi: '' fields
//   [ ] Urdu     — fill in ur: '' fields
// ============================================================

export const CONSTITUTION_DATA = {
  id: 'indian_constitution',
  icon: 'account_balance',
  label: {
    en: 'Indian Constitution & Women',
    hi: 'भारतीय संविधान और महिलाएं',
    ur: 'ہندوستانی آئین اور خواتین',
  },
  description: {
    en: 'Explore the constitutional provisions and rights that protect and empower women in India',
    hi: 'भारत में महिलाओं की रक्षा और सशक्तिकरण के लिए संवैधानिक प्रावधानों और अधिकारों का अन्वेषण करें',
    ur: 'ہندوستان میں خواتین کی حفاظت اور بااختیار بنانے والے آئینی احکامات اور حقوق کو جانیں',
  },

  subcategories: [

    // ══════════════════════════════════════════════════════
    // SUBCATEGORY 1 — FUNDAMENTAL RIGHTS OF WOMEN
    // ══════════════════════════════════════════════════════
    {
      id: 'fundamental_rights',
      icon: 'gavel',
      label: {
        en: 'Fundamental Rights of Women',
        hi: 'महिलाओं के मौलिक अधिकार',
        ur: 'خواتین کے بنیادی حقوق',
      },
      description: {
        en: 'Constitutional articles that guarantee equality and protection for women',
        hi: 'संवैधानिक अनुच्छेद जो महिलाओं के लिए समानता और सुरक्षा की गारंटी देते हैं',
        ur: 'آئینی دفعات جو خواتین کے لیے مساوات اور تحفظ کی ضمانت دیتی ہیں',
      },

      items: [

        // ─── ARTICLE 14 ───────────────────────────────────
        {
          id: 'article_14',
          icon: 'balance',
          title: {
            en: 'Article 14 — Equality before Law',
            hi: 'अनुच्छेद 14 — कानून के समक्ष समानता',
            ur: 'آرٹیکل 14 — قانون کے سامنے مساوات',
          },
          subtitle: {
            en: 'Constitutional guarantee of equal treatment under law for all citizens',
            hi: 'सभी नागरिकों के लिए कानून के तहत समान व्यवहार की संवैधानिक गारंटी',
            ur: 'تمام شہریوں کے لیے قانون کے تحت یکساں سلوک کی آئینی ضمانت',
          },
          sections: [
            {
              id: 'constitutional_text',
              type: 'constitutional_text',
              heading: {
                en: 'Constitutional Text',
                hi: 'संवैधानिक पाठ',
                ur: 'آئینی متن',
              },
              text: {
                en: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
                hi: 'राज्य, भारत के राज्यक्षेत्र में किसी व्यक्ति को विधि के समक्ष समता से या विधियों के समान संरक्षण से वंचित नहीं करेगा।',
                ur: 'ریاست، ہندوستان کے علاقے میں کسی بھی شخص کو قانون کے سامنے مساوات یا قوانین کے یکساں تحفظ سے محروم نہیں کرے گی۔',
              },
            },
            {
              id: 'key_principles',
              type: 'points',
              heading: {
                en: 'Key Principles',
                hi: 'मुख्य सिद्धांत',
                ur: 'اہم اصول',
              },
              points: [
                {
                  bold: { en: 'Equality before Law', hi: 'कानून के समक्ष समानता', ur: 'قانون کے سامنے مساوات' },
                  text: { en: 'All persons, regardless of gender, status, or background, are subject to the same laws and legal procedures.', hi: 'सभी व्यक्ति, चाहे उनका लिंग, स्थिति या पृष्ठभूमि कुछ भी हो, एक ही कानून और कानूनी प्रक्रियाओं के अधीन हैं।', ur: 'تمام افراد، چاہے ان کی جنس، حیثیت یا پس منظر کچھ بھی ہو، ایک ہی قوانین اور قانونی طریقہ کار کے تابع ہیں۔' },
                },
                {
                  bold: { en: 'Equal Protection of Laws', hi: 'कानूनों का समान संरक्षण', ur: 'قوانین کا یکساں تحفظ' },
                  text: { en: 'The law must provide equal protection and cannot discriminate between persons in similar circumstances.', hi: 'कानून को समान सुरक्षा प्रदान करनी होगी और समान परिस्थितियों में व्यक्तियों के बीच भेदभाव नहीं कर सकता।', ur: 'قانون کو یکساں تحفظ فراہم کرنا ہوگا اور ملتے جلتے حالات میں افراد کے درمیان امتیاز نہیں کر سکتا۔' },
                },
                {
                  bold: { en: 'Rule of Law', hi: 'कानून का शासन', ur: 'قانون کی حکمرانی' },
                  text: { en: 'No person is above the law, and everyone has equal access to legal remedies and justice.', hi: 'कोई भी व्यक्ति कानून से ऊपर नहीं है, और सभी को कानूनी उपाय और न्याय तक समान पहुंच है।', ur: 'کوئی بھی شخص قانون سے بالاتر نہیں ہے، اور سب کو قانونی علاج اور انصاف تک یکساں رسائی حاصل ہے۔' },
                },
              ],
            },
            {
              id: 'significance_for_women',
              type: 'points',
              heading: {
                en: 'Significance for Women',
                hi: 'महिलाओं के लिए महत्व',
                ur: 'خواتین کے لیے اہمیت',
              },
              points: [
                {
                  bold: { en: 'Gender Equality', hi: 'लैंगिक समानता', ur: 'صنفی مساوات' },
                  text: { en: 'Ensures women have the same legal rights and protections as men under Indian law.', hi: 'यह सुनिश्चित करता है कि महिलाओं को भारतीय कानून के तहत पुरुषों जैसे समान कानूनी अधिकार और सुरक्षा प्राप्त है।', ur: 'یقینی بناتا ہے کہ خواتین کو ہندوستانی قانون کے تحت مردوں جیسے یکساں قانونی حقوق اور تحفظ حاصل ہیں۔' },
                },
                {
                  bold: { en: 'Access to Justice', hi: 'न्याय तक पहुंच', ur: 'انصاف تک رسائی' },
                  text: { en: 'Guarantees women equal access to courts and legal remedies without discrimination.', hi: 'बिना भेदभाव के महिलाओं को न्यायालयों और कानूनी उपायों तक समान पहुंच की गारंटी देता है।', ur: 'بغیر امتیاز کے خواتین کو عدالتوں اور قانونی علاج تک یکساں رسائی کی ضمانت دیتا ہے۔' },
                },
                {
                  bold: { en: 'Legal Protection', hi: 'कानूनी संरक्षण', ur: 'قانونی تحفظ' },
                  text: { en: 'Provides constitutional foundation for challenging discriminatory laws and practices.', hi: 'भेदभावपूर्ण कानूनों और प्रथाओं को चुनौती देने के लिए संवैधानिक आधार प्रदान करता है।', ur: 'امتیازی قوانین اور طریقوں کو چیلنج کرنے کے لیے آئینی بنیاد فراہم کرتا ہے۔' },
                },
              ],
            },
            {
              id: 'landmark_cases',
              type: 'highlight',
              heading: {
                en: 'Landmark Cases',
                hi: 'महत्वपूर्ण मामले',
                ur: 'اہم مقدمات',
              },
              text: {
                en: 'Article 14 has been instrumental in several landmark cases promoting women\'s rights, including cases on equal pay, property rights, and protection from discrimination in employment and education.',
                hi: 'अनुच्छेद 14 महिलाओं के अधिकारों को बढ़ावा देने वाले कई ऐतिहासिक मामलों में महत्वपूर्ण रहा है, जिसमें समान वेतन, संपत्ति अधिकार और रोजगार व शिक्षा में भेदभाव से सुरक्षा के मामले शामिल हैं।',
                ur: 'آرٹیکل 14 خواتین کے حقوق کو فروغ دینے والے کئی اہم مقدمات میں کلیدی کردار ادا کر چکا ہے، جن میں مساوی اجرت، جائیداد کے حقوق اور روزگار و تعلیم میں امتیاز سے تحفظ کے مقدمات شامل ہیں۔',
              },
            },
          ],
        },

        // ─── ARTICLE 15 ───────────────────────────────────
        {
          id: 'article_15',
          icon: 'block',
          title: {
            en: 'Article 15 — Prohibition of Discrimination',
            hi: 'अनुच्छेद 15 — भेदभाव का निषेध',
            ur: 'آرٹیکل 15 — امتیاز کی ممانعت',
          },
          subtitle: {
            en: 'Constitutional protection against discrimination based on gender and other grounds',
            hi: 'लिंग और अन्य आधारों पर भेदभाव के विरुद्ध संवैधानिक सुरक्षा',
            ur: 'جنس اور دیگر بنیادوں پر امتیاز کے خلاف آئینی تحفظ',
          },
          sections: [
            {
              id: 'constitutional_text',
              type: 'constitutional_text',
              heading: { en: 'Constitutional Text', hi: 'संवैधानिक पाठ', ur: 'آئینی متن' },
              text: {
                en: 'The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.',
                hi: 'राज्य किसी नागरिक के विरुद्ध केवल धर्म, मूलवंश, जाति, लिंग, जन्म-स्थान या इनमें से किसी के आधार पर विभेद नहीं करेगा।',
                ur: 'ریاست کسی شہری کے خلاف صرف مذہب، نسل، ذات، جنس، جائے پیدائش یا ان میں سے کسی کی بنیاد پر امتیاز نہیں کرے گی۔',
              },
            },
            {
              id: 'prohibited_grounds',
              type: 'points',
              heading: { en: 'Prohibited Grounds of Discrimination', hi: 'भेदभाव के निषिद्ध आधार', ur: 'امتیاز کی ممنوع بنیادیں' },
              points: [
                {
                  bold: { en: 'Sex / Gender', hi: 'लिंग / जेंडर', ur: 'جنس / صنف' },
                  text: { en: 'Discrimination based on being male or female is constitutionally prohibited.', hi: 'पुरुष या महिला होने के आधार पर भेदभाव संवैधानिक रूप से प्रतिबंधित है।', ur: 'مرد یا عورت ہونے کی بنیاد پر امتیاز آئینی طور پر ممنوع ہے۔' },
                },
                {
                  bold: { en: 'Religion', hi: 'धर्म', ur: 'مذہب' },
                  text: { en: 'No discrimination based on religious beliefs or practices.', hi: 'धार्मिक विश्वासों या प्रथाओं के आधार पर कोई भेदभाव नहीं।', ur: 'مذہبی عقائد یا طریقوں کی بنیاد پر کوئی امتیاز نہیں۔' },
                },
                {
                  bold: { en: 'Race and Caste', hi: 'जाति और वर्ण', ur: 'نسل اور ذات' },
                  text: { en: 'Protection against racial and caste-based discrimination.', hi: 'नस्लीय और जाति आधारित भेदभाव के विरुद्ध सुरक्षा।', ur: 'نسلی اور ذات پر مبنی امتیاز کے خلاف تحفظ۔' },
                },
                {
                  bold: { en: 'Place of Birth', hi: 'जन्म-स्थान', ur: 'جائے پیدائش' },
                  text: { en: 'Equal treatment regardless of birthplace or origin.', hi: 'जन्म स्थान या मूल की परवाह किए बिना समान व्यवहार।', ur: 'جائے پیدائش یا اصل سے قطع نظر یکساں سلوک۔' },
                },
              ],
            },
            {
              id: 'special_provisions',
              type: 'points',
              heading: { en: 'Special Provisions for Women', hi: 'महिलाओं के लिए विशेष प्रावधान', ur: 'خواتین کے لیے خصوصی احکامات' },
              points: [
                {
                  bold: { en: 'Article 15(3)', hi: 'अनुच्छेद 15(3)', ur: 'آرٹیکل 15(3)' },
                  text: { en: 'Empowers the State to make special provisions for women and children.', hi: 'राज्य को महिलाओं और बच्चों के लिए विशेष प्रावधान बनाने का अधिकार देता है।', ur: 'ریاست کو خواتین اور بچوں کے لیے خصوصی احکامات بنانے کا اختیار دیتا ہے۔' },
                },
                {
                  bold: { en: 'Positive Discrimination', hi: 'सकारात्मक भेदभाव', ur: 'مثبت امتیاز' },
                  text: { en: 'Allows affirmative action programs specifically for women\'s advancement.', hi: 'महिलाओं की उन्नति के लिए विशेष रूप से सकारात्मक कार्रवाई कार्यक्रमों की अनुमति देता है।', ur: 'خواتین کی ترقی کے لیے خصوصی طور پر مثبت اقدام کے پروگراموں کی اجازت دیتا ہے۔' },
                },
                {
                  bold: { en: 'Protective Legislation', hi: 'सुरक्षात्मक कानून', ur: 'حفاظتی قانون سازی' },
                  text: { en: 'Enables laws for women\'s safety, health, and welfare without being discriminatory.', hi: 'बिना भेदभावपूर्ण हुए महिलाओं की सुरक्षा, स्वास्थ्य और कल्याण के लिए कानून बनाने में सक्षम बनाता है।', ur: 'امتیازی ہوئے بغیر خواتین کی حفاظت، صحت اور فلاح کے لیے قوانین بنانے کے قابل بناتا ہے۔' },
                },
              ],
            },
            {
              id: 'impact',
              type: 'highlight',
              heading: { en: 'Impact on Women\'s Rights', hi: 'महिलाओं के अधिकारों पर प्रभाव', ur: 'خواتین کے حقوق پر اثر' },
              text: {
                en: 'Article 15 has been the foundation for numerous women-centric laws and policies, including reservations in education, employment, and political representation. It provides the constitutional basis for addressing historical disadvantages faced by women.',
                hi: 'अनुच्छेद 15 महिलाओं पर केंद्रित अनेक कानूनों और नीतियों का आधार रहा है, जिसमें शिक्षा, रोजगार और राजनीतिक प्रतिनिधित्व में आरक्षण शामिल है।',
                ur: 'آرٹیکل 15 خواتین پر مرکوز متعدد قوانین اور پالیسیوں کی بنیاد رہا ہے، جن میں تعلیم، روزگار اور سیاسی نمائندگی میں ریزرویشن شامل ہے۔',
              },
            },
            {
              id: 'practical_applications',
              type: 'points',
              heading: { en: 'Practical Applications', hi: 'व्यावहारिक अनुप्रयोग', ur: 'عملی اطلاق' },
              points: [
                {
                  bold: { en: 'Education', hi: 'शिक्षा', ur: 'تعلیم' },
                  text: { en: 'Equal access to educational institutions and scholarships for women.', hi: 'महिलाओं के लिए शैक्षणिक संस्थानों और छात्रवृत्ति तक समान पहुंच।', ur: 'خواتین کے لیے تعلیمی اداروں اور وظائف تک یکساں رسائی۔' },
                },
                {
                  bold: { en: 'Employment', hi: 'रोजगार', ur: 'روزگار' },
                  text: { en: 'Protection against gender-based discrimination in hiring and workplace treatment.', hi: 'भर्ती और कार्यस्थल पर लिंग-आधारित भेदभाव के विरुद्ध सुरक्षा।', ur: 'بھرتی اور کام کی جگہ پر صنفی امتیاز کے خلاف تحفظ۔' },
                },
                {
                  bold: { en: 'Public Services', hi: 'सार्वजनिक सेवाएं', ur: 'سرکاری خدمات' },
                  text: { en: 'Equal access to government services and benefits regardless of gender.', hi: 'लिंग की परवाह किए बिना सरकारी सेवाओं और लाभों तक समान पहुंच।', ur: 'جنس سے قطع نظر سرکاری خدمات اور فوائد تک یکساں رسائی۔' },
                },
              ],
            },
          ],
        },

        // ─── ARTICLE 16 ───────────────────────────────────
        {
          id: 'article_16',
          icon: 'work',
          title: {
            en: 'Article 16 — Equal Opportunity in Employment',
            hi: 'अनुच्छेद 16 — रोजगार में समान अवसर',
            ur: 'آرٹیکل 16 — روزگار میں مساوی مواقع',
          },
          subtitle: {
            en: 'Constitutional guarantee of equal opportunity in public employment',
            hi: 'सार्वजनिक रोजगार में समान अवसर की संवैधानिक गारंटी',
            ur: 'سرکاری ملازمت میں مساوی مواقع کی آئینی ضمانت',
          },
          sections: [
            {
              id: 'constitutional_text',
              type: 'constitutional_text',
              heading: { en: 'Constitutional Text', hi: 'संवैधानिक पाठ', ur: 'آئینی متن' },
              text: {
                en: 'There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.',
                hi: 'राज्य के अधीन किसी पद पर नियोजन या नियुक्ति से संबंधित विषयों में सभी नागरिकों के लिए अवसर की समता होगी।',
                ur: 'ریاست کے تحت کسی عہدے پر ملازمت یا تقرری سے متعلق معاملات میں تمام شہریوں کے لیے مواقع کی مساوات ہوگی۔',
              },
            },
            {
              id: 'key_provisions',
              type: 'points',
              heading: { en: 'Key Provisions', hi: 'मुख्य प्रावधान', ur: 'اہم احکامات' },
              points: [
                {
                  bold: { en: 'Equal Opportunity', hi: 'समान अवसर', ur: 'مساوی مواقع' },
                  text: { en: 'All citizens have equal right to seek employment in government services.', hi: 'सभी नागरिकों को सरकारी सेवाओं में रोजगार पाने का समान अधिकार है।', ur: 'تمام شہریوں کو سرکاری خدمات میں ملازمت حاصل کرنے کا مساوی حق ہے۔' },
                },
                {
                  bold: { en: 'Merit-Based Selection', hi: 'योग्यता आधारित चयन', ur: 'میرٹ پر مبنی انتخاب' },
                  text: { en: 'Appointments should be based on qualifications and merit, not gender or other discriminatory factors.', hi: 'नियुक्तियां योग्यता और मेरिट पर आधारित होनी चाहिए, न कि लिंग या अन्य भेदभावपूर्ण कारकों पर।', ur: 'تقرریاں قابلیت اور میرٹ کی بنیاد پر ہونی چاہئیں، نہ کہ جنس یا دیگر امتیازی عوامل پر۔' },
                },
                {
                  bold: { en: 'Non-Discrimination', hi: 'गैर-भेदभाव', ur: 'عدم امتیاز' },
                  text: { en: 'No citizen can be denied employment solely on grounds of religion, race, caste, sex, or place of birth.', hi: 'किसी भी नागरिक को केवल धर्म, नस्ल, जाति, लिंग या जन्म-स्थान के आधार पर रोजगार से वंचित नहीं किया जा सकता।', ur: 'کسی بھی شہری کو صرف مذہب، نسل، ذات، جنس، یا جائے پیدائش کی بنیاد پر روزگار سے محروم نہیں کیا جا سکتا۔' },
                },
              ],
            },
            {
              id: 'benefits_for_women',
              type: 'points',
              heading: { en: 'Benefits for Women', hi: 'महिलाओं के लिए लाभ', ur: 'خواتین کے لیے فوائد' },
              points: [
                {
                  bold: { en: 'Government Jobs', hi: 'सरकारी नौकरियां', ur: 'سرکاری نوکریاں' },
                  text: { en: 'Equal access to all government positions and civil services for women.', hi: 'महिलाओं के लिए सभी सरकारी पदों और सिविल सेवाओं तक समान पहुंच।', ur: 'خواتین کے لیے تمام سرکاری عہدوں اور سول سروسز تک یکساں رسائی۔' },
                },
                {
                  bold: { en: 'Career Advancement', hi: 'कैरियर उन्नति', ur: 'کیریئر کی ترقی' },
                  text: { en: 'Equal opportunities for promotion and career growth in public sector.', hi: 'सार्वजनिक क्षेत्र में पदोन्नति और करियर विकास के लिए समान अवसर।', ur: 'سرکاری شعبے میں ترقی اور کیریئر کی نشوونما کے لیے مساوی مواقع۔' },
                },
                {
                  bold: { en: 'Leadership Roles', hi: 'नेतृत्व की भूमिकाएं', ur: 'قائدانہ کردار' },
                  text: { en: 'Access to senior administrative and judicial positions without gender bias.', hi: 'लिंग पूर्वाग्रह के बिना वरिष्ठ प्रशासनिक और न्यायिक पदों तक पहुंच।', ur: 'صنفی تعصب کے بغیر اعلیٰ انتظامی اور عدالتی عہدوں تک رسائی۔' },
                },
              ],
            },
            {
              id: 'reservations',
              type: 'highlight',
              heading: { en: 'Reservations and Special Provisions', hi: 'आरक्षण और विशेष प्रावधान', ur: 'ریزرویشن اور خصوصی احکامات' },
              text: {
                en: 'Article 16(4) allows the State to make provisions for reservation in appointments or posts in favor of any backward class of citizens, including women in certain sectors, to ensure adequate representation.',
                hi: 'अनुच्छेद 16(4) राज्य को पिछड़े वर्ग के नागरिकों, जिसमें कुछ क्षेत्रों में महिलाएं भी शामिल हैं, के पक्ष में नियुक्तियों या पदों में आरक्षण के प्रावधान करने की अनुमति देता है।',
                ur: 'آرٹیکل 16(4) ریاست کو پسماندہ طبقے کے شہریوں، جن میں بعض شعبوں میں خواتین بھی شامل ہیں، کے حق میں تقرریوں یا عہدوں میں ریزرویشن کے احکامات بنانے کی اجازت دیتا ہے۔',
              },
            },
            {
              id: 'current_implementation',
              type: 'points',
              heading: { en: 'Current Implementation', hi: 'वर्तमान क्रियान्वयन', ur: 'موجودہ نفاذ' },
              points: [
                {
                  bold: { en: 'Women in Civil Services', hi: 'सिविल सेवाओं में महिलाएं', ur: 'سول سروسز میں خواتین' },
                  text: { en: 'Increasing participation of women in IAS, IPS, and other central services.', hi: 'IAS, IPS और अन्य केंद्रीय सेवाओं में महिलाओं की बढ़ती भागीदारी।', ur: 'IAS، IPS اور دیگر مرکزی خدمات میں خواتین کی بڑھتی شرکت۔' },
                },
                {
                  bold: { en: 'Defense Services', hi: 'रक्षा सेवाएं', ur: 'دفاعی خدمات' },
                  text: { en: 'Recent inclusion of women in combat roles and permanent commission.', hi: 'लड़ाकू भूमिकाओं और स्थायी कमीशन में महिलाओं का हालिया समावेश।', ur: 'جنگی کرداروں اور مستقل کمیشن میں خواتین کی حالیہ شمولیت۔' },
                },
                {
                  bold: { en: 'Judicial Services', hi: 'न्यायिक सेवाएं', ur: 'عدالتی خدمات' },
                  text: { en: 'Equal opportunity for women in lower and higher judiciary positions.', hi: 'निचली और उच्च न्यायपालिका पदों में महिलाओं के लिए समान अवसर।', ur: 'ماتحت اور اعلیٰ عدلیہ کے عہدوں میں خواتین کے لیے مساوی مواقع۔' },
                },
              ],
            },
          ],
        },

        // ─── ARTICLE 21 ───────────────────────────────────
        {
          id: 'article_21',
          icon: 'security',
          title: {
            en: 'Article 21 — Right to Life and Personal Liberty',
            hi: 'अनुच्छेद 21 — जीवन और व्यक्तिगत स्वतंत्रता का अधिकार',
            ur: 'آرٹیکل 21 — زندگی اور ذاتی آزادی کا حق',
          },
          subtitle: {
            en: 'Fundamental right to life with dignity and personal freedom',
            hi: 'गरिमा और व्यक्तिगत स्वतंत्रता के साथ जीवन का मौलिक अधिकार',
            ur: 'وقار اور ذاتی آزادی کے ساتھ زندگی کا بنیادی حق',
          },
          sections: [
            {
              id: 'constitutional_text',
              type: 'constitutional_text',
              heading: { en: 'Constitutional Text', hi: 'संवैधानिक पाठ', ur: 'آئینی متن' },
              text: {
                en: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
                hi: 'किसी व्यक्ति को उसके प्राण या दैहिक स्वतंत्रता से विधि द्वारा स्थापित प्रक्रिया के अनुसार ही वंचित किया जाएगा, अन्यथा नहीं।',
                ur: 'کسی بھی شخص کو اس کی زندگی یا ذاتی آزادی سے صرف قانون کے ذریعے قائم کردہ طریقہ کار کے مطابق ہی محروم کیا جائے گا۔',
              },
            },
            {
              id: 'scope',
              type: 'points',
              heading: { en: 'Scope of Right to Life', hi: 'जीवन के अधिकार का दायरा', ur: 'زندگی کے حق کا دائرہ' },
              points: [
                {
                  bold: { en: 'Right to Live with Dignity', hi: 'गरिमा के साथ जीने का अधिकार', ur: 'وقار کے ساتھ جینے کا حق' },
                  text: { en: 'Life includes the right to live with human dignity and basic necessities.', hi: 'जीवन में मानवीय गरिमा और बुनियादी जरूरतों के साथ जीने का अधिकार शामिल है।', ur: 'زندگی میں انسانی وقار اور بنیادی ضروریات کے ساتھ جینے کا حق شامل ہے۔' },
                },
                {
                  bold: { en: 'Right to Health', hi: 'स्वास्थ्य का अधिकार', ur: 'صحت کا حق' },
                  text: { en: 'Access to healthcare and medical treatment as part of right to life.', hi: 'जीवन के अधिकार के हिस्से के रूप में स्वास्थ्य सेवा और चिकित्सा उपचार तक पहुंच।', ur: 'زندگی کے حق کے حصے کے طور پر صحت کی دیکھ بھال اور طبی علاج تک رسائی۔' },
                },
                {
                  bold: { en: 'Right to Clean Environment', hi: 'स्वच्छ पर्यावरण का अधिकार', ur: 'صاف ماحول کا حق' },
                  text: { en: 'Living in a pollution-free environment essential for life.', hi: 'जीवन के लिए प्रदूषण मुक्त वातावरण में रहना आवश्यक है।', ur: 'زندگی کے لیے آلودگی سے پاک ماحول میں رہنا ضروری ہے۔' },
                },
              ],
            },
            {
              id: 'personal_liberty',
              type: 'points',
              heading: { en: 'Personal Liberty for Women', hi: 'महिलाओं के लिए व्यक्तिगत स्वतंत्रता', ur: 'خواتین کے لیے ذاتی آزادی' },
              points: [
                {
                  bold: { en: 'Reproductive Rights', hi: 'प्रजनन अधिकार', ur: 'تولیدی حقوق' },
                  text: { en: 'Freedom to make decisions about reproduction and family planning.', hi: 'प्रजनन और परिवार नियोजन के बारे में निर्णय लेने की स्वतंत्रता।', ur: 'تولید اور خاندانی منصوبہ بندی کے بارے میں فیصلے کرنے کی آزادی۔' },
                },
                {
                  bold: { en: 'Freedom of Movement', hi: 'आवागमन की स्वतंत्रता', ur: 'نقل و حرکت کی آزادی' },
                  text: { en: 'Right to move freely and choose residence without restrictions.', hi: 'बिना किसी प्रतिबंध के स्वतंत्र रूप से घूमने और निवास चुनने का अधिकार।', ur: 'بغیر پابندی کے آزادانہ گھومنے اور رہائش چنے کا حق۔' },
                },
                {
                  bold: { en: 'Privacy Rights', hi: 'निजता के अधिकार', ur: 'رازداری کے حقوق' },
                  text: { en: 'Protection of personal privacy and autonomy in personal matters.', hi: 'व्यक्तिगत मामलों में व्यक्तिगत गोपनीयता और स्वायत्तता का संरक्षण।', ur: 'ذاتی معاملات میں ذاتی رازداری اور خود مختاری کا تحفظ۔' },
                },
                {
                  bold: { en: 'Safety and Security', hi: 'सुरक्षा और संरक्षण', ur: 'حفاظت اور سلامتی' },
                  text: { en: 'Right to live free from violence, harassment, and threats.', hi: 'हिंसा, उत्पीड़न और धमकियों से मुक्त जीवन जीने का अधिकार।', ur: 'تشدد، ہراسانی اور دھمکیوں سے آزاد زندگی گزارنے کا حق۔' },
                },
              ],
            },
            {
              id: 'judicial_interpretation',
              type: 'highlight',
              heading: { en: 'Judicial Interpretation', hi: 'न्यायिक व्याख्या', ur: 'عدالتی تفسیر' },
              text: {
                en: 'The Supreme Court has expanded Article 21 to include various rights essential for meaningful life, including the right to education, healthcare, clean environment, and protection from sexual harassment.',
                hi: 'सर्वोच्च न्यायालय ने अनुच्छेद 21 का विस्तार करके सार्थक जीवन के लिए आवश्यक विभिन्न अधिकारों को शामिल किया है, जिसमें शिक्षा, स्वास्थ्य सेवा, स्वच्छ पर्यावरण और यौन उत्पीड़न से सुरक्षा का अधिकार शामिल है।',
                ur: 'سپریم کورٹ نے آرٹیکل 21 کو بامعنی زندگی کے لیے ضروری مختلف حقوق شامل کرنے کے لیے وسیع کیا ہے، جن میں تعلیم، صحت کی دیکھ بھال، صاف ماحول اور جنسی ہراسانی سے تحفظ کا حق شامل ہے۔',
              },
            },
            {
              id: 'protection_mechanisms',
              type: 'points',
              heading: { en: 'Protection Mechanisms', hi: 'सुरक्षा तंत्र', ur: 'حفاظتی طریقہ کار' },
              points: [
                {
                  bold: { en: 'Due Process', hi: 'उचित प्रक्रिया', ur: 'قانونی عمل' },
                  text: { en: 'Any deprivation of life or liberty must follow established legal procedures.', hi: 'जीवन या स्वतंत्रता से किसी भी वंचना के लिए स्थापित कानूनी प्रक्रियाओं का पालन करना आवश्यक है।', ur: 'زندگی یا آزادی سے کسی بھی محرومی کے لیے قائم شدہ قانونی طریقہ کار کی پیروی ضروری ہے۔' },
                },
                {
                  bold: { en: 'Legal Remedies', hi: 'कानूनी उपाय', ur: 'قانونی علاج' },
                  text: { en: 'Access to courts for protection of life and liberty rights.', hi: 'जीवन और स्वतंत्रता के अधिकारों की सुरक्षा के लिए न्यायालयों तक पहुंच।', ur: 'زندگی اور آزادی کے حقوق کے تحفظ کے لیے عدالتوں تک رسائی۔' },
                },
                {
                  bold: { en: 'State Obligation', hi: 'राज्य का दायित्व', ur: 'ریاست کی ذمہ داری' },
                  text: { en: 'Government duty to protect and promote conditions for dignified life.', hi: 'गरिमामय जीवन की स्थितियों की रक्षा और उन्नति करना सरकार का कर्तव्य है।', ur: 'باوقار زندگی کے حالات کی حفاظت اور فروغ حکومت کا فرض ہے۔' },
                },
              ],
            },
            {
              id: 'women_specific',
              type: 'points',
              heading: { en: 'Women-Specific Applications', hi: 'महिलाओं पर विशेष अनुप्रयोग', ur: 'خواتین کے لیے مخصوص اطلاق' },
              points: [
                {
                  bold: { en: 'Domestic Violence', hi: 'घरेलू हिंसा', ur: 'گھریلو تشدد' },
                  text: { en: 'Protection from domestic abuse as part of right to life and liberty.', hi: 'जीवन और स्वतंत्रता के अधिकार के तहत घरेलू दुर्व्यवहार से सुरक्षा।', ur: 'زندگی اور آزادی کے حق کے تحت گھریلو زیادتی سے تحفظ۔' },
                },
                {
                  bold: { en: 'Workplace Safety', hi: 'कार्यस्थल सुरक्षा', ur: 'کام کی جگہ کی حفاظت' },
                  text: { en: 'Safe working conditions and protection from sexual harassment.', hi: 'सुरक्षित कार्य स्थितियां और यौन उत्पीड़न से सुरक्षा।', ur: 'محفوظ کام کے حالات اور جنسی ہراسانی سے تحفظ۔' },
                },
                {
                  bold: { en: 'Maternal Health', hi: 'मातृ स्वास्थ्य', ur: 'زچگی کی صحت' },
                  text: { en: 'Access to maternal healthcare and safe childbirth facilities.', hi: 'मातृ स्वास्थ्य सेवा और सुरक्षित प्रसव सुविधाओं तक पहुंच।', ur: 'زچگی کی صحت کی دیکھ بھال اور محفوظ ولادت کی سہولیات تک رسائی۔' },
                },
              ],
            },
          ],
        },

      ], // end fundamental_rights.items
    },

    // ══════════════════════════════════════════════════════
    // SUBCATEGORY 2 — CONSTITUTIONAL PROVISIONS
    // ══════════════════════════════════════════════════════
    {
      id: 'constitutional_provisions',
      icon: 'article',
      label: {
        en: 'Constitutional Provisions',
        hi: 'संवैधानिक प्रावधान',
        ur: 'آئینی احکامات',
      },
      description: {
        en: 'Key provisions ensuring women\'s welfare and legal support',
        hi: 'महिलाओं के कल्याण और कानूनी सहायता सुनिश्चित करने वाले मुख्य प्रावधान',
        ur: 'خواتین کی فلاح اور قانونی مدد یقینی بنانے والے اہم احکامات',
      },
      items: [
        {
          id: 'livelihood',
          icon: 'savings',
          title: { en: 'Adequate Means of Livelihood', hi: 'आजीविका के पर्याप्त साधन', ur: 'روزگار کے مناسب ذرائع' },
          subtitle: { en: 'Article 39(a) — Economic security for all women', hi: 'अनुच्छेद 39(a) — सभी महिलाओं के लिए आर्थिक सुरक्षा', ur: 'آرٹیکل 39(a) — تمام خواتین کے لیے اقتصادی تحفظ' },
          sections: [
            {
              id: 'overview',
              type: 'text',
              text: {
                en: 'Constitutional provisions ensuring women have access to adequate means of livelihood and economic security. Article 39(a) directs the State to secure adequate means of livelihood for all citizens, including women, promoting economic empowerment and financial independence.',
                hi: 'संवैधानिक प्रावधान यह सुनिश्चित करते हैं कि महिलाओं को आजीविका के पर्याप्त साधन और आर्थिक सुरक्षा उपलब्ध हो। अनुच्छेद 39(a) राज्य को सभी नागरिकों, सहित महिलाओं, के लिए आजीविका के पर्याप्त साधन सुरक्षित करने का निर्देश देता है।',
                ur: 'آئینی احکامات یہ یقینی بناتے ہیں کہ خواتین کو روزگار کے مناسب ذرائع اور اقتصادی تحفظ حاصل ہو۔ آرٹیکل 39(a) ریاست کو تمام شہریوں، بشمول خواتین، کے لیے روزگار کے مناسب ذرائع محفوظ کرنے کی ہدایت دیتا ہے۔',
              },
            },
          ],
        },
        {
          id: 'legal_aid',
          icon: 'gavel',
          title: { en: 'Equal Justice and Free Legal Aid', hi: 'समान न्याय और निःशुल्क कानूनी सहायता', ur: 'مساوی انصاف اور مفت قانونی امداد' },
          subtitle: { en: 'Article 39A — Access to justice for all', hi: 'अनुच्छेद 39A — सबके लिए न्याय तक पहुंच', ur: 'آرٹیکل 39A — سب کے لیے انصاف تک رسائی' },
          sections: [
            {
              id: 'overview',
              type: 'text',
              text: {
                en: 'Access to justice and free legal aid services for women who cannot afford legal representation. Article 39A ensures equal justice and free legal aid to promote access to courts for all, especially marginalized women.',
                hi: 'उन महिलाओं के लिए न्याय तक पहुंच और निःशुल्क कानूनी सहायता सेवाएं जो कानूनी प्रतिनिधित्व का खर्च वहन नहीं कर सकतीं। अनुच्छेद 39A सभी के लिए, विशेषकर हाशिए पर खड़ी महिलाओं के लिए, न्यायालयों तक पहुंच बढ़ाने हेतु समान न्याय और निःशुल्क कानूनी सहायता सुनिश्चित करता है।',
                ur: 'ان خواتین کے لیے انصاف تک رسائی اور مفت قانونی امداد جو قانونی نمائندگی کا خرچ برداشت نہیں کر سکتیں۔ آرٹیکل 39A تمام کے لیے، خصوصاً پسماندہ خواتین کے لیے، عدالتوں تک رسائی بڑھانے کے لیے مساوی انصاف اور مفت قانونی امداد یقینی بناتا ہے۔',
              },
            },
            {
              id: 'services',
              type: 'points',
              heading: { en: 'Available Services', hi: 'उपलब्ध सेवाएं', ur: 'دستیاب خدمات' },
              points: [
                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Legal Service Authorities provide free legal assistance', hi: 'कानूनी सेवा प्राधिकरण निःशुल्क कानूनी सहायता प्रदान करते हैं', ur: 'قانونی سروس اتھارٹیز مفت قانونی مدد فراہم کرتی ہیں' } },
                { bold: { en: '', hi: '', ur: '' }, text: { en: 'District Legal Services Authorities in every district', hi: 'हर जिले में जिला कानूनी सेवा प्राधिकरण उपलब्ध है', ur: 'ہر ضلع میں ضلعی قانونی سروس اتھارٹی موجود ہے' } },
                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Eligibility based on income and social status', hi: 'पात्रता आय और सामाजिक स्थिति के आधार पर', ur: 'آمدنی اور سماجی حیثیت کی بنیاد پر اہلیت' } },
                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Simple application procedure for accessing services', hi: 'सेवाओं तक पहुंच के लिए सरल आवेदन प्रक्रिया', ur: 'خدمات تک رسائی کے لیے آسان درخواست کا طریقہ' } },
              ],
            },
          ],
        },
        {
          id: 'maternity_relief',
          icon: 'pregnant_woman',
          title: { en: 'Maternity Relief', hi: 'मातृत्व राहत', ur: 'زچگی امداد' },
          subtitle: { en: 'Article 42 — Protection for working mothers', hi: 'अनुच्छेद 42 — कामकाजी माताओं के लिए सुरक्षा', ur: 'آرٹیکل 42 — کام کرنے والی ماؤں کے لیے تحفظ' },
          sections: [
            {
              id: 'overview',
              type: 'text',
              text: {
                en: 'Constitutional provisions and policies ensuring maternity benefits and support for working women. Article 42 directs the State to make provisions for securing just and humane conditions of work and maternity relief, protecting women\'s health and economic security during pregnancy and childbirth.',
                hi: 'संवैधानिक प्रावधान और नीतियां कामकाजी महिलाओं के लिए मातृत्व लाभ और सहायता सुनिश्चित करती हैं। अनुच्छेद 42 राज्य को न्यायपूर्ण और मानवीय कार्य दशाओं तथा मातृत्व राहत के प्रावधान करने का निर्देश देता है।',
                ur: 'آئینی احکامات اور پالیسیاں کام کرنے والی خواتین کے لیے زچگی فوائد اور مدد یقینی بناتی ہیں۔ آرٹیکل 42 ریاست کو منصفانہ اور انسانی کام کے حالات اور زچگی امداد کے احکامات بنانے کی ہدایت دیتا ہے۔',
              },
            },
          ],
        },
      ],
    },

    // ══════════════════════════════════════════════════════
    // SUBCATEGORY 3 — PANCHAYATI RAJ & URBAN BODIES
    // ══════════════════════════════════════════════════════
    {
      id: 'panchayati_raj',
      icon: 'groups',
      label: {
        en: 'Panchayati Raj & Urban Bodies',
        hi: 'पंचायती राज और शहरी निकाय',
        ur: 'پنچایتی راج اور شہری ادارے',
      },
      description: {
        en: 'Constitutional provisions for women\'s participation in local governance',
        hi: 'स्थानीय शासन में महिलाओं की भागीदारी के लिए संवैधानिक प्रावधान',
        ur: 'مقامی حکومت میں خواتین کی شرکت کے لیے آئینی احکامات',
      },
      items: [
        {
          id: 'panchayati_reservation',
          icon: 'how_to_vote',
          title: { en: 'Women\'s Reservation in Panchayati Raj', hi: 'पंचायती राज में महिलाओं का आरक्षण', ur: 'پنچایتی راج میں خواتین کا ریزرویشن' },
          subtitle: { en: '73rd Amendment — Grassroots democracy for women', hi: '73वां संशोधन — महिलाओं के लिए जमीनी लोकतंत्र', ur: '73واں ترمیم — خواتین کے لیے ذیلی سطح کی جمہوریت' },
          sections: [
            {
              id: 'constitutional_text',
              type: 'constitutional_text',
              heading: { en: '73rd Constitutional Amendment Act, 1992', hi: '73वां संवैधानिक संशोधन अधिनियम, 1992', ur: '73واں آئینی ترمیمی قانون، 1992' },
              text: {
                en: 'The 73rd Amendment to the Constitution mandated reservation of seats for women in Panchayati Raj Institutions, ensuring their participation in local governance.',
                hi: 'संविधान के 73वें संशोधन ने पंचायती राज संस्थाओं में महिलाओं के लिए सीटों का आरक्षण अनिवार्य किया, जिससे स्थानीय शासन में उनकी भागीदारी सुनिश्चित हुई।',
                ur: 'آئین کی 73ویں ترمیم نے پنچایتی راج اداروں میں خواتین کے لیے نشستوں کے ریزرویشن کو لازمی قرار دیا، جس سے مقامی حکومت میں ان کی شرکت یقینی ہوئی۔',
              },
            },
            {
              id: 'reservation_structure',
              type: 'points',
              heading: { en: 'Reservation Structure', hi: 'आरक्षण संरचना', ur: 'ریزرویشن کا ڈھانچہ' },
              points: [
                { bold: { en: '33% Reservation', hi: '33% आरक्षण', ur: '33% ریزرویشن' }, text: { en: 'One-third of total seats reserved for women at all three levels of Panchayati Raj.', hi: 'पंचायती राज के तीनों स्तरों पर कुल सीटों का एक-तिहाई महिलाओं के लिए आरक्षित।', ur: 'پنچایتی راج کے تینوں سطحوں پر کل نشستوں کا ایک تہائی خواتین کے لیے مخصوص۔' } },
                { bold: { en: 'Chairperson Positions', hi: 'अध्यक्ष पद', ur: 'چیئرپرسن عہدے' }, text: { en: 'One-third of chairperson positions reserved for women in rotation.', hi: 'रोटेशन में एक-तिहाई अध्यक्ष पद महिलाओं के लिए आरक्षित।', ur: 'گردش کے ساتھ ایک تہائی چیئرپرسن عہدے خواتین کے لیے مخصوص۔' } },
                { bold: { en: 'SC/ST Women', hi: 'SC/ST महिलाएं', ur: 'SC/ST خواتین' }, text: { en: 'Additional reservation for women belonging to Scheduled Castes and Scheduled Tribes.', hi: 'अनुसूचित जाति और अनुसूचित जनजाति की महिलाओं के लिए अतिरिक्त आरक्षण।', ur: 'درج فہرست ذاتوں اور درج فہرست قبائل کی خواتین کے لیے اضافی ریزرویشن۔' } },
              ],
            },
            {
              id: 'three_tier',
              type: 'points',
              heading: { en: 'Three-Tier System', hi: 'तीन स्तरीय प्रणाली', ur: 'تین درجاتی نظام' },
              points: [
                { bold: { en: 'Gram Panchayat (Village Level)', hi: 'ग्राम पंचायत (ग्राम स्तर)', ur: 'گرام پنچایت (گاؤں کی سطح)' }, text: { en: 'Direct election of women representatives at village level with reserved seats and chairperson positions.', hi: 'आरक्षित सीटों और अध्यक्ष पदों के साथ ग्राम स्तर पर महिला प्रतिनिधियों का प्रत्यक्ष चुनाव।', ur: 'مخصوص نشستوں اور چیئرپرسن عہدوں کے ساتھ گاؤں کی سطح پر خواتین نمائندوں کا براہ راست انتخاب۔' } },
                { bold: { en: 'Panchayat Samiti (Block Level)', hi: 'पंचायत समिति (प्रखंड स्तर)', ur: 'پنچایت سمیتی (بلاک سطح)' }, text: { en: 'Intermediate level with women\'s representation in block-level governance and development planning.', hi: 'ब्लॉक स्तरीय शासन और विकास योजना में महिलाओं के प्रतिनिधित्व के साथ मध्यवर्ती स्तर।', ur: 'بلاک سطح کی حکومت اور ترقیاتی منصوبہ بندی میں خواتین کی نمائندگی کے ساتھ درمیانی سطح۔' } },
                { bold: { en: 'Zilla Panchayat (District Level)', hi: 'जिला पंचायत (जिला स्तर)', ur: 'ضلع پنچایت (ضلع سطح)' }, text: { en: 'District-level governance with women\'s participation in policy formulation and resource allocation.', hi: 'नीति निर्माण और संसाधन आवंटन में महिलाओं की भागीदारी के साथ जिला स्तरीय शासन।', ur: 'پالیسی سازی اور وسائل کی تقسیم میں خواتین کی شرکت کے ساتھ ضلع سطح کی حکومت۔' } },
              ],
            },
            {
              id: 'powers',
              type: 'highlight',
              heading: { en: 'Powers and Functions', hi: 'शक्तियां और कार्य', ur: 'اختیارات اور افعال' },
              text: { en: 'Women representatives in Panchayati Raj institutions have authority over 29 subjects listed in the 11th Schedule, including agriculture, health, education, and rural development programs.', hi: 'पंचायती राज संस्थाओं में महिला प्रतिनिधियों की 11वीं अनुसूची में सूचीबद्ध 29 विषयों पर अधिकार है, जिनमें कृषि, स्वास्थ्य, शिक्षा और ग्रामीण विकास कार्यक्रम शामिल हैं।', ur: 'پنچایتی راج اداروں میں خواتین نمائندوں کو 11ویں شیڈول میں درج 29 موضوعات پر اختیار حاصل ہے، جن میں زراعت، صحت، تعلیم اور دیہی ترقیاتی پروگرام شامل ہیں۔' },
            },
            {
              id: 'impact',
              type: 'points',
              heading: { en: 'Impact of Women\'s Participation', hi: 'महिलाओं की भागीदारी का प्रभाव', ur: 'خواتین کی شرکت کا اثر' },
              points: [
                { bold: { en: 'Policy Focus', hi: 'नीतिगत ध्यान', ur: 'پالیسی توجہ' }, text: { en: 'Increased attention to women and child welfare, health, and education issues.', hi: 'महिला और बाल कल्याण, स्वास्थ्य और शिक्षा के मुद्दों पर बढ़ा हुआ ध्यान।', ur: 'خواتین اور بچوں کی فلاح، صحت اور تعلیم کے مسائل پر بڑھتی توجہ۔' } },
                { bold: { en: 'Resource Allocation', hi: 'संसाधन आवंटन', ur: 'وسائل کی تقسیم' }, text: { en: 'Better allocation of resources for community needs, especially water, sanitation, and healthcare.', hi: 'सामुदायिक जरूरतों, विशेषकर पानी, स्वच्छता और स्वास्थ्य सेवा के लिए बेहतर संसाधन आवंटन।', ur: 'کمیونٹی کی ضروریات، خاصکر پانی، صفائی اور صحت کی دیکھ بھال کے لیے بہتر وسائل کی تقسیم۔' } },
                { bold: { en: 'Transparency', hi: 'पारदर्शिता', ur: 'شفافیت' }, text: { en: 'Enhanced transparency and accountability in local governance and fund utilization.', hi: 'स्थानीय शासन और निधि उपयोग में पारदर्शिता और जवाबदेही में वृद्धि।', ur: 'مقامی حکومت اور فنڈ استعمال میں شفافیت اور جوابدہی میں اضافہ۔' } },
                { bold: { en: 'Social Change', hi: 'सामाजिक परिवर्तन', ur: 'سماجی تبدیلی' }, text: { en: 'Breaking traditional barriers and empowering women to participate in decision-making processes.', hi: 'पारंपरिक बाधाओं को तोड़ना और महिलाओं को निर्णय-निर्माण प्रक्रियाओं में भाग लेने के लिए सशक्त बनाना।', ur: 'روایتی رکاوٹوں کو توڑنا اور خواتین کو فیصلہ سازی کے عمل میں حصہ لینے کے لیے بااختیار بنانا۔' } },
              ],
            },
          ],
        },
        {
          id: 'urban_local_bodies',
          icon: 'location_city',
          title: { en: 'Urban Local Bodies', hi: 'शहरी स्थानीय निकाय', ur: 'شہری مقامی ادارے' },
          subtitle: { en: '74th Amendment — Women in city governance', hi: '74वां संशोधन — शहरी शासन में महिलाएं', ur: '74واں ترمیم — شہری حکومت میں خواتین' },
          sections: [
            {
              id: 'constitutional_text',
              type: 'constitutional_text',
              heading: { en: '74th Constitutional Amendment Act, 1992', hi: '74वां संवैधानिक संशोधन अधिनियम, 1992', ur: '74واں آئینی ترمیمی قانون، 1992' },
              text: {
                en: 'The 74th Amendment mandated reservation for women in Urban Local Bodies, ensuring their participation in city governance and municipal decision-making.',
                hi: '74वें संशोधन ने शहरी स्थानीय निकायों में महिलाओं के लिए आरक्षण अनिवार्य किया, जिससे शहरी शासन और नगरपालिका निर्णय-निर्माण में उनकी भागीदारी सुनिश्चित हुई।',
                ur: '74ویں ترمیم نے شہری مقامی اداروں میں خواتین کے لیے ریزرویشن لازمی قرار دیا، جس سے شہری حکومت اور میونسپل فیصلہ سازی میں ان کی شرکت یقینی ہوئی۔',
              },
            },
            {
              id: 'types',
              type: 'points',
              heading: { en: 'Types of Urban Local Bodies', hi: 'शहरी स्थानीय निकायों के प्रकार', ur: 'شہری مقامی اداروں کی اقسام' },
              points: [
                { bold: { en: 'Municipal Corporations', hi: 'नगर निगम', ur: 'میونسپل کارپوریشنز' }, text: { en: 'For large cities with population over 3 lakh, with women\'s reservation in council seats and mayoral positions.', hi: '3 लाख से अधिक जनसंख्या वाले बड़े शहरों के लिए, परिषद सीटों और मेयर पदों में महिलाओं के आरक्षण के साथ।', ur: '3 لاکھ سے زیادہ آبادی والے بڑے شہروں کے لیے، کونسل نشستوں اور میئر عہدوں میں خواتین کے ریزرویشن کے ساتھ۔' } },
                { bold: { en: 'Municipal Councils', hi: 'नगर परिषद', ur: 'میونسپل کونسلز' }, text: { en: 'For smaller cities and towns, ensuring women\'s representation in local urban governance.', hi: 'छोटे शहरों और कस्बों के लिए, स्थानीय शहरी शासन में महिलाओं के प्रतिनिधित्व को सुनिश्चित करना।', ur: 'چھوٹے شہروں اور قصبوں کے لیے، مقامی شہری حکومت میں خواتین کی نمائندگی یقینی بنانا۔' } },
                { bold: { en: 'Nagar Panchayats', hi: 'नगर पंचायत', ur: 'نگر پنچایت' }, text: { en: 'For transitional areas between rural and urban, with mandatory women\'s participation.', hi: 'ग्रामीण और शहरी के बीच संक्रमणकालीन क्षेत्रों के लिए, अनिवार्य महिला भागीदारी के साथ।', ur: 'دیہی اور شہری کے درمیان منتقلی علاقوں کے لیے، لازمی خواتین کی شرکت کے ساتھ۔' } },
              ],
            },
            {
              id: 'functions',
              type: 'highlight',
              heading: { en: 'Functions and Powers', hi: 'कार्य और शक्तियां', ur: 'افعال اور اختیارات' },
              text: { en: 'Urban Local Bodies handle 18 functions listed in the 12th Schedule, including urban planning, water supply, public health, and slum improvement programs.', hi: 'शहरी स्थानीय निकाय 12वीं अनुसूची में सूचीबद्ध 18 कार्यों को संभालते हैं, जिनमें शहरी नियोजन, जल आपूर्ति, सार्वजनिक स्वास्थ्य और झुग्गी सुधार कार्यक्रम शामिल हैं।', ur: 'شہری مقامی ادارے 12ویں شیڈول میں درج 18 کاموں کو سنبھالتے ہیں، جن میں شہری منصوبہ بندی، پانی کی فراہمی، صحت عامہ اور کچی آبادی کی بہتری کے پروگرام شامل ہیں۔' },
            },
          ],
        },
        {
          id: 'governance_impact',
          icon: 'trending_up',
          title: { en: 'Impact and Benefits', hi: 'प्रभाव और लाभ', ur: 'اثر اور فوائد' },
          subtitle: { en: 'Transformative effects of women\'s participation in local governance', hi: 'स्थानीय शासन में महिलाओं की भागीदारी के परिवर्तनकारी प्रभाव', ur: 'مقامی حکومت میں خواتین کی شرکت کے تبدیلی لانے والے اثرات' },
          sections: [
            {
              id: 'service_delivery',
              type: 'points',
              heading: { en: 'Service Delivery Improvements', hi: 'सेवा वितरण में सुधार', ur: 'خدمات کی فراہمی میں بہتری' },
              points: [
                { bold: { en: 'Healthcare Services', hi: 'स्वास्थ्य सेवाएं', ur: 'صحت خدمات' }, text: { en: 'Better maternal and child healthcare facilities, immunization programs, and health awareness campaigns.', hi: 'बेहतर मातृ एवं शिशु स्वास्थ्य सुविधाएं, टीकाकरण कार्यक्रम और स्वास्थ्य जागरूकता अभियान।', ur: 'بہتر زچگی اور بچوں کی صحت کی سہولیات، ویکسینیشن پروگرام اور صحت آگاہی مہمات۔' } },
                { bold: { en: 'Education Infrastructure', hi: 'शिक्षा अवसंरचना', ur: 'تعلیمی بنیادی ڈھانچہ' }, text: { en: 'Improved school facilities, mid-day meal programs, and focus on girl child education.', hi: 'बेहतर स्कूल सुविधाएं, मध्याह्न भोजन कार्यक्रम और बालिका शिक्षा पर ध्यान।', ur: 'بہتر اسکول سہولیات، مڈ ڈے میل پروگرام اور لڑکیوں کی تعلیم پر توجہ۔' } },
                { bold: { en: 'Water and Sanitation', hi: 'जल और स्वच्छता', ur: 'پانی اور صفائی' }, text: { en: 'Priority given to clean drinking water supply and sanitation facilities in communities.', hi: 'समुदायों में स्वच्छ पेयजल आपूर्ति और स्वच्छता सुविधाओं को प्राथमिकता।', ur: 'کمیونٹیز میں صاف پینے کے پانی کی فراہمی اور صفائی کی سہولیات کو ترجیح۔' } },
                { bold: { en: 'Rural Infrastructure', hi: 'ग्रामीण बुनियादी ढांचा', ur: 'دیہی بنیادی ڈھانچہ' }, text: { en: 'Better roads, street lighting, and connectivity to remote areas.', hi: 'बेहतर सड़कें, स्ट्रीट लाइटिंग और दूरदराज के क्षेत्रों तक कनेक्टिविटी।', ur: 'بہتر سڑکیں، اسٹریٹ لائٹنگ اور دور دراز علاقوں تک رابطہ۔' } },
              ],
            },
            {
              id: 'statistical_impact',
              type: 'highlight',
              heading: { en: 'Statistical Impact', hi: 'सांख्यिकीय प्रभाव', ur: 'اعداد و شمار پر اثر' },
              text: { en: 'Studies show that areas with higher women\'s participation in local governance have better outcomes in health, education, and infrastructure development compared to areas with lower participation.', hi: 'अध्ययन दर्शाते हैं कि स्थानीय शासन में महिलाओं की अधिक भागीदारी वाले क्षेत्रों में कम भागीदारी वाले क्षेत्रों की तुलना में स्वास्थ्य, शिक्षा और बुनियादी ढांचे के विकास में बेहतर परिणाम होते हैं।', ur: 'مطالعات سے پتہ چلتا ہے کہ مقامی حکومت میں خواتین کی زیادہ شرکت والے علاقوں میں کم شرکت والے علاقوں کے مقابلے میں صحت، تعلیم اور بنیادی ڈھانچے کی ترقی میں بہتر نتائج ہیں۔' },
            },
            {
              id: 'social_impact',
              type: 'points',
              heading: { en: 'Social and Cultural Impact', hi: 'सामाजिक और सांस्कृतिक प्रभाव', ur: 'سماجی اور ثقافتی اثر' },
              points: [
                { bold: { en: 'Women\'s Empowerment', hi: 'महिला सशक्तिकरण', ur: 'خواتین کا اختیار' }, text: { en: 'Breaking traditional barriers and changing perceptions about women\'s leadership capabilities.', hi: 'पारंपरिक बाधाओं को तोड़ना और महिलाओं की नेतृत्व क्षमताओं के बारे में धारणाएं बदलना।', ur: 'روایتی رکاوٹوں کو توڑنا اور خواتین کی قائدانہ صلاحیتوں کے بارے میں تصورات بدلنا۔' } },
                { bold: { en: 'Role Model Effect', hi: 'आदर्श प्रभाव', ur: 'رول ماڈل اثر' }, text: { en: 'Inspiring other women to participate in politics and public life.', hi: 'अन्य महिलाओं को राजनीति और सार्वजनिक जीवन में भाग लेने के लिए प्रेरित करना।', ur: 'دیگر خواتین کو سیاست اور عوامی زندگی میں حصہ لینے کی ترغیب دینا۔' } },
                { bold: { en: 'Gender Sensitivity', hi: 'लैंगिक संवेदनशीलता', ur: 'صنفی حساسیت' }, text: { en: 'Promoting gender-sensitive policies and creating safer public spaces.', hi: 'लैंगिक संवेदनशील नीतियों को बढ़ावा देना और सुरक्षित सार्वजनिक स्थान बनाना।', ur: 'صنفی حساس پالیسیوں کو فروغ دینا اور محفوظ عوامی مقامات بنانا۔' } },
              ],
            },
          ],
        },
      ],
    },

    // ══════════════════════════════════════════════════════
    // SUBCATEGORY 4 — LEGAL REMEDIES
    // ══════════════════════════════════════════════════════
    {
      id: 'legal_remedies',
      icon: 'balance',
      label: {
        en: 'Legal Remedies',
        hi: 'कानूनी उपाय',
        ur: 'قانونی علاج',
      },
      description: {
        en: 'Understand writs and Public Interest Litigation as tools for seeking justice',
        hi: 'न्याय प्राप्ति के साधन के रूप में रिट और जनहित याचिका को समझें',
        ur: 'انصاف حاصل کرنے کے ذریعے کے طور پر رٹ اور عوامی مفاد کی قانونی چارہ جوئی کو سمجھیں',
      },
      items: [
        {
          id: 'constitutional_writs',
          icon: 'gavel',
          title: { en: 'Constitutional Writs', hi: 'संवैधानिक रिट', ur: 'آئینی رٹ' },
          subtitle: { en: 'Five writs under Articles 32 & 226 for protecting fundamental rights', hi: 'मौलिक अधिकारों की सुरक्षा के लिए अनुच्छेद 32 और 226 के तहत पांच रिट', ur: 'بنیادی حقوق کے تحفظ کے لیے آرٹیکل 32 اور 226 کے تحت پانچ رٹ' },
          sections: [
            {
              id: 'writs_list',
              type: 'points',
              heading: { en: 'The Five Constitutional Writs', hi: 'पांच संवैधानिक रिट', ur: 'پانچ آئینی رٹ' },
              points: [
                { bold: { en: 'Habeas Corpus', hi: 'हेबियस कॉर्पस', ur: 'حبس بے جا' }, text: { en: 'Protection against illegal detention and imprisonment. Literally means "to have the body" — ensures no person is detained without lawful authority.', hi: 'अवैध हिरासत और कारावास के विरुद्ध सुरक्षा। शाब्दिक अर्थ है "शरीर प्रस्तुत करो" — सुनिश्चित करता है कि किसी को कानूनी अधिकार के बिना हिरासत में न रखा जाए।', ur: 'غیر قانونی حراست اور قید کے خلاف تحفظ۔ لفظی معنی ہے "جسم پیش کرو" — یقینی بناتا ہے کہ کسی کو قانونی اختیار کے بغیر حراست میں نہ رکھا جائے۔' } },
                { bold: { en: 'Mandamus', hi: 'मैंडेमस', ur: 'حکم نامہ' }, text: { en: 'Compelling public authorities to perform their duties. Used when a public official fails to perform a legal duty.', hi: 'सार्वजनिक प्राधिकरणों को उनके कर्तव्यों का पालन करने के लिए बाध्य करना। तब उपयोग किया जाता है जब कोई सरकारी अधिकारी कानूनी कर्तव्य निभाने में विफल हो।', ur: 'عوامی اداروں کو اپنے فرائض انجام دینے پر مجبور کرنا۔ جب کوئی سرکاری اہلکار قانونی فریضہ ادا کرنے میں ناکام ہو تو استعمال ہوتا ہے۔' } },
                { bold: { en: 'Certiorari', hi: 'सर्टिओरारी', ur: 'منتقلی' }, text: { en: 'Reviewing decisions of lower courts and tribunals. Used to quash orders of subordinate courts that exceed jurisdiction.', hi: 'निचली अदालतों और न्यायाधिकरणों के निर्णयों की समीक्षा। अधिकार क्षेत्र से बाहर जाने वाले अधीनस्थ न्यायालयों के आदेश रद्द करने के लिए उपयोग।', ur: 'ماتحت عدالتوں اور ٹربیونلز کے فیصلوں کا جائزہ۔ ماتحت عدالتوں کے حدود سے تجاوز کرنے والے احکامات کو کالعدم کرنے کے لیے استعمال۔' } },
                { bold: { en: 'Prohibition', hi: 'प्रतिषेध', ur: 'ممانعت' }, text: { en: 'Preventing lower courts from exceeding jurisdiction. Issued to prevent a court from acting beyond its authority.', hi: 'निचली अदालतों को अधिकार क्षेत्र से बाहर जाने से रोकना। किसी न्यायालय को अपने अधिकार से परे कार्य करने से रोकने के लिए जारी।', ur: 'ماتحت عدالتوں کو دائرہ اختیار سے تجاوز کرنے سے روکنا۔ کسی عدالت کو اپنے اختیار سے باہر کام کرنے سے روکنے کے لیے جاری۔' } },
                { bold: { en: 'Quo-Warranto', hi: 'क्वो-वारंटो', ur: 'کس اختیار سے' }, text: { en: 'Challenging illegal appointment to public office. Questions the authority by which a person holds a public position.', hi: 'सार्वजनिक पद पर अवैध नियुक्ति को चुनौती देना। उस अधिकार पर सवाल उठाना जिसके आधार पर कोई व्यक्ति सार्वजनिक पद धारण करता है।', ur: 'سرکاری عہدے پر غیر قانونی تقرری کو چیلنج کرنا۔ اس اختیار پر سوال اٹھانا جس کی بنیاد پر کوئی شخص سرکاری عہدہ رکھتا ہے۔' } },
              ],
            },
          ],
        },
        {
          id: 'pil',
          icon: 'balance',
          title: { en: 'Public Interest Litigation (PIL)', hi: 'जनहित याचिका (PIL)', ur: 'عوامی مفاد کی قانونی چارہ جوئی (PIL)' },
          subtitle: { en: 'Legal tool for citizens to seek justice for public interest and disadvantaged groups', hi: 'सार्वजनिक हित और वंचित वर्गों के लिए न्याय पाने का नागरिक कानूनी साधन', ur: 'عوامی مفاد اور پسماندہ طبقوں کے لیے انصاف حاصل کرنے کا شہریوں کا قانونی ذریعہ' },
          sections: [
            {
              id: 'what_is_pil',
              type: 'text',
              heading: { en: 'What is PIL?', hi: 'जनहित याचिका क्या है?', ur: 'PIL کیا ہے؟' },
              text: { en: 'Public Interest Litigation (PIL) is a legal mechanism that allows any citizen or organisation to file a petition in the Supreme Court (under Article 32) or a High Court (under Article 226) on behalf of a person or group whose fundamental rights have been violated but who cannot approach the court themselves due to poverty, ignorance, or social barriers.', hi: 'जनहित याचिका (PIL) एक कानूनी तंत्र है जो किसी भी नागरिक या संगठन को किसी ऐसे व्यक्ति या समूह की ओर से सर्वोच्च न्यायालय (अनुच्छेद 32 के तहत) या उच्च न्यायालय (अनुच्छेद 226 के तहत) में याचिका दायर करने की अनुमति देता है, जिनके मौलिक अधिकारों का उल्लंघन हुआ है, लेकिन वे गरीबी, अज्ञानता या सामाजिक बाधाओं के कारण स्वयं न्यायालय नहीं जा सकते।', ur: 'عوامی مفاد کی قانونی چارہ جوئی (PIL) ایک قانونی طریقہ کار ہے جو کسی بھی شہری یا تنظیم کو کسی ایسے شخص یا گروہ کی طرف سے سپریم کورٹ (آرٹیکل 32 کے تحت) یا ہائی کورٹ (آرٹیکل 226 کے تحت) میں عرضداشت دائر کرنے کی اجازت دیتا ہے جن کے بنیادی حقوق کی خلاف ورزی ہوئی ہو لیکن وہ غربت، لاعلمی یا سماجی رکاوٹوں کی وجہ سے خود عدالت نہیں جا سکتے۔' },
            },
            {
              id: 'who_can_file',
              type: 'points',
              heading: { en: 'Who Can File a PIL', hi: 'PIL कौन दायर कर सकता है', ur: 'PIL کون دائر کر سکتا ہے' },
              points: [
                { bold: { en: 'Any citizen', hi: 'कोई भी नागरिक', ur: 'کوئی بھی شہری' }, text: { en: 'Any Indian citizen acting in good faith for a public cause can file a PIL — the person filing need not be the victim themselves.', hi: 'सार्वजनिक कारण के लिए सद्भावना से काम करने वाला कोई भी भारतीय नागरिक PIL दायर कर सकता है — दायर करने वाले व्यक्ति का खुद पीड़ित होना जरूरी नहीं।', ur: 'عوامی مقصد کے لیے نیک نیتی سے کام کرنے والا کوئی بھی ہندوستانی شہری PIL دائر کر سکتا ہے — دائر کرنے والے شخص کا خود متاثرہ ہونا ضروری نہیں۔' } },
                { bold: { en: 'NGOs and organisations', hi: 'NGO और संगठन', ur: 'NGO اور تنظیمیں' }, text: { en: 'Non-governmental organisations working for social welfare, women\'s rights, or human rights can file PILs on behalf of affected communities.', hi: 'सामाजिक कल्याण, महिला अधिकारों या मानवाधिकारों के लिए काम करने वाले गैर-सरकारी संगठन प्रभावित समुदायों की ओर से PIL दायर कर सकते हैं।', ur: 'سماجی بہبود، خواتین کے حقوق یا انسانی حقوق کے لیے کام کرنے والی غیر سرکاری تنظیمیں متاثرہ برادریوں کی طرف سے PIL دائر کر سکتی ہیں۔' } },
                { bold: { en: 'Court suo motu', hi: 'न्यायालय स्वतः संज्ञान', ur: 'عدالت از خود نوٹس' }, text: { en: 'Courts can themselves take suo motu cognizance of violations reported in newspapers or letters addressed to the court, treating them as PILs.', hi: 'न्यायालय समाचार पत्रों में रिपोर्ट किए गए या न्यायालय को संबोधित पत्रों में बताए गए उल्लंघनों का स्वतः संज्ञान ले सकते हैं और उन्हें PIL के रूप में मान सकते हैं।', ur: 'عدالتیں خود اخبارات میں رپورٹ کی گئی یا عدالت کو لکھے گئے خطوط میں بیان کردہ خلاف ورزیوں کا از خود نوٹس لے سکتی ہیں اور انہیں PIL کے طور پر سمجھ سکتی ہیں۔' } },
              ],
            },
            {
              id: 'pil_for_women',
              type: 'highlight',
              heading: { en: 'PIL as a Tool for Women\'s Rights', hi: 'महिलाओं के अधिकारों के लिए PIL एक साधन के रूप में', ur: 'خواتین کے حقوق کے لیے PIL ایک ذریعے کے طور پر' },
              text: { en: 'PIL has been used to win landmark protections for women in India — including the Vishaka Guidelines on workplace sexual harassment (1997), recognition of domestic violence as a human rights issue, and rights of women in unorganised labour sectors. It remains one of the most powerful tools available to women and advocates fighting systemic injustice.', hi: 'PIL का उपयोग भारत में महिलाओं के लिए ऐतिहासिक सुरक्षाएं प्राप्त करने में किया गया है — जिसमें कार्यस्थल यौन उत्पीड़न पर विशाखा दिशानिर्देश (1997), घरेलू हिंसा को मानवाधिकार मुद्दे के रूप में मान्यता और असंगठित श्रम क्षेत्रों में महिलाओं के अधिकार शामिल हैं।', ur: 'PIL کا استعمال ہندوستان میں خواتین کے لیے تاریخی تحفظات حاصل کرنے کے لیے کیا گیا ہے — جن میں کام کی جگہ جنسی ہراسانی پر وشاکھا رہنما اصول (1997)، گھریلو تشدد کو انسانی حقوق کے مسئلے کے طور پر تسلیم کرنا اور غیر منظم مزدور شعبوں میں خواتین کے حقوق شامل ہیں۔' },
            },
            {
              id: 'how_to_file',
              type: 'points',
              heading: { en: 'How to File a PIL', hi: 'PIL कैसे दायर करें', ur: 'PIL کیسے دائر کریں' },
              points: [
                { bold: { en: 'Choose the right court', hi: 'सही न्यायालय चुनें', ur: 'صحیح عدالت کا انتخاب کریں' }, text: { en: 'File in the Supreme Court if the issue is of national importance or involves enforcement of fundamental rights at the national level. File in the High Court for state-level issues.', hi: 'यदि मामला राष्ट्रीय महत्व का है या राष्ट्रीय स्तर पर मौलिक अधिकारों के प्रवर्तन से संबंधित है तो सर्वोच्च न्यायालय में दायर करें। राज्य-स्तरीय मुद्दों के लिए उच्च न्यायालय में दायर करें।', ur: 'سپریم کورٹ میں دائر کریں اگر معاملہ قومی اہمیت کا ہے یا قومی سطح پر بنیادی حقوق کے نفاذ سے متعلق ہے۔ ریاستی سطح کے مسائل کے لیے ہائی کورٹ میں دائر کریں۔' } },
                { bold: { en: 'Draft the petition', hi: 'याचिका तैयार करें', ur: 'عرضداشت تیار کریں' }, text: { en: 'Write a petition clearly stating the facts, the rights being violated, the affected persons, and the relief being sought. A lawyer is not mandatory — PILs can be filed in person.', hi: 'तथ्यों, उल्लंघन किए जा रहे अधिकारों, प्रभावित व्यक्तियों और मांगी जा रही राहत को स्पष्ट रूप से बताते हुए एक याचिका लिखें। वकील अनिवार्य नहीं है — PIL व्यक्तिगत रूप से दायर की जा सकती है।', ur: 'ایک عرضداشت لکھیں جس میں حقائق، خلاف ورزی ہونے والے حقوق، متاثرہ افراد اور مانگی گئی ریلیف واضح طور پر بیان ہو۔ وکیل لازمی نہیں ہے — PIL ذاتی طور پر دائر کی جا سکتی ہے۔' } },
                { bold: { en: 'Pay the nominal fee', hi: 'मामूली शुल्क अदा करें', ur: 'معمولی فیس ادا کریں' }, text: { en: 'PILs attract a very nominal court fee — often as low as ₹50 — making them accessible to ordinary citizens and organisations without resources.', hi: 'PIL पर बहुत मामूली न्यायालय शुल्क लगता है — अक्सर ₹50 जितना कम — जो इसे साधारण नागरिकों और संसाधनहीन संगठनों के लिए सुलभ बनाता है।', ur: 'PIL پر بہت معمولی عدالتی فیس لگتی ہے — اکثر ₹50 جتنی کم — جو اسے عام شہریوں اور وسائل کے بغیر تنظیموں کے لیے قابل رسائی بناتی ہے۔' } },
                { bold: { en: 'Serve notice', hi: 'नोटिस जारी करें', ur: 'نوٹس جاری کریں' }, text: { en: 'Once admitted by the court, notice is served to the concerned government authority or respondent, who must file a reply within the time given by the court.', hi: 'न्यायालय द्वारा स्वीकार किए जाने के बाद, संबंधित सरकारी प्राधिकरण या प्रतिवादी को नोटिस दिया जाता है, जिन्हें न्यायालय द्वारा दी गई समय सीमा के भीतर जवाब दाखिल करना होता है।', ur: 'عدالت کی طرف سے منظور ہونے کے بعد، متعلقہ سرکاری اتھارٹی یا مدعا علیہ کو نوٹس دیا جاتا ہے، جنہیں عدالت کی طرف سے دی گئی مدت کے اندر جواب دائر کرنا ہوتا ہے۔' } },
              ],
            },
            {
              id: 'documents',
              type: 'points',
              heading: { en: 'Documents Required', hi: 'आवश्यक दस्तावेज', ur: 'ضروری دستاویزات' },
              points: [
                { bold: { en: 'Written petition', hi: 'लिखित याचिका', ur: 'تحریری عرضداشت' }, text: { en: 'A clearly drafted petition stating the cause, facts, and relief sought, addressed to the Chief Justice of the court.', hi: 'कारण, तथ्य और मांगी गई राहत बताते हुए स्पष्ट रूप से तैयार की गई याचिका, न्यायालय के मुख्य न्यायाधीश को संबोधित।', ur: 'وجہ، حقائق اور مانگی گئی ریلیف بیان کرتے ہوئے واضح طور پر تیار کردہ عرضداشت، عدالت کے چیف جسٹس کو مخاطب۔' } },
                { bold: { en: 'Supporting evidence', hi: 'सहायक साक्ष्य', ur: 'معاون شواہد' }, text: { en: 'Newspaper clippings, reports, photographs, affidavits, or any documentary proof supporting the claims made in the petition.', hi: 'समाचार पत्र की कतरनें, रिपोर्ट, फोटोग्राफ, शपथपत्र, या याचिका में किए गए दावों का समर्थन करने वाला कोई भी दस्तावेजी प्रमाण।', ur: 'اخباری تراشے، رپورٹیں، تصاویر، حلف نامے، یا عرضداشت میں کیے گئے دعووں کی تائید کرنے والا کوئی بھی دستاویزی ثبوت۔' } },
                { bold: { en: 'Identity proof', hi: 'पहचान प्रमाण', ur: 'شناختی ثبوت' }, text: { en: 'Proof of identity of the petitioner filing the PIL.', hi: 'PIL दायर करने वाले याचिकाकर्ता का पहचान प्रमाण।', ur: 'PIL دائر کرنے والے عرضی دہندہ کا شناختی ثبوت۔' } },
                { bold: { en: 'Affidavit', hi: 'शपथपत्र', ur: 'حلف نامہ' }, text: { en: 'A sworn affidavit confirming that the facts stated in the petition are true to the best of the petitioner\'s knowledge.', hi: 'एक शपथ पत्र यह पुष्टि करते हुए कि याचिका में बताए गए तथ्य याचिकाकर्ता की सर्वोत्तम जानकारी के अनुसार सत्य हैं।', ur: 'ایک حلف نامہ اس بات کی تصدیق کرتے ہوئے کہ عرضداشت میں بیان کردہ حقائق عرضی دہندہ کی بہترین معلومات کے مطابق درست ہیں۔' } },
              ],
            },
          ],
        },
      ],
    },

  ], // end subcategories
};