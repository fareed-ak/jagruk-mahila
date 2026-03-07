import React from 'react';
import { useTranslation } from 'react-i18next';
import PlaceholderScreen from '../../components/PlaceholderScreen';

function Chat() {
  const { t } = useTranslation();
  
  return (
    <PlaceholderScreen 
      iconName="chatbubble-ellipses-outline"
      title={t('nav.chat')}
      subtitle={t('home.dev_placeholder')}
    />
  );
}

export default Chat;