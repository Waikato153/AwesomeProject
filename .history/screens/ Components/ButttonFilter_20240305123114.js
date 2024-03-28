import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 const FilterBlock = ({ label, onPress }) => {
  return (
    
      
  );
};

export const ButttonFilter = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.filterText}>123123123123</Text>
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
