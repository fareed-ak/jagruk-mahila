import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  I18nManager,
  Share,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../components/TopBar';
import { changeLanguage } from '../_layout';
import GlobalStyles, { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../styles/GlobalStyles';

export default function More() {
  const { t, i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const [isLanguagePickerVisible, setLanguagePickerVisible] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'ur', label: 'اردو' },
  ];

  const handleShare = async () => {
    try {
      await Share.share({
        message: t('more.share_message'),
      });
    } catch (error) {
      console.error('Share error:', error);
    }
  };

  const handleLanguageChange = async (langCode) => {
    try {
      await changeLanguage(langCode);
      setLanguagePickerVisible(false);
    } catch (error) {
      console.error('Language change error:', error);
    }
  };

  const menuSections = [
    {
      label: t('more.section_info'),
      items: [
        {
          id: 'faqs',
          icon: 'help-circle-outline',
          title: t('more.faqs'),
          subtitle: t('more.faqs_subtitle'),
          onPress: () => router.push('/faq'),
          showChevron: true,
        },
        {
          id: 'about',
          icon: 'information-circle-outline',
          title: t('more.about'),
          subtitle: t('more.about_subtitle'),
          onPress: () => router.push('/about'),
          showChevron: true,
        },
      ]
    },
    {
      label: t('more.section_settings'),
      items: [
        {
          id: 'language',
          icon: 'language-outline',
          title: t('more.language'),
          subtitle: t('more.language_subtitle'),
          onPress: () => setLanguagePickerVisible(true),
          showChevron: true,
        },
      ]
    },
    {
      label: t('more.section_legal'),
      items: [
        {
          id: 'privacy',
          icon: 'shield-checkmark-outline',
          title: t('more.privacy'),
          subtitle: t('more.privacy_subtitle'),
          onPress: () => router.push('/privacy'),
          showChevron: true,
        },
        {
          id: 'share',
          icon: 'share-social-outline',
          title: t('more.share'),
          subtitle: t('more.share_subtitle'),
          onPress: handleShare,
          showChevron: false,
        },
      ]
    }
  ];

  const renderMenuItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={item.onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.menuItemContent, isRTL && styles.menuItemContentRTL]}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={item.icon}
            size={22}
            color={Colors.primary}
          />
        </View>
        <View style={[styles.menuTextContainer, isRTL && styles.menuTextContainerRTL]}>
          <Text style={[styles.menuTitle, isRTL && styles.textRTL]}>
            {item.title}
          </Text>
          <Text style={[styles.menuSubtitle, isRTL && styles.textRTL]}>
            {item.subtitle}
          </Text>
        </View>
        {item.showChevron && (
          <Ionicons
            name={isRTL ? 'chevron-back-outline' : 'chevron-forward-outline'}
            size={20}
            color="#C0C0C0"
          />
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSection = (section, sectionIndex) => (
    <View key={sectionIndex} style={styles.section}>
      <Text style={[styles.sectionLabel, isRTL && styles.textRTL]}>
        {section.label}
      </Text>
      {section.items.map(renderMenuItem)}
    </View>
  );

  const renderLanguagePicker = () => (
    <Modal
      visible={isLanguagePickerVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setLanguagePickerVisible(false)}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={() => setLanguagePickerVisible(false)}
      >
        <View style={styles.modalContent}>
          <Text style={[styles.modalTitle, isRTL && styles.textRTL]}>
            {t('more.language')}
          </Text>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={[styles.languageOption, isRTL && styles.languageOptionRTL]}
              onPress={() => handleLanguageChange(lang.code)}
              activeOpacity={0.7}
            >
              <Text style={[styles.languageLabel, isRTL && styles.textRTL]}>
                {lang.label}
              </Text>
              <View style={styles.radioButton}>
                {i18n.language === lang.code && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="dark" backgroundColor={Colors.background} />
      
      {/* Top Bar */}
      <TopBar />

      {/* Hero Band */}
      <View style={styles.heroBand}>
        <View style={styles.heroContent}>
          <Text style={[styles.heroTitle, isRTL && styles.textRTL]}>
            {t('more.title')}
          </Text>
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {menuSections.map(renderSection)}
      </ScrollView>

      {/* Language Picker Modal */}
      {renderLanguagePicker()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Hero Band Styles
  heroBand: {
    backgroundColor: Colors.primary,
    paddingVertical: 24,
    paddingHorizontal: Spacing.large,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.textLight,
    textAlign: 'center',
  },

  // Scroll Container Styles
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },

  // Section Styles
  section: {
    marginBottom: Spacing.medium,
  },
  sectionLabel: {
    fontSize: 11,
    color: '#8C6B55',
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 20,
    paddingHorizontal: 4,
    textTransform: 'uppercase',
  },

  // Menu Styles
  menuItem: {
    backgroundColor: Colors.surface,
    borderRadius: 14,
    marginBottom: 12,
    minHeight: 72,
    elevation: 2,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
  },
  menuItemRTL: {
    flexDirection: 'row-reverse',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  menuItemContentRTL: {
    flexDirection: 'row-reverse',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FDF6EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 14,
  },
  menuTextContainerRTL: {
    marginLeft: 0,
    marginRight: 14,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A0A00',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#8C6B55',
  },

  // RTL Text Styles
  textRTL: {
    textAlign: 'right',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 32,
    marginHorizontal: 20,
    minWidth: 300,
    maxWidth: 340,
    ...Shadows.medium,
    elevation: 8,
  },
  modalTitle: {
    fontSize: Typography.headlineMedium,
    fontWeight: Typography.weightBold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 8,
    letterSpacing: 0.5,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  languageOptionRTL: {
    flexDirection: 'row-reverse',
  },
  languageLabel: {
    fontSize: Typography.bodyLarge,
    color: Colors.text,
    fontWeight: Typography.weightMedium,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
});