import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  I18nManager,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles, { Colors, Spacing, Shadows } from '../../styles/GlobalStyles';
import TopBar from '../../components/TopBar';
import { CASES, CASE_CATEGORIES } from '../../constants/casesData';

export default function Cases() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [expandedCaseId, setExpandedCaseId] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isRTL = I18nManager.isRTL;

  const filteredCases =
    selectedCategory === 'ALL'
      ? CASES
      : CASES.filter((caseItem) => caseItem.category === selectedCategory);

  const toggleCase = (caseId) => {
    setExpandedCaseId(expandedCaseId === caseId ? null : caseId);
  };

  const getCategoryLabel = (category) => {
    const labels = {
      ALL: t('cases.filter_all'),
      [CASE_CATEGORIES.MAINTENANCE]: t('cases.filter_maintenance'),
      [CASE_CATEGORIES.TRIPLE_TALAQ]: t('cases.filter_triple_talaq'),
      [CASE_CATEGORIES.WORKPLACE]: t('cases.filter_workplace'),
      [CASE_CATEGORIES.VIOLENCE]: t('cases.filter_violence'),
    };
    return labels[category] || t('cases.filter_all');
  };

  const categoryOptions = [
    { value: 'ALL', label: t('cases.filter_all') },
    { value: CASE_CATEGORIES.MAINTENANCE, label: t('cases.filter_maintenance') },
    { value: CASE_CATEGORIES.TRIPLE_TALAQ, label: t('cases.filter_triple_talaq') },
    { value: CASE_CATEGORIES.WORKPLACE, label: t('cases.filter_workplace') },
    { value: CASE_CATEGORIES.VIOLENCE, label: t('cases.filter_violence') },
  ];

  const renderCaseCard = (caseItem) => {
    const isExpanded = expandedCaseId === caseItem.id;
    const lang = i18n.language;
    const title = caseItem.title[lang] || caseItem.title.en;
    const court = caseItem.court[lang] || caseItem.court.en;
    const whatHappened = caseItem.what_happened[lang] || caseItem.what_happened.en;
    const judgement = caseItem.judgement[lang] || caseItem.judgement.en;
    const howItHelps = caseItem.how_it_helps[lang] || caseItem.how_it_helps.en;

    return (
      <View key={caseItem.id} style={styles.caseCard}>
        <TouchableOpacity
          style={[styles.caseHeader, isRTL && styles.caseHeaderRTL]}
          onPress={() => toggleCase(caseItem.id)}
          activeOpacity={0.82}
        >
          <View style={[styles.caseHeaderMain, isRTL && styles.caseHeaderMainRTL]}>
            <View style={styles.caseYearBadge}>
              <Text style={styles.caseYear}>{caseItem.year}</Text>
            </View>

            <View style={styles.caseTextWrap}>
              <Text style={[styles.caseTitle, isRTL && styles.textRTL]}>{title}</Text>
              <Text style={[styles.caseCourt, isRTL && styles.textRTL]}>{court}</Text>
            </View>
          </View>

          <View style={styles.chevronWrap}>
            <Ionicons
              name={isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={20}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.caseContent}>
            <View style={styles.caseSection}>
              <Text style={[styles.caseSectionTitle, isRTL && styles.textRTL]}>
                {t('cases.what_happened')}
              </Text>
              <Text style={[styles.caseSectionText, isRTL && styles.textRTL]}>
                {whatHappened}
              </Text>
            </View>

            <View style={styles.caseSection}>
              <Text style={[styles.caseSectionTitle, isRTL && styles.textRTL]}>
                {t('cases.judgement')}
              </Text>
              <Text style={[styles.caseSectionText, isRTL && styles.textRTL]}>
                {judgement}
              </Text>
            </View>

            <View style={styles.caseSection}>
              <Text style={[styles.caseSectionTitle, isRTL && styles.textRTL]}>
                {t('cases.how_it_helps')}
              </Text>
              <Text style={[styles.caseSectionText, isRTL && styles.textRTL]}>
                {howItHelps}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="dark" backgroundColor={Colors.background} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBarWrap}>
          <TopBar title={t('cases.title')} />
        </View>

        <View style={styles.heroCard}>
          <Text style={[styles.eyebrow, isRTL && styles.textRTL]}>
            {t('cases.title')}
          </Text>
          <Text style={[styles.heroTitle, isRTL && styles.textRTL]}>
            {getCategoryLabel(selectedCategory)}
          </Text>
          <Text style={[styles.heroSubtitle, isRTL && styles.textRTL]}>
            {t('cases.banner')}
          </Text>
        </View>

        <View style={styles.noticeCard}>
          <View style={styles.noticeIconWrap}>
            <Ionicons name="ribbon-outline" size={18} color="#FFFFFF" />
          </View>
          <Text style={[styles.noticeText, isRTL && styles.textRTL]}>
            {t('cases.banner')}
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, isRTL && styles.textRTL]}>
            {t('cases.title')}
          </Text>
          <Text style={[styles.sectionSubtitle, isRTL && styles.textRTL]}>
            {getCategoryLabel(selectedCategory)}
          </Text>

          <TouchableOpacity
            style={[styles.filterTrigger, isRTL && styles.filterTriggerRTL]}
            onPress={() => setDropdownVisible(true)}
            activeOpacity={0.88}
          >
            <View style={styles.filterIconWrap}>
              <Ionicons name="funnel-outline" size={18} color={Colors.primary} />
            </View>
            <Text style={[styles.filterTriggerText, isRTL && styles.textRTL]}>
              {getCategoryLabel(selectedCategory)}
            </Text>
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.caseStack}>
          {filteredCases.map(renderCaseCard)}
        </View>

        <Modal
          visible={dropdownVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setDropdownVisible(false)}
        >
          <Pressable style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
            <View style={styles.modalContainer}>
              {categoryOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.modalOption,
                    selectedCategory === option.value && styles.modalOptionSelected,
                  ]}
                  onPress={() => {
                    setSelectedCategory(option.value);
                    setDropdownVisible(false);
                  }}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      styles.modalOptionText,
                      selectedCategory === option.value && styles.modalOptionTextSelected,
                      isRTL && styles.textRTL,
                    ]}
                  >
                    {option.label}
                  </Text>
                  {selectedCategory === option.value && (
                    <Ionicons name="checkmark" size={20} color={Colors.primary} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>
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
  sectionHeader: {
    marginHorizontal: Spacing.lg,
    marginTop: 22,
    marginBottom: 16,
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
  filterTrigger: {
    marginTop: 18,
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: '#FFF7EF',
    borderWidth: 1,
    borderColor: '#DFC5AF',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  filterTriggerRTL: {
    flexDirection: 'row-reverse',
  },
  filterIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FBE9DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterTriggerText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
    color: '#2A170D',
  },
  caseStack: {
    marginHorizontal: Spacing.lg,
    marginTop: 16,
    gap: 12,
  },
  caseCard: {
    borderRadius: 22,
    backgroundColor: '#FFFDF9',
    borderWidth: 1,
    borderColor: '#E9DCCF',
    overflow: 'hidden',
    ...Shadows.small,
  },
  caseHeader: {
    minHeight: 78,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  caseHeaderRTL: {
    flexDirection: 'row-reverse',
  },
  caseHeaderMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  caseHeaderMainRTL: {
    flexDirection: 'row-reverse',
  },
  caseYearBadge: {
    minWidth: 64,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#FBE9DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caseYear: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primary,
  },
  caseTextWrap: {
    flex: 1,
  },
  caseTitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#2A170D',
  },
  caseCourt: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 19,
    color: '#7A6354',
  },
  chevronWrap: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caseContent: {
    paddingHorizontal: 18,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: '#F0E4D8',
  },
  caseSection: {
    marginTop: 16,
  },
  caseSectionTitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
    color: '#A04421',
    marginBottom: 8,
  },
  caseSectionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#5E483B',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(34, 17, 8, 0.32)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFDF9',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E9DCCF',
    overflow: 'hidden',
    ...Shadows.large,
  },
  modalOption: {
    minHeight: 56,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E4D8',
  },
  modalOptionSelected: {
    backgroundColor: '#FCF2E8',
  },
  modalOptionText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '600',
    color: '#2A170D',
  },
  modalOptionTextSelected: {
    color: Colors.primary,
    fontWeight: '700',
  },
  textRTL: {
    textAlign: 'right',
  },
});
