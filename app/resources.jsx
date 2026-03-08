import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Pressable, I18nManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

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
    <SafeAreaView style={[styles.container, isRTL && styles.containerRTL]}>
      <StatusBar style="dark" backgroundColor="#FDF6EE" />
      
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Ionicons 
            name={isRTL ? "arrow-forward-circle" : "arrow-back-circle"} 
            size={32} 
            color="#C0392B" 
          />
        </TouchableOpacity>
        <Text style={[styles.title, isRTL && styles.textRTL]}>
          {t('nav.resources')}
        </Text>
        <View style={styles.headerSpacer} />
      </View>

      {cat && (
        <View style={[styles.categoryHeader, isRTL && styles.categoryHeaderRTL]}>
          <Ionicons 
            name={getCategoryIcon(cat)} 
            size={24} 
            color="#C0392B"
            style={[styles.categoryIcon, isRTL && styles.categoryIconRTL]}
          />
          <Text style={[styles.categoryTitle, isRTL && styles.textRTL]}>
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FDF6EE',
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A0A00',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40, // Same as back button width
  },  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6B2D8B',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 35, // Same width as back button to center title
  },
  textRTL: {
    textAlign: 'right',
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  categoryHeaderRTL: {
    flexDirection: 'row-reverse',
  },
  categoryEmoji: {
    fontSize: 24,
    marginRight: 10,
  },  categoryIcon: {
    marginRight: 12,
  },
  categoryIconRTL: {
    marginRight: 0,
    marginLeft: 12,
  },  categoryEmojiRTL: {
    marginRight: 0,
    marginLeft: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  resourcesList: {
    padding: 20,
    gap: 15,
  },
  resourceCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    marginBottom: 10,
  },
  cardContentRTL: {
    alignItems: 'flex-end',
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
    lineHeight: 22,
  },
  resourcePreview: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  readMoreText: {
    fontSize: 14,
    color: '#6B2D8B',
    fontWeight: '600',
    textAlign: 'right',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomSpacing: {
    height: 20,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    paddingTop: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  modalTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    paddingRight: 15,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: '#6b7280',
    fontWeight: 'bold',
  },
  modalScroll: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  modalBody: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    paddingBottom: 20,
  },
});