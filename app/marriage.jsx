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
    BorderRadius,
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
    },
    listContent: {
        padding: Spacing.xl,
        gap: Spacing.md,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        ...Shadows.medium,
    },
    cardRTL: {
        flexDirection: 'row-reverse',
    },
    cardBody: {
        flex: 1,
        marginRight: Spacing.sm,
    },
    cardBodyRTL: {
        marginRight: 0,
        marginLeft: Spacing.sm,
        alignItems: 'flex-end',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text,
        lineHeight: 22,
    },
    cardSubtitle: {
        fontSize: 13,
        color: Colors.textSecondary,
        marginTop: Spacing.xs,
        lineHeight: 18,
    },
    detailContent: {
        padding: Spacing.xl,
        gap: Spacing.lg,
    },
    detailBanner: {
        backgroundColor: Colors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        ...Shadows.small,
        marginBottom: Spacing.sm,
    },
    detailSubtitle: {
        fontSize: 14,
        color: Colors.textSecondary,
        lineHeight: 20,
        fontStyle: 'italic',
    },
    sectionBlock: {
        marginBottom: Spacing.sm,
    },
    sectionHeading: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: Spacing.sm,
    },
    bodyText: {
        fontSize: 15,
        color: Colors.text,
        lineHeight: 22,
    },
    constitutionalBox: {
        backgroundColor: '#FFF8F0',
        borderLeftWidth: 4,
        borderLeftColor: Colors.primary,
        borderRadius: BorderRadius.sm,
        padding: Spacing.lg,
        marginBottom: Spacing.sm,
    },
    constitutionalLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: Colors.primary,
        marginBottom: Spacing.sm,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    constitutionalText: {
        fontSize: 15,
        color: Colors.text,
        fontStyle: 'italic',
        lineHeight: 24,
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: Spacing.sm,
    },
    bulletRowRTL: {
        flexDirection: 'row-reverse',
    },
    bullet: {
        fontSize: 15,
        color: Colors.primary,
        marginRight: Spacing.sm,
        lineHeight: 22,
    },
    bulletText: {
        flex: 1,
        fontSize: 15,
        color: Colors.text,
        lineHeight: 22,
    },
    boldLabel: {
        fontWeight: '600',
        color: Colors.text,
    },
    highlightCard: {
        backgroundColor: '#EAF4FB',
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        borderLeftWidth: 4,
        borderLeftColor: '#2980B9',
        marginBottom: Spacing.sm,
    },
    highlightHeading: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1A5276',
        marginBottom: Spacing.sm,
    },
    highlightText: {
        fontSize: 15,
        color: '#1A3A4A',
        lineHeight: 22,
    },
    rtlText: {
        textAlign: 'right',
    },
    bottomPad: {
        height: Spacing.xxxl,
    },
});
