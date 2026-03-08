import React from 'react';
import { useTranslation } from 'react-i18next';
import PlaceholderScreen from '../../components/PlaceholderScreen';

export default function More() {
  const { t } = useTranslation();
  return (
    <PlaceholderScreen
      iconName="ellipsis-horizontal-circle-outline"
      title={t('nav.more')}
      subtitle={t('home.dev_placeholder')}
    />
  );
}