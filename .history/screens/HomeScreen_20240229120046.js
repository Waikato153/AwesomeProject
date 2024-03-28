import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
  { title: 'Orders', count: 10 },
  { title: 'Messages', count: 5 },
  { title: 'Notifications', count: 8 },
  // Add more data as needed
];

const renderItem = ({ item }) => (
  <View style={styles.block}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.count}>{item.count}</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    //paddingLeft: 20,
    //paddingRight: 20,
  },
  block: {
    width: 150, // 设置方块宽度
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default HomeScreen;