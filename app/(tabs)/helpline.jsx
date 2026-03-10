import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
  I18nManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../components/TopBar';
import { EMERGENCY_HELPLINES, ORGANIZATIONS } from '../../constants/helplineData';
import GlobalStyles, { Colors, Spacing, Shadows } from '../../styles/GlobalStyles';

function Helpline() {
  const { t } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const [openOrg, setOpenOrg] = useState(null);

  const toggleOrg = (id) => {
    setOpenOrg((prev) => (prev === id ? null : id));
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
    <View style={styles.noticeCard}>
      <View style={styles.noticeIconWrap}>
        <Ionicons name="warning-outline" size={18} color="#FFFFFF" />
      </View>
      <Text style={[styles.noticeText, isRTL && styles.textRTL]}>
        {t('helpline.emergency_banner')}
      </Text>
    </View>
  );

  const renderEmergencyHelplines = () => (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, isRTL && styles.textRTL]}>
        {t('helpline.emergency_section_title')}
      </Text>

      <View style={styles.cardStack}>
        {EMERGENCY_HELPLINES.map((item) => (
          <View
            key={item.id}
            style={[
              styles.helplineCard,
              item.isEmergency && styles.helplineCardEmergency,
              isRTL && styles.helplineCardRTL,
            ]}
          >
            <View style={[styles.helplineHeader, isRTL && styles.helplineHeaderRTL]}>
              <View style={[styles.numberBadge, item.isEmergency && styles.numberBadgeEmergency]}>
                <Ionicons
                  name={item.isEmergency ? 'flash-outline' : 'call-outline'}
                  size={16}
                  color={item.isEmergency ? '#A63D1F' : Colors.primary}
                />
                <Text
                  style={[
                    styles.helplineNumber,
                    item.isEmergency && styles.helplineNumberEmergency,
                  ]}
                >
                  {item.number}
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.callButton, item.isEmergency && styles.callButtonEmergency]}
                onPress={() => handleCall(item.number)}
                activeOpacity={0.88}
              >
                <Ionicons name="call-outline" size={16} color="#FFFFFF" />
                <Text style={styles.callButtonText}>{t('helpline.call')}</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.helplineName, isRTL && styles.textRTL]}>
              {t(`helpline.numbers.${item.id}`)}
            </Text>
            <Text style={[styles.purposeText, isRTL && styles.textRTL]}>
              {t(`helpline.purposes.${item.id}`)}
            </Text>

            <View style={[styles.metaRow, isRTL && styles.metaRowRTL]}>
              <Ionicons name="time-outline" size={14} color="#8B6A57" />
              <Text style={styles.metaText}>
                {t('helpline.available')}: {item.available}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderOrganizations = () => (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, isRTL && styles.textRTL]}>
        {t('helpline.organizations_section_title')}
      </Text>

      <View style={styles.cardStack}>
        {ORGANIZATIONS.map((org) => (
          <View key={org.id} style={styles.organizationCard}>
            <TouchableOpacity
              style={[styles.orgHeader, isRTL && styles.orgHeaderRTL]}
              onPress={() => toggleOrg(org.id)}
              activeOpacity={0.85}
            >
              <View style={styles.orgTitleWrap}>
                <View style={styles.orgIconWrap}>
                  <Ionicons name="business-outline" size={18} color={Colors.primary} />
                </View>
                <Text style={[styles.orgName, isRTL && styles.textRTL]}>
                  {t(`helpline.${org.id}.name`)}
                </Text>
              </View>
              <Ionicons
                name={openOrg === org.id ? 'chevron-up-outline' : 'chevron-down-outline'}
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>

            {openOrg === org.id && (
              <View style={styles.orgContent}>
                {org.address_key && (
                  <View style={[styles.contentRow, isRTL && styles.contentRowRTL]}>
                    <Ionicons
                      name="location-outline"
                      size={16}
                      color={Colors.primary}
                      style={[styles.rowIcon, isRTL && styles.rowIconRTL]}
                    />
                    <View style={styles.rowContent}>
                      <Text style={[styles.rowLabel, isRTL && styles.textRTL]}>
                        {t('helpline.address')}
                      </Text>
                      <Text style={[styles.rowValue, isRTL && styles.textRTL]}>
                        {t(org.address_key)}
                      </Text>
                    </View>
                  </View>
                )}

                {org.description_key && (
                  <View style={styles.descriptionWrap}>
                    <Text style={[styles.description, isRTL && styles.textRTL]}>
                      {t(org.description_key)}
                    </Text>
                  </View>
                )}

                {org.phones.map((phone, index) => (
                  <View key={index} style={[styles.contentRow, isRTL && styles.contentRowRTL]}>
                    <Ionicons
                      name="call-outline"
                      size={16}
                      color={Colors.primary}
                      style={[styles.rowIcon, isRTL && styles.rowIconRTL]}
                    />
                    <View style={styles.rowContent}>
                      <Text style={[styles.rowLabel, isRTL && styles.textRTL]}>
                        {t(phone.label_key)}
                      </Text>
                      <View style={[styles.numbersContainer, isRTL && styles.numbersContainerRTL]}>
                        {phone.numbers.map((number, idx) => (
                          <TouchableOpacity
                            key={idx}
                            onPress={() => handleCall(number)}
                            style={styles.numberChip}
                            activeOpacity={0.82}
                          >
                            <Text style={[styles.phoneNumber, isRTL && styles.textRTL]}>
                              {number}
                            </Text>
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

                {org.emails.map((email, index) => (
                  <View key={index} style={[styles.contentRow, isRTL && styles.contentRowRTL]}>
                    <Ionicons
                      name="mail-outline"
                      size={16}
                      color={Colors.primary}
                      style={[styles.rowIcon, isRTL && styles.rowIconRTL]}
                    />
                    <View style={styles.rowContent}>
                      <Text style={[styles.rowLabel, isRTL && styles.textRTL]}>
                        {t(email.label_key)}
                      </Text>
                      <TouchableOpacity onPress={() => handleEmail(email.address)}>
                        <Text style={[styles.emailAddress, isRTL && styles.textRTL]}>
                          {email.address}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}

                {org.links.map((link, index) => (
                  <View key={index} style={[styles.contentRow, isRTL && styles.contentRowRTL]}>
                    <Ionicons
                      name="globe-outline"
                      size={16}
                      color={Colors.primary}
                      style={[styles.rowIcon, isRTL && styles.rowIconRTL]}
                    />
                    <View style={styles.rowContent}>
                      <TouchableOpacity onPress={() => handleLink(link.url)}>
                        <Text style={[styles.linkText, isRTL && styles.textRTL]}>
                          {t(link.label_key)}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar style="dark" backgroundColor={Colors.background} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBarWrap}>
          <TopBar />
        </View>

        {renderEmergencyBanner()}
        {renderEmergencyHelplines()}
        {renderOrganizations()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F8EFE3',
  },
  content: {
    paddingBottom: Spacing.xl,
  },
  topBarWrap: {
    paddingTop: 6,
    paddingBottom: 4,
    backgroundColor: '#F8EFE3',
  },
  noticeCard: {
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  noticeIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noticeText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
  sectionHeader: {
    marginHorizontal: Spacing.lg,
    marginTop: 22,
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '800',
    color: '#26140A',
  },
  cardStack: {
    marginHorizontal: 2,
    marginTop: 16,
    gap: 12,
  },
  helplineCard: {
    borderRadius: 22,
    padding: 18,
    backgroundColor: '#FFFDF9',
    borderWidth: 1,
    borderColor: '#E9DCCF',
    ...Shadows.small,
  },
  helplineCardEmergency: {
    backgroundColor: '#FFF6EF',
    borderColor: '#E9C7AE',
  },
  helplineCardRTL: {
    alignItems: 'stretch',
  },
  helplineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  helplineHeaderRTL: {
    flexDirection: 'row-reverse',
  },
  numberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 16,
    backgroundColor: '#FBE9DC',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  numberBadgeEmergency: {
    backgroundColor: '#FBDCC8',
  },
  helplineNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primary,
  },
  helplineNumberEmergency: {
    color: '#9E3D20',
  },
  helplineName: {
    marginTop: 14,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#2A170D',
  },
  purposeText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: '#6E5443',
  },
  metaRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaRowRTL: {
    flexDirection: 'row-reverse',
  },
  metaText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8B6A57',
  },
  callButton: {
    minHeight: 46,
    borderRadius: 16,
    backgroundColor: '#B54B28',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    ...Shadows.small,
  },
  callButtonEmergency: {
    backgroundColor: Colors.primary,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  organizationCard: {
    borderRadius: 22,
    backgroundColor: '#FFFDF9',
    borderWidth: 1,
    borderColor: '#E9DCCF',
    overflow: 'hidden',
    ...Shadows.small,
  },
  orgHeader: {
    minHeight: 64,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  orgHeaderRTL: {
    flexDirection: 'row-reverse',
  },
  orgTitleWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  orgIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBE9DC',
  },
  orgName: {
    flex: 1,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
    color: '#2A170D',
  },
  orgContent: {
    padding: 18,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: '#F0E4D8',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  contentRowRTL: {
    flexDirection: 'row-reverse',
  },
  rowIcon: {
    marginRight: 10,
    marginTop: 3,
  },
  rowIconRTL: {
    marginRight: 0,
    marginLeft: 10,
  },
  rowContent: {
    flex: 1,
  },
  rowLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#3C2417',
    marginBottom: 6,
  },
  rowValue: {
    fontSize: 14,
    lineHeight: 21,
    color: '#6E5443',
  },
  descriptionWrap: {
    marginTop: 16,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#FCF2E8',
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#6E5443',
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  numbersContainerRTL: {
    flexDirection: 'row-reverse',
  },
  numberChip: {
    minHeight: 40,
    borderRadius: 14,
    paddingHorizontal: 12,
    backgroundColor: '#FBE9DC',
    justifyContent: 'center',
  },
  phoneNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
  },
  hoursText: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 18,
    color: '#8B6A57',
  },
  emailAddress: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  linkText: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.primary,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  textRTL: {
    textAlign: 'right',
  },
});

export default Helpline;
