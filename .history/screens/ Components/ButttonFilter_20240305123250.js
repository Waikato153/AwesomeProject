import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 const FilterBlock = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.filterBlock}>
      <Text style={styles.filterText}>{label}</Text>
    </TouchableOpacity>
  );
};

const ButttonFilter = () => {
  return (
    <View >
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
  },
  filterBlock: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 8,
  },
  filterText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
