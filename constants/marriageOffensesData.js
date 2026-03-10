// ============================================================
// constants/marriageOffensesData.js
// Jagruk Mahila - Marriage Offences
//
// Same structure as constitutionData.js / reproductiveRightsData.js / sexualCrimesData.js
// Section types: constitutional_text | points | highlight | text
// Access: field[currentLanguage] || field.en
// ============================================================

export const MARRIAGE_OFFENSES_DATA = {
  id: "marriage_offenses",
  icon: "family_restroom",
  label: {
    en: "Marriage Offences",
    hi: "विवाह संबंधी अपराध",
    ur: "شادی سے متعلق جرائم",
  },
  description: {
    en: "Dowry, domestic violence, cruelty, and dowry death laws affecting women in marriage-related contexts",
    hi: "दहेज, घरेलू हिंसा, क्रूरता और दहेज मृत्यु से संबंधित वे कानून जो विवाह संबंधी परिस्थितियों में महिलाओं को प्रभावित करते हैं",
    ur: "دہیز، گھریلو تشدد، ظلم، اور دہیز موت سے متعلق وہ قوانین جو شادی سے متعلق حالات میں خواتین کو متاثر کرتے ہیں",
  },

  subcategories: [
    {
      id: "dowry",
      icon: "account_balance_wallet",
      label: {
        en: "Dowry",
        hi: "दहेज",
        ur: "دہیز",
      },
      description: {
        en: "Definition of dowry, prohibited conduct, complaint rules, and evidentiary provisions under the Dowry Prohibition Act",
        hi: "दहेज प्रतिषेध अधिनियम के अंतर्गत दहेज की परिभाषा, निषिद्ध आचरण, शिकायत नियम और साक्ष्य संबंधी प्रावधान",
        ur: "دہیز ممانعت ایکٹ کے تحت دہیز کی تعریف، ممنوعہ رویہ، شکایت کے قواعد، اور ثبوتی دفعات",
      },
      items: [
        {
          id: "what_is_not_dowry",
          icon: "info",
          title: {
            en: "What Is Not Dowry",
            hi: "क्या दहेज नहीं है",
            ur: "کیا دہیز نہیں ہے",
          },
          subtitle: {
            en: "Voluntary gifts and lawful presents distinguished from dowry demands",
            hi: "स्वैच्छिक उपहार और वैध भेंटों को दहेज मांग से अलग समझना",
            ur: "رضاکارانہ تحفوں اور جائز پیشکشوں کو دہیز کے مطالبے سے الگ سمجھنا",
          },
          sections: [
            {
              id: "legal_definition",
              type: "constitutional_text",
              heading: {
                en: "Key Distinction",
                hi: "मुख्य अंतर",
                ur: "اہم فرق",
              },
              text: {
                en: "Voluntary presents given at or around marriage without demand, coercion, or expectation from the receiving side are not treated as dowry under the Dowry Prohibition Act, 1961.",
                hi: "विवाह के समय या उसके आसपास बिना मांग, दबाव या प्राप्त करने वाले पक्ष की अपेक्षा के जो उपहार स्वेच्छा से दिए जाएं, उन्हें दहेज प्रतिषेध अधिनियम, 1961 के तहत दहेज नहीं माना जाता।",
                ur: "شادی کے وقت یا اس کے آس پاس بغیر کسی مطالبے، دباؤ، یا وصول کرنے والے فریق کی توقع کے جو تحفے رضاکارانہ طور پر دیے جائیں، انہیں دہیز ممانعت ایکٹ، 1961 کے تحت دہیز نہیں سمجھا جاتا۔",
              },
            },
            {
              id: "examples",
              type: "points",
              heading: {
                en: "What Usually Does Not Count as Dowry",
                hi: "आम तौर पर क्या दहेज नहीं माना जाता",
                ur: "عام طور پر کن چیزوں کو دہیز نہیں کہا جاتا",
              },
              points: [
                {
                  bold: { en: "Voluntary gifts", hi: "स्वैच्छिक उपहार", ur: "رضاکارانہ تحفے" },
                  text: { en: "Gifts given out of love and affection without demand.", hi: "प्यार और स्नेह से बिना मांग के दिए गए उपहार।", ur: "محبت اور شفقت سے بغیر کسی مطالبے کے دیے گئے تحفے۔" },
                },
                {
                  bold: { en: "Customary presents", hi: "परंपरागत भेंट", ur: "روایتی تحائف" },
                  text: { en: "Traditional marriage presents exchanged willingly as part of social custom.", hi: "सामाजिक परंपरा के रूप में स्वेच्छा से आदान-प्रदान की गई विवाह भेंटें।", ur: "سماجی روایت کے طور پر رضاکارانہ طور پر دیے گئے شادی کے تحائف۔" },
                },
                {
                  bold: { en: "Stridhan", hi: "स्त्रीधन", ur: "استری دھن" },
                  text: { en: "Property gifted to the woman for her benefit and ownership.", hi: "महिला के लाभ और स्वामित्व के लिए दी गई संपत्ति।", ur: "عورت کے فائدے اور ملکیت کے لیے دی گئی جائیداد۔" },
                },
                {
                  bold: { en: "Mutual exchange", hi: "पारस्परिक आदान-प्रदान", ur: "باہمی تبادلہ" },
                  text: { en: "Mutual family exchange without coercion or condition linked to marriage.", hi: "बिना दबाव या विवाह से जुड़ी शर्त के परिवारों के बीच पारस्परिक आदान-प्रदान।", ur: "بغیر جبر یا شادی سے منسلک شرط کے خاندانوں کے درمیان باہمی تبادلہ۔" },
                },
              ],
            },
            {
              id: "practical_note",
              type: "highlight",
              heading: {
                en: "Practical Test",
                hi: "व्यावहारिक कसौटी",
                ur: "عملی پیمانہ",
              },
              text: {
                en: "The critical question is whether there was a demand, pressure, or condition connected with marriage. If yes, the transaction moves toward illegality.",
                hi: "मुख्य प्रश्न यह है कि क्या विवाह से जुड़ी कोई मांग, दबाव या शर्त थी। यदि हां, तो लेन-देन अवैधता की ओर जाता है।",
                ur: "اہم سوال یہ ہے کہ کیا شادی سے متعلق کوئی مطالبہ، دباؤ، یا شرط تھی۔ اگر ہاں، تو معاملہ غیر قانونی ہونے کی طرف جاتا ہے۔",
              },
            },
          ],
        },
        {
          id: "stridhan_vs_dowry",
          icon: "compare",
          title: {
            en: "Difference Between Stridhan and Dowry",
            hi: "स्त्रीधन और दहेज में अंतर",
            ur: "استری دھن اور دہیز میں فرق",
          },
          subtitle: {
            en: "Ownership, voluntariness, and legality distinguish stridhan from dowry",
            hi: "स्वामित्व, स्वैच्छिकता और वैधता स्त्रीधन को दहेज से अलग करती है",
            ur: "ملکیت، رضاکارانہ پن، اور قانونی حیثیت استری دھن کو دہیز سے الگ کرتی ہے",
          },
          sections: [
            {
              id: "stridhan",
              type: "points",
              heading: {
                en: "Stridhan",
                hi: "स्त्रीधन",
                ur: "استری دھن",
              },
              points: [
                {
                  bold: { en: "Voluntary nature", hi: "स्वैच्छिक स्वरूप", ur: "رضاکارانہ نوعیت" },
                  text: { en: "Given willingly out of affection, without demand.", hi: "स्नेहवश स्वेच्छा से दिया जाता है, बिना किसी मांग के।", ur: "محبت سے رضاکارانہ طور پر دیا جاتا ہے، بغیر کسی مطالبے کے۔" },
                },
                {
                  bold: { en: "Woman's property", hi: "महिला की संपत्ति", ur: "عورت کی ملکیت" },
                  text: { en: "Belongs exclusively to the woman and remains her property.", hi: "यह पूर्णतः महिला की संपत्ति होती है और उसी की रहती है।", ur: "یہ مکمل طور پر عورت کی ملکیت ہوتی ہے اور اسی کی رہتی ہے۔" },
                },
                {
                  bold: { en: "Legal protection", hi: "कानूनी संरक्षण", ur: "قانونی تحفظ" },
                  text: { en: "Protected as the woman's own property interest.", hi: "महिला के अपने संपत्ति हित के रूप में संरक्षित है।", ur: "عورت کی ذاتی جائیدادی ملکیت کے طور پر محفوظ ہے۔" },
                },
              ],
            },
            {
              id: "dowry",
              type: "points",
              heading: {
                en: "Dowry",
                hi: "दहेज",
                ur: "دہیز",
              },
              points: [
                {
                  bold: { en: "Demand-based", hi: "मांग-आधारित", ur: "مطالبے پر مبنی" },
                  text: { en: "Linked to demand, pressure, or expectation from the groom's side.", hi: "वर पक्ष की मांग, दबाव या अपेक्षा से जुड़ा होता है।", ur: "لڑکے والوں کے مطالبے، دباؤ، یا توقع سے منسلک ہوتا ہے۔" },
                },
                {
                  bold: { en: "Connected with marriage", hi: "विवाह से जुड़ा", ur: "شادی سے منسلک" },
                  text: { en: "Property or valuable security demanded in connection with marriage.", hi: "विवाह के संबंध में मांगी गई संपत्ति या मूल्यवान सुरक्षा।", ur: "شادی کے سلسلے میں مانگی گئی جائیداد یا قیمتی ضمانت۔" },
                },
                {
                  bold: { en: "Illegal", hi: "अवैध", ur: "غیر قانونی" },
                  text: { en: "Giving, taking, or demanding dowry is prohibited by law.", hi: "दहेज देना, लेना या मांगना कानूनन निषिद्ध है।", ur: "دہیز دینا، لینا، یا مانگنا قانوناً ممنوع ہے۔" },
                },
              ],
            },
            {
              id: "summary",
              type: "highlight",
              heading: {
                en: "Legal Summary",
                hi: "कानूनी सार",
                ur: "قانونی خلاصہ",
              },
              text: {
                en: "The central legal difference is demand. Voluntary property meant for the woman is not dowry; demanded transfers linked to marriage may be illegal.",
                hi: "मुख्य कानूनी अंतर मांग का है। महिला के लिए स्वैच्छिक रूप से दी गई संपत्ति दहेज नहीं है; विवाह से जुड़ी मांग पर आधारित हस्तांतरण अवैध हो सकता है।",
                ur: "اہم قانونی فرق مطالبہ ہے۔ عورت کے لیے رضاکارانہ طور پر دی گئی جائیداد دہیز نہیں؛ شادی سے منسلک مطالبہ پر مبنی منتقلی غیر قانونی ہو سکتی ہے۔",
              },
            },
          ],
        },
        {
          id: "dowry_illegal_in_india",
          icon: "gavel",
          title: {
            en: "Is Dowry Illegal in India",
            hi: "क्या भारत में दहेज अवैध है",
            ur: "کیا بھارت میں دہیز غیر قانونی ہے",
          },
          subtitle: {
            en: "Dowry prohibition under the Dowry Prohibition Act, 1961 and related criminal law",
            hi: "दहेज प्रतिषेध अधिनियम, 1961 और संबंधित आपराधिक कानून के अंतर्गत दहेज निषेध",
            ur: "دہیز ممانعت ایکٹ، 1961 اور متعلقہ فوجداری قانون کے تحت دہیز کی ممانعت",
          },
          sections: [
            {
              id: "legal_status",
              type: "constitutional_text",
              heading: {
                en: "Legal Status",
                hi: "कानूनी स्थिति",
                ur: "قانونی حیثیت",
              },
              text: {
                en: "Yes. Taking dowry, giving dowry, and demanding dowry are prohibited under the Dowry Prohibition Act, 1961, subject to the statutory definition of dowry.",
                hi: "हाँ। दहेज लेना, दहेज देना और दहेज मांगना दहेज प्रतिषेध अधिनियम, 1961 के तहत निषिद्ध है, बशर्ते मामला दहेज की वैधानिक परिभाषा में आता हो।",
                ur: "جی ہاں۔ دہیز لینا، دہیز دینا، اور دہیز کا مطالبہ کرنا دہیز ممانعت ایکٹ، 1961 کے تحت ممنوع ہے، بشرطیکہ معاملہ دہیز کی قانونی تعریف میں آتا ہو۔",
              },
            },
            {
              id: "prohibited_acts",
              type: "points",
              heading: {
                en: "What the Law Prohibits",
                hi: "कानून क्या निषिद्ध करता है",
                ur: "قانون کن چیزوں کو ممنوع قرار دیتا ہے",
              },
              points: [
                {
                  bold: { en: "Taking dowry", hi: "दहेज लेना", ur: "دہیز لینا" },
                  text: { en: "Receiving property or valuable security as dowry.", hi: "दहेज के रूप में संपत्ति या मूल्यवान सुरक्षा प्राप्त करना।", ur: "دہیز کے طور پر جائیداد یا قیمتی ضمانت حاصل کرنا۔" },
                },
                {
                  bold: { en: "Giving dowry", hi: "दहेज देना", ur: "دہیز دینا" },
                  text: { en: "Giving or agreeing to give dowry in connection with marriage.", hi: "विवाह के संबंध में दहेज देना या देने के लिए सहमत होना।", ur: "شادی کے سلسلے میں دہیز دینا یا دینے پر رضامند ہونا۔" },
                },
                {
                  bold: { en: "Demanding dowry", hi: "दहेज मांगना", ur: "دہیز مانگنا" },
                  text: { en: "Direct or indirect demand for dowry.", hi: "दहेज की प्रत्यक्ष या अप्रत्यक्ष मांग।", ur: "دہیز کا براہ راست یا بالواسطہ مطالبہ۔" },
                },
                {
                  bold: { en: "Abetment", hi: "सहायता या उकसावा", ur: "اعانت یا اکسانا" },
                  text: { en: "Helping or encouraging dowry-related transactions.", hi: "दहेज संबंधी लेन-देन में सहायता करना या प्रोत्साहित करना।", ur: "دہیز سے متعلق لین دین میں مدد کرنا یا حوصلہ افزائی کرنا۔" },
                },
              ],
            },
            {
              id: "legal_framework",
              type: "highlight",
              heading: {
                en: "Related Legal Framework",
                hi: "संबंधित कानूनी ढाँचा",
                ur: "متعلقہ قانونی ڈھانچہ",
              },
              text: {
                en: "Dowry law also overlaps with cruelty provisions, dowry death provisions, and constitutional protections for dignity, equality, and life.",
                hi: "दहेज कानून का संबंध क्रूरता, दहेज मृत्यु और गरिमा, समानता तथा जीवन की संवैधानिक सुरक्षा से भी है।",
                ur: "دہیز کا قانون ظلم، دہیز موت، اور وقار، مساوات، اور زندگی کے آئینی تحفظات سے بھی جڑا ہوا ہے۔",
              },
            },
          ],
        },
        {
          id: "dowry_punishment_india",
          icon: "balance",
          title: {
            en: "Punishment for Dowry in India",
            hi: "भारत में दहेज की सज़ा",
            ur: "بھارت میں دہیز کی سزا",
          },
          subtitle: {
            en: "Penalty provisions under Sections 3 and 4 of the Dowry Prohibition Act",
            hi: "दहेज प्रतिषेध अधिनियम की धारा 3 और 4 के अंतर्गत दंड प्रावधान",
            ur: "دہیز ممانعت ایکٹ کی دفعات 3 اور 4 کے تحت سزا کی دفعات",
          },
          sections: [
            {
              id: "section_3",
              type: "text",
              heading: {
                en: "Section 3 - Giving or Taking Dowry",
                hi: "धारा 3 - दहेज देना या लेना",
                ur: "دفعہ 3 - دہیز دینا یا لینا",
              },
              text: {
                en: "Giving or taking dowry is punishable with imprisonment of not less than five years and fine, subject to the statutory minimum fine rule tied to the value of dowry.",
                hi: "दहेज देना या लेना कम से कम पाँच वर्ष के कारावास और जुर्माने से दंडनीय है, जिसमें दहेज के मूल्य से जुड़ा वैधानिक न्यूनतम जुर्माना लागू होता है।",
                ur: "دہیز دینا یا لینا کم از کم پانچ سال قید اور جرمانے سے قابل سزا ہے، جس میں دہیز کی مالیت سے منسلک قانونی کم از کم جرمانہ بھی شامل ہے۔",
              },
            },
            {
              id: "section_4",
              type: "text",
              heading: {
                en: "Section 4 - Demanding Dowry",
                hi: "धारा 4 - दहेज मांगना",
                ur: "دفعہ 4 - دہیز کا مطالبہ کرنا",
              },
              text: {
                en: "Demanding dowry directly or indirectly is punishable with imprisonment and fine under Section 4.",
                hi: "दहेज की प्रत्यक्ष या अप्रत्यक्ष मांग धारा 4 के तहत कारावास और जुर्माने से दंडनीय है।",
                ur: "دہیز کا براہ راست یا بالواسطہ مطالبہ دفعہ 4 کے تحت قید اور جرمانے سے قابل سزا ہے۔",
              },
            },
            {
              id: "deterrent_note",
              type: "highlight",
              heading: {
                en: "Why Punishment Matters",
                hi: "सज़ा क्यों महत्वपूर्ण है",
                ur: "سزا کیوں اہم ہے",
              },
              text: {
                en: "The law uses penal consequences to deter economic coercion and violence tied to marriage transactions.",
                hi: "कानून विवाह से जुड़े आर्थिक दबाव और हिंसा को रोकने के लिए दंडात्मक परिणामों का उपयोग करता है।",
                ur: "قانون شادی سے متعلق معاشی جبر اور تشدد کو روکنے کے لیے تعزیری نتائج استعمال کرتا ہے۔",
              },
            },
          ],
        },
        {
          id: "dowry_complaint_who",
          icon: "person",
          title: {
            en: "Who Can File Complaint for Dowry Harassment",
            hi: "दहेज उत्पीड़न की शिकायत कौन कर सकता है",
            ur: "دہیز ہراسانی کی شکایت کون کر سکتا ہے",
          },
          subtitle: {
            en: "Persons who may initiate complaint or bring the matter before authorities",
            hi: "वे व्यक्ति जो शिकायत शुरू कर सकते हैं या मामले को प्राधिकरणों के सामने ला सकते हैं",
            ur: "وہ افراد جو شکایت شروع کر سکتے ہیں یا معاملہ حکام کے سامنے لا سکتے ہیں",
          },
          sections: [
            {
              id: "who_can_file",
              type: "points",
              heading: {
                en: "Common Complainants",
                hi: "सामान्य शिकायतकर्ता",
                ur: "عام شکایت کنندگان",
              },
              points: [
                {
                  bold: { en: "Aggrieved woman", hi: "पीड़ित महिला", ur: "متاثرہ عورت" },
                  text: { en: "The woman directly affected can complain herself.", hi: "सीधे प्रभावित महिला स्वयं शिकायत कर सकती है।", ur: "براہ راست متاثرہ عورت خود شکایت کر سکتی ہے۔" },
                },
                {
                  bold: { en: "Parents or relatives", hi: "माता-पिता या रिश्तेदार", ur: "والدین یا رشتہ دار" },
                  text: { en: "Close family members may approach authorities where needed.", hi: "ज़रूरत पड़ने पर निकट संबंधी प्राधिकरणों से संपर्क कर सकते हैं।", ur: "ضرورت پڑنے پر قریبی رشتہ دار حکام سے رجوع کر سکتے ہیں۔" },
                },
                {
                  bold: { en: "Police or welfare institutions", hi: "पुलिस या कल्याण संस्थाएँ", ur: "پولیس یا فلاحی ادارے" },
                  text: { en: "Police action and recognised welfare organisations may also play a role depending on procedure and facts.", hi: "प्रक्रिया और तथ्यों के अनुसार पुलिस कार्रवाई तथा मान्यता प्राप्त कल्याण संस्थाएँ भी भूमिका निभा सकती हैं।", ur: "طریقہ کار اور حقائق کے مطابق پولیس کارروائی اور تسلیم شدہ فلاحی ادارے بھی کردار ادا کر سکتے ہیں۔" },
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
                en: "Dowry complaints often overlap with cruelty, domestic violence, or dowry death allegations, so multiple legal routes may be available at once.",
                hi: "दहेज की शिकायतें अक्सर क्रूरता, घरेलू हिंसा या दहेज मृत्यु के आरोपों से जुड़ती हैं, इसलिए कई कानूनी रास्ते एक साथ उपलब्ध हो सकते हैं।",
                ur: "دہیز کی شکایات اکثر ظلم، گھریلو تشدد، یا دہیز موت کے الزامات سے جڑی ہوتی ہیں، اس لیے ایک ہی وقت میں کئی قانونی راستے دستیاب ہو سکتے ہیں۔",
              },
            },
          ],
        },
        {
          id: "dowry_complaint_against_whom",
          icon: "group",
          title: {
            en: "Against Whom Complaint Can Be Filed",
            hi: "शिकायत किनके विरुद्ध की जा सकती है",
            ur: "شکایت کن کے خلاف کی جا سکتی ہے",
          },
          subtitle: {
            en: "Liable persons in dowry-related demands and harassment",
            hi: "दहेज संबंधी मांग और उत्पीड़न में उत्तरदायी व्यक्ति",
            ur: "دہیز سے متعلق مطالبات اور ہراسانی میں ذمہ دار افراد",
          },
          sections: [
            {
              id: "liable_persons",
              type: "points",
              heading: {
                en: "Possible Respondents or Accused",
                hi: "संभावित प्रतिवादी या आरोपी",
                ur: "ممکنہ فریق یا ملزمان",
              },
              points: [
                {
                  bold: { en: "Husband", hi: "पति", ur: "شوہر" },
                  text: { en: "Where the husband directly demands dowry or participates in harassment.", hi: "जहाँ पति सीधे दहेज मांगता है या उत्पीड़न में शामिल होता है।", ur: "جہاں شوہر براہ راست دہیز مانگتا ہے یا ہراسانی میں شامل ہوتا ہے۔" },
                },
                {
                  bold: { en: "In-laws", hi: "ससुराल पक्ष", ur: "سسرال والے" },
                  text: { en: "Relatives of the husband who take part in demand, pressure, or cruelty.", hi: "पति के वे रिश्तेदार जो मांग, दबाव या क्रूरता में शामिल हों।", ur: "شوہر کے وہ رشتہ دار جو مطالبے، دباؤ، یا ظلم میں شریک ہوں۔" },
                },
                {
                  bold: { en: "Other participants", hi: "अन्य सहभागी", ur: "دیگر شریک افراد" },
                  text: { en: "Any other person who actively participates in the unlawful demand or related harassment.", hi: "कोई अन्य व्यक्ति जो अवैध मांग या उससे जुड़ी हेरासानी में सक्रिय रूप से शामिल हो।", ur: "کوئی بھی دوسرا شخص جو غیر قانونی مطالبے یا اس سے منسلک ہراسانی میں فعال طور پر شامل ہو۔" },
                },
              ],
            },
            {
              id: "joint_liability",
              type: "highlight",
              heading: {
                en: "Joint Involvement",
                hi: "संयुक्त सहभागिता",
                ur: "مشترکہ شمولیت",
              },
              text: {
                en: "Dowry harassment can involve multiple family members, and liability depends on factual participation rather than family title alone.",
                hi: "दहेज उत्पीड़न में परिवार के कई सदस्य शामिल हो सकते हैं और उत्तरदायित्व केवल रिश्ते पर नहीं, बल्कि वास्तविक भागीदारी पर निर्भर करता है।",
                ur: "دہیز ہراسانی میں خاندان کے کئی افراد شامل ہو سکتے ہیں، اور ذمہ داری صرف رشتے پر نہیں بلکہ حقیقی شرکت پر منحصر ہوتی ہے۔",
              },
            },
          ],
        },
        {
          id: "dowry_cognizance",
          icon: "visibility",
          title: {
            en: "Cognizance of Dowry Offence",
            hi: "दहेज अपराध का संज्ञान",
            ur: "دہیز کے جرم کا نوٹس لینا",
          },
          subtitle: {
            en: "Section 7 of the Dowry Prohibition Act and court competence",
            hi: "दहेज प्रतिषेध अधिनियम की धारा 7 और न्यायालय की अधिकारिता",
            ur: "دہیز ممانعت ایکٹ کی دفعہ 7 اور عدالت کی اہلیت",
          },
          sections: [
            {
              id: "authorised_courts",
              type: "text",
              heading: {
                en: "Authorised Court",
                hi: "प्राधिकृत न्यायालय",
                ur: "مجاز عدالت",
              },
              text: {
                en: "Offences under the Act are triable by a Metropolitan Magistrate or a Judicial Magistrate of the First Class.",
                hi: "अधिनियम के अंतर्गत अपराधों की सुनवाई महानगरीय मजिस्ट्रेट या प्रथम श्रेणी न्यायिक मजिस्ट्रेट द्वारा की जाती है।",
                ur: "اس ایکٹ کے تحت جرائم کی سماعت میٹروپولیٹن مجسٹریٹ یا جوڈیشل مجسٹریٹ فرسٹ کلاس کے ذریعے کی جاتی ہے۔",
              },
            },
            {
              id: "how_cognizance_taken",
              type: "points",
              heading: {
                en: "How Cognizance May Be Taken",
                hi: "संज्ञान कैसे लिया जा सकता है",
                ur: "نوٹس کیسے لیا جا سکتا ہے",
              },
              points: [
                {
                  bold: { en: "Own knowledge", hi: "न्यायालय की स्वयं की जानकारी", ur: "عدالت کا اپنا علم" },
                  text: { en: "On facts known to the court.", hi: "न्यायालय को ज्ञात तथ्यों के आधार पर।", ur: "عدالت کے علم میں موجود حقائق کی بنیاد پر۔" },
                },
                {
                  bold: { en: "Police report", hi: "पुलिस रिपोर्ट", ur: "پولیس رپورٹ" },
                  text: { en: "On a police report disclosing the offence.", hi: "अपराध दर्शाने वाली पुलिस रिपोर्ट पर।", ur: "جرم ظاہر کرنے والی پولیس رپورٹ پر۔" },
                },
                {
                  bold: { en: "Complaint", hi: "शिकायत", ur: "شکایت" },
                  text: { en: "On a complaint by an aggrieved person, relative, or recognised welfare institution.", hi: "पीड़ित व्यक्ति, रिश्तेदार या मान्यता प्राप्त कल्याण संस्था की शिकायत पर।", ur: "متاثرہ شخص، رشتہ دار، یا تسلیم شدہ فلاحی ادارے کی شکایت پر۔" },
                },
              ],
            },
            {
              id: "importance",
              type: "highlight",
              heading: {
                en: "Why It Matters",
                hi: "यह क्यों महत्वपूर्ण है",
                ur: "یہ کیوں اہم ہے",
              },
              text: {
                en: "These rules ensure that dowry offences reach a competent court through more than one formal channel.",
                hi: "ये नियम सुनिश्चित करते हैं कि दहेज अपराध एक सक्षम न्यायालय तक एक से अधिक औपचारिक माध्यमों से पहुँच सके।",
                ur: "یہ قواعد یقینی بناتے ہیں کہ دہیز کے جرائم ایک سے زیادہ رسمی ذرائع سے مجاز عدالت تک پہنچ سکیں۔",
              },
            },
          ],
        },
        {
          id: "dowry_burden_of_proof",
          icon: "fact_check",
          title: {
            en: "Burden of Proof in Certain Cases",
            hi: "कुछ मामलों में प्रमाण का भार",
            ur: "کچھ معاملات میں ثبوت کا بوجھ",
          },
          subtitle: {
            en: "Section 8A and reverse burden for taking or demanding dowry",
            hi: "धारा 8A और दहेज लेने या मांगने के मामलों में प्रतिलोम प्रमाण भार",
            ur: "دفعہ 8A اور دہیز لینے یا مانگنے کے معاملات میں الٹا ثبوتی بوجھ",
          },
          sections: [
            {
              id: "section_8a",
              type: "constitutional_text",
              heading: {
                en: "Section 8A",
                hi: "धारा 8A",
                ur: "دفعہ 8A",
              },
              text: {
                en: "In prosecutions for taking dowry under section 3 or demanding dowry under section 4, the burden of proving that the accused did not commit the offence lies on the accused.",
                hi: "धारा 3 के तहत दहेज लेने या धारा 4 के तहत दहेज मांगने के अभियोजन में यह साबित करने का भार कि आरोपी ने अपराध नहीं किया, आरोपी पर होता है।",
                ur: "دفعہ 3 کے تحت دہیز لینے یا دفعہ 4 کے تحت دہیز مانگنے کے مقدمات میں یہ ثابت کرنے کا بوجھ کہ ملزم نے جرم نہیں کیا، ملزم پر ہوتا ہے۔",
              },
            },
            {
              id: "implications",
              type: "points",
              heading: {
                en: "Legal Implications",
                hi: "कानूनी प्रभाव",
                ur: "قانونی اثرات",
              },
              points: [
                {
                  bold: { en: "Reverse burden", hi: "प्रतिलोम भार", ur: "الٹا بوجھ" },
                  text: { en: "The ordinary prosecution burden is partly shifted in specified dowry offences.", hi: "निर्दिष्ट दहेज अपराधों में सामान्य अभियोजन भार आंशिक रूप से स्थानांतरित हो जाता है।", ur: "مخصوص دہیز جرائم میں عام استغاثہ کا بوجھ جزوی طور پر منتقل ہو جاتا ہے۔" },
                },
                {
                  bold: { en: "Covers sections 3 and 4", hi: "धारा 3 और 4 पर लागू", ur: "دفعات 3 اور 4 پر لاگو" },
                  text: { en: "It applies to giving/taking and demanding dowry as specified by law.", hi: "यह कानून द्वारा निर्दिष्ट दहेज देने/लेने और मांगने के मामलों पर लागू होता है।", ur: "یہ قانون کے مطابق دہیز دینے/لینے اور مانگنے کے معاملات پر لاگو ہوتا ہے۔" },
                },
                {
                  bold: { en: "Deterrent function", hi: "निवारक कार्य", ur: "بازدار کردار" },
                  text: { en: "The provision aims to strengthen enforcement against dowry practices.", hi: "यह प्रावधान दहेज प्रथा के विरुद्ध प्रवर्तन को मजबूत करने के लिए है।", ur: "یہ دفعہ دہیز کی رسم کے خلاف نفاذ کو مضبوط بنانے کے لیے ہے۔" },
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "domestic_violence",
      icon: "home",
      label: {
        en: "Domestic Violence",
        hi: "घरेलू हिंसा",
        ur: "گھریلو تشدد",
      },
      description: {
        en: "Protection of Women from Domestic Violence Act, 2005 and remedies such as protection, residence, monetary, and custody orders",
        hi: "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005 और संरक्षण, निवास, आर्थिक राहत तथा अभिरक्षा आदेश जैसे उपाय",
        ur: "گھریلو تشدد سے خواتین کے تحفظ کا ایکٹ، 2005 اور تحفظ، رہائش، مالی امداد، اور تحویل کے احکامات جیسے علاج",
      },
      items: [
        {
          id: "dv_act_2005",
          icon: "gavel",
          title: {
            en: "Protection of Women from Domestic Violence Act, 2005",
            hi: "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005",
            ur: "گھریلو تشدد سے خواتین کا تحفظ ایکٹ، 2005",
          },
          subtitle: {
            en: "Section 3 definition of domestic violence and the broad protective scope of the Act",
            hi: "धारा 3 में घरेलू हिंसा की परिभाषा और अधिनियम का व्यापक संरक्षण",
            ur: "دفعہ 3 میں گھریلو تشدد کی تعریف اور ایکٹ کا وسیع تحفظی دائرہ",
          },
          sections: [
            {
              id: "section_3",
              type: "constitutional_text",
              heading: {
                en: "Definition of Domestic Violence",
                hi: "घरेलू हिंसा की परिभाषा",
                ur: "گھریلو تشدد کی تعریف",
              },
              text: {
                en: "Section 3 covers physical abuse, sexual abuse, verbal and emotional abuse, economic abuse, and harassment connected with unlawful dowry or property demands.",
                hi: "धारा 3 में शारीरिक, यौन, मौखिक और भावनात्मक, आर्थिक शोषण तथा अवैध दहेज या संपत्ति की मांग से जुड़ी हेरासानी शामिल है।",
                ur: "دفعہ 3 میں جسمانی، جنسی، زبانی و جذباتی، معاشی زیادتی، اور غیر قانونی دہیز یا جائیداد کے مطالبات سے منسلک ہراسانی شامل ہے۔",
              },
            },
            {
              id: "forms_of_abuse",
              type: "points",
              heading: {
                en: "Main Forms of Abuse Recognised",
                hi: "मान्य शोषण के मुख्य रूप",
                ur: "تسلیم شدہ زیادتی کی بنیادی شکلیں",
              },
              points: [
                {
                  bold: { en: "Physical abuse", hi: "शारीरिक शोषण", ur: "جسمانی زیادتی" },
                  text: { en: "Acts causing bodily harm, injury, or danger to life or limb.", hi: "शारीरिक चोट, क्षति या जीवन/अंग के लिए खतरा पैदा करने वाले कृत्य।", ur: "ایسے اعمال جو جسمانی نقصان، چوٹ، یا زندگی / اعضا کے لیے خطرہ پیدا کریں۔" },
                },
                {
                  bold: { en: "Sexual abuse", hi: "यौन शोषण", ur: "جنسی زیادتی" },
                  text: { en: "Sexual conduct that humiliates, degrades, or violates dignity.", hi: "ऐसा यौन आचरण जो अपमानित करे, गरिमा घटाए या सम्मान का उल्लंघन करे।", ur: "ایسا جنسی رویہ جو تذلیل کرے، وقار گھٹائے، یا عزت کو مجروح کرے۔" },
                },
                {
                  bold: { en: "Verbal or emotional abuse", hi: "मौखिक या भावनात्मक शोषण", ur: "زبانی یا جذباتی زیادتی" },
                  text: { en: "Insults, threats, humiliation, or intimidation affecting mental well-being.", hi: "अपमान, धमकी, बेइज्जती या डराना जो मानसिक सुख-शांति को प्रभावित करे।", ur: "گالیاں، دھمکیاں، تذلیل، یا ڈرانا جو ذہنی سکون کو متاثر کرے۔" },
                },
                {
                  bold: { en: "Economic abuse", hi: "आर्थिक शोषण", ur: "معاشی زیادتی" },
                  text: { en: "Deprivation of resources, maintenance, property access, or household necessities.", hi: "संसाधनों, भरण-पोषण, संपत्ति तक पहुंच या घरेलू आवश्यकताओं से वंचित करना।", ur: "وسائل، نان نفقہ، جائیداد تک رسائی، یا گھریلو ضروریات سے محروم کرنا۔" },
                },
              ],
            },
            {
              id: "purpose",
              type: "highlight",
              heading: {
                en: "Purpose of the Act",
                hi: "अधिनियम का उद्देश्य",
                ur: "قانون کا مقصد",
              },
              text: {
                en: "The Act is civil-protective in structure and provides quick remedies for safety, housing, finances, custody, and dignity within domestic relationships.",
                hi: "यह अधिनियम संरचना में सिविल-प्रोटेक्टिव है और घरेलू संबंधों के भीतर सुरक्षा, आवास, आर्थिक सहायता, अभिरक्षा और गरिमा के लिए त्वरित उपाय देता है।",
                ur: "یہ ایکٹ ساخت کے لحاظ سے سول تحفظی ہے اور گھریلو تعلقات کے اندر حفاظت، رہائش، مالی امداد، تحویل، اور وقار کے لیے فوری علاج فراہم کرتا ہے۔",
              },
            },
          ],
        },
        {
          id: "dv_who_can_file",
          icon: "person",
          title: {
            en: "Who Can File a Domestic Violence Complaint",
            hi: "घरेलू हिंसा की शिकायत कौन कर सकता है",
            ur: "گھریلو تشدد کی شکایت کون کر سکتا ہے",
          },
          subtitle: {
            en: "Aggrieved women, relatives, welfare bodies, and authorities involved in access to relief",
            hi: "पीड़ित महिला, रिश्तेदार, कल्याण संस्थाएँ और राहत तक पहुँच से जुड़े प्राधिकरण",
            ur: "متاثرہ عورت، رشتہ دار، فلاحی ادارے، اور امداد تک رسائی سے متعلق حکام",
          },
          sections: [
            {
              id: "who_can_approach",
              type: "points",
              heading: {
                en: "Who May Initiate or Support a Complaint",
                hi: "कौन शिकायत शुरू या समर्थन कर सकता है",
                ur: "کون شکایت شروع یا اس کی مدد کر سکتا ہے",
              },
              points: [
                {
                  bold: { en: "Aggrieved woman", hi: "पीड़ित महिला", ur: "متاثرہ عورت" },
                  text: { en: "The affected woman can approach the system directly.", hi: "प्रभावित महिला स्वयं सीधे प्रणाली तक पहुँच सकती है।", ur: "متاثرہ عورت خود براہ راست نظام سے رجوع کر سکتی ہے۔" },
                },
                {
                  bold: { en: "Relative or parent", hi: "रिश्तेदार या माता-पिता", ur: "رشتہ دار یا والدین" },
                  text: { en: "Family members may assist by bringing the complaint forward.", hi: "परिवार के सदस्य शिकायत को आगे लाने में सहायता कर सकते हैं।", ur: "خاندان کے افراد شکایت آگے بڑھانے میں مدد کر سکتے ہیں۔" },
                },
                {
                  bold: { en: "Recognised welfare body", hi: "मान्यता प्राप्त कल्याण संस्था", ur: "تسلیم شدہ فلاحی ادارہ" },
                  text: { en: "Registered or recognised organisations may support or file on behalf of the victim.", hi: "पंजीकृत या मान्यता प्राप्त संस्थाएँ पीड़िता की ओर से सहायता या शिकायत कर सकती हैं।", ur: "رجسٹرڈ یا تسلیم شدہ ادارے متاثرہ کی طرف سے مدد یا شکایت کر سکتے ہیں۔" },
                },
              ],
            },
            {
              id: "authorities",
              type: "points",
              heading: {
                en: "Authorities Who May Be Approached",
                hi: "किन प्राधिकरणों से संपर्क किया जा सकता है",
                ur: "کن حکام سے رابطہ کیا جا سکتا ہے",
              },
              points: [
                {
                  bold: { en: "Police officer", hi: "पुलिस अधिकारी", ur: "پولیس افسر" },
                  text: { en: "A local police station or police officer may be approached for immediate help.", hi: "तत्काल सहायता के लिए स्थानीय थाना या पुलिस अधिकारी से संपर्क किया जा सकता है।", ur: "فوری مدد کے لیے مقامی تھانے یا پولیس افسر سے رجوع کیا جا سکتا ہے۔" },
                },
                {
                  bold: { en: "Protection Officer", hi: "संरक्षण अधिकारी", ur: "تحفظ افسر" },
                  text: { en: "Protection Officers appointed under the Act assist in access to remedies.", hi: "अधिनियम के तहत नियुक्त संरक्षण अधिकारी राहत दिलाने में मदद करते हैं।", ur: "ایکٹ کے تحت مقرر کردہ تحفظ افسر امداد تک رسائی میں مدد دیتے ہیں۔" },
                },
                {
                  bold: { en: "Service provider or court", hi: "सेवा प्रदाता या न्यायालय", ur: "سروس فراہم کنندہ یا عدالت" },
                  text: { en: "Registered service providers and the Magistrate forum are also available.", hi: "पंजीकृत सेवा प्रदाता और मजिस्ट्रेट का मंच भी उपलब्ध है।", ur: "رجسٹرڈ سروس فراہم کنندگان اور مجسٹریٹ کا فورم بھی دستیاب ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "dv_magistrate_duties",
          icon: "assignment",
          title: {
            en: "Duties of a Magistrate",
            hi: "मजिस्ट्रेट के कर्तव्य",
            ur: "مجسٹریٹ کے فرائض",
          },
          subtitle: {
            en: "Statutory duties under sections 5, 12, 18 to 24, and related provisions of the DV Act",
            hi: "डीवी अधिनियम की धारा 5, 12, 18 से 24 और संबंधित प्रावधानों के अंतर्गत वैधानिक कर्तव्य",
            ur: "ڈی وی ایکٹ کی دفعات 5، 12، 18 تا 24 اور متعلقہ احکامات کے تحت قانونی فرائض",
          },
          sections: [
            {
              id: "core_judicial_role",
              type: "points",
              heading: {
                en: "Core Duties",
                hi: "मुख्य कर्तव्य",
                ur: "بنیادی فرائض",
              },
              points: [
                {
                  bold: { en: "Receive and hear applications", hi: "आवेदन लेना और सुनवाई करना", ur: "درخواست وصول کرنا اور سماعت کرنا" },
                  text: { en: "The Magistrate hears applications for relief under section 12.", hi: "मजिस्ट्रेट धारा 12 के तहत राहत के आवेदन सुनता है।", ur: "مجسٹریٹ دفعہ 12 کے تحت امداد کی درخواستیں سنتا ہے۔" },
                },
                {
                  bold: { en: "Pass appropriate orders", hi: "उचित आदेश पारित करना", ur: "مناسب احکامات جاری کرنا" },
                  text: { en: "The Magistrate may grant protection, residence, monetary, custody, compensation, interim, and ex parte orders according to law.", hi: "मजिस्ट्रेट कानून के अनुसार संरक्षण, निवास, आर्थिक राहत, अभिरक्षा, क्षतिपूर्ति, अंतरिम और एकपक्षीय आदेश दे सकता है।", ur: "مجسٹریٹ قانون کے مطابق تحفظ، رہائش، مالی امداد، تحویل، ہرجانہ، عبوری، اور یک طرفہ احکامات جاری کر سکتا ہے۔" },
                },
                {
                  bold: { en: "Ensure copies and procedure", hi: "प्रतियाँ और प्रक्रिया सुनिश्चित करना", ur: "نقول اور طریقہ کار یقینی بنانا" },
                  text: { en: "The court must ensure notice, copies of orders, and lawful procedure under the Act.", hi: "न्यायालय को अधिनियम के अनुसार नोटिस, आदेशों की प्रतियाँ और वैध प्रक्रिया सुनिश्चित करनी होती है।", ur: "عدالت کو ایکٹ کے مطابق نوٹس، احکامات کی نقول، اور قانونی طریقہ کار یقینی بنانا ہوتا ہے۔" },
                },
              ],
            },
            {
              id: "dignity_note",
              type: "highlight",
              heading: {
                en: "Protective Judicial Function",
                hi: "संरक्षात्मक न्यायिक भूमिका",
                ur: "تحفظی عدالتی کردار",
              },
              text: {
                en: "The Magistrate's role is not merely punitive. It is to secure immediate civil protection and stabilise the survivor's safety, housing, and financial position.",
                hi: "मजिस्ट्रेट की भूमिका केवल दंडात्मक नहीं है। इसका उद्देश्य तत्काल सिविल संरक्षण देना और पीड़िता की सुरक्षा, आवास तथा आर्थिक स्थिति को स्थिर करना है।",
                ur: "مجسٹریٹ کا کردار صرف تعزیری نہیں۔ اس کا مقصد فوری سول تحفظ فراہم کرنا اور متاثرہ کی حفاظت، رہائش، اور مالی حالت کو مستحکم کرنا ہے۔",
              },
            },
          ],
        },
        {
          id: "dv_court_orders",
          icon: "description",
          title: {
            en: "Types of Court Orders",
            hi: "न्यायालय के आदेशों के प्रकार",
            ur: "عدالتی احکامات کی اقسام",
          },
          subtitle: {
            en: "Overview of the order types available under the DV Act",
            hi: "डीवी अधिनियम के अंतर्गत उपलब्ध आदेशों का अवलोकन",
            ur: "ڈی وی ایکٹ کے تحت دستیاب احکامات کا جائزہ",
          },
          sections: [
            {
              id: "order_types",
              type: "points",
              heading: {
                en: "Main Orders",
                hi: "मुख्य आदेश",
                ur: "اہم احکامات",
              },
              points: [
                {
                  bold: { en: "Protection orders", hi: "संरक्षण आदेश", ur: "تحفظی احکامات" },
                  text: { en: "Orders restraining the respondent from acts of domestic violence and related interference.", hi: "ऐसे आदेश जो प्रतिवादी को घरेलू हिंसा और संबंधित हस्तक्षेप से रोकते हैं।", ur: "ایسے احکامات جو مدعا علیہ کو گھریلو تشدد اور متعلقہ مداخلت سے روکتے ہیں۔" },
                },
                {
                  bold: { en: "Residence orders", hi: "निवास आदेश", ur: "رہائشی احکامات" },
                  text: { en: "Orders protecting shared household occupation and alternate accommodation rights.", hi: "साझा घर में रहने और वैकल्पिक आवास के अधिकार की रक्षा करने वाले आदेश।", ur: "مشترکہ گھر میں رہائش اور متبادل رہائش کے حق کی حفاظت کرنے والے احکامات۔" },
                },
                {
                  bold: { en: "Monetary reliefs", hi: "आर्थिक राहत", ur: "مالی امداد" },
                  text: { en: "Orders for maintenance, expenses, loss, and support linked to abuse.", hi: "भरण-पोषण, खर्च, नुकसान और शोषण से जुड़ी सहायता के आदेश।", ur: "نان نفقہ، اخراجات، نقصان، اور زیادتی سے متعلق امداد کے احکامات۔" },
                },
                {
                  bold: { en: "Custody and compensation", hi: "अभिरक्षा और क्षतिपूर्ति", ur: "تحویل اور ہرجانہ" },
                  text: { en: "Temporary child custody orders and compensation for injury, including mental torture.", hi: "बच्चों की अस्थायी अभिरक्षा और मानसिक यातना सहित क्षति के लिए क्षतिपूर्ति।", ur: "بچوں کی عارضی تحویل اور ذہنی اذیت سمیت نقصان کے لیے ہرجانہ۔" },
                },
              ],
            },
            {
              id: "interim_orders",
              type: "highlight",
              heading: {
                en: "Interim and Ex Parte Relief",
                hi: "अंतरिम और एकपक्षीय राहत",
                ur: "عبوری اور یک طرفہ امداد",
              },
              text: {
                en: "The Act also allows the Magistrate to issue urgent interim or ex parte orders where immediate protection is necessary.",
                hi: "अधिनियम मजिस्ट्रेट को तत्काल सुरक्षा की आवश्यकता होने पर त्वरित अंतरिम या एकपक्षीय आदेश देने की अनुमति भी देता है।",
                ur: "یہ ایکٹ مجسٹریٹ کو فوری تحفظ کی ضرورت ہونے پر فوری عبوری یا یک طرفہ احکامات جاری کرنے کی بھی اجازت دیتا ہے۔",
              },
            },
          ],
        },
        {
          id: "dv_protection_orders",
          icon: "security",
          title: {
            en: "Protection Orders",
            hi: "संरक्षण आदेश",
            ur: "تحفظی احکامات",
          },
          subtitle: {
            en: "Section 18 orders restraining domestic violence and harmful interference",
            hi: "धारा 18 के आदेश जो घरेलू हिंसा और हानिकारक हस्तक्षेप को रोकते हैं",
            ur: "دفعہ 18 کے احکامات جو گھریلو تشدد اور مضر مداخلت کو روکتے ہیں",
          },
          sections: [
            {
              id: "section_18",
              type: "constitutional_text",
              heading: {
                en: "Section 18 DV Act",
                hi: "धारा 18 डीवी अधिनियम",
                ur: "دفعہ 18 ڈی وی ایکٹ",
              },
              text: {
                en: "Where the Magistrate is prima facie satisfied that domestic violence has taken place or is likely, a protection order may prohibit the respondent from committing violence, aiding it, contacting the aggrieved person, or interfering with assets and stridhan.",
                hi: "यदि मजिस्ट्रेट प्रथमदृष्टया संतुष्ट हो कि घरेलू हिंसा हुई है या होने की संभावना है, तो संरक्षण आदेश प्रतिवादी को हिंसा करने, उसमें सहायता देने, पीड़िता से संपर्क करने या संपत्ति और स्त्रीधन में हस्तक्षेप करने से रोक सकता है।",
                ur: "اگر مجسٹریٹ بادی النظر میں مطمئن ہو کہ گھریلو تشدد ہوا ہے یا ہونے کا امکان ہے، تو تحفظی حکم مدعا علیہ کو تشدد کرنے، اس میں مدد دینے، متاثرہ سے رابطہ کرنے، یا املاک اور استری دھن میں مداخلت کرنے سے روک سکتا ہے۔",
              },
            },
            {
              id: "common_restrictions",
              type: "points",
              heading: {
                en: "Typical Restrictions",
                hi: "सामान्य प्रतिबंध",
                ur: "عام پابندیاں",
              },
              points: [
                {
                  bold: { en: "No violence", hi: "हिंसा नहीं", ur: "تشدد نہیں" },
                  text: { en: "The respondent may be restrained from committing or abetting domestic violence.", hi: "प्रतिवादी को घरेलू हिंसा करने या उसमें सहायता से रोका जा सकता है।", ur: "مدعا علیہ کو گھریلو تشدد کرنے یا اس میں مدد دینے سے روکا جا سکتا ہے۔" },
                },
                {
                  bold: { en: "No contact or interference", hi: "संपर्क या हस्तक्षेप नहीं", ur: "رابطہ یا مداخلت نہیں" },
                  text: { en: "The respondent may be stopped from contacting, visiting, or disturbing the aggrieved person.", hi: "प्रतिवादी को पीड़िता से संपर्क करने, उसके पास जाने या उसे परेशान करने से रोका जा सकता है।", ur: "مدعا علیہ کو متاثرہ سے رابطہ کرنے، اس کے پاس جانے، یا اسے پریشان کرنے سے روکا جا سکتا ہے۔" },
                },
                {
                  bold: { en: "Protection of assets", hi: "संपत्ति की रक्षा", ur: "املاک کا تحفظ" },
                  text: { en: "The order can restrain alienation of shared assets, bank accounts, or stridhan.", hi: "आदेश साझा संपत्ति, बैंक खातों या स्त्रीधन के हस्तांतरण को रोक सकता है।", ur: "حکم مشترکہ املاک، بینک کھاتوں، یا استری دھن کی منتقلی کو روک سکتا ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "dv_residence_orders",
          icon: "home_work",
          title: {
            en: "Residence Orders",
            hi: "निवास आदेश",
            ur: "رہائشی احکامات",
          },
          subtitle: {
            en: "Sections 17 and 19 protect residence in the shared household",
            hi: "धारा 17 और 19 साझा घर में रहने के अधिकार की रक्षा करती हैं",
            ur: "دفعہ 17 اور 19 مشترکہ گھر میں رہائش کے حق کا تحفظ کرتی ہیں",
          },
          sections: [
            {
              id: "residence_right",
              type: "constitutional_text",
              heading: {
                en: "Right to Reside",
                hi: "रहने का अधिकार",
                ur: "رہنے کا حق",
              },
              text: {
                en: "Section 17 recognises the aggrieved woman's right to reside in the shared household, and section 19 empowers the Magistrate to pass residence orders to protect that right.",
                hi: "धारा 17 पीड़ित महिला के साझा घर में रहने के अधिकार को मान्यता देती है और धारा 19 मजिस्ट्रेट को उस अधिकार की रक्षा हेतु निवास आदेश पारित करने की शक्ति देती है।",
                ur: "دفعہ 17 متاثرہ عورت کے مشترکہ گھر میں رہائش کے حق کو تسلیم کرتی ہے، اور دفعہ 19 مجسٹریٹ کو اس حق کے تحفظ کے لیے رہائشی احکامات جاری کرنے کا اختیار دیتی ہے۔",
              },
            },
            {
              id: "residence_measures",
              type: "points",
              heading: {
                en: "What a Residence Order May Do",
                hi: "निवास आदेश क्या कर सकता है",
                ur: "رہائشی حکم کیا کر سکتا ہے",
              },
              points: [
                {
                  bold: { en: "Prevent dispossession", hi: "बेदखली रोकना", ur: "بے دخلی روکنا" },
                  text: { en: "Restrains dispossession or disturbance of possession from the shared household.", hi: "साझा घर से बेदखली या कब्जे में बाधा को रोकता है।", ur: "مشترکہ گھر سے بے دخلی یا قبضے میں مداخلت کو روکتا ہے۔" },
                },
                {
                  bold: { en: "Restrict entry or alienation", hi: "प्रवेश या हस्तांतरण पर रोक", ur: "داخلے یا منتقلی پر پابندی" },
                  text: { en: "May restrict entry of the respondent or prevent disposal of the household.", hi: "प्रतिवादी के प्रवेश को सीमित कर सकता है या घर के निपटान को रोक सकता है।", ur: "مدعا علیہ کے داخلے کو محدود کر سکتا ہے یا گھر کے تصرف کو روک سکتا ہے۔" },
                },
                {
                  bold: { en: "Alternate accommodation", hi: "वैकल्पिक आवास", ur: "متبادل رہائش" },
                  text: { en: "May direct similar alternate accommodation or rent where required.", hi: "आवश्यक होने पर समान वैकल्पिक आवास या किराया दिलाया जा सकता है।", ur: "ضرورت پڑنے پر مماثل متبادل رہائش یا کرایہ دلایا جا سکتا ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "dv_monetary_reliefs",
          icon: "payments",
          title: {
            en: "Monetary Reliefs",
            hi: "आर्थिक राहत",
            ur: "مالی امداد",
          },
          subtitle: {
            en: "Section 20 relief for expenses, losses, maintenance, and financial harm",
            hi: "धारा 20 के अंतर्गत खर्च, हानि, भरण-पोषण और आर्थिक क्षति के लिए राहत",
            ur: "دفعہ 20 کے تحت اخراجات، نقصان، نان نفقہ، اور مالی ضرر کے لیے امداد",
          },
          sections: [
            {
              id: "section_20",
              type: "constitutional_text",
              heading: {
                en: "Section 20 DV Act",
                hi: "धारा 20 डीवी अधिनियम",
                ur: "دفعہ 20 ڈی وی ایکٹ",
              },
              text: {
                en: "The Magistrate may direct payment of monetary relief to meet expenses and losses suffered because of domestic violence, including maintenance for the aggrieved woman and her children.",
                hi: "मजिस्ट्रेट घरेलू हिंसा के कारण हुए खर्च और नुकसान की पूर्ति के लिए आर्थिक राहत देने का निर्देश दे सकता है, जिसमें पीड़ित महिला और उसके बच्चों का भरण-पोषण भी शामिल है।",
                ur: "مجسٹریٹ گھریلو تشدد کے باعث ہونے والے اخراجات اور نقصانات کی تلافی کے لیے مالی امداد کا حکم دے سکتا ہے، جس میں متاثرہ عورت اور اس کے بچوں کا نان نفقہ بھی شامل ہے۔",
              },
            },
            {
              id: "covered_losses",
              type: "points",
              heading: {
                en: "What Monetary Relief Can Cover",
                hi: "आर्थिक राहत किन बातों को कवर कर सकती है",
                ur: "مالی امداد کن چیزوں کا احاطہ کر سکتی ہے",
              },
              points: [
                {
                  bold: { en: "Maintenance", hi: "भरण-पोषण", ur: "نان نفقہ" },
                  text: { en: "Basic financial support for the woman and children.", hi: "महिला और बच्चों के लिए मूल आर्थिक सहायता।", ur: "عورت اور بچوں کے لیے بنیادی مالی مدد۔" },
                },
                {
                  bold: { en: "Medical expenses", hi: "चिकित्सा खर्च", ur: "علاج کے اخراجات" },
                  text: { en: "Treatment costs arising from abuse or injury.", hi: "शोषण या चोट से उत्पन्न उपचार का खर्च।", ur: "زیادتی یا چوٹ سے پیدا ہونے والے علاج کے اخراجات۔" },
                },
                {
                  bold: { en: "Loss or damage", hi: "नुकसान या क्षति", ur: "نقصان یا خرابی" },
                  text: { en: "Loss of earnings, property damage, or destruction/removal of assets.", hi: "आय की हानि, संपत्ति की क्षति या संपत्ति के विनाश/हटाए जाने की क्षति।", ur: "آمدنی کا نقصان، جائیداد کا نقصان، یا املاک کی تباہی / ہٹائے جانے کا نقصان۔" },
                },
              ],
            },
          ],
        },
        {
          id: "dv_custody_orders",
          icon: "family_restroom",
          title: {
            en: "Custody Orders",
            hi: "अभिरक्षा आदेश",
            ur: "تحویل کے احکامات",
          },
          subtitle: {
            en: "Section 21 temporary custody relief for children",
            hi: "धारा 21 के अंतर्गत बच्चों की अस्थायी अभिरक्षा राहत",
            ur: "دفعہ 21 کے تحت بچوں کی عارضی تحویل کی امداد",
          },
          sections: [
            {
              id: "section_21",
              type: "constitutional_text",
              heading: {
                en: "Section 21 DV Act",
                hi: "धारा 21 डीवी अधिनियम",
                ur: "دفعہ 21 ڈی وی ایکٹ",
              },
              text: {
                en: "The Magistrate may grant temporary custody of children to the aggrieved person or the person making an application on her behalf.",
                hi: "मजिस्ट्रेट बच्चों की अस्थायी अभिरक्षा पीड़ित महिला या उसकी ओर से आवेदन करने वाले व्यक्ति को दे सकता है।",
                ur: "مجسٹریٹ بچوں کی عارضی تحویل متاثرہ عورت یا اس کی طرف سے درخواست دینے والے شخص کو دے سکتا ہے۔",
              },
            },
            {
              id: "visitation",
              type: "text",
              heading: {
                en: "Visitation and Safety",
                hi: "मुलाक़ात और सुरक्षा",
                ur: "ملاقات اور تحفظ",
              },
              text: {
                en: "The court may regulate or refuse visitation where contact would be harmful to the woman or child.",
                hi: "यदि संपर्क महिला या बच्चे के लिए हानिकारक हो, तो न्यायालय मुलाक़ात को नियंत्रित या अस्वीकार कर सकता है।",
                ur: "اگر رابطہ عورت یا بچے کے لیے نقصان دہ ہو تو عدالت ملاقات کو منظم یا مسترد کر سکتی ہے۔",
              },
            },
          ],
        },
      ],
    },

    {
      id: "cruelty_to_women",
      icon: "warning",
      label: {
        en: "Cruelty to Women",
        hi: "महिला के प्रति क्रूरता",
        ur: "عورت کے ساتھ ظلم",
      },
      description: {
        en: "Sections 85 and 86 BNS on cruelty by husband or relatives of husband",
        hi: "बीएनएस की धारा 85 और 86 के तहत पति या उसके रिश्तेदारों द्वारा क्रूरता",
        ur: "بی این ایس کی دفعات 85 اور 86 کے تحت شوہر یا اس کے رشتہ داروں کی جانب سے ظلم",
      },
      items: [
        {
          id: "cruelty_kinds",
          icon: "category",
          title: {
            en: "Kinds of Cruelty",
            hi: "क्रूरता के प्रकार",
            ur: "ظلم کی اقسام",
          },
          subtitle: {
            en: "Section 86 BNS and the broad definition of cruelty",
            hi: "बीएनएस की धारा 86 और क्रूरता की व्यापक परिभाषा",
            ur: "بی این ایس کی دفعہ 86 اور ظلم کی وسیع تعریف",
          },
          sections: [
            {
              id: "section_86_text",
              type: "constitutional_text",
              heading: {
                en: "Section 86 BNS",
                hi: "धारा 86 बीएनएस",
                ur: "دفعہ 86 بی این ایس",
              },
              text: {
                en: "Cruelty includes wilful conduct likely to drive the woman to suicide or cause grave injury or danger to her life, limb, or mental or physical health, and harassment connected to unlawful property or dowry demands.",
                hi: "क्रूरता में ऐसा जानबूझकर किया गया आचरण शामिल है जो महिला को आत्महत्या के लिए उकसा सकता है या उसके जीवन, अंग, मानसिक या शारीरिक स्वास्थ्य को गंभीर क्षति या खतरे में डाल सकता है, तथा अवैध संपत्ति या दहेज की मांग से जुड़ी हेरासानी भी।",
                ur: "ظلم میں ایسا دانستہ رویہ شامل ہے جو عورت کو خودکشی پر مجبور کر سکتا ہو یا اس کی زندگی، اعضا، ذہنی یا جسمانی صحت کو شدید نقصان یا خطرے میں ڈال سکتا ہو، اور غیر قانونی جائیداد یا دہیز کے مطالبے سے منسلک ہراسانی بھی شامل ہے۔",
              },
            },
            {
              id: "types",
              type: "points",
              heading: {
                en: "Practical Types of Cruelty",
                hi: "क्रूरता के व्यावहारिक रूप",
                ur: "ظلم کی عملی شکلیں",
              },
              points: [
                {
                  bold: { en: "Physical harm", hi: "शारीरिक क्षति", ur: "جسمانی نقصان" },
                  text: { en: "Violence, injury, or physical abuse.", hi: "हिंसा, चोट या शारीरिक शोषण।", ur: "تشدد، چوٹ، یا جسمانی زیادتی۔" },
                },
                {
                  bold: { en: "Mental or emotional harm", hi: "मानसिक या भावनात्मक क्षति", ur: "ذہنی یا جذباتی نقصان" },
                  text: { en: "Threats, humiliation, intimidation, or severe mental distress.", hi: "धमकी, अपमान, डराना या गंभीर मानसिक कष्ट।", ur: "دھمکیاں، تذلیل، ڈرانا، یا شدید ذہنی اذیت۔" },
                },
                {
                  bold: { en: "Economic pressure", hi: "आर्थिक दबाव", ur: "معاشی دباؤ" },
                  text: { en: "Control over money, property, or basic resources.", hi: "धन, संपत्ति या बुनियादी संसाधनों पर नियंत्रण।", ur: "پیسے، جائیداد، یا بنیادی وسائل پر کنٹرول۔" },
                },
                {
                  bold: { en: "Dowry-linked harassment", hi: "दहेज से जुड़ी हेरासानी", ur: "دہیز سے منسلک ہراسانی" },
                  text: { en: "Pressure or harassment to extract property or valuable security.", hi: "संपत्ति या मूल्यवान सुरक्षा लेने के लिए दबाव या उत्पीड़न।", ur: "جائیداد یا قیمتی ضمانت لینے کے لیے دباؤ یا ہراسانی۔" },
                },
              ],
            },
          ],
        },
        {
          id: "cruelty_punishment",
          icon: "balance",
          title: {
            en: "Punishment for Cruelty",
            hi: "क्रूरता की सज़ा",
            ur: "ظلم کی سزا",
          },
          subtitle: {
            en: "Section 85 BNS punishment for husband or relatives of husband",
            hi: "पति या उसके रिश्तेदारों के लिए बीएनएस की धारा 85 की सज़ा",
            ur: "شوہر یا اس کے رشتہ داروں کے لیے بی این ایس کی دفعہ 85 کی سزا",
          },
          sections: [
            {
              id: "punishment_text",
              type: "constitutional_text",
              heading: {
                en: "Section 85 BNS",
                hi: "धारा 85 बीएनएस",
                ur: "دفعہ 85 بی این ایس",
              },
              text: {
                en: "A husband or relative of the husband who subjects a woman to cruelty is punishable with imprisonment up to three years and fine.",
                hi: "जो पति या पति का रिश्तेदार महिला को क्रूरता का शिकार बनाता है, वह तीन वर्ष तक के कारावास और जुर्माने से दंडनीय है।",
                ur: "جو شوہر یا شوہر کا رشتہ دار عورت کو ظلم کا نشانہ بناتا ہے، وہ تین سال تک قید اور جرمانے سے قابل سزا ہے۔",
              },
            },
            {
              id: "who_can_be_punished",
              type: "points",
              heading: {
                en: "Who May Be Punished",
                hi: "किन्हें दंडित किया जा सकता है",
                ur: "کنہیں سزا دی جا سکتی ہے",
              },
              points: [
                {
                  bold: { en: "Husband", hi: "पति", ur: "شوہر" },
                  text: { en: "Where he commits cruelty within the meaning of section 86.", hi: "जहाँ वह धारा 86 के अर्थ में क्रूरता करता है।", ur: "جہاں وہ دفعہ 86 کے مفہوم میں ظلم کرے۔" },
                },
                {
                  bold: { en: "Husband's relative", hi: "पति का रिश्तेदार", ur: "شوہر کا رشتہ دار" },
                  text: { en: "Any relative who subjects the woman to the same prohibited conduct.", hi: "कोई भी रिश्तेदार जो महिला को ऐसे ही निषिद्ध आचरण का शिकार बनाए।", ur: "کوئی بھی رشتہ دار جو عورت کو اسی ممنوعہ رویے کا نشانہ بنائے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "cruelty_who_can_file",
          icon: "person",
          title: {
            en: "Who Can File a Complaint for Cruelty",
            hi: "क्रूरता की शिकायत कौन कर सकता है",
            ur: "ظلم کی شکایت کون کر سکتا ہے",
          },
          subtitle: {
            en: "Section 220 BNSS and prosecution rules for section 85 BNS offences",
            hi: "धारा 85 बीएनएस के अपराधों हेतु बीएनएसएस की धारा 220 और अभियोजन नियम",
            ur: "دفعہ 85 بی این ایس کے جرائم کے لیے بی این ایس ایس کی دفعہ 220 اور استغاثہ کے قواعد",
          },
          sections: [
            {
              id: "section_220_rule",
              type: "constitutional_text",
              heading: {
                en: "Section 220 BNSS",
                hi: "धारा 220 बीएनएसएस",
                ur: "دفعہ 220 بی این ایس ایس",
              },
              text: {
                en: "Prosecution for offences under section 85 BNS is typically initiated through complaint or FIR by the aggrieved woman or specified close relatives, with wider relatives requiring court permission.",
                hi: "धारा 85 बीएनएस के अपराधों के लिए अभियोजन सामान्यतः पीड़ित महिला या निर्दिष्ट निकट संबंधियों द्वारा शिकायत या एफआईआर से शुरू होता है, जबकि अन्य रिश्तेदारों को न्यायालय की अनुमति की आवश्यकता हो सकती है।",
                ur: "دفعہ 85 بی این ایس کے جرائم کے لیے استغاثہ عموماً متاثرہ عورت یا مقررہ قریبی رشتہ داروں کی شکایت یا ایف آئی آر سے شروع ہوتا ہے، جبکہ دیگر رشتہ داروں کو عدالت کی اجازت درکار ہو سکتی ہے۔",
              },
            },
            {
              id: "eligible_persons",
              type: "points",
              heading: {
                en: "Who Commonly May File",
                hi: "आम तौर पर कौन शिकायत कर सकता है",
                ur: "عام طور پر کون شکایت کر سکتا ہے",
              },
              points: [
                {
                  bold: { en: "Aggrieved woman", hi: "पीड़ित महिला", ur: "متاثرہ عورت" },
                  text: { en: "The married woman herself.", hi: "स्वयं विवाहित महिला।", ur: "خود شادی شدہ عورت۔" },
                },
                {
                  bold: { en: "Immediate family", hi: "निकट परिवार", ur: "قریبی خاندان" },
                  text: { en: "Father, mother, brother, sister, and other specifically recognised relatives.", hi: "पिता, माता, भाई, बहन और अन्य विशेष रूप से मान्य रिश्तेदार।", ur: "والد، والدہ، بھائی، بہن، اور دیگر مخصوص طور پر تسلیم شدہ رشتہ دار۔" },
                },
                {
                  bold: { en: "Other relatives with permission", hi: "अन्य रिश्तेदार, अनुमति सहित", ur: "دیگر رشتہ دار، اجازت کے ساتھ" },
                  text: { en: "Other related persons by blood, marriage, or adoption may require prior permission of the court.", hi: "रक्त, विवाह या दत्तक संबंध से जुड़े अन्य लोगों को न्यायालय की पूर्व अनुमति की आवश्यकता हो सकती है।", ur: "خون، شادی، یا منہ بولے رشتے سے متعلق دیگر افراد کو عدالت کی پیشگی اجازت درکار ہو سکتی ہے۔" },
                },
              ],
            },
          ],
        },
        {
          id: "cruelty_fir_procedure",
          icon: "description",
          title: {
            en: "Procedure for FIR or Criminal Complaint",
            hi: "एफआईआर या आपराधिक शिकायत की प्रक्रिया",
            ur: "ایف آئی آر یا فوجداری شکایت کا طریقہ کار",
          },
          subtitle: {
            en: "How criminal proceedings for cruelty are generally initiated",
            hi: "क्रूरता के लिए आपराधिक कार्यवाही सामान्यतः कैसे शुरू होती है",
            ur: "ظلم کے لیے فوجداری کارروائی عموماً کیسے شروع ہوتی ہے",
          },
          sections: [
            {
              id: "procedure_steps",
              type: "points",
              heading: {
                en: "Basic Procedure",
                hi: "मूल प्रक्रिया",
                ur: "بنیادی طریقہ کار",
              },
              points: [
                {
                  bold: { en: "FIR or complaint", hi: "एफआईआर या शिकायत", ur: "ایف آئی آر یا شکایت" },
                  text: { en: "Criminal proceedings usually begin with lodging an FIR or formal complaint.", hi: "आपराधिक कार्यवाही सामान्यतः एफआईआर या औपचारिक शिकायत से शुरू होती है।", ur: "فوجداری کارروائی عموماً ایف آئی آر یا رسمی شکایت سے شروع ہوتی ہے۔" },
                },
                {
                  bold: { en: "Authorised complainant", hi: "अधिकृत शिकायतकर्ता", ur: "مجاز شکایت کنندہ" },
                  text: { en: "The complaint should be lodged by the aggrieved woman or another person recognised by law.", hi: "शिकायत पीड़ित महिला या कानून द्वारा मान्य अन्य व्यक्ति द्वारा की जानी चाहिए।", ur: "شکایت متاثرہ عورت یا قانوناً تسلیم شدہ دوسرے شخص کی جانب سے کی جانی چاہیے۔" },
                },
                {
                  bold: { en: "Police and court process", hi: "पुलिस और न्यायालय प्रक्रिया", ur: "پولیس اور عدالتی عمل" },
                  text: { en: "Police registration and investigation are followed by the usual criminal court process.", hi: "पुलिस पंजीकरण और जांच के बाद सामान्य आपराधिक न्यायालय प्रक्रिया चलती है।", ur: "پولیس میں اندراج اور تفتیش کے بعد معمول کا فوجداری عدالتی عمل چلتا ہے۔" },
                },
              ],
            },
            {
              id: "mandatory_note",
              type: "highlight",
              heading: {
                en: "Why Filing Matters",
                hi: "दर्ज कराना क्यों महत्वपूर्ण है",
                ur: "درج کرانا کیوں اہم ہے",
              },
              text: {
                en: "A formal complaint or FIR creates the procedural foundation for investigation, evidence collection, and prosecution.",
                hi: "औपचारिक शिकायत या एफआईआर जांच, साक्ष्य संग्रह और अभियोजन के लिए प्रक्रियात्मक आधार तैयार करती है।",
                ur: "رسمی شکایت یا ایف آئی آر تفتیش، شواہد اکٹھا کرنے، اور استغاثہ کے لیے طریقہ کار کی بنیاد فراہم کرتی ہے۔",
              },
            },
          ],
        },
      ],
    },

    {
      id: "dowry_death",
      icon: "report",
      label: {
        en: "Dowry Death",
        hi: "दहेज मृत्यु",
        ur: "دہیز موت",
      },
      description: {
        en: "Section 80 BNS and presumptions, punishment, and complaint pathways in dowry death cases",
        hi: "बीएनएस की धारा 80 के अंतर्गत दहेज मृत्यु के मामलों में दंड, वैधानिक अनुमान और शिकायत के मार्ग",
        ur: "بی این ایس کی دفعہ 80 کے تحت دہیز موت کے معاملات میں سزا، قانونی مفروضہ، اور شکایت کے راستے",
      },
      items: [
        {
          id: "dowry_death_punishment",
          icon: "balance",
          title: {
            en: "Dowry Death and Punishment",
            hi: "दहेज मृत्यु और सज़ा",
            ur: "دہیز موت اور سزا",
          },
          subtitle: {
            en: "Section 80 BNS and punishment for dowry death",
            hi: "बीएनएस की धारा 80 और दहेज मृत्यु की सज़ा",
            ur: "بی این ایس کی دفعہ 80 اور دہیز موت کی سزا",
          },
          sections: [
            {
              id: "section_80_text",
              type: "constitutional_text",
              heading: {
                en: "Section 80 BNS",
                hi: "धारा 80 बीएनएस",
                ur: "دفعہ 80 بی این ایس",
              },
              text: {
                en: "Where the death of a woman is caused by burns, bodily injury, or otherwise than under normal circumstances within seven years of marriage, and it is shown that soon before her death she was subjected to cruelty or harassment for or in connection with dowry demand, it is dowry death.",
                hi: "यदि किसी महिला की मृत्यु विवाह के सात वर्ष के भीतर जलने, शारीरिक चोट या असामान्य परिस्थितियों में होती है, और यह दिखाया जाता है कि उसकी मृत्यु से कुछ समय पहले उसे दहेज की मांग के लिए या उसके संबंध में क्रूरता या उत्पीड़न का सामना करना पड़ा था, तो वह दहेज मृत्यु है।",
                ur: "اگر کسی عورت کی موت شادی کے سات سال کے اندر جلنے، جسمانی چوٹ، یا غیر معمولی حالات میں ہو، اور یہ دکھایا جائے کہ اس کی موت سے کچھ پہلے اسے دہیز کے مطالبے کے لیے یا اس کے سلسلے میں ظلم یا ہراسانی کا سامنا تھا، تو یہ دہیز موت ہے۔",
              },
            },
            {
              id: "punishment",
              type: "highlight",
              heading: {
                en: "Punishment",
                hi: "सज़ा",
                ur: "سزا",
              },
              text: {
                en: "Dowry death is punishable with imprisonment of not less than seven years and which may extend to imprisonment for life.",
                hi: "दहेज मृत्यु सात वर्ष से कम नहीं और आजीवन कारावास तक की सज़ा से दंडनीय है।",
                ur: "دہیز موت کم از کم سات سال اور عمر قید تک کی سزا سے قابل تعزیر ہے۔",
              },
            },
            {
              id: "presumption",
              type: "text",
              heading: {
                en: "Presumption Under Evidence Law",
                hi: "साक्ष्य कानून के अंतर्गत अनुमान",
                ur: "شہادت کے قانون کے تحت مفروضہ",
              },
              text: {
                en: "Section 118 of the Bharatiya Sakshya Adhiniyam, 2023 directs the court to presume dowry death where the statutory conditions are shown.",
                hi: "भारतीय साक्ष्य अधिनियम, 2023 की धारा 118 न्यायालय को निर्देश देती है कि वैधानिक शर्तें सिद्ध होने पर दहेज मृत्यु का अनुमान लगाया जाए।",
                ur: "بھارتیہ ساکشیہ ادھینیم، 2023 کی دفعہ 118 عدالت کو ہدایت دیتی ہے کہ قانونی شرائط ثابت ہونے پر دہیز موت کا مفروضہ قائم کیا جائے۔",
              },
            },
          ],
        },
        {
          id: "dowry_death_where_to_file",
          icon: "report",
          title: {
            en: "Where to File Complaint in Dowry Death Cases",
            hi: "दहेज मृत्यु के मामलों में शिकायत कहाँ करें",
            ur: "دہیز موت کے مقدمات میں شکایت کہاں درج کریں",
          },
          subtitle: {
            en: "Police, magistrate, and specialised authorities who may be approached",
            hi: "पुलिस, मजिस्ट्रेट और वे विशेष प्राधिकरण जिनसे संपर्क किया जा सकता है",
            ur: "پولیس، مجسٹریٹ، اور وہ خصوصی حکام جن سے رجوع کیا جا سکتا ہے",
          },
          sections: [
            {
              id: "authorities",
              type: "points",
              heading: {
                en: "Common Authorities to Approach",
                hi: "संपर्क करने योग्य सामान्य प्राधिकरण",
                ur: "رجوع کرنے کے لیے عام حکام",
              },
              points: [
                {
                  bold: { en: "Police station", hi: "पुलिस थाना", ur: "پولیس اسٹیشن" },
                  text: { en: "An FIR should ordinarily be lodged with the police where the death occurred or relevant facts arose.", hi: "सामान्यतः उस स्थान के पुलिस थाने में एफआईआर दर्ज की जानी चाहिए जहाँ मृत्यु हुई या प्रासंगिक तथ्य उत्पन्न हुए।", ur: "عموماً اس مقام کے پولیس اسٹیشن میں ایف آئی آر درج کی جانی چاہیے جہاں موت واقع ہوئی یا متعلقہ حقائق سامنے آئے۔" },
                },
                {
                  bold: { en: "Magistrate and inquest system", hi: "मजिस्ट्रेट और पंचनामा प्रणाली", ur: "مجسٹریٹ اور انکوائری نظام" },
                  text: { en: "Unnatural death of a married woman may trigger magisterial and police inquiry processes.", hi: "विवाहित महिला की असामान्य मृत्यु मजिस्ट्रेटी और पुलिस जांच प्रक्रियाओं को सक्रिय कर सकती है।", ur: "شادی شدہ عورت کی غیر معمولی موت مجسٹریٹ اور پولیس کی انکوائری کے عمل کو متحرک کر سکتی ہے۔" },
                },
                {
                  bold: { en: "Women-related support bodies", hi: "महिला सहायता निकाय", ur: "خواتین سے متعلق امدادی ادارے" },
                  text: { en: "Women's commissions, welfare bodies, and legal aid services may assist families in pursuing the case.", hi: "महिला आयोग, कल्याण संस्थाएँ और विधिक सहायता सेवाएँ परिवार को मामला आगे बढ़ाने में मदद कर सकती हैं।", ur: "خواتین کمیشن، فلاحی ادارے، اور قانونی امداد کی خدمات خاندان کو مقدمہ آگے بڑھانے میں مدد دے سکتی ہیں۔" },
                },
              ],
            },
            {
              id: "urgency_note",
              type: "highlight",
              heading: {
                en: "Urgency Matters",
                hi: "तत्कालता महत्वपूर्ण है",
                ur: "فوریت اہم ہے",
              },
              text: {
                en: "Prompt reporting helps preserve medical, forensic, and scene evidence in suspicious death cases.",
                hi: "तत्काल रिपोर्ट करने से संदिग्ध मृत्यु के मामलों में चिकित्सीय, फॉरेंसिक और घटनास्थल संबंधी साक्ष्य सुरक्षित रखने में मदद मिलती है।",
                ur: "فوری اطلاع دینے سے مشکوک موت کے معاملات میں طبی، فارنزک، اور جائے وقوعہ کے شواہد محفوظ رکھنے میں مدد ملتی ہے۔",
              },
            },
          ],
        },
        {
          id: "dowry_death_how_to_file",
          icon: "description",
          title: {
            en: "How to File a Dowry Death Case",
            hi: "दहेज मृत्यु का मामला कैसे दर्ज करें",
            ur: "دہیز موت کا مقدمہ کیسے درج کریں",
          },
          subtitle: {
            en: "Basic procedural path for reporting, investigation, and prosecution",
            hi: "रिपोर्टिंग, जांच और अभियोजन का मूल प्रक्रियात्मक मार्ग",
            ur: "رپورٹنگ، تفتیش، اور استغاثہ کا بنیادی طریقہ کار",
          },
          sections: [
            {
              id: "steps",
              type: "points",
              heading: {
                en: "Typical Steps",
                hi: "सामान्य चरण",
                ur: "عام مراحل",
              },
              points: [
                {
                  bold: { en: "Report the death", hi: "मृत्यु की सूचना दें", ur: "موت کی اطلاع دیں" },
                  text: { en: "Immediately report suspicious or unnatural death to police.", hi: "संदिग्ध या असामान्य मृत्यु की तुरंत पुलिस को सूचना दें।", ur: "مشکوک یا غیر معمولی موت کی فوری اطلاع پولیس کو دیں۔" },
                },
                {
                  bold: { en: "Record dowry-related history", hi: "दहेज से जुड़ा इतिहास दर्ज कराएँ", ur: "دہیز سے متعلق سابقہ حالات درج کرائیں" },
                  text: { en: "Mention earlier cruelty, harassment, or dowry demand, especially recent incidents before death.", hi: "मृत्यु से पहले की हालिया घटनाओं सहित पूर्व क्रूरता, उत्पीड़न या दहेज मांग का उल्लेख करें।", ur: "موت سے پہلے کے حالیہ واقعات سمیت سابقہ ظلم، ہراسانی، یا دہیز کے مطالبات کا ذکر کریں۔" },
                },
                {
                  bold: { en: "Support investigation", hi: "जांच में सहयोग करें", ur: "تفتیش میں تعاون کریں" },
                  text: { en: "Witness accounts, messages, medical material, and other records may help establish the chain of harassment.", hi: "गवाहों के बयान, संदेश, चिकित्सीय सामग्री और अन्य अभिलेख उत्पीड़न की श्रृंखला सिद्ध करने में मदद कर सकते हैं।", ur: "گواہوں کے بیانات، پیغامات، طبی مواد، اور دیگر ریکارڈ ہراسانی کے سلسلے کو ثابت کرنے میں مدد دے سکتے ہیں۔" },
                },
              ],
            },
            {
              id: "legal_note",
              type: "highlight",
              heading: {
                en: "Legal Importance of 'Soon Before Death'",
                hi: "'मृत्यु से कुछ समय पहले' का कानूनी महत्व",
                ur: "'موت سے کچھ پہلے' کی قانونی اہمیت",
              },
              text: {
                en: "The connection between dowry-related cruelty and the period just before death is often central to proving dowry death.",
                hi: "दहेज-संबंधित क्रूरता और मृत्यु से ठीक पहले के समय के बीच संबंध, दहेज मृत्यु सिद्ध करने में अत्यंत महत्वपूर्ण होता है।",
                ur: "دہیز سے متعلق ظلم اور موت سے کچھ پہلے کے عرصے کے درمیان تعلق، دہیز موت ثابت کرنے میں اکثر مرکزی حیثیت رکھتا ہے۔",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default MARRIAGE_OFFENSES_DATA;
