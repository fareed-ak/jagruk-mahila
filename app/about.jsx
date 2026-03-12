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
import { aboutContent, aboutLabels, aboutTeam } from '../constants/aboutData';
import GlobalStyles, { Colors, Spacing, Shadows } from '../styles/GlobalStyles';

export default function About() {
  const { i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const currentLang = i18n.language || 'en';

  const getLabel = (key) => aboutLabels[key][currentLang] || aboutLabels[key].en;
  const getBody = (content) => content[currentLang] || content.en;

  const renderSection = (sectionKey, content, labelKey, isDisclaimer = false) => (
    <View key={sectionKey} style={[styles.sectionCard, isDisclaimer && styles.disclaimerCard]}>
      <Text style={[styles.sectionHeading, isRTL && styles.textRTL]}>
        {getLabel(labelKey)}
      </Text>
      <Text style={[styles.sectionBody, isRTL && styles.textRTL]}>
        {getBody(content)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="dark" backgroundColor={Colors.background} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
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

        <View style={styles.heroCard}>
          <Text style={[styles.heroTitle, isRTL && styles.textRTL]}>
            Jagruk Mahila
          </Text>
          <Text style={[styles.heroSubtitle, isRTL && styles.textRTL]}>
            {getLabel('version_label')} {aboutContent.version}
          </Text>
        </View>

        <View style={styles.sectionWrap}>
          {renderSection('mission', aboutContent.mission, 'mission_heading')}
          {renderSection('what_we_offer', aboutContent.what_we_offer, 'what_we_offer_heading')}

          <View style={styles.sectionCard}>
            <Text style={[styles.sectionHeading, isRTL && styles.textRTL]}>
              {getLabel('team_heading')}
            </Text>

            <View style={styles.teamBlock}>
              <Text style={[styles.teamLabel, isRTL && styles.textRTL]}>
                {getLabel('mentor_label')}
              </Text>
              <Text style={[styles.teamName, isRTL && styles.textRTL]}>
                {aboutTeam.mentor[currentLang] || aboutTeam.mentor.en}
              </Text>
            </View>

            <View style={styles.teamDivider} />

            <View style={styles.teamBlock}>
              <Text style={[styles.teamLabel, isRTL && styles.textRTL]}>
                {getLabel('core_team_label')}
              </Text>

              <View style={styles.memberStack}>
                {aboutTeam.members.map((member) => (
                  <View
                    key={member.name.en}
                    style={[styles.memberRow, isRTL && styles.memberRowRTL]}
                  >
                    <View style={styles.memberDot} />
                    <View style={styles.memberTextWrap}>
                      <View style={[styles.memberNameRow, isRTL && styles.memberNameRowRTL]}>
                        <Text style={[styles.teamName, isRTL && styles.textRTL]}>
                          {member.name[currentLang] || member.name.en}
                        </Text>
                        {member.role === 'lead' && (
                          <View style={styles.roleBadge}>
                            <Text style={styles.roleBadgeText}>
                              {getLabel('lead_label')}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {renderSection('disclaimer', aboutContent.disclaimer, 'disclaimer_heading', true)}
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
  disclaimerCard: {
    backgroundColor: '#FFF8F0',
    borderColor: '#E8D6C0',
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },
  sectionBody: {
    fontSize: 15,
    color: '#4A3728',
    lineHeight: 24,
  },
  teamBlock: {
    marginTop: 2,
  },
  teamLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8B6A57',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  teamName: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#26140A',
  },
  teamDivider: {
    height: 1,
    backgroundColor: '#F0E4D8',
    marginVertical: 16,
  },
  memberStack: {
    gap: 12,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  memberRowRTL: {
    flexDirection: 'row-reverse',
  },
  memberDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C76A3D',
    marginTop: 7,
    marginHorizontal: 2,
  },
  memberTextWrap: {
    flex: 1,
    marginHorizontal: 12,
  },
  memberNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  memberNameRowRTL: {
    flexDirection: 'row-reverse',
  },
  roleBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#FBE9DC',
  },
  roleBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#A04421',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  textRTL: {
    textAlign: 'right',
  },
});
