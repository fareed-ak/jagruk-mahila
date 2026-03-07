import React from 'react';
import { useTranslation } from 'react-i18next';
import PlaceholderScreen from '../../components/PlaceholderScreen';

function Cases() {
  const { t } = useTranslation();
  
  return (
    <PlaceholderScreen 
      iconName="book-outline"
      title={t('nav.cases')}
      subtitle={t('home.dev_placeholder')}
    />
  );
}

export default Cases;