import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 const FilterBlock = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.filterBlock}>
      <Text style={styles.filterText}>123</Text>
    </TouchableOpacity>
  );
};

export const ButttonFilter = () => {
  return (
    <View style={styles.container}>
      <FilterBlock label="1D" onPress={() => console.log('Filter by 1 day')} />
      
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
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
  },
  filterText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
