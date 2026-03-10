// ============================================================
// constants/reproductiveRightsData.js
// Jagruk Mahila — Reproductive Rights
//
// Same structure as constitutionData.js
// Section types: constitutional_text | points | highlight | text
// Access: field[currentLanguage] || field.en
// ============================================================

export const REPRODUCTIVE_RIGHTS_DATA = {
    id: 'reproductive_rights',
    icon: 'pregnant_woman',
    label: {
        en: 'Reproductive Rights',
        hi: 'प्रजनन अधिकार',
        ur: 'تولیدی حقوق',
    },
    description: {
        en: 'Comprehensive guide to women\'s reproductive rights and legal protections in India',
        hi: 'भारत में महिलाओं के प्रजनन अधिकारों और कानूनी सुरक्षाओं की व्यापक मार्गदर्शिका',
        ur: 'ہندوستان میں خواتین کے تولیدی حقوق اور قانونی تحفظات کی جامع رہنمائی',
    },

    subcategories: [

        // ══════════════════════════════════════════════════════
        // SUBCATEGORY 1 — PCPNDT ACT, 1994
        // ══════════════════════════════════════════════════════
        {
            id: 'pcpndt',
            icon: 'science',
            label: {
                en: 'Pre-Conception & Pre-Natal Diagnostic Techniques Act, 1994',
                hi: 'गर्भधारण पूर्व और प्रसव पूर्व निदान तकनीक अधिनियम, 1994',
                ur: 'قبل از حمل اور قبل از پیدائش تشخیصی تکنیک قانون، 1994',
            },
            description: {
                en: 'Prohibition of sex selection and regulation of pre-natal diagnostic techniques',
                hi: 'लिंग चयन का निषेध और प्रसव पूर्व निदान तकनीकों का विनियमन',
                ur: 'جنس کے انتخاب کی ممانعت اور قبل از پیدائش تشخیصی تکنیکوں کا ضابطہ',
            },
            items: [

                // ── Intent of the Act ──────────────────────────────
                {
                    id: 'pcpndt_intent',
                    icon: 'info',
                    title: { en: 'Intent of the Act', hi: 'अधिनियम का उद्देश्य', ur: 'قانون کا مقصد' },
                    subtitle: { en: 'Purpose and objectives of the PCPNDT Act, 1994', hi: 'PCPNDT अधिनियम, 1994 का उद्देश्य और लक्ष्य', ur: 'PCPNDT قانون، 1994 کا مقصد اور اہداف' },
                    sections: [
                        {
                            id: 'primary_objectives',
                            type: 'points',
                            heading: { en: 'Primary Objectives', hi: 'प्राथमिक उद्देश्य', ur: 'بنیادی مقاصد' },
                            points: [
                                { bold: { en: 'Prohibition of sex selection', hi: 'लिंग चयन का निषेध', ur: 'جنس کے انتخاب کی ممانعت' }, text: { en: 'To prohibit sex selection and to regulate the use and prevent misuse of pre-natal diagnostic techniques.', hi: 'लिंग चयन को प्रतिबंधित करना और प्रसव पूर्व निदान तकनीकों के उपयोग को विनियमित करना तथा दुरुपयोग रोकना।', ur: 'جنس کے انتخاب کو ممنوع قرار دینا اور قبل از پیدائش تشخیصی تکنیکوں کے استعمال کو منظم کرنا اور غلط استعمال روکنا۔' } },
                                { bold: { en: 'Prevention of sex-selective procedures', hi: 'लिंग-चयनात्मक प्रक्रियाओं की रोकथाम', ur: 'جنس کے انتخاب کے طریقوں کی روک تھام' }, text: { en: 'To prohibit the selection of sex using any pre-conception or pre-natal procedures.', hi: 'किसी भी गर्भधारण पूर्व या प्रसव पूर्व प्रक्रियाओं का उपयोग करके लिंग चयन को प्रतिबंधित करना।', ur: 'کسی بھی قبل از حمل یا قبل از پیدائش طریقوں کا استعمال کرتے ہوئے جنس کے انتخاب کو ممنوع قرار دینا۔' } },
                                { bold: { en: 'Legal restrictions on family members', hi: 'परिवार के सदस्यों पर कानूनी प्रतिबंध', ur: 'خاندان کے افراد پر قانونی پابندیاں' }, text: { en: 'Relatives and the husband of a pregnant woman are prohibited from seeking or encouraging sex-selection techniques. (Section 2(o), 3A and 4)', hi: 'गर्भवती महिला के रिश्तेदारों और पति को लिंग-चयन तकनीकों की मांग करने या प्रोत्साहित करने से प्रतिबंधित किया गया है। (धारा 2(o), 3A और 4)', ur: 'حاملہ عورت کے رشتہ داروں اور شوہر کو جنس کے انتخاب کی تکنیکوں کی تلاش یا حوصلہ افزائی سے ممنوع کیا گیا ہے۔ (سیکشن 2(o)، 3A اور 4)' } },
                            ],
                        },
                        {
                            id: 'background',
                            type: 'text',
                            heading: { en: 'Background and Context', hi: 'पृष्ठभूमि और संदर्भ', ur: 'پس منظر اور سیاق' },
                            text: { en: 'The PCPNDT Act was enacted to address the declining sex ratio in India due to female foeticide. It aims to prevent the misuse of diagnostic techniques for sex determination and subsequent termination of female foetuses, while ensuring these techniques remain available for legitimate medical purposes such as detecting genetic abnormalities.', hi: 'PCPNDT अधिनियम भारत में कन्या भ्रूण हत्या के कारण घटते लिंगानुपात की समस्या से निपटने के लिए बनाया गया था। इसका उद्देश्य लिंग निर्धारण के लिए निदान तकनीकों के दुरुपयोग को रोकना है, साथ ही इन तकनीकों को आनुवंशिक असामान्यताओं का पता लगाने जैसे वैध चिकित्सा उद्देश्यों के लिए उपलब्ध रखना है।', ur: 'PCPNDT قانون ہندوستان میں لڑکیوں کے قتل کی وجہ سے گرتے صنفی تناسب کے مسئلے سے نمٹنے کے لیے بنایا گیا تھا۔ اس کا مقصد جنس کی تشخیص کے لیے تشخیصی تکنیکوں کے غلط استعمال کو روکنا ہے، ساتھ ہی ان تکنیکوں کو جینیاتی خرابیوں کی شناخت جیسے جائز طبی مقاصد کے لیے دستیاب رکھنا ہے۔' },
                        },
                    ],
                },

                // ── Diagnostic Techniques Conditions ──────────────
                {
                    id: 'pcpndt_conditions',
                    icon: 'medical_services',
                    title: { en: 'When Pre-natal Diagnostic Techniques May Be Conducted', hi: 'प्रसव पूर्व निदान तकनीकें कब की जा सकती हैं', ur: 'قبل از پیدائش تشخیصی تکنیکیں کب کی جا سکتی ہیں' },
                    subtitle: { en: 'Permitted conditions and qualifying criteria', hi: 'अनुमत शर्तें और योग्यता मानदंड', ur: 'اجازت یافتہ حالات اور اہلیت کے معیار' },
                    sections: [
                        {
                            id: 'permitted_purposes',
                            type: 'text',
                            heading: { en: 'Permitted Purposes', hi: 'अनुमत उद्देश्य', ur: 'اجازت یافتہ مقاصد' },
                            text: { en: 'The use of pre-natal diagnostic techniques is permitted strictly for detecting specific genetic abnormalities as defined under the Act or subsequently notified by the Government. These techniques may only be conducted when at least one qualifying condition is fulfilled.', hi: 'प्रसव पूर्व निदान तकनीकों का उपयोग केवल अधिनियम के तहत परिभाषित या बाद में सरकार द्वारा अधिसूचित विशिष्ट आनुवंशिक असामान्यताओं का पता लगाने के लिए सख्ती से अनुमत है।', ur: 'قبل از پیدائش تشخیصی تکنیکوں کا استعمال صرف قانون کے تحت بیان کردہ یا بعد میں حکومت کی طرف سے مطلع کردہ مخصوص جینیاتی خرابیوں کی شناخت کے لیے سختی سے اجازت یافتہ ہے۔' },
                        },
                        {
                            id: 'qualifying_conditions',
                            type: 'points',
                            heading: { en: 'Qualifying Conditions', hi: 'योग्यता शर्तें', ur: 'اہلیت کی شرائط' },
                            points: [
                                { bold: { en: 'Age Factor', hi: 'आयु कारक', ur: 'عمر کا عنصر' }, text: { en: 'The pregnant woman is above 35 years of age.', hi: 'गर्भवती महिला की आयु 35 वर्ष से अधिक है।', ur: 'حاملہ عورت کی عمر 35 سال سے زیادہ ہے۔' } },
                                { bold: { en: 'Previous Pregnancy Loss', hi: 'पिछली गर्भावस्था हानि', ur: 'پچھلی حمل کا نقصان' }, text: { en: 'She has experienced two or more instances of spontaneous abortion or foetal loss.', hi: 'उसे दो या अधिक बार अनायास गर्भपात या भ्रूण हानि का अनुभव हुआ है।', ur: 'اسے دو یا زیادہ بار خودبخود اسقاط حمل یا جنین کے نقصان کا سامنا ہوا ہے۔' } },
                                { bold: { en: 'Exposure to Harmful Agents', hi: 'हानिकारक एजेंटों के संपर्क में', ur: 'نقصاندہ عوامل کی زد میں' }, text: { en: 'She has been exposed to potentially teratogenic agents such as drugs, radiation, infection, or hazardous chemicals.', hi: 'वह संभावित रूप से टेराटोजेनिक एजेंटों जैसे दवाओं, विकिरण, संक्रमण या खतरनाक रसायनों के संपर्क में आई है।', ur: 'وہ ممکنہ طور پر نقصاندہ عوامل جیسے دوائیں، تابکاری، انفیکشن، یا خطرناک کیمیکلز کی زد میں آئی ہے۔' } },
                                { bold: { en: 'Family History', hi: 'पारिवारिक इतिहास', ur: 'خاندانی تاریخ' }, text: { en: 'There is a documented family history of mental retardation, physical deformities, or other heritable genetic diseases.', hi: 'मानसिक मंदता, शारीरिक विकृतियों या अन्य वंशानुगत आनुवंशिक बीमारियों का दस्तावेजीकृत पारिवारिक इतिहास है।', ur: 'ذہنی پسماندگی، جسمانی خرابیوں، یا دیگر موروثی جینیاتی بیماریوں کی دستاویزی خاندانی تاریخ ہے۔' } },
                            ],
                        },
                        {
                            id: 'documentation',
                            type: 'highlight',
                            heading: { en: 'Important', hi: 'महत्वपूर्ण', ur: 'اہم' },
                            text: { en: 'The medical reason for conducting such diagnostic procedures must be formally documented in writing at the time they are performed. All procedures must be conducted under proper medical supervision at registered facilities.', hi: 'ऐसी निदान प्रक्रियाओं को करने का चिकित्सा कारण उन्हें करते समय लिखित रूप में औपचारिक रूप से दर्ज किया जाना चाहिए। सभी प्रक्रियाएं पंजीकृत सुविधाओं पर उचित चिकित्सा पर्यवेक्षण में की जानी चाहिए।', ur: 'ایسے تشخیصی طریقہ کار کرنے کی طبی وجہ انہیں کرنے کے وقت تحریری طور پر باقاعدہ درج کی جانی چاہیے۔ تمام طریقہ کار رجسٹرڈ سہولیات پر مناسب طبی نگرانی میں کیے جانے چاہئیں۔' },
                        },
                    ],
                },

                // ── Prerequisites for Pregnant Women ──────────────
                {
                    id: 'pcpndt_prerequisites',
                    icon: 'pregnant_woman',
                    title: { en: 'Pre-requisites for Pregnant Women', hi: 'गर्भवती महिलाओं के लिए पूर्व-आवश्यकताएं', ur: 'حاملہ خواتین کے لیے ضروری شرائط' },
                    subtitle: { en: 'Consent and information requirements before any procedure', hi: 'किसी भी प्रक्रिया से पहले सहमति और जानकारी की आवश्यकताएं', ur: 'کسی بھی طریقہ کار سے پہلے رضامندی اور معلومات کی ضروریات' },
                    sections: [
                        {
                            id: 'informed_consent',
                            type: 'text',
                            heading: { en: 'Informed Consent Requirements', hi: 'सूचित सहमति की आवश्यकताएं', ur: 'باخبر رضامندی کی ضروریات' },
                            text: { en: 'If a pregnant woman meets any qualifying criteria and requires a pre-natal diagnostic procedure, such techniques may only be conducted after all known side effects and potential consequences have been clearly explained to her. Her written consent must then be obtained in a language she fully understands.', hi: 'यदि कोई गर्भवती महिला किसी भी योग्यता मानदंड को पूरा करती है और उसे प्रसव पूर्व निदान प्रक्रिया की आवश्यकता है, तो ऐसी तकनीकें केवल तभी की जा सकती हैं जब सभी ज्ञात दुष्प्रभावों और संभावित परिणामों के बारे में उसे स्पष्ट रूप से समझाया गया हो और उसकी लिखित सहमति प्राप्त की गई हो।', ur: 'اگر کوئی حاملہ عورت کسی اہلیت کے معیار پر پوری اترتی ہے اور اسے قبل از پیدائش تشخیصی طریقہ کار کی ضرورت ہے، تو ایسی تکنیکیں صرف تب کی جا سکتی ہیں جب تمام معلوم ضمنی اثرات اور ممکنہ نتائج کے بارے میں اسے واضح طور پر بتایا گیا ہو اور اس کی تحریری رضامندی حاصل کی گئی ہو۔' },
                        },
                        {
                            id: 'consent_requirements',
                            type: 'points',
                            heading: { en: 'Consent Ensures', hi: 'सहमति सुनिश्चित करती है', ur: 'رضامندی یقینی بناتی ہے' },
                            points: [
                                { bold: { en: 'Full Understanding', hi: 'पूर्ण समझ', ur: 'مکمل سمجھ' }, text: { en: 'The woman comprehends all aspects of the procedure including nature, purpose, risks, and alternatives.', hi: 'महिला प्रक्रिया के सभी पहलुओं को समझती है जिसमें प्रकृति, उद्देश्य, जोखिम और विकल्प शामिल हैं।', ur: 'عورت طریقہ کار کے تمام پہلوؤں کو سمجھتی ہے جن میں نوعیت، مقصد، خطرات اور متبادل شامل ہیں۔' } },
                                { bold: { en: 'Voluntary Participation', hi: 'स्वैच्छिक भागीदारी', ur: 'رضاکارانہ شرکت' }, text: { en: 'The decision is made without any coercion from the husband, relatives, or medical staff.', hi: 'निर्णय पति, रिश्तेदारों या चिकित्सा कर्मचारियों के किसी भी दबाव के बिना किया जाता है।', ur: 'فیصلہ شوہر، رشتہ داروں یا طبی عملے کے کسی دباؤ کے بغیر کیا جاتا ہے۔' } },
                                { bold: { en: 'Language Accessibility', hi: 'भाषाई पहुंच', ur: 'زبان کی سہولت' }, text: { en: 'Consent must be obtained in a language the pregnant woman fully understands, ensuring genuine informed consent.', hi: 'सहमति उस भाषा में प्राप्त की जानी चाहिए जिसे गर्भवती महिला पूरी तरह समझती है, जिससे वास्तविक सूचित सहमति सुनिश्चित हो।', ur: 'رضامندی اس زبان میں حاصل کی جانی چاہیے جسے حاملہ عورت پوری طرح سمجھتی ہے، جس سے حقیقی باخبر رضامندی یقینی ہو۔' } },
                                { bold: { en: 'Documentation', hi: 'दस्तावेजीकरण', ur: 'دستاویزسازی' }, text: { en: 'Proper written records must be maintained for both legal and medical purposes.', hi: 'कानूनी और चिकित्सा दोनों उद्देश्यों के लिए उचित लिखित रिकॉर्ड बनाए रखने होंगे।', ur: 'قانونی اور طبی دونوں مقاصد کے لیے مناسب تحریری ریکارڈ رکھنا ضروری ہے۔' } },
                            ],
                        },
                    ],
                },

                // ── Genetic Centers ────────────────────────────────
                {
                    id: 'pcpndt_genetic_centers',
                    icon: 'science',
                    title: { en: 'Genetic Counselling Centers & Laboratories', hi: 'आनुवंशिक परामर्श केंद्र और प्रयोगशालाएं', ur: 'جینیاتی مشاورتی مراکز اور لیبارٹریاں' },
                    subtitle: { en: 'Definitions and mandatory registration requirements', hi: 'परिभाषाएं और अनिवार्य पंजीकरण आवश्यकताएं', ur: 'تعریفیں اور لازمی رجسٹریشن کی ضروریات' },
                    sections: [
                        {
                            id: 'definitions',
                            type: 'points',
                            heading: { en: 'Facility Definitions', hi: 'सुविधा परिभाषाएं', ur: 'سہولت کی تعریفیں' },
                            points: [
                                { bold: { en: 'Genetic Counselling Centres', hi: 'आनुवंशिक परामर्श केंद्र', ur: 'جینیاتی مشاورتی مراکز' }, text: { en: 'Institutes, hospitals, nursing homes, or similar establishments where genetic counselling is provided. (Section 2(c))', hi: 'संस्थान, अस्पताल, नर्सिंग होम या इसी तरह के प्रतिष्ठान जहाँ आनुवंशिक परामर्श प्रदान किया जाता है। (धारा 2(c))', ur: 'ادارے، اسپتال، نرسنگ ہوم یا اسی طرح کے ادارے جہاں جینیاتی مشاورت فراہم کی جاتی ہے۔ (سیکشن 2(c))' } },
                                { bold: { en: 'Genetic Clinics', hi: 'आनुवंशिक क्लीनिक', ur: 'جینیاتی کلینک' }, text: { en: 'Locations where pre-natal diagnostic procedures are actually conducted. (Section 2(d))', hi: 'स्थान जहाँ प्रसव पूर्व निदान प्रक्रियाएं वास्तव में की जाती हैं। (धारा 2(d))', ur: 'وہ مقامات جہاں قبل از پیدائش تشخیصی طریقہ کار دراصل کیے جاتے ہیں۔ (سیکشن 2(d))' } },
                                { bold: { en: 'Genetic Laboratories', hi: 'आनुवंशिक प्रयोगशालाएं', ur: 'جینیاتی لیبارٹریاں' }, text: { en: 'Facilities that provide analysis or testing of samples received from Genetic Clinics. (Section 2(e))', hi: 'सुविधाएं जो आनुवंशिक क्लीनिकों से प्राप्त नमूनों का विश्लेषण या परीक्षण प्रदान करती हैं। (धारा 2(e))', ur: 'وہ سہولیات جو جینیاتی کلینک سے موصول نمونوں کی تجزیہ یا جانچ فراہم کرتی ہیں۔ (سیکشن 2(e))' } },
                            ],
                        },
                        {
                            id: 'registration',
                            type: 'highlight',
                            heading: { en: 'Mandatory Certification', hi: 'अनिवार्य प्रमाणन', ur: 'لازمی سرٹیفیکیشن' },
                            text: { en: 'According to Sections 2(o), 3A, and 4, it is mandatory for any Genetic Counselling Centre, Clinic, or Laboratory to be formally registered. They must possess a valid certificate of registration, which must be prominently displayed at their place of business to legally conduct pre-natal diagnostic techniques.', hi: 'धाराओं 2(o), 3A और 4 के अनुसार, किसी भी आनुवंशिक परामर्श केंद्र, क्लीनिक या प्रयोगशाला का औपचारिक रूप से पंजीकृत होना अनिवार्य है। उनके पास पंजीकरण का वैध प्रमाण पत्र होना चाहिए जो उनके व्यवसाय स्थल पर स्पष्ट रूप से प्रदर्शित होना चाहिए।', ur: 'سیکشن 2(o)، 3A اور 4 کے مطابق، کسی بھی جینیاتی مشاورتی مرکز، کلینک، یا لیبارٹری کا باقاعدہ رجسٹرڈ ہونا لازمی ہے۔ ان کے پاس رجسٹریشن کا درست سرٹیفکیٹ ہونا چاہیے جو ان کے کاروباری مقام پر نمایاں طور پر آویزاں ہونا چاہیے۔' },
                        },
                    ],
                },

                // ── Monitoring Authorities ─────────────────────────
                {
                    id: 'pcpndt_monitoring',
                    icon: 'gavel',
                    title: { en: 'Monitoring Authorities', hi: 'निगरानी प्राधिकरण', ur: 'نگران حکام' },
                    subtitle: { en: 'Authorities that oversee implementation of the Act', hi: 'अधिनियम के क्रियान्वयन की निगरानी करने वाले प्राधिकरण', ur: 'قانون کے نفاذ کی نگرانی کرنے والے حکام' },
                    sections: [
                        {
                            id: 'csb',
                            type: 'text',
                            heading: { en: 'Central Supervisory Board (CSB)', hi: 'केंद्रीय सलाहकार बोर्ड (CSB)', ur: 'مرکزی نگران بورڈ (CSB)' },
                            text: { en: 'A Central Supervisory Board is established under the Act. Its primary functions are to advise the Central Government on policy issues concerning the application and prevention of misuse of pre-natal diagnostic and sex selection techniques, and to oversee effective implementation of the Act across the country.', hi: 'अधिनियम के तहत एक केंद्रीय सलाहकार बोर्ड स्थापित किया गया है। इसके प्राथमिक कार्य प्रसव पूर्व निदान और लिंग-चयन तकनीकों के अनुप्रयोग और दुरुपयोग की रोकथाम से संबंधित नीतिगत मुद्दों पर केंद्र सरकार को सलाह देना और पूरे देश में अधिनियम के प्रभावी क्रियान्वयन की निगरानी करना है।', ur: 'قانون کے تحت ایک مرکزی نگران بورڈ قائم کیا گیا ہے۔ اس کے بنیادی کام قبل از پیدائش تشخیصی اور جنس کے انتخاب کی تکنیکوں کے اطلاق اور غلط استعمال کی روک تھام سے متعلق پالیسی امور پر مرکزی حکومت کو مشورہ دینا اور ملک بھر میں قانون کے مؤثر نفاذ کی نگرانی کرنا ہے۔' },
                        },
                        {
                            id: 'awareness',
                            type: 'highlight',
                            heading: { en: 'Public Awareness Initiative', hi: 'सार्वजनिक जागरूकता पहल', ur: 'عوامی آگاہی مہم' },
                            text: { en: 'A key duty of the Board is to undertake initiatives for building public awareness and educating people against practices that result in female foeticide. The Board also works with State-level Appropriate Authorities who are responsible for registration and monitoring of genetic facilities in each state.', hi: 'बोर्ड का एक प्रमुख कर्तव्य सार्वजनिक जागरूकता बनाने और कन्या भ्रूण हत्या का कारण बनने वाली प्रथाओं के विरुद्ध लोगों को शिक्षित करने के लिए पहल करना है।', ur: 'بورڈ کا ایک اہم فریضہ عوامی آگاہی بڑھانے اور لڑکیوں کے قتل کا سبب بننے والے طریقوں کے خلاف لوگوں کو تعلیم دینے کے لیے اقدامات کرنا ہے۔' },
                        },
                    ],
                },

                // ── Advertisement Regulations ──────────────────────
                {
                    id: 'pcpndt_advertisement',
                    icon: 'campaign',
                    title: { en: 'Advertisement Regulations', hi: 'विज्ञापन विनियम', ur: 'اشتہار کے ضوابط' },
                    subtitle: { en: 'Complete ban on sex determination advertisements', hi: 'लिंग निर्धारण विज्ञापनों पर पूर्ण प्रतिबंध', ur: 'جنس کی تشخیص کے اشتہارات پر مکمل پابندی' },
                    sections: [
                        {
                            id: 'ban',
                            type: 'text',
                            heading: { en: 'Complete Ban on Advertisements', hi: 'विज्ञापनों पर पूर्ण प्रतिबंध', ur: 'اشتہارات پر مکمل پابندی' },
                            text: { en: 'The Act strictly forbids and imposes penalties for any form of advertisement related to pre-conception and pre-natal sex determination. This includes a complete ban on the issuance, publication, or communication of such advertisements through any medium — print, digital, broadcast, or otherwise.', hi: 'अधिनियम गर्भधारण पूर्व और प्रसव पूर्व लिंग निर्धारण से संबंधित किसी भी प्रकार के विज्ञापन के लिए कड़ाई से मना करता है और दंड का प्रावधान करता है। इसमें किसी भी माध्यम से ऐसे विज्ञापनों के जारी करने, प्रकाशन या संचार पर पूर्ण प्रतिबंध शामिल है।', ur: 'قانون قبل از حمل اور قبل از پیدائش جنس کی تشخیص سے متعلق کسی بھی قسم کے اشتہار کے لیے سختی سے ممانعت کرتا ہے اور سزا کا انتظام کرتا ہے۔ اس میں کسی بھی ذریعے سے ایسے اشتہارات کے اجراء، اشاعت یا مواصلت پر مکمل پابندی شامل ہے۔' },
                        },
                        {
                            id: 'zero_tolerance',
                            type: 'highlight',
                            heading: { en: 'Zero Tolerance Policy', hi: 'शून्य सहनशीलता नीति', ur: 'صفر رواداری کی پالیسی' },
                            text: { en: 'Any advertisement promoting sex determination services is completely prohibited under this Act, regardless of the medium used. This applies equally to hospitals, clinics, laboratories, and any individual or organization offering such services.', hi: 'इस अधिनियम के तहत लिंग निर्धारण सेवाओं को बढ़ावा देने वाला कोई भी विज्ञापन पूरी तरह से प्रतिबंधित है, चाहे कोई भी माध्यम उपयोग किया गया हो।', ur: 'اس قانون کے تحت جنس کی تشخیص کی خدمات کو فروغ دینے والا کوئی بھی اشتہار مکمل طور پر ممنوع ہے، قطع نظر اس کے کہ کون سا ذریعہ استعمال کیا گیا ہو۔' },
                        },
                    ],
                },

                // ── Penalties Under PCPNDT ─────────────────────────
                {
                    id: 'pcpndt_penalties',
                    icon: 'warning',
                    title: { en: 'Penalties Under the Act', hi: 'अधिनियम के तहत दंड', ur: 'قانون کے تحت سزائیں' },
                    subtitle: { en: 'Legal consequences for violations of the PCPNDT Act', hi: 'PCPNDT अधिनियम के उल्लंघन के कानूनी परिणाम', ur: 'PCPNDT قانون کی خلاف ورزیوں کے قانونی نتائج' },
                    sections: [
                        {
                            id: 'medical_professionals',
                            type: 'text',
                            heading: { en: 'Penalties for Medical Professionals', hi: 'चिकित्सा पेशेवरों के लिए दंड', ur: 'طبی پیشہ ور افراد کے لیے سزائیں' },
                            text: { en: 'Any medical professional — including a geneticist, gynaecologist, or registered medical practitioner — who violates the Act\'s provisions is subject to punishment. First offence: imprisonment up to 3 years and fine up to ₹10,000. Subsequent offences: imprisonment up to 5 years and fine up to ₹50,000. The offender\'s name will also be reported to the State Medical Council, which may suspend their medical registration.', hi: 'कोई भी चिकित्सा पेशेवर — जिसमें आनुवंशिकीविद्, स्त्री रोग विशेषज्ञ या पंजीकृत चिकित्सा व्यवसायी शामिल हैं — जो अधिनियम के प्रावधानों का उल्लंघन करता है, दंड का पात्र है। पहला अपराध: 3 वर्ष तक कारावास और ₹10,000 तक जुर्माना। बाद के अपराध: 5 वर्ष तक कारावास और ₹50,000 तक जुर्माना।', ur: 'کوئی بھی طبی پیشہ ور — جس میں جینیاتی ماہر، گائناکولوجسٹ، یا رجسٹرڈ طبی پریکٹیشنر شامل ہیں — جو قانون کی دفعات کی خلاف ورزی کرتا ہے، سزا کا مستحق ہے۔ پہلا جرم: 3 سال تک قید اور ₹10,000 تک جرمانہ۔ بعد کے جرائم: 5 سال تک قید اور ₹50,000 تک جرمانہ۔' },
                        },
                        {
                            id: 'persons_seeking',
                            type: 'text',
                            heading: { en: 'Penalties for Persons Seeking Aid', hi: 'सहायता मांगने वाले व्यक्तियों के लिए दंड', ur: 'مدد مانگنے والے افراد کے لیے سزائیں' },
                            text: { en: 'Any person (excluding a pregnant woman compelled to undergo such a procedure) who seeks aid for sex-selection or pre-natal sex determination is punishable with imprisonment up to 3 years and fine up to ₹50,000 for a first offence. For subsequent offences: imprisonment up to 5 years and fine up to ₹1,00,000. (Section 23)', hi: 'कोई भी व्यक्ति (उस गर्भवती महिला को छोड़कर जो ऐसी प्रक्रिया से गुजरने के लिए मजबूर की गई है) जो लिंग-चयन या प्रसव पूर्व लिंग निर्धारण के लिए सहायता मांगता है, पहले अपराध के लिए 3 वर्ष तक कारावास और ₹50,000 तक जुर्माने से दंडनीय है।', ur: 'کوئی بھی شخص (اس حاملہ عورت کے علاوہ جسے ایسے طریقہ کار سے گزرنے پر مجبور کیا گیا ہو) جو جنس کے انتخاب یا قبل از پیدائش جنس کی تشخیص کے لیے مدد مانگتا ہے، پہلے جرم کے لیے 3 سال تک قید اور ₹50,000 تک جرمانے سے قابل سزا ہے۔' },
                        },
                        {
                            id: 'cognizable',
                            type: 'highlight',
                            heading: { en: 'Nature of Offences', hi: 'अपराधों की प्रकृति', ur: 'جرائم کی نوعیت' },
                            text: { en: 'Offences under this Act are cognizable, non-bailable, and non-compoundable. This means arrest can be made without a warrant, bail is not a matter of right, and no compromise or settlement can be legally recorded to drop charges. (Section 27)', hi: 'इस अधिनियम के तहत अपराध संज्ञेय, गैर-जमानती और गैर-शमनीय हैं। इसका मतलब है कि बिना वारंट के गिरफ्तारी की जा सकती है, जमानत अधिकार का विषय नहीं है, और आरोपों को छोड़ने के लिए कोई समझौता या निपटान कानूनी रूप से दर्ज नहीं किया जा सकता।', ur: 'اس قانون کے تحت جرائم قابل علم، ناقابل ضمانت اور ناقابل تصفیہ ہیں۔ اس کا مطلب ہے کہ وارنٹ کے بغیر گرفتاری کی جا سکتی ہے، ضمانت حق کا معاملہ نہیں ہے، اور الزامات چھوڑنے کے لیے کوئی سمجھوتہ یا تصفیہ قانونی طور پر درج نہیں کیا جا سکتا۔' },
                        },
                    ],
                },

                // ── Presumption as to Offence ──────────────────────
                {
                    id: 'pcpndt_presumption',
                    icon: 'balance',
                    title: { en: 'Presumption as to Offence', hi: 'अपराध के संबंध में उपधारणा', ur: 'جرم کے بارے میں قانونی فرض' },
                    subtitle: { en: 'Legal protection for women who are coerced', hi: 'जबरदस्ती की गई महिलाओं के लिए कानूनी सुरक्षा', ur: 'زبردستی کی جانے والی خواتین کے لیے قانونی تحفظ' },
                    sections: [
                        {
                            id: 'legal_presumption',
                            type: 'text',
                            heading: { en: 'Legal Presumption', hi: 'कानूनी उपधारणा', ur: 'قانونی فرض' },
                            text: { en: 'The Act states that in a case pertaining to conduct of pre-natal diagnostic techniques on a pregnant woman, the court shall presume that the pregnant woman was compelled by a relative or her husband to undergo pre-natal techniques not permitted under the Act.', hi: 'अधिनियम में कहा गया है कि किसी गर्भवती महिला पर प्रसव पूर्व निदान तकनीकों के संचालन से संबंधित मामले में, न्यायालय यह मान लेगा कि गर्भवती महिला को किसी रिश्तेदार या उसके पति ने अधिनियम के तहत अनुमत नहीं तकनीकों से गुजरने के लिए मजबूर किया था।', ur: 'قانون میں کہا گیا ہے کہ حاملہ عورت پر قبل از پیدائش تشخیصی تکنیکوں کے انعقاد سے متعلق کسی معاملے میں، عدالت یہ فرض کرے گی کہ حاملہ عورت کو کسی رشتہ دار یا اس کے شوہر نے قانون کے تحت اجازت یافتہ نہ ہونے والی تکنیکوں سے گزرنے پر مجبور کیا تھا۔' },
                        },
                        {
                            id: 'protection',
                            type: 'highlight',
                            heading: { en: 'Protection for Women', hi: 'महिलाओं के लिए सुरक्षा', ur: 'خواتین کے لیے تحفظ' },
                            text: { en: 'This provision recognizes that pregnant women may be coerced into undergoing prohibited procedures and provides legal protection by placing the burden of proof on those who may have influenced or compelled such actions. The pregnant woman is thus treated as a victim, not an offender.', hi: 'यह प्रावधान मान्यता देता है कि गर्भवती महिलाओं को निषिद्ध प्रक्रियाओं से गुजरने के लिए मजबूर किया जा सकता है और उन लोगों पर सबूत का बोझ डालकर कानूनी सुरक्षा प्रदान करता है जिन्होंने ऐसी कार्रवाइयों को प्रभावित या मजबूर किया हो।', ur: 'یہ دفعہ یہ تسلیم کرتی ہے کہ حاملہ خواتین کو ممنوعہ طریقہ کار سے گزرنے پر مجبور کیا جا سکتا ہے اور ان لوگوں پر ثبوت کا بوجھ ڈال کر قانونی تحفظ فراہم کرتی ہے جنہوں نے ایسی کارروائیوں کو متاثر یا مجبور کیا ہو۔' },
                        },
                    ],
                },

            ], // end pcpndt.items
        },

        // ══════════════════════════════════════════════════════
        // SUBCATEGORY 2 — MTP ACT, 1971
        // ══════════════════════════════════════════════════════
        {
            id: 'mtp',
            icon: 'medical_services',
            label: {
                en: 'Medical Termination of Pregnancy Act, 1971',
                hi: 'गर्भ का चिकित्सीय समापन अधिनियम, 1971',
                ur: 'طبی اختتام حمل قانون، 1971',
            },
            description: {
                en: 'Legal framework for safe and regulated pregnancy termination',
                hi: 'सुरक्षित और विनियमित गर्भावस्था समापन के लिए कानूनी ढांचा',
                ur: 'محفوظ اور منضبط اسقاط حمل کے لیے قانونی ڈھانچہ',
            },
            items: [

                // ── Intent + Conditions (from inline HTML — rich content) ──
                {
                    id: 'mtp_overview',
                    icon: 'info',
                    title: { en: 'Intent & Conditions for Termination', hi: 'उद्देश्य और समापन की शर्तें', ur: 'مقصد اور اختتام کی شرائط' },
                    subtitle: { en: 'Who can terminate, and under what grounds', hi: 'कौन समाप्त कर सकता है और किन आधारों पर', ur: 'کون ختم کر سکتا ہے اور کن بنیادوں پر' },
                    sections: [
                        {
                            id: 'intent',
                            type: 'text',
                            heading: { en: 'Intent of the Legislation', hi: 'कानून का उद्देश्य', ur: 'قانون سازی کا مقصد' },
                            text: { en: 'To put an end to unsafe practices of abortion and to regulate the termination of pregnancies, ensuring the procedure is safe, legal, and accessible to women who need it.', hi: 'असुरक्षित गर्भपात प्रथाओं को समाप्त करना और गर्भावस्था के समापन को विनियमित करना, यह सुनिश्चित करते हुए कि प्रक्रिया सुरक्षित, कानूनी और जरूरतमंद महिलाओं के लिए सुलभ हो।', ur: 'غیر محفوظ اسقاط حمل کے طریقوں کو ختم کرنا اور حمل کے اختتام کو منظم کرنا، یہ یقینی بناتے ہوئے کہ طریقہ کار محفوظ، قانونی اور ضرورتمند خواتین کے لیے قابل رسائی ہو۔' },
                        },
                        {
                            id: 'by_whom',
                            type: 'text',
                            heading: { en: 'By Whom Pregnancy Can Be Terminated', hi: 'गर्भावस्था किसके द्वारा समाप्त की जा सकती है', ur: 'حمل کس کے ذریعے ختم کیا جا سکتا ہے' },
                            text: { en: 'Pregnancy under the Act may only be terminated by a Registered Medical Practitioner (RMP) who has the prescribed experience or training in gynaecology and obstetrics.', hi: 'अधिनियम के तहत गर्भावस्था केवल एक पंजीकृत चिकित्सा व्यवसायी (RMP) द्वारा समाप्त की जा सकती है जिसके पास स्त्री रोग और प्रसूति में निर्धारित अनुभव या प्रशिक्षण हो।', ur: 'قانون کے تحت حمل صرف ایک رجسٹرڈ طبی پریکٹیشنر (RMP) کے ذریعے ختم کیا جا سکتا ہے جس کے پاس گائناکولوجی اور پرسوتی میں مقررہ تجربہ یا تربیت ہو۔' },
                        },
                        {
                            id: 'general_grounds',
                            type: 'points',
                            heading: { en: 'General Grounds — Up to 20 Weeks (Single RMP)', hi: 'सामान्य आधार — 20 सप्ताह तक (एकल RMP)', ur: 'عام بنیادیں — 20 ہفتوں تک (واحد RMP)' },
                            points: [
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Continuation of the pregnancy poses a risk to the pregnant woman\'s life.', hi: 'गर्भावस्था जारी रखने से गर्भवती महिला की जान को खतरा है।', ur: 'حمل کا جاری رہنا حاملہ عورت کی زندگی کو خطرے میں ڈالتا ہے۔' } },
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Continuing the pregnancy could cause grave injury to her physical or mental health.', hi: 'गर्भावस्था जारी रखने से उसके शारीरिक या मानसिक स्वास्थ्य को गंभीर नुकसान हो सकता है।', ur: 'حمل کا جاری رہنا اس کی جسمانی یا ذہنی صحت کو شدید نقصان پہنچا سکتا ہے۔' } },
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'There is a substantial risk that the child, if born, would suffer from serious physical or mental abnormalities.', hi: 'पर्याप्त जोखिम है कि जन्म लेने पर बच्चा गंभीर शारीरिक या मानसिक असामान्यताओं से पीड़ित होगा।', ur: 'اس بات کا خاصہ خطرہ ہے کہ پیدا ہونے پر بچہ سنگین جسمانی یا ذہنی خرابیوں سے متاثر ہوگا۔' } },
                            ],
                        },
                        {
                            id: 'special_grounds',
                            type: 'points',
                            heading: { en: 'Special Grounds — Up to 24 Weeks (Two RMPs Required)', hi: 'विशेष आधार — 24 सप्ताह तक (दो RMP आवश्यक)', ur: 'خصوصی بنیادیں — 24 ہفتوں تک (دو RMP ضروری)' },
                            points: [
                                { bold: { en: 'Rape/Incest survivors', hi: 'बलात्कार/अनाचार से बचे लोग', ur: 'عصمت دری/زنا محارم سے بچ جانے والی' }, text: { en: 'Survivors of sexual assault, rape, or incest.', hi: 'यौन उत्पीड़न, बलात्कार या अनाचार से बचे लोग।', ur: 'جنسی حملے، عصمت دری، یا زنا محارم سے بچ جانے والی۔' } },
                                { bold: { en: 'Minors', hi: 'नाबालिग', ur: 'نابالغ' }, text: { en: 'Women who are minors (under 18 years of age).', hi: 'महिलाएं जो नाबालिग हैं (18 वर्ष से कम आयु)।', ur: 'خواتین جو نابالغ ہیں (18 سال سے کم عمر)۔' } },
                                { bold: { en: 'Change in marital status', hi: 'वैवाहिक स्थिति में परिवर्तन', ur: 'ازدواجی حیثیت میں تبدیلی' }, text: { en: 'Women who experience widowhood or divorce during the pregnancy.', hi: 'महिलाएं जो गर्भावस्था के दौरान विधवापन या तलाक का अनुभव करती हैं।', ur: 'خواتین جو حمل کے دوران بیوگی یا طلاق کا تجربہ کرتی ہیں۔' } },
                                { bold: { en: 'Physical disabilities', hi: 'शारीरिक विकलांगता', ur: 'جسمانی معذوری' }, text: { en: 'Women with physical disabilities as per the Rights of Persons with Disabilities Act, 2016.', hi: 'विकलांग व्यक्तियों के अधिकार अधिनियम, 2016 के अनुसार शारीरिक विकलांगता वाली महिलाएं।', ur: 'معذور افراد کے حقوق قانون، 2016 کے مطابق جسمانی معذوری والی خواتین۔' } },
                                { bold: { en: 'Mental illness', hi: 'मानसिक बीमारी', ur: 'ذہنی بیماری' }, text: { en: 'Women who are mentally ill, including those with mental retardation.', hi: 'मानसिक रूप से बीमार महिलाएं, जिनमें मानसिक मंदता वाली भी शामिल हैं।', ur: 'ذہنی طور پر بیمار خواتین، جن میں ذہنی پسماندگی والی بھی شامل ہیں۔' } },
                                { bold: { en: 'Foetal malformation', hi: 'भ्रूण विकृति', ur: 'جنین کی خرابی' }, text: { en: 'Cases of foetal malformation incompatible with life or likely to cause serious handicap if born.', hi: 'भ्रूण विकृति के मामले जो जीवन के साथ असंगत हैं या जन्म लेने पर गंभीर विकलांगता का कारण बन सकते हैं।', ur: 'جنین کی خرابی کے معاملات جو زندگی سے مطابقت نہیں رکھتے یا پیدا ہونے پر سنگین معذوری کا سبب بن سکتے ہیں۔' } },
                                { bold: { en: 'Humanitarian emergencies', hi: 'मानवीय आपातकाल', ur: 'انسانی ہنگامی صورتحال' }, text: { en: 'Women with pregnancies occurring in humanitarian settings, disasters, or emergencies declared by the Government.', hi: 'मानवीय परिस्थितियों, आपदाओं या सरकार द्वारा घोषित आपातकाल में गर्भवती महिलाएं।', ur: 'انسانی حالات، آفات یا حکومت کی طرف سے اعلان کردہ ہنگامی صورتحال میں حاملہ خواتین۔' } },
                            ],
                        },
                        {
                            id: 'special_provisions',
                            type: 'points',
                            heading: { en: 'Specific Provisions', hi: 'विशिष्ट प्रावधान', ur: 'مخصوص احکامات' },
                            points: [
                                { bold: { en: 'Contraceptive Failure', hi: 'गर्भनिरोधक विफलता', ur: 'مانع حمل ناکامی' }, text: { en: 'A pregnancy resulting from failure of any contraceptive device or method used by the woman or her partner is a legal ground for termination.', hi: 'महिला या उसके साथी द्वारा उपयोग किए गए किसी गर्भनिरोधक उपकरण या विधि की विफलता से उत्पन्न गर्भावस्था समापन का कानूनी आधार है।', ur: 'عورت یا اس کے ساتھی کے ذریعے استعمال کیے گئے کسی مانع حمل آلے یا طریقے کی ناکامی سے پیدا ہونے والا حمل اختتام کی قانونی بنیاد ہے۔' } },
                                { bold: { en: 'Pregnancy due to Rape', hi: 'बलात्कार से गर्भावस्था', ur: 'عصمت دری سے حمل' }, text: { en: 'The anguish caused by a pregnancy resulting from rape is legally presumed to constitute a "grave injury to the mental health" of the woman.', hi: 'बलात्कार से उत्पन्न गर्भावस्था के कारण होने वाली पीड़ा को कानूनी रूप से महिला के "मानसिक स्वास्थ्य को गंभीर नुकसान" माना जाता है।', ur: 'عصمت دری سے پیدا ہونے والے حمل کی وجہ سے ہونے والی تکلیف کو قانونی طور پر عورت کی "ذہنی صحت کو شدید نقصان" تصور کیا جاتا ہے۔' } },
                                { bold: { en: 'Beyond 24 Weeks', hi: '24 सप्ताह से अधिक', ur: '24 ہفتوں سے زیادہ' }, text: { en: 'Permitted if a Medical Board diagnoses substantial foetal abnormalities (Section 3(2B)), or if a RMP deems termination immediately necessary to save the woman\'s life (Section 5(1)).', hi: 'यदि कोई मेडिकल बोर्ड पर्याप्त भ्रूण असामान्यताओं का निदान करता है (धारा 3(2B)), या यदि RMP महिला की जान बचाने के लिए तत्काल आवश्यक मानता है (धारा 5(1)), तो अनुमति है।', ur: 'اگر ایک میڈیکل بورڈ خاطرخواہ جنین کی خرابیوں کی تشخیص کرے (سیکشن 3(2B))، یا اگر RMP عورت کی جان بچانے کے لیے فوری ضروری سمجھے (سیکشن 5(1))، تو اجازت ہے۔' } },
                            ],
                        },
                    ],
                },

                // ── Practitioner Qualification ─────────────────────
                {
                    id: 'mtp_qualification',
                    icon: 'school',
                    title: { en: 'Medical Practitioner Qualification', hi: 'चिकित्सा व्यवसायी की योग्यता', ur: 'طبی پریکٹیشنر کی اہلیت' },
                    subtitle: { en: 'Requirements for practitioners performing terminations', hi: 'समापन करने वाले व्यवसायियों के लिए आवश्यकताएं', ur: 'اختتام کرنے والے پریکٹیشنرز کے لیے ضروریات' },
                    sections: [
                        {
                            id: 'rmp_definition',
                            type: 'points',
                            heading: { en: 'Registered Medical Practitioner (RMP) Definition', hi: 'पंजीकृत चिकित्सा व्यवसायी (RMP) की परिभाषा', ur: 'رجسٹرڈ طبی پریکٹیشنر (RMP) کی تعریف' },
                            points: [
                                { bold: { en: 'Medical Qualification', hi: 'चिकित्सा योग्यता', ur: 'طبی قابلیت' }, text: { en: 'Possesses a medical qualification recognized under the Indian Medical Council Act, 1956.', hi: 'भारतीय चिकित्सा परिषद अधिनियम, 1956 के तहत मान्यता प्राप्त चिकित्सा योग्यता रखता है।', ur: 'انڈین میڈیکل کونسل ایکٹ، 1956 کے تحت تسلیم شدہ طبی قابلیت رکھتا ہے۔' } },
                                { bold: { en: 'State Registration', hi: 'राज्य पंजीकरण', ur: 'ریاستی رجسٹریشن' }, text: { en: 'Is duly registered with their name entered in a State Medical Register.', hi: 'उचित रूप से पंजीकृत है और उनका नाम राज्य चिकित्सा रजिस्टर में दर्ज है।', ur: 'مناسب طریقے سے رجسٹرڈ ہے اور ان کا نام ریاستی طبی رجسٹر میں درج ہے۔' } },
                                { bold: { en: 'Specialised Experience', hi: 'विशेष अनुभव', ur: 'خصوصی تجربہ' }, text: { en: 'Has the prescribed experience or training in gynaecology and obstetrics as specified by the rules of the Act.', hi: 'अधिनियम के नियमों द्वारा निर्दिष्ट अनुसार स्त्री रोग और प्रसूति के क्षेत्र में निर्धारित अनुभव या प्रशिक्षण है।', ur: 'قانون کے قواعد کے ذریعے مقرر کردہ گائناکولوجی اور پرسوتی کے شعبے میں مقررہ تجربہ یا تربیت ہے۔' } },
                            ],
                        },
                    ],
                },

                // ── Where Terminated ───────────────────────────────
                {
                    id: 'mtp_where',
                    icon: 'local_hospital',
                    title: { en: 'Where Pregnancy Can Be Terminated', hi: 'गर्भावस्था कहाँ समाप्त की जा सकती है', ur: 'حمل کہاں ختم کیا جا سکتا ہے' },
                    subtitle: { en: 'Approved facilities and locations for termination', hi: 'समापन के लिए अनुमोदित सुविधाएं और स्थान', ur: 'اختتام کے لیے منظور شدہ سہولیات اور مقامات' },
                    sections: [
                        {
                            id: 'approved_places',
                            type: 'points',
                            heading: { en: 'Approved Places', hi: 'अनुमोदित स्थान', ur: 'منظور شدہ مقامات' },
                            points: [
                                { bold: { en: 'Government Hospitals', hi: 'सरकारी अस्पताल', ur: 'سرکاری اسپتال' }, text: { en: 'Any hospital established or maintained by the Government.', hi: 'सरकार द्वारा स्थापित या अनुरक्षित कोई भी अस्पताल।', ur: 'حکومت کی طرف سے قائم یا برقرار رکھا گیا کوئی بھی اسپتال۔' } },
                                { bold: { en: 'Approved Private Facilities', hi: 'अनुमोदित निजी सुविधाएं', ur: 'منظور شدہ نجی سہولیات' }, text: { en: 'A place approved for this purpose by the Government or a District Level Committee constituted by the Government.', hi: 'सरकार या सरकार द्वारा गठित जिला स्तरीय समिति द्वारा इस उद्देश्य के लिए अनुमोदित स्थान।', ur: 'حکومت یا حکومت کی طرف سے تشکیل دی گئی ضلعی سطح کی کمیٹی کی طرف سے اس مقصد کے لیے منظور شدہ مقام۔' } },
                            ],
                        },
                        {
                            id: 'prohibition',
                            type: 'highlight',
                            heading: { en: 'Important Restriction', hi: 'महत्वपूर्ण प्रतिबंध', ur: 'اہم پابندی' },
                            text: { en: 'Termination of pregnancy at any place other than those approved is illegal and punishable under the Act. Women should always verify that the facility they visit is duly registered and approved before proceeding.', hi: 'अनुमोदित स्थानों के अलावा किसी अन्य स्थान पर गर्भावस्था का समापन अवैध है और अधिनियम के तहत दंडनीय है। महिलाओं को हमेशा यह सुनिश्चित करना चाहिए कि वे जिस सुविधा में जा रही हैं वह उचित रूप से पंजीकृत और अनुमोदित है।', ur: 'منظور شدہ مقامات کے علاوہ کسی دوسری جگہ حمل کا اختتام غیر قانونی ہے اور قانون کے تحت قابل سزا ہے۔ خواتین کو ہمیشہ یہ یقینی بنانا چاہیے کہ وہ جس سہولت میں جا رہی ہیں وہ مناسب طریقے سے رجسٹرڈ اور منظور شدہ ہے۔' },
                        },
                    ],
                },

                // ── Medical Board ──────────────────────────────────
                {
                    id: 'mtp_medical_board',
                    icon: 'groups',
                    title: { en: 'Constitution of Medical Board', hi: 'मेडिकल बोर्ड का गठन', ur: 'میڈیکل بورڈ کی تشکیل' },
                    subtitle: { en: 'Formation and role of medical boards for late-term cases', hi: 'देर से मामलों के लिए मेडिकल बोर्ड का गठन और भूमिका', ur: 'دیر کے مرحلے کے معاملات کے لیے میڈیکل بورڈ کی تشکیل اور کردار' },
                    sections: [
                        {
                            id: 'board_composition',
                            type: 'points',
                            heading: { en: 'Board Composition', hi: 'बोर्ड की संरचना', ur: 'بورڈ کی ترکیب' },
                            points: [
                                { bold: { en: 'Gynaecologist / Obstetrician', hi: 'स्त्री रोग विशेषज्ञ / प्रसूति विशेषज्ञ', ur: 'گائناکولوجسٹ / ماہر امراض زچگی' }, text: { en: 'A specialist in gynaecology and obstetrics.', hi: 'स्त्री रोग और प्रसूति के विशेषज्ञ।', ur: 'گائناکولوجی اور پرسوتی کے ماہر۔' } },
                                { bold: { en: 'Paediatrician', hi: 'बाल रोग विशेषज्ञ', ur: 'ماہر امراض اطفال' }, text: { en: 'A specialist in paediatrics to assess foetal viability and abnormalities.', hi: 'जन्म के बाद के स्वास्थ्य और भ्रूण की व्यवहार्यता का आकलन करने के लिए बाल रोग विशेषज्ञ।', ur: 'جنین کی قابل عمل ہونے اور خرابیوں کا جائزہ لینے کے لیے ماہر امراض اطفال۔' } },
                                { bold: { en: 'Radiologist / Sonologist', hi: 'रेडियोलॉजिस्ट / सोनोलॉजिस्ट', ur: 'ریڈیولوجسٹ / سونولوجسٹ' }, text: { en: 'A specialist to conduct imaging and confirm foetal abnormalities.', hi: 'इमेजिंग करने और भ्रूण असामान्यताओं की पुष्टि करने के लिए विशेषज्ञ।', ur: 'امیجنگ کرنے اور جنین کی خرابیوں کی تصدیق کرنے کے لیے ماہر۔' } },
                            ],
                        },
                        {
                            id: 'board_role',
                            type: 'highlight',
                            heading: { en: 'Role of the Medical Board', hi: 'मेडिकल बोर्ड की भूमिका', ur: 'میڈیکل بورڈ کا کردار' },
                            text: { en: 'The Medical Board is constituted under Section 3(2B) for cases beyond 24 weeks gestation where substantial foetal abnormalities are suspected. The Board\'s diagnosis and opinion is mandatory before any termination can be carried out beyond the 24-week limit.', hi: 'मेडिकल बोर्ड धारा 3(2B) के तहत 24 सप्ताह से अधिक गर्भावस्था वाले मामलों के लिए गठित किया जाता है जहाँ पर्याप्त भ्रूण असामान्यताओं का संदेह है।', ur: 'میڈیکل بورڈ سیکشن 3(2B) کے تحت 24 ہفتوں سے زیادہ حمل کے ایسے معاملات کے لیے تشکیل دیا جاتا ہے جہاں خاطرخواہ جنین کی خرابیوں کا شبہ ہو۔' },
                        },
                    ],
                },

                // ── Protection for Practitioners ───────────────────
                {
                    id: 'mtp_protection',
                    icon: 'shield',
                    title: { en: 'Protection for Medical Practitioners', hi: 'चिकित्सा व्यवसायियों के लिए सुरक्षा', ur: 'طبی پریکٹیشنرز کے لیے تحفظ' },
                    subtitle: { en: 'Legal protections for healthcare providers acting in good faith', hi: 'सद्भावना से कार्य करने वाले स्वास्थ्य सेवा प्रदाताओं के लिए कानूनी सुरक्षा', ur: 'نیک نیتی سے کام کرنے والے صحت کی دیکھ بھال فراہم کرنے والوں کے لیے قانونی تحفظ' },
                    sections: [
                        {
                            id: 'good_faith',
                            type: 'text',
                            heading: { en: 'Good Faith Protection', hi: 'सद्भावना सुरक्षा', ur: 'نیک نیتی تحفظ' },
                            text: { en: 'No prosecution, suit, or other legal proceedings shall lie against any Registered Medical Practitioner for any damage caused or likely to be caused by anything done or omitted to be done in good faith and without negligence in the termination of any pregnancy. This protection ensures that doctors can perform their medical duty without fear of unjust prosecution.', hi: 'किसी पंजीकृत चिकित्सा व्यवसायी के विरुद्ध किसी भी अभियोजन, मुकदमे या अन्य कानूनी कार्यवाही नहीं होगी, यदि नुकसान गर्भावस्था की समाप्ति में सद्भावना और लापरवाही के बिना किए गए या न किए गए किसी कार्य से हुआ हो।', ur: 'کسی رجسٹرڈ طبی پریکٹیشنر کے خلاف کوئی مقدمہ، دعویٰ، یا دیگر قانونی کارروائی نہیں ہوگی اگر نقصان حمل کے اختتام میں نیک نیتی اور لاپرواہی کے بغیر کیے گئے یا نہ کیے گئے کسی عمل سے ہوا ہو۔' },
                        },
                    ],
                },

                // ── Non-Disclosure ─────────────────────────────────
                {
                    id: 'mtp_non_disclosure',
                    icon: 'privacy_tip',
                    title: { en: 'Non-disclosure of Identity', hi: 'पहचान का गैर-प्रकटीकरण', ur: 'شناخت کا عدم انکشاف' },
                    subtitle: { en: 'Privacy protections for women undergoing termination', hi: 'समापन से गुजरने वाली महिलाओं के लिए गोपनीयता सुरक्षा', ur: 'اختتام سے گزرنے والی خواتین کے لیے رازداری کا تحفظ' },
                    sections: [
                        {
                            id: 'privacy',
                            type: 'text',
                            heading: { en: 'Privacy Protection', hi: 'गोपनीयता संरक्षण', ur: 'رازداری کا تحفظ' },
                            text: { en: 'The identity of a woman who undergoes termination of pregnancy under this Act shall not be revealed except to a person authorised by law. Any person who reveals such identity shall be punishable with imprisonment which may extend to one year, or with fine, or with both.', hi: 'इस अधिनियम के तहत गर्भावस्था समापन से गुजरने वाली महिला की पहचान कानून द्वारा अधिकृत व्यक्ति के अलावा प्रकट नहीं की जाएगी। ऐसी पहचान प्रकट करने वाले किसी भी व्यक्ति को एक वर्ष तक कारावास या जुर्माना या दोनों से दंडित किया जाएगा।', ur: 'اس قانون کے تحت حمل کے اختتام سے گزرنے والی عورت کی شناخت قانون کے ذریعے مجاز شخص کے علاوہ ظاہر نہیں کی جائے گی۔ ایسی شناخت ظاہر کرنے والے کسی بھی شخص کو ایک سال تک قید یا جرمانہ یا دونوں سے سزا دی جائے گی۔' },
                        },
                    ],
                },

                // ── Punishments ────────────────────────────────────
                {
                    id: 'mtp_punishments',
                    icon: 'gavel',
                    title: { en: 'Punishments for Offences', hi: 'अपराधों के लिए दंड', ur: 'جرائم کے لیے سزائیں' },
                    subtitle: { en: 'Legal consequences for violations under the MTP Act', hi: 'MTP अधिनियम के तहत उल्लंघनों के कानूनी परिणाम', ur: 'MTP قانون کے تحت خلاف ورزیوں کے قانونی نتائج' },
                    sections: [
                        {
                            id: 'punishments',
                            type: 'points',
                            heading: { en: 'Offences and Punishments', hi: 'अपराध और दंड', ur: 'جرائم اور سزائیں' },
                            points: [
                                { bold: { en: 'Termination by unqualified person', hi: 'अयोग्य व्यक्ति द्वारा समापन', ur: 'نااہل شخص کے ذریعے اختتام' }, text: { en: 'Any person who terminates a pregnancy without required qualifications is punishable with rigorous imprisonment of not less than 2 years, which may extend to 7 years.', hi: 'कोई भी व्यक्ति जो आवश्यक योग्यता के बिना गर्भावस्था समाप्त करता है, उसे कम से कम 2 वर्ष के कठोर कारावास से दंडित किया जाएगा जो 7 वर्ष तक हो सकता है।', ur: 'کوئی بھی شخص جو ضروری اہلیت کے بغیر حمل ختم کرتا ہے، اسے کم از کم 2 سال کی سخت قید سے سزا دی جائے گی جو 7 سال تک ہو سکتی ہے۔' } },
                                { bold: { en: 'Termination at unapproved place', hi: 'गैर-अनुमोदित स्थान पर समापन', ur: 'غیر منظور شدہ جگہ پر اختتام' }, text: { en: 'Termination at a place not approved under the Act is punishable with rigorous imprisonment of not less than 2 years, which may extend to 7 years.', hi: 'अधिनियम के तहत अनुमोदित स्थान के अलावा समापन को कम से कम 2 वर्ष के कठोर कारावास से दंडित किया जाएगा जो 7 वर्ष तक हो सकता है।', ur: 'قانون کے تحت منظور شدہ مقام کے علاوہ اختتام کو کم از کم 2 سال کی سخت قید سے سزا دی جائے گی جو 7 سال تک ہو سکتی ہے۔' } },
                            ],
                        },
                    ],
                },

                // ── Complaint Mechanisms ───────────────────────────
                {
                    id: 'mtp_complaints',
                    icon: 'report',
                    title: { en: 'Complaint Mechanisms', hi: 'शिकायत तंत्र', ur: 'شکایت کے طریقہ کار' },
                    subtitle: { en: 'How to file complaints and seek redressal under the MTP Act', hi: 'MTP अधिनियम के तहत शिकायत कैसे दर्ज करें और निवारण कैसे प्राप्त करें', ur: 'MTP قانون کے تحت شکایات کیسے درج کریں اور ازالہ کیسے حاصل کریں' },
                    sections: [
                        {
                            id: 'complaint_process',
                            type: 'points',
                            heading: { en: 'Filing a Complaint', hi: 'शिकायत दर्ज करना', ur: 'شکایت درج کرنا' },
                            points: [
                                { bold: { en: 'Police Complaint', hi: 'पुलिस शिकायत', ur: 'پولیس شکایت' }, text: { en: 'File an FIR at the nearest police station for illegal termination, coercion, or identity disclosure.', hi: 'अवैध समापन, जबरदस्ती या पहचान प्रकटीकरण के लिए निकटतम पुलिस स्टेशन में FIR दर्ज करें।', ur: 'غیر قانونی اختتام، زبردستی یا شناخت ظاہر کرنے کے لیے قریبی پولیس اسٹیشن میں FIR درج کریں۔' } },
                                { bold: { en: 'Medical Council Complaint', hi: 'मेडिकल काउंसिल में शिकायत', ur: 'میڈیکل کونسل میں شکایت' }, text: { en: 'File a complaint with the State Medical Council against any registered doctor who violates the Act\'s provisions.', hi: 'अधिनियम के प्रावधानों का उल्लंघन करने वाले किसी भी पंजीकृत डॉक्टर के खिलाफ राज्य चिकित्सा परिषद में शिकायत दर्ज करें।', ur: 'قانون کی دفعات کی خلاف ورزی کرنے والے کسی بھی رجسٹرڈ ڈاکٹر کے خلاف ریاستی میڈیکل کونسل میں شکایت درج کریں۔' } },
                                { bold: { en: 'National Commission for Women', hi: 'राष्ट्रीय महिला आयोग', ur: 'قومی خواتین کمیشن' }, text: { en: 'File a complaint with the NCW for violations of women\'s rights under the MTP Act.', hi: 'MTP अधिनियम के तहत महिलाओं के अधिकारों के उल्लंघन के लिए NCW में शिकायत दर्ज करें।', ur: 'MTP قانون کے تحت خواتین کے حقوق کی خلاف ورزی کے لیے NCW میں شکایت درج کریں۔' } },
                            ],
                        },
                    ],
                },

            ], // end mtp.items
        },

        // ══════════════════════════════════════════════════════
        // SUBCATEGORY 3 — MATERNITY BENEFIT ACT, 1961
        // ══════════════════════════════════════════════════════
        {
            id: 'maternity_benefit',
            icon: 'child_care',
            label: {
                en: 'Maternity Benefit Act, 1961',
                hi: 'मातृत्व लाभ अधिनियम, 1961',
                ur: 'زچگی فائدہ قانون، 1961',
            },
            description: {
                en: 'Maternity benefits and workplace protections for women',
                hi: 'महिलाओं के लिए मातृत्व लाभ और कार्यस्थल सुरक्षाएं',
                ur: 'خواتین کے لیے زچگی فوائد اور کام کی جگہ کے تحفظات',
            },
            items: [

                // ── Overview (inline HTML content) ────────────────
                {
                    id: 'mb_overview',
                    icon: 'info',
                    title: { en: 'Purpose, Extent & Eligibility', hi: 'उद्देश्य, विस्तार और पात्रता', ur: 'مقصد، وسعت اور اہلیت' },
                    subtitle: { en: 'Who is covered and what qualifies', hi: 'कौन शामिल है और क्या योग्य है', ur: 'کون شامل ہے اور کیا اہل ہے' },
                    sections: [
                        {
                            id: 'purpose',
                            type: 'points',
                            heading: { en: 'The Act Applies To', hi: 'अधिनियम लागू होता है', ur: 'قانون لاگو ہوتا ہے' },
                            points: [
                                { bold: { en: 'Birthing mothers', hi: 'जन्म देने वाली माताएं', ur: 'بچہ جننے والی مائیں' }, text: { en: 'Women who give birth are entitled to maternity benefits.', hi: 'बच्चे को जन्म देने वाली महिलाएं मातृत्व लाभ की हकदार हैं।', ur: 'بچے کو جنم دینے والی خواتین زچگی فوائد کی حقدار ہیں۔' } },
                                { bold: { en: 'Adoptive mothers', hi: 'दत्तक माताएं', ur: 'گود لینے والی مائیں' }, text: { en: 'Women who adopt a child below 3 months of age are also entitled to benefits.', hi: '3 महीने से कम उम्र के बच्चे को गोद लेने वाली महिलाएं भी लाभ की हकदार हैं।', ur: ' 3 ماہ سے کم عمر کے بچے کو گود لینے والی خواتین بھی فوائد کی حقدار ہیں۔' } },
                                { bold: { en: 'Commissioning mothers', hi: 'कमीशनिंग माताएं', ur: 'کمیشننگ مائیں' }, text: { en: 'A biological mother who uses her egg for the creation of an embryo implanted in another woman.', hi: 'जैविक माँ जो किसी दूसरी महिला में प्रत्यारोपित भ्रूण बनाने के लिए अपने अंडे का उपयोग करती है।', ur: 'وہ حیاتیاتی ماں جو کسی دوسری عورت میں پیوند کیے گئے جنین بنانے کے لیے اپنے انڈے کا استعمال کرتی ہے۔' } },
                            ],
                        },
                        {
                            id: 'coverage',
                            type: 'points',
                            heading: { en: 'Coverage Includes', hi: 'कवरेज में शामिल है', ur: 'کوریج میں شامل ہے' },
                            points: [
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Birth of a child', hi: 'बच्चे का जन्म', ur: 'بچے کی پیدائش' } },
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Medical termination of a pregnancy', hi: 'गर्भावस्था का चिकित्सीय समापन', ur: 'حمل کا طبی اختتام' } },
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Miscarriage and complications arising in connection with a pregnancy', hi: 'गर्भपात और गर्भावस्था से जुड़ी जटिलताएं', ur: 'اسقاط حمل اور حمل سے جڑی پیچیدگیاں' } },
                            ],
                        },
                        {
                            id: 'applicability',
                            type: 'points',
                            heading: { en: 'Applicable Establishments', hi: 'लागू प्रतिष्ठान', ur: 'قابل اطلاق ادارے' },
                            points: [
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'All factories, mines, and plantations including those operated by the Government.', hi: 'सरकार द्वारा संचालित सहित सभी कारखाने, खदानें और बागान।', ur: 'حکومت کی طرف سے چلائے جانے والے سمیت تمام کارخانے، کانیں اور باغات۔' } },
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Any establishment presenting equestrian, acrobatic, or other performances.', hi: 'घुड़सवारी, कलाबाजी या अन्य प्रदर्शन प्रस्तुत करने वाला कोई भी प्रतिष्ठान।', ur: 'گھڑسواری، کرتب یا دیگر پرفارمنس پیش کرنے والا کوئی بھی ادارہ۔' } },
                                { bold: { en: '', hi: '', ur: '' }, text: { en: 'Any shop or establishment that employed ten or more people on any single day in the preceding twelve months.', hi: 'पिछले बारह महीनों में किसी भी एकल दिन पर दस या अधिक लोगों को नियुक्त करने वाली कोई भी दुकान या प्रतिष्ठान।', ur: 'پچھلے بارہ مہینوں میں کسی بھی ایک دن دس یا زیادہ افراد کو ملازم رکھنے والی کوئی بھی دکان یا ادارہ۔' } },
                            ],
                        },
                        {
                            id: 'eligibility',
                            type: 'highlight',
                            heading: { en: 'Eligibility Criteria', hi: 'पात्रता मानदंड', ur: 'اہلیت کا معیار' },
                            text: { en: 'To be eligible for maternity benefits, a woman must have been employed at the establishment for a minimum of 80 days during the 12 months immediately preceding her expected delivery date. Crucially, the Act makes no distinction between full-time and part-time employees — both are equally entitled. (Section 5(2))', hi: 'मातृत्व लाभ के लिए पात्र होने के लिए, एक महिला को अपनी प्रत्याशित प्रसव तिथि से तुरंत पहले 12 महीनों के दौरान कम से कम 80 दिनों तक प्रतिष्ठान में नियोजित होना चाहिए। महत्वपूर्ण रूप से, अधिनियम पूर्णकालिक और अंशकालिक कर्मचारियों के बीच कोई अंतर नहीं करता — दोनों समान रूप से हकदार हैं।', ur: 'زچگی فوائد کے لیے اہل ہونے کے لیے، ایک عورت کو اپنی متوقع ڈیلیوری تاریخ سے فوری پہلے 12 مہینوں کے دوران کم از کم 80 دن ادارے میں ملازم ہونا چاہیے۔ اہم بات یہ ہے کہ قانون پورے وقت اور جز وقتی ملازمین کے درمیان کوئی فرق نہیں کرتا — دونوں یکساں طور پر حقدار ہیں۔' },
                        },
                    ],
                },

                // ── Leaves Available ───────────────────────────────
                {
                    id: 'mb_leaves',
                    icon: 'event_available',
                    title: { en: 'Leaves Available to Women', hi: 'महिलाओं को उपलब्ध अवकाश', ur: 'خواتین کو دستیاب چھٹیاں' },
                    subtitle: { en: 'Types and duration of maternity leave entitlements', hi: 'मातृत्व अवकाश पात्रता के प्रकार और अवधि', ur: 'زچگی کی چھٹی کے استحقاق کی اقسام اور مدت' },
                    sections: [
                        {
                            id: 'leave_types',
                            type: 'points',
                            heading: { en: 'Types of Leave', hi: 'अवकाश के प्रकार', ur: 'چھٹی کی اقسام' },
                            points: [
                                { bold: { en: 'Maternity Leave — 26 Weeks', hi: 'मातृत्व अवकाश — 26 सप्ताह', ur: 'زچگی کی چھٹی — 26 ہفتے' }, text: { en: '26 weeks of paid maternity leave for women with fewer than 2 surviving children. Up to 8 weeks can be availed before delivery, and the remaining after.', hi: '2 से कम जीवित बच्चों वाली महिलाओं के लिए 26 सप्ताह का सवेतन मातृत्व अवकाश। प्रसव से पहले 8 सप्ताह तक और शेष बाद में लिया जा सकता है।', ur: '2 سے کم زندہ بچوں والی خواتین کے لیے 26 ہفتوں کی تنخواہ کے ساتھ زچگی کی چھٹی۔ ڈیلیوری سے پہلے 8 ہفتے تک اور باقی بعد میں لی جا سکتی ہے۔' } },
                                { bold: { en: 'Maternity Leave — 12 Weeks', hi: 'मातृत्व अवकाश — 12 सप्ताह', ur: 'زچگی کی چھٹی — 12 ہفتے' }, text: { en: '12 weeks of paid maternity leave for women who already have 2 or more surviving children.', hi: '2 या अधिक जीवित बच्चों वाली महिलाओं के लिए 12 सप्ताह का सवेतन मातृत्व अवकाश।', ur: '2 یا زیادہ زندہ بچوں والی خواتین کے لیے 12 ہفتوں کی تنخواہ کے ساتھ زچگی کی چھٹی۔' } },
                                { bold: { en: 'Adoption Leave — 12 Weeks', hi: 'दत्तक ग्रहण अवकाश — 12 सप्ताह', ur: 'گود لینے کی چھٹی — 12 ہفتے' }, text: { en: '12 weeks of paid leave for a woman who adopts a child below 3 months of age, from the date of adoption.', hi: '3 महीने से कम उम्र के बच्चे को गोद लेने वाली महिला के लिए गोद लेने की तारीख से 12 सप्ताह का सवेतन अवकाश।', ur: '3 ماہ سے کم عمر کے بچے کو گود لینے والی عورت کے لیے گود لینے کی تاریخ سے 12 ہفتوں کی تنخواہ کے ساتھ چھٹی۔' } },
                                { bold: { en: 'Miscarriage / Medical Termination Leave — 6 Weeks', hi: 'गर्भपात / चिकित्सीय समापन अवकाश — 6 सप्ताह', ur: 'اسقاط حمل / طبی اختتام کی چھٹی — 6 ہفتے' }, text: { en: '6 weeks of paid leave following a miscarriage or medical termination of pregnancy.', hi: 'गर्भपात या गर्भावस्था के चिकित्सीय समापन के बाद 6 सप्ताह का सवेतन अवकाश।', ur: 'اسقاط حمل یا حمل کے طبی اختتام کے بعد 6 ہفتوں کی تنخواہ کے ساتھ چھٹی۔' } },
                                { bold: { en: 'Illness Leave — 1 Month', hi: 'बीमारी अवकाश — 1 माह', ur: 'بیماری کی چھٹی — 1 ماہ' }, text: { en: 'Up to 1 month of additional paid leave for illness arising out of pregnancy, delivery, premature birth, or miscarriage.', hi: 'गर्भावस्था, प्रसव, समयपूर्व जन्म या गर्भपात से उत्पन्न बीमारी के लिए 1 माह तक अतिरिक्त सवेतन अवकाश।', ur: 'حمل، ڈیلیوری، قبل از وقت پیدائش یا اسقاط حمل سے پیدا ہونے والی بیماری کے لیے 1 ماہ تک اضافی تنخواہ کے ساتھ چھٹی۔' } },
                            ],
                        },
                    ],
                },

                // ── Major Benefits ─────────────────────────────────
                {
                    id: 'mb_major_benefits',
                    icon: 'card_giftcard',
                    title: { en: 'Major Benefits Available', hi: 'उपलब्ध प्रमुख लाभ', ur: 'دستیاب بڑے فوائد' },
                    subtitle: { en: 'Primary entitlements under the Maternity Benefit Act', hi: 'मातृत्व लाभ अधिनियम के तहत प्राथमिक अधिकार', ur: 'زچگی فائدہ قانون کے تحت بنیادی استحقاق' },
                    sections: [
                        {
                            id: 'benefits',
                            type: 'points',
                            heading: { en: 'Key Benefits', hi: 'प्रमुख लाभ', ur: 'اہم فوائد' },
                            points: [
                                { bold: { en: 'Maternity Benefit Payment', hi: 'मातृत्व लाभ भुगतान', ur: 'زچگی فائدہ ادائیگی' }, text: { en: 'Full wages at the rate of average daily wage for the period of actual absence during maternity leave.', hi: 'मातृत्व अवकाश के दौरान वास्तविक अनुपस्थिति की अवधि के लिए औसत दैनिक वेतन की दर से पूरा वेतन।', ur: 'زچگی کی چھٹی کے دوران اصل غیر حاضری کی مدت کے لیے اوسط یومیہ اجرت کی شرح سے پوری تنخواہ۔' } },
                                { bold: { en: 'Medical Bonus', hi: 'चिकित्सा बोनस', ur: 'طبی بونس' }, text: { en: 'A medical bonus of ₹3,500 if no pre-natal/post-natal care is provided free of charge by the employer.', hi: 'यदि नियोक्ता द्वारा निःशुल्क प्रसव पूर्व/प्रसव पश्चात देखभाल प्रदान नहीं की जाती है, तो ₹3,500 का चिकित्सा बोनस।', ur: 'اگر آجر کی طرف سے مفت قبل از پیدائش/بعد از پیدائش دیکھ بھال فراہم نہیں کی جاتی تو ₹3,500 کا طبی بونس۔' } },
                                { bold: { en: 'No dismissal during leave', hi: 'अवकाश के दौरान बर्खास्तगी नहीं', ur: 'چھٹی کے دوران برطرفی نہیں' }, text: { en: 'An employer cannot dismiss, discharge, or give notice of dismissal to a woman during her maternity leave period.', hi: 'एक नियोक्ता मातृत्व अवकाश अवधि के दौरान किसी महिला को बर्खास्त, छुट्टी या बर्खास्तगी का नोटिस नहीं दे सकता।', ur: 'ایک آجر زچگی کی چھٹی کی مدت کے دوران کسی عورت کو برطرف، فارغ، یا برطرفی کا نوٹس نہیں دے سکتا۔' } },
                                { bold: { en: 'No deduction of wages', hi: 'वेतन में कोई कटौती नहीं', ur: 'اجرت میں کوئی کٹوتی نہیں' }, text: { en: 'Normal work cannot be assigned to a woman six weeks immediately preceding her expected delivery, and no wages can be deducted if she refuses such work.', hi: 'प्रत्याशित प्रसव से तुरंत पहले छह सप्ताह में किसी महिला को सामान्य काम नहीं दिया जा सकता और यदि वह ऐसे काम से इनकार करती है तो वेतन नहीं काटा जा सकता।', ur: 'متوقع ڈیلیوری سے فوری پہلے چھ ہفتوں میں کسی عورت کو عام کام نہیں دیا جا سکتا اور اگر وہ ایسے کام سے انکار کرتی ہے تو اجرت نہیں کاٹی جا سکتی۔' } },
                            ],
                        },
                    ],
                },

                // ── Other Facilities ───────────────────────────────
                {
                    id: 'mb_other_facilities',
                    icon: 'health_and_safety',
                    title: { en: 'Other Facilities Available', hi: 'अन्य उपलब्ध सुविधाएं', ur: 'دیگر دستیاب سہولیات' },
                    subtitle: { en: 'Additional protections and facilities under the Act', hi: 'अधिनियम के तहत अतिरिक्त सुरक्षाएं और सुविधाएं', ur: 'قانون کے تحت اضافی تحفظات اور سہولیات' },
                    sections: [
                        {
                            id: 'facilities',
                            type: 'points',
                            heading: { en: 'Facilities', hi: 'सुविधाएं', ur: 'سہولیات' },
                            points: [
                                { bold: { en: 'Creche Facility', hi: 'शिशुगृह सुविधा', ur: 'بچوں کی دیکھ بھال کی سہولت' }, text: { en: 'Every establishment with 50 or more employees must provide a creche facility. The woman is allowed 4 visits per day to the creche, including rest intervals.', hi: '50 या अधिक कर्मचारियों वाले प्रत्येक प्रतिष्ठान को शिशुगृह सुविधा प्रदान करनी होगी। महिला को विश्राम अंतराल सहित प्रतिदिन शिशुगृह में 4 बार जाने की अनुमति है।', ur: '50 یا زیادہ ملازمین والے ہر ادارے کو بچوں کی دیکھ بھال کی سہولت فراہم کرنی ہوگی۔ عورت کو آرام کے وقفوں سمیت روزانہ 4 بار بچوں کی دیکھ بھال کی جگہ جانے کی اجازت ہے۔' } },
                                { bold: { en: 'Work from Home Option', hi: 'घर से काम करने का विकल्प', ur: 'گھر سے کام کرنے کا آپشن' }, text: { en: 'After availing maternity benefit, a woman may opt to work from home if the nature of her work permits, on terms mutually agreed upon with the employer.', hi: 'मातृत्व लाभ का उपयोग करने के बाद, यदि उसके काम की प्रकृति अनुमति देती है, तो एक महिला नियोक्ता के साथ परस्पर सहमत शर्तों पर घर से काम करने का विकल्प चुन सकती है।', ur: 'زچگی فائدہ لینے کے بعد، ایک عورت گھر سے کام کرنے کا انتخاب کر سکتی ہے اگر اس کے کام کی نوعیت اجازت دے، آجر کے ساتھ باہمی طے شدہ شرائط پر۔' } },
                                { bold: { en: 'Light Duties', hi: 'हल्के कार्य', ur: 'ہلکے کام' }, text: { en: 'On request, a pregnant woman may be assigned lighter duties during the six weeks prior to delivery if she is engaged in arduous work.', hi: 'अनुरोध पर, यदि कोई गर्भवती महिला कठिन काम में लगी है, तो उसे प्रसव से छह सप्ताह पहले हल्के कर्तव्य सौंपे जा सकते हैं।', ur: 'درخواست پر، اگر کوئی حاملہ عورت محنت طلب کام میں لگی ہو تو ڈیلیوری سے چھ ہفتے پہلے اسے ہلکے کام سونپے جا سکتے ہیں۔' } },
                            ],
                        },
                    ],
                },

                // ── Additional Benefits on Resuming ────────────────
                {
                    id: 'mb_additional_benefits',
                    icon: 'work',
                    title: { en: 'Additional Benefits on Resuming Work', hi: 'काम पर वापस आने पर अतिरिक्त लाभ', ur: 'کام پر واپسی پر اضافی فوائد' },
                    subtitle: { en: 'Entitlements when a woman returns from maternity leave', hi: 'मातृत्व अवकाश से वापस आने पर एक महिला के अधिकार', ur: 'زچگی کی چھٹی سے واپس آنے پر عورت کے استحقاق' },
                    sections: [
                        {
                            id: 'return_benefits',
                            type: 'points',
                            heading: { en: 'Benefits Upon Return', hi: 'वापसी पर लाभ', ur: 'واپسی پر فوائد' },
                            points: [
                                { bold: { en: 'Same position guaranteed', hi: 'वही पद गारंटीकृत', ur: 'وہی عہدہ ضمانت یافتہ' }, text: { en: 'A woman is entitled to return to the same position she held before maternity leave. The employer cannot change her role, grade, or service conditions to her disadvantage.', hi: 'एक महिला मातृत्व अवकाश से पहले के उसी पद पर वापस आने की हकदार है। नियोक्ता उसके नुकसान के लिए उसकी भूमिका, श्रेणी या सेवा शर्तों को नहीं बदल सकता।', ur: 'ایک عورت زچگی کی چھٹی سے پہلے والے اسی عہدے پر واپس آنے کی حقدار ہے۔ آجر اس کے نقصان کے لیے اس کا کردار، درجہ یا سروس کی شرائط نہیں بدل سکتا۔' } },
                                { bold: { en: 'Nursing breaks', hi: 'नर्सिंग विराम', ur: 'دودھ پلانے کی چھٹیاں' }, text: { en: 'A woman who has a nursing child is entitled to two nursing breaks per day until the child reaches 15 months of age.', hi: 'एक महिला जिसके स्तनपान करने वाले बच्चे हैं, बच्चे के 15 महीने का होने तक प्रतिदिन दो नर्सिंग विराम की हकदार है।', ur: 'ایک عورت جس کے دودھ پینے والا بچہ ہے، بچے کے 15 ماہ کی عمر تک روزانہ دو دودھ پلانے کے وقفوں کی حقدار ہے۔' } },
                            ],
                        },
                    ],
                },

                // ── How to Avail ───────────────────────────────────
                {
                    id: 'mb_how_to_avail',
                    icon: 'how_to_reg',
                    title: { en: 'How to Avail Benefits', hi: 'लाभ कैसे प्राप्त करें', ur: 'فوائد کیسے حاصل کریں' },
                    subtitle: { en: 'Step-by-step process for claiming maternity benefits', hi: 'मातृत्व लाभ के लिए दावा करने की चरणबद्ध प्रक्रिया', ur: 'زچگی فوائد کا دعویٰ کرنے کا مرحلہ وار طریقہ' },
                    sections: [
                        {
                            id: 'process',
                            type: 'points',
                            heading: { en: 'Claiming Process', hi: 'दावा प्रक्रिया', ur: 'دعویٰ کا طریقہ' },
                            points: [
                                { bold: { en: 'Written Notice', hi: 'लिखित सूचना', ur: 'تحریری نوٹس' }, text: { en: 'Give written notice to the employer stating the date from which maternity leave will commence and the nominee to receive benefits in case of death.', hi: 'नियोक्ता को लिखित नोटिस दें जिसमें मातृत्व अवकाश शुरू होने की तारीख और मृत्यु के मामले में लाभ प्राप्त करने वाले नामांकित व्यक्ति का उल्लेख हो।', ur: 'آجر کو تحریری نوٹس دیں جس میں زچگی کی چھٹی شروع ہونے کی تاریخ اور موت کی صورت میں فوائد وصول کرنے والے نامزد شخص کا ذکر ہو۔' } },
                                { bold: { en: 'Medical Certificate', hi: 'चिकित्सा प्रमाण पत्र', ur: 'طبی سرٹیفکیٹ' }, text: { en: 'Submit a medical certificate from a registered medical practitioner confirming the pregnancy and expected date of delivery.', hi: 'एक पंजीकृत चिकित्सा व्यवसायी से गर्भावस्था और प्रत्याशित प्रसव तिथि की पुष्टि करने वाला चिकित्सा प्रमाण पत्र जमा करें।', ur: 'ایک رجسٹرڈ طبی پریکٹیشنر سے حمل اور متوقع ڈیلیوری تاریخ کی تصدیق کرنے والا طبی سرٹیفکیٹ جمع کریں۔' } },
                                { bold: { en: 'Claim Application', hi: 'दावा आवेदन', ur: 'دعویٰ درخواست' }, text: { en: 'Submit a formal application to the employer for maternity benefit, along with all supporting documents.', hi: 'सभी सहायक दस्तावेजों के साथ मातृत्व लाभ के लिए नियोक्ता को औपचारिक आवेदन जमा करें।', ur: 'تمام معاون دستاویزات کے ساتھ آجر کو زچگی فائدہ کے لیے باقاعدہ درخواست جمع کریں۔' } },
                            ],
                        },
                    ],
                },

                // ── Other Prerequisites ────────────────────────────
                {
                    id: 'mb_prerequisites',
                    icon: 'checklist',
                    title: { en: 'Other Pre-requisites', hi: 'अन्य पूर्व-आवश्यकताएं', ur: 'دیگر ضروری شرائط' },
                    subtitle: { en: 'Additional conditions to be aware of', hi: 'जानने योग्य अतिरिक्त शर्तें', ur: 'آگاہ ہونے کے لیے اضافی شرائط' },
                    sections: [
                        {
                            id: 'prerequisites',
                            type: 'points',
                            heading: { en: 'Additional Requirements', hi: 'अतिरिक्त आवश्यकताएं', ur: 'اضافی ضروریات' },
                            points: [
                                { bold: { en: 'Advance notice required', hi: 'अग्रिम नोटिस आवश्यक', ur: 'پیشگی نوٹس ضروری' }, text: { en: 'A woman must give advance written notice of at least one month (or as soon as possible) before availing maternity benefit.', hi: 'मातृत्व लाभ लेने से पहले एक महिला को कम से कम एक महीने (या जितनी जल्दी संभव हो) का लिखित अग्रिम नोटिस देना होगा।', ur: 'زچگی فائدہ لینے سے پہلے ایک عورت کو کم از کم ایک ماہ (یا جتنی جلدی ممکن ہو) کا تحریری پیشگی نوٹس دینا ہوگا۔' } },
                                { bold: { en: 'Nominee declaration', hi: 'नामांकित व्यक्ति की घोषणा', ur: 'نامزد شخص کا اعلان' }, text: { en: 'The woman must declare a nominee who will receive the maternity benefit in the event of her death during the maternity period.', hi: 'महिला को एक नामांकित व्यक्ति घोषित करना होगा जो मातृत्व अवधि के दौरान उसकी मृत्यु की स्थिति में मातृत्व लाभ प्राप्त करेगा।', ur: 'عورت کو ایک نامزد شخص کا اعلان کرنا ہوگا جو زچگی کی مدت کے دوران اس کی موت کی صورت میں زچگی فائدہ وصول کرے گا۔' } },
                                { bold: { en: 'No work restriction', hi: 'काम पر कोई प्रतिबंध नहीं', ur: 'کام پر کوئی پابندی نہیں' }, text: { en: 'The employer cannot ask a woman to do work that is arduous or that involves long hours of standing during the six weeks immediately preceding delivery.', hi: 'नियोक्ता किसी महिला से प्रसव से तुरंत पहले छह सप्ताह के दौरान कठिन काम या लंबे समय तक खड़े रहने वाला काम करने के लिए नहीं कह सकता।', ur: 'آجر کسی عورت کو ڈیلیوری سے فوری پہلے چھ ہفتوں کے دوران محنت طلب کام یا لمبے عرصے تک کھڑے رہنے کا کام کرنے کے لیے نہیں کہہ سکتا۔' } },
                            ],
                        },
                    ],
                },

                // ── Authorities ────────────────────────────────────
                {
                    id: 'mb_authorities',
                    icon: 'account_balance',
                    title: { en: 'Authorities Under the Act', hi: 'अधिनियम के तहत प्राधिकरण', ur: 'قانون کے تحت حکام' },
                    subtitle: { en: 'Regulatory and enforcement authorities', hi: 'नियामक और प्रवर्तन प्राधिकरण', ur: 'ریگولیٹری اور نفاذ حکام' },
                    sections: [
                        {
                            id: 'authorities',
                            type: 'points',
                            heading: { en: 'Key Authorities', hi: 'प्रमुख प्राधिकरण', ur: 'اہم حکام' },
                            points: [
                                { bold: { en: 'Inspector', hi: 'निरीक्षक', ur: 'انسپکٹر' }, text: { en: 'The State Government appoints Inspectors who are responsible for enforcing the Act. An Inspector can enter any establishment, examine records, and take evidence.', hi: 'राज्य सरकार निरीक्षकों की नियुक्ति करती है जो अधिनियम को लागू करने के लिए जिम्मेदार हैं। एक निरीक्षक किसी भी प्रतिष्ठान में प्रवेश कर सकता है, रिकॉर्ड की जांच कर सकता है और साक्ष्य ले सकता है।', ur: 'ریاستی حکومت انسپکٹرز مقرر کرتی ہے جو قانون کے نفاذ کے ذمہ دار ہیں۔ ایک انسپکٹر کسی بھی ادارے میں داخل ہو سکتا ہے، ریکارڈ کی جانچ کر سکتا ہے اور شہادت لے سکتا ہے۔' } },
                                { bold: { en: 'Labour Commissioner', hi: 'श्रम आयुक्त', ur: 'لیبر کمشنر' }, text: { en: 'Complaints can be filed with the Labour Commissioner for violations of the Act by employers.', hi: 'नियोक्ताओं द्वारा अधिनियम के उल्लंघन के लिए श्रम आयुक्त के पास शिकायत दर्ज की जा सकती है।', ur: 'آجروں کی طرف سے قانون کی خلاف ورزی کے لیے لیبر کمشنر کے پاس شکایت درج کی جا سکتی ہے۔' } },
                                { bold: { en: 'Appellate Authority', hi: 'अपीलीय प्राधिकरण', ur: 'اپیل کا اختیار' }, text: { en: 'Any woman aggrieved by an order of the employer may appeal to the authority prescribed by the State Government within 60 days.', hi: 'नियोक्ता के आदेश से व्यथित कोई भी महिला 60 दिनों के भीतर राज्य सरकार द्वारा निर्धारित प्राधिकरण में अपील कर सकती है।', ur: 'آجر کے حکم سے متاثرہ کوئی بھی عورت 60 دنوں کے اندر ریاستی حکومت کی طرف سے مقرر کردہ اتھارٹی میں اپیل کر سکتی ہے۔' } },
                            ],
                        },
                    ],
                },

                // ── Penalties ──────────────────────────────────────
                {
                    id: 'mb_penalties',
                    icon: 'gavel',
                    title: { en: 'Penalties for Contravention', hi: 'उल्लंघन के लिए दंड', ur: 'خلاف ورزی کے لیے سزائیں' },
                    subtitle: { en: 'Legal consequences for employers who violate the Act', hi: 'अधिनियम का उल्लंघन करने वाले नियोक्ताओं के कानूनी परिणाम', ur: 'قانون کی خلاف ورزی کرنے والے آجروں کے قانونی نتائج' },
                    sections: [
                        {
                            id: 'employer_penalties',
                            type: 'points',
                            heading: { en: 'Penalties for Employers', hi: 'नियोक्ताओं के लिए दंड', ur: 'آجروں کے لیے سزائیں' },
                            points: [
                                { bold: { en: 'Failure to pay maternity benefit', hi: 'मातृत्व लाभ न देने पर', ur: 'زچگی فائدہ نہ دینے پر' }, text: { en: 'Imprisonment of minimum 3 months extendable to 1 year, or fine of minimum ₹2,000 extendable to ₹5,000, or both.', hi: 'न्यूनतम 3 महीने का कारावास जो 1 वर्ष तक बढ़ सकता है, या न्यूनतम ₹2,000 का जुर्माना जो ₹5,000 तक हो सकता है, या दोनों।', ur: 'کم از کم 3 ماہ کی قید جو 1 سال تک بڑھ سکتی ہے، یا کم از کم ₹2,000 کا جرمانہ جو ₹5,000 تک ہو سکتا ہے، یا دونوں۔' } },
                                { bold: { en: 'Discharge or dismissal during leave', hi: 'अवकाश के दौरान बर्खास्तगी', ur: 'چھٹی کے دوران برطرفی' }, text: { en: 'Imprisonment of minimum 3 months extendable to 1 year, or fine of minimum ₹2,000 extendable to ₹5,000, or both.', hi: 'न्यूनतम 3 महीने का कारावास जो 1 वर्ष तक बढ़ सकता है, या न्यूनतम ₹2,000 का जुर्माना जो ₹5,000 तक हो सकता है, या दोनों।', ur: 'کم از کم 3 ماہ کی قید جو 1 سال تک بڑھ سکتی ہے، یا کم از کم ₹2,000 کا جرمانہ جو ₹5,000 تک ہو سکتا ہے، یا دونوں۔' } },
                                { bold: { en: 'Other contraventions', hi: 'अन्य उल्लंघन', ur: 'دیگر خلاف ورزیاں' }, text: { en: 'For any other contravention of the provisions of the Act, fine of minimum ₹2,000 extendable to ₹5,000.', hi: 'अधिनियम के प्रावधानों के किसी अन्य उल्लंघन के लिए, न्यूनतम ₹2,000 का जुर्माना जो ₹5,000 तक हो सकता है।', ur: 'قانون کی دفعات کی کسی دوسری خلاف ورزی کے لیے، کم از کم ₹2,000 کا جرمانہ جو ₹5,000 تک ہو سکتا ہے۔' } },
                            ],
                        },
                    ],
                },

            ], // end maternity_benefit.items
        },

    ], // end subcategories
};