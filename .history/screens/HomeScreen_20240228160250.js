import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Orders</Text>
        <Text style={styles.count}>10</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.count}>5</Text>
      </View>
    </View>
  );
};



MyScreen.navigationOptions = {
  title: 'My Screen',
  headerStyle: {
    backgroundColor: 'blue', // Set the background color of the header
  },
  headerTintColor: '#fff', // Set the color of the text and back button in the header
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});



export default HomeScreen;