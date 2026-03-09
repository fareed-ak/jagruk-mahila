import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function TabBar({ state, descriptors, navigation }) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  const tabConfig = [
    {
      name: 'home',
      label: 'Home',
      iconFilled: 'home',
      iconOutline: 'home-outline',
    },
    {
      name: 'helpline',
      label: 'Helpline', 
      iconFilled: 'call',
      iconOutline: 'call-outline',
    },
    {
      name: 'cases',
      label: 'Cases',
      iconFilled: 'book',
      iconOutline: 'book-outline',
    },
    {
      name: 'chat',
      label: 'Chat',
      iconFilled: 'chatbubble-ellipses',
      iconOutline: 'chatbubble-ellipses-outline',
    },
    {
      name: 'more',
      label: 'More',
      iconFilled: 'grid',
      iconOutline: 'grid-outline',
    },
  ];

  // Fallback labels if translation fails
  const getTabLabel = (tabInfo) => {
    try {
      const translationKey = `nav.${tabInfo.name}`;
      const translated = t(translationKey);
      return translated !== translationKey ? translated : tabInfo.label;
    } catch (error) {
      return tabInfo.label;
    }
  };

  const handleTabPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          
          const tabInfo = tabConfig.find(tab => tab.name === route.name);
          if (!tabInfo) return null;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => handleTabPress(route, isFocused)}
              style={styles.tabButton}
            >
              {/* Active indicator dot */}
              {isFocused && <View style={styles.activeDot} />}
              
              {/* Icon */}
              <Ionicons
                name={isFocused ? tabInfo.iconFilled : tabInfo.iconOutline}
                size={24}
                color={isFocused ? '#C0392B' : '#A0856F'}
                style={styles.tabIcon}
              />
              
              {/* Label */}
              <Text style={[
                styles.tabLabel,
                isFocused && styles.activeTabLabel
              ]}>
                {getTabLabel(tabInfo)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  tabBar: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8D5C4', // dusty parchment line
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingVertical: 4,
  },
  activeDot: {
    position: 'absolute',
    top: 6,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#C0392B', // deep terracotta red
  },
  tabIcon: {
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#A0856F', // nav inactive
    textAlign: 'center',
    fontFamily: 'System',
  },
  activeTabLabel: {
    color: '#C0392B', // deep terracotta red
    fontWeight: '600',
  },
});

export default TabBar;