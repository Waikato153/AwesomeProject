// 导入 React 相关组件
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

// 导入自定义的屏幕组件
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

// 创建底部导航器
const Tab = createBottomTabNavigator();

// 应用的主组件
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Screen1') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Screen2') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Screen3') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Screen1" component={Screen1} options={{ title: 'Home' }} />
        <Tab.Screen name="Screen2" component={Screen2} options={{ title: 'List' }} />
        <Tab.Screen name="Screen3" component={Screen3} options={{ title: 'Settings' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
