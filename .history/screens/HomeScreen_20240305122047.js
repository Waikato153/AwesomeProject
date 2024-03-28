import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LineChartHome } from './ Components/LineChartHome';
import {FilterButton} from './ Components/FilterButton';


const data = [
  { title: 'Orders', count: 10 },
  { title: 'Messages', count: 5 },
  //{ title: 'Notifications', count: 8 },
  // Add more data as needed
];

const renderItem = ({ item }) => (
  <View style={styles.block}>
    <Text style={styles.count}>{item.count}</Text>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      


        
        
      <View />
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
    justifyContent: 'space-around',
    flex:1
  },
  blockTop: {
    paddingTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
  },
  block: {
    width: 150, // 设置方块宽度
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingBottom:10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    
  },
  toptitle: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 5,
    color:'rgb(176,176,176)'
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default HomeScreen;
