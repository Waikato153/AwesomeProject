import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';

import SettingsScreen from './screens/SettingsScreen';
 
 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"  />
        <Tab.Screen name="Settings" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}