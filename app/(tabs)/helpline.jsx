import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import * as Linking from 'expo-linking';
import TopBar from '../../components/TopBar';

function Helpline() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ur';

  const helplines = [
    { id: "emergency", number: "112", color: "#C0392B", emoji: "🚨" },
    { id: "national_women", number: "181", color: "#E8927C", emoji: "👩" },
    { id: "distress", number: "1091", color: "#F5A623", emoji: "🆘" },
    { id: "ncw", number: "7827170170", color: "#C0392B", emoji: "⚖️" },
    { id: "ncw_short", number: "14490", color: "#E8927C", emoji: "📞" },
    { id: "cyber", number: "1930", color: "#F5A623", emoji: "💻" }
  ];

  const handleCall = (number) => {
    Alert.alert(
      t('helpline.call'),
      `${t('helpline.call')} ${number}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: t('helpline.call'),
          onPress: () => Linking.openURL(`tel:${number}`),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FDF6EE" />
      
      {/* Top Bar */}
      <TopBar />

      {/* Hero Section */}
      <View style={styles.heroBand}>
        <Text style={styles.heroTitle}>{t('helpline.title')}</Text>
        <Text style={styles.heroSubtitle}>
          {isRTL ? 'فوری مدد کے لیے کال کریں' : 
           i18n.language === 'hi' ? 'तत्काल सहायता के लिए कॉल करें' : 
           'Call for immediate assistance'}
        </Text>
        <View style={styles.goldLine} />
      </View>

      {/* Helplines List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.sectionHeading}>
            {isRTL ? 'ہیلپ لائنز' : 
             i18n.language === 'hi' ? 'सहायता लाइनें' : 
             'Helplines'}
          </Text>
          
          <View style={styles.helplinesList}>
            {helplines.map((helpline) => (
              <View key={helpline.id} style={[
                styles.helplineCard,
                { borderLeftColor: helpline.color },
                isRTL && { borderRightColor: helpline.color, borderLeftColor: 'transparent' }
              ]}>
                <View style={[
                  styles.cardContent, 
                  isRTL && styles.cardContentRTL
                ]}>
                  <View style={[
                    styles.leftContent, 
                    isRTL && styles.leftContentRTL
                  ]}>
                    <Text style={styles.emoji}>{helpline.emoji}</Text>
                    <View style={styles.helplineInfo}>
                      <Text style={[
                        styles.helplineName,
                        isRTL && styles.textRTL
                      ]}>
                        {t(`helplines.${helpline.id}`)}
                      </Text>
                      <Text style={[
                        styles.helplineNumber,
                        isRTL && styles.textRTL
                      ]}>
                        {helpline.number}
                      </Text>
                    </View>
                  </View>
                  
                  <TouchableOpacity 
                    style={[styles.callButton, { backgroundColor: helpline.color }]}
                    onPress={() => handleCall(helpline.number)}
                  >
                    <Text style={styles.callButtonText}>{t('helpline.call')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        
        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EE', // aged parchment background
  },
  heroBand: {
    backgroundColor: '#C0392B', // deep terracotta red
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'System',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'System',
    marginBottom: 16,
    opacity: 0.95,
  },
  goldLine: {
    width: 80,
    height: 2,
    backgroundColor: '#F5A623', // turmeric gold
    borderRadius: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FDF6EE',
  },
  content: {
    padding: 20,
    paddingTop: 24,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A0A00', // near-black ink
    marginBottom: 20,
    fontFamily: 'System',
  },
  helplinesList: {
    gap: 16,
  },
  helplineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  cardContentRTL: {
    flexDirection: 'row-reverse',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  leftContentRTL: {
    flexDirection: 'row-reverse',
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  helplineInfo: {
    flex: 1,
  },
  helplineName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A0A00', // near-black ink
    marginBottom: 4,
    fontFamily: 'System',
  },
  helplineNumber: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#C0392B', // deep terracotta red
    letterSpacing: 1,
    fontFamily: 'System',
  },
  textRTL: {
    textAlign: 'right',
  },
  callButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'System',
  },
  bottomSpacing: {
    height: 24,
  },
});

export default Helpline;