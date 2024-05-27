// /components/Card.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title }) => (
  <View style={styles.card}>
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
});

export default Card;
