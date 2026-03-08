import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, I18nManager, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles from '../../styles/GlobalStyles';
import TopBar from '../../components/TopBar';
import { CASES, CASE_CATEGORIES } from '../../constants/casesData';

export default function Cases() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [expandedCaseId, setExpandedCaseId] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isRTL = I18nManager.isRTL;

  const filteredCases = selectedCategory === 'ALL' 
    ? CASES 
    : CASES.filter(caseItem => caseItem.category === selectedCategory);

  const toggleCase = (caseId) => {
    setExpandedCaseId(expandedCaseId === caseId ? null : caseId);
  };

  const getCategoryLabel = (category) => {
    const labels = {
      'ALL': t('cases.filter_all'),
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
      <View key={caseItem.id} style={GlobalStyles.caseCard}>
        <TouchableOpacity
          style={GlobalStyles.caseHeader}
          onPress={() => toggleCase(caseItem.id)}
          activeOpacity={0.7}
        >
          <View style={[GlobalStyles.caseHeaderContent, isRTL && { flexDirection: 'row-reverse' }]}>
            <View style={GlobalStyles.caseHeaderText}>
              <Text style={[
                GlobalStyles.caseTitle,
                isRTL && { textAlign: 'right' }
              ]}>
                {title}
              </Text>
              <Text style={[
                GlobalStyles.caseYear,
                isRTL && { textAlign: 'right' }
              ]}>
                {caseItem.year}
              </Text>
            </View>
            <Ionicons
              name={isExpanded ? "chevron-up" : "chevron-down"}
              size={20}
              color="#C0392B"
              style={[
                { marginLeft: isRTL ? 0 : 12, marginRight: isRTL ? 12 : 0 }
              ]}
            />
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <View style={GlobalStyles.caseContent}>
            <View style={GlobalStyles.caseSection}>
              <Text style={[
                GlobalStyles.caseSectionTitle,
                isRTL && { textAlign: 'right' }
              ]}>
                {t('cases.what_happened')}
              </Text>
              <Text style={[
                GlobalStyles.caseSectionText,
                isRTL && { textAlign: 'right' }
              ]}>
                {whatHappened}
              </Text>
            </View>

            <View style={GlobalStyles.caseSection}>
              <Text style={[
                GlobalStyles.caseSectionTitle,
                isRTL && { textAlign: 'right' }
              ]}>
                {t('cases.judgement')}
              </Text>
              <Text style={[
                GlobalStyles.caseSectionText,
                isRTL && { textAlign: 'right' }
              ]}>
                {judgement}
              </Text>
            </View>

            <View style={GlobalStyles.caseSection}>
              <Text style={[
                GlobalStyles.caseSectionTitle,
                isRTL && { textAlign: 'right' }
              ]}>
                {t('cases.how_it_helps')}
              </Text>
              <Text style={[
                GlobalStyles.caseSectionText,
                isRTL && { textAlign: 'right' }
              ]}>
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
      <StatusBar style="dark" backgroundColor={GlobalStyles.Colors?.background || '#FDF6EE'} />
      <TopBar title={t('cases.title')} />
      
      <ScrollView style={GlobalStyles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Info Banner */}
        <View style={[
          GlobalStyles.infoBanner,
          { backgroundColor: '#FDF6EE', borderLeftColor: '#C0392B', borderLeftWidth: 4 }
        ]}>
          <View style={[GlobalStyles.infoBannerContent, isRTL && { flexDirection: 'row-reverse' }]}>
            <Ionicons 
              name="information-circle" 
              size={20} 
              color="#C0392B" 
              style={{ marginRight: isRTL ? 0 : 8, marginLeft: isRTL ? 8 : 0 }}
            />
            <Text style={[
              GlobalStyles.infoBannerText,
              { textAlign: 'center', flex: 1 },
              isRTL && { textAlign: 'center' }
            ]}>
              {t('cases.banner')}
            </Text>
          </View>
        </View>

        {/* Category Dropdown */}
        <View style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
          <TouchableOpacity
            style={[
              GlobalStyles.filterDropdown,
              isRTL && { flexDirection: 'row-reverse' }
            ]}
            onPress={() => setDropdownVisible(true)}
          >
            <Text style={[
              GlobalStyles.filterDropdownText,
              isRTL && { textAlign: 'right', flex: 1 }
            ]}>
              {getCategoryLabel(selectedCategory)}
            </Text>
            <Ionicons 
              name="chevron-down" 
              size={20} 
              color="#C0392B" 
              style={{ marginLeft: isRTL ? 0 : 8, marginRight: isRTL ? 8 : 0 }}
            />
          </TouchableOpacity>
        </View>

        {/* Category Selection Modal */}
        <Modal
          visible={dropdownVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setDropdownVisible(false)}
        >
          <Pressable 
            style={GlobalStyles.modalOverlay}
            onPress={() => setDropdownVisible(false)}
          >
            <View style={GlobalStyles.modalContainer}>
              {categoryOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    GlobalStyles.modalOption,
                    selectedCategory === option.value && GlobalStyles.modalOptionSelected
                  ]}
                  onPress={() => {
                    setSelectedCategory(option.value);
                    setDropdownVisible(false);
                  }}
                >
                  <Text style={[
                    GlobalStyles.modalOptionText,
                    selectedCategory === option.value && GlobalStyles.modalOptionTextSelected,
                    isRTL && { textAlign: 'right' }
                  ]}>
                    {option.label}
                  </Text>
                  {selectedCategory === option.value && (
                    <Ionicons name="checkmark" size={20} color="#C0392B" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>

        {/* Cases List */}
        <View style={GlobalStyles.casesContainer}>
          {filteredCases.map(renderCaseCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}