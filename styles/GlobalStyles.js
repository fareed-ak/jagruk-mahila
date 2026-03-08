import { StyleSheet, Dimensions } from 'react-native';

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
  // Font Sizes
  displayLarge: 32,
  displayMedium: 24,
  displaySmall: 20,
  headlineLarge: 22,
  headlineMedium: 18,
  headlineSmall: 16,
  bodyLarge: 17,
  bodyMedium: 15,
  bodySmall: 13,
  labelLarge: 15,
  labelMedium: 13,
  labelSmall: 11,
  
  // Font Weights
  weightLight: '300',
  weightRegular: '400',
  weightMedium: '500',
  weightSemiBold: '600',
  weightBold: '700',
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
    fontWeight: Typography.weightRegular,
    color: Colors.text,
    lineHeight: Typography.bodyLarge * 1.4,
  },
  
  bodyMedium: {
    fontSize: Typography.bodyMedium,
    fontWeight: Typography.weightRegular,
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
});

export default GlobalStyles;