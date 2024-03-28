import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
   
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        headerStyle: {
          backgroundColor: '#966ccf',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
              <TouchableOpacity onPress={() => alert('Message icon pressed!')}>
                <View style={{ marginRight: 15 }}>
                  <MaterialIcons
                    name="message" // 使用消息图标
                    size={30}
                    color="#fff"
                  />
                  <View style={{
                    position: 'absolute',
                    right: -5,
                    top: -5,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    width: 16,
                    height: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{ color: '#fff', fontSize: 10 }}>3</Text>
                  </View>
                </View>
              </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="Store"
        component={HomeScreen}
       
      />
      <Tab.Screen
        name="Message"
        component={SettingsScreen}
        options={{
          tabBarBadge: 3 
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>


  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
