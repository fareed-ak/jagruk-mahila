import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, I18nManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import * as Linking from 'expo-linking';

export default function Helpline() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ur';

  const helplines = [
    { id: "emergency", number: "112", color: "#D32F2F", emoji: "🚨" },
    { id: "national_women", number: "181", color: "#7B1FA2", emoji: "👩" },
    { id: "distress", number: "1091", color: "#1976D2", emoji: "🆘" },
    { id: "ncw", number: "7827170170", color: "#388E3C", emoji: "⚖️" },
    { id: "ncw_short", number: "14490", color: "#F57C00", emoji: "📞" },
    { id: "cyber", number: "1930", color: "#0288D1", emoji: "💻" }
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
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{t('helpline.title')}</Text>
        <Text style={styles.subtitle}>
          {isRTL ? 'فوری مدد کے لیے کال کریں' : 
           i18n.language === 'hi' ? 'तत्काल सहायता के लिए कॉल करें' : 
           'Call for immediate assistance'}
        </Text>
      </View>

      {/* Helplines List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
        
        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6B2D8B',
    padding: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    textAlign: 'center',
    lineHeight: 24,
  },
  scrollView: {
    flex: 1,
  },
  helplinesList: {
    padding: 20,
    gap: 15,
  },
  helplineCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
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
    marginRight: 15,
  },
  helplineInfo: {
    flex: 1,
  },
  helplineName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  helplineNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    letterSpacing: 1,
  },
  textRTL: {
    textAlign: 'right',
  },
  callButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
  callButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomSpacing: {
    height: 20,
  },
});