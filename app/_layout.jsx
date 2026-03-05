import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { I18nManager, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language resources
import ur from '../locales/ur.json';
import hi from '../locales/hi.json';
import en from '../locales/en.json';

// i18n configuration
const resources = {
  ur: { translation: ur },
  hi: { translation: hi },
  en: { translation: en }
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: 'ur', // Default language
  fallbackLng: 'ur',
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

const LANGUAGE_STORAGE_KEY = '@jagruk_mahila:language';

export default function RootLayout() {
  useEffect(() => {
    // Initialize language settings on app load
    const initializeLanguage = async () => {
      try {
        // Get saved language from AsyncStorage
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        const languageToUse = savedLanguage || 'ur';
        
        // Change i18n language
        await i18n.changeLanguage(languageToUse);
        
        // Force RTL layout for Urdu
        if (languageToUse === 'ur') {
          if (Platform.OS === 'android' || Platform.OS === 'ios') {
            I18nManager.forceRTL(true);
          }
        } else {
          if (Platform.OS === 'android' || Platform.OS === 'ios') {
            I18nManager.forceRTL(false);
          }
        }
        
        // Save the language preference if it wasn't already saved
        if (!savedLanguage) {
          await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, languageToUse);
        }
      } catch (error) {
        console.error('Error initializing language:', error);
      }
    };

    initializeLanguage();
  }, []);

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="helpline" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="resources" 
        options={{ 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}

// Export function to change language
export const changeLanguage = async (language) => {
  try {
    await i18n.changeLanguage(language);
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    
    // Handle RTL for Urdu
    if (language === 'ur') {
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        I18nManager.forceRTL(true);
      }
    } else {
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        I18nManager.forceRTL(false);
      }
    }
  } catch (error) {
    console.error('Error changing language:', error);
  }
};