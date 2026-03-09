import React from 'react';
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
import { privacyContent } from '../../constants/privacyData';
import GlobalStyles, { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../styles/GlobalStyles';

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const currentLang = i18n.language || 'en';

  const renderSection = (item, index) => {
    const heading = item.heading[currentLang] || item.heading.en;
    const body = item.body[currentLang] || item.body.en;

    return (
      <View key={item.id} style={styles.sectionCard}>
        <Text style={[styles.sectionHeading, isRTL && styles.textRTL]}>
          {heading}
        </Text>
        <Text style={[styles.sectionBody, isRTL && styles.textRTL]}>
          {body}
        </Text>
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
        <Text style={styles.heroTitle}>{t('more.privacy')}</Text>
        <View style={styles.backButtonSpacer} />
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {privacyContent.map((item, index) => renderSection(item, index))}
        
        {/* Last Updated Note */}
        <Text style={[styles.lastUpdatedText, isRTL && styles.textRTL]}>
          Last updated: March 2026
        </Text>
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

  // Content Styles
  sectionCard: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 20,
    marginBottom: 14,
    ...Shadows.small,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#C0392B',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  sectionBody: {
    fontSize: 14,
    color: '#4A3728',
    lineHeight: 22,
  },

  // Last Updated Styles
  lastUpdatedText: {
    fontSize: 12,
    color: '#8C6B55',
    textAlign: 'center',
    paddingVertical: 24,
    marginTop: Spacing.medium,
  },

  // RTL Text Styles
  textRTL: {
    textAlign: 'right',
  },
});