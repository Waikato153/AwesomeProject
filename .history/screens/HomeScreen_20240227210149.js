import React from 'react';
import { Button,View, Text, StyleSheet } from 'react-native';
 

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
 
export default HomeScreen;