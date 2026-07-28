import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  Linking,
  Modal,
  Platform,
  Pressable,
  ScrollView,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useCallback, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Colors,
  Typography,
  Spacing,
  Shadows,
} from '../../styles/GlobalStyles';

// ── Backend ───────────────────────────────────────────────────────────────────

const CHAT_API_BASE_URL = Constants.expoConfig?.extra?.chatApiBaseUrl?.replace(/\/$/, '');
const REPORT_API_BASE_URL = Constants.expoConfig?.extra?.reportApiBaseUrl?.replace(/\/$/, '');
const CHAT_URL = CHAT_API_BASE_URL ? `${CHAT_API_BASE_URL}/chat` : null;
const REPORT_URL = REPORT_API_BASE_URL ? `${REPORT_API_BASE_URL}/report` : null;

// ── Helpers ───────────────────────────────────────────────────────────────────

let _id = 0;
const uid = () => `${Date.now()}-${++_id}-${Math.random().toString(36).slice(2, 8)}`;

const PHONE_TEST = /^(112|181|7827-170-170)$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CLIENT_ID_KEY = 'clientId';

const generateUuidV4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = Math.floor(Math.random() * 16);
    const value = char === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });

const sanitizeReply = (text) => String(text ?? '').trim();

const INLINE_MARKDOWN_SPLIT = /(\b(?:112|181|7827-170-170)\b|\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_)/g;
const BULLET_LINE = /^\s*[-•]\s+/;

const renderInlineMarkdown = (text) =>
  text.split(INLINE_MARKDOWN_SPLIT).filter(Boolean).map((part, index) => {
    if (PHONE_TEST.test(part)) {
      return (
        <Text
          key={index}
          style={styles.phoneLink}
          onPress={() => Linking.openURL(`tel:${part.replace(/-/g, '')}`)}
        >
          {part}
        </Text>
      );
    }

    if (
      (part.startsWith('**') && part.endsWith('**')) ||
      (part.startsWith('__') && part.endsWith('__'))
    ) {
      return <Text key={index} style={styles.markdownBold}>{part.slice(2, -2)}</Text>;
    }

    if (
      (part.startsWith('*') && part.endsWith('*')) ||
      (part.startsWith('_') && part.endsWith('_'))
    ) {
      return <Text key={index} style={styles.markdownItalic}>{part.slice(1, -1)}</Text>;
    }

    return <Text key={index}>{part}</Text>;
  });

const getFriendlyChatErrorKey = (status) => {
  if (status === 400) return 'chat.error_request';
  if (status === 401 || status === 403) return 'chat.error_service';
  if (status === 429) return 'chat.error_busy';
  if (status >= 500) return 'chat.error_service';
  return 'chat.error_fallback';
};

const getFriendlyReportErrorKey = (status) => {
  if (status === 400) return 'chat.report_error_try_again';
  if (status === 429) return 'chat.report_error_busy';
  if (status >= 500) return 'chat.report_error_service';
  return 'chat.report_error_message';
};

const getFriendlyChatErrorKeyFromCode = (errorCode, status) => {
  if (errorCode === 'bad_request') return 'chat.error_request';
  if (errorCode === 'busy') return 'chat.error_busy';
  if (errorCode === 'service_unavailable') return 'chat.error_service';
  return getFriendlyChatErrorKey(status);
};

const getFriendlyReportErrorKeyFromCode = (errorCode, status) => {
  if (errorCode === 'bad_request') return 'chat.report_error_try_again';
  if (errorCode === 'busy') return 'chat.report_error_busy';
  if (errorCode === 'service_unavailable') return 'chat.report_error_service';
  return getFriendlyReportErrorKey(status);
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Chat() {
  const { t, i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language;

  const makeWelcome = useCallback(
    () => ({ id: 'welcome', role: 'model', text: t('chat.welcome') }),
    [resolvedLanguage, t],
  );

  const [messages, setMessages] = useState(() => [makeWelcome()]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [kbPad, setKbPad] = useState(0);
  const [modalKeyboardHeight, setModalKeyboardHeight] = useState(0);
  const [reportVisible, setReportVisible] = useState(false);
  const [reportTarget, setReportTarget] = useState(null);
  const [reportReason, setReportReason] = useState('');
  const [reportOtherText, setReportOtherText] = useState('');
  const [reportEmail, setReportEmail] = useState('');
  const [reportSubmitting, setReportSubmitting] = useState(false);
  const [clientId, setClientId] = useState(null);
  const listRef = useRef(null);

  // Expo uses 'pan' keyboard mode by default on Android (not adjustResize),
  // so the OS doesn't shrink the layout. We manually add paddingBottom = keyboard height.
  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const show = Keyboard.addListener('keyboardDidShow', (event) => {
      const keyboardHeight = event.endCoordinates.height;

      if (reportVisible) {
        setKbPad(0);
        setModalKeyboardHeight(keyboardHeight);
        return;
      }

      setModalKeyboardHeight(0);
      setKbPad(keyboardHeight);
    });
    const hide = Keyboard.addListener('keyboardDidHide', () => {
      setKbPad(0);
      setModalKeyboardHeight(0);
    });
    return () => { show.remove(); hide.remove(); };
  }, [reportVisible]);

  useEffect(() => {
    setMessages((prev) => {
      if (!prev.length || prev[0]?.id !== 'welcome') return prev;
      return [{ ...prev[0], text: t('chat.welcome') }, ...prev.slice(1)];
    });
  }, [resolvedLanguage, t]);

  useEffect(() => {
    let active = true;

    const loadClientId = async () => {
      try {
        const existingClientId = await AsyncStorage.getItem(CLIENT_ID_KEY);

        if (existingClientId) {
          if (active) setClientId(existingClientId);
          return;
        }

        const newClientId = generateUuidV4();
        await AsyncStorage.setItem(CLIENT_ID_KEY, newClientId);
        if (active) setClientId(newClientId);
      } catch {
        if (active) setClientId(generateUuidV4());
      }
    };

    loadClientId();

    return () => {
      active = false;
    };
  }, []);

  const reportReasons = [
    {
      value: 'Offensive',
      label: t('chat.reason_offensive'),
    },
    {
      value: 'Irrelevant',
      label: t('chat.reason_irrelevant'),
    },
    {
      value: 'Misleading',
      label: t('chat.reason_misleading'),
    },
    {
      value: 'Unsafe',
      label: t('chat.reason_unsafe'),
    },
    {
      value: 'Other',
      label: t('chat.reason_other'),
    },
  ];

  // Clear
  const handleClear = useCallback(() => {
    Alert.alert(t('chat.clear_label'), t('chat.clear_message'), [
      { text: t('common.cancel'), style: 'cancel' },
      { text: t('chat.clear_label'), style: 'destructive', onPress: () => setMessages([makeWelcome()]) },
    ]);
  }, [makeWelcome, t]);

  const closeReportModal = useCallback(() => {
    if (reportSubmitting) return;
    Keyboard.dismiss();
    setModalKeyboardHeight(0);
    setReportVisible(false);
    setReportTarget(null);
    setReportReason('');
    setReportOtherText('');
    setReportEmail('');
  }, [reportSubmitting]);

  const openReportModal = useCallback((item) => {
    if (!item?.reportable) return;
    setReportTarget(item);
    setReportReason('');
    setReportOtherText('');
    setReportEmail('');
    setReportVisible(true);
  }, []);

  const handleReportSubmit = useCallback(async () => {
    if (!reportTarget || reportSubmitting) return;

    const trimmedEmail = reportEmail.trim();
    const email = trimmedEmail.length ? trimmedEmail : null;
    const otherText = reportOtherText.trim();

    if (!reportReason) {
      Alert.alert(t('chat.report_error_title'), t('chat.report_reason_required'));
      return;
    }

    const emailOk = !email || EMAIL_REGEX.test(email);
    if (!emailOk) {
      Alert.alert(t('chat.report_error_title'), t('chat.email_invalid'));
      return;
    }

    if (reportReason === 'Other' && !otherText) {
      Alert.alert(t('chat.report_error_title'), t('chat.other_reason_required'));
      return;
    }

    if (!REPORT_URL) {
      Alert.alert(t('chat.report_error_title'), t('chat.backend_url_missing'));
      return;
    }

    if (!clientId) {
      Alert.alert(t('chat.report_error_title'), t('chat.error_fallback'));
      return;
    }

    Keyboard.dismiss();
    setReportSubmitting(true);

    try {
      const res = await fetch(REPORT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': clientId,
        },
        body: JSON.stringify({
          message: reportTarget.text,
          query: reportTarget.query ?? 'N/A',
          reason: reportReason === 'Other' ? `Other: ${otherText}` : reportReason,
          email,
        }),
      });

      const raw = await res.text();
      let json = null;
      try {
        json = raw ? JSON.parse(raw) : null;
      } catch {
        json = null;
      }

      if (!res.ok) {
        throw new Error(JSON.stringify({
          status: res.status,
          errorCode: json?.errorCode || null,
        }));
      }

      closeReportModal();
      setMessages((prev) => prev.map((message) => (
        message.id === reportTarget.id ? { ...message, reported: true } : message
      )));
      Alert.alert(t('chat.report_success_title'), t('chat.report_success_message'));
    } catch (error) {
      let payload = null;
      try {
        payload = error?.message ? JSON.parse(error.message) : null;
      } catch {
        payload = null;
      }
      const messageKey = payload
        ? getFriendlyReportErrorKeyFromCode(payload.errorCode, payload.status)
        : 'chat.report_error_message';
      Alert.alert(t('chat.report_error_title'), t(messageKey));
    } finally {
      setReportSubmitting(false);
    }
  }, [
    closeReportModal,
    clientId,
    reportEmail,
    reportOtherText,
    reportReason,
    reportSubmitting,
    reportTarget,
    t,
  ]);

  // Send
  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    if (!CHAT_URL) {
      setMessages((prev) => [...prev, {
        id: uid(),
        role: 'model',
        text: t('chat.backend_url_missing'),
        query: text,
        reportable: false,
      }]);
      return;
    }

    setMessages((prev) => [...prev, { id: uid(), role: 'user', text }]);
    setInput('');
    setLoading(true);

    const requestHeaders = {
      'Content-Type': 'application/json',
      ...(clientId ? { 'x-client-id': clientId } : {}),
    };

    try {
      const res = await fetch(CHAT_URL, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          question: text,
        }),
      });
      const raw = await res.text();
      let json = null;
      try {
        json = raw ? JSON.parse(raw) : null;
      } catch {
        json = null;
      }

      if (!res.ok) {
        setMessages((prev) => [...prev, {
          id: uid(),
          role: 'model',
          text: t(getFriendlyChatErrorKeyFromCode(json?.errorCode, res.status)),
          query: text,
          reportable: true,
        }]);
      } else {
        const rawReply = json?.answer ?? t('chat.error_fallback');
        const reply = sanitizeReply(rawReply);
        setMessages((prev) => [...prev, {
          id: uid(),
          role: 'model',
          text: reply,
          query: text,
          reportable: true,
        }]);
      }
    } catch (e) {
      setMessages((prev) => [...prev, {
        id: uid(),
        role: 'model',
        text: t('chat.error_network'),
        query: text,
        reportable: true,
      }]);
    } finally {
      setLoading(false);
      setTimeout(() => listRef.current?.scrollToEnd({ animated: true }), 100);
    }
  }, [clientId, input, loading, t]);

  // Markdown-aware bot text
  const renderBotText = (text, style) => {
    const lines = text.split('\n');

    return (
      <Text style={style}>
        {lines.map((line, index) => {
          const isBullet = BULLET_LINE.test(line);
          const content = isBullet ? line.replace(BULLET_LINE, '') : line;

          return (
            <Text key={index}>
              {isBullet ? '• ' : ''}
              {renderInlineMarkdown(content)}
              {index < lines.length - 1 ? '\n' : ''}
            </Text>
          );
        })}
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
        <View style={styles.messageStack}>
          <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleBot]}>
            {isUser ? <Text style={ts}>{item.text}</Text> : renderBotText(item.text, ts)}
          </View>
          {item.reportable && !item.reported && (
            <TouchableOpacity
              style={styles.reportAction}
              onPress={() => openReportModal(item)}
              activeOpacity={0.7}
            >
              <Text style={styles.reportActionText}>{t('chat.report_action')}</Text>
            </TouchableOpacity>
          )}
          {item.reported && (
            <Text style={styles.reportedText}>{t('chat.reported')}</Text>
          )}
        </View>
      </View>
    );
  }, [openReportModal, t]);

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
      <View style={styles.headerWrap}>
        <View style={[styles.header, isRTL && styles.rowReverse]}>
          <View>
            <Text style={[styles.appName, isRTL && styles.rtl]}>{t('chat.app_name')}</Text>
            <Text style={[styles.subheading, isRTL && styles.rtl]}>{t('chat.subheading')}</Text>
          </View>
          <TouchableOpacity style={styles.clearBtn} onPress={handleClear} activeOpacity={0.75}>
            <Ionicons name="trash-outline" size={15} color={Colors.primary} />
            <Text style={styles.clearText}>{t('chat.clear_label')}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.noticeBanner, isRTL && styles.rowReverse]}>
          <Ionicons name="information-circle-outline" size={15} color="#8B6A57" />
          <Text style={[styles.noticeText, isRTL && styles.rtl]}>{t('chat.accuracy_notice')}</Text>
        </View>
        <View style={styles.headerDivider} />
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
            keyExtractor={(m, index) => `${m.id}-${index}`}
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
              placeholder={t('chat.placeholder')}
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

      <Modal
        visible={reportVisible}
        transparent
        animationType="fade"
        onRequestClose={closeReportModal}
      >
        <KeyboardAvoidingView
          style={styles.modalKeyboardWrap}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <Pressable
            style={[
              styles.modalOverlay,
              modalKeyboardHeight > 0 && {
                justifyContent: 'flex-end',
                paddingBottom: modalKeyboardHeight + Spacing.md,
              },
            ]}
            onPress={closeReportModal}
          >
            <Pressable style={styles.modalCard} onPress={() => {}}>
              <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.modalScrollContent}
              >
                <Text style={[styles.modalTitle, isRTL && styles.rtl]}>{t('chat.report_title')}</Text>
                <Text style={[styles.modalText, isRTL && styles.rtl]}>{t('chat.report_prompt')}</Text>

                <View style={styles.reasonList}>
                  {reportReasons.map((reason) => {
                    const selected = reportReason === reason.value;
                    return (
                      <TouchableOpacity
                        key={reason.value}
                        style={[styles.reasonChip, selected && styles.reasonChipActive]}
                        onPress={() => setReportReason(reason.value)}
                        activeOpacity={0.8}
                      >
                        <Text style={[styles.reasonChipText, selected && styles.reasonChipTextActive]}>
                          {reason.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>

                {reportReason === 'Other' && (
                  <>
                    <Text style={[styles.modalLabel, isRTL && styles.rtl]}>{t('chat.other_reason_label')}</Text>
                    <TextInput
                      style={[styles.modalInput, isRTL && styles.rtl]}
                      value={reportOtherText}
                      onChangeText={setReportOtherText}
                      placeholder={t('chat.other_reason_placeholder')}
                      placeholderTextColor={Colors.textSecondary}
                      maxLength={25}
                      editable={!reportSubmitting}
                      textAlign={isRTL ? 'right' : 'left'}
                    />
                  </>
                )}

                <Text style={[styles.modalLabel, isRTL && styles.rtl]}>{t('chat.email_label')}</Text>
                <TextInput
                  style={[styles.modalInput, isRTL && styles.rtl]}
                  value={reportEmail}
                  onChangeText={setReportEmail}
                  placeholder={t('chat.email_placeholder')}
                  placeholderTextColor={Colors.textSecondary}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!reportSubmitting}
                  textAlign={isRTL ? 'right' : 'left'}
                />

                <Text style={[styles.modalFootnote, isRTL && styles.rtl]}>{t('chat.report_hint')}</Text>

                <View style={[styles.modalActions, isRTL && styles.rowReverse]}>
                  <TouchableOpacity
                    style={styles.modalCancelBtn}
                    onPress={closeReportModal}
                    disabled={reportSubmitting}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.modalCancelText}>{t('common.cancel')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.modalSubmitBtn,
                      (!reportReason || reportSubmitting) && styles.modalSubmitBtnOff,
                    ]}
                    onPress={handleReportSubmit}
                    disabled={!reportReason || reportSubmitting}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.modalSubmitText}>
                      {reportSubmitting ? '...' : t('chat.submit_label')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </Pressable>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F8EFE3' },
  flex: { flex: 1 },

  headerWrap: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: Spacing.md,
  },
  headerDivider: {
    height: 1,
    backgroundColor: '#E0CCB7',
    marginBottom: Spacing.sm,
  },
  noticeBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: Spacing.sm,
    borderRadius: 14,
    backgroundColor: '#F6ECDD',
  },
  noticeText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#8B6A57',
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
    color: '#8B6A57',
    marginTop: 4,
    letterSpacing: 0.4,
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#DFC5AF',
    borderRadius: 16,
    backgroundColor: '#FFFDF9',
  },
  clearText: { fontSize: 12, color: Colors.primary, fontWeight: '600' },

  listContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    gap: Spacing.md,
    paddingBottom: Spacing.md,
  },

  row: { flexDirection: 'row', alignItems: 'flex-end', gap: Spacing.sm },
  rowUser: { justifyContent: 'flex-end' },
  rowBot: { justifyContent: 'flex-start' },
  messageStack: { maxWidth: '80%' },

  avatar: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  bubble: {
    borderRadius: 20,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    ...Shadows.small,
  },
  bubbleUser: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 6,
  },
  bubbleBot: {
    backgroundColor: '#FFFDF9',
    borderBottomLeftRadius: 6,
    borderWidth: 1,
    borderColor: '#E9DCCF',
  },
  bubbleText: { fontSize: 15, lineHeight: 22 },
  bubbleTextUser: { color: Colors.textLight },
  bubbleTextBot: { color: Colors.text },
  markdownBold: { fontWeight: '700' },
  markdownItalic: { fontStyle: 'italic' },
  phoneLink: {
    color: Colors.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  reportAction: {
    alignSelf: 'flex-start',
    marginTop: 6,
    paddingHorizontal: 4,
  },
  reportActionText: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
  },
  reportedText: {
    alignSelf: 'flex-start',
    marginTop: 6,
    paddingHorizontal: 4,
    fontSize: 12,
    color: Colors.textSecondary,
  },

  typingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
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
    marginHorizontal: Spacing.lg,
    marginTop: 4,
    marginBottom: Spacing.lg,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    borderWidth: 1,
    borderColor: '#DFC5AF',
    borderRadius: 22,
    paddingHorizontal: Spacing.lg,
    paddingVertical: 11,
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

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(44, 30, 18, 0.36)',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
  },
  modalKeyboardWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  modalCard: {
    backgroundColor: '#FFF9F3',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E5D3BF',
    maxHeight: '88%',
    ...Shadows.small,
  },
  modalScrollContent: {
    padding: Spacing.lg,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
  },
  modalText: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.text,
    marginTop: 8,
  },
  reasonList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: Spacing.md,
    marginBottom: Spacing.md,
  },
  reasonChip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#D8C2AC',
    backgroundColor: '#FFFDF9',
  },
  reasonChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  reasonChipText: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: '600',
  },
  reasonChipTextActive: {
    color: '#FFF',
  },
  modalLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#D8C2AC',
    borderRadius: 16,
    backgroundColor: '#FFFDF9',
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: Colors.text,
  },
  modalFootnote: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.textSecondary,
    marginTop: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: Spacing.lg,
  },
  modalCancelBtn: {
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D8C2AC',
    backgroundColor: '#FFFDF9',
  },
  modalCancelText: {
    color: Colors.primary,
    fontWeight: '600',
  },
  modalSubmitBtn: {
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 16,
    backgroundColor: Colors.primary,
  },
  modalSubmitBtnOff: {
    opacity: 0.6,
  },
  modalSubmitText: {
    color: '#FFF',
    fontWeight: '700',
  },

  rtl: { textAlign: 'right' },
});
