import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import SearchResultsMapScreen from '../screens/SearchResultsMapScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
        }}>
            <Tab.Screen name="Liste" component={SearchResultsScreen} />
            <Tab.Screen name="Carte" component={SearchResultsMapScreen} />
        </Tab.Navigator>
    )
}

export default TopTabNavigator
