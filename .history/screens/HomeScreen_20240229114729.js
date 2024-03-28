import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <View  style={styles.container}>
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
      <View style={styles.block}>
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.count}>5</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.count}>5</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.count}>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row', // 水平方向布局
    flexWrap: 'wrap',
  },
  block: {
    flex:1,
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
