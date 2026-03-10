import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { changeLanguage } from '../app/_layout';

const TopBar = ({ showLanguage = false }) => {
  const { i18n } = useTranslation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const languages = [
    { code: 'en', label: 'English', nativeLabel: 'English' },
    { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
    { code: 'ur', label: 'Urdu', nativeLabel: 'اردو' }
  ];

  const handleLanguageChange = async (language) => {
    try {
      setDropdownVisible(false);
      await changeLanguage(language);
    } catch (error) {
      console.error('Error changing language:', error);
      setDropdownVisible(false);
    }
  };

  const getAppTitle = () => {
    const titles = {
      en: 'Jagruk Mahila',
      hi: 'जागरूक महिला',
      ur: 'جاگرک محیلا'
    };
    return titles[i18n.language] || 'Jagruk Mahila';
  };

  const getCurrentLanguageLabel = () => {
    const current = languages.find(lang => lang.code === i18n.language);
    return current?.label || 'Language';
  };

  return (
    <View style={styles.container}>
      {/* App Title - Single Language */}
      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>{getAppTitle()}</Text>
      </View>

      {/* Language Selector with Globe Icon - Only show if showLanguage is true */}
      {showLanguage && (
        <TouchableOpacity 
          style={styles.languageSelector}
          onPress={() => setDropdownVisible(true)}
        >
          <Ionicons name="globe-outline" size={20} color="#8C6B55" />
          <Text style={styles.languageText}>{getCurrentLanguageLabel()}</Text>
          <Ionicons name="chevron-down" size={16} color="#8C6B55" />
        </TouchableOpacity>
      )}

      {/* Language Dropdown Modal - Only show if showLanguage is true */}
      {showLanguage && (
        <Modal
          visible={dropdownVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setDropdownVisible(false)}
        >
          <TouchableOpacity 
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setDropdownVisible(false)}
          >
            <View style={styles.dropdown}>
              <Text style={styles.dropdownTitle}>Language</Text>
              {languages.map((language) => (
                <TouchableOpacity
                  key={language.code}
                  style={[
                    styles.dropdownItem,
                    i18n.language === language.code && styles.activeDropdownItem
                  ]}
                  onPress={() => handleLanguageChange(language.code)}
                >
                  <Text style={[
                    styles.dropdownItemText,
                    i18n.language === language.code && styles.activeDropdownItemText
                  ]}>
                    {language.nativeLabel}
                  </Text>
                  {i18n.language === language.code && (
                    <Ionicons name="checkmark" size={16} color="#C0392B" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FDF6EE', // aged parchment background
  },
  titleContainer: {
    flex: 1,
  },
  appTitle: {
    fontSize: 24,
    color: '#1A0A00', // near-black ink
    fontFamily: 'System',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DFC5AF',
    backgroundColor: '#FFF7EF',
    gap: 8,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8C6B55', // warm brown-grey
    fontFamily: 'System',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(34, 17, 8, 0.28)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 78,
    paddingRight: 16,
  },
  dropdown: {
    backgroundColor: '#FFFDF9',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E9DCCF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
    minWidth: 180,
    padding: 8,
  },
  dropdownTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#A65B3D',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 16,
  },
  activeDropdownItem: {
    backgroundColor: '#FCF2E8',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#2A170D',
    fontFamily: 'System',
    fontWeight: '600',
  },
  activeDropdownItemText: {
    color: '#C0392B',
    fontWeight: '700',
  },
});

export default TopBar;
