import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  I18nManager
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../components/TopBar';
import GlobalStyles, { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../styles/GlobalStyles';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 columns with padding

function Home() {
  const { t } = useTranslation();
  const isRTL = I18nManager.isRTL;

  const categories = [
    { key: "constitution", icon: "scale-outline", route: "/constitution" },
    { key: "reproductive", icon: "medical-outline", route: "/reproductive" },
    { key: "bns", icon: "document-text-outline", route: "/resources?cat=bns" },
    { key: "sexual", icon: "shield-outline", route: "/resources?cat=sexual" },
    { key: "marriage", icon: "heart-outline", route: "/resources?cat=marriage" },
    { key: "cyber", icon: "laptop-outline", route: "/resources?cat=cyber" },
    { key: "other", icon: "list-outline", route: "/resources?cat=other" }
  ];

  const handleCategoryPress = (route) => {
    router.push(route);
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="dark" backgroundColor={Colors.background} />

      {/* Top Bar */}
      <TopBar showLanguage={true} />

      {/* Hero Band */}
      <View style={styles.heroBand}>
        <View style={styles.heroContent}>
          <Text style={styles.heroSubtitle}>{t('home.subtitle')}</Text>
          <View style={styles.goldLine} />
        </View>
        {/* Subtle pattern overlay */}
        <View style={styles.patternOverlay} />
      </View>

      {/* Scroll Content */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View style={styles.content}>
          {/* About Section */}
          <Text style={[styles.aboutTitle, isRTL && styles.textRTL]}>
            {t('home.about_title')}
          </Text>

          <View style={[styles.aboutContent, isRTL && styles.aboutContentRTL]}>
            <Text style={[styles.aboutText, isRTL && styles.textRTL]}>
              {t('home.about_text')}
            </Text>
          </View>

          {/* Separator */}
          <View style={styles.separator} />

          {/* Section Heading */}
          <Text style={styles.sectionHeading}>{t('home.explore_heading')}</Text>

          {/* Category Grid */}
          <View style={styles.categoryGrid}>
            {categories.slice(0, 6).map((category) => (
              <TouchableOpacity
                key={category.key}
                style={[styles.categoryCard, { width: cardWidth }]}
                onPress={() => handleCategoryPress(category.route)}
                activeOpacity={0.8}
              >
                <Ionicons
                  name={category.icon}
                  size={32}
                  color={Colors.primary}
                  style={styles.categoryIcon}
                />
                <Text style={styles.categoryText}>{t(`categories.${category.key}`)}</Text>
              </TouchableOpacity>
            ))}

            {/* Last card full-width */}
            {categories.length > 6 && (
              <TouchableOpacity
                key={categories[6].key}
                style={[styles.categoryCard, styles.fullWidthCard]}
                onPress={() => handleCategoryPress(categories[6].route)}
                activeOpacity={0.8}
              >
                <Ionicons
                  name={categories[6].icon}
                  size={32}
                  color={Colors.primary}
                  style={styles.categoryIcon}
                />
                <Text style={styles.categoryText}>{t(`categories.${categories[6].key}`)}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EE', // aged parchment background
  },
  heroBand: {
    height: 120,
    backgroundColor: Colors.primary,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 2,
  },
  heroSubtitle: {
    fontSize: 17,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '500',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  goldLine: {
    width: 80,
    height: 2,
    backgroundColor: '#F5A623', // turmeric gold
    borderRadius: 1,
  },
  patternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: 'transparent',
    // Add background pattern here if needed
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FDF6EE',
  },
  content: {
    padding: 20,
    paddingTop: 24,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
    textAlign: 'left',
  },
  aboutContent: {
    marginBottom: 24,
  },
  aboutContentRTL: {
    direction: 'rtl',
  },
  aboutText: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.backgroundSecondary,
    marginVertical: 20,
  },
  textRTL: {
    textAlign: 'right',
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A0A00', // near-black ink
    marginBottom: 20,
    fontFamily: 'System',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    minHeight: 100,
  },
  fullWidthCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    minHeight: 80,
  },
  categoryEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryIcon: {
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1A0A00', // near-black ink
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: 'System',
  },
});

export default Home;