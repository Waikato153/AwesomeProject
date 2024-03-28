import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 const FilterBlock = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.filterBlock}>
      <Text style={styles.filterText}>{label}</Text>
    </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
  },
  filterBlock: {
    width: '10%', // Adjust width according to your preference
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 8,
    alignItems: 'center', // Added to center text horizontally
  },
  filterText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white'
  },
});
