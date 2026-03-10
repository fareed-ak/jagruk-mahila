// ============================================================
// constants/otherOffencesData.js
// Jagruk Mahila - Other Offences Related to Women
//
// Same structure as constitutionData.js / reproductiveRightsData.js
// / sexualCrimesData.js / marriageOffensesData.js / cyberCrimesData.js
// Section types: constitutional_text | points | highlight | text
// Access: field[currentLanguage] || field.en
// ============================================================

export const OTHER_OFFENCES_DATA = {
  id: "other_offences",
  icon: "gavel",
  label: {
    en: "Other Offences Related to Women",
    hi: "महिलाओं से संबंधित अन्य अपराध",
    ur: "خواتین سے متعلق دیگر جرائم",
  },
  description: {
    en: "Acid attack, human trafficking, and indecent representation laws and remedies affecting women",
    hi: "एसिड अटैक, मानव तस्करी और महिलाओं के अशोभनीय चित्रण से संबंधित कानून और उपचार",
    ur: "تیزاب حملہ، انسانی اسمگلنگ، اور خواتین کی ناشائستہ نمائندگی سے متعلق قوانین اور قانونی راستے",
  },

  subcategories: [
    {
      id: "acid_attack",
      icon: "local_hospital",
      label: {
        en: "Acid Attack",
        hi: "एसिड अटैक",
        ur: "تیزاب حملہ",
      },
      description: {
        en: "Definition, punishment, sale regulation, and medical and compensation rights for survivors",
        hi: "परिभाषा, दंड, एसिड बिक्री विनियमन, और पीड़िताओं के चिकित्सा व मुआवज़ा अधिकार",
        ur: "تعریف، سزا، تیزاب کی فروخت کے ضوابط، اور متاثرین کے علاج و معاوضے کے حقوق",
      },
      items: [
        {
          id: "acid_attack_ingredients",
          icon: "description",
          title: {
            en: "Essential Ingredients of Acid Attack",
            hi: "एसिड अटैक के आवश्यक तत्व",
            ur: "تیزاب حملے کے بنیادی عناصر",
          },
          subtitle: {
            en: "What conduct amounts to acid attack or attempt under criminal law",
            hi: "कौन-सा आचरण आपराधिक कानून के तहत एसिड अटैक या उसके प्रयास में आता है",
            ur: "کون سا عمل فوجداری قانون کے تحت تیزاب حملہ یا اس کی کوشش شمار ہوتا ہے",
          },
          sections: [
            {
              id: "definition",
              type: "constitutional_text",
              heading: {
                en: "Legal Meaning",
                hi: "कानूनी अर्थ",
                ur: "قانونی مفہوم",
              },
              text: {
                en: "Acid attack includes causing permanent or partial damage, deformity, burns, maiming, disfigurement, disability, or grievous hurt by throwing acid, administering acid, or using any corrosive or burning substance with the required intent.",
                hi: "एसिड अटैक में किसी व्यक्ति पर एसिड फेंककर, एसिड डालकर या किसी संक्षारक/जलाने वाले पदार्थ का उपयोग कर स्थायी या आंशिक क्षति, विकृति, जलन, विकलांगता, कुरूपता या गंभीर चोट पहुंचाना शामिल है।",
                ur: "تیزاب حملے میں کسی شخص پر تیزاب پھینک کر، تیزاب پلا کر، یا کسی جلا دینے والی یا corrosive نوعیت کے مادے کے ذریعے مستقل یا جزوی نقصان، بگاڑ، جلنا، معذوری، بدشکلی، یا شدید چوٹ پہنچانا شامل ہے۔",
              },
            },
            {
              id: "core_elements",
              type: "points",
              heading: {
                en: "Core Elements",
                hi: "मुख्य तत्व",
                ur: "بنیادی عناصر",
              },
              points: [
                {
                  bold: { en: "Use of acid or corrosive substance", hi: "एसिड या संक्षारक पदार्थ का उपयोग", ur: "تیزاب یا corrosive مادے کا استعمال" },
                  text: { en: "The law is not limited to one named chemical; it includes any corrosive or burning substance capable of causing the stated injuries.", hi: "कानून केवल किसी एक रसायन तक सीमित नहीं है; इसमें कोई भी ऐसा संक्षारक या जलाने वाला पदार्थ शामिल है जो बताई गई चोट पहुंचा सके।", ur: "قانون کسی ایک مخصوص کیمیکل تک محدود نہیں؛ اس میں کوئی بھی ایسا corrosive یا جلانے والا مادہ شامل ہے جو مذکورہ نقصان پہنچا سکے۔" },
                },
                {
                  bold: { en: "Specified injury", hi: "निर्दिष्ट चोट", ur: "متعین نقصان" },
                  text: { en: "Damage, deformity, burns, disfigurement, disability, or grievous hurt are sufficient consequences under the section.", hi: "क्षति, विकृति, जलन, कुरूपता, विकलांगता या गंभीर चोट इस धारा के तहत पर्याप्त परिणाम हैं।", ur: "نقصان، بگاڑ، جلنا، بدشکلی، معذوری، یا شدید چوٹ اس دفعہ کے تحت کافی نتائج ہیں۔" },
                },
                {
                  bold: { en: "Intent or knowledge", hi: "इरादा या जानकारी", ur: "ارادہ یا علم" },
                  text: { en: "The act must be done with the intention or knowledge that such harm is likely to result.", hi: "कृत्य ऐसे इरादे या ज्ञान के साथ किया गया होना चाहिए कि इस प्रकार का नुकसान होने की संभावना है।", ur: "عمل ایسا ارادہ یا علم رکھتے ہوئے کیا گیا ہو کہ اس قسم کا نقصان ہونے کا امکان ہے۔" },
                },
                {
                  bold: { en: "Attempt also punishable", hi: "प्रयास भी दंडनीय", ur: "کوشش بھی قابل سزا" },
                  text: { en: "Attempting to throw or administer acid is separately punishable even if the intended injuries do not fully materialise.", hi: "एसिड फेंकने या पिलाने का प्रयास भी अलग से दंडनीय है, भले ही पूरी चोट न हुई हो।", ur: "تیزاب پھینکنے یا پلانے کی کوشش بھی الگ سے قابل سزا ہے، خواہ مطلوبہ چوٹ مکمل طور پر واقع نہ ہوئی ہو۔" },
                },
              ],
            },
          ],
        },
        {
          id: "acid_attack_law",
          icon: "balance",
          title: {
            en: "Law on Acid Attacks in India",
            hi: "भारत में एसिड अटैक पर कानून",
            ur: "بھارت میں تیزاب حملوں سے متعلق قانون",
          },
          subtitle: {
            en: "Current punishment and victim-focused fine provisions",
            hi: "वर्तमान दंड और पीड़िता-केंद्रित जुर्माना प्रावधान",
            ur: "موجودہ سزا اور متاثرہ فرد کے حق میں جرمانے کے ضوابط",
          },
          sections: [
            {
              id: "bns_section",
              type: "constitutional_text",
              heading: {
                en: "Relevant Provision",
                hi: "प्रासंगिक प्रावधान",
                ur: "متعلقہ دفعہ",
              },
              text: {
                en: "Acid attack and attempt are covered under the Bharatiya Nyaya Sanhita, 2023. The punishment is severe because the offence targets bodily integrity, dignity, and long-term survival.",
                hi: "एसिड अटैक और उसके प्रयास को भारतीय न्याय संहिता, 2023 के तहत दंडित किया गया है। यह अपराध शरीर, गरिमा और दीर्घकालिक जीवन-स्थितियों पर गंभीर प्रभाव डालता है, इसलिए इसकी सजा कठोर है।",
                ur: "تیزاب حملہ اور اس کی کوشش بھارتیہ نیائے سنہتا، 2023 کے تحت قابل سزا ہیں۔ چونکہ یہ جرم جسمانی سلامتی، وقار، اور طویل مدتی زندگی پر شدید اثر ڈالتا ہے، اس لیے اس کی سزا سخت ہے۔",
              },
            },
            {
              id: "punishment",
              type: "points",
              heading: {
                en: "Punishment",
                hi: "दंड",
                ur: "سزا",
              },
              points: [
                {
                  bold: { en: "Acid attack", hi: "एसिड अटैक", ur: "تیزاب حملہ" },
                  text: { en: "Imprisonment not less than 10 years, which may extend to imprisonment for life, along with fine.", hi: "10 वर्ष से कम नहीं, जो आजीवन कारावास तक बढ़ सकती है, और साथ में जुर्माना।", ur: "کم از کم 10 سال قید، جو عمر قید تک بڑھ سکتی ہے، اور ساتھ جرمانہ۔" },
                },
                {
                  bold: { en: "Attempt", hi: "प्रयास", ur: "کوشش" },
                  text: { en: "Attempt to throw or administer acid is punishable with imprisonment not less than 5 years, which may extend to 7 years, along with fine.", hi: "एसिड फेंकने या पिलाने का प्रयास 5 वर्ष से कम नहीं, जो 7 वर्ष तक बढ़ सकती है, और साथ में जुर्माने से दंडनीय है।", ur: "تیزاب پھینکنے یا پلانے کی کوشش کم از کم 5 سال، جو 7 سال تک بڑھ سکتی ہے، اور ساتھ جرمانے سے قابل سزا ہے۔" },
                },
                {
                  bold: { en: "Fine for victim", hi: "पीड़िता के लिए जुर्माना", ur: "متاثرہ کے لیے جرمانہ" },
                  text: { en: "The fine is intended to meet medical expenses and must be paid to the victim.", hi: "जुर्माने का उद्देश्य चिकित्सा खर्च पूरा करना है और यह पीड़िता को दिया जाना चाहिए।", ur: "جرمانے کا مقصد طبی اخراجات پورا کرنا ہے اور اسے متاثرہ شخص کو دیا جانا چاہیے۔" },
                },
              ],
            },
            {
              id: "practical_note",
              type: "highlight",
              heading: {
                en: "Practical Note",
                hi: "व्यावहारिक टिप्पणी",
                ur: "عملی نوٹ",
              },
              text: {
                en: "In an acid attack case, medical evidence, photographs, witness accounts, purchase trail, and recovery of the substance can all be important. Early FIR and immediate treatment matter.",
                hi: "एसिड अटैक मामले में चिकित्सीय साक्ष्य, फोटो, गवाहों के बयान, खरीद का रिकॉर्ड और पदार्थ की बरामदगी महत्वपूर्ण हो सकते हैं। शीघ्र एफआईआर और तुरंत उपचार बहुत महत्वपूर्ण हैं।",
                ur: "تیزاب حملے کے معاملے میں طبی ثبوت، تصاویر، گواہوں کے بیانات، خریداری کا سراغ، اور مادے کی برآمدگی سب اہم ہو سکتے ہیں۔ فوری ایف آئی آر اور فوری علاج بہت اہم ہیں۔",
              },
            },
          ],
        },
        {
          id: "acid_sales_regulation",
          icon: "store",
          title: {
            en: "Regulation of Acid Sales",
            hi: "एसिड की बिक्री का विनियमन",
            ur: "تیزاب کی فروخت کا ضابطہ",
          },
          subtitle: {
            en: "Why acid sales are controlled and what sellers are expected to follow",
            hi: "एसिड की बिक्री क्यों नियंत्रित है और विक्रेताओं से क्या अपेक्षा की जाती है",
            ur: "تیزاب کی فروخت کیوں کنٹرول میں ہے اور فروخت کنندگان سے کیا تقاضے کیے جاتے ہیں",
          },
          sections: [
            {
              id: "purpose",
              type: "constitutional_text",
              heading: {
                en: "Purpose of Regulation",
                hi: "विनियमन का उद्देश्य",
                ur: "ضابطہ بندی کا مقصد",
              },
              text: {
                en: "Acid sales are regulated to reduce casual access to corrosive substances and to make tracing possible when such substances are misused in violent crime.",
                hi: "एसिड की बिक्री इसलिए नियंत्रित की जाती है ताकि संक्षारक पदार्थों की सहज उपलब्धता कम हो और अपराध में दुरुपयोग होने पर उसका पता लगाया जा सके।",
                ur: "تیزاب کی فروخت اس لیے منظم کی جاتی ہے تاکہ corrosive مادوں تک آسان رسائی کم ہو اور جرم میں غلط استعمال ہونے کی صورت میں اس کا سراغ لگایا جا سکے۔",
              },
            },
            {
              id: "compliance",
              type: "points",
              heading: {
                en: "Common Compliance Expectations",
                hi: "सामान्य अनुपालन अपेक्षाएं",
                ur: "عام تعمیلی تقاضے",
              },
              points: [
                {
                  bold: { en: "Identity and purpose", hi: "पहचान और उद्देश्य", ur: "شناخت اور مقصد" },
                  text: { en: "Retail sale is generally expected to be linked to identity verification and a legitimate stated purpose.", hi: "खुदरा बिक्री सामान्यतः पहचान सत्यापन और वैध उद्देश्य से जुड़ी मानी जाती है।", ur: "خوردہ فروخت عموماً شناخت کی تصدیق اور جائز مقصد سے مشروط سمجھی جاتی ہے۔" },
                },
                {
                  bold: { en: "Sales records", hi: "बिक्री अभिलेख", ur: "فروخت کا ریکارڈ" },
                  text: { en: "Sellers are expected to maintain records of purchase and purchaser details for inspection and tracing.", hi: "विक्रेताओं से खरीद और खरीदार का रिकॉर्ड निरीक्षण और ट्रेसिंग के लिए रखने की अपेक्षा की जाती है।", ur: "فروخت کنندگان سے توقع کی جاتی ہے کہ وہ خریداری اور خریدار کی تفصیلات کا ریکارڈ معائنہ اور سراغ کے لیے محفوظ رکھیں۔" },
                },
                {
                  bold: { en: "Restricted access", hi: "सीमित पहुंच", ur: "محدود رسائی" },
                  text: { en: "Unregulated public access is discouraged because acid is easily weaponised.", hi: "अनियमित सार्वजनिक पहुंच हतोत्साहित की जाती है क्योंकि एसिड को आसानी से हथियार की तरह इस्तेमाल किया जा सकता है।", ur: "غیر منظم عوامی رسائی کی حوصلہ شکنی کی جاتی ہے کیونکہ تیزاب کو آسانی سے ہتھیار کے طور پر استعمال کیا جا سکتا ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "acid_attack_victim_care",
          icon: "healing",
          title: {
            en: "Compensation and Care for Victims",
            hi: "पीड़िताओं के लिए मुआवज़ा और देखभाल",
            ur: "متاثرین کے لیے معاوضہ اور دیکھ بھال",
          },
          subtitle: {
            en: "Immediate treatment, legal aid, rehabilitation, and compensation support",
            hi: "तत्काल उपचार, विधिक सहायता, पुनर्वास और मुआवज़ा सहायता",
            ur: "فوری علاج، قانونی امداد، بحالی، اور معاوضے کی مدد",
          },
          sections: [
            {
              id: "medical_rights",
              type: "points",
              heading: {
                en: "Immediate Rights",
                hi: "तत्काल अधिकार",
                ur: "فوری حقوق",
              },
              points: [
                {
                  bold: { en: "Emergency treatment", hi: "आपातकालीन उपचार", ur: "ہنگامی علاج" },
                  text: { en: "The survivor should receive urgent medical treatment without delay, including first aid, burn care, and referral where needed.", hi: "पीड़िता को बिना देरी आपातकालीन उपचार मिलना चाहिए, जिसमें प्राथमिक उपचार, बर्न केयर और आवश्यक रेफरल शामिल हों।", ur: "متاثرہ شخص کو بلا تاخیر ہنگامی علاج ملنا چاہیے، جس میں ابتدائی طبی امداد، جلنے کا علاج، اور ضرورت پڑنے پر ریفرل شامل ہو۔" },
                },
                {
                  bold: { en: "Compensation support", hi: "मुआवज़ा सहायता", ur: "معاوضہ امداد" },
                  text: { en: "Victim compensation mechanisms and legal services authorities may assist survivors with interim and final compensation claims.", hi: "पीड़ित मुआवज़ा योजनाएं और विधिक सेवा प्राधिकरण अंतरिम तथा अंतिम मुआवज़ा दावों में सहायता कर सकते हैं।", ur: "متاثرین کے معاوضے کے نظام اور قانونی خدمات کے ادارے عبوری اور حتمی معاوضے کے دعووں میں مدد کر سکتے ہیں۔" },
                },
                {
                  bold: { en: "Rehabilitation", hi: "पुनर्वास", ur: "بحالی" },
                  text: { en: "Rehabilitation may include reconstructive treatment, counselling, shelter, and livelihood support depending on need and state schemes.", hi: "पुनर्वास में आवश्यकता और राज्य योजना के अनुसार पुनर्निर्माण उपचार, परामर्श, आश्रय और आजीविका सहायता शामिल हो सकती है।", ur: "بحالی میں ضرورت اور ریاستی اسکیم کے مطابق reconstructive علاج، مشاورت، پناہ، اور روزگار کی مدد شامل ہو سکتی ہے۔" },
                },
              ],
            },
            {
              id: "practical_steps",
              type: "highlight",
              heading: {
                en: "Practical Steps",
                hi: "व्यावहारिक कदम",
                ur: "عملی اقدامات",
              },
              text: {
                en: "Seek emergency treatment first, then ensure FIR registration, preserve medical records and photographs, and approach the legal services authority or victim compensation authority for further relief.",
                hi: "पहले आपातकालीन उपचार लें, फिर एफआईआर दर्ज कराएं, मेडिकल रिकॉर्ड और फोटो सुरक्षित रखें, और आगे की राहत के लिए विधिक सेवा प्राधिकरण या पीड़ित मुआवज़ा प्राधिकरण से संपर्क करें।",
                ur: "سب سے پہلے ہنگامی علاج حاصل کریں، پھر ایف آئی آر درج کروائیں، طبی ریکارڈ اور تصاویر محفوظ رکھیں، اور مزید ریلیف کے لیے قانونی خدمات اتھارٹی یا متاثرہ معاوضہ اتھارٹی سے رجوع کریں۔",
              },
            },
          ],
        },
      ],
    },
    {
      id: "human_trafficking",
      icon: "security",
      label: {
        en: "Human Trafficking",
        hi: "मानव तस्करी",
        ur: "انسانی اسمگلنگ",
      },
      description: {
        en: "Trafficking definition, ITPA framework, rescue, protection, and institutional response",
        hi: "तस्करी की परिभाषा, आईटीपीए ढांचा, बचाव, संरक्षण और संस्थागत प्रतिक्रिया",
        ur: "اسمگلنگ کی تعریف، آئی ٹی پی اے کا ڈھانچہ، بچاؤ، تحفظ، اور ادارہ جاتی ردعمل",
      },
      items: [
        {
          id: "human_trafficking_overview",
          icon: "info",
          title: {
            en: "What Is Human Trafficking",
            hi: "मानव तस्करी क्या है",
            ur: "انسانی اسمگلنگ کیا ہے",
          },
          subtitle: {
            en: "Basic meaning and legal focus",
            hi: "मूल अर्थ और कानूनी फोकस",
            ur: "بنیادی مفہوم اور قانونی توجہ",
          },
          sections: [
            {
              id: "meaning",
              type: "constitutional_text",
              heading: {
                en: "Meaning",
                hi: "अर्थ",
                ur: "مطلب",
              },
              text: {
                en: "Human trafficking refers to recruiting, transporting, transferring, harbouring, or receiving persons for exploitation through force, coercion, deception, abuse of power, or similar means. Women and children are often targeted for sexual exploitation, forced labour, forced marriage, or other abuse.",
                hi: "मानव तस्करी में भर्ती करना, ले जाना, स्थानांतरित करना, आश्रय देना या व्यक्तियों को शोषण के उद्देश्य से प्राप्त करना शामिल है, जहां बल, दबाव, धोखा, अधिकार का दुरुपयोग या समान साधनों का उपयोग किया जाता है। महिलाओं और बच्चों को अक्सर यौन शोषण, जबरन मजदूरी, जबरन विवाह या अन्य दुरुपयोग के लिए निशाना बनाया जाता है।",
                ur: "انسانی اسمگلنگ میں افراد کو استحصال کے لیے بھرتی کرنا، منتقل کرنا، لے جانا، پناہ دینا، یا وصول کرنا شامل ہے، جہاں زور، جبر، دھوکہ، اختیار کے غلط استعمال، یا اسی طرح کے ذرائع استعمال کیے جاتے ہیں۔ خواتین اور بچے اکثر جنسی استحصال، جبری مشقت، جبری شادی، یا دیگر زیادتی کے لیے نشانہ بنتے ہیں۔",
              },
            },
            {
              id: "three_elements",
              type: "points",
              heading: {
                en: "Three Core Elements",
                hi: "तीन मुख्य तत्व",
                ur: "تین بنیادی عناصر",
              },
              points: [
                {
                  bold: { en: "Act", hi: "कृत्य", ur: "عمل" },
                  text: { en: "Recruitment, transportation, transfer, harbouring, or receipt of persons.", hi: "भर्ती, परिवहन, स्थानांतरण, आश्रय देना या व्यक्तियों को प्राप्त करना।", ur: "بھرتی، نقل و حمل، منتقلی، پناہ دینا، یا افراد کو وصول کرنا۔" },
                },
                {
                  bold: { en: "Means", hi: "साधन", ur: "ذرائع" },
                  text: { en: "Threat, force, coercion, abduction, fraud, deception, abuse of authority, or inducement.", hi: "धमकी, बल, दबाव, अपहरण, धोखाधड़ी, छल, अधिकार का दुरुपयोग या प्रलोभन।", ur: "دھمکی، زور، جبر، اغوا، فراڈ، دھوکہ، اختیار کا غلط استعمال، یا لالچ۔" },
                },
                {
                  bold: { en: "Purpose", hi: "उद्देश्य", ur: "مقصد" },
                  text: { en: "Exploitation, including prostitution of others, sexual exploitation, slavery-like practices, servitude, or forced labour.", hi: "शोषण, जिसमें दूसरों के वेश्यावृत्ति हेतु उपयोग, यौन शोषण, दासता जैसी प्रथाएं, बंधन या जबरन मजदूरी शामिल हैं।", ur: "استحصال، جس میں دوسروں کی جسم فروشی، جنسی استحصال، غلامی جیسی مشقیں، خدمت، یا جبری مشقت شامل ہیں۔" },
                },
              ],
            },
          ],
        },
        {
          id: "itpa_intent_and_scope",
          icon: "gavel",
          title: {
            en: "Intent and Scope of ITPA",
            hi: "आईटीपीए का उद्देश्य और दायरा",
            ur: "آئی ٹی پی اے کا مقصد اور دائرہ",
          },
          subtitle: {
            en: "Why the Immoral Traffic (Prevention) Act exists and what it targets",
            hi: "अनैतिक व्यापार (निवारण) अधिनियम क्यों है और यह किन गतिविधियों को लक्षित करता है",
            ur: "Immoral Traffic (Prevention) Act کیوں موجود ہے اور یہ کن سرگرمیوں کو نشانہ بناتا ہے",
          },
          sections: [
            {
              id: "intent",
              type: "constitutional_text",
              heading: {
                en: "Purpose of the Act",
                hi: "अधिनियम का उद्देश्य",
                ur: "قانون کا مقصد",
              },
              text: {
                en: "The Immoral Traffic (Prevention) Act, 1956 is aimed at preventing trafficking and commercial sexual exploitation and punishing those who profit from, organise, facilitate, or compel such exploitation.",
                hi: "अनैतिक व्यापार (निवारण) अधिनियम, 1956 का उद्देश्य तस्करी और व्यावसायिक यौन शोषण को रोकना तथा उससे लाभ उठाने, उसे संगठित करने, बढ़ावा देने या मजबूर करने वालों को दंडित करना है।",
                ur: "Immoral Traffic (Prevention) Act, 1956 کا مقصد اسمگلنگ اور تجارتی جنسی استحصال کو روکنا اور اس سے فائدہ اٹھانے، اسے منظم کرنے، سہولت دینے، یا مجبور کرنے والوں کو سزا دینا ہے۔",
              },
            },
            {
              id: "itpa_prohibits",
              type: "points",
              heading: {
                en: "What the Act Commonly Prohibits",
                hi: "अधिनियम सामान्यतः क्या निषिद्ध करता है",
                ur: "یہ قانون عام طور پر کن چیزوں کو ممنوع بناتا ہے",
              },
              points: [
                {
                  bold: { en: "Keeping a brothel", hi: "कोठा चलाना", ur: "قحبہ خانہ چلانا" },
                  text: { en: "Managing or allowing premises to be used as a brothel is punishable.", hi: "परिसर को कोठे के रूप में चलाना या उपयोग की अनुमति देना दंडनीय है।", ur: "کسی جگہ کو قحبہ خانے کے طور پر چلانا یا اس کے استعمال کی اجازت دینا قابل سزا ہے۔" },
                },
                {
                  bold: { en: "Procuring or inducing", hi: "फुसलाना या लाना", ur: "پھانسنا یا لانا" },
                  text: { en: "Procuring, inducing, or taking a person for prostitution is punishable.", hi: "किसी व्यक्ति को वेश्यावृत्ति के लिए लाना, फुसलाना या ले जाना दंडनीय है।", ur: "کسی شخص کو جسم فروشی کے لیے لانا، پھانسنا، یا لے جانا قابل سزا ہے۔" },
                },
                {
                  bold: { en: "Detention and exploitation", hi: "नज़रबंदी और शोषण", ur: "حبس اور استحصال" },
                  text: { en: "Detaining persons in premises where prostitution is carried on, or exploiting people in custody or vulnerability, attracts criminal liability.", hi: "ऐसे परिसर में व्यक्ति को रोके रखना जहां वेश्यावृत्ति कराई जाती हो, या अभिरक्षा/असुरक्षा की स्थिति में शोषण करना आपराधिक दायित्व लाता है।", ur: "ایسی جگہ پر کسی شخص کو روک کر رکھنا جہاں جسم فروشی کرائی جاتی ہو، یا حراست/کمزوری کی حالت میں استحصال کرنا فوجداری ذمہ داری پیدا کرتا ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "brothel_and_prostitution_definitions",
          icon: "home",
          title: {
            en: "Brothel and Prostitution Definitions",
            hi: "कोठा और वेश्यावृत्ति की परिभाषाएं",
            ur: "قحبہ خانہ اور جسم فروشی کی تعریفیں",
          },
          subtitle: {
            en: "Important legal terms under ITPA",
            hi: "आईटीपीए के तहत महत्वपूर्ण कानूनी शब्द",
            ur: "آئی ٹی پی اے کے تحت اہم قانونی اصطلاحات",
          },
          sections: [
            {
              id: "brothel_definition",
              type: "points",
              heading: {
                en: "What Is a Brothel",
                hi: "कोठा क्या है",
                ur: "قحبہ خانہ کیا ہے",
              },
              points: [
                {
                  bold: { en: "Covered spaces", hi: "आवृत स्थान", ur: "شامل مقامات" },
                  text: { en: "A brothel can include a house, room, conveyance, place, or any part of such place used for sexual exploitation or abuse for gain.", hi: "कोठे में घर, कमरा, वाहन, स्थान या उसका कोई भाग शामिल हो सकता है यदि उसका उपयोग लाभ के लिए यौन शोषण या दुरुपयोग हेतु हो।", ur: "قحبہ خانہ گھر، کمرہ، سواری، جگہ، یا ایسی جگہ کے کسی حصے کو بھی شامل کر سکتا ہے اگر اسے منافع کے لیے جنسی استحصال یا زیادتی کے لیے استعمال کیا جائے۔" },
                },
                {
                  bold: { en: "Gain element", hi: "लाभ का तत्व", ur: "منافع کا عنصر" },
                  text: { en: "It covers exploitation for the gain of another person or the mutual gain of two or more prostitutes.", hi: "यह किसी अन्य व्यक्ति के लाभ या दो या अधिक वेश्याओं के परस्पर लाभ के लिए शोषण को कवर करता है।", ur: "یہ کسی دوسرے شخص کے فائدے یا دو یا زیادہ جسم فروشوں کے باہمی فائدے کے لیے استحصال کو شامل کرتا ہے۔" },
                },
              ],
            },
            {
              id: "prostitution_definition",
              type: "points",
              heading: {
                en: "What Is Prostitution",
                hi: "वेश्यावृत्ति क्या है",
                ur: "جسم فروشی کیا ہے",
              },
              points: [
                {
                  bold: { en: "Basic meaning", hi: "मूल अर्थ", ur: "بنیادی مفہوم" },
                  text: { en: "ITPA treats prostitution as sexual exploitation or abuse of a person for commercial purposes.", hi: "आईटीपीए वेश्यावृत्ति को व्यावसायिक उद्देश्य से किसी व्यक्ति के यौन शोषण या दुरुपयोग के रूप में देखता है।", ur: "آئی ٹی پی اے جسم فروشی کو تجارتی مقصد کے لیے کسی شخص کے جنسی استحصال یا زیادتی کے طور پر دیکھتا ہے۔" },
                },
                {
                  bold: { en: "Important distinction", hi: "महत्वपूर्ण अंतर", ur: "اہم فرق" },
                  text: { en: "The law focuses strongly on exploitation, coercion, brothel-keeping, procurement, detention, and profiteering from prostitution-related activity.", hi: "कानून का मुख्य फोकस शोषण, दबाव, कोठा संचालन, फुसलाना, रोके रखना और वेश्यावृत्ति से लाभ कमाने पर है।", ur: "قانون کی مضبوط توجہ استحصال، جبر، قحبہ خانہ چلانے، پھانسنے، روک کر رکھنے، اور جسم فروشی سے فائدہ اٹھانے پر ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "age_categories_and_punishments",
          icon: "child_care",
          title: {
            en: "Age Categories and Punishments",
            hi: "आयु वर्ग और दंड",
            ur: "عمر کی درجہ بندی اور سزائیں",
          },
          subtitle: {
            en: "Why age matters in trafficking and prostitution-related offences",
            hi: "तस्करी और वेश्यावृत्ति संबंधित अपराधों में आयु क्यों महत्वपूर्ण है",
            ur: "اسمگلنگ اور جسم فروشی سے متعلق جرائم میں عمر کیوں اہم ہے",
          },
          sections: [
            {
              id: "age_definitions",
              type: "points",
              heading: {
                en: "Age-Based Protection",
                hi: "आयु-आधारित संरक्षण",
                ur: "عمر کی بنیاد پر تحفظ",
              },
              points: [
                {
                  bold: { en: "Child", hi: "बालक/बालिका", ur: "بچہ" },
                  text: { en: "Under ITPA, a child means a person below 18 years of age.", hi: "आईटीपीए के तहत 'बालक/बालिका' से अभिप्राय 18 वर्ष से कम आयु का व्यक्ति है।", ur: "آئی ٹی پی اے کے تحت 'بچہ' سے مراد 18 سال سے کم عمر شخص ہے۔" },
                },
                {
                  bold: { en: "Major", hi: "वयस्क", ur: "بالغ" },
                  text: { en: "A person who has attained 18 years is treated as a major for these purposes.", hi: "इन उद्देश्यों के लिए 18 वर्ष या उससे अधिक आयु का व्यक्ति वयस्क माना जाता है।", ur: "ان مقاصد کے لیے 18 سال یا اس سے زائد عمر کا شخص بالغ سمجھا جاتا ہے۔" },
                },
                {
                  bold: { en: "Enhanced consequences", hi: "कठोर परिणाम", ur: "سخت نتائج" },
                  text: { en: "Where children are involved, the law imposes stricter punishment because consent and vulnerability are assessed differently.", hi: "जहां बच्चे शामिल हों, वहां कानून अधिक कठोर दंड देता है क्योंकि सहमति और असुरक्षा का मूल्यांकन अलग तरह से किया जाता है।", ur: "جہاں بچے شامل ہوں، وہاں قانون زیادہ سخت سزا دیتا ہے کیونکہ رضامندی اور کمزوری کا جائزہ مختلف انداز میں لیا جاتا ہے۔" },
                },
              ],
            },
            {
              id: "punishment_summary",
              type: "points",
              heading: {
                en: "Punishment Summary Under ITPA",
                hi: "आईटीपीए के तहत दंड का सार",
                ur: "آئی ٹی پی اے کے تحت سزا کا خلاصہ",
              },
              points: [
                {
                  bold: { en: "Basic offences", hi: "मूल अपराध", ur: "بنیادی جرائم" },
                  text: { en: "Procuring, inducing, taking, or causing a person to carry on prostitution can attract imprisonment from 3 to 7 years and fine.", hi: "किसी व्यक्ति को लाना, फुसलाना, ले जाना या वेश्यावृत्ति के लिए मजबूर करना 3 से 7 वर्ष तक के कारावास और जुर्माने को आकर्षित कर सकता है।", ur: "کسی شخص کو لانا، پھانسنا، لے جانا، یا جسم فروشی پر مجبور کرنا 3 سے 7 سال قید اور جرمانے کا باعث بن سکتا ہے۔" },
                },
                {
                  bold: { en: "Against will", hi: "इच्छा के विरुद्ध", ur: "مرضی کے خلاف" },
                  text: { en: "If done against the will of the person, punishment may extend up to 14 years.", hi: "यदि यह व्यक्ति की इच्छा के विरुद्ध हो, तो सजा 14 वर्ष तक बढ़ सकती है।", ur: "اگر یہ شخص کی مرضی کے خلاف ہو تو سزا 14 سال تک بڑھ سکتی ہے۔" },
                },
                {
                  bold: { en: "Child victim", hi: "बाल पीड़ित", ur: "بچے کا متاثر ہونا" },
                  text: { en: "Where a child is subjected to the offence, punishment may extend to life imprisonment.", hi: "जहां पीड़ित बच्चा हो, वहां सजा आजीवन कारावास तक जा सकती है।", ur: "جہاں متاثرہ بچہ ہو، وہاں سزا عمر قید تک جا سکتی ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "brothel_keeping_and_detention",
          icon: "business",
          title: {
            en: "Brothel Keeping, Detention, and Forced Prostitution",
            hi: "कोठा संचालन, नज़रबंदी और जबरन वेश्यावृत्ति",
            ur: "قحبہ خانہ چلانا، حبس، اور جبری جسم فروشی",
          },
          subtitle: {
            en: "Criminal liability for maintaining exploitative premises or forcing a person into prostitution",
            hi: "शोषणकारी परिसर चलाने या किसी व्यक्ति को वेश्यावृत्ति के लिए मजबूर करने पर आपराधिक दायित्व",
            ur: "استحصالی مقامات چلانے یا کسی شخص کو جسم فروشی پر مجبور کرنے پر فوجداری ذمہ داری",
          },
          sections: [
            {
              id: "keeping_brothel",
              type: "points",
              heading: {
                en: "Keeping a Brothel",
                hi: "कोठा चलाना",
                ur: "قحبہ خانہ چلانا",
              },
              points: [
                {
                  bold: { en: "Management or permission", hi: "प्रबंधन या अनुमति", ur: "انتظام یا اجازت" },
                  text: { en: "Keeping, managing, assisting in management, or allowing premises to be used as a brothel is punishable.", hi: "कोठा चलाना, प्रबंधित करना, प्रबंधन में मदद करना या परिसर को कोठे के रूप में उपयोग की अनुमति देना दंडनीय है।", ur: "قحبہ خانہ چلانا، اس کا انتظام کرنا، انتظام میں مدد دینا، یا جگہ کو قحبہ خانے کے طور پر استعمال ہونے دینا قابل سزا ہے۔" },
                },
              ],
            },
            {
              id: "detention_for_prostitution",
              type: "points",
              heading: {
                en: "Detaining a Person",
                hi: "किसी व्यक्ति को रोके रखना",
                ur: "کسی شخص کو روکے رکھنا",
              },
              points: [
                {
                  bold: { en: "Illegal confinement", hi: "अवैध नज़रबंदी", ur: "غیر قانونی حبس" },
                  text: { en: "Detaining a person in premises where prostitution is carried on is a separate punishable wrong under ITPA.", hi: "ऐसे परिसर में किसी व्यक्ति को रोके रखना जहां वेश्यावृत्ति कराई जाती हो, आईटीपीए के तहत अलग से दंडनीय है।", ur: "ایسی جگہ پر کسی شخص کو روک کر رکھنا جہاں جسم فروشی کرائی جاتی ہو، آئی ٹی پی اے کے تحت الگ قابل سزا جرم ہے۔" },
                },
              ],
            },
            {
              id: "forced_prostitution",
              type: "points",
              heading: {
                en: "Forced Prostitution and Custody Abuse",
                hi: "जबरन वेश्यावृत्ति और अभिरक्षा का दुरुपयोग",
                ur: "جبری جسم فروشی اور حراست کا غلط استعمال",
              },
              points: [
                {
                  bold: { en: "Compulsion", hi: "जबरदस्ती", ur: "مجبوری" },
                  text: { en: "Forcing or inducing a person into prostitution is punishable, especially where coercion, fraud, or abuse of vulnerability is involved.", hi: "किसी व्यक्ति को वेश्यावृत्ति के लिए मजबूर करना या उकसाना दंडनीय है, विशेषकर जहां दबाव, धोखा या असुरक्षा का दुरुपयोग हो।", ur: "کسی شخص کو جسم فروشی پر مجبور کرنا یا اکسانا قابل سزا ہے، خاص طور پر جہاں جبر، دھوکہ، یا کمزوری کا غلط استعمال ہو۔" },
                },
                {
                  bold: { en: "Custody", hi: "अभिरक्षा", ur: "حراست" },
                  text: { en: "Abuse of authority over a person in custody or care for the purpose of prostitution is treated seriously under the Act.", hi: "अभिरक्षा या देखरेख में मौजूद व्यक्ति के साथ वेश्यावृत्ति के उद्देश्य से अधिकार का दुरुपयोग अधिनियम के तहत गंभीर माना जाता है।", ur: "حراست یا نگہداشت میں موجود شخص پر جسم فروشی کے مقصد سے اختیار کا غلط استعمال اس قانون کے تحت سنگین سمجھا جاتا ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "rescue_protection_and_institutions",
          icon: "shield",
          title: {
            en: "Rescue, Protection, and Institutional Response",
            hi: "बचाव, संरक्षण और संस्थागत प्रतिक्रिया",
            ur: "بچاؤ، تحفظ، اور ادارہ جاتی ردعمل",
          },
          subtitle: {
            en: "Rescue powers, protection routes, Anti-Trafficking Cells, AHTUs, and SOP-based coordination",
            hi: "बचाव शक्तियां, संरक्षण के रास्ते, एंटी-ट्रैफिकिंग सेल, एएचटीयू और एसओपी आधारित समन्वय",
            ur: "بچاؤ کے اختیارات، تحفظ کے راستے، اینٹی ٹریفکنگ سیل، اے ایچ ٹی یوز، اور SOP پر مبنی ہم آہنگی",
          },
          sections: [
            {
              id: "rescue_and_protection",
              type: "points",
              heading: {
                en: "Rescue and Protection",
                hi: "बचाव और संरक्षण",
                ur: "بچاؤ اور تحفظ",
              },
              points: [
                {
                  bold: { en: "Rescue", hi: "बचाव", ur: "بچاؤ" },
                  text: { en: "The Act gives powers for rescue of persons from brothels or exploitative premises through lawful police and magistrate-led processes.", hi: "अधिनियम के तहत पुलिस और मजिस्ट्रेट की वैधानिक प्रक्रिया द्वारा कोठों या शोषणकारी परिसरों से व्यक्तियों को बचाने की शक्ति दी गई है।", ur: "قانون پولیس اور مجسٹریٹ کی قانونی کارروائی کے ذریعے قحبہ خانوں یا استحصالی مقامات سے افراد کے بچاؤ کے اختیارات دیتا ہے۔" },
                },
                {
                  bold: { en: "Protective custody and care", hi: "संरक्षात्मक अभिरक्षा और देखभाल", ur: "تحفظی حراست اور نگہداشت" },
                  text: { en: "After rescue, the court may consider safe custody, protective homes, inquiry, and rehabilitation rather than immediate return to unsafe surroundings.", hi: "बचाव के बाद अदालत सुरक्षित अभिरक्षा, प्रोटेक्टिव होम, जांच और पुनर्वास पर विचार कर सकती है, बजाय पीड़ित को तुरंत असुरक्षित वातावरण में लौटाने के।", ur: "بچاؤ کے بعد عدالت فوری طور پر غیر محفوظ ماحول میں واپس بھیجنے کے بجائے محفوظ حراست، پروٹیکٹو ہوم، انکوائری، اور بحالی پر غور کر سکتی ہے۔" },
                },
              ],
            },
            {
              id: "institutional_response",
              type: "points",
              heading: {
                en: "Institutional Response",
                hi: "संस्थागत प्रतिक्रिया",
                ur: "ادارہ جاتی ردعمل",
              },
              points: [
                {
                  bold: { en: "Anti-Trafficking Cell", hi: "एंटी-ट्रैफिकिंग सेल", ur: "اینٹی ٹریفکنگ سیل" },
                  text: { en: "The Ministry of Home Affairs has used Anti-Trafficking Cells as nodal law-enforcement bodies to strengthen response, coordination, and guidance to States and Union Territories.", hi: "गृह मंत्रालय एंटी-ट्रैफिकिंग सेल को नोडल कानून-प्रवर्तन निकाय के रूप में उपयोग करता है ताकि राज्यों और संघ राज्य क्षेत्रों को प्रतिक्रिया, समन्वय और मार्गदर्शन मजबूत किया जा सके।", ur: "وزارت داخلہ نے اینٹی ٹریفکنگ سیلز کو قانون نافذ کرنے والے مرکزی اداروں کے طور پر استعمال کیا ہے تاکہ ریاستوں اور مرکز کے زیر انتظام علاقوں کو ردعمل، ہم آہنگی، اور رہنمائی مضبوط کی جا سکے۔" },
                },
                {
                  bold: { en: "AHTUs", hi: "एएचटीयू", ur: "اے ایچ ٹی یوز" },
                  text: { en: "Anti Human Trafficking Units generally support intelligence gathering, rescue coordination, victim-sensitive investigation, and linkage with rehabilitation systems.", hi: "एंटी ह्यूमन ट्रैफिकिंग यूनिट सामान्यतः सूचना-संग्रह, बचाव समन्वय, पीड़ित-संवेदनशील जांच और पुनर्वास तंत्र से जोड़ने में सहायता करती हैं।", ur: "اینٹی ہیومن ٹریفکنگ یونٹس عموماً معلومات جمع کرنے، بچاؤ کی ہم آہنگی، متاثرہ حساس تفتیش، اور بحالی کے نظام سے ربط میں مدد دیتی ہیں۔" },
                },
                {
                  bold: { en: "SOP approach", hi: "एसओपी आधारित दृष्टिकोण", ur: "ایس او پی پر مبنی طریقہ" },
                  text: { en: "State SOPs usually emphasise rescue planning, immediate care, age verification, recording statements safely, non-criminalisation of victims, and coordinated rehabilitation.", hi: "राज्य एसओपी सामान्यतः बचाव योजना, तत्काल देखभाल, आयु सत्यापन, सुरक्षित बयान, पीड़ित का अपराधीकरण न करना और समन्वित पुनर्वास पर जोर देती हैं।", ur: "ریاستی SOPs عموماً بچاؤ کی منصوبہ بندی، فوری دیکھ بھال، عمر کی تصدیق، محفوظ بیان، متاثرہ کو مجرم نہ سمجھنے، اور مربوط بحالی پر زور دیتی ہیں۔" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "indecent_representation",
      icon: "campaign",
      label: {
        en: "Indecent Representation of Women",
        hi: "महिलाओं का अशोभनीय चित्रण",
        ur: "خواتین کی ناشائستہ نمائندگی",
      },
      description: {
        en: "Meaning, prohibited acts, exceptions, complaints, and penalties under the 1986 Act",
        hi: "1986 के अधिनियम के तहत अर्थ, निषिद्ध कृत्य, अपवाद, शिकायत और दंड",
        ur: "1986 کے قانون کے تحت مفہوم، ممنوع اعمال، استثنا، شکایت، اور سزائیں",
      },
      items: [
        {
          id: "irw_overview",
          icon: "description",
          title: {
            en: "Definition and Intent of the Act",
            hi: "परिभाषा और अधिनियम का उद्देश्य",
            ur: "تعریف اور قانون کا مقصد",
          },
          subtitle: {
            en: "Understanding what amounts to indecent representation",
            hi: "यह समझना कि अशोभनीय चित्रण किसे कहा जाएगा",
            ur: "یہ سمجھنا کہ ناشائستہ نمائندگی کسے کہا جاتا ہے",
          },
          sections: [
            {
              id: "definition",
              type: "constitutional_text",
              heading: {
                en: "Meaning",
                hi: "अर्थ",
                ur: "مطلب",
              },
              text: {
                en: "Indecent representation of women refers to depiction of the figure, form, body, or any part of a woman in a manner that is indecent, derogatory, denigrating, or likely to deprave, corrupt, or injure public morality.",
                hi: "महिलाओं का अशोभनीय चित्रण उस रूपांकन को कहते हैं जिसमें महिला की आकृति, रूप, शरीर या उसके किसी भाग को ऐसे तरीके से दिखाया जाए जो अशोभनीय, अपमानजनक, अवमाननापूर्ण हो या जिससे सार्वजनिक नैतिकता भ्रष्ट, दूषित या क्षतिग्रस्त होने की संभावना हो।",
                ur: "خواتین کی ناشائستہ نمائندگی سے مراد عورت کی شکل، ہیئت، جسم، یا اس کے کسی حصے کو اس انداز میں دکھانا ہے جو ناشائستہ، تحقیر آمیز، توہین آمیز ہو یا عوامی اخلاق کو بگاڑنے، خراب کرنے، یا نقصان پہنچانے کا امکان رکھتا ہو۔",
              },
            },
            {
              id: "intent",
              type: "highlight",
              heading: {
                en: "Purpose of the 1986 Act",
                hi: "1986 अधिनियम का उद्देश्य",
                ur: "1986 کے قانون کا مقصد",
              },
              text: {
                en: "The Indecent Representation of Women (Prohibition) Act, 1986 seeks to prohibit indecent representation of women in advertisements, publications, writings, paintings, figures, and similar forms.",
                hi: "महिलाओं का अशोभनीय चित्रण (प्रतिषेध) अधिनियम, 1986 का उद्देश्य विज्ञापनों, प्रकाशनों, लेखन, चित्रों, आकृतियों और समान माध्यमों में महिलाओं के अशोभनीय चित्रण को रोकना है।",
                ur: "Indecent Representation of Women (Prohibition) Act, 1986 کا مقصد اشتہارات، مطبوعات، تحریروں، تصویروں، اشکال، اور اس جیسے ذرائع میں خواتین کی ناشائستہ نمائندگی کو روکنا ہے۔",
              },
            },
          ],
        },
        {
          id: "irw_prohibited_actions",
          icon: "block",
          title: {
            en: "Prohibited Actions and Exceptions",
            hi: "निषिद्ध कृत्य और अपवाद",
            ur: "ممنوع اعمال اور استثنا",
          },
          subtitle: {
            en: "What the law bars and when limited exceptions may apply",
            hi: "कानून क्या रोकता है और किन सीमित स्थितियों में अपवाद हो सकते हैं",
            ur: "قانون کن چیزوں کو روکتا ہے اور کن محدود حالات میں استثنا ہو سکتا ہے",
          },
          sections: [
            {
              id: "prohibited",
              type: "points",
              heading: {
                en: "Commonly Prohibited Conduct",
                hi: "सामान्यतः निषिद्ध आचरण",
                ur: "عام طور پر ممنوع طرزِ عمل",
              },
              points: [
                {
                  bold: { en: "Advertisements", hi: "विज्ञापन", ur: "اشتہارات" },
                  text: { en: "Publishing or displaying advertisements that indecently represent women may attract liability.", hi: "ऐसे विज्ञापनों का प्रकाशन या प्रदर्शन जिनमें महिलाओं का अशोभनीय चित्रण हो, दायित्व उत्पन्न कर सकता है।", ur: "ایسے اشتہارات کی اشاعت یا نمائش جن میں خواتین کی ناشائستہ نمائندگی ہو، قانونی ذمہ داری پیدا کر سکتی ہے۔" },
                },
                {
                  bold: { en: "Publications and media", hi: "प्रकाशन और मीडिया", ur: "مطبوعات اور میڈیا" },
                  text: { en: "Books, pamphlets, writings, drawings, figures, or other material containing prohibited depiction may be covered.", hi: "पुस्तक, पर्चा, लेखन, चित्र, आकृति या अन्य सामग्री जिसमें निषिद्ध चित्रण हो, कानून के दायरे में आ सकती है।", ur: "کتابیں، پمفلٹس، تحریریں، تصاویر، اشکال، یا دیگر مواد جس میں ممنوع نمائندگی ہو، قانون کے دائرے میں آ سکتے ہیں۔" },
                },
              ],
            },
            {
              id: "exceptions",
              type: "points",
              heading: {
                en: "Possible Exceptions",
                hi: "संभावित अपवाद",
                ur: "ممکنہ استثنا",
              },
              points: [
                {
                  bold: { en: "Public good or learning", hi: "लोकहित या अध्ययन", ur: "عوامی مفاد یا علمی مقصد" },
                  text: { en: "Context such as literature, art, science, or learning may matter where the depiction is not intended as indecent exploitation.", hi: "जहां चित्रण अशोभनीय शोषण के लिए न हो, वहां साहित्य, कला, विज्ञान या अध्ययन का संदर्भ महत्व रख सकता है।", ur: "جہاں نمائندگی ناشائستہ استحصال کے لیے نہ ہو، وہاں ادب، فن، سائنس، یا تعلیم کا سیاق اہم ہو سکتا ہے۔" },
                },
                {
                  bold: { en: "Religious or cultural context", hi: "धार्मिक या सांस्कृतिक संदर्भ", ur: "مذہبی یا ثقافتی سیاق" },
                  text: { en: "Certain lawful depictions in genuine religious, cultural, or artistic settings may be treated differently depending on the facts.", hi: "वास्तविक धार्मिक, सांस्कृतिक या कलात्मक संदर्भों में कुछ वैध चित्रण को तथ्यों के आधार पर अलग ढंग से देखा जा सकता है।", ur: "حقیقی مذہبی، ثقافتی، یا فنی تناظر میں بعض جائز نمائندگیوں کو حقائق کے مطابق مختلف انداز میں دیکھا جا سکتا ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "irw_complaints_and_penalties",
          icon: "report",
          title: {
            en: "Complaints, Remedies, and Penalties",
            hi: "शिकायत, उपचार और दंड",
            ur: "شکایت، قانونی راستے، اور سزائیں",
          },
          subtitle: {
            en: "How to respond and what consequences may follow",
            hi: "कैसे प्रतिक्रिया दें और क्या परिणाम हो सकते हैं",
            ur: "کیسے ردعمل دیں اور کیا نتائج ہو سکتے ہیں",
          },
          sections: [
            {
              id: "complaint_routes",
              type: "points",
              heading: {
                en: "Complaint Routes",
                hi: "शिकायत के रास्ते",
                ur: "شکایت کے راستے",
              },
              points: [
                {
                  bold: { en: "Police complaint", hi: "पुलिस शिकायत", ur: "پولیس شکایت" },
                  text: { en: "A complaint can be filed with local police where the offending advertisement, publication, or material is circulated or displayed.", hi: "स्थानीय पुलिस के पास शिकायत की जा सकती है जहां आपत्तिजनक विज्ञापन, प्रकाशन या सामग्री प्रसारित या प्रदर्शित की गई हो।", ur: "مقامی پولیس کے پاس شکایت درج کی جا سکتی ہے جہاں قابل اعتراض اشتہار، مطبوعہ مواد، یا دیگر مواد نشر یا دکھایا گیا ہو۔" },
                },
                {
                  bold: { en: "Regulatory or rights bodies", hi: "नियामक या अधिकार निकाय", ur: "ضابطہ کار یا حقوقی ادارے" },
                  text: { en: "Depending on the medium, complaints may also be taken to sector regulators, women's commissions, or appropriate administrative authorities.", hi: "माध्यम के अनुसार शिकायत नियामक निकायों, महिला आयोगों या उपयुक्त प्रशासनिक प्राधिकारियों के पास भी ले जाई जा सकती है।", ur: "ذریعے کے مطابق شکایت ضابطہ کار اداروں، خواتین کمیشنوں، یا مناسب انتظامی حکام کے پاس بھی لے جائی جا سکتی ہے۔" },
                },
              ],
            },
            {
              id: "penalties",
              type: "points",
              heading: {
                en: "Penalty Structure",
                hi: "दंड संरचना",
                ur: "سزا کا ڈھانچہ",
              },
              points: [
                {
                  bold: { en: "First conviction", hi: "पहली दोषसिद्धि", ur: "پہلی سزا" },
                  text: { en: "The 1986 Act prescribes imprisonment and fine for first conviction.", hi: "1986 का अधिनियम पहली दोषसिद्धि पर कारावास और जुर्माने का प्रावधान करता है।", ur: "1986 کا قانون پہلی سزا پر قید اور جرمانے کا انتظام کرتا ہے۔" },
                },
                {
                  bold: { en: "Subsequent conviction", hi: "बाद की दोषसिद्धि", ur: "بعد کی سزا" },
                  text: { en: "For subsequent conviction, punishment becomes more severe, with higher imprisonment exposure and fine.", hi: "बाद की दोषसिद्धि पर सजा अधिक कठोर हो जाती है, जिसमें अधिक कारावास और अधिक जुर्माना शामिल हो सकता है।", ur: "بعد کی سزا کی صورت میں سزا زیادہ سخت ہو جاتی ہے، جس میں زیادہ قید اور زیادہ جرمانہ شامل ہو سکتا ہے۔" },
                },
              ],
            },
            {
              id: "support_resources",
              type: "highlight",
              heading: {
                en: "Support and Documentation",
                hi: "सहायता और दस्तावेज़ीकरण",
                ur: "مدد اور دستاویز بندی",
              },
              text: {
                en: "Keep copies, screenshots, print material, web links, publication details, and date of circulation. Women may also seek support from helplines, legal aid services, or the National Commission for Women.",
                hi: "प्रतियां, स्क्रीनशॉट, मुद्रित सामग्री, वेब लिंक, प्रकाशन विवरण और प्रसार की तारीख सुरक्षित रखें। महिलाएं हेल्पलाइन, विधिक सहायता सेवाओं या राष्ट्रीय महिला आयोग से भी सहायता ले सकती हैं।",
                ur: "نقول، اسکرین شاٹس، مطبوعہ مواد، ویب لنکس، اشاعتی تفصیلات، اور اشاعت کی تاریخ محفوظ رکھیں۔ خواتین ہیلپ لائن، قانونی امداد، یا نیشنل کمیشن فار ویمن سے بھی مدد لے سکتی ہیں۔",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default OTHER_OFFENCES_DATA;
