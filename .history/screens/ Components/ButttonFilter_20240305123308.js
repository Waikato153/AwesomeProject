import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 

export const ButttonFilter = () => {
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
