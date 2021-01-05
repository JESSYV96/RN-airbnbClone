import { EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{ activeTintColor: 'red' }}>
      <BottomTab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <Fontisto
              style={{ marginBottom: -3 }}
              name='search'
              size={25}
              color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favoris"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <FontAwesome
              style={{ marginBottom: -3 }}
              name='heart-o'
              size={25}
              color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Airbnb"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <FontAwesome5
              style={{ marginBottom: -3 }}
              name='airbnb'
              size={25}
              color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <Feather
              style={{ marginBottom: -3 }}
              name='message-square'
              size={25}
              color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <EvilIcons
              style={{ marginBottom: -3 }}
              name='user'
              size={25}
              color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
