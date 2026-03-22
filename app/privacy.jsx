import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  I18nManager,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { privacyContent } from '../constants/privacyData';
import GlobalStyles, { Colors, Spacing, Shadows } from '../styles/GlobalStyles';

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const currentLang = i18n.language || 'en';
  const emailSplitRegex = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
  const emailCheckRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmailPress = async (email) => {
    const url = `mailto:${email}`;
    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  const renderBodyText = (body) => {
    const parts = body.split(emailSplitRegex);

    return parts.map((part, index) => {
      if (!emailCheckRegex.test(part)) {
        return part;
      }

      return (
        <Text
          key={`${part}-${index}`}
          style={styles.emailLink}
          onPress={() => handleEmailPress(part)}
        >
          {part}
        </Text>
      );
    });
  };

  const renderSection = (item) => {
    const heading = item.heading[currentLang] || item.heading.en;
    const body = item.body[currentLang] || item.body.en;

    return (
      <View key={item.id} style={styles.sectionCard}>
        <Text style={[styles.sectionHeading, isRTL && styles.textRTL]}>
          {heading}
        </Text>
        <Text style={[styles.sectionBody, isRTL && styles.textRTL]}>
          {renderBodyText(body)}
        </Text>
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
            {t('more.privacy')}
          </Text>
        </View>

        <View style={styles.sectionWrap}>
          {privacyContent.map(renderSection)}

          <Text style={[styles.lastUpdatedText, isRTL && styles.textRTL]}>
            Last updated: March 22, 2026
          </Text>
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
  sectionWrap: {
    marginHorizontal: Spacing.lg,
    marginTop: 22,
    gap: 14,
  },
  sectionCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E9DCCF',
    ...Shadows.small,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.7,
    marginBottom: 10,
  },
  sectionBody: {
    fontSize: 14,
    color: '#4A3728',
    lineHeight: 22,
  },
  emailLink: {
    color: Colors.primary,
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  lastUpdatedText: {
    fontSize: 12,
    color: '#8C6B55',
    textAlign: 'center',
    paddingVertical: 18,
  },
  textRTL: {
    textAlign: 'right',
  },
});
