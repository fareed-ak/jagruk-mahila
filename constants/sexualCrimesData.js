// ============================================================
// constants/sexualCrimesData.js
// Jagruk Mahila - Sexual Crimes Against Women
//
// Same structure as constitutionData.js / reproductiveRightsData.js / bnssData.js
// Section types: constitutional_text | points | highlight | text
// Access: field[currentLanguage] || field.en
//
// Translation status:
// [x] English complete
// [ ] Hindi pending
// [ ] Urdu pending
// ============================================================

export const SEXUAL_CRIMES_DATA = {
  id: 'sexual_crimes',
  icon: 'shield',
  label: {
    en: 'Sexual Crimes Against Women',
    hi: 'महिलाओं के विरुद्ध यौन अपराध',
    ur: 'خواتین کے خلاف جنسی جرائم',
  },
  description: {
    en: 'Overview of sexual offences, survivor rights, and workplace protections under Indian law',
    hi: 'भारतीय कानून के अंतर्गत यौन अपराधों, पीड़िता के अधिकारों और कार्यस्थल सुरक्षा का संक्षिप्त परिचय',
    ur: 'ہندوستانی قانون کے تحت جنسی جرائم، متاثرہ کے حقوق، اور کام کی جگہ کے تحفظات کا خلاصہ',
  },

  subcategories: [
    {
      id: 'rape',
      icon: 'gavel',
      label: {
        en: 'Rape and Related Offences',
        hi: 'बलात्कार और संबंधित अपराध',
        ur: 'زیادتی اور متعلقہ جرائم',
      },
      description: {
        en: 'Definition of rape, punishment, abuse of authority, gang rape, and survivor rights',
        hi: 'बलात्कार की परिभाषा, सज़ा, अधिकार का दुरुपयोग, सामूहिक बलात्कार और पीड़िता के अधिकार',
        ur: 'زیادتی کی تعریف، سزا، اختیار کا غلط استعمال، اجتماعی زیادتی، اور متاثرہ کے حقوق',
      },
      items: [
        {
          id: 'rape_essential_ingredients',
          icon: 'description',
          title: {
            en: 'Essential Ingredients of Rape',
            hi: 'बलात्कार के आवश्यक तत्व',
            ur: 'زیادتی کے بنیادی عناصر',
          },
          subtitle: {
            en: 'Section 63 BNS and the core legal elements of the offence',
            hi: 'बीएनएस की धारा 63 और इस अपराध के मुख्य कानूनी तत्व',
            ur: 'بی این ایس کی دفعہ 63 اور اس جرم کے بنیادی قانونی عناصر',
          },
          sections: [
            {
              id: 'section_63_text',
              type: 'constitutional_text',
              heading: {
                en: 'Legal Basis',
                hi: 'कानूनी आधार',
                ur: 'قانونی بنیاد',
              },
              text: {
                en: 'Section 63 of the Bharatiya Nyaya Sanhita defines rape through specified acts of penetration or oral sexual acts when committed without valid consent or under legally recognised coercive circumstances.',
                hi: 'भारतीय न्याय संहिता की धारा 63 बलात्कार को उन निर्दिष्ट प्रवेशात्मक या मौखिक यौन कृत्यों के रूप में परिभाषित करती है जो वैध सहमति के बिना या कानून द्वारा मान्य दबावपूर्ण परिस्थितियों में किए जाएं।',
                ur: 'بھارتیہ نیائے سنہتا کی دفعہ 63 زیادتی کو ان مخصوص دخولی یا زبانی جنسی اعمال کے ذریعے متعین کرتی ہے جو جائز رضامندی کے بغیر یا قانوناً تسلیم شدہ جبر کی حالت میں کیے جائیں۔',
              },
            },
            {
              id: 'essential_elements',
              type: 'points',
              heading: {
                en: 'Essential Elements',
                hi: 'आवश्यक तत्व',
                ur: 'ضروری عناصر',
              },
              points: [
                {
                  bold: { en: 'Penetration', hi: 'प्रवेश', ur: 'دخول' },
                  text: { en: 'Penetration to any extent is sufficient. Full intercourse is not required for the offence to be made out.', hi: 'किसी भी सीमा तक प्रवेश पर्याप्त है। अपराध सिद्ध करने के लिए पूर्ण संभोग का होना आवश्यक नहीं है।', ur: 'کسی بھی حد تک دخول کافی ہے۔ جرم ثابت ہونے کے لیے مکمل مباشرت ضروری نہیں ہے۔' },
                },
                {
                  bold: { en: 'Lack of consent', hi: 'सहमति का अभाव', ur: 'رضامندی کا فقدان' },
                  text: { en: 'The act must be without free and voluntary consent. Submission obtained through fear, force, fraud, or abuse of power is not valid consent.', hi: 'कृत्य स्वतंत्र और स्वैच्छिक सहमति के बिना होना चाहिए। भय, बल, धोखे या सत्ता के दुरुपयोग से प्राप्त अधीनता वैध सहमति नहीं है।', ur: 'یہ فعل آزاد اور رضاکارانہ رضامندی کے بغیر ہونا چاہیے۔ خوف، طاقت، دھوکے یا اختیار کے غلط استعمال سے حاصل کی گئی رضامندی درست نہیں ہوتی۔' },
                },
                {
                  bold: { en: 'Recognised coercive grounds', hi: 'मान्य दबावपूर्ण आधार', ur: 'تسلیم شدہ جبری بنیادیں' },
                  text: { en: 'The law covers situations involving force, threats, intoxication, unsoundness of mind, deception, or inability to communicate consent.', hi: 'कानून बल, धमकी, नशा, मानसिक असमर्थता, धोखे या सहमति व्यक्त न कर पाने की स्थितियों को शामिल करता है।', ur: 'قانون طاقت، دھمکی، نشہ، ذہنی نااہلی، فریب، یا رضامندی ظاہر نہ کر سکنے والی حالتوں کو شامل کرتا ہے۔' },
                },
                {
                  bold: { en: 'Protected acts', hi: 'आवृत कृत्य', ur: 'محفوظ شدہ اعمال' },
                  text: { en: 'The law covers penile penetration, penetration by objects or body parts, making the woman perform such acts, and oral application to sexual organs in the circumstances defined by law.', hi: 'कानून लिंग द्वारा प्रवेश, वस्तु या शरीर के अंग द्वारा प्रवेश, महिला को ऐसे कृत्य करने के लिए मजबूर करना, और कानून में वर्णित परिस्थितियों में यौन अंगों पर मुख का प्रयोग शामिल करता है।', ur: 'قانون عضو تناسل کے ذریعے دخول، اشیاء یا جسم کے اعضا کے ذریعے دخول، عورت کو ایسے اعمال کرانے، اور قانون میں بیان کردہ حالات میں جنسی اعضا پر منہ لگانے کو شامل کرتا ہے۔' },
                },
              ],
            },
            {
              id: 'practical_note',
              type: 'highlight',
              heading: {
                en: 'Practical Meaning',
                hi: 'व्यावहारिक अर्थ',
                ur: 'عملی مفہوم',
              },
              text: {
                en: 'For conviction, the prosecution must establish the prohibited sexual act and the absence of lawful consent. The law does not require proof of physical resistance from the survivor.',
                hi: 'दोषसिद्धि के लिए अभियोजन को प्रतिबंधित यौन कृत्य और वैध सहमति के अभाव को सिद्ध करना होता है। कानून पीड़िता से शारीरिक प्रतिरोध का प्रमाण नहीं मांगता।',
                ur: 'سزا کے لیے استغاثہ کو ممنوعہ جنسی فعل اور جائز رضامندی کے فقدان کو ثابت کرنا ہوتا ہے۔ قانون متاثرہ سے جسمانی مزاحمت کا ثبوت طلب نہیں کرتا۔',
              },
            },
          ],
        },
        {
          id: 'rape_punishment',
          icon: 'balance',
          title: {
            en: 'Punishment for Rape',
            hi: 'बलात्कार की सज़ा',
            ur: 'زیادتی کی سزا',
          },
          subtitle: {
            en: 'Section 64 BNS and sentencing for rape',
            hi: 'बीएनएस की धारा 64 और बलात्कार के लिए दंड',
            ur: 'بی این ایس کی دفعہ 64 اور زیادتی کی سزا',
          },
          sections: [
            {
              id: 'section_64_overview',
              type: 'text',
              heading: {
                en: 'General Rule',
                hi: 'सामान्य नियम',
                ur: 'عمومی اصول',
              },
              text: {
                en: 'Section 64 prescribes severe punishment for rape and treats it as a grave offence against bodily autonomy and dignity.',
                hi: 'धारा 64 बलात्कार के लिए कठोर सज़ा निर्धारित करती है और इसे शारीरिक स्वायत्तता तथा गरिमा के विरुद्ध गंभीर अपराध मानती है।',
                ur: 'دفعہ 64 زیادتی کے لیے سخت سزا مقرر کرتی ہے اور اسے جسمانی خودمختاری اور وقار کے خلاف سنگین جرم شمار کرتی ہے۔',
              },
            },
            {
              id: 'punishment_breakdown',
              type: 'points',
              heading: {
                en: 'Punishment Structure',
                hi: 'सज़ा की संरचना',
                ur: 'سزا کی ساخت',
              },
              points: [
                {
                  bold: { en: 'Section 64(1)', hi: 'धारा 64(1)', ur: 'دفعہ 64(1)' },
                  text: { en: 'Minimum imprisonment of ten years, extendable to life imprisonment, along with fine.', hi: 'न्यूनतम दस वर्ष का कारावास, जो आजीवन कारावास तक बढ़ाया जा सकता है, तथा जुर्माना।', ur: 'کم از کم دس سال قید، جو عمر قید تک بڑھائی جا سکتی ہے، اور ساتھ میں جرمانہ۔' },
                },
                {
                  bold: { en: 'Section 64(2)', hi: 'धारा 64(2)', ur: 'دفعہ 64(2)' },
                  text: { en: 'In aggravated categories, punishment is not less than ten years and may extend to imprisonment for the remainder of the offender\'s natural life, along with fine.', hi: 'गंभीर परिस्थितियों में सज़ा दस वर्ष से कम नहीं होगी और अपराधी के शेष प्राकृतिक जीवन तक कारावास तथा जुर्माना हो सकता है।', ur: 'سنگین صورتوں میں سزا دس سال سے کم نہیں ہوگی اور مجرم کی باقی قدرتی زندگی تک قید اور جرمانہ ہو سکتا ہے۔' },
                },
              ],
            },
            {
              id: 'sentencing_note',
              type: 'highlight',
              heading: {
                en: 'Sentencing Note',
                hi: 'दंड संबंधी टिप्पणी',
                ur: 'سزا سے متعلق نوٹ',
              },
              text: {
                en: 'The BNS maintains a strict minimum sentence policy for rape. Courts may impose harsher punishment depending on the nature of the offence and aggravating circumstances recognised by law.',
                hi: 'बीएनएस बलात्कार के लिए कठोर न्यूनतम सज़ा की नीति बनाए रखता है। अपराध की प्रकृति और कानून द्वारा मान्य गंभीर परिस्थितियों के आधार पर न्यायालय अधिक कठोर सज़ा दे सकता है।',
                ur: 'بی این ایس زیادتی کے لیے سخت کم از کم سزا کی پالیسی برقرار رکھتا ہے۔ جرم کی نوعیت اور قانوناً تسلیم شدہ سنگین حالات کے مطابق عدالت زیادہ سخت سزا دے سکتی ہے۔',
              },
            },
          ],
        },
        {
          id: 'sexual_intercourse_person_in_authority',
          icon: 'admin_panel_settings',
          title: {
            en: 'Sexual Intercourse by a Person in Authority',
            hi: 'प्राधिकृत व्यक्ति द्वारा यौन संबंध',
            ur: 'اختیار رکھنے والے شخص کے ذریعے جنسی تعلق',
          },
          subtitle: {
            en: 'Section 68 BNS and abuse of authority or fiduciary power',
            hi: 'बीएनएस की धारा 68 और अधिकार या विश्वासगत शक्ति का दुरुपयोग',
            ur: 'بی این ایس کی دفعہ 68 اور اختیار یا امانتی طاقت کا غلط استعمال',
          },
          sections: [
            {
              id: 'section_68_text',
              type: 'constitutional_text',
              heading: {
                en: 'Section 68 BNS',
                hi: 'धारा 68 बीएनएस',
                ur: 'دفعہ 68 بی این ایس',
              },
              text: {
                en: 'Section 68 applies where a person in authority, fiduciary relationship, public office, custodial management, or hospital management abuses that position to induce or seduce a woman to have sexual intercourse, even where the act does not amount to rape.',
                hi: 'धारा 68 वहां लागू होती है जहां अधिकार, विश्वासगत संबंध, लोक पद, अभिरक्षा प्रबंधन या अस्पताल प्रबंधन में बैठा व्यक्ति अपनी स्थिति का दुरुपयोग करके किसी महिला को यौन संबंध के लिए प्रेरित या फुसलाता है, भले ही वह कृत्य बलात्कार की श्रेणी में न आए।',
                ur: 'دفعہ 68 اس وقت لاگو ہوتی ہے جب اختیار، امانتی تعلق، عوامی عہدہ، حراستی انتظام، یا اسپتال انتظامیہ میں موجود شخص اپنی حیثیت کا غلط استعمال کرکے کسی عورت کو جنسی تعلق کے لیے آمادہ یا بہکاتا ہے، خواہ یہ عمل زیادتی کے زمرے میں نہ آتا ہو۔',
              },
            },
            {
              id: 'covered_persons',
              type: 'points',
              heading: {
                en: 'Who Can Be Covered',
                hi: 'किन पर लागू हो सकता है',
                ur: 'کن لوگوں پر لاگو ہو سکتا ہے',
              },
              points: [
                {
                  bold: { en: 'Authority or fiduciary role', hi: 'अधिकार या विश्वासगत भूमिका', ur: 'اختیار یا امانتی کردار' },
                  text: { en: 'A person who occupies a position of trust, dependency, supervision, or influence over the woman.', hi: 'ऐसा व्यक्ति जो महिला पर विश्वास, निर्भरता, पर्यवेक्षण या प्रभाव की स्थिति में हो।', ur: 'ایسا شخص جو عورت پر اعتماد، انحصار، نگرانی، یا اثر و رسوخ کی پوزیشن میں ہو۔' },
                },
                {
                  bold: { en: 'Public servant', hi: 'लोक सेवक', ur: 'سرکاری ملازم' },
                  text: { en: 'A public official who abuses official power or custody-related influence.', hi: 'ऐसा लोक अधिकारी जो आधिकारिक शक्ति या अभिरक्षा से जुड़े प्रभाव का दुरुपयोग करे।', ur: 'ایسا سرکاری افسر جو سرکاری طاقت یا حراست سے متعلق اثر و رسوخ کا غلط استعمال کرے۔' },
                },
                {
                  bold: { en: 'Custodial or institutional management', hi: 'अभिरक्षा या संस्थागत प्रबंधन', ur: 'حراستی یا ادارہ جاتی انتظام' },
                  text: { en: 'This includes management of jails, remand homes, places of custody, or women\'s and children\'s institutions.', hi: 'इसमें जेल, रिमांड होम, अभिरक्षा स्थल या महिला एवं बाल संस्थानों का प्रबंधन शामिल है।', ur: 'اس میں جیلوں، ریمانڈ ہومز، حراستی مقامات، یا خواتین اور بچوں کے اداروں کا انتظام شامل ہے۔' },
                },
                {
                  bold: { en: 'Hospital management or staff', hi: 'अस्पताल प्रबंधन या कर्मचारी', ur: 'اسپتال انتظامیہ یا عملہ' },
                  text: { en: 'A hospital authority or staff member who exploits the woman\'s presence, dependency, or vulnerability.', hi: 'अस्पताल का वह अधिकारी या कर्मचारी जो महिला की उपस्थिति, निर्भरता या असुरक्षा का लाभ उठाए।', ur: 'اسپتال کا وہ افسر یا عملہ جو عورت کی موجودگی، انحصار یا کمزوری کا فائدہ اٹھائے۔' },
                },
              ],
            },
            {
              id: 'punishment',
              type: 'highlight',
              heading: {
                en: 'Punishment',
                hi: 'सज़ा',
                ur: 'سزا',
              },
              text: {
                en: 'Section 68 prescribes rigorous imprisonment of not less than five years and up to ten years, along with fine.',
                hi: 'धारा 68 में कम से कम पांच वर्ष और अधिकतम दस वर्ष तक का कठोर कारावास तथा जुर्माने का प्रावधान है।',
                ur: 'دفعہ 68 میں کم از کم پانچ سال اور زیادہ سے زیادہ دس سال تک سخت قید اور جرمانہ مقرر ہے۔',
              },
            },
          ],
        },
        {
          id: 'gang_rape',
          icon: 'groups',
          title: {
            en: 'Gang Rape',
            hi: 'सामूहिक बलात्कार',
            ur: 'اجتماعی زیادتی',
          },
          subtitle: {
            en: 'Section 70 BNS and punishment for group-based sexual violence',
            hi: 'बीएनएस की धारा 70 और सामूहिक यौन हिंसा के लिए दंड',
            ur: 'بی این ایس کی دفعہ 70 اور گروہی جنسی تشدد کی سزا',
          },
          sections: [
            {
              id: 'section_70_text',
              type: 'constitutional_text',
              heading: {
                en: 'Section 70 BNS',
                hi: 'धारा 70 बीएनएस',
                ur: 'دفعہ 70 بی این ایس',
              },
              text: {
                en: 'Where a woman is raped by one or more persons constituting a group or acting in furtherance of a common intention, each person is deemed to have committed rape.',
                hi: 'जहां किसी महिला के साथ एक समूह बनाने वाले या समान आशय से कार्य करने वाले एक या अधिक व्यक्तियों द्वारा बलात्कार किया जाता है, वहां प्रत्येक व्यक्ति को बलात्कार का दोषी माना जाता है।',
                ur: 'جہاں کسی عورت کے ساتھ ایک گروہ بنانے والے یا مشترکہ نیت کے تحت عمل کرنے والے ایک یا زیادہ افراد زیادتی کریں، وہاں ہر شخص کو زیادتی کا مرتکب سمجھا جائے گا۔',
              },
            },
            {
              id: 'punishment_adult',
              type: 'text',
              heading: {
                en: 'Punishment in General Cases',
                hi: 'सामान्य मामलों में सज़ा',
                ur: 'عام معاملات میں سزا',
              },
              text: {
                en: 'For gang rape of an adult woman, the punishment is rigorous imprisonment of not less than twenty years, extendable to life imprisonment for the remainder of the offender\'s natural life, along with fine.',
                hi: 'वयस्क महिला के साथ सामूहिक बलात्कार के लिए कम से कम बीस वर्ष का कठोर कारावास, जो अपराधी के शेष प्राकृतिक जीवन तक आजीवन कारावास तक बढ़ाया जा सकता है, तथा जुर्माना निर्धारित है।',
                ur: 'بالغ عورت کے ساتھ اجتماعی زیادتی کی سزا کم از کم بیس سال سخت قید ہے، جو مجرم کی باقی قدرتی زندگی تک عمر قید تک بڑھ سکتی ہے، اور ساتھ میں جرمانہ بھی ہوگا۔',
              },
            },
            {
              id: 'punishment_minor',
              type: 'text',
              heading: {
                en: 'When the Victim Is Under Eighteen',
                hi: 'जब पीड़िता अठारह वर्ष से कम हो',
                ur: 'جب متاثرہ کی عمر اٹھارہ سال سے کم ہو',
              },
              text: {
                en: 'If the victim is under eighteen years of age, Section 70 provides imprisonment for life for the remainder of natural life and fine, or death.',
                hi: 'यदि पीड़िता अठारह वर्ष से कम आयु की है, तो धारा 70 शेष प्राकृतिक जीवन तक आजीवन कारावास और जुर्माना, या मृत्यु दंड का प्रावधान करती है।',
                ur: 'اگر متاثرہ کی عمر اٹھارہ سال سے کم ہو تو دفعہ 70 باقی قدرتی زندگی تک عمر قید اور جرمانہ، یا سزائے موت کا انتظام کرتی ہے۔',
              },
            },
            {
              id: 'victim_compensation',
              type: 'highlight',
              heading: {
                en: 'Victim Compensation',
                hi: 'पीड़िता मुआवज़ा',
                ur: 'متاثرہ کا معاوضہ',
              },
              text: {
                en: 'The fine must be just and reasonable to meet medical expenses and rehabilitation, and the fine imposed under the section is to be paid to the victim.',
                hi: 'जुर्माना इतना न्यायसंगत और उचित होना चाहिए कि उससे चिकित्सा खर्च और पुनर्वास की आवश्यकता पूरी हो सके, और यह जुर्माना पीड़िता को दिया जाना चाहिए।',
                ur: 'جرمانہ اتنا منصفانہ اور مناسب ہونا چاہیے کہ طبی اخراجات اور بحالی کی ضروریات پوری ہو سکیں، اور یہ جرمانہ متاثرہ کو ادا کیا جانا چاہیے۔',
              },
            },
          ],
        },
        {
          id: 'rape_victim_rights_overview',
          icon: 'verified_user',
          title: {
            en: 'Rights of a Rape Survivor',
            hi: 'बलात्कार पीड़िता के अधिकार',
            ur: 'زیادتی سے متاثرہ خاتون کے حقوق',
          },
          subtitle: {
            en: 'Key procedural, medical, and trial rights available to survivors',
            hi: 'पीड़िताओं को उपलब्ध प्रमुख प्रक्रियात्मक, चिकित्सीय और मुकदमे से जुड़े अधिकार',
            ur: 'متاثرین کو دستیاب اہم طریقہ کار، طبی، اور عدالتی حقوق',
          },
          sections: [
            {
              id: 'rights_list',
              type: 'points',
              heading: {
                en: 'Core Rights',
                hi: 'मुख्य अधिकार',
                ur: 'بنیادی حقوق',
              },
              points: [
                {
                  bold: { en: 'Zero FIR', hi: 'ज़ीरो एफआईआर', ur: 'زیرو ایف آئی آر' },
                  text: { en: 'A survivor can file an FIR at any police station, even if the crime occurred elsewhere.', hi: 'पीड़िता किसी भी पुलिस थाने में एफआईआर दर्ज करा सकती है, भले ही अपराध कहीं और हुआ हो।', ur: 'متاثرہ کسی بھی پولیس اسٹیشن میں ایف آئی آر درج کرا سکتی ہے، چاہے جرم کہیں اور ہوا ہو۔' },
                },
                {
                  bold: { en: 'Free medical treatment', hi: 'निःशुल्क चिकित्सा उपचार', ur: 'مفت طبی علاج' },
                  text: { en: 'Both public and private hospitals must provide immediate first aid and treatment without charging the survivor.', hi: 'सरकारी और निजी दोनों अस्पतालों को बिना शुल्क लिए तत्काल प्राथमिक उपचार और चिकित्सा देनी होगी।', ur: 'سرکاری اور نجی دونوں اسپتالوں کو بغیر فیس لیے فوری ابتدائی امداد اور علاج فراہم کرنا ہوگا۔' },
                },
                {
                  bold: { en: 'No two-finger test', hi: 'टू-फिंगर टेस्ट नहीं', ur: 'ٹو فنگر ٹیسٹ ممنوع' },
                  text: { en: 'Degrading and unscientific medical practices such as the two-finger test are impermissible.', hi: 'टू-फिंगर टेस्ट जैसी अपमानजनक और अवैज्ञानिक चिकित्सीय प्रक्रियाएं स्वीकार्य नहीं हैं।', ur: 'ٹو فنگر ٹیسٹ جیسی ذلت آمیز اور غیر سائنسی طبی کارروائیاں قابل قبول نہیں ہیں۔' },
                },
                {
                  bold: { en: 'Forensic evidence collection', hi: 'फॉरेंसिक साक्ष्य संकलन', ur: 'فارنزک شواہد کا جمع کرنا' },
                  text: { en: 'Hospitals should preserve biological and physical evidence in accordance with medico-legal protocols.', hi: 'अस्पतालों को मेडिको-लीगल प्रोटोकॉल के अनुसार जैविक और भौतिक साक्ष्यों को सुरक्षित रखना चाहिए।', ur: 'اسپتالوں کو میڈیکو لیگل ضابطوں کے مطابق حیاتیاتی اور مادی شواہد محفوظ رکھنے چاہئیں۔' },
                },
                {
                  bold: { en: 'Dignified investigation', hi: 'गरिमापूर्ण जाँच', ur: 'وقار کے ساتھ تفتیش' },
                  text: { en: 'Statement recording and investigation must be conducted sensitively, with additional safeguards for disabled survivors.', hi: 'बयान दर्ज करने और जाँच की प्रक्रिया संवेदनशील तरीके से होनी चाहिए, और दिव्यांग पीड़िताओं के लिए अतिरिक्त सुरक्षा उपाय होने चाहिए।', ur: 'بیان درج کرنے اور تفتیش کا عمل حساس انداز میں ہونا چاہیے، اور معذور متاثرین کے لیے اضافی حفاظتی اقدامات ہونے چاہئیں۔' },
                },
                {
                  bold: { en: 'Speedy and private trial', hi: 'त्वरित और गोपनीय मुकदमा', ur: 'تیز اور نجی سماعت' },
                  text: { en: 'Law provides for time-bound investigation, in-camera proceedings, and protection from character assassination.', hi: 'कानून समयबद्ध जाँच, इन-कैमरा कार्यवाही और चरित्रहनन से सुरक्षा प्रदान करता है।', ur: 'قانون وقت مقررہ میں تفتیش، اِن کیمرا کارروائی، اور کردار کشی سے تحفظ فراہم کرتا ہے۔' },
                },
              ],
            },
            {
              id: 'practical_help',
              type: 'highlight',
              heading: {
                en: 'Why These Rights Matter',
                hi: 'ये अधिकार क्यों महत्वपूर्ण हैं',
                ur: 'یہ حقوق کیوں اہم ہیں',
              },
              text: {
                en: 'These protections are meant to reduce secondary trauma, preserve evidence early, and ensure that survivors are not denied care or justice because of delay, fear, disability, or jurisdictional barriers.',
                hi: 'इन सुरक्षा उपायों का उद्देश्य द्वितीयक आघात को कम करना, प्रारंभिक स्तर पर साक्ष्य सुरक्षित रखना और यह सुनिश्चित करना है कि देरी, भय, दिव्यांगता या अधिकार-क्षेत्र की बाधाओं के कारण पीड़िताओं को देखभाल या न्याय से वंचित न किया जाए।',
                ur: 'ان تحفظات کا مقصد ثانوی صدمہ کم کرنا، شواہد کو ابتدائی مرحلے میں محفوظ رکھنا، اور یہ یقینی بنانا ہے کہ تاخیر، خوف، معذوری، یا حدودِ اختیار کی رکاوٹوں کی وجہ سے متاثرین کو علاج یا انصاف سے محروم نہ کیا جائے۔',
              },
            },
          ],
        },
        {
          id: 'right_to_zero_fir',
          icon: 'report',
          title: {
            en: 'Right to Zero FIR',
            hi: 'ज़ीरो एफआईआर का अधिकार',
            ur: 'زیرو ایف آئی آر کا حق',
          },
          subtitle: {
            en: 'The complaint can be lodged at any police station regardless of territorial jurisdiction',
            hi: 'भौगोलिक अधिकार-क्षेत्र की परवाह किए बिना किसी भी पुलिस थाने में शिकायत दर्ज की जा सकती है',
            ur: 'علاقائی حدودِ اختیار سے قطع نظر کسی بھی پولیس اسٹیشن میں شکایت درج کی جا سکتی ہے',
          },
          sections: [
            {
              id: 'zero_fir_meaning',
              type: 'text',
              heading: {
                en: 'Meaning of Zero FIR',
                hi: 'ज़ीरो एफआईआर का अर्थ',
                ur: 'زیرو ایف آئی آر کا مطلب',
              },
              text: {
                en: 'A survivor may file the FIR at any police station, even where the offence did not occur. That police station must record the complaint and transfer it to the station with territorial jurisdiction for investigation.',
                hi: 'पीड़िता किसी भी पुलिस थाने में एफआईआर दर्ज करा सकती है, चाहे अपराध वहां न हुआ हो। वह थाना शिकायत दर्ज करेगा और जाँच के लिए उसे संबंधित अधिकार-क्षेत्र वाले थाने को भेजेगा।',
                ur: 'متاثرہ کسی بھی پولیس اسٹیشن میں ایف آئی آر درج کرا سکتی ہے، چاہے جرم وہاں نہ ہوا ہو۔ وہ پولیس اسٹیشن شکایت درج کرے گا اور تفتیش کے لیے اسے متعلقہ حدودِ اختیار والے اسٹیشن کو منتقل کرے گا۔',
              },
            },
            {
              id: 'why_it_exists',
              type: 'highlight',
              heading: {
                en: 'Why It Matters',
                hi: 'यह क्यों महत्वपूर्ण है',
                ur: 'یہ کیوں اہم ہے',
              },
              text: {
                en: 'Zero FIR prevents refusal or delay at the first point of contact. It is especially important where the survivor has travelled, is in distress, or needs immediate protection and documentation.',
                hi: 'ज़ीरो एफआईआर प्रथम संपर्क बिंदु पर शिकायत लेने से इनकार या देरी को रोकती है। यह विशेष रूप से तब महत्वपूर्ण है जब पीड़िता यात्रा करके आई हो, संकट में हो, या उसे तुरंत सुरक्षा और दस्तावेज़ीकरण की आवश्यकता हो।',
                ur: 'زیرو ایف آئی آر پہلے رابطے کے مقام پر انکار یا تاخیر کو روکتی ہے۔ یہ خاص طور پر اس وقت اہم ہوتی ہے جب متاثرہ سفر کرکے آئی ہو، پریشانی میں ہو، یا اسے فوری تحفظ اور دستاویزات کی ضرورت ہو۔',
              },
            },
          ],
        },
        {
          id: 'free_medical_treatment',
          icon: 'local_hospital',
          title: {
            en: 'Free Medical Treatment in Any Hospital',
            hi: 'किसी भी अस्पताल में निःशुल्क चिकित्सा उपचार',
            ur: 'کسی بھی اسپتال میں مفت طبی علاج',
          },
          subtitle: {
            en: 'Immediate first aid and treatment must be provided without charge',
            hi: 'तत्काल प्राथमिक उपचार और इलाज बिना शुल्क के उपलब्ध कराया जाना चाहिए',
            ur: 'فوری ابتدائی امداد اور علاج بلا معاوضہ فراہم کیا جانا چاہیے',
          },
          sections: [
            {
              id: 'section_397_bnss',
              type: 'constitutional_text',
              heading: {
                en: 'Section 397 BNSS Read with Section 200 BNS',
                hi: 'बीएनएसएस की धारा 397 को बीएनएस की धारा 200 के साथ पढ़ें',
                ur: 'بی این ایس ایس کی دفعہ 397 کو بی این ایس کی دفعہ 200 کے ساتھ پڑھیں',
              },
              text: {
                en: 'Hospitals, whether public or private, must immediately provide first aid or medical treatment free of cost to victims of specified sexual offences. Failure to do so attracts punishment under Section 200 BNS.',
                hi: 'सरकारी हो या निजी, अस्पतालों को निर्दिष्ट यौन अपराधों की पीड़िताओं को तुरंत निःशुल्क प्राथमिक उपचार या चिकित्सा देनी होगी। ऐसा न करने पर बीएनएस की धारा 200 के तहत दंड हो सकता है।',
                ur: 'سرکاری ہوں یا نجی، اسپتالوں کو مخصوص جنسی جرائم کی متاثرین کو فوراً مفت ابتدائی امداد یا علاج فراہم کرنا ہوگا۔ ایسا نہ کرنے پر بی این ایس کی دفعہ 200 کے تحت سزا ہو سکتی ہے۔',
              },
            },
            {
              id: 'hospital_duties',
              type: 'points',
              heading: {
                en: 'Hospital Duties',
                hi: 'अस्पताल के दायित्व',
                ur: 'اسپتال کی ذمہ داریاں',
              },
              points: [
                {
                  bold: { en: 'No upfront payment', hi: 'पहले से भुगतान नहीं', ur: 'پیشگی ادائیگی نہیں' },
                  text: { en: 'Treatment cannot be withheld because the survivor cannot pay.', hi: 'सिर्फ इसलिए उपचार रोका नहीं जा सकता कि पीड़िता भुगतान नहीं कर सकती।', ur: 'صرف اس وجہ سے علاج روکا نہیں جا سکتا کہ متاثرہ ادائیگی نہیں کر سکتی۔' },
                },
                {
                  bold: { en: 'Immediate care', hi: 'तत्काल देखभाल', ur: 'فوری نگہداشت' },
                  text: { en: 'First aid, emergency care, and necessary medical intervention must be given without delay.', hi: 'प्राथमिक उपचार, आपात देखभाल और आवश्यक चिकित्सा हस्तक्षेप बिना देरी के दिया जाना चाहिए।', ur: 'ابتدائی امداد، ہنگامی نگہداشت، اور ضروری طبی مداخلت بلا تاخیر دی جانی چاہیے۔' },
                },
                {
                  bold: { en: 'Evidence-sensitive treatment', hi: 'साक्ष्य-संवेदनशील उपचार', ur: 'ثبوت کے لحاظ سے حساس علاج' },
                  text: { en: 'Care should be provided in a way that preserves evidence while prioritising the survivor\'s health and consent.', hi: 'उपचार इस तरह दिया जाना चाहिए कि साक्ष्य सुरक्षित रहें और साथ ही पीड़िता के स्वास्थ्य और सहमति को प्राथमिकता मिले।', ur: 'علاج اس طرح فراہم کیا جانا چاہیے کہ شواہد محفوظ رہیں اور ساتھ ہی متاثرہ کی صحت اور رضامندی کو ترجیح دی جائے۔' },
                },
              ],
            },
            {
              id: 'non_compliance',
              type: 'highlight',
              heading: {
                en: 'Penalty for Refusal',
                hi: 'इनकार करने पर दंड',
                ur: 'انکار پر سزا',
              },
              text: {
                en: 'A hospital in charge who contravenes this duty can be punished with imprisonment up to one year, or fine, or both.',
                hi: 'जो अस्पताल प्रभारी इस दायित्व का उल्लंघन करता है, उसे एक वर्ष तक के कारावास, या जुर्माना, या दोनों से दंडित किया जा सकता है।',
                ur: 'جو اسپتال انچارج اس ذمہ داری کی خلاف ورزی کرے، اسے ایک سال تک قید، یا جرمانہ، یا دونوں کی سزا دی جا سکتی ہے۔',
              },
            },
          ],
        },
        {
          id: 'no_two_finger_test',
          icon: 'block',
          title: {
            en: 'No Two-Finger Test',
            hi: 'टू-फिंगर टेस्ट नहीं',
            ur: 'ٹو فنگر ٹیسٹ ممنوع',
          },
          subtitle: {
            en: 'Survivors are entitled to dignified, scientific medical examination',
            hi: 'पीड़िताओं को गरिमापूर्ण और वैज्ञानिक चिकित्सीय परीक्षण का अधिकार है',
            ur: 'متاثرین کو باوقار اور سائنسی طبی معائنے کا حق حاصل ہے',
          },
          sections: [
            {
              id: 'prohibition',
              type: 'text',
              heading: {
                en: 'Prohibition',
                hi: 'प्रतिबंध',
                ur: 'ممانعت',
              },
              text: {
                en: 'The two-finger test is not a lawful or valid method of examining a rape survivor. It is degrading, medically unsound, and irrelevant to determining whether sexual assault occurred.',
                hi: 'टू-फिंगर टेस्ट बलात्कार पीड़िता की जांच का न तो वैध और न ही स्वीकार्य तरीका है। यह अपमानजनक, चिकित्सकीय रूप से अविश्वसनीय और यह तय करने के लिए अप्रासंगिक है कि यौन हमला हुआ या नहीं।',
                ur: 'ٹو فنگر ٹیسٹ زیادتی سے متاثرہ خاتون کے معائنے کا نہ تو قانونی اور نہ ہی درست طریقہ ہے۔ یہ ذلت آمیز، طبی لحاظ سے ناقابل اعتبار، اور یہ طے کرنے کے لیے غیر متعلق ہے کہ جنسی حملہ ہوا یا نہیں۔',
              },
            },
            {
              id: 'rights_basis',
              type: 'highlight',
              heading: {
                en: 'Rights-Based Reason',
                hi: 'अधिकार-आधारित कारण',
                ur: 'حقوق پر مبنی وجہ',
              },
              text: {
                en: 'This prohibition protects privacy, dignity, bodily integrity, and mental well-being. Past sexual history is not a test of consent and should not be used to discredit the survivor.',
                hi: 'यह प्रतिबंध निजता, गरिमा, शारीरिक अखंडता और मानसिक कल्याण की रक्षा करता है। पूर्व यौन इतिहास सहमति की कसौटी नहीं है और इसका उपयोग पीड़िता को बदनाम करने के लिए नहीं किया जाना चाहिए।',
                ur: 'یہ ممانعت رازداری، وقار، جسمانی سالمیت، اور ذہنی بہبود کا تحفظ کرتی ہے۔ سابقہ جنسی تاریخ رضامندی کا پیمانہ نہیں ہے اور اسے متاثرہ کو بدنام کرنے کے لیے استعمال نہیں کیا جانا چاہیے۔',
              },
            },
            {
              id: 'proper_medical_approach',
              type: 'text',
              heading: {
                en: 'Proper Medical Approach',
                hi: 'उचित चिकित्सीय दृष्टिकोण',
                ur: 'درست طبی طریقہ کار',
              },
              text: {
                en: 'Medical examination should focus on treatment needs, informed consent, documentation of injuries, collection of forensic samples where appropriate, and a trauma-informed clinical assessment.',
                hi: 'चिकित्सीय परीक्षण का केंद्र उपचार की आवश्यकता, सूचित सहमति, चोटों का दस्तावेज़ीकरण, जहाँ उपयुक्त हो वहाँ फॉरेंसिक नमूनों का संकलन और आघात-संवेदनशील नैदानिक मूल्यांकन होना चाहिए।',
                ur: 'طبی معائنہ علاج کی ضرورت، باخبر رضامندی، زخموں کی دستاویز بندی، مناسب صورت میں فارنزک نمونوں کے حصول، اور صدمہ حساس کلینیکل جائزے پر مرکوز ہونا چاہیے۔',
              },
            },
          ],
        },
        {
          id: 'dna_sampling',
          icon: 'science',
          title: {
            en: 'DNA Sampling for Forensic Testing',
            hi: 'फॉरेंसिक परीक्षण के लिए डीएनए सैंपलिंग',
            ur: 'فارنزک جانچ کے لیے ڈی این اے سیمپلنگ',
          },
          subtitle: {
            en: 'Medico-legal evidence collection and documentation for sexual violence cases',
            hi: 'यौन हिंसा के मामलों में मेडिको-लीगल साक्ष्य संकलन और दस्तावेज़ीकरण',
            ur: 'جنسی تشدد کے معاملات میں میڈیکو لیگل شواہد کا جمع اور دستاویز بندی',
          },
          sections: [
            {
              id: 'mohfw_guidelines',
              type: 'text',
              heading: {
                en: 'Medical Protocol',
                hi: 'चिकित्सीय प्रोटोकॉल',
                ur: 'طبی ضابطہ کار',
              },
              text: {
                en: 'The Ministry of Health and Family Welfare\'s medico-legal guidelines require standardised evidence collection, survivor consent, and careful documentation in sexual violence cases.',
                hi: 'स्वास्थ्य और परिवार कल्याण मंत्रालय के मेडिको-लीगल दिशानिर्देश यौन हिंसा के मामलों में मानकीकृत साक्ष्य संकलन, पीड़िता की सहमति और सावधानीपूर्वक दस्तावेज़ीकरण की मांग करते हैं।',
                ur: 'وزارتِ صحت و خاندانی بہبود کے میڈیکو لیگل رہنما اصول جنسی تشدد کے معاملات میں معیاری شواہد کے حصول، متاثرہ کی رضامندی، اور محتاط دستاویز بندی کا تقاضا کرتے ہیں۔',
              },
            },
            {
              id: 'report_contents',
              type: 'points',
              heading: {
                en: 'Important Details Commonly Recorded',
                hi: 'सामान्यतः दर्ज की जाने वाली महत्वपूर्ण जानकारियाँ',
                ur: 'عام طور پر درج کی جانے والی اہم تفصیلات',
              },
              points: [
                {
                  bold: { en: 'Identity details', hi: 'पहचान संबंधी विवरण', ur: 'شناختی تفصیلات' },
                  text: { en: 'Name, address, and age of the survivor, subject to confidentiality requirements.', hi: 'गोपनीयता की शर्तों के अधीन पीड़िता का नाम, पता और आयु।', ur: 'رازداری کے تقاضوں کے تحت متاثرہ کا نام، پتہ، اور عمر۔' },
                },
                {
                  bold: { en: 'Collected material', hi: 'संकलित सामग्री', ur: 'جمع شدہ مواد' },
                  text: { en: 'Description of biological or trace material collected for forensic examination.', hi: 'फॉरेंसिक परीक्षण के लिए संकलित जैविक या अन्य सूक्ष्म सामग्री का विवरण।', ur: 'فارنزک جانچ کے لیے جمع کیے گئے حیاتیاتی یا دوسرے سراغی مواد کی تفصیل۔' },
                },
                {
                  bold: { en: 'Injuries', hi: 'चोटें', ur: 'زخم' },
                  text: { en: 'Clinical observation and documentation of any physical injuries or relevant findings.', hi: 'किसी भी शारीरिक चोट या संबंधित निष्कर्ष का नैदानिक अवलोकन और दस्तावेज़ीकरण।', ur: 'کسی بھی جسمانی زخم یا متعلقہ نتائج کا کلینیکل مشاہدہ اور دستاویز بندی۔' },
                },
                {
                  bold: { en: 'Mental condition', hi: 'मानसिक स्थिति', ur: 'ذہنی کیفیت' },
                  text: { en: 'General mental and emotional condition at the time of examination, where relevant.', hi: 'जहां प्रासंगिक हो, परीक्षण के समय की सामान्य मानसिक और भावनात्मक स्थिति।', ur: 'جہاں متعلق ہو، معائنے کے وقت عمومی ذہنی اور جذباتی حالت۔' },
                },
              ],
            },
            {
              id: 'forensic_note',
              type: 'highlight',
              heading: {
                en: 'Important Note',
                hi: 'महत्वपूर्ण टिप्पणी',
                ur: 'اہم نوٹ',
              },
              text: {
                en: 'Forensic sampling is important because evidence can be time-sensitive. However, medical care and informed consent remain the priority throughout the examination.',
                hi: 'फॉरेंसिक सैंपलिंग महत्वपूर्ण है क्योंकि साक्ष्य समय-संवेदनशील हो सकते हैं। फिर भी पूरे परीक्षण के दौरान चिकित्सा देखभाल और सूचित सहमति सर्वोच्च प्राथमिकता रहती है।',
                ur: 'فارنزک سیمپلنگ اہم ہے کیونکہ شواہد وقت کے لحاظ سے حساس ہو سکتے ہیں۔ تاہم پورے معائنے کے دوران طبی نگہداشت اور باخبر رضامندی کو ہی ترجیح حاصل رہتی ہے۔',
              },
            },
          ],
        },
        {
          id: 'harassment_free_investigation',
          icon: 'security',
          title: {
            en: 'Harassment-Free and Time-Bound Investigation',
            hi: 'उत्पीड़न-मुक्त और समयबद्ध जाँच',
            ur: 'ہراسانی سے پاک اور وقت مقررہ تفتیش',
          },
          subtitle: {
            en: 'Statement recording safeguards and respectful police procedure',
            hi: 'बयान दर्ज करने के सुरक्षा उपाय और सम्मानजनक पुलिस प्रक्रिया',
            ur: 'بیان ریکارڈ کرنے کے حفاظتی اقدامات اور باوقار پولیس طریقہ کار',
          },
          sections: [
            {
              id: 'statement_recording',
              type: 'points',
              heading: {
                en: 'Investigation Safeguards',
                hi: 'जाँच संबंधी सुरक्षा उपाय',
                ur: 'تفتیشی حفاظتی اقدامات',
              },
              points: [
                {
                  bold: { en: 'Woman officer', hi: 'महिला अधिकारी', ur: 'خاتون افسر' },
                  text: { en: 'The survivor\'s statement should be recorded by a woman police officer in the manner required by law.', hi: 'पीड़िता का बयान कानून में निर्धारित तरीके से महिला पुलिस अधिकारी द्वारा दर्ज किया जाना चाहिए।', ur: 'متاثرہ کا بیان قانون کے مطابق خاتون پولیس افسر کے ذریعے ریکارڈ کیا جانا چاہیے۔' },
                },
                {
                  bold: { en: 'Convenient place for disabled survivors', hi: 'दिव्यांग पीड़िताओं के लिए सुविधाजनक स्थान', ur: 'معذور متاثرین کے لیے موزوں جگہ' },
                  text: { en: 'If the survivor is physically or mentally disabled, recording should occur at a place chosen for her convenience and safety.', hi: 'यदि पीड़िता शारीरिक या मानसिक रूप से दिव्यांग है, तो बयान उसकी सुविधा और सुरक्षा के अनुसार चुने गए स्थान पर दर्ज किया जाना चाहिए।', ur: 'اگر متاثرہ جسمانی یا ذہنی طور پر معذور ہو تو بیان اس کی سہولت اور حفاظت کے مطابق منتخب مقام پر ریکارڈ کیا جانا چاہیے۔' },
                },
                {
                  bold: { en: 'Interpreter or special educator', hi: 'दुभाषिया या विशेष शिक्षक', ur: 'مترجم یا خصوصی معلم' },
                  text: { en: 'Where necessary, communication support must be arranged so the survivor can give an effective statement.', hi: 'जहां आवश्यक हो, संवाद सहायता की व्यवस्था की जानी चाहिए ताकि पीड़िता प्रभावी रूप से बयान दे सके।', ur: 'جہاں ضرورت ہو، ابلاغی معاونت فراہم کی جانی چاہیے تاکہ متاثرہ مؤثر بیان دے سکے۔' },
                },
                {
                  bold: { en: 'Magistrate recording', hi: 'मजिस्ट्रेट के समक्ष बयान', ur: 'مجسٹریٹ کے سامنے بیان' },
                  text: { en: 'The law also provides for recording of statements before a Magistrate in specified sexual offence cases.', hi: 'कानून निर्दिष्ट यौन अपराधों के मामलों में मजिस्ट्रेट के समक्ष बयान दर्ज करने का भी प्रावधान करता है।', ur: 'قانون مخصوص جنسی جرائم کے معاملات میں مجسٹریٹ کے سامنے بیان ریکارڈ کرنے کا بھی انتظام کرتا ہے۔' },
                },
              ],
            },
            {
              id: 'dignity_investigation_note',
              type: 'highlight',
              heading: {
                en: 'Dignity and Non-Harassment',
                hi: 'गरिमा और उत्पीड़न से मुक्ति',
                ur: 'وقار اور ہراسانی سے آزادی',
              },
              text: {
                en: 'Police procedure must not intimidate, shame, or repeatedly harass the survivor. The purpose of the safeguards is to reduce trauma while preserving the quality of evidence.',
                hi: 'पुलिस प्रक्रिया ऐसी नहीं होनी चाहिए जो पीड़िता को डराए, शर्मिंदा करे या बार-बार परेशान करे। इन सुरक्षा उपायों का उद्देश्य आघात कम करना और साक्ष्य की गुणवत्ता बनाए रखना है।',
                ur: 'پولیس کا طریقہ کار ایسا نہیں ہونا چاہیے جو متاثرہ کو ڈرائے، شرمندہ کرے، یا بار بار ہراساں کرے۔ ان حفاظتی اقدامات کا مقصد صدمہ کم کرنا اور شواہد کے معیار کو برقرار رکھنا ہے۔',
              },
            },
          ],
        },
        {
          id: 'speedy_trial_dignity_protection',
          icon: 'gavel',
          title: {
            en: 'Speedy Trial with Full Dignity and Protection',
            hi: 'पूर्ण गरिमा और संरक्षण के साथ त्वरित मुकदमा',
            ur: 'مکمل وقار اور تحفظ کے ساتھ تیز سماعت',
          },
          subtitle: {
            en: 'Privacy, character protection, confidentiality, and time-bound investigation',
            hi: 'निजता, चरित्र की रक्षा, गोपनीयता और समयबद्ध जाँच',
            ur: 'رازداری، کردار کا تحفظ، خفیہ پن، اور وقت مقررہ تفتیش',
          },
          sections: [
            {
              id: 'trial_safeguards',
              type: 'points',
              heading: {
                en: 'Key Trial and Investigation Safeguards',
                hi: 'मुकदमे और जाँच के प्रमुख सुरक्षा उपाय',
                ur: 'سماعت اور تفتیش کے اہم حفاظتی اقدامات',
              },
              points: [
                {
                  bold: { en: 'Woman-led trial where practicable', hi: 'जहां संभव हो महिला न्यायाधीश', ur: 'جہاں ممکن ہو خاتون جج' },
                  text: { en: 'Criminal procedure encourages trial, as far as practicable, by a court presided over by a woman in rape cases.', hi: 'दंड प्रक्रिया बलात्कार के मामलों में जहां तक संभव हो, महिला द्वारा संचालित न्यायालय में सुनवाई को प्रोत्साहित करती है।', ur: 'فوجداری طریقہ کار زیادتی کے مقدمات میں جہاں تک ممکن ہو، خاتون کی سربراہی والی عدالت میں سماعت کی حوصلہ افزائی کرتا ہے۔' },
                },
                {
                  bold: { en: 'Past sexual history is irrelevant', hi: 'पूर्व यौन इतिहास अप्रासंगिक है', ur: 'سابقہ جنسی تاریخ غیر متعلق ہے' },
                  text: { en: 'Questions meant to attack the survivor\'s character or rely on previous sexual history are legally restricted and irrelevant to consent issues.', hi: 'पीड़िता के चरित्र पर हमला करने या उसके पूर्व यौन इतिहास पर आधारित प्रश्न कानूनी रूप से सीमित हैं और सहमति के प्रश्न पर अप्रासंगिक हैं।', ur: 'متاثرہ کے کردار پر حملہ کرنے یا اس کی سابقہ جنسی تاریخ پر مبنی سوالات قانونی طور پر محدود ہیں اور رضامندی کے مسئلے میں غیر متعلق ہیں۔' },
                },
                {
                  bold: { en: 'In-camera proceedings', hi: 'इन-कैमरा कार्यवाही', ur: 'اِن کیمرا کارروائی' },
                  text: { en: 'Rape inquiries and trials are to be conducted in camera rather than in open court.', hi: 'बलात्कार से संबंधित जांच और मुकदमे खुले न्यायालय के बजाय इन-कैमरा किए जाने चाहिए।', ur: 'زیادتی سے متعلق انکوائری اور سماعت کھلی عدالت کے بجائے اِن کیمرا کی جانی چاہیے۔' },
                },
                {
                  bold: { en: 'Confidentiality', hi: 'गोपनीयता', ur: 'رازداری' },
                  text: { en: 'Statements and identifying details of survivors receive legal protection from public disclosure.', hi: 'पीड़िता के बयान और उसकी पहचान संबंधी विवरण सार्वजनिक खुलासे से कानूनी रूप से सुरक्षित रहते हैं।', ur: 'متاثرہ کے بیانات اور شناختی تفصیلات کو عوامی افشا سے قانونی تحفظ حاصل ہوتا ہے۔' },
                },
                {
                  bold: { en: 'Time-bound investigation', hi: 'समयबद्ध जाँच', ur: 'وقت مقررہ تفتیش' },
                  text: { en: 'The law requires investigation in rape cases to be completed within the prescribed period from recording of information.', hi: 'कानून बलात्कार के मामलों में सूचना दर्ज होने की तारीख से निर्धारित अवधि के भीतर जाँच पूरी करने की मांग करता है।', ur: 'قانون زیادتی کے معاملات میں اطلاع درج ہونے کی تاریخ سے مقررہ مدت کے اندر تفتیش مکمل کرنے کا تقاضا کرتا ہے۔' },
                },
              ],
            },
            {
              id: 'speedy_trial_note',
              type: 'highlight',
              heading: {
                en: 'Purpose of These Protections',
                hi: 'इन संरक्षणों का उद्देश्य',
                ur: 'ان تحفظات کا مقصد',
              },
              text: {
                en: 'These rules aim to balance fair trial rights with survivor dignity, privacy, and prompt justice. They are meant to prevent the criminal process from becoming another form of abuse.',
                hi: 'इन नियमों का उद्देश्य निष्पक्ष सुनवाई के अधिकारों और पीड़िता की गरिमा, निजता तथा शीघ्र न्याय के बीच संतुलन बनाना है। इनका मकसद आपराधिक प्रक्रिया को उत्पीड़न का एक और रूप बनने से रोकना है।',
                ur: 'ان قواعد کا مقصد منصفانہ سماعت کے حقوق اور متاثرہ کے وقار، رازداری، اور فوری انصاف کے درمیان توازن قائم کرنا ہے۔ ان کا مقصد فوجداری عمل کو ایک اور قسم کے استحصال میں بدلنے سے روکنا ہے۔',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'outraging_modesty',
      icon: 'pan_tool',
      label: {
        en: 'Outraging Modesty of a Woman',
        hi: 'महिला की लज्जा भंग करना',
        ur: 'عورت کی عصمت و وقار مجروح کرنا',
      },
      description: {
        en: 'Section 74 BNS: assault or criminal force intended to outrage a woman\'s modesty',
        hi: 'बीएनएस की धारा 74: महिला की लज्जा भंग करने के इरादे से हमला या आपराधिक बल',
        ur: 'بی این ایس کی دفعہ 74: عورت کی عصمت و وقار مجروح کرنے کے ارادے سے حملہ یا مجرمانہ طاقت',
      },
      items: [
        {
          id: 'outraging_modesty_overview',
          icon: 'warning',
          title: {
            en: 'Section 74 BNS',
            hi: 'धारा 74 बीएनएस',
            ur: 'دفعہ 74 بی این ایس',
          },
          subtitle: {
            en: 'Assault or use of criminal force to outrage modesty',
            hi: 'लज्जा भंग करने के लिए हमला या आपराधिक बल का प्रयोग',
            ur: 'عصمت مجروح کرنے کے لیے حملہ یا مجرمانہ طاقت کا استعمال',
          },
          sections: [
            {
              id: 'section_74_text',
              type: 'constitutional_text',
              heading: {
                en: 'Legal Provision',
                hi: 'कानूनी प्रावधान',
                ur: 'قانونی دفعہ',
              },
              text: {
                en: 'Whoever assaults or uses criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty, commits the offence under Section 74 BNS.',
                hi: 'जो कोई किसी महिला पर हमला करता है या आपराधिक बल का प्रयोग इस इरादे से करता है, या यह जानते हुए करता है कि इससे उसकी लज्जा भंग होने की संभावना है, वह धारा 74 बीएनएस के अंतर्गत अपराध करता है।',
                ur: 'جو کوئی کسی عورت پر حملہ کرے یا مجرمانہ طاقت استعمال کرے اس ارادے سے، یا یہ جانتے ہوئے کہ اس سے اس کی عصمت و وقار مجروح ہونے کا امکان ہے، وہ دفعہ 74 بی این ایس کے تحت جرم کرتا ہے۔',
              },
            },
            {
              id: 'ingredients',
              type: 'points',
              heading: {
                en: 'Ingredients of the Offence',
                hi: 'अपराध के तत्व',
                ur: 'جرم کے عناصر',
              },
              points: [
                {
                  bold: { en: 'Assault or criminal force', hi: 'हमला या आपराधिक बल', ur: 'حملہ یا مجرمانہ طاقت' },
                  text: { en: 'There must be physical force, attempted force, or threatening conduct amounting to assault under criminal law.', hi: 'शारीरिक बल, बल का प्रयास, या ऐसा धमकीपूर्ण आचरण होना चाहिए जो दंड कानून में हमले की श्रेणी में आता हो।', ur: 'جسمانی طاقت، طاقت کا استعمال کرنے کی کوشش، یا ایسا دھمکی آمیز رویہ ہونا چاہیے جو فوجداری قانون میں حملہ شمار ہو۔' },
                },
                {
                  bold: { en: 'Intent or knowledge', hi: 'इरादा या जानकारी', ur: 'ارادہ یا علم' },
                  text: { en: 'The offender must intend to outrage modesty or know that his act is likely to do so.', hi: 'अपराधी का उद्देश्य लज्जा भंग करना होना चाहिए या उसे यह जानकारी होनी चाहिए कि उसके कृत्य से ऐसा होना संभावित है।', ur: 'مجرم کا مقصد عصمت و وقار مجروح کرنا ہونا چاہیے یا اسے علم ہونا چاہیے کہ اس کے فعل سے ایسا ہونے کا امکان ہے۔' },
                },
                {
                  bold: { en: 'Protection of dignity', hi: 'गरिमा की रक्षा', ur: 'وقار کا تحفظ' },
                  text: { en: 'The section is aimed at conduct that violates bodily dignity, decency, and personal autonomy even where the facts do not amount to rape.', hi: 'यह धारा ऐसे आचरण को लक्षित करती है जो शारीरिक गरिमा, शालीनता और व्यक्तिगत स्वायत्तता का उल्लंघन करता है, भले ही तथ्य बलात्कार तक न पहुंचते हों।', ur: 'یہ دفعہ ایسے رویے کو نشانہ بناتی ہے جو جسمانی وقار، شائستگی، اور ذاتی خودمختاری کی خلاف ورزی کرے، خواہ حقائق زیادتی تک نہ پہنچتے ہوں۔' },
                },
              ],
            },
            {
              id: 'punishment',
              type: 'highlight',
              heading: {
                en: 'Punishment',
                hi: 'सज़ा',
                ur: 'سزا',
              },
              text: {
                en: 'Section 74 prescribes imprisonment of not less than one year and up to five years, along with fine.',
                hi: 'धारा 74 में कम से कम एक वर्ष और अधिकतम पांच वर्ष तक का कारावास तथा जुर्माने का प्रावधान है।',
                ur: 'دفعہ 74 میں کم از کم ایک سال اور زیادہ سے زیادہ پانچ سال تک قید اور جرمانہ مقرر ہے۔',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'sexual_harassment',
      icon: 'campaign',
      label: {
        en: 'Sexual Harassment',
        hi: 'यौन उत्पीड़न',
        ur: 'جنسی ہراسانی',
      },
      description: {
        en: 'Section 75 BNS and unwelcome sexual conduct',
        hi: 'बीएनएस की धारा 75 और अवांछित यौन आचरण',
        ur: 'بی این ایس کی دفعہ 75 اور ناپسندیدہ جنسی رویہ',
      },
      items: [
        {
          id: 'sexual_harassment_overview',
          icon: 'record_voice_over',
          title: {
            en: 'Section 75 BNS',
            hi: 'धारा 75 बीएनएस',
            ur: 'دفعہ 75 بی این ایس',
          },
          subtitle: {
            en: 'Unwelcome sexual overtures, demands, pornography, or sexually coloured remarks',
            hi: 'अवांछित यौन पहल, मांग, अश्लील सामग्री या यौन संकेत वाले वक्तव्य',
            ur: 'ناپسندیدہ جنسی پیش قدمی، مطالبات، فحش مواد، یا جنسی رنگ والے بیانات',
          },
          sections: [
            {
              id: 'section_75_text',
              type: 'constitutional_text',
              heading: {
                en: 'Acts Covered',
                hi: 'आवृत कृत्य',
                ur: 'شامل اعمال',
              },
              text: {
                en: 'Section 75 covers physical contact and advances involving unwelcome and explicit sexual overtures, a demand or request for sexual favours, showing pornography against the will of a woman, and making sexually coloured remarks.',
                hi: 'धारा 75 ऐसे शारीरिक संपर्क और पहल को शामिल करती है जिनमें स्पष्ट और अवांछित यौन व्यवहार हो, यौन अनुग्रह की मांग या अनुरोध हो, महिला की इच्छा के विरुद्ध अश्लील सामग्री दिखाई जाए, या यौन संकेत वाले वक्तव्य किए जाएं।',
                ur: 'دفعہ 75 ایسے جسمانی رابطے اور پیش قدمی کو شامل کرتی ہے جن میں واضح اور ناپسندیدہ جنسی رویہ ہو، جنسی رعایت کا مطالبہ یا درخواست ہو، عورت کی مرضی کے خلاف فحش مواد دکھایا جائے، یا جنسی رنگ والے تبصرے کیے جائیں۔',
              },
            },
            {
              id: 'conduct_types',
              type: 'points',
              heading: {
                en: 'What the Law Recognises',
                hi: 'कानून क्या मानता है',
                ur: 'قانون کن چیزوں کو تسلیم کرتا ہے',
              },
              points: [
                {
                  bold: { en: 'Unwelcome contact', hi: 'अवांछित संपर्क', ur: 'ناپسندیدہ رابطہ' },
                  text: { en: 'Physical contact or sexual advances that are explicit and unwanted.', hi: 'ऐसा शारीरिक संपर्क या यौन पहल जो स्पष्ट हो और न चाही गई हो।', ur: 'ایسا جسمانی رابطہ یا جنسی پیش قدمی جو واضح ہو اور ناپسندیدہ ہو۔' },
                },
                {
                  bold: { en: 'Sexual favours', hi: 'यौन अनुग्रह', ur: 'جنسی رعایت' },
                  text: { en: 'Direct or indirect requests, pressure, or demands for sexual compliance.', hi: 'यौन समर्पण के लिए प्रत्यक्ष या परोक्ष अनुरोध, दबाव या मांग।', ur: 'جنسی اطاعت کے لیے براہ راست یا بالواسطہ درخواست، دباؤ، یا مطالبہ۔' },
                },
                {
                  bold: { en: 'Pornographic exposure', hi: 'अश्लील सामग्री दिखाना', ur: 'فحش مواد دکھانا' },
                  text: { en: 'Showing pornography or sexually explicit material against the will of a woman.', hi: 'महिला की इच्छा के विरुद्ध अश्लील या यौन रूप से स्पष्ट सामग्री दिखाना।', ur: 'عورت کی مرضی کے خلاف فحش یا جنسی طور پر واضح مواد دکھانا۔' },
                },
                {
                  bold: { en: 'Sexually coloured remarks', hi: 'यौन संकेत वाले वक्तव्य', ur: 'جنسی رنگ والے تبصرے' },
                  text: { en: 'Verbal comments with sexual content or insinuation intended to demean or harass.', hi: 'ऐसी मौखिक टिप्पणियां जिनमें यौन आशय या संकेत हो और जिनका उद्देश्य अपमानित करना या परेशान करना हो।', ur: 'ایسے زبانی تبصرے جن میں جنسی مفہوم یا اشارہ ہو اور جن کا مقصد ذلیل کرنا یا ہراساں کرنا ہو۔' },
                },
              ],
            },
            {
              id: 'punishment',
              type: 'highlight',
              heading: {
                en: 'Punishment',
                hi: 'सज़ा',
                ur: 'سزا',
              },
              text: {
                en: 'For the first three categories, punishment may extend to three years with fine. For sexually coloured remarks, punishment may extend to one year with fine.',
                hi: 'पहली तीन श्रेणियों के लिए सज़ा तीन वर्ष तक और जुर्माना हो सकती है। यौन संकेत वाले वक्तव्यों के लिए सज़ा एक वर्ष तक और जुर्माना हो सकती है।',
                ur: 'پہلی تین اقسام کے لیے سزا تین سال تک اور جرمانہ ہو سکتی ہے۔ جنسی رنگ والے تبصروں کے لیے سزا ایک سال تک اور جرمانہ ہو سکتی ہے۔',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'workplace_harassment',
      icon: 'work',
      label: {
        en: 'Sexual Harassment at Workplace',
        hi: 'कार्यस्थल पर यौन उत्पीड़न',
        ur: 'کام کی جگہ پر جنسی ہراسانی',
      },
      description: {
        en: 'POSH Act, 2013 and internal complaint mechanisms for workplace safety',
        hi: 'पॉश अधिनियम, 2013 और कार्यस्थल सुरक्षा के लिए आंतरिक शिकायत तंत्र',
        ur: 'پوش ایکٹ 2013 اور کام کی جگہ کے تحفظ کے لیے داخلی شکایتی نظام',
      },
      items: [
        {
          id: 'posh_act_overview',
          icon: 'business_center',
          title: {
            en: 'POSH Act, 2013',
            hi: 'पॉश अधिनियम, 2013',
            ur: 'پوش ایکٹ، 2013',
          },
          subtitle: {
            en: 'Prevention, prohibition, and redressal of sexual harassment at the workplace',
            hi: 'कार्यस्थल पर यौन उत्पीड़न की रोकथाम, निषेध और निवारण',
            ur: 'کام کی جگہ پر جنسی ہراسانی کی روک تھام، ممانعت، اور ازالہ',
          },
          sections: [
            {
              id: 'purpose',
              type: 'text',
              heading: {
                en: 'Purpose of the Act',
                hi: 'अधिनियम का उद्देश्य',
                ur: 'قانون کا مقصد',
              },
              text: {
                en: 'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 provides a civil redress framework to prevent and address workplace sexual harassment and to ensure a safe working environment.',
                hi: 'कार्यस्थल पर महिलाओं का यौन उत्पीड़न (रोकथाम, प्रतिषेध और निवारण) अधिनियम, 2013 कार्यस्थल पर यौन उत्पीड़न को रोकने और उसका निवारण करने के लिए एक सिविल ढांचा प्रदान करता है तथा सुरक्षित कार्य वातावरण सुनिश्चित करता है।',
                ur: 'کام کی جگہ پر خواتین کی جنسی ہراسانی (روک تھام، ممانعت اور ازالہ) ایکٹ، 2013 کام کی جگہ پر جنسی ہراسانی کو روکنے اور اس کا ازالہ کرنے کے لیے ایک سول ڈھانچہ فراہم کرتا ہے اور محفوظ کام کا ماحول یقینی بناتا ہے۔',
              },
            },
            {
              id: 'core_mechanisms',
              type: 'points',
              heading: {
                en: 'Core Mechanisms',
                hi: 'मुख्य तंत्र',
                ur: 'بنیادی نظام',
              },
              points: [
                {
                  bold: { en: 'Internal Committee', hi: 'आंतरिक समिति', ur: 'اندرونی کمیٹی' },
                  text: { en: 'Employers with the required workforce must constitute an Internal Committee to receive and inquire into complaints.', hi: 'निर्धारित संख्या वाले कर्मचारियों वाले नियोक्ताओं को शिकायतें लेने और उनकी जांच के लिए आंतरिक समिति गठित करनी होती है।', ur: 'لازمی افرادی قوت رکھنے والے آجروں کو شکایات وصول کرنے اور ان کی جانچ کے لیے اندرونی کمیٹی قائم کرنی ہوتی ہے۔' },
                },
                {
                  bold: { en: 'Local Committee', hi: 'स्थानीय समिति', ur: 'مقامی کمیٹی' },
                  text: { en: 'Where an Internal Committee is unavailable or the complaint falls outside the employer structure, the Local Committee mechanism applies.', hi: 'जहां आंतरिक समिति उपलब्ध न हो या शिकायत नियोक्ता की संरचना के बाहर की हो, वहां स्थानीय समिति का तंत्र लागू होता है।', ur: 'جہاں اندرونی کمیٹی موجود نہ ہو یا شکایت آجر کے ڈھانچے سے باہر ہو، وہاں مقامی کمیٹی کا نظام لاگو ہوتا ہے۔' },
                },
                {
                  bold: { en: 'Employer obligations', hi: 'नियोक्ता के दायित्व', ur: 'آجر کی ذمہ داریاں' },
                  text: { en: 'Employers must create awareness, provide a safe workplace, assist the complainant, and act on committee recommendations.', hi: 'नियोक्ताओं को जागरूकता बढ़ानी, सुरक्षित कार्यस्थल देना, शिकायतकर्ता की सहायता करनी और समिति की सिफारिशों पर कार्य करना आवश्यक है।', ur: 'آجروں کو آگاہی پیدا کرنا، محفوظ کام کی جگہ فراہم کرنا، شکایت کنندہ کی مدد کرنا، اور کمیٹی کی سفارشات پر عمل کرنا ضروری ہے۔' },
                },
                {
                  bold: { en: 'Redress and protection', hi: 'निवारण और संरक्षण', ur: 'ازالہ اور تحفظ' },
                  text: { en: 'The Act allows inquiry, recommendations, interim relief, confidentiality protections, and action against workplace retaliation.', hi: 'यह अधिनियम जांच, सिफारिशें, अंतरिम राहत, गोपनीयता की सुरक्षा और कार्यस्थल पर प्रतिशोध के विरुद्ध कार्रवाई की अनुमति देता है।', ur: 'یہ قانون انکوائری، سفارشات، عبوری راحت، رازداری کے تحفظات، اور کام کی جگہ پر انتقامی کارروائی کے خلاف اقدام کی اجازت دیتا ہے۔' },
                },
              ],
            },
            {
              id: 'workplace_note',
              type: 'highlight',
              heading: {
                en: 'Practical Importance',
                hi: 'व्यावहारिक महत्व',
                ur: 'عملی اہمیت',
              },
              text: {
                en: 'The POSH Act complements criminal law. Some conduct may amount both to workplace misconduct under POSH and to a criminal offence under the BNS.',
                hi: 'पॉश अधिनियम आपराधिक कानून का पूरक है। कुछ आचरण पॉश के अंतर्गत कार्यस्थल दुराचार भी हो सकते हैं और साथ ही बीएनएस के अंतर्गत आपराधिक अपराध भी।',
                ur: 'پوش ایکٹ فوجداری قانون کی تکمیل کرتا ہے۔ کچھ رویے پوش کے تحت کام کی جگہ کی بدعنوانی بھی ہو سکتے ہیں اور ساتھ ہی بی این ایس کے تحت مجرمانہ جرم بھی۔',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'disrobing',
      icon: 'checkroom',
      label: {
        en: 'Disrobing a Woman',
        hi: 'महिला को निर्वस्त्र करना',
        ur: 'عورت کو برہنہ کرنا',
      },
      description: {
        en: 'Section 76 BNS and forced disrobing or compelling nudity',
        hi: 'बीएनएस की धारा 76 और जबरन कपड़े उतरवाना या नग्न होने के लिए मजबूर करना',
        ur: 'بی این ایس کی دفعہ 76 اور زبردستی کپڑے اتروانا یا برہنہ کرنے پر مجبور کرنا',
      },
      items: [
        {
          id: 'disrobing_overview',
          icon: 'privacy_tip',
          title: {
            en: 'Section 76 BNS',
            hi: 'धारा 76 बीएनएस',
            ur: 'دفعہ 76 بی این ایس',
          },
          subtitle: {
            en: 'Assault or criminal force with intent to disrobe or compel nudity',
            hi: 'निर्वस्त्र करने या नग्न होने के लिए मजबूर करने के इरादे से हमला या आपराधिक बल',
            ur: 'برہنہ کرنے یا برہنگی پر مجبور کرنے کی نیت سے حملہ یا مجرمانہ طاقت',
          },
          sections: [
            {
              id: 'section_76_text',
              type: 'constitutional_text',
              heading: {
                en: 'Legal Provision',
                hi: 'कानूनी प्रावधान',
                ur: 'قانونی دفعہ',
              },
              text: {
                en: 'Whoever assaults or uses criminal force to any woman, or abets such act, with the intention of disrobing or compelling her to be naked commits the offence under Section 76 BNS.',
                hi: 'जो कोई किसी महिला पर हमला करता है या आपराधिक बल का प्रयोग, अथवा ऐसे कृत्य को उकसाता है, इस इरादे से कि उसे निर्वस्त्र करे या नग्न होने के लिए मजबूर करे, वह धारा 76 बीएनएस के अंतर्गत अपराध करता है।',
                ur: 'جو کوئی کسی عورت پر حملہ کرے یا مجرمانہ طاقت استعمال کرے، یا ایسے فعل میں اعانت کرے، اس نیت سے کہ اسے برہنہ کرے یا برہنہ ہونے پر مجبور کرے، وہ دفعہ 76 بی این ایس کے تحت جرم کرتا ہے۔',
              },
            },
            {
              id: 'why_serious',
              type: 'text',
              heading: {
                en: 'Why the Law Treats It Seriously',
                hi: 'कानून इसे गंभीर क्यों मानता है',
                ur: 'قانون اسے سنگین کیوں سمجھتا ہے',
              },
              text: {
                en: 'This provision criminalises deliberate humiliation and violent stripping of dignity. It recognises that forced disrobing is a severe bodily and psychological attack even if it falls short of rape.',
                hi: 'यह प्रावधान जानबूझकर अपमानित करने और गरिमा को हिंसक ढंग से छीनने को अपराध मानता है। यह स्वीकार करता है कि जबरन निर्वस्त्र करना, बलात्कार से कम होने पर भी, गंभीर शारीरिक और मानसिक हमला है।',
                ur: 'یہ دفعہ دانستہ تذلیل اور وقار کو پرتشدد طور پر چھیننے کو جرم قرار دیتی ہے۔ یہ تسلیم کرتی ہے کہ زبردستی برہنہ کرنا، خواہ زیادتی کی حد تک نہ پہنچے، پھر بھی شدید جسمانی اور نفسیاتی حملہ ہے۔',
              },
            },
            {
              id: 'punishment',
              type: 'highlight',
              heading: {
                en: 'Punishment',
                hi: 'सज़ा',
                ur: 'سزا',
              },
              text: {
                en: 'Section 76 prescribes imprisonment of not less than three years and up to seven years, along with fine.',
                hi: 'धारा 76 में कम से कम तीन वर्ष और अधिकतम सात वर्ष तक का कारावास तथा जुर्माने का प्रावधान है।',
                ur: 'دفعہ 76 میں کم از کم تین سال اور زیادہ سے زیادہ سات سال تک قید اور جرمانہ مقرر ہے۔',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'voyeurism',
      icon: 'visibility',
      label: {
        en: 'Voyeurism',
        hi: 'झांकना / वोयूरिज़्म',
        ur: 'جھانکنا / ووئیورزم',
      },
      description: {
        en: 'Section 77 BNS and unlawful observation or capture of private acts',
        hi: 'बीएनएस की धारा 77 और निजी कृत्यों का अवैध अवलोकन या रिकॉर्डिंग',
        ur: 'بی این ایس کی دفعہ 77 اور نجی اعمال کا غیر قانونی مشاہدہ یا ریکارڈنگ',
      },
      items: [
        {
          id: 'voyeurism_overview',
          icon: 'photo_camera',
          title: {
            en: 'Section 77 BNS',
            hi: 'धारा 77 बीएनएस',
            ur: 'دفعہ 77 بی این ایس',
          },
          subtitle: {
            en: 'Watching, recording, or disseminating images of a woman in a private act',
            hi: 'किसी महिला के निजी कृत्य को देखना, रिकॉर्ड करना या उसकी छवियां प्रसारित करना',
            ur: 'کسی عورت کے نجی عمل کو دیکھنا، ریکارڈ کرنا، یا اس کی تصاویر پھیلانا',
          },
          sections: [
            {
              id: 'section_77_text',
              type: 'constitutional_text',
              heading: {
                en: 'Legal Provision',
                hi: 'कानूनी प्रावधान',
                ur: 'قانونی دفعہ',
              },
              text: {
                en: 'Section 77 punishes a person who watches or captures the image of a woman engaging in a private act where she would reasonably expect privacy, or who disseminates such image.',
                hi: 'धारा 77 उस व्यक्ति को दंडित करती है जो किसी महिला को उसके निजी कृत्य के दौरान देखता है या उसकी छवि रिकॉर्ड करता है, जहां उसे युक्तियुक्त रूप से निजता की अपेक्षा होती है, या ऐसी छवि का प्रसार करता है।',
                ur: 'دفعہ 77 ایسے شخص کو سزا دیتی ہے جو کسی عورت کو اس کے نجی عمل کے دوران دیکھے یا اس کی تصویر محفوظ کرے، جہاں اسے معقول طور پر رازداری کی توقع ہو، یا ایسی تصویر پھیلائے۔',
              },
            },
            {
              id: 'private_act_definition',
              type: 'points',
              heading: {
                en: 'What Counts as a Private Act',
                hi: 'निजी कृत्य क्या माना जाएगा',
                ur: 'نجی عمل کس کو کہا جائے گا',
              },
              points: [
                {
                  bold: { en: 'Expectation of privacy', hi: 'निजता की अपेक्षा', ur: 'رازداری کی توقع' },
                  text: { en: 'The act must occur in circumstances where privacy would reasonably be expected.', hi: 'कृत्य ऐसी परिस्थितियों में होना चाहिए जहां सामान्य रूप से निजता की अपेक्षा की जाए।', ur: 'یہ عمل ایسے حالات میں ہونا چاہیے جہاں معقول طور پر رازداری کی توقع ہو۔' },
                },
                {
                  bold: { en: 'Body exposure or intimate activity', hi: 'शरीर का अनावृत होना या अंतरंग गतिविधि', ur: 'جسم کا نمایاں ہونا یا مباشرتی عمل' },
                  text: { en: 'The law specifically contemplates exposure of intimate parts, using a lavatory, or other sexual acts not ordinarily done in public.', hi: 'कानून विशेष रूप से अंतरंग अंगों के अनावृत होने, शौचालय के उपयोग, या अन्य ऐसे यौन कृत्यों को शामिल करता है जो सामान्यतः सार्वजनिक रूप से नहीं किए जाते।', ur: 'قانون خاص طور پر جسم کے نجی حصوں کے ظاہر ہونے، بیت الخلا کے استعمال، یا ایسے دوسرے جنسی اعمال کو شامل کرتا ہے جو عموماً عوام کے سامنے نہیں کیے جاتے۔' },
                },
                {
                  bold: { en: 'Unauthorised dissemination', hi: 'अनधिकृत प्रसार', ur: 'بغیر اجازت پھیلانا' },
                  text: { en: 'Even if the woman consented to the image being captured, sharing it with others without consent can itself amount to the offence.', hi: 'भले ही महिला ने छवि रिकॉर्ड किए जाने की सहमति दी हो, बिना सहमति उसे दूसरों के साथ साझा करना अपने आप में अपराध हो सकता है।', ur: 'اگرچہ عورت نے تصویر لینے کی رضامندی دی ہو، پھر بھی بغیر رضامندی اسے دوسروں کے ساتھ شیئر کرنا خود ایک جرم ہو سکتا ہے۔' },
                },
              ],
            },
            {
              id: 'punishment',
              type: 'highlight',
              heading: {
                en: 'Punishment',
                hi: 'सज़ा',
                ur: 'سزا',
              },
              text: {
                en: 'On first conviction, punishment ranges from one to three years with fine. On second or subsequent conviction, punishment ranges from three to seven years with fine.',
                hi: 'पहली दोषसिद्धि पर सज़ा एक से तीन वर्ष तक और जुर्माना हो सकती है। दूसरी या बाद की दोषसिद्धि पर सज़ा तीन से सात वर्ष तक और जुर्माना हो सकती है।',
                ur: 'پہلی سزا پر ایک سے تین سال تک قید اور جرمانہ ہو سکتا ہے۔ دوسری یا بعد کی سزا پر تین سے سات سال تک قید اور جرمانہ ہو سکتا ہے۔',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'stalking',
      icon: 'location_searching',
      label: {
        en: 'Stalking',
        hi: 'पीछा करना / स्टॉकिंग',
        ur: 'پیچھا کرنا / اسٹاکنگ',
      },
      description: {
        en: 'Section 78 BNS covering repeated physical or digital pursuit against a woman\'s wishes',
        hi: 'बीएनएस की धारा 78 जो महिला की इच्छा के विरुद्ध बार-बार शारीरिक या डिजिटल पीछा करने को कवर करती है',
        ur: 'بی این ایس کی دفعہ 78 جو عورت کی مرضی کے خلاف بار بار جسمانی یا ڈیجیٹل پیچھا کرنے کو شامل کرتی ہے',
      },
      items: [
        {
          id: 'stalking_overview',
          icon: 'travel_explore',
          title: {
            en: 'Section 78 BNS',
            hi: 'धारा 78 बीएनएस',
            ur: 'دفعہ 78 بی این ایس',
          },
          subtitle: {
            en: 'Repeated following, contact attempts, or online monitoring despite disinterest',
            hi: 'स्पष्ट अनिच्छा के बावजूद बार-बार पीछा करना, संपर्क की कोशिश करना या ऑनलाइन निगरानी करना',
            ur: 'واضح عدم دلچسپی کے باوجود بار بار پیچھا کرنا، رابطے کی کوشش کرنا، یا آن لائن نگرانی کرنا',
          },
          sections: [
            {
              id: 'section_78_text',
              type: 'constitutional_text',
              heading: {
                en: 'Legal Provision',
                hi: 'कानूनी प्रावधान',
                ur: 'قانونی دفعہ',
              },
              text: {
                en: 'Section 78 treats as stalking any man who repeatedly follows and attempts to contact a woman despite a clear indication of disinterest, or who monitors her internet, email, or other electronic communication.',
                hi: 'धारा 78 उस पुरुष के आचरण को स्टॉकिंग मानती है जो महिला की स्पष्ट अनिच्छा के बावजूद बार-बार उसका पीछा करता है, उससे संपर्क करने की कोशिश करता है, या उसके इंटरनेट, ईमेल अथवा अन्य इलेक्ट्रॉनिक संचार की निगरानी करता है।',
                ur: 'دفعہ 78 اس مرد کے رویے کو اسٹاکنگ قرار دیتی ہے جو عورت کی واضح عدم دلچسپی کے باوجود بار بار اس کا پیچھا کرے، رابطہ کرنے کی کوشش کرے، یا اس کے انٹرنیٹ، ای میل، یا دوسرے الیکٹرانک رابطوں کی نگرانی کرے۔',
              },
            },
            {
              id: 'covered_forms',
              type: 'points',
              heading: {
                en: 'Common Forms of Stalking',
                hi: 'स्टॉकिंग के सामान्य रूप',
                ur: 'اسٹاکنگ کی عام شکلیں',
              },
              points: [
                {
                  bold: { en: 'Physical stalking', hi: 'शारीरिक पीछा करना', ur: 'جسمانی پیچھا' },
                  text: { en: 'Persistently following a woman, turning up at places she frequents, or repeatedly attempting unwanted personal interaction.', hi: 'लगातार महिला का पीछा करना, उसके आने-जाने के स्थानों पर पहुंच जाना, या बार-बार अवांछित व्यक्तिगत संपर्क की कोशिश करना।', ur: 'مسلسل عورت کا پیچھا کرنا، اس کے آنے جانے کی جگہوں پر پہنچ جانا، یا بار بار ناپسندیدہ ذاتی رابطے کی کوشش کرنا۔' },
                },
                {
                  bold: { en: 'Cyber stalking', hi: 'साइबर स्टॉकिंग', ur: 'سائبر اسٹاکنگ' },
                  text: { en: 'Monitoring email, social media, devices, or other digital communication without consent.', hi: 'बिना सहमति ईमेल, सोशल मीडिया, उपकरणों या अन्य डिजिटल संचार की निगरानी करना।', ur: 'بغیر رضامندی ای میل، سوشل میڈیا، ڈیوائسز، یا دیگر ڈیجیٹل رابطوں کی نگرانی کرنا۔' },
                },
                {
                  bold: { en: 'Clear disinterest', hi: 'स्पष्ट अनिच्छा', ur: 'واضح عدم دلچسپی' },
                  text: { en: 'The offence depends on repeated conduct after the woman has indicated that the contact is unwanted.', hi: 'यह अपराध तब बनता है जब महिला के यह स्पष्ट कर देने के बाद भी कि वह संपर्क नहीं चाहती, वही आचरण बार-बार किया जाए।', ur: 'یہ جرم تب بنتا ہے جب عورت کے یہ واضح کر دینے کے بعد بھی کہ وہ رابطہ نہیں چاہتی، وہی رویہ بار بار دہرایا جائے۔' },
                },
              ],
            },
            {
              id: 'exceptions_note',
              type: 'text',
              heading: {
                en: 'Limited Exceptions',
                hi: 'सीमित अपवाद',
                ur: 'محدود استثنا',
              },
              text: {
                en: 'The law recognises limited exceptions, such as conduct pursued for preventing or detecting crime or where the conduct was otherwise authorised or justified by law.',
                hi: 'कानून कुछ सीमित अपवादों को मान्यता देता है, जैसे अपराध की रोकथाम या जांच के लिए किया गया आचरण, या ऐसा आचरण जो अन्यथा कानून द्वारा अधिकृत या उचित ठहराया गया हो।',
                ur: 'قانون چند محدود استثناؤں کو تسلیم کرتا ہے، جیسے جرم کی روک تھام یا کھوج کے لیے کیا گیا عمل، یا ایسا عمل جو بصورت دیگر قانون کے تحت مجاز یا جائز ہو۔',
              },
            },
            {
              id: 'punishment',
              type: 'highlight',
              heading: {
                en: 'Punishment',
                hi: 'सज़ा',
                ur: 'سزا',
              },
              text: {
                en: 'The section distinguishes between first and subsequent convictions and treats persistent stalking, including cyber stalking, as a serious offence against liberty and safety.',
                hi: 'यह धारा पहली और बाद की दोषसिद्धि में अंतर करती है और लगातार पीछा करने, जिसमें साइबर स्टॉकिंग भी शामिल है, को स्वतंत्रता और सुरक्षा के विरुद्ध गंभीर अपराध मानती है।',
                ur: 'یہ دفعہ پہلی اور بعد کی سزا میں فرق کرتی ہے اور مسلسل پیچھا کرنے، بشمول سائبر اسٹاکنگ، کو آزادی اور سلامتی کے خلاف سنگین جرم مانتی ہے۔',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'trafficking',
      icon: 'groups_2',
      label: {
        en: 'Trafficking in Persons',
        hi: 'मानव तस्करी',
        ur: 'انسانی اسمگلنگ',
      },
      description: {
        en: 'Section 143 BNS and protection against trafficking, exploitation, and coercive movement',
        hi: 'बीएनएस की धारा 143 और तस्करी, शोषण तथा दबावपूर्ण स्थानांतरण के विरुद्ध संरक्षण',
        ur: 'بی این ایس کی دفعہ 143 اور اسمگلنگ، استحصال، اور جبری نقل و حرکت کے خلاف تحفظ',
      },
      items: [
        {
          id: 'trafficking_overview',
          icon: 'connecting_airports',
          title: {
            en: 'Section 143 BNS',
            hi: 'धारा 143 बीएनएस',
            ur: 'دفعہ 143 بی این ایس',
          },
          subtitle: {
            en: 'Trafficking, exploitation, coercion, and organised abuse',
            hi: 'तस्करी, शोषण, दबाव और संगठित उत्पीड़न',
            ur: 'اسمگلنگ، استحصال، جبر، اور منظم بدسلوکی',
          },
          sections: [
            {
              id: 'overview_text',
              type: 'text',
              heading: {
                en: 'General Meaning',
                hi: 'सामान्य अर्थ',
                ur: 'عمومی مفہوم',
              },
              text: {
                en: 'Trafficking law addresses recruitment, transport, transfer, harbouring, or receipt of persons through coercive or deceptive means for exploitation. In women\'s rights contexts, it commonly intersects with sexual exploitation, forced labour, forced marriage, and organised abuse.',
                hi: 'तस्करी संबंधी कानून ऐसे शोषण को संबोधित करते हैं जिसमें व्यक्तियों की भर्ती, परिवहन, स्थानांतरण, आश्रय देना या प्राप्त करना दबावपूर्ण या धोखाधड़ीपूर्ण साधनों से किया जाता है। महिलाओं के अधिकारों के संदर्भ में यह प्रायः यौन शोषण, बंधुआ श्रम, जबरन विवाह और संगठित उत्पीड़न से जुड़ता है।',
                ur: 'اسمگلنگ سے متعلق قانون ایسے استحصال کو مخاطب کرتا ہے جس میں افراد کی بھرتی، نقل و حمل، منتقلی، پناہ دینا، یا وصول کرنا جبر یا دھوکے کے ذریعے کیا جائے۔ خواتین کے حقوق کے تناظر میں یہ اکثر جنسی استحصال، جبری مشقت، جبری شادی، اور منظم بدسلوکی سے جڑا ہوتا ہے۔',
              },
            },
            {
              id: 'common_patterns',
              type: 'points',
              heading: {
                en: 'Common Patterns of Exploitation',
                hi: 'शोषण के सामान्य रूप',
                ur: 'استحصال کی عام صورتیں',
              },
              points: [
                {
                  bold: { en: 'Deception', hi: 'धोखा', ur: 'دھوکا' },
                  text: { en: 'False promises of work, marriage, care, or opportunity used to move or control women and girls.', hi: 'काम, विवाह, देखभाल या अवसर के झूठे वादों का उपयोग महिलाओं और लड़कियों को स्थानांतरित करने या नियंत्रित करने के लिए किया जाता है।', ur: 'کام، شادی، دیکھ بھال، یا موقع کے جھوٹے وعدے عورتوں اور لڑکیوں کو منتقل کرنے یا قابو میں رکھنے کے لیے استعمال کیے جاتے ہیں۔' },
                },
                {
                  bold: { en: 'Coercion', hi: 'जबरदस्ती', ur: 'جبر' },
                  text: { en: 'Threats, violence, confinement, debt pressure, or intimidation used to secure compliance.', hi: 'धमकी, हिंसा, बंधन, कर्ज का दबाव या डराकर अधीनता प्राप्त की जाती है।', ur: 'دھمکی، تشدد، قید، قرض کا دباؤ، یا ڈرا دھمکا کر اطاعت حاصل کی جاتی ہے۔' },
                },
                {
                  bold: { en: 'Sexual exploitation', hi: 'यौन शोषण', ur: 'جنسی استحصال' },
                  text: { en: 'Movement or control of a woman for prostitution, abuse, or other sexual exploitation.', hi: 'वेश्यावृत्ति, दुरुपयोग या अन्य यौन शोषण के लिए महिला को स्थानांतरित करना या नियंत्रित करना।', ur: 'فحاشی، بدسلوکی، یا دیگر جنسی استحصال کے لیے عورت کو منتقل کرنا یا قابو میں رکھنا۔' },
                },
                {
                  bold: { en: 'Forced marriage or movement', hi: 'जबरन विवाह या स्थानांतरण', ur: 'جبری شادی یا نقل و حرکت' },
                  text: { en: 'Abduction or inducement aimed at marriage, servitude, or cross-border exploitation may also overlap with trafficking offences.', hi: 'विवाह, दासत्व या सीमा-पार शोषण के लिए अपहरण या प्रलोभन भी तस्करी के अपराधों से जुड़ सकते हैं।', ur: 'شادی، غلامی، یا سرحد پار استحصال کے لیے اغوا یا بہکانا بھی اسمگلنگ کے جرائم سے جڑ سکتا ہے۔' },
                },
              ],
            },
            {
              id: 'protective_note',
              type: 'highlight',
              heading: {
                en: 'Protective Purpose',
                hi: 'संरक्षात्मक उद्देश्य',
                ur: 'تحفظی مقصد',
              },
              text: {
                en: 'The law is designed to target organised exploitation and protect women from being treated as commodities for profit, abuse, or control.',
                hi: 'कानून का उद्देश्य संगठित शोषण पर प्रहार करना और महिलाओं को लाभ, दुरुपयोग या नियंत्रण की वस्तु के रूप में व्यवहार किए जाने से बचाना है।',
                ur: 'قانون کا مقصد منظم استحصال کو نشانہ بنانا اور خواتین کو منافع، بدسلوکی، یا کنٹرول کے لیے جنسِ تجارت سمجھنے سے بچانا ہے۔',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'cohabitation_by_deceit',
      icon: 'heart_broken',
      label: {
        en: 'Cohabitation by Deceitful Means',
        hi: 'कपटपूर्ण तरीकों से सहवास',
        ur: 'فریب کے ذریعے باہم رہائش / تعلق',
      },
      description: {
        en: 'Section 69 BNS and sexual intercourse by deceitful means, including false promise of marriage',
        hi: 'बीएनएस की धारा 69 और कपटपूर्ण साधनों से यौन संबंध, जिसमें विवाह का झूठा वादा शामिल है',
        ur: 'بی این ایس کی دفعہ 69 اور فریب کے ذریعے جنسی تعلق، جس میں شادی کا جھوٹا وعدہ بھی شامل ہے',
      },
      items: [
        {
          id: 'deceitful_means_overview',
          icon: 'fact_check',
          title: {
            en: 'Sexual Intercourse by Deceitful Means',
            hi: 'कपटपूर्ण साधनों से यौन संबंध',
            ur: 'فریب کے ذریعے جنسی تعلق',
          },
          subtitle: {
            en: 'Section 69 BNS and fraudulent inducement, false promises, or concealed identity',
            hi: 'बीएनएस की धारा 69 और कपटपूर्ण प्रलोभन, झूठे वादे या छिपी हुई पहचान',
            ur: 'بی این ایس کی دفعہ 69 اور دھوکے سے آمادہ کرنا، جھوٹے وعدے، یا پوشیدہ شناخت',
          },
          sections: [
            {
              id: 'section_69_text',
              type: 'constitutional_text',
              heading: {
                en: 'Section 69 BNS',
                hi: 'धारा 69 बीएनएस',
                ur: 'دفعہ 69 بی این ایس',
              },
              text: {
                en: 'Section 69 punishes sexual intercourse obtained by deceitful means or by making a promise to marry without intention of fulfilling it, where the act does not amount to rape.',
                hi: 'धारा 69 ऐसे यौन संबंध को दंडित करती है जो कपटपूर्ण साधनों से या विवाह का ऐसा वादा करके प्राप्त किया गया हो जिसे पूरा करने का इरादा ही न हो, और जहां कृत्य बलात्कार की श्रेणी में न आता हो।',
                ur: 'دفعہ 69 ایسے جنسی تعلق کو سزا دیتی ہے جو فریب سے، یا شادی کا ایسا وعدہ کرکے حاصل کیا گیا ہو جسے پورا کرنے کی نیت ہی نہ ہو، اور جہاں یہ عمل زیادتی کے درجے میں نہ آتا ہو۔',
              },
            },
            {
              id: 'deceitful_means',
              type: 'points',
              heading: {
                en: 'What Deceitful Means Include',
                hi: 'कपटपूर्ण साधनों में क्या शामिल है',
                ur: 'فریب کے طریقوں میں کیا شامل ہے',
              },
              points: [
                {
                  bold: { en: 'False promise of marriage', hi: 'विवाह का झूठा वादा', ur: 'شادی کا جھوٹا وعدہ' },
                  text: { en: 'Obtaining sexual intercourse by promising marriage without any real intention to marry.', hi: 'वास्तविक विवाह-इरादे के बिना विवाह का वादा करके यौन संबंध प्राप्त करना।', ur: 'حقیقی شادی کی نیت کے بغیر شادی کا وعدہ کرکے جنسی تعلق حاصل کرنا۔' },
                },
                {
                  bold: { en: 'False promise of employment or promotion', hi: 'नौकरी या पदोन्नति का झूठा वादा', ur: 'ملازمت یا ترقی کا جھوٹا وعدہ' },
                  text: { en: 'Inducement based on fake work-related opportunities or career advancement.', hi: 'काम से जुड़े झूठे अवसर या कैरियर उन्नति के नाम पर प्रलोभन देना।', ur: 'کام سے متعلق جھوٹے مواقع یا کیریئر میں ترقی کے نام پر بہکانا۔' },
                },
                {
                  bold: { en: 'Suppression of identity in marriage', hi: 'विवाह में पहचान छिपाना', ur: 'شادی میں شناخت چھپانا' },
                  text: { en: 'Marriage or sexual relations induced by concealing identity in a legally significant manner.', hi: 'कानूनी दृष्टि से महत्वपूर्ण पहचान छिपाकर विवाह या यौन संबंध के लिए प्रेरित करना।', ur: 'قانونی طور پر اہم شناخت چھپا کر شادی یا جنسی تعلق پر آمادہ کرنا۔' },
                },
              ],
            },
            {
              id: 'cohabitation_meaning',
              type: 'text',
              heading: {
                en: 'Why It Matters',
                hi: 'यह क्यों महत्वपूर्ण है',
                ur: 'یہ کیوں اہم ہے',
              },
              text: {
                en: 'This section recognises that consent obtained through fraud is not genuine choice. It protects women from being induced into cohabitation or sexual relations through deliberate deception.',
                hi: 'यह धारा मानती है कि धोखे से प्राप्त सहमति वास्तविक चुनाव नहीं होती। यह महिलाओं को जानबूझकर छल करके सहवास या यौन संबंध में धकेले जाने से बचाती है।',
                ur: 'یہ دفعہ تسلیم کرتی ہے کہ دھوکے سے حاصل کی گئی رضامندی حقیقی انتخاب نہیں ہوتی۔ یہ خواتین کو دانستہ فریب کے ذریعے باہم رہائش یا جنسی تعلق میں دھکیلے جانے سے بچاتی ہے۔',
              },
            },
            {
              id: 'punishment',
              type: 'highlight',
              heading: {
                en: 'Punishment',
                hi: 'सज़ा',
                ur: 'سزا',
              },
              text: {
                en: 'Section 69 provides imprisonment that may extend to ten years, along with fine.',
                hi: 'धारा 69 में दस वर्ष तक का कारावास और जुर्माने का प्रावधान है।',
                ur: 'دفعہ 69 میں دس سال تک قید اور جرمانے کا انتظام ہے۔',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default SEXUAL_CRIMES_DATA;
