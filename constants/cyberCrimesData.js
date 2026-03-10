// ============================================================
// constants/cyberCrimesData.js
// Jagruk Mahila - Cyber Crimes Against Women
//
// Same structure as constitutionData.js / reproductiveRightsData.js
// / sexualCrimesData.js / marriageOffensesData.js
// Section types: constitutional_text | points | highlight | text
// Access: field[currentLanguage] || field.en
// ============================================================

export const CYBER_CRIMES_DATA = {
  id: "cyber_crimes",
  icon: "security",
  label: {
    en: "Cyber Crimes Against Women",
    hi: "महिलाओं के विरुद्ध साइबर अपराध",
    ur: "خواتین کے خلاف سائبر جرائم",
  },
  description: {
    en: "Online abuse, reporting procedures, and digital safety guidance for women facing cyber offences",
    hi: "ऑनलाइन उत्पीड़न, शिकायत प्रक्रिया, और साइबर अपराध का सामना कर रही महिलाओं के लिए डिजिटल सुरक्षा मार्गदर्शन",
    ur: "آن لائن ہراسانی، شکایت کا طریقہ کار، اور سائبر جرائم کا سامنا کرنے والی خواتین کے لیے ڈیجیٹل تحفظ کی رہنمائی",
  },
  helpline: {
    number: "1930",
    portal: "https://cybercrime.gov.in",
  },

  subcategories: [
    {
      id: "types_of_cyber_crimes",
      icon: "gpp_maybe",
      label: {
        en: "What Is Cyber Crime",
        hi: "साइबर अपराध क्या है",
        ur: "سائبر جرم کیا ہے",
      },
      description: {
        en: "Definition of cyber crime and common online offences that disproportionately target women",
        hi: "साइबर अपराध की परिभाषा और वे सामान्य ऑनलाइन अपराध जो महिलाओं को असमान रूप से निशाना बनाते हैं",
        ur: "سائبر جرم کی تعریف اور وہ عام آن لائن جرائم جو غیر متناسب طور پر خواتین کو نشانہ بناتے ہیں",
      },
      items: [
        {
          id: "cyber_crime_overview",
          icon: "info",
          title: {
            en: "Definition and Scope",
            hi: "परिभाषा और दायरा",
            ur: "تعریف اور دائرہ",
          },
          subtitle: {
            en: "Understanding what counts as a cyber offence",
            hi: "यह समझना कि किन कृत्यों को साइबर अपराध माना जाता है",
            ur: "یہ سمجھنا کہ کون سے اعمال سائبر جرم شمار ہوتے ہیں",
          },
          sections: [
            {
              id: "definition",
              type: "constitutional_text",
              heading: {
                en: "Definition",
                hi: "परिभाषा",
                ur: "تعریف",
              },
              text: {
                en: "Cyber crime generally refers to unlawful acts in which a computer, phone, digital account, communication service, or network is used to commit, facilitate, or conceal the offence.",
                hi: "साइबर अपराध से सामान्यतः ऐसे अवैध कृत्य अभिप्रेत हैं जिनमें कंप्यूटर, फोन, डिजिटल अकाउंट, संचार सेवा या नेटवर्क का उपयोग अपराध करने, उसे आसान बनाने या छिपाने के लिए किया जाता है।",
                ur: "سائبر جرم سے عموماً ایسے غیر قانونی اعمال مراد ہیں جن میں کمپیوٹر، فون، ڈیجیٹل اکاؤنٹ، مواصلاتی خدمت یا نیٹ ورک کو جرم کرنے، آسان بنانے یا چھپانے کے لیے استعمال کیا جاتا ہے۔",
              },
            },
            {
              id: "women_focused_harms",
              type: "points",
              heading: {
                en: "Common Harms Faced by Women",
                hi: "महिलाओं द्वारा झेले जाने वाले सामान्य नुकसान",
                ur: "خواتین کو درپیش عام نقصانات",
              },
              points: [
                {
                  bold: { en: "Sexualised abuse", hi: "यौन प्रकृति का उत्पीड़न", ur: "جنسی نوعیت کی ہراسانی" },
                  text: { en: "Threats, obscene messages, and repeated unwanted contact through digital platforms.", hi: "डिजिटल प्लेटफॉर्म के माध्यम से धमकियां, अश्लील संदेश और बार-बार किया गया अनचाहा संपर्क।", ur: "ڈیجیٹل پلیٹ فارمز کے ذریعے دھمکیاں، فحش پیغامات، اور بار بار کیا جانے والا ناپسندیدہ رابطہ۔" },
                },
                {
                  bold: { en: "Image-based abuse", hi: "छवि आधारित दुरुपयोग", ur: "تصویر پر مبنی زیادتی" },
                  text: { en: "Non-consensual recording, sharing, morphing, or circulation of intimate or private images.", hi: "निजी या अंतरंग तस्वीरों/वीडियो की बिना सहमति रिकॉर्डिंग, साझाकरण, मॉर्फिंग या प्रसार।", ur: "نجی یا ذاتی تصاویر/ویڈیوز کی بغیر رضامندی ریکارڈنگ، شیئرنگ، مورفنگ، یا پھیلاؤ۔" },
                },
                {
                  bold: { en: "Extortion and coercion", hi: "उगाही और दबाव", ur: "بھتہ خوری اور جبر" },
                  text: { en: "Threats to publish content unless money, sexual acts, or further content is provided.", hi: "पैसे, यौन कृत्य या और सामग्री न देने पर सामग्री प्रकाशित करने की धमकी।", ur: "رقم، جنسی عمل، یا مزید مواد نہ دینے کی صورت میں مواد شائع کرنے کی دھمکی۔" },
                },
                {
                  bold: { en: "Identity misuse", hi: "पहचान का दुरुपयोग", ur: "شناخت کا غلط استعمال" },
                  text: { en: "Fraudulent use of passwords, accounts, documents, or personal identifiers.", hi: "पासवर्ड, अकाउंट, दस्तावेज़ या व्यक्तिगत पहचान सूचकों का धोखाधड़ी से उपयोग।", ur: "پاس ورڈز، اکاؤنٹس، دستاویزات، یا ذاتی شناختی معلومات کا دھوکے سے استعمال۔" },
                },
              ],
            },
            {
              id: "legal_note",
              type: "highlight",
              heading: {
                en: "Legal Note",
                hi: "कानूनी टिप्पणी",
                ur: "قانونی نوٹ",
              },
              text: {
                en: "Depending on the facts, cyber offences may attract provisions under the Information Technology Act, 2000 and the Bharatiya Nyaya Sanhita, 2023. The same conduct can trigger more than one offence.",
                hi: "तथ्यों के आधार पर साइबर अपराधों पर सूचना प्रौद्योगिकी अधिनियम, 2000 और भारतीय न्याय संहिता, 2023 दोनों के प्रावधान लागू हो सकते हैं। एक ही कृत्य से एक से अधिक अपराध बन सकते हैं।",
                ur: "حقائق کے مطابق سائبر جرائم پر انفارمیشن ٹیکنالوجی ایکٹ، 2000 اور بھارتیہ نیائے سنہتا، 2023 دونوں کی دفعات لاگو ہو سکتی ہیں۔ ایک ہی عمل سے ایک سے زیادہ جرائم بن سکتے ہیں۔",
              },
            },
          ],
        },
        {
          id: "cyber_stalking",
          icon: "visibility",
          title: {
            en: "Cyber Stalking",
            hi: "साइबर स्टॉकिंग",
            ur: "سائبر اسٹاکنگ",
          },
          subtitle: {
            en: "Persistent digital monitoring and unwanted contact",
            hi: "लगातार डिजिटल निगरानी और अनचाहा संपर्क",
            ur: "مسلسل ڈیجیٹل نگرانی اور ناپسندیدہ رابطہ",
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
                en: "Cyber stalking includes repeatedly contacting a woman despite clear disinterest or monitoring her use of the internet, e-mail, or other electronic communication.",
                hi: "साइबर स्टॉकिंग में महिला की स्पष्ट असहमति के बावजूद बार-बार संपर्क करना या इंटरनेट, ई-मेल अथवा अन्य इलेक्ट्रॉनिक संचार के उपयोग की निगरानी करना शामिल है।",
                ur: "سائبر اسٹاکنگ میں عورت کی واضح ناپسندیدگی کے باوجود بار بار رابطہ کرنا یا انٹرنیٹ، ای میل، یا دیگر الیکٹرانک مواصلات کے استعمال کی نگرانی کرنا شامل ہے۔",
              },
            },
            {
              id: "legal_basis",
              type: "points",
              heading: {
                en: "Relevant Law",
                hi: "प्रासंगिक कानून",
                ur: "متعلقہ قانون",
              },
              points: [
                {
                  bold: { en: "BNS Section 78", hi: "बीएनएस धारा 78", ur: "بی این ایس دفعہ 78" },
                  text: { en: "Covers stalking, including monitoring a woman's online communication or repeated attempts to foster interaction.", hi: "स्टॉकिंग को कवर करती है, जिसमें महिला के ऑनलाइन संचार की निगरानी या बार-बार व्यक्तिगत संपर्क की कोशिश शामिल है।", ur: "اسٹاکنگ کو شامل کرتی ہے، جس میں عورت کی آن لائن مواصلات کی نگرانی یا بار بار رابطے کی کوشش شامل ہے۔" },
                },
                {
                  bold: { en: "Punishment", hi: "दंड", ur: "سزا" },
                  text: { en: "First conviction may extend up to 3 years and fine; subsequent conviction may extend up to 5 years and fine.", hi: "पहली दोषसिद्धि पर 3 वर्ष तक का कारावास और जुर्माना; बाद की दोषसिद्धि पर 5 वर्ष तक का कारावास और जुर्माना हो सकता है।", ur: "پہلی سزا پر 3 سال تک قید اور جرمانہ؛ بعد کی سزا پر 5 سال تک قید اور جرمانہ ہو سکتا ہے۔" },
                },
              ],
            },
            {
              id: "response",
              type: "highlight",
              heading: {
                en: "Immediate Response",
                hi: "तत्काल कदम",
                ur: "فوری اقدام",
              },
              text: {
                en: "Preserve screenshots, message links, profile URLs, timestamps, and account details. Block the offender after preserving evidence and report through the cyber portal or police.",
                hi: "स्क्रीनशॉट, संदेश लिंक, प्रोफाइल यूआरएल, समय और अकाउंट विवरण सुरक्षित रखें। साक्ष्य सुरक्षित करने के बाद आरोपी को ब्लॉक करें और साइबर पोर्टल या पुलिस के माध्यम से शिकायत करें।",
                ur: "اسکرین شاٹس، پیغام کے لنکس، پروفائل یو آر ایل، وقت، اور اکاؤنٹ کی تفصیلات محفوظ رکھیں۔ ثبوت محفوظ کرنے کے بعد ملزم کو بلاک کریں اور سائبر پورٹل یا پولیس کے ذریعے شکایت کریں۔",
              },
            },
          ],
        },
        {
          id: "sextortion",
          icon: "warning",
          title: {
            en: "Sextortion",
            hi: "सेक्सटॉर्शन",
            ur: "سیکسٹورشن",
          },
          subtitle: {
            en: "Blackmail using intimate images, videos, or conversations",
            hi: "अंतरंग तस्वीरों, वीडियो या बातचीत के आधार पर ब्लैकमेल",
            ur: "ذاتی تصاویر، ویڈیوز، یا گفتگو کے ذریعے بلیک میلنگ",
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
                en: "Sextortion is a form of coercion in which a person threatens to release intimate content or allegations unless the victim pays money, shares more content, or submits to sexual demands.",
                hi: "सेक्सटॉर्शन ऐसा दबावपूर्ण अपराध है जिसमें आरोपी अंतरंग सामग्री या आरोप सार्वजनिक करने की धमकी देकर पैसे, और सामग्री या यौन मांगें मनवाने की कोशिश करता है।",
                ur: "سیکسٹورشن جبر کی ایک شکل ہے جس میں ملزم ذاتی مواد یا الزامات کو عام کرنے کی دھمکی دے کر رقم، مزید مواد، یا جنسی مطالبات منوانے کی کوشش کرتا ہے۔",
              },
            },
            {
              id: "legal_framework",
              type: "points",
              heading: {
                en: "Possible Legal Provisions",
                hi: "संभावित कानूनी प्रावधान",
                ur: "ممکنہ قانونی دفعات",
              },
              points: [
                {
                  bold: { en: "IT Act", hi: "आईटी अधिनियम", ur: "آئی ٹی ایکٹ" },
                  text: { en: "Sections such as 67, 67A, 66E, or 66C may apply depending on obscene publication, sexually explicit material, privacy violation, or account misuse.", hi: "अश्लील प्रकाशन, यौन स्पष्ट सामग्री, निजता उल्लंघन या अकाउंट दुरुपयोग के आधार पर धारा 67, 67A, 66E या 66C लागू हो सकती हैं।", ur: "فحش اشاعت، جنسی طور پر واضح مواد، رازداری کی خلاف ورزی، یا اکاؤنٹ کے غلط استعمال کی بنیاد پر دفعات 67، 67A، 66E، یا 66C لاگو ہو سکتی ہیں۔" },
                },
                {
                  bold: { en: "BNS offences", hi: "बीएनएस अपराध", ur: "بی این ایس جرائم" },
                  text: { en: "Depending on the facts, extortion, criminal intimidation, sexual harassment, or insulting the modesty of a woman may also be invoked.", hi: "तथ्यों के अनुसार उगाही, आपराधिक धमकी, यौन उत्पीड़न या महिला की मर्यादा का अपमान जैसे अपराध भी लगाए जा सकते हैं।", ur: "حقائق کے مطابق بھتہ خوری، مجرمانہ دھمکی، جنسی ہراسانی، یا عورت کی عصمت کی توہین جیسے جرائم بھی شامل کیے جا سکتے ہیں۔" },
                },
              ],
            },
            {
              id: "reporting_steps",
              type: "points",
              heading: {
                en: "What to Do",
                hi: "क्या करें",
                ur: "کیا کریں",
              },
              points: [
                {
                  bold: { en: "Do not negotiate", hi: "सौदेबाजी न करें", ur: "سودے بازی نہ کریں" },
                  text: { en: "Avoid sending money or more intimate content to the offender.", hi: "आरोपी को पैसे या और अंतरंग सामग्री न भेजें।", ur: "ملزم کو رقم یا مزید ذاتی مواد نہ بھیجیں۔" },
                },
                {
                  bold: { en: "Preserve evidence", hi: "साक्ष्य सुरक्षित रखें", ur: "ثبوت محفوظ رکھیں" },
                  text: { en: "Keep screenshots, usernames, links, payment requests, and call records.", hi: "स्क्रीनशॉट, यूज़रनेम, लिंक, भुगतान मांग और कॉल रिकॉर्ड सुरक्षित रखें।", ur: "اسکرین شاٹس، یوزر نیم، لنکس، ادائیگی کے مطالبات، اور کال ریکارڈ محفوظ رکھیں۔" },
                },
                {
                  bold: { en: "Report urgently", hi: "तुरंत शिकायत करें", ur: "فوراً شکایت کریں" },
                  text: { en: "File a complaint at cybercrime.gov.in or the nearest police station and request urgent takedown support where possible.", hi: "cybercrime.gov.in या निकटतम पुलिस स्टेशन में शिकायत दर्ज करें और संभव हो तो तुरंत सामग्री हटाने की मांग करें।", ur: "cybercrime.gov.in یا قریبی پولیس اسٹیشن میں شکایت درج کریں اور جہاں ممکن ہو فوری طور پر مواد ہٹانے کی درخواست کریں۔" },
                },
              ],
            },
          ],
        },
        {
          id: "cyber_bullying",
          icon: "forum",
          title: {
            en: "Cyber Bullying",
            hi: "साइबर बुलिंग",
            ur: "سائبر بُلنگ",
          },
          subtitle: {
            en: "Abusive, humiliating, or threatening conduct through digital platforms",
            hi: "डिजिटल प्लेटफॉर्म के माध्यम से अपमानजनक, धमकीपूर्ण या उत्पीड़क व्यवहार",
            ur: "ڈیجیٹل پلیٹ فارمز کے ذریعے توہین آمیز، دھمکی آمیز، یا ہراسان کن رویہ",
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
                en: "Cyber bullying includes repeated online humiliation, abusive comments, threats, fake profiles, circulation of morphed content, and other conduct intended to intimidate or isolate the victim.",
                hi: "साइबर बुलिंग में बार-बार ऑनलाइन अपमान, गाली-गलौज, धमकी, फर्जी प्रोफाइल, मॉर्फ सामग्री का प्रसार और पीड़िता को डराने या अलग-थलग करने वाला अन्य व्यवहार शामिल है।",
                ur: "سائبر بُلنگ میں بار بار آن لائن تذلیل، گالم گلوچ، دھمکیاں، جعلی پروفائلز، مورف شدہ مواد کی گردش، اور متاثرہ کو ڈرانے یا الگ تھلگ کرنے والا دیگر رویہ شامل ہے۔",
              },
            },
            {
              id: "possible_laws",
              type: "points",
              heading: {
                en: "Possible Legal Routes",
                hi: "संभावित कानूनी रास्ते",
                ur: "ممکنہ قانونی راستے",
              },
              points: [
                {
                  bold: { en: "BNS provisions", hi: "बीएनएस प्रावधान", ur: "بی این ایس دفعات" },
                  text: { en: "Threatening messages, sexual harassment, stalking, defamation-related conduct, or insulting a woman's modesty may attract different BNS provisions depending on the facts.", hi: "धमकीपूर्ण संदेश, यौन उत्पीड़न, स्टॉकिंग, मानहानि जैसे आचरण या महिला की मर्यादा का अपमान, तथ्यों के आधार पर अलग-अलग बीएनएस प्रावधानों को आकर्षित कर सकते हैं।", ur: "دھمکی آمیز پیغامات، جنسی ہراسانی، اسٹاکنگ، ہتک عزت نما رویہ، یا عورت کی عصمت کی توہین، حقائق کے مطابق مختلف بی این ایس دفعات کے تحت آ سکتے ہیں۔" },
                },
                {
                  bold: { en: "IT Act Section 66E", hi: "आईटी अधिनियम धारा 66E", ur: "آئی ٹی ایکٹ دفعہ 66E" },
                  text: { en: "May apply where private images are captured, transmitted, or published without consent.", hi: "जहां निजी तस्वीरें बिना सहमति कैप्चर, प्रसारित या प्रकाशित की गई हों, वहां यह लागू हो सकती है।", ur: "جہاں نجی تصاویر بغیر رضامندی کے بنائی، منتقل، یا شائع کی گئی ہوں، وہاں یہ لاگو ہو سکتی ہے۔" },
                },
              ],
            },
            {
              id: "safety",
              type: "highlight",
              heading: {
                en: "Practical Approach",
                hi: "व्यावहारिक तरीका",
                ur: "عملی طریقہ",
              },
              text: {
                en: "Do not delete the abuse. Preserve evidence, report the profile or post on the platform, block the account, and escalate to the cyber portal or police if the conduct is repeated, sexualised, or threatening.",
                hi: "उत्पीड़क सामग्री को तुरंत न मिटाएं। साक्ष्य सुरक्षित रखें, प्लेटफॉर्म पर प्रोफाइल या पोस्ट की शिकायत करें, अकाउंट ब्लॉक करें और यदि व्यवहार बार-बार, यौन प्रकृति का या धमकीपूर्ण हो तो साइबर पोर्टल या पुलिस तक जाएं।",
                ur: "ہراساں کرنے والے مواد کو فوراً حذف نہ کریں۔ ثبوت محفوظ رکھیں، پلیٹ فارم پر پروفائل یا پوسٹ کی رپورٹ کریں، اکاؤنٹ بلاک کریں، اور اگر رویہ بار بار، جنسی نوعیت کا، یا دھمکی آمیز ہو تو سائبر پورٹل یا پولیس سے رجوع کریں۔",
              },
            },
          ],
        },
        {
          id: "cyber_pornography",
          icon: "block",
          title: {
            en: "Pornography and Non-Consensual Explicit Content",
            hi: "पोर्नोग्राफी और बिना सहमति अश्लील सामग्री",
            ur: "فحش مواد اور بغیر رضامندی واضح جنسی مواد",
          },
          subtitle: {
            en: "Sharing or creating explicit content to exploit, shame, or sexualise women",
            hi: "महिलाओं का शोषण, अपमान या यौन वस्तुकरण करने हेतु अश्लील सामग्री बनाना या फैलाना",
            ur: "خواتین کے استحصال، تذلیل، یا جنسی نوعیت سے پیش کرنے کے لیے واضح مواد بنانا یا پھیلانا",
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
                en: "This includes creating, publishing, transmitting, or circulating obscene or sexually explicit digital material involving a woman without consent, including morphed or deepfake content.",
                hi: "इसमें किसी महिला से संबंधित अश्लील या यौन स्पष्ट डिजिटल सामग्री को उसकी सहमति के बिना बनाना, प्रकाशित करना, प्रसारित करना या फैलाना शामिल है, चाहे वह मॉर्फ या डीपफेक सामग्री ही क्यों न हो।",
                ur: "اس میں کسی عورت سے متعلق فحش یا جنسی طور پر واضح ڈیجیٹل مواد کو اس کی رضامندی کے بغیر بنانا، شائع کرنا، منتقل کرنا، یا پھیلانا شامل ہے، چاہے وہ مورف یا ڈیپ فیک مواد ہی کیوں نہ ہو۔",
              },
            },
            {
              id: "legal_basis",
              type: "points",
              heading: {
                en: "Relevant Law",
                hi: "प्रासंगिक कानून",
                ur: "متعلقہ قانون",
              },
              points: [
                {
                  bold: { en: "IT Act Section 67", hi: "आईटी अधिनियम धारा 67", ur: "آئی ٹی ایکٹ دفعہ 67" },
                  text: { en: "Covers publishing or transmitting obscene material in electronic form.", hi: "इलेक्ट्रॉनिक रूप में अश्लील सामग्री के प्रकाशन या प्रसारण को कवर करती है।", ur: "الیکٹرانک شکل میں فحش مواد کی اشاعت یا ترسیل کو شامل کرتی ہے۔" },
                },
                {
                  bold: { en: "IT Act Section 67A", hi: "आईटी अधिनियम धारा 67A", ur: "آئی ٹی ایکٹ دفعہ 67A" },
                  text: { en: "Covers material containing sexually explicit acts or conduct in electronic form.", hi: "इलेक्ट्रॉनिक रूप में यौन स्पष्ट कृत्य या आचरण वाली सामग्री को कवर करती है।", ur: "الیکٹرانک شکل میں جنسی طور پر واضح عمل یا رویے پر مشتمل مواد کو شامل کرتی ہے۔" },
                },
                {
                  bold: { en: "Additional offences", hi: "अन्य अपराध", ur: "اضافی جرائم" },
                  text: { en: "Depending on facts, privacy violations, voyeurism, cheating by impersonation, sexual harassment, or extortion provisions may also apply.", hi: "तथ्यों के अनुसार निजता उल्लंघन, वोयूरिज्म, प्रतिरूपण द्वारा धोखा, यौन उत्पीड़न या उगाही के प्रावधान भी लागू हो सकते हैं।", ur: "حقائق کے مطابق رازداری کی خلاف ورزی، ووئیرزم، جعلسازی کے ذریعے دھوکا، جنسی ہراسانی، یا بھتہ خوری کی دفعات بھی لاگو ہو سکتی ہیں۔" },
                },
              ],
            },
            {
              id: "reporting",
              type: "highlight",
              heading: {
                en: "Reporting Priority",
                hi: "शिकायत की प्राथमिकता",
                ur: "شکایت کی ترجیح",
              },
              text: {
                en: "Capture the URL, username, platform, and screenshots first. Then report the content to the platform, submit a cyber complaint, and seek urgent takedown and police action.",
                hi: "पहले यूआरएल, यूज़रनेम, प्लेटफॉर्म और स्क्रीनशॉट सुरक्षित करें। उसके बाद प्लेटफॉर्म पर रिपोर्ट करें, साइबर शिकायत दर्ज करें और तत्काल सामग्री हटाने तथा पुलिस कार्रवाई की मांग करें।",
                ur: "سب سے پہلے یو آر ایل، یوزر نیم، پلیٹ فارم، اور اسکرین شاٹس محفوظ کریں۔ پھر پلیٹ فارم پر رپورٹ کریں، سائبر شکایت درج کریں، اور فوری مواد ہٹانے اور پولیس کارروائی کا مطالبہ کریں۔",
              },
            },
          ],
        },
        {
          id: "voyeurism",
          icon: "videocam_off",
          title: {
            en: "Voyeurism",
            hi: "वोयूरिज्म",
            ur: "ووئیرزم",
          },
          subtitle: {
            en: "Recording or sharing private acts without permission",
            hi: "निजी कृत्यों को बिना अनुमति रिकॉर्ड या साझा करना",
            ur: "نجی اعمال کو بغیر اجازت ریکارڈ یا شیئر کرنا",
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
                en: "Voyeurism involves watching, capturing, or sharing images of a woman engaged in a private act in circumstances where she reasonably expects privacy.",
                hi: "वोयूरिज्म में किसी महिला की निजी गतिविधि को ऐसे हालात में देखना, रिकॉर्ड करना या साझा करना शामिल है जहां उसे उचित रूप से गोपनीयता की अपेक्षा हो।",
                ur: "ووئیرزم میں ایسی صورت حال میں عورت کی نجی سرگرمی کو دیکھنا، ریکارڈ کرنا، یا شیئر کرنا شامل ہے جہاں اسے معقول طور پر رازداری کی توقع ہو۔",
              },
            },
            {
              id: "law",
              type: "points",
              heading: {
                en: "Relevant Law",
                hi: "प्रासंगिक कानून",
                ur: "متعلقہ قانون",
              },
              points: [
                {
                  bold: { en: "BNS Section 77", hi: "बीएनएस धारा 77", ur: "بی این ایس دفعہ 77" },
                  text: { en: "Covers viewing, capturing, or disseminating images of a woman in a private act without consent.", hi: "निजी कृत्य में लगी महिला की तस्वीर/वीडियो को बिना सहमति देखना, कैप्चर करना या प्रसारित करना कवर करती है।", ur: "نجی عمل میں مصروف عورت کی تصویر/ویڈیو کو بغیر رضامندی دیکھنا، محفوظ کرنا، یا پھیلانا شامل ہے۔" },
                },
                {
                  bold: { en: "Punishment", hi: "दंड", ur: "سزا" },
                  text: { en: "First conviction is punishable with imprisonment of 1 to 3 years and fine; subsequent conviction with 3 to 7 years and fine.", hi: "पहली दोषसिद्धि पर 1 से 3 वर्ष तक का कारावास और जुर्माना; बाद की दोषसिद्धि पर 3 से 7 वर्ष तक का कारावास और जुर्माना है।", ur: "پہلی سزا پر 1 سے 3 سال تک قید اور جرمانہ؛ بعد کی سزا پر 3 سے 7 سال تک قید اور جرمانہ ہے۔" },
                },
              ],
            },
            {
              id: "response",
              type: "highlight",
              heading: {
                en: "Action Point",
                hi: "कार्रवाई बिंदु",
                ur: "اقدامی نکتہ",
              },
              text: {
                en: "Preserve the device details, links, screenshots, and any witness information. Request content removal and file a complaint without delay.",
                hi: "डिवाइस विवरण, लिंक, स्क्रीनशॉट और उपलब्ध गवाह जानकारी सुरक्षित रखें। सामग्री हटाने का अनुरोध करें और बिना देरी शिकायत दर्ज करें।",
                ur: "ڈیوائس کی تفصیلات، لنکس، اسکرین شاٹس، اور دستیاب گواہی کی معلومات محفوظ رکھیں۔ مواد ہٹانے کی درخواست کریں اور بلا تاخیر شکایت درج کریں۔",
              },
            },
          ],
        },
        {
          id: "morphing",
          icon: "photo_filter",
          title: {
            en: "Morphing and Deepfake Abuse",
            hi: "मॉर्फिंग और डीपफेक दुरुपयोग",
            ur: "مورفنگ اور ڈیپ فیک زیادتی",
          },
          subtitle: {
            en: "Manipulating images or videos to create false intimate or harmful content",
            hi: "तस्वीरों या वीडियो में छेड़छाड़ कर झूठी अंतरंग या हानिकारक सामग्री बनाना",
            ur: "تصاویر یا ویڈیوز میں رد و بدل کر جھوٹا ذاتی یا نقصان دہ مواد بنانا",
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
                en: "Morphing includes digitally altering a woman's image or video to place her face, body, or identity into false, obscene, compromising, or humiliating content. AI-generated deepfakes are a more advanced form of the same harm.",
                hi: "मॉर्फिंग में किसी महिला की तस्वीर या वीडियो को डिजिटल रूप से बदलकर उसका चेहरा, शरीर या पहचान झूठी, अश्लील, आपत्तिजनक या अपमानजनक सामग्री में डालना शामिल है। एआई आधारित डीपफेक इसी नुकसान का उन्नत रूप है।",
                ur: "مورفنگ میں کسی عورت کی تصویر یا ویڈیو کو ڈیجیٹل طور پر بدل کر اس کا چہرہ، جسم، یا شناخت جھوٹے، فحش، شرمناک، یا تذلیل آمیز مواد میں شامل کرنا شامل ہے۔ اے آئی سے تیار کردہ ڈیپ فیکس اسی نقصان کی زیادہ جدید شکل ہیں۔",
              },
            },
            {
              id: "possible_laws",
              type: "points",
              heading: {
                en: "Possible Legal Provisions",
                hi: "संभावित कानूनी प्रावधान",
                ur: "ممکنہ قانونی دفعات",
              },
              points: [
                {
                  bold: { en: "IT Act Sections 66E, 67, 67A", hi: "आईटी अधिनियम धारा 66E, 67, 67A", ur: "آئی ٹی ایکٹ دفعات 66E، 67، 67A" },
                  text: { en: "These may apply where the morphing violates privacy or creates obscene or sexually explicit content in electronic form.", hi: "जहां मॉर्फिंग निजता का उल्लंघन करती हो या इलेक्ट्रॉनिक रूप में अश्लील/यौन स्पष्ट सामग्री बनाती हो, वहां ये धाराएं लागू हो सकती हैं।", ur: "جہاں مورفنگ رازداری کی خلاف ورزی کرے یا الیکٹرانک شکل میں فحش یا جنسی طور پر واضح مواد بنائے، وہاں یہ دفعات لاگو ہو سکتی ہیں۔" },
                },
                {
                  bold: { en: "BNS offences", hi: "बीएनएस अपराध", ur: "بی این ایس جرائم" },
                  text: { en: "Harassment, intimidation, insulting modesty, cheating by impersonation, or extortion-related provisions may also be relevant depending on the use of the morphed content.", hi: "मॉर्फ सामग्री के उपयोग के आधार पर उत्पीड़न, धमकी, मर्यादा का अपमान, प्रतिरूपण द्वारा धोखा या उगाही संबंधी प्रावधान भी प्रासंगिक हो सकते हैं।", ur: "مورف شدہ مواد کے استعمال کے مطابق ہراسانی، دھمکی، عصمت کی توہین، جعلسازی کے ذریعے دھوکا، یا بھتہ خوری سے متعلق دفعات بھی متعلقہ ہو سکتی ہیں۔" },
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
                en: "Keep the original image, take screenshots of the morphed content, record URLs and account names, report the platform, and file a cyber complaint for removal and investigation.",
                hi: "मूल तस्वीर सुरक्षित रखें, मॉर्फ सामग्री के स्क्रीनशॉट लें, यूआरएल और अकाउंट नाम नोट करें, प्लेटफॉर्म पर रिपोर्ट करें और हटाने व जांच के लिए साइबर शिकायत दर्ज करें।",
                ur: "اصل تصویر محفوظ رکھیں، مورف شدہ مواد کے اسکرین شاٹس لیں، یو آر ایل اور اکاؤنٹ نام درج کریں، پلیٹ فارم پر رپورٹ کریں، اور ہٹانے اور تفتیش کے لیے سائبر شکایت درج کریں۔",
              },
            },
          ],
        },
        {
          id: "obscene_messages",
          icon: "message",
          title: {
            en: "Obscene or Offensive Messages",
            hi: "अश्लील या अपमानजनक संदेश",
            ur: "فحش یا توہین آمیز پیغامات",
          },
          subtitle: {
            en: "Harassment through texts, chats, emails, or platform messaging",
            hi: "टेक्स्ट, चैट, ईमेल या प्लेटफॉर्म संदेशों के माध्यम से उत्पीड़न",
            ur: "ٹیکسٹ، چیٹ، ای میل، یا پلیٹ فارم پیغامات کے ذریعے ہراسانی",
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
                en: "This includes sexually explicit, obscene, abusive, threatening, humiliating, or persistent unwanted messages sent through WhatsApp, e-mail, social media, or other communication platforms.",
                hi: "इसमें व्हाट्सऐप, ई-मेल, सोशल मीडिया या अन्य संचार माध्यमों से भेजे गए यौन स्पष्ट, अश्लील, अपमानजनक, धमकीपूर्ण या लगातार अनचाहे संदेश शामिल हैं।",
                ur: "اس میں واٹس ایپ، ای میل، سوشل میڈیا، یا دیگر مواصلاتی پلیٹ فارمز کے ذریعے بھیجے گئے جنسی طور پر واضح، فحش، توہین آمیز، دھمکی آمیز، یا مسلسل ناپسندیدہ پیغامات شامل ہیں۔",
              },
            },
            {
              id: "law",
              type: "points",
              heading: {
                en: "Relevant Law",
                hi: "प्रासंगिक कानून",
                ur: "متعلقہ قانون",
              },
              points: [
                {
                  bold: { en: "IT Act Sections 67 and 67A", hi: "आईटी अधिनियम धारा 67 और 67A", ur: "آئی ٹی ایکٹ دفعات 67 اور 67A" },
                  text: { en: "These may apply where obscene or sexually explicit electronic material is sent or transmitted.", hi: "जहां अश्लील या यौन स्पष्ट इलेक्ट्रॉनिक सामग्री भेजी या प्रसारित की गई हो, वहां ये लागू हो सकती हैं।", ur: "جہاں فحش یا جنسی طور پر واضح الیکٹرانک مواد بھیجا یا منتقل کیا گیا ہو، وہاں یہ لاگو ہو سکتی ہیں۔" },
                },
                {
                  bold: { en: "BNS Sections 75 and 79", hi: "बीएनएस धारा 75 और 79", ur: "بی این ایس دفعات 75 اور 79" },
                  text: { en: "Sexual harassment or words, gestures, or acts intended to insult the modesty of a woman may also be invoked depending on the content.", hi: "संदेश की प्रकृति के अनुसार यौन उत्पीड़न या महिला की मर्यादा का अपमान करने वाले शब्द, संकेत या कृत्य के प्रावधान भी लागू हो सकते हैं।", ur: "مواد کی نوعیت کے مطابق جنسی ہراسانی یا عورت کی عصمت کی توہین کرنے والے الفاظ، اشارے، یا اعمال کی دفعات بھی لاگو ہو سکتی ہیں۔" },
                },
              ],
            },
            {
              id: "preservation",
              type: "highlight",
              heading: {
                en: "Preserve First",
                hi: "पहले सुरक्षित करें",
                ur: "پہلے محفوظ کریں",
              },
              text: {
                en: "Do not delete the message thread before taking screenshots and saving links, headers, or sender details. Evidence preservation is often critical for tracing the sender.",
                hi: "स्क्रीनशॉट लेने और लिंक, हेडर या प्रेषक विवरण सुरक्षित करने से पहले संदेश थ्रेड न मिटाएं। प्रेषक तक पहुंचने के लिए साक्ष्य संरक्षण अक्सर बहुत महत्वपूर्ण होता है।",
                ur: "اسکرین شاٹس لینے اور لنکس، ہیڈرز، یا بھیجنے والے کی تفصیلات محفوظ کرنے سے پہلے پیغام کی تھریڈ حذف نہ کریں۔ بھیجنے والے تک پہنچنے کے لیے ثبوت کا محفوظ رہنا اکثر بہت اہم ہوتا ہے۔",
              },
            },
          ],
        },
        {
          id: "identity_theft",
          icon: "person_off",
          title: {
            en: "Identity Theft",
            hi: "पहचान की चोरी",
            ur: "شناخت کی چوری",
          },
          subtitle: {
            en: "Unauthorised use of passwords, accounts, documents, or personal identifiers",
            hi: "पासवर्ड, अकाउंट, दस्तावेज़ या व्यक्तिगत पहचान का अनधिकृत उपयोग",
            ur: "پاس ورڈز، اکاؤنٹس، دستاویزات، یا ذاتی شناخت کا غیر مجاز استعمال",
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
                en: "Identity theft is the dishonest or fraudulent use of another person's password, electronic signature, account, or other identifying data to access services, impersonate the person, or cause loss.",
                hi: "पहचान की चोरी वह स्थिति है जब किसी अन्य व्यक्ति के पासवर्ड, इलेक्ट्रॉनिक हस्ताक्षर, अकाउंट या अन्य पहचान संबंधी डेटा का बेईमानी या धोखाधड़ी से उपयोग कर सेवाओं तक पहुंचा जाए, उसका प्रतिरूपण किया जाए या उसे नुकसान पहुंचाया जाए।",
                ur: "شناخت کی چوری اس وقت ہوتی ہے جب کسی دوسرے شخص کے پاس ورڈ، الیکٹرانک دستخط، اکاؤنٹ، یا دیگر شناختی معلومات کو بددیانتی یا دھوکے سے استعمال کر کے خدمات تک رسائی لی جائے، اس کی نقالی کی جائے، یا نقصان پہنچایا جائے۔",
              },
            },
            {
              id: "law",
              type: "points",
              heading: {
                en: "Relevant Law",
                hi: "प्रासंगिक कानून",
                ur: "متعلقہ قانون",
              },
              points: [
                {
                  bold: { en: "IT Act Section 66C", hi: "आईटी अधिनियम धारा 66C", ur: "آئی ٹی ایکٹ دفعہ 66C" },
                  text: { en: "Punishes dishonest or fraudulent use of another person's electronic signature, password, or other unique identification feature.", hi: "किसी अन्य व्यक्ति के इलेक्ट्रॉनिक हस्ताक्षर, पासवर्ड या अन्य विशिष्ट पहचान विशेषता के बेईमानी या धोखाधड़ी से उपयोग को दंडित करती है।", ur: "کسی دوسرے شخص کے الیکٹرانک دستخط، پاس ورڈ، یا دیگر منفرد شناختی خصوصیت کے بددیانتی یا دھوکے سے استعمال کو سزا دیتی ہے۔" },
                },
                {
                  bold: { en: "Punishment", hi: "दंड", ur: "سزا" },
                  text: { en: "Imprisonment up to 3 years and fine up to Rs. 1 lakh.", hi: "3 वर्ष तक का कारावास और 1 लाख रुपये तक का जुर्माना।", ur: "3 سال تک قید اور 1 لاکھ روپے تک جرمانہ۔" },
                },
              ],
            },
            {
              id: "response",
              type: "points",
              heading: {
                en: "What to Do Immediately",
                hi: "तुरंत क्या करें",
                ur: "فوراً کیا کریں",
              },
              points: [
                {
                  bold: { en: "Secure accounts", hi: "अकाउंट सुरक्षित करें", ur: "اکاؤنٹس محفوظ کریں" },
                  text: { en: "Change passwords, log out of all sessions, and enable two-factor authentication.", hi: "पासवर्ड बदलें, सभी सेशन से लॉगआउट करें और दो-स्तरीय प्रमाणीकरण चालू करें।", ur: "پاس ورڈ تبدیل کریں، تمام سیشنز سے لاگ آؤٹ کریں، اور دو مرحلہ جاتی تصدیق فعال کریں۔" },
                },
                {
                  bold: { en: "Inform institutions", hi: "संस्थानों को सूचित करें", ur: "اداروں کو اطلاع دیں" },
                  text: { en: "Alert banks, UIDAI, service providers, or platforms if documents or accounts are misused.", hi: "यदि दस्तावेज़ या अकाउंट का दुरुपयोग हुआ हो तो बैंक, यूआईडीएआई, सेवा प्रदाताओं या प्लेटफॉर्म को सूचित करें।", ur: "اگر دستاویزات یا اکاؤنٹس کا غلط استعمال ہوا ہو تو بینک، یو آئی ڈی اے آئی، سروس فراہم کرنے والوں، یا پلیٹ فارمز کو اطلاع دیں۔" },
                },
                {
                  bold: { en: "File complaint", hi: "शिकायत दर्ज करें", ur: "شکایت درج کریں" },
                  text: { en: "Record the fraudulent transactions or account activity and report the matter to the cyber portal and police.", hi: "धोखाधड़ी वाले लेन-देन या अकाउंट गतिविधि का रिकॉर्ड रखें और साइबर पोर्टल तथा पुलिस में शिकायत करें।", ur: "دھوکے پر مبنی لین دین یا اکاؤنٹ سرگرمی کا ریکارڈ رکھیں اور معاملہ سائبر پورٹل اور پولیس کو رپورٹ کریں۔" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "procedure_for_remedy",
      icon: "report",
      label: {
        en: "Procedure for Remedy",
        hi: "उपचार की प्रक्रिया",
        ur: "ازالے کا طریقہ کار",
      },
      description: {
        en: "How to report cyber crimes, preserve evidence, and approach the right authorities",
        hi: "साइबर अपराध की शिकायत कैसे करें, साक्ष्य कैसे सुरक्षित रखें और सही प्राधिकरण तक कैसे पहुंचें",
        ur: "سائبر جرائم کی شکایت کیسے کریں، ثبوت کیسے محفوظ رکھیں، اور صحیح حکام سے کیسے رجوع کریں",
      },
      items: [
        {
          id: "reporting_cyber_crimes",
          icon: "emergency",
          title: {
            en: "Reporting Cyber Crimes",
            hi: "साइबर अपराध की शिकायत",
            ur: "سائبر جرائم کی شکایت",
          },
          subtitle: {
            en: "Where to complain and what to keep ready",
            hi: "कहां शिकायत करें और क्या तैयार रखें",
            ur: "کہاں شکایت کریں اور کیا تیار رکھیں",
          },
          sections: [
            {
              id: "where_to_report",
              type: "constitutional_text",
              heading: {
                en: "Where to Report",
                hi: "कहां शिकायत करें",
                ur: "کہاں شکایت کریں",
              },
              text: {
                en: "A victim can approach the nearest police station or cyber crime cell, call helpline 1930 for cyber fraud support, and submit an online complaint through the National Cyber Crime Reporting Portal at cybercrime.gov.in.",
                hi: "पीड़िता निकटतम पुलिस स्टेशन या साइबर क्राइम सेल जा सकती है, साइबर धोखाधड़ी सहायता के लिए 1930 हेल्पलाइन पर कॉल कर सकती है, और cybercrime.gov.in पर राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल के माध्यम से ऑनलाइन शिकायत दर्ज कर सकती है।",
                ur: "متاثرہ خاتون قریبی پولیس اسٹیشن یا سائبر کرائم سیل سے رجوع کر سکتی ہے، سائبر فراڈ مدد کے لیے 1930 ہیلپ لائن پر کال کر سکتی ہے، اور cybercrime.gov.in پر نیشنل سائبر کرائم رپورٹنگ پورٹل کے ذریعے آن لائن شکایت درج کر سکتی ہے۔",
              },
            },
            {
              id: "general_evidence",
              type: "points",
              heading: {
                en: "Evidence to Preserve",
                hi: "सुरक्षित रखने योग्य साक्ष्य",
                ur: "محفوظ رکھنے والے ثبوت",
              },
              points: [
                {
                  bold: { en: "Screenshots and URLs", hi: "स्क्रीनशॉट और यूआरएल", ur: "اسکرین شاٹس اور یو آر ایل" },
                  text: { en: "Capture the offending post, profile, message, or page with date and time where possible.", hi: "जहां संभव हो, तारीख और समय सहित आपत्तिजनक पोस्ट, प्रोफाइल, संदेश या पेज का रिकॉर्ड रखें।", ur: "جہاں ممکن ہو تاریخ اور وقت کے ساتھ قابل اعتراض پوسٹ، پروفائل، پیغام، یا صفحہ محفوظ کریں۔" },
                },
                {
                  bold: { en: "Account details", hi: "अकाउंट विवरण", ur: "اکاؤنٹ کی تفصیلات" },
                  text: { en: "Save usernames, mobile numbers, email addresses, payment handles, and platform names.", hi: "यूज़रनेम, मोबाइल नंबर, ईमेल पता, भुगतान पहचान और प्लेटफॉर्म का नाम सुरक्षित रखें।", ur: "یوزر نیم، موبائل نمبر، ای میل پتہ، ادائیگی کی شناخت، اور پلیٹ فارم کا نام محفوظ رکھیں۔" },
                },
                {
                  bold: { en: "Device or transaction data", hi: "डिवाइस या लेन-देन डेटा", ur: "ڈیوائس یا لین دین کا ڈیٹا" },
                  text: { en: "Keep logs, call records, email headers, bank messages, and transaction references where relevant.", hi: "जहां प्रासंगिक हो, लॉग, कॉल रिकॉर्ड, ईमेल हेडर, बैंक संदेश और लेन-देन संदर्भ सुरक्षित रखें।", ur: "جہاں متعلقہ ہو، لاگز، کال ریکارڈ، ای میل ہیڈرز، بینک پیغامات، اور لین دین کے حوالہ جات محفوظ رکھیں۔" },
                },
              ],
            },
            {
              id: "reporting_steps",
              type: "points",
              heading: {
                en: "Basic Reporting Steps",
                hi: "शिकायत के मूल कदम",
                ur: "شکایت کے بنیادی مراحل",
              },
              points: [
                {
                  bold: { en: "Step 1", hi: "चरण 1", ur: "مرحلہ 1" },
                  text: { en: "Preserve the evidence before deleting, blocking, or deactivating anything.", hi: "किसी चीज़ को हटाने, ब्लॉक करने या निष्क्रिय करने से पहले साक्ष्य सुरक्षित करें।", ur: "کسی چیز کو حذف، بلاک، یا غیر فعال کرنے سے پہلے ثبوت محفوظ کریں۔" },
                },
                {
                  bold: { en: "Step 2", hi: "चरण 2", ur: "مرحلہ 2" },
                  text: { en: "Report the account or content to the platform to trigger takedown or moderation.", hi: "सामग्री हटाने या मॉडरेशन के लिए प्लेटफॉर्म पर अकाउंट या सामग्री की रिपोर्ट करें।", ur: "مواد ہٹانے یا نگرانی کے لیے پلیٹ فارم پر اکاؤنٹ یا مواد کی رپورٹ کریں۔" },
                },
                {
                  bold: { en: "Step 3", hi: "चरण 3", ur: "مرحلہ 3" },
                  text: { en: "File the cyber complaint and note the complaint number or acknowledgement.", hi: "साइबर शिकायत दर्ज करें और शिकायत संख्या या रसीद नोट करें।", ur: "سائبر شکایت درج کریں اور شکایت نمبر یا رسید نوٹ کریں۔" },
                },
                {
                  bold: { en: "Step 4", hi: "चरण 4", ur: "مرحلہ 4" },
                  text: { en: "If there is immediate risk, sexual exploitation, blackmail, or repeated harassment, also approach the police without delay.", hi: "यदि तात्कालिक खतरा, यौन शोषण, ब्लैकमेल या बार-बार उत्पीड़न हो, तो बिना देरी पुलिस से भी संपर्क करें।", ur: "اگر فوری خطرہ، جنسی استحصال، بلیک میلنگ، یا بار بار ہراسانی ہو تو بلا تاخیر پولیس سے بھی رجوع کریں۔" },
                },
              ],
            },
          ],
        },
        {
          id: "case_specific_material",
          icon: "folder_shared",
          title: {
            en: "Information Needed in Different Cases",
            hi: "विभिन्न मामलों में आवश्यक जानकारी",
            ur: "مختلف معاملات میں درکار معلومات",
          },
          subtitle: {
            en: "Examples of records that help an investigation",
            hi: "ऐसे रिकॉर्ड के उदाहरण जो जांच में मदद करते हैं",
            ur: "ایسے ریکارڈز کی مثالیں جو تفتیش میں مدد دیتے ہیں",
          },
          sections: [
            {
              id: "hacking_breach",
              type: "points",
              heading: {
                en: "For Hacking or Data Breach",
                hi: "हैकिंग या डेटा ब्रीच के लिए",
                ur: "ہیکنگ یا ڈیٹا بریک کے لیے",
              },
              points: [
                {
                  bold: { en: "Logs", hi: "लॉग", ur: "لاگز" },
                  text: { en: "Server logs, access history, or device logs can help trace the event.", hi: "सर्वर लॉग, एक्सेस हिस्ट्री या डिवाइस लॉग घटना का पता लगाने में मदद कर सकते हैं।", ur: "سرور لاگز، رسائی کی ہسٹری، یا ڈیوائس لاگز واقعے کا سراغ لگانے میں مدد دے سکتے ہیں۔" },
                },
                {
                  bold: { en: "Copies of compromised data", hi: "समझौता किए गए डेटा की प्रतियां", ur: "متاثرہ ڈیٹا کی نقول" },
                  text: { en: "Where possible, preserve both the original and compromised versions of the data or page.", hi: "जहां संभव हो, डेटा या पेज के मूल और परिवर्तित दोनों संस्करण सुरक्षित रखें।", ur: "جہاں ممکن ہو، ڈیٹا یا صفحے کے اصل اور تبدیل شدہ دونوں ورژن محفوظ رکھیں۔" },
                },
                {
                  bold: { en: "Access details", hi: "प्रवेश विवरण", ur: "رسائی کی تفصیلات" },
                  text: { en: "Record who had access, when the compromise was noticed, and what systems were affected.", hi: "किसके पास पहुंच थी, घटना कब पता चली और कौन-से सिस्टम प्रभावित हुए, इसका रिकॉर्ड रखें।", ur: "کس کے پاس رسائی تھی، واقعہ کب معلوم ہوا، اور کون سے نظام متاثر ہوئے، اس کا ریکارڈ رکھیں۔" },
                },
              ],
            },
            {
              id: "email_abuse",
              type: "points",
              heading: {
                en: "For Email Abuse or Offensive Messages",
                hi: "ईमेल दुरुपयोग या अपमानजनक संदेश के लिए",
                ur: "ای میل کے غلط استعمال یا توہین آمیز پیغامات کے لیے",
              },
              points: [
                {
                  bold: { en: "Extended headers", hi: "विस्तृत हेडर", ur: "تفصیلی ہیڈرز" },
                  text: { en: "Where available, save full e-mail headers because they can assist tracing.", hi: "जहां उपलब्ध हों, पूरे ईमेल हेडर सुरक्षित रखें क्योंकि वे ट्रेसिंग में मदद कर सकते हैं।", ur: "جہاں دستیاب ہوں، مکمل ای میل ہیڈرز محفوظ رکھیں کیونکہ وہ سراغ لگانے میں مدد دے سکتے ہیں۔" },
                },
                {
                  bold: { en: "Do not delete", hi: "डिलीट न करें", ur: "حذف نہ کریں" },
                  text: { en: "Keep the original abusive email or message thread intact until it is documented.", hi: "दस्तावेजीकरण होने तक मूल अपमानजनक ईमेल या संदेश श्रृंखला को सुरक्षित रखें।", ur: "دستاویز بندی ہونے تک اصل توہین آمیز ای میل یا پیغام کی تھریڈ محفوظ رکھیں۔" },
                },
                {
                  bold: { en: "Backup copy", hi: "बैकअप प्रति", ur: "بیک اپ نقل" },
                  text: { en: "Save a copy on your device or in secure storage along with screenshots.", hi: "स्क्रीनशॉट के साथ अपने डिवाइस या सुरक्षित संग्रह में एक प्रति सुरक्षित रखें।", ur: "اسکرین شاٹس کے ساتھ اپنے ڈیوائس یا محفوظ اسٹوریج میں ایک نقل محفوظ رکھیں۔" },
                },
              ],
            },
            {
              id: "remedy_note",
              type: "highlight",
              heading: {
                en: "Practical Note",
                hi: "व्यावहारिक टिप्पणी",
                ur: "عملی نوٹ",
              },
              text: {
                en: "The faster the complaint is filed, the better the chances of tracing the source and obtaining platform-level preservation or takedown.",
                hi: "जितनी जल्दी शिकायत दर्ज की जाएगी, स्रोत का पता लगाने और प्लेटफॉर्म स्तर पर सामग्री सुरक्षित/हटवाने की संभावना उतनी अधिक होगी।",
                ur: "جتنی جلدی شکایت درج کی جائے، ذریعہ تلاش کرنے اور پلیٹ فارم کی سطح پر مواد محفوظ یا ہٹوانے کے امکانات اتنے ہی زیادہ ہوں گے۔",
              },
            },
          ],
        },
      ],
    },
    {
      id: "online_safety_measures",
      icon: "shield",
      label: {
        en: "Online Safety Measures",
        hi: "ऑनलाइन सुरक्षा उपाय",
        ur: "آن لائن حفاظتی اقدامات",
      },
      description: {
        en: "Daily digital hygiene and privacy habits that reduce cyber risk",
        hi: "दैनिक डिजिटल स्वच्छता और गोपनीयता की आदतें जो साइबर जोखिम कम करती हैं",
        ur: "روزمرہ ڈیجیٹل احتیاط اور رازداری کی عادات جو سائبر خطرات کم کرتی ہیں",
      },
      items: [
        {
          id: "social_media_privacy",
          icon: "group",
          title: {
            en: "Social Media and Privacy Settings",
            hi: "सोशल मीडिया और गोपनीयता सेटिंग्स",
            ur: "سوشل میڈیا اور رازداری کی ترتیبات",
          },
          subtitle: {
            en: "Control who can see you, contact you, and reuse your content",
            hi: "कौन आपको देख सकता है, संपर्क कर सकता है और आपकी सामग्री का उपयोग कर सकता है, इसे नियंत्रित करें",
            ur: "یہ کنٹرول کریں کہ کون آپ کو دیکھ سکتا ہے، رابطہ کر سکتا ہے، اور آپ کے مواد کو استعمال کر سکتا ہے",
          },
          sections: [
            {
              id: "privacy_points",
              type: "points",
              heading: {
                en: "Good Practices",
                hi: "अच्छी आदतें",
                ur: "اچھی عادات",
              },
              points: [
                {
                  bold: { en: "Use strict privacy settings", hi: "कड़ी प्राइवेसी सेटिंग्स रखें", ur: "سخت رازداری کی ترتیبات رکھیں" },
                  text: { en: "Limit who can view your posts, stories, photos, contact details, and friend list.", hi: "यह सीमित करें कि कौन आपकी पोस्ट, स्टोरी, फोटो, संपर्क विवरण और मित्र सूची देख सकता है।", ur: "یہ محدود کریں کہ کون آپ کی پوسٹس، اسٹوریز، تصاویر، رابطہ معلومات، اور دوستوں کی فہرست دیکھ سکتا ہے۔" },
                },
                {
                  bold: { en: "Be selective with requests", hi: "रिक्वेस्ट सोच-समझकर स्वीकार करें", ur: "درخواستیں سوچ سمجھ کر قبول کریں" },
                  text: { en: "Do not add strangers casually and remove or block suspicious accounts early.", hi: "अनजान लोगों को सहजता से न जोड़ें और संदिग्ध अकाउंट को जल्दी हटाएं या ब्लॉक करें।", ur: "اجنبی افراد کو آسانی سے شامل نہ کریں اور مشکوک اکاؤنٹس کو جلد ہٹا دیں یا بلاک کریں۔" },
                },
                {
                  bold: { en: "Watch for impersonation", hi: "प्रतिरूपण पर नज़र रखें", ur: "نقالی پر نظر رکھیں" },
                  text: { en: "If a fake account uses your name or photos, report it to the platform immediately.", hi: "यदि कोई फर्जी अकाउंट आपका नाम या फोटो इस्तेमाल करे, तो तुरंत प्लेटफॉर्म पर रिपोर्ट करें।", ur: "اگر کوئی جعلی اکاؤنٹ آپ کا نام یا تصاویر استعمال کرے تو فوراً پلیٹ فارم پر رپورٹ کریں۔" },
                },
              ],
            },
          ],
        },
        {
          id: "device_and_data_security",
          icon: "smartphone",
          title: {
            en: "Device and Data Security",
            hi: "डिवाइस और डेटा सुरक्षा",
            ur: "ڈیوائس اور ڈیٹا سکیورٹی",
          },
          subtitle: {
            en: "Protect your phone, accounts, and stored content",
            hi: "अपने फोन, अकाउंट और संग्रहित सामग्री की सुरक्षा करें",
            ur: "اپنے فون، اکاؤنٹس، اور محفوظ شدہ مواد کی حفاظت کریں",
          },
          sections: [
            {
              id: "device_points",
              type: "points",
              heading: {
                en: "Good Practices",
                hi: "अच्छी आदतें",
                ur: "اچھی عادات",
              },
              points: [
                {
                  bold: { en: "Lock devices", hi: "डिवाइस लॉक रखें", ur: "ڈیوائس لاک رکھیں" },
                  text: { en: "Use a strong PIN, password, or biometric lock on phones and laptops.", hi: "फोन और लैपटॉप पर मजबूत पिन, पासवर्ड या बायोमेट्रिक लॉक का उपयोग करें।", ur: "فون اور لیپ ٹاپ پر مضبوط پن، پاس ورڈ، یا بایومیٹرک لاک استعمال کریں۔" },
                },
                {
                  bold: { en: "Use trusted apps", hi: "विश्वसनीय ऐप ही इस्तेमाल करें", ur: "صرف معتبر ایپس استعمال کریں" },
                  text: { en: "Install apps only from official stores or trusted developers.", hi: "ऐप केवल आधिकारिक स्टोर या विश्वसनीय डेवलपर से ही इंस्टॉल करें।", ur: "ایپس صرف سرکاری اسٹور یا معتبر ڈویلپر سے ہی انسٹال کریں۔" },
                },
                {
                  bold: { en: "Reduce sensitive exposure", hi: "संवेदनशील सामग्री कम रखें", ur: "حساس مواد کم رکھیں" },
                  text: { en: "Be cautious about storing intimate photos or videos on connected devices and cloud accounts.", hi: "कनेक्टेड डिवाइस और क्लाउड अकाउंट पर अंतरंग फोटो या वीडियो रखने में सावधानी बरतें।", ur: "منسلک ڈیوائسز اور کلاؤڈ اکاؤنٹس پر ذاتی تصاویر یا ویڈیوز محفوظ رکھنے میں احتیاط برتیں۔" },
                },
                {
                  bold: { en: "Disable unnecessary location access", hi: "अनावश्यक लोकेशन एक्सेस बंद करें", ur: "غیر ضروری لوکیشن رسائی بند کریں" },
                  text: { en: "Turn off location sharing for apps that do not need it.", hi: "जिन ऐप को लोकेशन की जरूरत नहीं है, उनके लिए लोकेशन शेयरिंग बंद रखें।", ur: "جن ایپس کو لوکیشن کی ضرورت نہیں، ان کے لیے لوکیشن شیئرنگ بند رکھیں۔" },
                },
              ],
            },
          ],
        },
        {
          id: "online_interactions",
          icon: "public",
          title: {
            en: "Online Interactions and Browsing",
            hi: "ऑनलाइन संपर्क और ब्राउज़िंग",
            ur: "آن لائن رابطہ اور براؤزنگ",
          },
          subtitle: {
            en: "Stay careful while chatting, browsing, banking, or video calling",
            hi: "चैट, ब्राउज़िंग, बैंकिंग या वीडियो कॉल के समय सावधान रहें",
            ur: "چیٹ، براؤزنگ، بینکنگ، یا ویڈیو کال کے دوران محتاط رہیں",
          },
          sections: [
            {
              id: "interaction_points",
              type: "points",
              heading: {
                en: "Good Practices",
                hi: "अच्छी आदतें",
                ur: "اچھی عادات",
              },
              points: [
                {
                  bold: { en: "Protect personal information", hi: "व्यक्तिगत जानकारी सुरक्षित रखें", ur: "ذاتی معلومات محفوظ رکھیں" },
                  text: { en: "Avoid sharing phone numbers, addresses, personal documents, or intimate images with unknown persons.", hi: "अनजान लोगों के साथ फोन नंबर, पता, व्यक्तिगत दस्तावेज़ या अंतरंग तस्वीरें साझा करने से बचें।", ur: "نامعلوم افراد کے ساتھ فون نمبر، پتہ، ذاتی دستاویزات، یا ذاتی تصاویر شیئر کرنے سے گریز کریں۔" },
                },
                {
                  bold: { en: "Be careful on video calls", hi: "वीडियो कॉल पर सावधान रहें", ur: "ویڈیو کال پر محتاط رہیں" },
                  text: { en: "Assume the other side may record the session without warning.", hi: "यह मानकर चलें कि दूसरी ओर वाला व्यक्ति बिना बताए रिकॉर्डिंग कर सकता है।", ur: "یہ سمجھ کر چلیں کہ دوسری طرف والا شخص بغیر اطلاع ریکارڈنگ کر سکتا ہے۔" },
                },
                {
                  bold: { en: "Use trusted networks", hi: "विश्वसनीय नेटवर्क का उपयोग करें", ur: "معتبر نیٹ ورک استعمال کریں" },
                  text: { en: "Do banking or sensitive activity on personal devices and secure networks, not public Wi-Fi.", hi: "बैंकिंग या संवेदनशील कार्य निजी डिवाइस और सुरक्षित नेटवर्क पर करें, सार्वजनिक वाई-फाई पर नहीं।", ur: "بینکنگ یا حساس کام ذاتی ڈیوائس اور محفوظ نیٹ ورک پر کریں، عوامی وائی فائی پر نہیں۔" },
                },
              ],
            },
          ],
        },
        {
          id: "seeking_help_and_reporting",
          icon: "support_agent",
          title: {
            en: "Seeking Help and Reporting",
            hi: "मदद लेना और शिकायत करना",
            ur: "مدد لینا اور شکایت کرنا",
          },
          subtitle: {
            en: "Use support networks early and report unlawful content quickly",
            hi: "समर्थन तंत्र का जल्दी उपयोग करें और अवैध सामग्री की तुरंत शिकायत करें",
            ur: "مددی نظام سے جلد فائدہ اٹھائیں اور غیر قانونی مواد کی فوری شکایت کریں",
          },
          sections: [
            {
              id: "help_points",
              type: "points",
              heading: {
                en: "Good Practices",
                hi: "अच्छी आदतें",
                ur: "اچھی عادات",
              },
              points: [
                {
                  bold: { en: "Tell trusted people", hi: "विश्वसनीय लोगों को बताएं", ur: "قابل اعتماد لوگوں کو بتائیں" },
                  text: { en: "If you are being stalked, blackmailed, or harassed online, inform family or trusted friends early.", hi: "यदि आपका ऑनलाइन पीछा किया जा रहा हो, ब्लैकमेल या उत्पीड़न हो रहा हो, तो परिवार या विश्वसनीय मित्रों को जल्दी बताएं।", ur: "اگر آپ کو آن لائن اسٹاک کیا جا رہا ہو، بلیک میل کیا جا رہا ہو، یا ہراساں کیا جا رہا ہو تو خاندان یا قابل اعتماد دوستوں کو جلد بتائیں۔" },
                },
                {
                  bold: { en: "Report illegal sexual content", hi: "अवैध यौन सामग्री की रिपोर्ट करें", ur: "غیر قانونی جنسی مواد کی رپورٹ کریں" },
                  text: { en: "Immediately report sexually explicit abuse or child sexual abuse material to the platform and authorities.", hi: "यौन स्पष्ट दुरुपयोग या बाल यौन शोषण सामग्री की तुरंत प्लेटफॉर्म और प्राधिकरण को रिपोर्ट करें।", ur: "جنسی طور پر واضح زیادتی یا بچوں کے جنسی استحصال کے مواد کو فوراً پلیٹ فارم اور حکام کو رپورٹ کریں۔" },
                },
                {
                  bold: { en: "Use official channels", hi: "आधिकारिक माध्यम अपनाएं", ur: "سرکاری ذرائع استعمال کریں" },
                  text: { en: "Use cybercrime.gov.in, the police, or 1930 instead of relying only on informal complaints.", hi: "केवल अनौपचारिक शिकायत पर निर्भर न रहें; cybercrime.gov.in, पुलिस या 1930 का उपयोग करें।", ur: "صرف غیر رسمی شکایت پر انحصار نہ کریں؛ cybercrime.gov.in، پولیس، یا 1930 استعمال کریں۔" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default CYBER_CRIMES_DATA;
