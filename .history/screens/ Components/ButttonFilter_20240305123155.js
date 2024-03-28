import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 

export const ButttonFilter = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.filterText}>123123123123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    

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
