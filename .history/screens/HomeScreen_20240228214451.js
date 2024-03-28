import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Orders</Text>
        <Text style={styles.count}>10</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.count}>5</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.count}>5</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
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
