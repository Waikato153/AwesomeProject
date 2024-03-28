import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LineChartHome } from './ Components/LineChartHome'


const data = [
  { title: 'Orders', count: 10 },
  { title: 'Messages', count: 5 },
  //{ title: 'Notifications', count: 8 },
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
      <View style={styles.blockTop}>
          <Text style={styles.toptitle}>Thursday, Sep 10</Text>
          <Text style={styles.count}>$3,445</Text>
          <Text style={styles.count}>Revenue</Text>
        </View>


      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <View style={{padding: 10}}><LineChartHome/></View>
      <View style={{flex: 3, backgroundColor: 'white'}} />
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
    margin: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  toptitle: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 5,
    color:'rgb(176,176,276,255)'
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default HomeScreen;
