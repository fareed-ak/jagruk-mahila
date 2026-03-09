import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const Colors = {
  // Primary Colors
  primary: '#C0392B',           // Deep terracotta red
  primaryLight: '#E8927C',      // Light terracotta
  secondary: '#F5A623',         // Turmeric gold
  
  // Background Colors
  background: '#FDF6EE',        // Aged parchment
  surface: '#FFFFFF',           // Pure white
  
  // Text Colors
  text: '#1A0A00',             // Near-black ink
  textSecondary: '#8C6B55',    // Warm brown-grey
  textLight: '#FFFFFF',        // White text
  
  // Neutral Colors
  border: '#E8927C',           // Primary light for borders
  shadow: '#000000',           // Black for shadows
  overlay: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  
  // Button Colors
  buttonPrimary: '#C0392B',    // Primary button background
  buttonSecondary: '#F5A623',  // Secondary button background
  backButton: 'rgba(255, 255, 255, 0.9)', // Faded white for back button
  backButtonIcon: '#1A0A00',   // Dark icon on light background
};

export const Typography = {
  // Font Sizes - Increased by 15-20% for better readability
  displayLarge: 40,
  displayMedium: 30,
  displaySmall: 26,
  headlineLarge: 28,
  headlineMedium: 24,
  headlineSmall: 21,
  bodyLarge: 21,
  bodyMedium: 19,
  bodySmall: 16,
  labelLarge: 19,
  labelMedium: 16,
  labelSmall: 14,
  
  // Font Weights - Slightly bolder as default
  weightLight: '400',
  weightRegular: '500',
  weightMedium: '600',
  weightSemiBold: '700',
  weightBold: '800',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  round: 50,
};

export const Shadows = {
  small: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  large: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
};

export const GlobalStyles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.background,
  },
  
  headerTitle: {
    fontSize: Typography.headlineLarge,
    fontWeight: Typography.weightSemiBold,
    color: Colors.text,
    flex: 1,
    textAlign: 'center',
  },
  
  headerSpacer: {
    width: 40, // Same as back button width
  },
  
  // Back Button Styles
  backButton: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.round,
    backgroundColor: Colors.backButton,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.small,
  },
  
  // Text Styles
  displayLarge: {
    fontSize: Typography.displayLarge,
    fontWeight: Typography.weightBold,
    color: Colors.text,
    lineHeight: Typography.displayLarge * 1.2,
  },
  
  displayMedium: {
    fontSize: Typography.displayMedium,
    fontWeight: Typography.weightSemiBold,
    color: Colors.text,
    lineHeight: Typography.displayMedium * 1.2,
  },
  
  headlineLarge: {
    fontSize: Typography.headlineLarge,
    fontWeight: Typography.weightSemiBold,
    color: Colors.text,
    lineHeight: Typography.headlineLarge * 1.3,
  },
  
  bodyLarge: {
    fontSize: Typography.bodyLarge,
    fontWeight: Typography.weightMedium,
    color: Colors.text,
    lineHeight: Typography.bodyLarge * 1.4,
  },
  
  bodyMedium: {
    fontSize: Typography.bodyMedium,
    fontWeight: Typography.weightMedium,
    color: Colors.text,
    lineHeight: Typography.bodyMedium * 1.4,
  },
  
  // Card Styles
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.xl,
    ...Shadows.medium,
  },
  
  cardSmall: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    ...Shadows.small,
  },
  
  // Button Styles
  buttonPrimary: {
    backgroundColor: Colors.buttonPrimary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonText: {
    fontSize: Typography.labelLarge,
    fontWeight: Typography.weightMedium,
    color: Colors.textLight,
  },
  
  // RTL Support
  rtl: {
    transform: [{ scaleX: -1 }],
  },
  
  textRTL: {
    textAlign: 'right',
  },
  
  // Spacing Utilities
  marginSm: { margin: Spacing.sm },
  marginMd: { margin: Spacing.md },
  marginLg: { margin: Spacing.lg },
  marginXl: { margin: Spacing.xl },
  
  paddingSm: { padding: Spacing.sm },
  paddingMd: { padding: Spacing.md },
  paddingLg: { padding: Spacing.lg },
  paddingXl: { padding: Spacing.xl },
  
  // Layout Utilities
  row: {
    flexDirection: 'row',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  flex1: {
    flex: 1,
  },

  // Cases Tab Styles
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 8,
  },

  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.surface,
  },

  filterButtonActive: {
    backgroundColor: Colors.primary,
  },

  filterButtonText: {
    fontSize: Typography.labelMedium,
    fontWeight: Typography.weightMedium,
    color: Colors.primary,
  },

  filterButtonTextActive: {
    color: Colors.textLight,
  },

  casesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  caseCard: {
    marginBottom: 12,
    backgroundColor: Colors.surface,
    borderRadius: 8,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  caseHeader: {
    padding: 16,
    backgroundColor: Colors.surface,
  },

  caseHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  caseHeaderText: {
    flex: 1,
  },

  caseTitle: {
    fontSize: Typography.bodyLarge,
    fontWeight: Typography.weightSemiBold,
    color: Colors.text,
    marginBottom: 4,
  },

  caseYear: {
    fontSize: Typography.bodySmall,
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },

  caseContent: {
    padding: 16,
    paddingTop: 0,
  },

  caseSection: {
    marginBottom: 16,
  },

  caseSectionTitle: {
    fontSize: Typography.bodyMedium,
    fontWeight: Typography.weightSemiBold,
    color: Colors.primary,
    marginBottom: 8,
  },

  caseSectionText: {
    fontSize: Typography.bodyMedium,
    fontWeight: Typography.weightMedium,
    color: Colors.text,
    lineHeight: 24,
  },

  // Dropdown Styles
  filterDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    ...Platform.select({
      ios: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  filterDropdownText: {
    fontSize: Typography.bodyMedium,
    fontWeight: Typography.weightMedium,
    color: Colors.primary,
    flex: 1,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    minWidth: 250,
    maxWidth: 300,
    margin: 20,
    ...Platform.select({
      ios: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  modalOptionSelected: {
    backgroundColor: Colors.background,
  },

  modalOptionText: {
    fontSize: Typography.bodyMedium,
    fontWeight: Typography.weightMedium,
    color: Colors.text,
    flex: 1,
  },

  modalOptionTextSelected: {
    color: Colors.primary,
    fontWeight: Typography.weightSemiBold,
  },

  // Info Banner Styles  
  infoBanner: {
    margin: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: Colors.background,
  },

  infoBannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoBannerText: {
    fontSize: Typography.bodyMedium,
    fontWeight: Typography.weightMedium,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 22,
  },

  // ScrollView container
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default GlobalStyles;