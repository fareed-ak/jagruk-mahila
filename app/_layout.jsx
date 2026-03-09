import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { I18nManager, Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
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
        
        // Set RTL/LTR direction based on language
        const shouldBeRTL = languageToUse === 'ur';
        I18nManager.allowRTL(shouldBeRTL);
        I18nManager.forceRTL(shouldBeRTL);
        
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
        name="(tabs)" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="resources" 
        options={{ 
          headerShown: false,
          presentation: 'modal'
        }} 
      />
      <Stack.Screen 
        name="faq" 
        options={{ 
          headerShown: false,
          presentation: 'modal'
        }} 
      />
      <Stack.Screen 
        name="about" 
        options={{ 
          headerShown: false,
          presentation: 'modal'
        }} 
      />
      <Stack.Screen 
        name="privacy" 
        options={{ 
          headerShown: false,
          presentation: 'modal'
        }} 
      />
    </Stack>
  );
}

// Export function to change language with fallback reload
export const changeLanguage = async (lang) => {
  try {
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, lang);

    const shouldBeRTL = lang === 'ur';
    const needsReload = I18nManager.isRTL !== shouldBeRTL;

    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);

    if (needsReload) {
      // Direction changed — must reload for native layout to update
      await Updates.reloadAsync();
    }
  } catch (error) {
    console.error('changeLanguage error:', error);
  }
};