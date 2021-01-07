import * as React from 'react';
import { EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { BottomTabParamList, TabOneParamList } from '../types';
import TopTabNavigator from './TopTabNavigator';
import PlaceScreen from '../screens/PlaceScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{ activeTintColor: 'red' }}>
      <BottomTab.Screen
        name="Explore"
        component={ExploreNavigator}
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
        component={PlaceScreen}
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
const ExploreStack = createStackNavigator<TabOneParamList>();

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator screenOptions={{ }}>
      <ExploreStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <ExploreStack.Screen
        name="SearchResults"
        component={TopTabNavigator}
        options={{title: 'Rechercher votre destination'}}
      />
    </ExploreStack.Navigator>
  );
}
