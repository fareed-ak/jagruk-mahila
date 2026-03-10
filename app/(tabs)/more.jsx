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
  Linking,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../components/TopBar';
import { changeLanguage } from '../_layout';
import GlobalStyles, { Colors, Spacing, Shadows } from '../../styles/GlobalStyles';

const PLAY_STORE_WEB_URL = 'https://play.google.com/store/apps/details?id=com.jagrukmahila.app';
const PLAY_STORE_APP_URL = 'market://details?id=com.jagrukmahila.app';

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

  const handleRateUs = async () => {
    try {
      const supported = await Linking.canOpenURL(PLAY_STORE_APP_URL);
      await Linking.openURL(supported ? PLAY_STORE_APP_URL : PLAY_STORE_WEB_URL);
    } catch (error) {
      Alert.alert(
        t('more.rate_us'),
        t('more.rate_us_error')
      );
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
      ],
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
      ],
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
        {
          id: 'rate',
          icon: 'star-outline',
          title: t('more.rate_us'),
          subtitle: t('more.rate_us_subtitle'),
          onPress: handleRateUs,
          showChevron: false,
        },
      ],
    },
  ];

  const renderMenuItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={item.onPress}
      activeOpacity={0.82}
    >
      <View style={[styles.menuItemContent, isRTL && styles.menuItemContentRTL]}>
        <View style={styles.iconContainer}>
          <Ionicons name={item.icon} size={22} color={Colors.primary} />
        </View>
        <View style={[styles.menuTextContainer, isRTL && styles.menuTextContainerRTL]}>
          <Text style={[styles.menuTitle, isRTL && styles.textRTL]}>{item.title}</Text>
          <Text style={[styles.menuSubtitle, isRTL && styles.textRTL]}>{item.subtitle}</Text>
        </View>
        {item.showChevron ? (
          <Ionicons
            name={isRTL ? 'chevron-back-outline' : 'chevron-forward-outline'}
            size={18}
            color="#9C7D65"
          />
        ) : (
          <Ionicons
            name={isRTL ? 'arrow-back-outline' : 'arrow-forward-outline'}
            size={18}
            color="#9C7D65"
          />
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSection = (section) => (
    <View key={section.label} style={styles.section}>
      <Text style={[styles.sectionLabel, isRTL && styles.textRTL]}>{section.label}</Text>
      <View style={styles.menuStack}>{section.items.map(renderMenuItem)}</View>
    </View>
  );

  const renderLanguagePicker = () => (
    <Modal
      visible={isLanguagePickerVisible}
      transparent
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
              activeOpacity={0.82}
            >
              <Text style={[styles.languageLabel, isRTL && styles.textRTL]}>{lang.label}</Text>
              <View style={styles.radioButton}>
                {i18n.language === lang.code && <View style={styles.radioButtonSelected} />}
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

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBarWrap}>
          <TopBar />
        </View>

        <View style={styles.heroCard}>
          <Text style={[styles.eyebrow, isRTL && styles.textRTL]}>
            {t('more.section_info')}
          </Text>
          <Text style={[styles.heroTitle, isRTL && styles.textRTL]}>
            {t('more.title')}
          </Text>
          <Text style={[styles.heroSubtitle, isRTL && styles.textRTL]}>
            {t('more.hero_subtitle')}
          </Text>
        </View>

        <View style={styles.noticeCard}>
          <View style={styles.noticeIconWrap}>
            <Ionicons name="settings-outline" size={18} color="#FFFFFF" />
          </View>
          <Text style={[styles.noticeText, isRTL && styles.textRTL]}>
            {t('more.notice')}
          </Text>
        </View>

        <View style={styles.sectionsWrap}>
          {menuSections.map(renderSection)}
        </View>
      </ScrollView>

      {renderLanguagePicker()}
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
  topBarWrap: {
    paddingTop: 6,
    paddingBottom: 4,
    backgroundColor: '#F8EFE3',
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
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: '#A65B3D',
    marginBottom: 12,
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
  noticeCard: {
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    ...Shadows.medium,
  },
  noticeIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noticeText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
  sectionsWrap: {
    marginTop: 22,
    paddingBottom: 8,
  },
  section: {
    marginBottom: 22,
  },
  sectionLabel: {
    marginHorizontal: Spacing.lg,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#8C6B55',
  },
  menuStack: {
    marginHorizontal: Spacing.lg,
    gap: 12,
  },
  menuItem: {
    borderRadius: 22,
    backgroundColor: '#FFFDF9',
    borderWidth: 1,
    borderColor: '#E9DCCF',
    ...Shadows.small,
  },
  menuItemContent: {
    minHeight: 78,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    gap: 14,
  },
  menuItemContentRTL: {
    flexDirection: 'row-reverse',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FBE9DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTextContainerRTL: {
    alignItems: 'flex-end',
  },
  menuTitle: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
    color: '#2A170D',
  },
  menuSubtitle: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
    color: '#7A6354',
  },
  textRTL: {
    textAlign: 'right',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(34, 17, 8, 0.32)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFDF9',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E9DCCF',
    padding: 24,
    ...Shadows.large,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#26140A',
    marginBottom: 18,
  },
  languageOption: {
    minHeight: 56,
    borderRadius: 16,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: '#FFF7EF',
    borderWidth: 1,
    borderColor: '#E9DCCF',
  },
  languageOptionRTL: {
    flexDirection: 'row-reverse',
  },
  languageLabel: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '600',
    color: '#2A170D',
  },
  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
});
