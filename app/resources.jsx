import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Pressable, I18nManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles, { Colors, Typography, Spacing, BorderRadius, Shadows } from '../styles/GlobalStyles';

export default function Resources() {
  const { t, i18n } = useTranslation();
  const { cat } = useLocalSearchParams();
  const [selectedResource, setSelectedResource] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const isRTL = I18nManager.isRTL;
  const currentLanguage = i18n.language;

  const resourceData = {
    constitution: [
      { 
        id: "art14", 
        title: { 
          en: "Article 14 - Right to Equality", 
          hi: "अनुच्छेद 14 - समानता का अधिकार", 
          ur: "آرٹیکل 14 - مساوات کا حق" 
        }, 
        body: { 
          en: "Article 14 guarantees equality before law and equal protection of laws to all persons.", 
          hi: "अनुच्छेद 14 सभी व्यक्तियों को कानून के समक्ष समानता की गारंटी देता है।", 
          ur: "آرٹیکل 14 تمام افراد کو قانون کے سامنے مساوات کی ضمانت دیتا ہے۔" 
        } 
      },
      { 
        id: "art15", 
        title: { 
          en: "Article 15 - No Discrimination", 
          hi: "अनुच्छेद 15 - भेदभाव निषेध", 
          ur: "آرٹیکل 15 - امتیاز ممنوع" 
        }, 
        body: { 
          en: "Prohibits discrimination on grounds of religion, race, caste, sex or place of birth.", 
          hi: "धर्म, जाति, लिंग के आधार पर भेदभाव प्रतिबंधित है।", 
          ur: "مذہب، ذات، جنس کی بنیاد پर امتیاز ممنوع ہے۔" 
        } 
      },
      { 
        id: "art21", 
        title: { 
          en: "Article 21 - Right to Life", 
          hi: "अनुच्छेद 21 - जीवन का अधिकार", 
          ur: "آرٹیکل 21 - زندگی کا حق" 
        }, 
        body: { 
          en: "No person shall be deprived of life or personal liberty except according to procedure established by law.", 
          hi: "कानूनी प्रक्रिया के बिना जीवन और स्वतंत्रता नहीं छीनी जा सकती।", 
          ur: "قانونی طریقہ کار کے بغیر زندگی اور آزادی نہیں چھینی جا سکتی۔" 
        } 
      }
    ],
    cyber: [
      { 
        id: "cyberbully", 
        title: { 
          en: "Cyber Bullying", 
          hi: "साइबर बुलिंग", 
          ur: "سائبر بلنگ" 
        }, 
        body: { 
          en: "Cyber bullying involves using digital technology to harass, threaten or humiliate someone.", 
          hi: "डिजिटल माध्यम से किसी को परेशान करना साइबर बुलिंग है।", 
          ur: "ڈیجیٹل ذریعے سے کسی کو ہراساں کرنا سائبر بلنگ ہے۔" 
        } 
      },
      { 
        id: "cyberstalk", 
        title: { 
          en: "Cyber Stalking", 
          hi: "साइबर स्टॉकिंग", 
          ur: "سائبر اسٹاکنگ" 
        }, 
        body: { 
          en: "Repeated use of internet to harass or frighten someone. Punishable under IT Act Section 66A.", 
          hi: "इंटरनेट से बार-बार परेशान करना। IT अधिनियम धारा 66A के तहत दंडनीय।", 
          ur: "انٹرنیٹ کے ذریعے بار بار ہراساں کرنا۔ آئی ٹی ایکٹ کے تحت قابل سزا۔" 
        } 
      }
    ],
    marriage: [
      { 
        id: "dvact", 
        title: { 
          en: "DV Act 2005", 
          hi: "घरेलू हिंसा अधिनियम 2005", 
          ur: "گھریلو تشدد قانون 2005" 
        }, 
        body: { 
          en: "The Protection of Women from Domestic Violence Act 2005 protects women from physical, emotional and economic abuse.", 
          hi: "घरेलू हिंसा से महिलाओं की सुरक्षा अधिनियम 2005 महिलाओं को शारीरिक, भावनात्मक और आर्थिक दुर्व्यवहार से बचाता है।", 
          ur: "گھریلو تشدد سے خواتین کے تحفظ کا قانون 2005 خواتین کو جسمانی، جذباتی اور مالی تشدد سے بچاتا ہے۔" 
        } 
      }
    ],
    reproductive: [],
    bns: [],
    sexual: [],
    other: []
  };

  // Get resources for the current category
  const currentResources = cat ? resourceData[cat] || [] : [];

  const openResourceModal = (resource) => {
    setSelectedResource(resource);
    setModalVisible(true);
  };

  const closeResourceModal = () => {
    setModalVisible(false);
    setSelectedResource(null);
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      constitution: "scale-outline",
      cyber: "laptop-outline",
      marriage: "heart-outline", 
      reproductive: "medical-outline",
      bns: "document-text-outline",
      sexual: "shield-outline",
      other: "list-outline"
    };
    return iconMap[category] || "document-outline";
  };

  return (
    <SafeAreaView style={[GlobalStyles.container, isRTL && styles.containerRTL]}>
      <StatusBar style="dark" backgroundColor={Colors.background} />
      
      {/* Back Button */}
      <View style={GlobalStyles.header}>
        <TouchableOpacity 
          style={GlobalStyles.backButton} 
          onPress={() => router.back()}
        >
          <Ionicons 
            name={isRTL ? "arrow-forward" : "arrow-back"} 
            size={20} 
            color={Colors.backButtonIcon} 
          />
        </TouchableOpacity>
        <Text style={[GlobalStyles.headerTitle, isRTL && GlobalStyles.textRTL]}>
          {t('nav.resources')}
        </Text>
        <View style={GlobalStyles.headerSpacer} />
      </View>

      {cat && (
        <View style={[styles.categoryHeader, isRTL && styles.categoryHeaderRTL]}>
          <Ionicons 
            name={getCategoryIcon(cat)} 
            size={24} 
            color={Colors.primary}
            style={[styles.categoryIcon, isRTL && styles.categoryIconRTL]}
          />
          <Text style={[styles.categoryTitle, isRTL && GlobalStyles.textRTL]}>
            {t(`categories.${cat}`)}
          </Text>
        </View>
      )}

      {/* Resources List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.resourcesList}>
          {currentResources.length > 0 ? (
            currentResources.map((resource) => (
              <TouchableOpacity 
                key={resource.id}
                style={styles.resourceCard}
                onPress={() => openResourceModal(resource)}
              >
                <View style={[styles.cardContent, isRTL && styles.cardContentRTL]}>
                  <Text style={[styles.resourceTitle, isRTL && styles.textRTL]}>
                    {resource.title[currentLanguage] || resource.title.en}
                  </Text>
                  <Text style={[styles.resourcePreview, isRTL && styles.textRTL]}>
                    {(resource.body[currentLanguage] || resource.body.en).substring(0, 100)}...
                  </Text>
                </View>
                <Text style={styles.readMoreText}>
                  {t('common.read_more')}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                {isRTL ? "اس قسم میں کوئی وسائل دستیاب نہیں" : 
                 currentLanguage === 'hi' ? "इस श्रेणी में कोई संसाधन उपलब्ध नहीं हैं" : 
                 "No resources available for this category"}
              </Text>
            </View>
          )}
        </View>
        
        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Sheet Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeResourceModal}
      >
        <View style={styles.modalOverlay}>
          <Pressable 
            style={styles.modalBackdrop}
            onPress={closeResourceModal}
          />
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, isRTL && styles.textRTL]}>
                {selectedResource?.title[currentLanguage] || selectedResource?.title?.en}
              </Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={closeResourceModal}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalScroll}>
              <Text style={[styles.modalBody, isRTL && styles.textRTL]}>
                {selectedResource?.body[currentLanguage] || selectedResource?.body?.en}
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerRTL: {
    transform: [{ scaleX: -1 }],
  },
  
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  
  categoryHeaderRTL: {
    flexDirection: 'row-reverse',
  },
  
  categoryIcon: {
    marginRight: Spacing.md,
  },
  
  categoryIconRTL: {
    marginRight: 0,
    marginLeft: Spacing.md,
  },
  
  categoryTitle: {
    fontSize: Typography.headlineMedium,
    fontWeight: Typography.weightSemiBold,
    color: Colors.text,
    flex: 1,
  },
  
  scrollView: {
    flex: 1,
  },
  
  resourcesList: {
    padding: Spacing.xl,
    gap: Spacing.lg,
  },
  
  resourceCard: {
    ...GlobalStyles.card,
    marginBottom: 0,
  },
  
  cardContent: {
    marginBottom: Spacing.sm,
  },
  
  cardContentRTL: {
    alignItems: 'flex-end',
  },
  
  resourceTitle: {
    fontSize: Typography.bodyLarge,
    fontWeight: Typography.weightSemiBold,
    color: Colors.text,
    marginBottom: Spacing.sm,
    lineHeight: Typography.bodyLarge * 1.3,
  },
  
  resourcePreview: {
    fontSize: Typography.bodyMedium,
    color: Colors.textSecondary,
    lineHeight: Typography.bodyMedium * 1.4,
  },
  
  readMoreText: {
    fontSize: Typography.bodyMedium,
    color: Colors.primary,
    fontWeight: Typography.weightSemiBold,
    textAlign: 'right',
  },
  
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxxl * 2,
  },
  
  emptyStateText: {
    fontSize: Typography.bodyLarge,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: Typography.bodyLarge * 1.4,
  },
  
  bottomSpacing: {
    height: Spacing.xl,
  },
  
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  
  modalBackdrop: {
    flex: 1,
    backgroundColor: Colors.overlay,
  },
  
  modalContent: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    maxHeight: '80%',
    paddingTop: Spacing.xl,
  },
  
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  
  modalTitle: {
    flex: 1,
    fontSize: Typography.headlineMedium,
    fontWeight: Typography.weightSemiBold,
    color: Colors.text,
    paddingRight: Spacing.lg,
  },
  
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: BorderRadius.round,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  closeButtonText: {
    fontSize: Typography.displaySmall,
    color: Colors.textSecondary,
    fontWeight: Typography.weightSemiBold,
  },
  
  modalScroll: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
  
  modalBody: {
    fontSize: Typography.bodyLarge,
    lineHeight: Typography.bodyLarge * 1.4,
    color: Colors.text,
    paddingBottom: Spacing.xl,
  },
});