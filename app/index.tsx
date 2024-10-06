import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaxiDriverApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taxi Driver App</Text>
      {/* Add more components and content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default TaxiDriverApp;
