import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import TopBar from './TopBar';

const PlaceholderScreen = ({ 
  iconName = 'construct-outline', 
  title,
  subtitle 
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.placeholderCard}>
          {/* Large Icon */}
          <Ionicons 
            name={iconName} 
            size={64} 
            color="#8C6B55" 
            style={styles.icon}
          />
          
          {/* Title */}
          <Text style={styles.title}>
            {title}
          </Text>
          
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            {subtitle || t('home.dev_placeholder')}
          </Text>
          
          {/* Decorative Element */}
          <View style={styles.decorativeLine} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EE', // aged parchment background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  placeholderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#C0392B', // deep terracotta red
    borderStyle: 'dashed',
    maxWidth: 280,
    width: '100%',
  },
  icon: {
    marginBottom: 16,
    opacity: 0.7,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A0A00', // near-black ink
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'System',
  },
  subtitle: {
    fontSize: 15,
    color: '#8C6B55', // warm brown-grey
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: 'System',
    marginBottom: 16,
  },
  decorativeLine: {
    width: 60,
    height: 2,
    backgroundColor: '#F5A623', // turmeric gold
    borderRadius: 1,
  },
});

export default PlaceholderScreen;