import React from 'react';
import { Tabs } from 'expo-router';
import TabBar from '../../components/TabBar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: 'home-outline',
          tabBarIconFocused: 'home',
        }}
      />
      <Tabs.Screen
        name="helpline"
        options={{
          title: 'Helpline',
          tabBarIcon: 'call-outline',
          tabBarIconFocused: 'call',
        }}
      />
      <Tabs.Screen
        name="cases"
        options={{
          title: 'Cases',
          tabBarIcon: 'book-outline',
          tabBarIconFocused: 'book',
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: 'chatbubble-ellipses-outline',
          tabBarIconFocused: 'chatbubble-ellipses',
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: 'ellipsis-horizontal-circle-outline',
          tabBarIconFocused: 'ellipsis-horizontal-circle',
        }}
      />
    </Tabs>
  );
}