import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Linking, I18nManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../components/TopBar';
import { EMERGENCY_HELPLINES, ORGANIZATIONS } from '../../constants/helplineData';
import GlobalStyles, { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../styles/GlobalStyles';

function Helpline() {
  const { t, i18n } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const [openOrg, setOpenOrg] = useState(null);

  const toggleOrg = (id) => {
    setOpenOrg(prev => prev === id ? null : id);
  };

  const handleCall = (number) => {
    Alert.alert(
      t('helpline.call'),
      `${t('helpline.call')} ${number}?`,
      [
        { text: t('common.cancel'), style: 'cancel' },
        { text: t('helpline.call'), onPress: () => Linking.openURL(`tel:${number}`) },
      ]
    );
  };

  const handleEmail = (address) => {
    Linking.openURL(`mailto:${address}`);
  };

  const handleLink = (url) => {
    Linking.openURL(url);
  };

  const renderEmergencyBanner = () => (
    <View style={styles.emergencyBanner}>
      <Ionicons name="warning-outline" size={20} color="#FFFFFF" style={styles.bannerIcon} />
      <Text style={styles.bannerText}>{t('helpline.emergency_banner')}</Text>
    </View>
  );

  const renderEmergencyHelplines = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t('helpline.emergency_section_title')}</Text>
      {EMERGENCY_HELPLINES.map((item) => (
        <View 
          key={item.id} 
          style={[
            styles.helplineCard,
            item.isEmergency && styles.emergencyCard,
            isRTL && styles.cardRTL
          ]}
        >
          <View style={[styles.cardContent, isRTL && styles.cardContentRTL]}>
            <View style={[styles.leftContent, isRTL && styles.leftContentRTL]}>
              <View style={styles.helplineInfo}>
                <Text style={[styles.helplineName, isRTL && styles.textRTL]}>
                  {t(`helpline.numbers.${item.id}`)}
                </Text>
                <Text style={[styles.helplineNumber, item.isEmergency && styles.emergencyNumber, isRTL && styles.textRTL]}>
                  {item.number}
                </Text>
                <Text style={[styles.purposeText, isRTL && styles.textRTL]}>
                  {t(`helpline.purposes.${item.id}`)}
                </Text>
                <View style={[styles.availabilityBadge, isRTL && styles.availabilityBadgeRTL]}>
                  <Text style={styles.availabilityText}>
                    {t('helpline.available')}: {item.available}
                  </Text>
                </View>
              </View>
            </View>
            
            <TouchableOpacity 
              style={[styles.callButton, item.isEmergency && styles.emergencyButton]}
              onPress={() => handleCall(item.number)}
            >
              <Ionicons name="call-outline" size={16} color="#FFFFFF" />
              <Text style={styles.callButtonText}>{t('helpline.call')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  const renderOrganizations = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t('helpline.organizations_section_title')}</Text>
      {ORGANIZATIONS.map((org) => (
        <View key={org.id} style={styles.organizationCard}>
          <TouchableOpacity 
            style={[styles.orgHeader, isRTL && styles.orgHeaderRTL]}
            onPress={() => toggleOrg(org.id)}
          >
            <Text style={[styles.orgName, isRTL && styles.textRTL]}>
              {t(`helpline.${org.id}.name`)}
            </Text>
            <Ionicons 
              name={openOrg === org.id ? "chevron-up-outline" : "chevron-down-outline"} 
              size={20} 
              color={Colors.primary} 
            />
          </TouchableOpacity>
          
          {openOrg === org.id && (
            <View style={styles.orgContent}>
              {/* Address */}
              {org.address_key && (
                <View style={[styles.contentRow, isRTL && styles.contentRowRTL]}>
                  <Ionicons name="location-outline" size={16} color={Colors.primary} style={styles.rowIcon} />
                  <View style={styles.rowContent}>
                    <Text style={[styles.rowLabel, isRTL && styles.textRTL]}>{t('helpline.address')}</Text>
                    <Text style={[styles.rowValue, isRTL && styles.textRTL]}>{t(org.address_key)}</Text>
                  </View>
                </View>
              )}
              
              {/* Description */}
              {org.description_key && (
                <View style={styles.contentRow}>
                  <Text style={[styles.description, isRTL && styles.textRTL]}>{t(org.description_key)}</Text>
                </View>
              )}
              
              {/* Phone numbers */}
              {org.phones.map((phone, index) => (
                <View key={index} style={[styles.contentRow, isRTL && styles.contentRowRTL]}>
                  <Ionicons name="call-outline" size={16} color={Colors.primary} style={styles.rowIcon} />
                  <View style={styles.rowContent}>
                    <Text style={[styles.rowLabel, isRTL && styles.textRTL]}>{t(phone.label_key)}</Text>
                    <View style={[styles.numbersContainer, isRTL && styles.numbersContainerRTL]}>
                      {phone.numbers.map((number, idx) => (
                        <TouchableOpacity 
                          key={idx}
                          onPress={() => handleCall(number)}
                          style={styles.numberButton}
                        >
                          <Text style={[styles.phoneNumber, isRTL && styles.textRTL]}>{number}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    {phone.hours_key && (
                      <Text style={[styles.hoursText, isRTL && styles.textRTL]}>
                        {t('helpline.hours')}: {t(phone.hours_key)}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
              
              {/* Emails */}
              {org.emails.map((email, index) => (
                <View key={index} style={[styles.contentRow, isRTL && styles.contentRowRTL]}>
                  <Ionicons name="mail-outline" size={16} color={Colors.primary} style={styles.rowIcon} />
                  <View style={styles.rowContent}>
                    <Text style={[styles.rowLabel, isRTL && styles.textRTL]}>{t(email.label_key)}</Text>
                    <TouchableOpacity onPress={() => handleEmail(email.address)}>
                      <Text style={[styles.emailAddress, isRTL && styles.textRTL]}>{email.address}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
              
              {/* Links */}
              {org.links.map((link, index) => (
                <View key={index} style={[styles.contentRow, isRTL && styles.contentRowRTL]}>
                  <Ionicons name="globe-outline" size={16} color={Colors.primary} style={styles.rowIcon} />
                  <View style={styles.rowContent}>
                    <TouchableOpacity onPress={() => handleLink(link.url)}>
                      <Text style={[styles.linkText, isRTL && styles.textRTL]}>{t(link.label_key)}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="dark" backgroundColor={Colors.background} />
      <TopBar />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderEmergencyBanner()}
        {renderEmergencyHelplines()}
        {renderOrganizations()}
        
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  emergencyBanner: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  bannerIcon: {
    marginRight: 8,
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
  },
  helplineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BorderRadius.medium,
    borderLeftWidth: 4,
    borderLeftColor: Colors.secondary,
    marginBottom: 12,
    ...Shadows.small,
  },
  emergencyCard: {
    borderLeftColor: Colors.primary,
  },
  cardRTL: {
    borderRightWidth: 4,
    borderLeftWidth: 0,
    borderRightColor: Colors.secondary,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
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
  helplineInfo: {
    flex: 1,
  },
  helplineName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  helplineNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 8,
  },
  emergencyNumber: {
    color: Colors.primary,
  },
  purposeText: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
    marginBottom: 8,
  },
  availabilityBadge: {
    alignSelf: 'flex-start',
  },
  availabilityBadgeRTL: {
    alignSelf: 'flex-end',
  },
  availabilityText: {
    fontSize: 12,
    color: Colors.textSecondary,
    backgroundColor: Colors.backgroundSecondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  callButton: {
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    minHeight: 44,
  },
  emergencyButton: {
    backgroundColor: Colors.primary,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  organizationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: BorderRadius.medium,
    marginBottom: 12,
    ...Shadows.small,
  },
  orgHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    minHeight: 44,
  },
  orgHeaderRTL: {
    flexDirection: 'row-reverse',
  },
  orgName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    flex: 1,
  },
  orgContent: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.backgroundSecondary,
  },
  contentRow: {
    flexDirection: 'row',
    marginBottom: 12,
    minHeight: 44,
    alignItems: 'flex-start',
  },
  contentRowRTL: {
    flexDirection: 'row-reverse',
  },
  rowIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  rowContent: {
    flex: 1,
  },
  rowLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  rowValue: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontStyle: 'italic',
    lineHeight: 20,
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },
  numbersContainerRTL: {
    flexDirection: 'row-reverse',
  },
  numberButton: {
    minHeight: 44,
    justifyContent: 'center',
  },
  phoneNumber: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
  },
  hoursText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },
  emailAddress: {
    fontSize: 14,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  linkText: {
    fontSize: 14,
    color: Colors.primary,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  textRTL: {
    textAlign: 'right',
  },
  bottomSpacing: {
    height: 24,
  },
});

export default Helpline;