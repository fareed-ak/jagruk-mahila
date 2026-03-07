import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeLanguage } from '../app/_layout';

const LANGUAGE_STORAGE_KEY = '@jagruk_mahila:language';

const TopBar = () => {
  const { i18n, t } = useTranslation();
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

      {/* Language Selector with Globe Icon */}
      <TouchableOpacity 
        style={styles.languageSelector}
        onPress={() => setDropdownVisible(true)}
      >
        <Ionicons name="globe-outline" size={20} color="#8C6B55" />
        <Text style={styles.languageText}>{getCurrentLanguageLabel()}</Text>
        <Ionicons name="chevron-down" size={16} color="#8C6B55" />
      </TouchableOpacity>

      {/* Language Dropdown Modal */}
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
    fontSize: 20,
    color: '#1A0A00', // near-black ink
    fontFamily: 'System',
    fontWeight: '600',
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8D5C4', // dusty parchment line
    backgroundColor: '#FFFFFF',
    gap: 6,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8C6B55', // warm brown-grey
    fontFamily: 'System',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 80, // Position below TopBar
    paddingRight: 16,
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8D5C4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 140,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  activeDropdownItem: {
    backgroundColor: '#FDF6EE',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#1A0A00',
    fontFamily: 'System',
    fontWeight: '500',
  },
  activeDropdownItemText: {
    color: '#C0392B',
    fontWeight: '600',
  },
});

export default TopBar;