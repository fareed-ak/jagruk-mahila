import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    I18nManager,
    BackHandler,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { useState, useCallback, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles, {
    Colors,
    Typography,
    Spacing,
    Shadows,
} from '../styles/GlobalStyles';
import { MARRIAGE_OFFENSES_DATA } from '../constants/marriageOffensesData';

export default function Marriage() {
    const { i18n } = useTranslation();
    const isRTL = I18nManager.isRTL;
    const lang = i18n.language;

    const [navStack, setNavStack] = useState([{ level: 0 }]);
    const current = navStack[navStack.length - 1];

    const t = useCallback(
        (obj) => (obj ? obj[lang] || obj.en : ''),
        [lang],
    );

    const pushLevel = useCallback((frame) => {
        setNavStack((prev) => [...prev, frame]);
    }, []);

    const popLevel = useCallback(() => {
        if (navStack.length <= 1) {
            router.back();
            return;
        }
        setNavStack((prev) => prev.slice(0, -1));
    }, [navStack.length]);

    useEffect(() => {
        const onHardwareBack = () => {
            if (navStack.length > 1) {
                setNavStack((prev) => prev.slice(0, -1));
                return true;
            }
            return false;
        };
        const sub = BackHandler.addEventListener('hardwareBackPress', onHardwareBack);
        return () => sub.remove();
    }, [navStack.length]);

    const headerTitle = () =>
        ({ hi: 'विवाह अपराध', ur: 'شادی کے جرائم' }[lang] || 'Marriage Offences');

    // ── Section renderers ─────────────────────────

    const renderConstitutionalText = (section, idx) => (
        <View key={idx} style={styles.constitutionalBox}>
            {section.heading && (
                <Text style={[styles.constitutionalLabel, isRTL && styles.rtlText]}>
                    {t(section.heading)}
                </Text>
            )}
            <Text style={[styles.constitutionalText, isRTL && styles.rtlText]}>
                "{t(section.text)}"
            </Text>
        </View>
    );

    const renderPoints = (section, idx) => (
        <View key={idx} style={styles.sectionBlock}>
            {section.heading && (
                <Text style={[styles.sectionHeading, isRTL && styles.rtlText]}>
                    {t(section.heading)}
                </Text>
            )}
            {section.points.map((point, pi) => {
                const bold = t(point.bold);
                const text = t(point.text);
                return (
                    <View key={pi} style={[styles.bulletRow, isRTL && styles.bulletRowRTL]}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={[styles.bulletText, isRTL && styles.rtlText]}>
                            {bold ? (
                                <>
                                    <Text style={styles.boldLabel}>{bold}: </Text>
                                    {text}
                                </>
                            ) : (
                                text
                            )}
                        </Text>
                    </View>
                );
            })}
        </View>
    );

    const renderHighlight = (section, idx) => (
        <View key={idx} style={styles.highlightCard}>
            {section.heading && (
                <Text style={[styles.highlightHeading, isRTL && styles.rtlText]}>
                    {t(section.heading)}
                </Text>
            )}
            <Text style={[styles.highlightText, isRTL && styles.rtlText]}>
                {t(section.text)}
            </Text>
        </View>
    );

    const renderTextSection = (section, idx) => (
        <View key={idx} style={styles.sectionBlock}>
            {section.heading && (
                <Text style={[styles.sectionHeading, isRTL && styles.rtlText]}>
                    {t(section.heading)}
                </Text>
            )}
            <Text style={[styles.bodyText, isRTL && styles.rtlText]}>
                {t(section.text)}
            </Text>
        </View>
    );

    const renderSection = (section, idx) => {
        switch (section.type) {
            case 'constitutional_text':
                return renderConstitutionalText(section, idx);
            case 'points':
                return renderPoints(section, idx);
            case 'highlight':
                return renderHighlight(section, idx);
            case 'text':
            default:
                return renderTextSection(section, idx);
        }
    };

    // ── Level 0: Subcategory list ─────────────────

    const renderSubcategoryList = () => (
        <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
        >
            {MARRIAGE_OFFENSES_DATA.subcategories.map((sub) => (
                <TouchableOpacity
                    key={sub.id}
                    style={[styles.card, isRTL && styles.cardRTL]}
                    onPress={() => pushLevel({ level: 1, subcategory: sub })}
                    activeOpacity={0.75}
                >
                    <View style={[styles.cardBody, isRTL && styles.cardBodyRTL]}>
                        <Text style={[styles.cardTitle, isRTL && styles.rtlText]}>
                            {t(sub.label)}
                        </Text>
                        <Text style={[styles.cardSubtitle, isRTL && styles.rtlText]}>
                            {t(sub.description)}
                        </Text>
                    </View>
                    <Ionicons
                        name={isRTL ? 'chevron-back' : 'chevron-forward'}
                        size={20}
                        color={Colors.textSecondary}
                    />
                </TouchableOpacity>
            ))}
            <View style={styles.bottomPad} />
        </ScrollView>
    );

    // ── Level 1: Items list ───────────────────────

    const renderItemList = () => {
        const sub = current.subcategory;
        return (
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            >
                {sub.items.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[styles.card, isRTL && styles.cardRTL]}
                        onPress={() => pushLevel({ level: 2, subcategory: sub, item })}
                        activeOpacity={0.75}
                    >
                        <View style={[styles.cardBody, isRTL && styles.cardBodyRTL]}>
                            <Text style={[styles.cardTitle, isRTL && styles.rtlText]}>
                                {t(item.title)}
                            </Text>
                            <Text style={[styles.cardSubtitle, isRTL && styles.rtlText]}>
                                {t(item.subtitle)}
                            </Text>
                        </View>
                        <Ionicons
                            name={isRTL ? 'chevron-back' : 'chevron-forward'}
                            size={20}
                            color={Colors.textSecondary}
                        />
                    </TouchableOpacity>
                ))}
                <View style={styles.bottomPad} />
            </ScrollView>
        );
    };

    // ── Level 2: Item detail ──────────────────────

    const renderItemDetail = () => {
        const item = current.item;
        return (
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.detailContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.detailBanner}>
                    <View style={styles.detailBannerIcon}>
                        <Ionicons name="bookmark-outline" size={18} color="#FFFFFF" />
                    </View>
                    <Text style={[styles.detailSubtitle, isRTL && styles.rtlText]}>
                        {t(item.subtitle)}
                    </Text>
                </View>

                {item.sections.map((section, idx) => renderSection(section, idx))}

                <View style={styles.bottomPad} />
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar style="dark" backgroundColor={Colors.background} />

            {/* Header */}
            <View style={[GlobalStyles.header, styles.header]}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={popLevel}>
                    <Ionicons
                        name={isRTL ? 'arrow-forward' : 'arrow-back'}
                        size={20}
                        color={Colors.backButtonIcon}
                    />
                </TouchableOpacity>
                <Text
                    style={[GlobalStyles.headerTitle, styles.headerTitle, isRTL && styles.rtlText]}
                    numberOfLines={1}
                >
                    {headerTitle()}
                </Text>
                <View style={GlobalStyles.headerSpacer} />
            </View>

            {/* Breadcrumb (levels 1+) */}
            {current.level > 0 && (
                <View style={[styles.breadcrumb, isRTL && styles.breadcrumbRTL]}>
                    <Text style={styles.breadcrumbText}>
                        {t(MARRIAGE_OFFENSES_DATA.label)}
                    </Text>
                    {current.level >= 1 && (
                        <>
                            <Ionicons
                                name={isRTL ? 'chevron-back' : 'chevron-forward'}
                                size={12}
                                color={Colors.textSecondary}
                                style={styles.breadcrumbChevron}
                            />
                            <Text style={styles.breadcrumbText}>
                                {t(current.subcategory.label)}
                            </Text>
                        </>
                    )}
                    {current.level === 2 && (
                        <>
                            <Ionicons
                                name={isRTL ? 'chevron-back' : 'chevron-forward'}
                                size={12}
                                color={Colors.textSecondary}
                                style={styles.breadcrumbChevron}
                            />
                            <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>
                                {t(current.item.title)}
                            </Text>
                        </>
                    )}
                </View>
            )}

            {current.level === 0 && renderSubcategoryList()}
            {current.level === 1 && renderItemList()}
            {current.level === 2 && renderItemDetail()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    headerTitle: {
        fontSize: Typography.headlineSmall,
    },
    breadcrumb: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: Spacing.xl,
        paddingVertical: Spacing.sm,
        backgroundColor: Colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    breadcrumbRTL: {
        flexDirection: 'row-reverse',
    },
    breadcrumbText: {
        fontSize: 12,
        color: Colors.textSecondary,
    },
    breadcrumbActive: {
        color: Colors.primary,
        fontWeight: '600',
    },
    breadcrumbChevron: {
        marginHorizontal: 4,
    },
    scroll: {
        flex: 1,
        backgroundColor: '#F8EFE3',
    },
    listContent: {
        paddingHorizontal: Spacing.lg,
        paddingTop: Spacing.lg,
        paddingBottom: Spacing.xl,
        gap: 12,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFDF9',
        borderRadius: 22,
        padding: 18,
        borderWidth: 1,
        borderColor: '#E9DCCF',
        ...Shadows.small,
    },
    cardRTL: {
        flexDirection: 'row-reverse',
    },
    cardBody: {
        flex: 1,
        marginRight: 14,
    },
    cardBodyRTL: {
        marginRight: 0,
        marginLeft: 14,
        alignItems: 'flex-end',
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#26140A',
        lineHeight: 24,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#6E5443',
        marginTop: 6,
        lineHeight: 21,
    },
    detailContent: {
        paddingHorizontal: Spacing.lg,
        paddingTop: Spacing.lg,
        paddingBottom: Spacing.xl,
        gap: Spacing.lg,
    },
    detailBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 22,
        paddingHorizontal: 18,
        paddingVertical: 16,
        gap: 12,
    },
    detailBannerIcon: {
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.18)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailSubtitle: {
        flex: 1,
        fontSize: 14,
        color: '#FFFFFF',
        lineHeight: 20,
        fontWeight: '700',
    },
    sectionBlock: {
        backgroundColor: '#FFFDF9',
        borderRadius: 22,
        padding: 20,
        borderWidth: 1,
        borderColor: '#E9DCCF',
        ...Shadows.small,
    },
    sectionHeading: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.primary,
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 0.7,
    },
    bodyText: {
        fontSize: 15,
        color: '#4A3728',
        lineHeight: 24,
    },
    constitutionalBox: {
        backgroundColor: '#FFF8F0',
        borderRadius: 22,
        padding: 20,
        borderWidth: 1,
        borderColor: '#E8D6C0',
        ...Shadows.small,
    },
    constitutionalLabel: {
        fontSize: 13,
        fontWeight: '800',
        color: Colors.primary,
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 0.7,
    },
    constitutionalText: {
        fontSize: 15,
        color: '#4A3728',
        fontStyle: 'italic',
        lineHeight: 24,
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    bulletRowRTL: {
        flexDirection: 'row-reverse',
    },
    bullet: {
        fontSize: 15,
        color: Colors.primary,
        marginRight: 10,
        lineHeight: 24,
    },
    bulletText: {
        flex: 1,
        fontSize: 15,
        color: '#4A3728',
        lineHeight: 24,
    },
    boldLabel: {
        fontWeight: '700',
        color: '#26140A',
    },
    highlightCard: {
        backgroundColor: '#FCF2E8',
        borderRadius: 22,
        padding: 20,
        borderWidth: 1,
        borderColor: '#E7CBB5',
        ...Shadows.small,
    },
    highlightHeading: {
        fontSize: 14,
        fontWeight: '800',
        color: '#A65B3D',
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 0.7,
    },
    highlightText: {
        fontSize: 15,
        color: '#4A3728',
        lineHeight: 24,
    },
    rtlText: {
        textAlign: 'right',
    },
    bottomPad: {
        height: Spacing.xl,
    },
});
