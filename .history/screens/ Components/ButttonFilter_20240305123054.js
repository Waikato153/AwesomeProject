import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 const FilterBlock = ({ label, onPress }) => {
  return (
    
      <Text style={styles.filterText}>123123123123</Text>
    
  );
};

export const ButttonFilter = () => {
  return (
    <View style={styles.container}>
      <FilterBlock label="1D" onPress={() => console.log('Filter by 1 day')} />
      <FilterBlock label="1W" onPress={() => console.log('Filter by 1 week')} />
      <FilterBlock label="1M" onPress={() => console.log('Filter by 1 month')} />
      <FilterBlock label="1Y" onPress={() => console.log('Filter by 1 year')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
  },
  filterBlock: {
    backgroundColor: 'white',
    padding: 10,
    margin:20,
    borderRadius: 8,
  },
  filterText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
