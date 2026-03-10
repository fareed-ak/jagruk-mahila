import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  I18nManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useCallback, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Colors,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
} from '../../styles/GlobalStyles';

// ── Gemini ────────────────────────────────────────────────────────────────────

const GEMINI_API_KEY = 'it ain\'t here lil bro';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `You are "NCW Sahayata Bot," a compassionate and knowledgeable assistant for the National Commission for Women (NCW), India.

ROLE: Help women understand their legal rights, navigate the justice system, and connect with support resources.

LEGAL EXPERTISE:
- Indian Penal Code (IPC) & CrPC
- Protection of Women from Domestic Violence Act
- Prevention of Sexual Harassment at Workplace (PoSH) Act
- Muslim Women (Protection of Rights on Marriage) Act, 2019 (Triple Talaq)
- Other women-centric legislation

⚠️ SAFETY FIRST: If the user's message implies immediate danger or threat, respond FIRST with:
"Please call 112 (Emergency) or 181 (Women's Helpline) immediately."

RESPONSE FORMAT:
1. Keep the full reply short, usually 2 to 4 short sentences
2. Give a direct answer in plain text
3. Mention only the most important right or next step
4. Include helpline numbers only when relevant

TONE: Warm, non-judgmental, empowering. Speak simply — avoid legal jargon.

STYLE RULES:
- Do not use markdown
- Do not use asterisks, bold, italics, bullet symbols, or headings
- Do not format text like *text* or **text**
- Write in plain sentences only

DISCLAIMER: Always end with — "This is general legal information, not formal legal advice. For your specific case, please consult a lawyer or contact NCW: 7827-170-170."`;

// ── Helpers ───────────────────────────────────────────────────────────────────

let _id = 0;
const uid = () => String(++_id);

const PHONE_SPLIT = /\b(112|181|7827-170-170)\b/g;
const PHONE_TEST = /^(112|181|7827-170-170)$/;

const sanitizeReply = (text) =>
  text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/^\s*[-•]\s+/gm, '')
    .trim();

const welcomeText = (lang) => ({
  en: `Namaste 🙏 I'm Sahayata Bot, your NCW legal assistant.\n\nI'm here to help you understand your rights and connect you with the right support. How can I help you today?\n\nIf you're in immediate danger, please call 112 or 181 right away.`,
  hi: `नमस्ते 🙏 मैं सहायता बॉट हूँ, आपकी एनसीडब्ल्यू कानूनी सहायक।\n\nमैं आपके अधिकारों को समझने और सही सहायता से जोड़ने के लिए यहाँ हूँ। आज मैं आपकी कैसे मदद कर सकती हूँ?\n\nयदि आप तत्काल खतरे में हैं, तो कृपया अभी 112 या 181 पर कॉल करें।`,
  ur: `نمسکار 🙏 میں سہایتا بوٹ ہوں، آپ کی NCW قانونی معاون۔\n\nمیں آپ کے حقوق سمجھنے اور صحیح مدد سے جوڑنے کے لیے یہاں ہوں۔ آج میں آپ کی کیسے مدد کر سکتی ہوں؟\n\nاگر آپ فوری خطرے میں ہیں تو ابھی 112 یا 181 پر کال کریں۔`,
}[lang] ?? `Namaste 🙏 I'm Sahayata Bot, your NCW legal assistant.\n\nI'm here to help you understand your rights and connect you with the right support. How can I help you today?\n\nIf you're in immediate danger, please call 112 or 181 right away.`);

// ── Component ─────────────────────────────────────────────────────────────────

export default function Chat() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isRTL = I18nManager.isRTL;

  const makeWelcome = () => ({ id: 'welcome', role: 'model', text: welcomeText(lang) });

  const [messages, setMessages] = useState(() => [makeWelcome()]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [kbPad, setKbPad] = useState(0);
  const listRef = useRef(null);

  // Expo uses 'pan' keyboard mode by default on Android (not adjustResize),
  // so the OS doesn't shrink the layout. We manually add paddingBottom = keyboard height.
  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const show = Keyboard.addListener('keyboardDidShow', (e) => setKbPad(e.endCoordinates.height));
    const hide = Keyboard.addListener('keyboardDidHide', () => setKbPad(0));
    return () => { show.remove(); hide.remove(); };
  }, []);

  // Strings
  const appName = { hi: 'सहायता बॉट', ur: 'سہایتا بوٹ' }[lang] ?? 'Sahayata Bot';
  const subheading = { hi: 'एआई सहायक', ur: 'اے آئی مددگار' }[lang] ?? 'AI Assistant';
  const clearLabel = { hi: 'चैट साफ़ करें', ur: 'چیٹ صاف کریں' }[lang] ?? 'Clear Chat';
  const placeholder = { hi: 'अपना सवाल लिखें…', ur: 'اپنا سوال لکھیں…' }[lang] ?? 'Type your question…';
  const errFallback = { hi: 'जवाब नहीं मिला। पुनः प्रयास करें।', ur: 'جواب نہیں ملا۔ دوبارہ کوشش کریں۔' }[lang] ?? 'Could not get a response. Please try again.';
  const errNetwork = { hi: 'नेटवर्क त्रुटि। इंटरनेट जांचें।', ur: 'نیٹ ورک خرابی۔ انٹرنیٹ چیک کریں۔' }[lang] ?? 'Network error. Check your connection.';

  // Clear
  const handleClear = useCallback(() => {
    const msg = { hi: 'चैट इतिहास साफ़ करें?', ur: 'چیٹ سمری صاف کریں؟' }[lang] ?? 'Clear all chat history?';
    const cancel = { hi: 'रद्द', ur: 'منسوخ' }[lang] ?? 'Cancel';
    Alert.alert(clearLabel, msg, [
      { text: cancel, style: 'cancel' },
      { text: clearLabel, style: 'destructive', onPress: () => setMessages([makeWelcome()]) },
    ]);
  }, [lang, clearLabel]);

  // Send
  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { id: uid(), role: 'user', text }]);
    setInput('');
    setLoading(true);

    const history = messages
      .filter((m) => m.id !== 'welcome')
      .map((m) => ({ role: m.role, parts: [{ text: m.text }] }));

    try {
      const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [...history, { role: 'user', parts: [{ text }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
        }),
      });
      const json = await res.json();

      if (!res.ok) {
        // Show the API error so we can debug (key invalid, quota, model unavailable…)
        const apiErr = json?.error?.message ?? `HTTP ${res.status}`;
        setMessages((prev) => [...prev, { id: uid(), role: 'model', text: `⚠️ API Error: ${apiErr}` }]);
      } else {
        const rawReply = json?.candidates?.[0]?.content?.parts?.[0]?.text ?? errFallback;
        const reply = sanitizeReply(rawReply);
        setMessages((prev) => [...prev, { id: uid(), role: 'model', text: reply }]);
      }
    } catch (e) {
      setMessages((prev) => [...prev, { id: uid(), role: 'model', text: `⚠️ ${errNetwork}\n\n${e.message}` }]);
    } finally {
      setLoading(false);
      setTimeout(() => listRef.current?.scrollToEnd({ animated: true }), 100);
    }
  }, [input, loading, messages, errFallback, errNetwork]);

  // Phone-aware bot text
  const renderBotText = (text, style) => {
    const parts = text.split(PHONE_SPLIT);
    return (
      <Text style={style}>
        {parts.map((p, i) =>
          PHONE_TEST.test(p) ? (
            <Text key={i} style={styles.phoneLink}
              onPress={() => Linking.openURL(`tel:${p.replace(/-/g, '')}`)}>
              {p}
            </Text>
          ) : <Text key={i}>{p}</Text>
        )}
      </Text>
    );
  };

  // Bubble
  const renderBubble = useCallback(({ item }) => {
    const isUser = item.role === 'user';
    const ts = [styles.bubbleText, isUser ? styles.bubbleTextUser : styles.bubbleTextBot];
    return (
      <View style={[styles.row, isUser ? styles.rowUser : styles.rowBot]}>
        {!isUser && <View style={styles.avatar}><Ionicons name="sparkles" size={14} color="#fff" /></View>}
        <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleBot]}>
          {isUser ? <Text style={ts}>{item.text}</Text> : renderBotText(item.text, ts)}
        </View>
      </View>
    );
  }, [lang]);

  // ── Layout:
  // SafeAreaView (top only — tab navigator already reserves bottom)
  //   Header
  //   KeyboardAvoidingView (iOS padding only; Android: adjustResize handles it natively)
  //     FlatList
  //     TypingIndicator
  //     InputBar

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={[styles.header, isRTL && styles.rowReverse]}>
        <View>
          <Text style={[styles.appName, isRTL && styles.rtl]}>{appName}</Text>
          <Text style={[styles.subheading, isRTL && styles.rtl]}>{subheading}</Text>
        </View>
        <TouchableOpacity style={styles.clearBtn} onPress={handleClear} activeOpacity={0.75}>
          <Ionicons name="trash-outline" size={15} color={Colors.primary} />
          <Text style={styles.clearText}>{clearLabel}</Text>
        </TouchableOpacity>
      </View>

      {/*
        iOS:   KAV adds padding so the input lifts above the keyboard.
               No vertical offset needed — tab content area already sits above the tab bar.
        Android: behavior=undefined → KAV does nothing.
               Expo's adjustResize already shrinks the window above the keyboard,
               so the input naturally stays above it without any extra code.
      */}
      {/* iOS: KAV padding shifts input above keyboard.
          Android: paddingBottom from Keyboard listener does the same job
          because Expo uses pan mode (not adjustResize) by default. */}
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={[styles.flex, Platform.OS === 'android' && { paddingBottom: kbPad }]}>
          <FlatList
            ref={listRef}
            data={messages}
            keyExtractor={(m) => m.id}
            renderItem={renderBubble}
            contentContainerStyle={styles.listContent}
            onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
            showsVerticalScrollIndicator={false}
          />

          {loading && (
            <View style={styles.typingRow}>
              <View style={styles.avatar}><Ionicons name="sparkles" size={14} color="#fff" /></View>
              <View style={[styles.bubble, styles.bubbleBot, styles.typingBubble]}>
                <ActivityIndicator size="small" color={Colors.textSecondary} />
              </View>
            </View>
          )}

          <View style={[styles.inputBar, isRTL && styles.rowReverse]}>
            <TextInput
              style={[styles.input, isRTL && styles.rtl]}
              value={input}
              onChangeText={setInput}
              placeholder={placeholder}
              placeholderTextColor={Colors.textSecondary}
              multiline
              maxLength={1000}
              textAlign={isRTL ? 'right' : 'left'}
              editable={!loading}
            />
            <TouchableOpacity
              style={[styles.sendBtn, (!input.trim() || loading) && styles.sendBtnOff]}
              onPress={handleSend}
              disabled={!input.trim() || loading}
              activeOpacity={0.8}
            >
              <Ionicons name={isRTL ? 'arrow-back' : 'arrow-forward'} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  flex: { flex: 1 },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.background,
  },
  rowReverse: { flexDirection: 'row-reverse' },

  appName: {
    fontSize: Typography.headlineSmall,
    fontWeight: '700',
    color: Colors.primary,
    lineHeight: 30,
  },
  subheading: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: BorderRadius.round,
  },
  clearText: { fontSize: 12, color: Colors.primary, fontWeight: '600' },

  listContent: {
    padding: Spacing.xl,
    gap: Spacing.md,
    paddingBottom: Spacing.lg,
  },

  row: { flexDirection: 'row', alignItems: 'flex-end', gap: Spacing.sm },
  rowUser: { justifyContent: 'flex-end' },
  rowBot: { justifyContent: 'flex-start' },

  avatar: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  bubble: {
    maxWidth: '80%',
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    ...Shadows.small,
  },
  bubbleUser: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  bubbleBot: {
    backgroundColor: Colors.surface,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  bubbleText: { fontSize: 15, lineHeight: 22 },
  bubbleTextUser: { color: Colors.textLight },
  bubbleTextBot: { color: Colors.text },
  phoneLink: {
    color: Colors.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  typingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.sm,
  },
  typingBubble: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },

  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.background,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    fontSize: 15,
    color: Colors.text,
    maxHeight: 120,
    lineHeight: 20,
  },
  sendBtn: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    ...Shadows.small,
  },
  sendBtnOff: { backgroundColor: Colors.textSecondary, opacity: 0.5 },

  rtl: { textAlign: 'right' },
});
