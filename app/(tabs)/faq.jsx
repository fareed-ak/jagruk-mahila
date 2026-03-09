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
import { faqs } from '../../constants/faqData';
import GlobalStyles, { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../styles/GlobalStyles';

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const [openFaqId, setOpenFaqId] = useState(null);
  const currentLang = i18n.language || 'en';

  const toggleFaq = (id) => {
    setOpenFaqId(prev => prev === id ? null : id);
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
          activeOpacity={0.7}
        >
          <Text style={[styles.questionText, isRTL && styles.textRTL]}>
            {question}
          </Text>
          <Ionicons
            name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={18}
            color={Colors.primary}
            style={[styles.chevronIcon, isRTL && styles.chevronIconRTL]}
          />
        </TouchableOpacity>
        
        {isOpen && (
          <>
            <View style={styles.dividerLine} />
            <View style={styles.answerContainer}>
              <Text style={[styles.answerText, isRTL && styles.textRTL]}>
                {answer}
              </Text>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={[GlobalStyles.container, isRTL && styles.containerRTL]}>
      <StatusBar style="light" backgroundColor={Colors.primary} />
      
      {/* Hero Band */}
      <View style={styles.heroBand}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backArrow}>{isRTL ? '→' : '←'}</Text>
        </TouchableOpacity>
        <Text style={styles.heroTitle}>{t('more.faqs')}</Text>
        <View style={styles.backButtonSpacer} />
      </View>

      {/* Info Banner */}
      <View style={[styles.infoBanner, isRTL && styles.infoBannerRTL]}>
        <View style={styles.bannerBorder} />
        <Text style={[styles.bannerText, isRTL && styles.textRTL]}>
          {t('more.faqs_banner')}
        </Text>
      </View>

      {/* FAQ List */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {faqs.map(renderFaqItem)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerRTL: {
    flexDirection: 'row-reverse',
  },

  // Hero Band Styles
  heroBand: {
    backgroundColor: '#C0392B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  backButtonSpacer: {
    width: 36,
  },
  heroTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Info Banner Styles
  infoBanner: {
    backgroundColor: '#FDF6EE',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginHorizontal: Spacing.large,
    marginTop: Spacing.medium,
    borderRadius: BorderRadius.small,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoBannerRTL: {
    flexDirection: 'row-reverse',
  },
  bannerBorder: {
    width: 4,
    height: '100%',
    backgroundColor: '#F5A623',
    marginRight: Spacing.medium,
    borderRadius: 2,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  bannerText: {
    fontSize: Typography.bodySmall,
    color: '#8C6B55',
    marginLeft: 16,
    flex: 1,
  },

  // Scroll Container Styles
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  // FAQ Styles
  faqCard: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
    ...Shadows.small,
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 60,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  faqHeaderRTL: {
    flexDirection: 'row-reverse',
  },
  questionText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A0A00',
    flex: 1,
    paddingRight: 12,
    lineHeight: 20,
  },
  chevronIcon: {
    marginLeft: Spacing.small,
  },
  chevronIconRTL: {
    marginLeft: 0,
    marginRight: Spacing.small,
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#F0E8E0',
    marginHorizontal: 18,
  },
  answerContainer: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  answerText: {
    fontSize: 14,
    color: '#4A3728',
    lineHeight: 22,
  },

  // RTL Text Styles
  textRTL: {
    textAlign: 'right',
  },
});