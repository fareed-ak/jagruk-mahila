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
import { Ionicons } from '@expo/vector-icons';
import { aboutContent, aboutLabels } from '../constants/aboutData';
import GlobalStyles, { Colors, Typography, Spacing, BorderRadius, Shadows } from '../styles/GlobalStyles';

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const currentLang = i18n.language || 'en';

  const renderSection = (sectionKey, content, labelKey, isDisclaimer = false) => {
    const heading = aboutLabels[labelKey][currentLang] || aboutLabels[labelKey].en;
    const body = content[currentLang] || content.en;

    return (
      <View key={sectionKey} style={[styles.sectionCard, isDisclaimer && styles.disclaimerCard]}>
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
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="light" backgroundColor={Colors.primary} />
      
      {/* Hero Band */}
      <View style={styles.heroBand}>
        <TouchableOpacity 
          style={GlobalStyles.backButton} 
          onPress={() => router.back()}
        >
          <Ionicons 
            name={isRTL ? "arrow-forward" : "arrow-back"} 
            size={20} 
            color={Colors.backButtonIcon} 
          />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heroTitle}>Jagruk Mahila</Text>
          <Text style={styles.heroVersion}>Version {aboutContent.version}</Text>
        </View>
        <View style={styles.backButtonSpacer} />
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderSection('mission', aboutContent.mission, 'mission_heading')}
        {renderSection('what_we_offer', aboutContent.what_we_offer, 'what_we_offer_heading')}
        {renderSection('disclaimer', aboutContent.disclaimer, 'disclaimer_heading', true)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

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
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroVersion: {
    color: '#FFFFFF',
    opacity: 0.8,
    fontSize: 12,
    marginTop: 2,
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
  disclaimerCard: {
    backgroundColor: '#FFF8F0',
    borderLeftWidth: 3,
    borderLeftColor: '#F5A623',
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sectionBody: {
    fontSize: 15,
    color: '#4A3728',
    lineHeight: 24,
  },

  // RTL Text Styles
  textRTL: {
    textAlign: 'right',
  },
});