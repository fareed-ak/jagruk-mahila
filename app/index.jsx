import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { changeLanguage } from './_layout';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2; // 2 columns with padding

export default function Home() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  const categories = [
    { key: "constitution", emoji: "⚖️", route: "/resources?cat=constitution" },
    { key: "reproductive", emoji: "🏥", route: "/resources?cat=reproductive" },
    { key: "bns", emoji: "📜", route: "/resources?cat=bns" },
    { key: "sexual", emoji: "🛡️", route: "/resources?cat=sexual" },
    { key: "marriage", emoji: "💍", route: "/resources?cat=marriage" },
    { key: "cyber", emoji: "💻", route: "/resources?cat=cyber" },
    { key: "other", emoji: "📋", route: "/resources?cat=other" }
  ];

  const handleCategoryPress = (route) => {
    router.push(route);
  };

  const handleTabPress = (tab) => {
    if (tab === 'home') return; // Already on home
    if (tab === 'helpline') router.push('/helpline');
    if (tab === 'resources') router.push('/resources');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={styles.appTitle}>{t('home.title')}</Text>
        <View style={styles.languageSelector}>
          <TouchableOpacity 
            style={[styles.languageButton, i18n.language === 'en' && styles.activeLanguage]}
            onPress={() => handleLanguageChange('en')}
          >
            <Text style={[styles.languageText, i18n.language === 'en' && styles.activeLanguageText]}>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.languageButton, i18n.language === 'hi' && styles.activeLanguage]}
            onPress={() => handleLanguageChange('hi')}
          >
            <Text style={[styles.languageText, i18n.language === 'hi' && styles.activeLanguageText]}>हि</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.languageButton, i18n.language === 'ur' && styles.activeLanguage]}
            onPress={() => handleLanguageChange('ur')}
          >
            <Text style={[styles.languageText, i18n.language === 'ur' && styles.activeLanguageText]}>اردو</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>{t('home.title')}</Text>
          <Text style={styles.heroSubtitle}>{t('home.subtitle')}</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Section Heading */}
          <Text style={styles.sectionHeading}>{t('home.explore')}</Text>
          
          {/* Category Grid */}
          <View style={styles.categoryGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity 
                key={category.key} 
                style={styles.categoryCard}
                onPress={() => handleCategoryPress(category.route)}
              >
                <Text style={styles.categoryEmoji}>{category.emoji}</Text>
                <Text style={styles.categoryText}>{t(`categories.${category.key}`)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tabButton, styles.activeTab]}
          onPress={() => handleTabPress('home')}
        >
          <Text style={[styles.tabText, styles.activeTabText]}>{t('nav.home')}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabButton}
          onPress={() => handleTabPress('helpline')}
        >
          <Text style={styles.tabText}>{t('nav.helpline')}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabButton}
          onPress={() => handleTabPress('resources')}
        >
          <Text style={styles.tabText}>{t('nav.resources')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#6B2D8B',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  languageSelector: {
    flexDirection: 'row',
    gap: 8,
  },
  languageButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  activeLanguage: {
    backgroundColor: 'white',
  },
  languageText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
  },
  activeLanguageText: {
    color: '#6B2D8B',
  },
  scrollView: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#6B2D8B',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#e0e7ff',
    textAlign: 'center',
    lineHeight: 24,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  categoryCard: {
    width: cardWidth,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
  },
  categoryEmoji: {
    fontSize: 32,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    lineHeight: 20,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6B2D8B',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  activeTabText: {
    color: '#6B2D8B',
  },
});