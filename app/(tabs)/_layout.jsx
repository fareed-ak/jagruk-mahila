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
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
      <Tabs.Screen
        name="cases"
        options={{
          title: 'Cases',
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
        }}
      />
      <Tabs.Screen
        name="helpline"
        options={{
          title: 'Help',
        }}
      />
    </Tabs>
  );
}