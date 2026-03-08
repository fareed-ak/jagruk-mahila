// constants/casesData.js

export const CASE_CATEGORIES = {
  MAINTENANCE: 'maintenance',
  TRIPLE_TALAQ: 'triple_talaq',
  WORKPLACE: 'workplace',
  VIOLENCE: 'violence',
};

export const CASES = [
  {
    id: 'shah_bano_1985',
    year: 1985,
    category: CASE_CATEGORIES.MAINTENANCE,
    court: { en: 'Supreme Court of India', hi: 'सर्वोच्च न्यायालय', ur: 'سپریم کورٹ آف انڈیا' },
    title: { en: 'Shah Bano Case', hi: 'शाह बानो केस', ur: 'شاہ بانو کیس' },
    what_happened: {
      en: 'Shah Bano was a 62-year-old Muslim woman from Indore, married for over 40 years, when her husband Mohd. Ahmed Khan — a well-off lawyer — divorced her via Triple Talaq in 1978 and stopped paying her any support. With five children and no means of income, she filed for maintenance under Section 125 of the CrPC, which is a secular law applying to all citizens regardless of religion.',
      hi: 'शाह बानो इंदौर की 62 वर्षीया मुस्लिम महिला थीं। 40 से अधिक वर्षों की शादी के बाद उनके पति मोहम्मद अहमद खान — एक संपन्न वकील — ने 1978 में तीन तलाक देकर उन्हें छोड़ दिया और कोई भी आर्थिक सहायता देने से मना कर दिया। पांच बच्चों और कोई आय न होने के कारण उन्होंने CrPC की धारा 125 के तहत गुजारे भत्ते के लिए अर्जी दी।',
      ur: 'شاہ بانو اندور کی 62 سالہ مسلم خاتون تھیں، جن کی 40 سے زائد سال کی شادی کے بعد ان کے وکیل شوہر محمد احمد خان نے 1978 میں تین طلاق دے کر انہیں بے سہارا چھوڑ دیا۔ پانچ بچوں اور کوئی آمدنی نہ ہونے کی وجہ سے انہوں نے CrPC کی دفعہ 125 کے تحت نفقہ کی درخواست دی۔',
    },
    judgement: {
      en: 'On 23 April 1985, a five-judge Constitutional Bench unanimously ruled in her favour. Section 125 CrPC applies to all women regardless of religion. A husband must pay maintenance beyond the iddat period if the wife cannot support herself. Personal law cannot override constitutional rights.',
      hi: '23 अप्रैल 1985 को पांच न्यायाधीशों की संविधान पीठ ने सर्वसम्मति से उनके पक्ष में फैसला दिया। CrPC धारा 125 सभी धर्मों की महिलाओं पर लागू होती है। यदि पत्नी स्वयं का भरण-पोषण नहीं कर सकती तो पति को इद्दत के बाद भी गुजारा भत्ता देना होगा। व्यक्तिगत कानून संवैधानिक अधिकारों को नहीं हरा सकता।',
      ur: '23 اپریل 1985 کو پانچ جج حضرات کی آئینی بینچ نے متفقہ طور پر ان کے حق میں فیصلہ سنایا۔ CrPC کی دفعہ 125 تمام مذاہب کی خواتین پر لاگو ہوتی ہے۔ اگر بیوی اپنا گزارہ نہیں کر سکتی تو شوہر کو عدت کے بعد بھی نفقہ دینا ہوگا۔ ذاتی قانون آئینی حقوق کو نہیں ہرا سکتا۔',
    },
    how_it_helps: {
      en: 'Any woman — of any religion — who is divorced and has no income can file for maintenance under CrPC Section 125. In 2024, the Supreme Court reaffirmed this right in Mohd. Abdul Samad v. State of Telangana, making it stronger than ever.',
      hi: 'किसी भी धर्म की तलाकशुदा महिला जिसकी कोई आय न हो, CrPC धारा 125 के तहत गुजारा भत्ते के लिए आवेदन कर सकती है। 2024 में सर्वोच्च न्यायालय ने मोहम्मद अब्दुल समद बनाम तेलंगाना राज्य में इस अधिकार को और मजबूत किया।',
      ur: 'کسی بھی مذہب کی طلاق یافتہ خاتون جس کی کوئی آمدنی نہ ہو، CrPC دفعہ 125 کے تحت نفقہ کے لیے درخواست دے سکتی ہے۔ 2024 میں سپریم کورٹ نے اس حق کو مزید مستحکم کیا۔',
    },
  },

  {
    id: 'danial_latifi_2001',
    year: 2001,
    category: CASE_CATEGORIES.MAINTENANCE,
    court: { en: 'Supreme Court of India', hi: 'सर्वोच्च न्यायालय', ur: 'سپریم کورٹ آف انڈیا' },
    title: { en: 'Danial Latifi Case', hi: 'दानियल लतीफी केस', ur: 'دانیال لطیفی کیس' },
    what_happened: {
      en: 'After the Shah Bano verdict caused political backlash, the government passed the Muslim Women (Protection of Rights on Divorce) Act, 1986, widely interpreted as restricting a husband\'s maintenance obligation to just the iddat period — approximately three months. Lawyer Danial Latifi challenged this before the Supreme Court, arguing it left divorced Muslim women in lifelong poverty.',
      hi: 'शाह बानो फैसले पर राजनीतिक दबाव में आकर सरकार ने मुस्लिम महिला (तलाक पर अधिकारों का संरक्षण) अधिनियम 1986 पारित किया, जिसे व्यापक रूप से इद्दत तक गुजारा भत्ता सीमित करने वाला माना गया। वकील दानियल लतीफी ने इसे सर्वोच्च न्यायालय में चुनौती दी।',
      ur: 'شاہ بانو فیصلے پر سیاسی ردعمل میں حکومت نے مسلم خواتین (طلاق پر حقوق کا تحفظ) ایکٹ 1986 منظور کیا، جسے عام طور پر صرف عدت تک نفقہ محدود کرنے والا سمجھا گیا۔ وکیل دانیال لطیفی نے اسے سپریم کورٹ میں چیلنج کیا۔',
    },
    judgement: {
      en: 'A five-judge bench upheld the 1986 Act but gave it a transformative reading: the husband must make a fair and reasonable provision for his divorced wife\'s entire future, not just three months. The payment could be made as a lump sum during iddat but must account for her long-term needs.',
      hi: 'पांच न्यायाधीशों की पीठ ने अधिनियम को बरकरार रखा, लेकिन नई व्याख्या दी: पति को अपनी तलाकशुदा पत्नी के पूरे भविष्य के लिए उचित और न्यायसंगत प्रबंध करना होगा — केवल तीन महीने नहीं।',
      ur: 'پانچ جج حضرات کی بینچ نے ایکٹ کو برقرار رکھا مگر نئی تشریح دی: شوہر کو اپنی طلاق یافتہ بیوی کے پورے مستقبل کے لیے مناسب اور منصفانہ انتظام کرنا ہوگا — صرف تین ماہ کافی نہیں۔',
    },
    how_it_helps: {
      en: 'A divorced Muslim woman can demand a substantial, future-oriented financial settlement — not just a token payment. This case ensures the spirit of Shah Bano lives on even within the 1986 law.',
      hi: 'तलाकशुदा मुस्लिम महिला एक बड़े दीर्घकालिक वित्तीय निपटान की मांग कर सकती है। शाह बानो की भावना इस कानून में जीवित है।',
      ur: 'طلاق یافتہ مسلم خاتون ایک بڑے، مستقبل پر مبنی مالی تصفیے کا مطالبہ کر سکتی ہے۔',
    },
  },

  {
    id: 'shamim_ara_2002',
    year: 2002,
    category: CASE_CATEGORIES.MAINTENANCE,
    court: { en: 'Supreme Court of India', hi: 'सर्वोच्च न्यायालय', ur: 'سپریم کورٹ آف انڈیا' },
    title: { en: 'Shamim Ara Case', hi: 'शमीम आरा केस', ur: 'شمیم آرا کیس' },
    what_happened: {
      en: 'Shamim Ara\'s husband claimed he had divorced her years earlier through oral talaq, but had no written record, no witnesses, no stated reason, and had made no attempt at reconciliation. He used this fabricated claim to deny her maintenance and marital rights.',
      hi: 'शमीम आरा के पति ने दावा किया कि उसने वर्षों पहले मौखिक तलाक दे दिया था — बिना किसी लिखित रिकॉर्ड, गवाह, कारण या सुलह के प्रयास के। इस झूठे दावे से वह उनके गुजारे भत्ते और वैवाहिक अधिकारों से इनकार करना चाहता था।',
      ur: 'شمیم آرا کے شوہر نے دعویٰ کیا کہ اس نے سال پہلے زبانی طلاق دی تھی — بغیر کسی تحریری ثبوت، گواہ، وجہ یا صلح کی کوشش کے۔ اس جھوٹے دعوے سے وہ ان کا نفقہ اور ازدواجی حقوق چھیننا چاہتا تھا۔',
    },
    judgement: {
      en: 'The Supreme Court ruled that talaq must follow proper Quranic procedure to be valid. The husband must show: (1) a reasonable cause for divorce, (2) proof that talaq was actually pronounced, and (3) that attempts at reconciliation were made. An unilateral, undocumented, or revenge-driven talaq claim is legally invalid.',
      hi: 'सर्वोच्च न्यायालय ने कहा: तलाक को कुरानिक प्रक्रिया का पालन करना होगा। पति को दिखाना होगा — (1) तलाक का उचित कारण, (2) तलाक का प्रमाण, (3) सुलह का प्रयास। बिना सबूत, एकतरफा या बदले की भावना से दिया गया तलाक दावा कानूनी रूप से अमान्य है।',
      ur: 'سپریم کورٹ نے قرار دیا: طلاق کے لیے قرآنی طریقہ کار ضروری ہے۔ شوہر کو دکھانا ہوگا — (1) طلاق کی معقول وجہ، (2) طلاق کا ثبوت، (3) صلح کی کوشش۔ بغیر ثبوت، یکطرفہ یا انتقامی طلاق کا دعویٰ قانوناً باطل ہے۔',
    },
    how_it_helps: {
      en: 'Women can legally challenge fake, informal, or procedurally defective divorce claims. A husband cannot simply claim he divorced his wife years ago without any evidence.',
      hi: 'महिलाएं झूठे, अनौपचारिक या प्रक्रियागत रूप से दोषपूर्ण तलाक के दावों को कानूनी रूप से चुनौती दे सकती हैं।',
      ur: 'خواتین جھوٹے، غیر رسمی یا طریقہ کار میں نقص والے طلاق کے دعووں کو قانوناً چیلنج کر سکتی ہیں۔',
    },
  },

  {
    id: 'shayara_bano_2017',
    year: 2017,
    category: CASE_CATEGORIES.TRIPLE_TALAQ,
    court: { en: 'Supreme Court of India (Constitution Bench)', hi: 'सर्वोच्च न्यायालय (संविधान पीठ)', ur: 'سپریم کورٹ آف انڈیا (آئینی بینچ)' },
    title: { en: 'Shayara Bano Case', hi: 'शायरा बानो केस', ur: 'شائرہ بانو کیس' },
    what_happened: {
      en: 'Shayara Bano was married for 15 years when her husband sent her a letter pronouncing talaq three times — ending their marriage in seconds. She had no warning, no chance to respond, and no legal recourse at the time. She filed a petition challenging talaq-e-biddat (instant Triple Talaq) as unconstitutional.',
      hi: 'शायरा बानो 15 साल की शादी के बाद तब चौंक गईं जब उनके पति ने एक पत्र भेजकर एक ही बार में तीन बार तलाक लिख दिया। पलभर में उनकी शादी खत्म हो गई। उन्होंने तलाक-ए-बिद्दत को असंवैधानिक घोषित करने की याचिका दाखिल की।',
      ur: 'شائرہ بانو 15 سال کی شادی کے بعد اس وقت حیران رہ گئیں جب ان کے شوہر نے ایک خط میں تین طلاق لکھ کر بھیج دیا۔ ایک لمحے میں ان کی شادی ختم ہو گئی۔ انہوں نے طلاقِ بدعت کو غیر آئینی قرار دینے کی درخواست دائر کی۔',
    },
    judgement: {
      en: 'In a 3:2 majority, the Supreme Court declared instant Triple Talaq unconstitutional — void and illegal from the moment it is pronounced. Parliament subsequently passed the Muslim Women (Protection of Rights on Marriage) Act, 2019, making Triple Talaq a criminal offence punishable by up to 3 years imprisonment.',
      hi: '3:2 के बहुमत से सर्वोच्च न्यायालय ने तत्काल ट्रिपल तलाक को असंवैधानिक घोषित किया। इसके बाद संसद ने मुस्लिम महिला (विवाह अधिकार संरक्षण) अधिनियम 2019 पारित किया, जिसने ट्रिपल तलाक को 3 साल तक की सजा वाला आपराधिक अपराध बना दिया।',
      ur: '3:2 اکثریت سے سپریم کورٹ نے فوری تین طلاق کو غیر آئینی قرار دیا۔ اس کے بعد پارلیمنٹ نے مسلم خواتین (شادی کے حقوق کا تحفظ) ایکٹ 2019 منظور کیا جس نے تین طلاق کو 3 سال تک قید کا جرم بنا دیا۔',
    },
    how_it_helps: {
      en: 'If a husband attempts instant Triple Talaq, it is completely void — the marriage continues. He can be arrested under the 2019 Act and sentenced to up to 3 years in prison. The wife can seek immediate police protection and maintenance.',
      hi: 'ट्रिपल तलाक का प्रयास अब पूरी तरह शून्य और अवैध है। पति को 3 साल तक की सजा हो सकती है। पत्नी तुरंत FIR दर्ज कर सकती है और पुलिस सुरक्षा मांग सकती है।',
      ur: 'تین طلاق کی کوشش مکمل طور پر باطل اور غیر قانونی ہے۔ شوہر کو 3 سال تک قید ہو سکتی ہے۔ بیوی فوری FIR درج کروا سکتی اور پولیس تحفظ مانگ سکتی ہے۔',
    },
  },

  {
    id: 'k_zunaideen_1998',
    year: 1998,
    category: CASE_CATEGORIES.TRIPLE_TALAQ,
    court: { en: 'High Court', hi: 'हाई कोर्ट', ur: 'ہائی کورٹ' },
    title: { en: 'K. Zunaideen Case', hi: 'के. जुनैदीन केस', ur: 'کے. زنیدین کیس' },
    what_happened: {
      en: 'A husband pronounced talaq during an intense argument, in a moment of rage. The wife challenged whether a divorce given in an emotional outburst — without reason, deliberation, or procedure — could be legally valid.',
      hi: 'एक पति ने तीव्र झगड़े के दौरान गुस्से में तलाक दे दिया। पत्नी ने इस भावनात्मक आवेश में दिए गए तलाक की वैधता को चुनौती दी।',
      ur: 'ایک شوہر نے شدید جھگڑے کے دوران غصے کی حالت میں طلاق دے دی۔ بیوی نے اس جذباتی تاؤ میں دی گئی طلاق کی قانونی حیثیت کو چیلنج کیا۔',
    },
    judgement: {
      en: 'The court held that talaq pronounced in anger, without thoughtful intention and without following the required procedural steps, is not a valid divorce. Divorce must be a deliberate, reasoned, and procedurally compliant act.',
      hi: 'अदालत ने माना कि गुस्से में, बिना सोचे-समझे और बिना उचित प्रक्रिया के दिया गया तलाक वैध नहीं होता। तलाक एक जानबूझकर, सुविचारित और प्रक्रियात्मक रूप से सही कार्य होना चाहिए।',
      ur: 'عدالت نے قرار دیا کہ غصے میں، بغیر سوچے سمجھے اور بغیر طریقہ کار کے دی گئی طلاق درست نہیں۔ طلاق ایک سوچا سمجھا، معقول اور طریقہ کار کے مطابق عمل ہونا چاہیے۔',
    },
    how_it_helps: {
      en: 'Women can challenge impulsive or anger-driven talaq. A husband\'s words spoken in a fight cannot legally end a marriage without proper process.',
      hi: 'झगड़े में कहे शब्दों को तलाक नहीं माना जा सकता। महिलाएं ऐसे आवेगी तलाक को कानूनी रूप से चुनौती दे सकती हैं।',
      ur: 'لڑائی میں کہے گئے الفاظ قانونی طور پر طلاق نہیں بن سکتے۔ خواتین ایسی آوارہ طلاق کو چیلنج کر سکتی ہیں۔',
    },
  },

  {
    id: 'hina_2020',
    year: 2020,
    category: CASE_CATEGORIES.TRIPLE_TALAQ,
    court: { en: 'Sessions Court', hi: 'सत्र न्यायालय', ur: 'سیشن کورٹ' },
    title: { en: 'Hina Case', hi: 'हिना केस', ur: 'ہینا کیس' },
    what_happened: {
      en: 'Even after the 2019 Triple Talaq Act made instant Triple Talaq a criminal offence, Hina\'s husband repeatedly threatened and then attempted to divorce her using this now-illegal method. She took legal action under the new Act.',
      hi: '2019 के ट्रिपल तलाक कानून के बावजूद हिना के पति ने बार-बार धमकियां देते हुए इस अवैध तरीके से तलाق देने की कोशिश की। हिना ने नए कानून के तहत FIR दर्ज कराई।',
      ur: '2019 کے قانون کے باوجود ہینا کے شوہر نے بار بار دھمکیاں دیتے ہوئے اس غیر قانونی طریقے سے طلاق دینے کی کوشش کی۔ ہینا نے نئے قانون کے تحت FIR درج کروائی۔',
    },
    judgement: {
      en: 'The husband was arrested and a criminal case was registered under the Muslim Women (Protection of Rights on Marriage) Act, 2019. The court provided Hina with immediate protection.',
      hi: 'पति को गिरफ्तार किया गया। 2019 के अधिनियम के तहत आपराधिक मामला दर्ज हुआ। हिना को तत्काल सुरक्षा मिली।',
      ur: 'شوہر گرفتار ہوا۔ 2019 کے ایکٹ کے تحت فوجداری مقدمہ درج ہوا۔ ہینا کو فوری تحفظ ملا۔',
    },
    how_it_helps: {
      en: 'This case proves the 2019 Act has real teeth. Women facing threats of Triple Talaq can file an FIR immediately, the husband can be arrested, and the attempted divorce is void in law.',
      hi: 'यह मामला साबित करता है कि 2019 का कानून प्रभावी है। ट्रिपल तलाक की धमकी मिलते ही महिलाएं FIR दर्ज करा सकती हैं और पति की गिरफ्तारी करवा सकती हैं।',
      ur: 'یہ مقدمہ ثابت کرتا ہے کہ 2019 کا قانون فعال ہے۔ تین طلاق کی دھمکی ملتے ہی خواتین FIR درج کروا سکتی اور گرفتاری عمل میں لا سکتی ہیں۔',
    },
  },

  {
    id: 'vishaka_1997',
    year: 1997,
    category: CASE_CATEGORIES.WORKPLACE,
    court: { en: 'Supreme Court of India', hi: 'सर्वोच्च न्यायालय', ur: 'سپریم کورٹ آف انڈیا' },
    title: { en: 'Vishaka Case', hi: 'विशाखा केس', ur: 'وشاکھا کیس' },
    what_happened: {
      en: 'Bhanwari Devi was a government social worker in Rajasthan who tried to prevent a child marriage in her village in 1992. In retaliation, she was gang-raped by men from the dominant community. The local court acquitted the accused. Outraged women\'s rights groups, operating under the name "Vishaka," filed a PIL before the Supreme Court demanding legal protections for working women — since no workplace harassment law existed at the time.',
      hi: 'भंवरी देवी राजस्थान में सरकारी सामाजिक कार्यकर्ता थीं। 1992 में उन्होंने अपने गांव में बाल विवाह रोकने की कोशिश की। बदले में प्रभावशाली समुदाय के पुरुषों ने उनके साथ सामूहिक बलात्कार किया। स्थानीय अदालत ने आरोपियों को बरी कर दिया। महिला अधिकार समूहों ने "विशाखा" के नाम से सर्वोच्च न्यायालय में PIL दाखिल की।',
      ur: 'بھنواری دیوی راجستھان میں سرکاری سماجی کارکن تھیں۔ 1992 میں انہوں نے اپنے گاؤں میں بچوں کی شادی روکنے کی کوشش کی۔ اس کے بدلے میں با اثر برادری کے مردوں نے ان کے ساتھ اجتماعی زیادتی کی۔ مقامی عدالت نے ملزمان کو بری کر دیا۔ خواتین کے حقوق کے گروپوں نے "وشاکھا" کے نام سے سپریم کورٹ میں PIL دائر کی۔',
    },
    judgement: {
      en: 'On 13 August 1997, a three-judge bench delivered a historic verdict. The court held that workplace sexual harassment violates Articles 14, 15, 19, and 21 of the Constitution. It issued the "Vishaka Guidelines" — binding rules requiring all employers to form Internal Complaints Committees, define sexual harassment, and create a safe workplace.',
      hi: '13 अगस्त 1997 को तीन न्यायाधीशों की पीठ ने ऐतिहासिक फैसला सुनाया। कार्यस्थल पर यौन उत्पीड़न अनुच्छेद 14, 15, 19 और 21 का उल्लंघन है। "विशाखा दिशा-निर्देश" जारी किए गए — हर नियोक्ता के लिए आंतरिक शिकायत समिति अनिवार्य की गई।',
      ur: '13 اگست 1997 کو تین ججوں کی بینچ نے تاریخی فیصلہ سنایا۔ کام کی جگہ پر جنسی ہراسانی آئین کے آرٹیکل 14، 15، 19 اور 21 کی خلاف ورزی ہے۔ "وشاکھا رہنما اصول" جاری کیے گئے — ہر آجر کے لیے اندرونی شکایت کمیٹی لازمی قرار پائی۔',
    },
    how_it_helps: {
      en: 'The POSH Act (Sexual Harassment of Women at Workplace Act, 2013) grew directly from this case. Every workplace in India — schools, offices, hospitals, NGOs — is legally required to have an Internal Complaints Committee. Women can report harassment and seek formal redressal.',
      hi: 'POSH अधिनियम 2013 इसी मामले से उपजा। हर कार्यस्थल — स्कूल, दफ्तर, अस्पताल — में आंतरिक शिकायत समिति अनिवार्य है। महिलाएं उत्पीड़न की रिपोर्ट कर सकती हैं।',
      ur: 'POSH ایکٹ 2013 اسی مقدمے سے پیدا ہوا۔ ہر کام کی جگہ — اسکول، دفتر، ہسپتال — میں اندرونی شکایت کمیٹی لازمی ہے۔',
    },
  },

  {
    id: 'laxmi_2013',
    year: 2013,
    category: CASE_CATEGORIES.VIOLENCE,
    court: { en: 'Supreme Court of India', hi: 'सर्वोच्च न्यायालय', ur: 'سپریم کورٹ آف انڈیا' },
    title: { en: 'Laxmi Case', hi: 'लक्ष्मी केस', ur: 'لکشمی کیس' },
    what_happened: {
      en: 'Laxmi Aggarwal was just 15 years old in 2005 when a 32-year-old man threw acid on her face after she repeatedly rejected his marriage proposal. She survived but suffered permanent, life-altering injuries. In 2006, she filed a criminal writ petition in the Supreme Court demanding that the government regulate the open sale of acid and introduce stronger criminal penalties.',
      hi: '2005 में लक्ष्मी अग्रवाल मात्र 15 वर्ष की थीं जब 32 वर्षीय नईम खान ने उनकी शादी का प्रस्ताव ठुकराने पर उनके चेहरे पर तेजाब फेंक दिया। 2006 में उन्होंने सर्वोच्च न्यायालय में याचिका दाखिल की — एसिड बिक्री नियंत्रण और सख्त सजा की मांग की।',
      ur: '2005 میں لکشمی اگروال صرف 15 سال کی تھیں جب 32 سالہ نعیم خان نے شادی کی پیش کش ٹھکرانے پر ان کے چہرے پر تیزاب پھینک دیا۔ 2006 میں انہوں نے سپریم کورٹ میں درخواست دائر کی — تیزاب کی فروخت کنٹرول اور سخت سزا کا مطالبہ کیا۔',
    },
    judgement: {
      en: 'The Supreme Court directed the government to regulate acid sales nationally. Acid cannot be sold without a valid ID and purchase record. In April 2013, Parliament introduced Sections 326A and 326B into the IPC — making acid attacks a specific offence with a minimum sentence of 10 years, extendable to life. Attackers must also pay for the victim\'s medical treatment.',
      hi: 'सर्वोच्च न्यायालय ने एसिड बिक्री पर राष्ट्रीय नियंत्रण का निर्देश दिया। अप्रैल 2013 में IPC में धारा 326A और 326B जोड़ी गईं — एसिड हमला न्यूनतम 10 साल की सजा वाला विशेष अपराध बना।',
      ur: 'سپریم کورٹ نے تیزاب کی فروخت پر قومی پابندی کا حکم دیا۔ اپریل 2013 میں IPC میں دفعہ 326A اور 326B شامل کی گئیں — تیزاب حملہ کم از کم 10 سال قید کا مخصوص جرم بنا۔',
    },
    how_it_helps: {
      en: 'Acid is now a controlled substance. Acid attack survivors are entitled to free medical treatment at all hospitals and a minimum compensation of ₹3 lakh. Sellers who sell acid irresponsibly can be prosecuted.',
      hi: 'एसिड अब एक नियंत्रित पदार्थ है। हर अस्पताल एसिड हमले की पीड़िता को मुफ्त इलाज देने के लिए बाध्य है। पीड़िता को न्यूनतम ₹3 लाख मुआवजा मिलता है।',
      ur: 'تیزاب اب ایک کنٹرولڈ مادہ ہے۔ ہر ہسپتال تیزاب حملے کی متاثرہ کو مفت علاج دینے کا پابند ہے۔ متاثرہ کو کم از کم ₹3 لاکھ معاوضہ ملتا ہے۔',
    },
  },

  {
    id: 'nirbhaya_2012',
    year: 2012,
    category: CASE_CATEGORIES.VIOLENCE,
    court: { en: 'Fast-Track Court → Supreme Court of India', hi: 'फास्ट-ट्रैक कोर्ट → सर्वोच्च न्यायालय', ur: 'فاسٹ ٹریک عدالت → سپریم کورٹ آف انڈیا' },
    title: { en: 'Nirbhaya Case', hi: 'निर्भया केस', ur: 'نربھیا کیس' },
    what_happened: {
      en: 'On the night of 16 December 2012, a 23-year-old paramedic student was brutally gang-raped and tortured on a private bus in Delhi by six men. She died thirteen days later. The case triggered nationwide protests and an unprecedented national conversation about the safety of women in public spaces.',
      hi: '16 दिसंबर 2012 की रात दिल्ली में एक 23 वर्षीया पैरामेडिकल छात्रा के साथ एक चलती बस में छह पुरुषों ने सामूहिक बलात्कार और क्रूर अत्याचार किया। 13 दिन बाद उनकी मृत्यु हो गई। इस मामले ने पूरे देश में अभूतपूर्व आंदोलन खड़ा किया।',
      ur: '16 دسمبر 2012 کی رات دہلی میں ایک 23 سالہ طبی طالبہ کے ساتھ چلتی بس میں چھ مردوں نے اجتماعی زیادتی اور بہیمانہ تشدد کیا۔ 13 دن بعد ان کا انتقال ہو گیا۔ اس مقدمے نے پورے ملک میں غیر معمولی تحریک کو جنم دیا۔',
    },
    judgement: {
      en: 'The government formed the Justice Verma Committee to review sexual assault laws. Parliament passed the Criminal Law (Amendment) Act, 2013 — broadening the definition of rape, criminalising stalking, voyeurism, and acid attacks, and providing for the death penalty in cases resulting in death. A ₹1,000 crore Nirbhaya Fund was created for women\'s safety. The four surviving convicts were hanged on 20 March 2020.',
      hi: 'न्यायमूर्ति वर्मा समिति ने कानून की समीक्षा की। संसद ने आपराधिक कानून (संशोधन) अधिनियम 2013 पारित किया — बलात्कार की परिभाषा विस्तृत हुई, पीछा करना और ताक-झांक अपराध बने। ₹1,000 करोड़ का निर्भया फंड बना। 20 मार्च 2020 को चारों दोषियों को फांसी दी गई।',
      ur: 'جسٹس ورما کمیٹی نے قانون کا جائزہ لیا۔ پارلیمنٹ نے فوجداری قانون (ترمیمی) ایکٹ 2013 منظور کیا — عصمت دری کی تعریف وسیع ہوئی، پیچھا کرنا اور جھانکنا جرم قرار پائے۔ ₹1,000 کروڑ کا نربھیا فنڈ قائم ہوا۔ 20 مارچ 2020 کو چاروں مجرموں کو پھانسی دی گئی۔',
    },
    judgement: {
      en: 'The government formed the Justice Verma Committee to review sexual assault laws. Parliament passed the Criminal Law (Amendment) Act, 2013 — broadening the definition of rape, criminalising stalking, voyeurism, and acid attacks, and providing for the death penalty in cases resulting in death. A ₹1,000 crore Nirbhaya Fund was created for women\'s safety. The four surviving convicts were hanged on 20 March 2020.',
      hi: 'न्यायमूर्ति वर्मा समिति ने कानून की समीक्षा की। संसद ने आपराधिक कानून (संशोधन) अधिनियम 2013 पारित किया — बलात्कार की परिभाषा विस्तृत हुई, पीछा करना और ताक-झांक अपराध बने। ₹1,000 करोड़ का निर्भया फंड बना। 20 मार्च 2020 को चारों दोषियों को फांसी दी गई।',
      ur: 'جسٹس ورما کمیٹی نے قانون کا جائزہ لیا۔ پارلیمنٹ نے فوجداری قانون (ترمیمی) ایکٹ 2013 منظور کیا — عصمت دری کی تعریف وسیع ہوئی، پیچھا کرنا اور جھانکنا جرم قرار پائے۔ ₹1,000 کروڑ کا نربھیا فنڈ قائم ہوا۔ 20 مارچ 2020 کو چاروں مجرموں کو پھانسی دی گئی۔',
    },
    how_it_helps: {
      en: 'Rape cases are tried in fast-track courts. Stalking and voyeurism are now criminal offences. The Nirbhaya Fund continues to finance women\'s safety infrastructure across India. Women have stronger legal protections against a wider range of sexual offences.',
      hi: 'यौन अपराधों के लिए फास्ट-ट्रैक अदालतें हैं। पीछा करना और ताक-झांक अपराध हैं। निर्भया फंड पूरे भारत में महिला सुरक्षा परियोजनाओं को वित्त पोषित करता है।',
      ur: 'جنسی جرائم کے لیے فاسٹ ٹریک عدالتیں ہیں۔ پیچھا کرنا اور جھانکنا قانوناً جرم ہیں۔ نربھیا فنڈ پورے ہندوستان میں خواتین کی حفاظت کے منصوبوں کو مالی مدد دیتا ہے۔',
    },
  },
];