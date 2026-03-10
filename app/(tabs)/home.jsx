import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  I18nManager,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../components/TopBar';
import GlobalStyles, {
  Colors,
  Spacing,
  BorderRadius,
  Shadows,
} from '../../styles/GlobalStyles';

const HOME_IMAGE = require('../../assets/home-image.png');

function Home() {
  const { t } = useTranslation();
  const isRTL = I18nManager.isRTL;

  const categories = [
    { key: 'constitution', icon: 'scale-outline', route: '/constitution' },
    { key: 'reproductive', icon: 'medical-outline', route: '/reproductive' },
    { key: 'bns', icon: 'document-text-outline', route: '/bnss' },
    { key: 'sexual', icon: 'shield-outline', route: '/sexual' },
    { key: 'marriage', icon: 'heart-outline', route: '/marriage' },
    { key: 'cyber', icon: 'laptop-outline', route: '/cyber' },
    { key: 'other', icon: 'list-outline', route: '/other' },
  ];

  const aboutPoints = [
    t('home.about_points.point_1'),
    t('home.about_points.point_2'),
    t('home.about_points.point_3'),
    t('home.about_points.point_4'),
  ];

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="dark" backgroundColor={Colors.background} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBarWrap}>
          <TopBar showLanguage={true} />
        </View>

        <View style={styles.heroCard}>
          <Text style={[styles.eyebrow, isRTL && styles.textRTL]}>
            {t('home.hero_eyebrow')}
          </Text>
          <Text style={[styles.heroTitle, isRTL && styles.textRTL]}>
            {t('home.hero_title')}
          </Text>
          <Text style={[styles.heroSubtitle, isRTL && styles.textRTL]}>
            {t('home.hero_subtitle')}
          </Text>
        </View>

        <View style={styles.imageCard}>
          <Image source={HOME_IMAGE} style={styles.heroImage} resizeMode="cover" />
        </View>

        <View style={styles.actionStack}>
          <TouchableOpacity
            style={styles.primaryAction}
            activeOpacity={0.9}
            onPress={() => router.navigate('/(tabs)/helpline')}
          >
            <Ionicons name="call-outline" size={20} color="#FFFFFF" />
            <Text style={styles.primaryActionText}>{t('home.actions.get_help')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryAction}
            activeOpacity={0.9}
            onPress={() => router.navigate('/(tabs)/chat')}
          >
            <Ionicons name="sparkles-outline" size={20} color={Colors.primary} />
            <Text style={styles.secondaryActionText}>{t('home.actions.try_ai')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.aboutCard}>
          <Text style={[styles.sectionTitle, isRTL && styles.textRTL]}>
            {t('home.about_title')}
          </Text>

          <View style={styles.aboutList}>
            {aboutPoints.map((point, index) => (
              <View
                key={`about-${index}`}
                style={[styles.aboutRow, isRTL && styles.aboutRowRTL]}
              >
                <View style={styles.bulletDot} />
                <Text style={[styles.aboutPoint, isRTL && styles.textRTL]}>{point}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.rightsSection}>
          <Text style={[styles.sectionTitle, isRTL && styles.textRTL]}>
            {t('home.explore_heading')}
          </Text>
          <Text style={[styles.sectionSubtitle, isRTL && styles.textRTL]}>
            {t('home.explore_subtitle')}
          </Text>

          <View style={styles.categoryGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.key}
                style={styles.categoryCard}
                activeOpacity={0.85}
                onPress={() => router.push(category.route)}
              >
                <View style={styles.categoryIconWrap}>
                  <Ionicons name={category.icon} size={24} color={Colors.primary} />
                </View>
                <Text style={[styles.categoryText, isRTL && styles.textRTL]}>
                  {t(`categories.${category.key}`)}
                </Text>
                <Ionicons
                  name={isRTL ? 'arrow-back' : 'arrow-forward'}
                  size={16}
                  color="#9C7D65"
                />
              </TouchableOpacity>
            ))}
          </View>
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
  imageCard: {
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#EADBCF',
    ...Shadows.medium,
  },
  heroImage: {
    width: '100%',
    height: 220,
  },
  actionStack: {
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    gap: 12,
  },
  primaryAction: {
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    ...Shadows.medium,
  },
  primaryActionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryAction: {
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: '#FFF7EF',
    borderWidth: 1,
    borderColor: '#DFC5AF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  secondaryActionText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  aboutCard: {
    marginHorizontal: Spacing.lg,
    marginTop: 22,
    padding: 22,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ECDDCB',
    ...Shadows.small,
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '800',
    color: '#26140A',
  },
  sectionSubtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    color: '#7A6354',
  },
  aboutList: {
    marginTop: 16,
    gap: 14,
  },
  aboutRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  aboutRowRTL: {
    flexDirection: 'row-reverse',
  },
  bulletDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C76A3D',
    marginTop: 7,
    marginHorizontal: 2,
  },
  aboutPoint: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
    fontSize: 15,
    lineHeight: 23,
    color: '#5E483B',
  },
  rightsSection: {
    marginHorizontal: Spacing.lg,
    marginTop: 22,
  },
  categoryGrid: {
    marginTop: 16,
    gap: 12,
  },
  categoryCard: {
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#FFFDF9',
    borderWidth: 1,
    borderColor: '#E9DCCF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    ...Shadows.small,
  },
  categoryIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBE9DC',
  },
  categoryText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '600',
    color: '#2A170D',
  },
  textRTL: {
    textAlign: 'right',
  },
});

export default Home;
