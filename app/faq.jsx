import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { faqs } from '../constants/faqData';
import GlobalStyles, { Colors, Spacing, Shadows } from '../styles/GlobalStyles';

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const [openFaqId, setOpenFaqId] = useState(null);
  const currentLang = i18n.language || 'en';

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const renderFaqItem = (faq) => {
    const isOpen = openFaqId === faq.id;
    const question = faq.question[currentLang] || faq.question.en;
    const answer = faq.answer[currentLang] || faq.answer.en;

    return (
      <View key={faq.id} style={styles.faqCard}>
        <TouchableOpacity
          style={[styles.faqHeader, isRTL && styles.faqHeaderRTL]}
          onPress={() => toggleFaq(faq.id)}
          activeOpacity={0.82}
        >
          <View style={styles.questionWrap}>
            <Text style={[styles.questionText, isRTL && styles.textRTL]}>
              {question}
            </Text>
          </View>
          <View style={styles.chevronWrap}>
            <Ionicons
              name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={20}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.answerContainer}>
            <Text style={[styles.answerText, isRTL && styles.textRTL]}>
              {answer}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="dark" backgroundColor={Colors.background} />

      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.82}
        >
          <Ionicons
            name={isRTL ? 'arrow-forward' : 'arrow-back'}
            size={20}
            color={Colors.backButtonIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Text style={[styles.heroTitle, isRTL && styles.textRTL]}>
            {t('more.faqs')}
          </Text>
          <Text style={[styles.heroSubtitle, isRTL && styles.textRTL]}>
            {t('more.faqs_banner')}
          </Text>
        </View>

        <View style={styles.sectionWrap}>
          {faqs.map(renderFaqItem)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F8EFE3',
  },
  content: {
    paddingBottom: Spacing.xl,
  },
  headerRow: {
    paddingTop: 8,
    paddingHorizontal: Spacing.lg,
    paddingBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8EFE3',
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF7EF',
    borderWidth: 1,
    borderColor: '#DFC5AF',
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.small,
  },
  headerSpacer: {
    width: 42,
  },
  heroCard: {
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.sm,
    paddingHorizontal: 22,
    paddingVertical: 24,
    borderRadius: 28,
    backgroundColor: '#FFF7EF',
    borderWidth: 1,
    borderColor: '#EAD7C5',
    ...Shadows.small,
  },
  heroTitle: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
    color: '#26140A',
  },
  heroSubtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 23,
    color: '#6E5443',
  },
  sectionWrap: {
    marginHorizontal: Spacing.lg,
    marginTop: 22,
    gap: 12,
  },
  faqCard: {
    borderRadius: 22,
    backgroundColor: '#FFFDF9',
    borderWidth: 1,
    borderColor: '#E9DCCF',
    overflow: 'hidden',
    ...Shadows.small,
  },
  faqHeader: {
    minHeight: 72,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  faqHeaderRTL: {
    flexDirection: 'row-reverse',
  },
  questionWrap: {
    flex: 1,
  },
  questionText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '700',
    color: '#2A170D',
  },
  chevronWrap: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerContainer: {
    paddingHorizontal: 18,
    paddingTop: 0,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: '#F0E4D8',
    backgroundColor: '#FCF7F1',
  },
  answerText: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 22,
    color: '#5E483B',
  },
  textRTL: {
    textAlign: 'right',
  },
});
