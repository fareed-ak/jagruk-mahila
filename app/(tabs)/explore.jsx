import React from 'react';
import { useTranslation } from 'react-i18next';
import PlaceholderScreen from '../../components/PlaceholderScreen';

function Explore() {
  const { t } = useTranslation();
  
  return (
    <PlaceholderScreen 
      iconName="grid-outline"
      title={t('nav.explore')}
      subtitle={t('home.dev_placeholder')}
    />
  );
}

export default Explore;