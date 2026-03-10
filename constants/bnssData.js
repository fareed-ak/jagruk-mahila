// ============================================================
// constants/bnssData.js
// Jagruk Mahila — Women Rights under Bharatiya Nyaya Suraksha Sanhita
//
// Same structure as constitutionData.js / reproductiveRightsData.js
// Section types: constitutional_text | points | highlight | text
// Access: field[currentLanguage] || field.en
// ============================================================

export const BNSS_DATA = {
    id: 'bnss',
    icon: 'gavel',
    label: {
        en: 'Bharatiya Nyaya Suraksha Sanhita',
        hi: 'भारतीय न्याय सुरक्षा संहिता',
        ur: 'بھارتیہ نیائے سرکشا سنہتا',
    },
    description: {
        en: 'Comprehensive protection and rights for women under the new criminal justice system',
        hi: 'नई आपराधिक न्याय प्रणाली के तहत महिलाओं के लिए व्यापक सुरक्षा और अधिकार',
        ur: 'نئے فوجداری انصاف کے نظام کے تحت خواتین کے لیے جامع تحفظ اور حقوق',
    },

    subcategories: [

        // ══════════════════════════════════════════════════════
        // SUBCATEGORY 1 — ARREST PROCEDURES
        // ══════════════════════════════════════════════════════
        {
            id: 'arrest_procedures',
            icon: 'gavel',
            label: {
                en: 'Procedure for Arrest of Women',
                hi: 'महिलाओं की गिरफ्तारी की प्रक्रिया',
                ur: 'خواتین کی گرفتاری کا طریقہ کار',
            },
            description: {
                en: 'Legal rights and protections for women during arrest procedures under BNSS',
                hi: 'BNSS के तहत गिरफ्तारी प्रक्रियाओं के दौरान महिलाओं के कानूनी अधिकार और सुरक्षाएं',
                ur: 'BNSS کے تحت گرفتاری کے طریقہ کار کے دوران خواتین کے قانونی حقوق اور تحفظات',
            },
            items: [

                // ── Time Restrictions on Arrest ────────────────────
                {
                    id: 'arrest_time_restrictions',
                    icon: 'schedule',
                    title: {
                        en: 'Time Restrictions on Arrest',
                        hi: 'गिरफ्तारी पर समय प्रतिबंध',
                        ur: 'گرفتاری پر وقت کی پابندی',
                    },
                    subtitle: {
                        en: 'No woman shall be arrested after sunset and before sunrise',
                        hi: 'सूर्यास्त के बाद और सूर्योदय से पहले किसी महिला को गिरफ्तार नहीं किया जाएगा',
                        ur: 'غروب آفتاب کے بعد اور طلوع آفتاب سے پہلے کسی عورت کو گرفتار نہیں کیا جائے گا',
                    },
                    sections: [
                        {
                            id: 'time_rule',
                            type: 'highlight',
                            heading: {
                                en: 'Key Protection: Time Restrictions on Arrest',
                                hi: 'मुख्य सुरक्षा: गिरफ्तारी पर समय प्रतिबंध',
                                ur: 'اہم تحفظ: گرفتاری پر وقت کی پابندی',
                            },
                            text: {
                                en: 'No woman shall be arrested after sunset and before sunrise. This fundamental protection ensures that women\'s safety and dignity are maintained during arrest procedures, recognizing their vulnerability during nighttime hours.',
                                hi: 'सूर्यास्त के बाद और सूर्योदय से पहले किसी महिला को गिरफ्तार नहीं किया जाएगा। यह मौलिक सुरक्षा सुनिश्चित करती है कि गिरफ्तारी प्रक्रियाओं के दौरान महिलाओं की सुरक्षा और सम्मान बनाए रखा जाए।',
                                ur: 'غروب آفتاب کے بعد اور طلوع آفتاب سے پہلے کسی عورت کو گرفتار نہیں کیا جائے گا۔ یہ بنیادی تحفظ یقینی بناتا ہے کہ گرفتاری کے طریقہ کار کے دوران خواتین کی حفاظت اور وقار برقرار رہے۔',
                            },
                        },
                        {
                            id: 'exception',
                            type: 'text',
                            heading: {
                                en: 'Exception to the Rule',
                                hi: 'नियम का अपवाद',
                                ur: 'اصول کا استثناء',
                            },
                            text: {
                                en: 'In exceptional circumstances, a woman police officer, with prior written permission of a Judicial Magistrate First Class within whose local jurisdiction the act was committed, may arrest a woman during the prohibited hours. This ensures that even exceptions are subject to judicial oversight.',
                                hi: 'असाधारण परिस्थितियों में, एक महिला पुलिस अधिकारी, जिस स्थानीय क्षेत्र में अपराध किया गया था उस क्षेत्र के प्रथम श्रेणी न्यायिक मजिस्ट्रेट की पूर्व लिखित अनुमति से, निषिद्ध घंटों के दौरान किसी महिला को गिरफ्तार कर सकती है।',
                                ur: 'غیر معمولی حالات میں، ایک خاتون پولیس افسر، جس مقامی علاقے میں جرم کیا گیا اس کے فرسٹ کلاس جوڈیشل مجسٹریٹ کی پیشگی تحریری اجازت سے، ممنوعہ گھنٹوں کے دوران کسی عورت کو گرفتار کر سکتی ہے۔',
                            },
                        },
                    ],
                },

                // ── Right to Free Legal Aid ────────────────────────
                {
                    id: 'free_legal_aid',
                    icon: 'balance',
                    title: {
                        en: 'Right to Free Legal Aid',
                        hi: 'निःशुल्क कानूनी सहायता का अधिकार',
                        ur: 'مفت قانونی امداد کا حق',
                    },
                    subtitle: {
                        en: 'Constitutional right to legal assistance regardless of financial status',
                        hi: 'वित्तीय स्थिति की परवाह किए बिना कानूनी सहायता का संवैधानिक अधिकार',
                        ur: 'مالی حیثیت سے قطع نظر قانونی امداد کا آئینی حق',
                    },
                    sections: [
                        {
                            id: 'constitutional_basis',
                            type: 'constitutional_text',
                            heading: {
                                en: 'Constitutional Foundation',
                                hi: 'संवैधानिक आधार',
                                ur: 'آئینی بنیاد',
                            },
                            text: {
                                en: 'Article 39A of the Constitution provides the right to free legal aid to people who are not in a position to bear the expenses of the proceedings.',
                                hi: 'संविधान का अनुच्छेद 39A उन लोगों को निःशुल्क कानूनी सहायता का अधिकार प्रदान करता है जो कार्यवाही का खर्च उठाने में असमर्थ हैं।',
                                ur: 'آئین کا آرٹیکل 39A ان لوگوں کو مفت قانونی امداد کا حق دیتا ہے جو کارروائی کا خرچ اٹھانے کی پوزیشن میں نہیں ہیں۔',
                            },
                        },
                        {
                            id: 'state_obligation',
                            type: 'text',
                            heading: {
                                en: 'State\'s Obligation',
                                hi: 'राज्य का दायित्व',
                                ur: 'ریاست کی ذمہ داری',
                            },
                            text: {
                                en: 'It is the State\'s obligation to provide adequate legal assistance at its own expense to any arrested person, which includes women. Financial constraints can never be a reason to deny legal representation.',
                                hi: 'यह राज्य का दायित्व है कि वह किसी भी गिरफ्तार व्यक्ति, जिसमें महिलाएं भी शामिल हैं, को अपने खर्चे पर पर्याप्त कानूनी सहायता प्रदान करे। वित्तीय बाधाएं कानूनी प्रतिनिधित्व से वंचित करने का कारण कभी नहीं हो सकतीं।',
                                ur: 'یہ ریاست کی ذمہ داری ہے کہ وہ کسی بھی گرفتار شخص، جس میں خواتین بھی شامل ہیں، کو اپنے خرچ پر مناسب قانونی امداد فراہم کرے۔ مالی رکاوٹیں قانونی نمائندگی سے محروم کرنے کی وجہ کبھی نہیں ہو سکتیں۔',
                            },
                        },
                        {
                            id: 'access_highlight',
                            type: 'highlight',
                            heading: {
                                en: 'Equal Access to Justice',
                                hi: 'न्याय तक समान पहुंच',
                                ur: 'انصاف تک یکساں رسائی',
                            },
                            text: {
                                en: 'Every arrested woman, regardless of her economic status, is entitled to proper legal representation and assistance. Contact the nearest District Legal Services Authority (DLSA) to avail this right.',
                                hi: 'हर गिरफ्तार महिला, चाहे उसकी आर्थिक स्थिति कुछ भी हो, उचित कानूनी प्रतिनिधित्व और सहायता की हकदार है। इस अधिकार का लाभ उठाने के लिए निकटतम जिला कानूनी सेवा प्राधिकरण (DLSA) से संपर्क करें।',
                                ur: 'ہر گرفتار عورت، چاہے اس کی معاشی حیثیت کچھ بھی ہو، مناسب قانونی نمائندگی اور امداد کی حقدار ہے۔ اس حق سے فائدہ اٹھانے کے لیے قریبی ضلعی قانونی خدمات اتھارٹی (DLSA) سے رابطہ کریں۔',
                            },
                        },
                    ],
                },

                // ── Right to Know Grounds of Arrest ───────────────
                {
                    id: 'grounds_of_arrest',
                    icon: 'info',
                    title: {
                        en: 'Right to Know Grounds of Arrest & Bail',
                        hi: 'गिरफ्तारी और जमानत के आधार जानने का अधिकार',
                        ur: 'گرفتاری اور ضمانت کی بنیادیں جاننے کا حق',
                    },
                    subtitle: {
                        en: 'Section 47 BNSS — Every arrested woman must be told why she is being arrested',
                        hi: 'धारा 47 BNSS — हर गिरफ्तार महिला को बताया जाना चाहिए कि उसे क्यों गिरफ्तार किया जा रहा है',
                        ur: 'سیکشن 47 BNSS — ہر گرفتار عورت کو بتایا جانا چاہیے کہ اسے کیوں گرفتار کیا جا رہا ہے',
                    },
                    sections: [
                        {
                            id: 'section_47',
                            type: 'constitutional_text',
                            heading: {
                                en: 'Legal Provision — Section 47 BNSS',
                                hi: 'कानूनी प्रावधान — धारा 47 BNSS',
                                ur: 'قانونی دفعہ — سیکشن 47 BNSS',
                            },
                            text: {
                                en: 'Section 47 of Bharatiya Nyaya Suraksha Sanhita grants rights to an arrested person to know the grounds of their arrest. The police officer executing the arrest must communicate the same to them.',
                                hi: 'भारतीय न्याय सुरक्षा संहिता की धारा 47 गिरफ्तार व्यक्ति को अपनी गिरफ्तारी के आधार जानने का अधिकार देती है। गिरफ्तारी करने वाले पुलिस अधिकारी को उन्हें इसकी सूचना देनी होगी।',
                                ur: 'بھارتیہ نیائے سرکشا سنہتا کا سیکشن 47 گرفتار شخص کو اپنی گرفتاری کی بنیادیں جاننے کا حق دیتا ہے۔ گرفتاری کرنے والے پولیس افسر کو انہیں اس کی اطلاع دینی ہوگی۔',
                            },
                        },
                        {
                            id: 'transparency',
                            type: 'highlight',
                            heading: {
                                en: 'Right to Transparency',
                                hi: 'पारदर्शिता का अधिकार',
                                ur: 'شفافیت کا حق',
                            },
                            text: {
                                en: 'This right ensures transparency in the arrest process and prevents arbitrary detention. Every arrested woman must be clearly informed about the specific charges or reasons for her arrest, enabling her to understand her legal situation and seek appropriate legal remedies.',
                                hi: 'यह अधिकार गिरफ्तारी प्रक्रिया में पारदर्शिता सुनिश्चित करता है और मनमानी हिरासत को रोकता है। हर गिरफ्तार महिला को उसकी गिरफ्तारी के विशिष्ट आरोपों या कारणों के बारे में स्पष्ट रूप से सूचित किया जाना चाहिए।',
                                ur: 'یہ حق گرفتاری کے طریقہ کار میں شفافیت یقینی بناتا ہے اور من مانی حراست کو روکتا ہے۔ ہر گرفتار عورت کو اس کی گرفتاری کے مخصوص الزامات یا وجوہات کے بارے میں واضح طور پر آگاہ کیا جانا چاہیے۔',
                            },
                        },
                    ],
                },

                // ── Right Against Handcuffing ──────────────────────
                {
                    id: 'against_handcuffing',
                    icon: 'security',
                    title: {
                        en: 'Right Against Handcuffing & Manhandling',
                        hi: 'हथकड़ी और दुर्व्यवहार के विरुद्ध अधिकार',
                        ur: 'ہتھکڑی اور بدسلوکی کے خلاف حق',
                    },
                    subtitle: {
                        en: 'Women\'s dignity and modesty must be preserved during arrest at all times',
                        hi: 'गिरफ्तारी के दौरान हर समय महिलाओं की गरिमा और शालीनता बनाए रखनी होगी',
                        ur: 'گرفتاری کے دوران ہر وقت خواتین کا وقار اور شرم و حیا برقرار رکھنی ہوگی',
                    },
                    sections: [
                        {
                            id: 'modesty_protection',
                            type: 'text',
                            heading: {
                                en: 'Protection of Modesty and Dignity',
                                hi: 'शालीनता और गरिमा की सुरक्षा',
                                ur: 'شرم و حیا اور وقار کا تحفظ',
                            },
                            text: {
                                en: 'Even if a woman is accused of an offence, maintaining her modesty is crucial. Women who are arrested have been granted specific rights to protect their dignity during arrest procedures. Law enforcement must handle women with appropriate care and respect, avoiding any form of physical mistreatment or degrading treatment.',
                                hi: 'भले ही किसी महिला पर अपराध का आरोप हो, उसकी शालीनता बनाए रखना महत्वपूर्ण है। गिरफ्तार की गई महिलाओं को गिरफ्तारी प्रक्रियाओं के दौरान अपनी गरिमा की रक्षा के लिए विशिष्ट अधिकार दिए गए हैं।',
                                ur: 'چاہے کسی عورت پر جرم کا الزام ہو، اس کی شرم و حیا برقرار رکھنا ضروری ہے۔ گرفتار خواتین کو گرفتاری کے طریقہ کار کے دوران اپنے وقار کی حفاظت کے لیے مخصوص حقوق دیے گئے ہیں۔',
                            },
                        },
                        {
                            id: 'specific_protections',
                            type: 'points',
                            heading: {
                                en: 'Specific Protections',
                                hi: 'विशिष्ट सुरक्षाएं',
                                ur: 'مخصوص تحفظات',
                            },
                            points: [
                                {
                                    bold: { en: 'No handcuffing without necessity', hi: 'आवश्यकता के बिना हथकड़ी नहीं', ur: 'ضرورت کے بغیر ہتھکڑی نہیں' },
                                    text: { en: 'Handcuffs shall not be used on women unless absolutely necessary and authorised by a Magistrate.', hi: 'जब तक बिल्कुल आवश्यक न हो और मजिस्ट्रेट द्वारा अधिकृत न किया गया हो, महिलाओं पर हथकड़ी का उपयोग नहीं किया जाएगा।', ur: 'جب تک بالکل ضروری نہ ہو اور مجسٹریٹ کی طرف سے مجاز نہ ہو، خواتین پر ہتھکڑی استعمال نہیں کی جائے گی۔' },
                                },
                                {
                                    bold: { en: 'Female officer for search', hi: 'तलाशी के लिए महिला अधिकारी', ur: 'تلاشی کے لیے خاتون افسر' },
                                    text: { en: 'Search of a woman must only be carried out by another woman with strict regard to decency.', hi: 'किसी महिला की तलाशी केवल एक अन्य महिला द्वारा शालीनता का सख्त ध्यान रखते हुए की जानी चाहिए।', ur: 'کسی عورت کی تلاشی صرف ایک دوسری عورت کے ذریعے شائستگی کا سخت خیال رکھتے ہوئے کی جانی چاہیے۔' },
                                },
                                {
                                    bold: { en: 'No physical mistreatment', hi: 'कोई शारीरिक दुर्व्यवहार नहीं', ur: 'کوئی جسمانی بدسلوکی نہیں' },
                                    text: { en: 'Any form of physical abuse, harassment, or degrading treatment of an arrested woman is a punishable offence.', hi: 'गिरफ्तार महिला के साथ किसी भी प्रकार का शारीरिक दुर्व्यवहार, उत्पीड़न या अपमानजनक व्यवहार दंडनीय अपराध है।', ur: 'گرفتار عورت کے ساتھ کسی بھی قسم کی جسمانی بدسلوکی، ہراسانی یا ذلت آمیز سلوک قابل سزا جرم ہے۔' },
                                },
                            ],
                        },
                    ],
                },

                // ── Right to Inform Relatives ──────────────────────
                {
                    id: 'inform_relatives',
                    icon: 'contact_phone',
                    title: {
                        en: 'Right to Inform Relatives or Friends',
                        hi: 'रिश्तेदारों या मित्रों को सूचित करने का अधिकार',
                        ur: 'رشتہ داروں یا دوستوں کو مطلع کرنے کا حق',
                    },
                    subtitle: {
                        en: 'Arrested women cannot be isolated from their support network',
                        hi: 'गिरफ्तार महिलाओं को उनके सहायता नेटवर्क से अलग नहीं किया जा सकता',
                        ur: 'گرفتار خواتین کو ان کے سہارے کے نیٹ ورک سے الگ نہیں کیا جا سکتا',
                    },
                    sections: [
                        {
                            id: 'notification_right',
                            type: 'text',
                            heading: {
                                en: 'Right to Notify Family',
                                hi: 'परिवार को सूचित करने का अधिकार',
                                ur: 'خاندان کو مطلع کرنے کا حق',
                            },
                            text: {
                                en: 'Arrested women have the right to inform their relatives or friends about their arrest. The police are obligated to make arrangements for this communication. Family members and friends can then provide emotional support, arrange for legal assistance, and ensure the woman\'s welfare during the legal process.',
                                hi: 'गिरफ्तार महिलाओं को अपने रिश्तेदारों या मित्रों को अपनी गिरफ्तारी के बारे में सूचित करने का अधिकार है। पुलिस इस संचार की व्यवस्था करने के लिए बाध्य है। परिवार के सदस्य और मित्र फिर भावनात्मक समर्थन दे सकते हैं, कानूनी सहायता की व्यवस्था कर सकते हैं।',
                                ur: 'گرفتار خواتین کو اپنے رشتہ داروں یا دوستوں کو اپنی گرفتاری کے بارے میں مطلع کرنے کا حق ہے۔ پولیس اس مواصلت کا انتظام کرنے کی پابند ہے۔ خاندان کے افراد اور دوست پھر جذباتی سہارا دے سکتے ہیں، قانونی امداد کا انتظام کر سکتے ہیں۔',
                            },
                        },
                        {
                            id: 'isolation_prohibited',
                            type: 'highlight',
                            heading: {
                                en: 'Isolation is Prohibited',
                                hi: 'अलगाव प्रतिबंधित है',
                                ur: 'تنہائی ممنوع ہے',
                            },
                            text: {
                                en: 'No arrested woman can be kept incommunicado. This communication right is essential for maintaining family connections and ensuring proper care. Denial of this right can be challenged before a Magistrate.',
                                hi: 'किसी भी गिरफ्तार महिला को संचार से वंचित नहीं रखा जा सकता। यह संचार अधिकार पारिवारिक संबंध बनाए रखने और उचित देखभाल सुनिश्चित करने के लिए आवश्यक है। इस अधिकार का इनकार मजिस्ट्रेट के समक्ष चुनौती दी जा सकती है।',
                                ur: 'کسی بھی گرفتار عورت کو مواصلت سے محروم نہیں رکھا جا سکتا۔ یہ مواصلت کا حق خاندانی تعلقات برقرار رکھنے اور مناسب دیکھ بھال یقینی بنانے کے لیے ضروری ہے۔ اس حق کی تردید کو مجسٹریٹ کے سامنے چیلنج کیا جا سکتا ہے۔',
                            },
                        },
                    ],
                },

                // ── Rights During Detention ────────────────────────
                {
                    id: 'rights_detention',
                    icon: 'schedule',
                    title: {
                        en: 'Rights During Detention',
                        hi: 'हिरासत के दौरान अधिकार',
                        ur: 'حراست کے دوران حقوق',
                    },
                    subtitle: {
                        en: '24-hour limit, separate custody, and proper arrangements for women',
                        hi: '24 घंटे की सीमा, अलग हिरासत और महिलाओं के लिए उचित व्यवस्था',
                        ur: '24 گھنٹے کی حد، الگ حراست اور خواتین کے لیے مناسب انتظامات',
                    },
                    sections: [
                        {
                            id: 'time_limit',
                            type: 'highlight',
                            heading: {
                                en: '24-Hour Detention Limit',
                                hi: '24 घंटे की हिरासत सीमा',
                                ur: '24 گھنٹے کی حراست کی حد',
                            },
                            text: {
                                en: 'A police officer is not allowed to detain an arrested person — including a woman — for more than 24 hours without producing her before a Magistrate. This prevents indefinite detention without proper legal procedures.',
                                hi: 'एक पुलिस अधिकारी को किसी गिरफ्तार व्यक्ति — महिला सहित — को मजिस्ट्रेट के सामने पेश किए बिना 24 घंटे से अधिक हिरासत में रखने की अनुमति नहीं है।',
                                ur: 'ایک پولیس افسر کو کسی گرفتار شخص — عورت سمیت — کو مجسٹریٹ کے سامنے پیش کیے بغیر 24 گھنٹے سے زیادہ حراست میں رکھنے کی اجازت نہیں ہے۔',
                            },
                        },
                        {
                            id: 'separate_custody',
                            type: 'points',
                            heading: {
                                en: 'Separate Custody Requirements',
                                hi: 'अलग हिरासत की आवश्यकताएं',
                                ur: 'الگ حراست کی ضروریات',
                            },
                            points: [
                                {
                                    bold: { en: 'Separate facilities mandatory', hi: 'अलग सुविधाएं अनिवार्य', ur: 'الگ سہولیات لازمی' },
                                    text: { en: 'Considering the modesty of women, men and women cannot be kept in the same prison or lock-up under any circumstances.', hi: 'महिलाओं की शालीनता को ध्यान में रखते हुए, किसी भी परिस्थिति में पुरुषों और महिलाओं को एक ही जेल या लॉक-अप में नहीं रखा जा सकता।', ur: 'خواتین کی شرم و حیا کو مدنظر رکھتے ہوئے، کسی بھی صورت میں مردوں اور خواتین کو ایک ہی جیل یا لاک اپ میں نہیں رکھا جا سکتا۔' },
                                },
                                {
                                    bold: { en: 'Female guard required', hi: 'महिला गार्ड आवश्यक', ur: 'خاتون گارڈ ضروری' },
                                    text: { en: 'A woman in custody must be kept under the supervision of female police or female staff at all times.', hi: 'हिरासत में एक महिला को हर समय महिला पुलिस या महिला कर्मचारियों की निगरानी में रखा जाना चाहिए।', ur: 'حراست میں ایک عورت کو ہر وقت خاتون پولیس یا خاتون عملے کی نگرانی میں رکھا جانا چاہیے۔' },
                                },
                                {
                                    bold: { en: 'Medical care access', hi: 'चिकित्सा देखभाल तक पहुंच', ur: 'طبی دیکھ بھال تک رسائی' },
                                    text: { en: 'An arrested woman is entitled to medical examination and care if required during her period of detention.', hi: 'गिरफ्तार महिला को हिरासत की अवधि के दौरान आवश्यकता होने पर चिकित्सा जांच और देखभाल का हकदार है।', ur: 'گرفتار عورت حراست کی مدت کے دوران ضرورت پڑنے پر طبی معائنے اور دیکھ بھال کی حقدار ہے۔' },
                                },
                            ],
                        },
                    ],
                },

            ], // end arrest_procedures.items
        },

        // ══════════════════════════════════════════════════════
        // SUBCATEGORY 2 — MAINTENANCE PROVISIONS
        // ══════════════════════════════════════════════════════
        {
            id: 'maintenance',
            icon: 'account_balance_wallet',
            label: {
                en: 'Maintenance Provisions',
                hi: 'भरण-पोषण प्रावधान',
                ur: 'نفقہ کی دفعات',
            },
            description: {
                en: 'Rights to maintenance for women under various laws and legal frameworks',
                hi: 'विभिन्न कानूनों और कानूनी ढांचों के तहत महिलाओं के भरण-पोषण के अधिकार',
                ur: 'مختلف قوانین اور قانونی ڈھانچوں کے تحت خواتین کے نفقہ کے حقوق',
            },
            items: [

                // ── Maintenance Overview ───────────────────────────
                {
                    id: 'maintenance_overview',
                    icon: 'description',
                    title: {
                        en: 'Maintenance Overview',
                        hi: 'भरण-पोषण अवलोकन',
                        ur: 'نفقہ کا جائزہ',
                    },
                    subtitle: {
                        en: 'Section 144 BNSS — Secular maintenance provisions for all women',
                        hi: 'धारा 144 BNSS — सभी महिलाओं के लिए धर्मनिरपेक्ष भरण-पोषण प्रावधान',
                        ur: 'سیکشن 144 BNSS — تمام خواتین کے لیے سیکولر نفقہ کی دفعات',
                    },
                    sections: [
                        {
                            id: 'section_144',
                            type: 'constitutional_text',
                            heading: {
                                en: 'Section 144 BNSS',
                                hi: 'धारा 144 BNSS',
                                ur: 'سیکشن 144 BNSS',
                            },
                            text: {
                                en: 'Section 144 of Bharatiya Nyaya Suraksha Sanhita provides for maintenance to the wife, child, and parents.',
                                hi: 'भारतीय न्याय सुरक्षा संहिता की धारा 144 पत्नी, बच्चे और माता-पिता के लिए भरण-पोषण का प्रावधान करती है।',
                                ur: 'بھارتیہ نیائے سرکشا سنہتا کا سیکشن 144 بیوی، بچے اور والدین کے لیے نفقہ کا انتظام کرتا ہے۔',
                            },
                        },
                        {
                            id: 'secular_nature',
                            type: 'highlight',
                            heading: {
                                en: 'Universal Application',
                                hi: 'सार्वभौमिक अनुप्रयोग',
                                ur: 'آفاقی اطلاق',
                            },
                            text: {
                                en: 'Maintenance under BNSS is secular in nature — any woman belonging to and practising any religion or faith can approach the Court under this provision. Religious background is no barrier to claiming maintenance.',
                                hi: 'BNSS के तहत भरण-पोषण प्रकृति में धर्मनिरपेक्ष है — किसी भी धर्म या आस्था से संबंधित और उसका पालन करने वाली कोई भी महिला इस प्रावधान के तहत न्यायालय का दरवाजा खटखटा सकती है।',
                                ur: 'BNSS کے تحت نفقہ سیکولر نوعیت کا ہے — کسی بھی مذہب یا عقیدے سے تعلق رکھنے والی اور اس پر عمل کرنے والی کوئی بھی عورت اس دفعہ کے تحت عدالت سے رجوع کر سکتی ہے۔',
                            },
                        },
                    ],
                },

                // ── Who Can Claim ──────────────────────────────────
                {
                    id: 'who_can_claim',
                    icon: 'people',
                    title: {
                        en: 'Who Can Claim Maintenance',
                        hi: 'भरण-पोषण का दावा कौन कर सकता है',
                        ur: 'نفقہ کا دعویٰ کون کر سکتا ہے',
                    },
                    subtitle: {
                        en: 'Eligible persons under various maintenance laws',
                        hi: 'विभिन्न भरण-पोषण कानूनों के तहत पात्र व्यक्ति',
                        ur: 'مختلف نفقہ قوانین کے تحت اہل افراد',
                    },
                    sections: [
                        {
                            id: 'eligible_persons',
                            type: 'points',
                            heading: {
                                en: 'Categories of Eligible Persons',
                                hi: 'पात्र व्यक्तियों की श्रेणियां',
                                ur: 'اہل افراد کی اقسام',
                            },
                            points: [
                                {
                                    bold: { en: 'Wife unable to maintain herself', hi: 'स्वयं का भरण-पोषण करने में असमर्थ पत्नी', ur: 'خود کا نفقہ اٹھانے سے قاصر بیوی' },
                                    text: { en: 'A wife who cannot support herself financially has the right to claim maintenance from her husband.', hi: 'जो पत्नी आर्थिक रूप से खुद का भरण-पोषण नहीं कर सकती, उसे अपने पति से भरण-पोषण का दावा करने का अधिकार है।', ur: 'جو بیوی مالی طور پر خود کا نفقہ نہیں اٹھا سکتی، اسے اپنے شوہر سے نفقہ کا دعویٰ کرنے کا حق ہے۔' },
                                },
                                {
                                    bold: { en: 'Legitimate or illegitimate child', hi: 'वैध या अवैध बच्चा', ur: 'جائز یا ناجائز بچہ' },
                                    text: { en: 'Any child, whether born in or out of wedlock, who cannot support themselves is entitled to maintenance until majority.', hi: 'कोई भी बच्चा, चाहे विवाह के भीतर या बाहर पैदा हुआ हो, जो खुद का भरण-पोषण नहीं कर सकता, वयस्कता तक भरण-पोषण का हकदार है।', ur: 'کوئی بھی بچہ، چاہے نکاح کے اندر یا باہر پیدا ہوا ہو، جو خود کا نفقہ نہیں اٹھا سکتا، بالغ ہونے تک نفقہ کا حقدار ہے۔' },
                                },
                                {
                                    bold: { en: 'Adult children with disabilities', hi: 'विकलांग वयस्क बच्चे', ur: 'معذور بالغ بچے' },
                                    text: { en: 'Children who have attained majority but cannot maintain themselves due to physical or mental abnormality or injury are entitled to maintenance.', hi: 'ऐसे बच्चे जो वयस्क हो गए हों लेकिन शारीरिक या मानसिक असामान्यता या चोट के कारण खुद का भरण-पोषण नहीं कर सकते, भरण-पोषण के हकदार हैं।', ur: 'ایسے بچے جو بالغ ہو گئے ہوں لیکن جسمانی یا ذہنی خرابی یا چوٹ کی وجہ سے خود کا نفقہ نہیں اٹھا سکتے، نفقہ کے حقدار ہیں۔' },
                                },
                                {
                                    bold: { en: 'Father or mother', hi: 'पिता या माता', ur: 'باپ یا ماں' },
                                    text: { en: 'Elderly or incapacitated parents who cannot support themselves can claim maintenance from their children.', hi: 'बुजुर्ग या असमर्थ माता-पिता जो खुद का भरण-पोषण नहीं कर सकते, अपने बच्चों से भरण-पोषण का दावा कर सकते हैं।', ur: 'بوڑھے یا معذور والدین جو خود کا نفقہ نہیں اٹھا سکتے، اپنے بچوں سے نفقہ کا دعویٰ کر سکتے ہیں۔' },
                                },
                            ],
                        },
                    ],
                },

                // ── When Maintenance Can Be Invoked ────────────────
                {
                    id: 'when_invoked',
                    icon: 'schedule',
                    title: {
                        en: 'When Can Maintenance Be Invoked',
                        hi: 'भरण-पोषण कब लागू किया जा सकता है',
                        ur: 'نفقہ کب نافذ کیا جا سکتا ہے',
                    },
                    subtitle: {
                        en: 'Circumstances and conditions for filing a maintenance petition',
                        hi: 'भरण-पोषण याचिका दायर करने की परिस्थितियां और शर्तें',
                        ur: 'نفقہ کی عرضداشت دائر کرنے کے حالات اور شرائط',
                    },
                    sections: [
                        {
                            id: 'legal_breach',
                            type: 'text',
                            heading: {
                                en: 'Legal Breach and Court Petition',
                                hi: 'कानूनी उल्लंघन और न्यायालय में याचिका',
                                ur: 'قانونی خلاف ورزی اور عدالت میں عرضداشت',
                            },
                            text: {
                                en: 'Whenever a law governing maintenance is breached, a petition can be filed with a court of competent jurisdiction. The petition will be decided on the merits of the case. There is no minimum waiting period — a petition can be filed as soon as the right to maintenance arises.',
                                hi: 'जब भी भरण-पोषण को नियंत्रित करने वाले कानून का उल्लंघन होता है, सक्षम क्षेत्राधिकार वाले न्यायालय में याचिका दायर की जा सकती है। याचिका मामले की गुण-दोष के आधार पर तय की जाएगी।',
                                ur: 'جب بھی نفقہ کو کنٹرول کرنے والے قانون کی خلاف ورزی ہوتی ہے، اہل دائرہ اختیار کی عدالت میں عرضداشت دائر کی جا سکتی ہے۔ عرضداشت کیس کی خوبیوں کی بنیاد پر فیصل کی جائے گی۔',
                            },
                        },
                        {
                            id: 'common_scenarios',
                            type: 'points',
                            heading: {
                                en: 'Common Scenarios',
                                hi: 'सामान्य परिस्थितियां',
                                ur: 'عام حالات',
                            },
                            points: [
                                {
                                    bold: { en: 'Husband\'s refusal to maintain', hi: 'पति का भरण-पोषण करने से इनकार', ur: 'شوہر کا نفقہ دینے سے انکار' },
                                    text: { en: 'If a husband refuses to maintain his wife, she may approach the court and file for maintenance under Section 144 BNSS.', hi: 'यदि पति अपनी पत्नी का भरण-पोषण करने से इनकार करता है, तो वह न्यायालय जा सकती है और BNSS की धारा 144 के तहत भरण-पोषण के लिए आवेदन कर सकती है।', ur: 'اگر شوہر اپنی بیوی کا نفقہ دینے سے انکار کرتا ہے، تو وہ عدالت جا سکتی ہے اور BNSS کے سیکشن 144 کے تحت نفقہ کے لیے درخواست دے سکتی ہے۔' },
                                },
                                {
                                    bold: { en: 'Domestic violence cases', hi: 'घरेलू हिंसा के मामले', ur: 'گھریلو تشدد کے معاملات' },
                                    text: { en: 'Prima facie evidence of domestic violence is sufficient to obtain maintenance. Courts treat domestic violence as a strong ground for awarding interim maintenance.', hi: 'घरेलू हिंसा का प्रथम दृष्टया साक्ष्य भरण-पोषण प्राप्त करने के लिए पर्याप्त है। न्यायालय घरेलू हिंसा को अंतरिम भरण-पोषण देने का एक मजबूत आधार मानते हैं।', ur: 'گھریلو تشدد کا اولین ثبوت نفقہ حاصل کرنے کے لیے کافی ہے۔ عدالتیں گھریلو تشدد کو عبوری نفقہ دینے کی ایک مضبوط بنیاد مانتی ہیں۔' },
                                },
                                {
                                    bold: { en: 'Desertion or neglect', hi: 'परित्याग या उपेक्षा', ur: 'چھوڑ دینا یا نظرانداز کرنا' },
                                    text: { en: 'A woman who has been deserted or whose husband neglects to provide for her can file for maintenance regardless of whether divorce proceedings have begun.', hi: 'जिस महिला को छोड़ दिया गया है या जिसके पति ने उसका भरण-पोषण करने की उपेक्षा की है, वह तलाक की कार्यवाही शुरू हुई है या नहीं, इसके बावजूद भरण-पोषण के लिए आवेदन कर सकती है।', ur: 'جس عورت کو چھوڑ دیا گیا ہو یا جس کے شوہر نے اس کا نفقہ فراہم کرنے میں غفلت کی ہو، وہ طلاق کی کارروائی شروع ہوئی ہے یا نہیں، اس سے قطع نظر نفقہ کے لیے درخواست دے سکتی ہے۔' },
                                },
                            ],
                        },
                    ],
                },

                // ── Amount of Maintenance ──────────────────────────
                {
                    id: 'amount_maintenance',
                    icon: 'monetization_on',
                    title: {
                        en: 'Amount of Maintenance',
                        hi: 'भरण-पोषण की राशि',
                        ur: 'نفقہ کی رقم',
                    },
                    subtitle: {
                        en: 'How courts determine the amount — fair, appropriate, and case-specific',
                        hi: 'न्यायालय राशि कैसे निर्धारित करते हैं — उचित, उपयुक्त और मामला-विशिष्ट',
                        ur: 'عدالتیں رقم کیسے طے کرتی ہیں — منصفانہ، مناسب اور مخصوص معاملے کے مطابق',
                    },
                    sections: [
                        {
                            id: 'courts_discretion',
                            type: 'text',
                            heading: {
                                en: 'Court\'s Discretion',
                                hi: 'न्यायालय का विवेकाधिकार',
                                ur: 'عدالت کی صوابدید',
                            },
                            text: {
                                en: 'Maintenance that is considered fair, appropriate, and reasonable by the courts in normal circumstances may be granted. There is no fixed amount — it varies from case to case depending on the circumstances of both the petitioner and respondent, including their standard of living and the respondent\'s financial capacity.',
                                hi: 'जो भरण-पोषण सामान्य परिस्थितियों में न्यायालयों द्वारा उचित, उपयुक्त और तर्कसंगत माना जाता है, वह दिया जा सकता है। कोई निश्चित राशि नहीं है — यह याचिकाकर्ता और प्रतिवादी दोनों की परिस्थितियों के आधार पर मामले दर मामले अलग होती है।',
                                ur: 'جو نفقہ عام حالات میں عدالتوں کی طرف سے منصفانہ، مناسب اور معقول سمجھا جاتا ہے، دیا جا سکتا ہے۔ کوئی مقررہ رقم نہیں ہے — یہ درخواست گزار اور مدعا علیہ دونوں کے حالات کے لحاظ سے معاملے در معاملے مختلف ہوتی ہے۔',
                            },
                        },
                        {
                            id: 'factors',
                            type: 'points',
                            heading: {
                                en: 'Factors Considered by Courts',
                                hi: 'न्यायालयों द्वारा विचारित कारक',
                                ur: 'عدالتوں کی طرف سے زیر غور عوامل',
                            },
                            points: [
                                {
                                    bold: { en: 'Financial status of both parties', hi: 'दोनों पक्षों की वित्तीय स्थिति', ur: 'دونوں فریقوں کی مالی حیثیت' },
                                    text: { en: 'Income, assets, and financial capacity of both the person claiming and the person obligated to pay maintenance are carefully evaluated.', hi: 'भरण-पोषण का दावा करने वाले और भरण-पोषण देने के लिए बाध्य दोनों व्यक्तियों की आय, संपत्ति और वित्तीय क्षमता का सावधानीपूर्वक मूल्यांकन किया जाता है।', ur: 'نفقہ کا دعویٰ کرنے والے اور نفقہ دینے کے پابند دونوں افراد کی آمدنی، اثاثے اور مالی صلاحیت کا بغور جائزہ لیا جاتا ہے۔' },
                                },
                                {
                                    bold: { en: 'Standard of living', hi: 'जीवन स्तर', ur: 'معیار زندگی' },
                                    text: { en: 'The standard of living maintained during the relationship or marriage is taken into account to ensure continuity of lifestyle.', hi: 'रिश्ते या विवाह के दौरान बनाए गए जीवन स्तर को जीवनशैली की निरंतरता सुनिश्चित करने के लिए ध्यान में रखा जाता है।', ur: 'رشتے یا شادی کے دوران برقرار رکھا گیا معیار زندگی طرز زندگی کا تسلسل یقینی بنانے کے لیے مدنظر رکھا جاتا ہے۔' },
                                },
                                {
                                    bold: { en: 'Individual circumstances', hi: 'व्यक्तिगत परिस्थितियां', ur: 'انفرادی حالات' },
                                    text: { en: 'Specific needs including health, age, number of dependents, and ability to earn independently are all considered.', hi: 'स्वास्थ्य, आयु, आश्रितों की संख्या और स्वतंत्र रूप से कमाने की क्षमता सहित विशिष्ट आवश्यकताओं पर सभी विचार किए जाते हैं।', ur: 'صحت، عمر، زیر کفالت افراد کی تعداد اور آزادانہ طور پر کمانے کی صلاحیت سمیت مخصوص ضروریات کو مدنظر رکھا جاتا ہے۔' },
                                },
                            ],
                        },
                        {
                            id: 'interim_maintenance',
                            type: 'highlight',
                            heading: {
                                en: 'Interim Maintenance',
                                hi: 'अंतरिम भरण-पोषण',
                                ur: 'عبوری نفقہ',
                            },
                            text: {
                                en: 'Courts can grant interim maintenance during the pendency of the main case, ensuring that the woman is not left without financial support while the full case is being heard. Interim maintenance can be sought and granted quickly — often within the first few hearings.',
                                hi: 'न्यायालय मुख्य मामले की लंबितता के दौरान अंतरिम भरण-पोषण दे सकते हैं, यह सुनिश्चित करते हुए कि पूरे मामले की सुनवाई के दौरान महिला वित्तीय सहायता के बिना न रहे।',
                                ur: 'عدالتیں مرکزی مقدمے کی زیر التواء مدت کے دوران عبوری نفقہ دے سکتی ہیں، یہ یقینی بناتے ہوئے کہ پورے مقدمے کی سماعت کے دوران عورت مالی سہارے کے بغیر نہ رہے۔',
                            },
                        },
                    ],
                },

            ], // end maintenance.items
        },

        // ══════════════════════════════════════════════════════
        // SUBCATEGORY 3 — BAIL PROVISIONS
        // ══════════════════════════════════════════════════════
        {
            id: 'bail_provisions',
            icon: 'balance',
            label: {
                en: 'Bail Provisions for Women',
                hi: 'महिलाओं के लिए जमानत प्रावधान',
                ur: 'خواتین کے لیے ضمانت کی دفعات',
            },
            description: {
                en: 'Special bail provisions and exceptions for women under Section 480 BNSS',
                hi: 'धारा 480 BNSS के तहत महिलाओं के लिए विशेष जमानत प्रावधान और अपवाद',
                ur: 'سیکشن 480 BNSS کے تحت خواتین کے لیے خصوصی ضمانت کی دفعات اور استثناء',
            },
            items: [

                // ── Section 480 Overview ───────────────────────────
                {
                    id: 'bail_section_480',
                    icon: 'balance',
                    title: {
                        en: 'Bail Under Section 480 BNSS',
                        hi: 'धारा 480 BNSS के तहत जमानत',
                        ur: 'سیکشن 480 BNSS کے تحت ضمانت',
                    },
                    subtitle: {
                        en: 'Special exception — women can be granted bail even in serious non-bailable offences',
                        hi: 'विशेष अपवाद — गंभीर गैर-जमानती अपराधों में भी महिलाओं को जमानत दी जा सकती है',
                        ur: 'خصوصی استثناء — سنگین ناقابل ضمانت جرائم میں بھی خواتین کو ضمانت دی جا سکتی ہے',
                    },
                    sections: [
                        {
                            id: 'section_480_text',
                            type: 'constitutional_text',
                            heading: {
                                en: 'Section 480 of BNSS',
                                hi: 'BNSS की धारा 480',
                                ur: 'BNSS کا سیکشن 480',
                            },
                            text: {
                                en: 'Section 480 of Bharatiya Nyaya Suraksha Sanhita deals with bail in non-bailable offences. The court may grant bail even in restricted cases if such person is under the age of 16, or is a woman, or is sick or infirm.',
                                hi: 'भारतीय न्याय सुरक्षा संहिता की धारा 480 गैर-जमानती अपराधों में जमानत से संबंधित है। न्यायालय प्रतिबंधित मामलों में भी जमानत दे सकता है यदि ऐसा व्यक्ति 16 वर्ष से कम आयु का हो, या महिला हो, या बीमार या अशक्त हो।',
                                ur: 'بھارتیہ نیائے سرکشا سنہتا کا سیکشن 480 ناقابل ضمانت جرائم میں ضمانت سے متعلق ہے۔ عدالت محدود معاملات میں بھی ضمانت دے سکتی ہے اگر ایسا شخص 16 سال سے کم عمر ہو، یا عورت ہو، یا بیمار یا ناتواں ہو۔',
                            },
                        },
                        {
                            id: 'general_restrictions',
                            type: 'points',
                            heading: {
                                en: 'General Restrictions on Bail (Section 480)',
                                hi: 'जमानत पर सामान्य प्रतिबंध (धारा 480)',
                                ur: 'ضمانت پر عمومی پابندیاں (سیکشن 480)',
                            },
                            points: [
                                {
                                    bold: { en: 'Death or life imprisonment cases', hi: 'मृत्यु या आजीवन कारावास के मामले', ur: 'موت یا عمر قید کے معاملات' },
                                    text: { en: 'A person shall not ordinarily be released on bail if there is reasonable ground to believe they committed an offence punishable with death or life imprisonment.', hi: 'यदि यह मानने का उचित आधार हो कि व्यक्ति ने मृत्यु दंड या आजीवन कारावास से दंडनीय अपराध किया है तो सामान्यतः जमानत नहीं दी जाएगी।', ur: 'اگر یہ ماننے کی معقول وجہ ہو کہ شخص نے موت یا عمر قید سے قابل سزا جرم کیا ہے تو عام طور پر ضمانت نہیں دی جائے گی۔' },
                                },
                                {
                                    bold: { en: 'Previous serious conviction', hi: 'पूर्व गंभीर दोषसिद्धि', ur: 'پچھلی سنگین سزایابی' },
                                    text: { en: 'If previously convicted for an offence punishable with death, life imprisonment, or imprisonment for 7 or more years.', hi: 'यदि पहले मृत्युदंड, आजीवन कारावास या 7 या अधिक वर्षों की कैद से दंडनीय अपराध के लिए दोषी ठहराया गया हो।', ur: 'اگر پہلے موت، عمر قید یا 7 یا زیادہ سال کی قید سے قابل سزا جرم کے لیے سزایاب ہو چکا ہو۔' },
                                },
                                {
                                    bold: { en: 'Repeat offender', hi: 'बार-बार अपराध करने वाला', ur: 'بار بار جرم کرنے والا' },
                                    text: { en: 'If previously convicted on two or more occasions for offences with imprisonment between 3 and 7 years.', hi: 'यदि 3 से 7 वर्ष के बीच कारावास वाले अपराधों के लिए दो या अधिक बार पहले दोषी ठहराया गया हो।', ur: 'اگر 3 سے 7 سال کے درمیان قید والے جرائم کے لیے دو یا زیادہ بار پہلے سزایاب ہو چکا ہو۔' },
                                },
                            ],
                        },
                        {
                            id: 'women_exception',
                            type: 'highlight',
                            heading: {
                                en: 'Special Exception for Women',
                                hi: 'महिलाओं के लिए विशेष अपवाद',
                                ur: 'خواتین کے لیے خصوصی استثناء',
                            },
                            text: {
                                en: 'Despite the general restrictions above, the court may grant bail to a woman even in serious non-bailable cases. This special provision reflects the legislature\'s recognition of gender-specific vulnerabilities and the need for protective measures in the criminal justice system. However, each case is considered on its individual merits.',
                                hi: 'उपरोक्त सामान्य प्रतिबंधों के बावजूद, न्यायालय गंभीर गैर-जमानती मामलों में भी महिला को जमानत दे सकता है। यह विशेष प्रावधान लिंग-विशिष्ट कमजोरियों की पहचान और आपराधिक न्याय प्रणाली में सुरक्षात्मक उपायों की आवश्यकता को दर्शाता है।',
                                ur: 'مذکورہ بالا عمومی پابندیوں کے باوجود، عدالت سنگین ناقابل ضمانت معاملات میں بھی عورت کو ضمانت دے سکتی ہے۔ یہ خصوصی دفعہ جنس کے حوالے سے کمزوریوں کی شناخت اور فوجداری انصاف کے نظام میں حفاظتی اقدامات کی ضرورت کو ظاہر کرتی ہے۔',
                            },
                        },
                        {
                            id: 'how_to_apply',
                            type: 'points',
                            heading: {
                                en: 'How Women Can Apply for Bail',
                                hi: 'महिलाएं जमानत के लिए आवेदन कैसे कर सकती हैं',
                                ur: 'خواتین ضمانت کے لیے درخواست کیسے دے سکتی ہیں',
                            },
                            points: [
                                {
                                    bold: { en: 'Engage a lawyer', hi: 'वकील नियुक्त करें', ur: 'وکیل مقرر کریں' },
                                    text: { en: 'Engage a qualified lawyer to file a bail application before the competent court. If unable to afford one, seek free legal aid from the District Legal Services Authority.', hi: 'सक्षम न्यायालय के समक्ष जमानत आवेदन दायर करने के लिए एक योग्य वकील नियुक्त करें। यदि वहन करने में असमर्थ हों, तो जिला कानूनी सेवा प्राधिकरण से निःशुल्क कानूनी सहायता लें।', ur: 'اہل عدالت کے سامنے ضمانت کی درخواست دائر کرنے کے لیے ایک اہل وکیل مقرر کریں۔ اگر برداشت کرنے سے قاصر ہوں تو ضلعی قانونی خدمات اتھارٹی سے مفت قانونی امداد لیں۔' },
                                },
                                {
                                    bold: { en: 'Cite Section 480 exception', hi: 'धारा 480 के अपवाद का हवाला दें', ur: 'سیکشن 480 کے استثناء کا حوالہ دیں' },
                                    text: { en: 'Specifically reference the special exception for women under Section 480 BNSS in the bail application.', hi: 'जमानत आवेदन में BNSS की धारा 480 के तहत महिलाओं के लिए विशेष अपवाद का विशेष रूप से उल्लेख करें।', ur: 'ضمانت کی درخواست میں BNSS کے سیکشن 480 کے تحت خواتین کے لیے خصوصی استثناء کا خاص طور پر ذکر کریں۔' },
                                },
                                {
                                    bold: { en: 'Present personal circumstances', hi: 'व्यक्तिगत परिस्थितियां प्रस्तुत करें', ur: 'ذاتی حالات پیش کریں' },
                                    text: { en: 'Highlight personal circumstances such as dependent children, health conditions, and family responsibilities, as these strengthen the case for bail.', hi: 'आश्रित बच्चों, स्वास्थ्य स्थितियों और पारिवारिक जिम्मेदारियों जैसी व्यक्तिगत परिस्थितियों को उजागर करें, क्योंकि ये जमानत के मामले को मजबूत करती हैं।', ur: 'زیر کفالت بچوں، صحت کی حالت اور خاندانی ذمہ داریوں جیسے ذاتی حالات کو اجاگر کریں، کیونکہ یہ ضمانت کے معاملے کو مضبوط کرتے ہیں۔' },
                                },
                                {
                                    bold: { en: 'Court consideration', hi: 'न्यायालय द्वारा विचार', ur: 'عدالت کا غور' },
                                    text: { en: 'The court will weigh the exception against the nature of the offence and may grant bail with or without conditions.', hi: 'न्यायालय अपराध की प्रकृति के विरुद्ध अपवाद का वजन करेगा और शर्तों के साथ या बिना शर्तों के जमानत दे सकता है।', ur: 'عدالت جرم کی نوعیت کے مقابلے میں استثناء کو تولے گی اور شرائط کے ساتھ یا بغیر شرائط کے ضمانت دے سکتی ہے۔' },
                                },
                            ],
                        },
                    ],
                },

            ], // end bail_provisions.items
        },

    ], // end subcategories
};