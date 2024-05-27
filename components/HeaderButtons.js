// /components/HeaderButtons.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HeaderButtons = ({ onReplace, onSave, onRetrieve }) => (
  <View style={styles.container}>
    <Button title="Replace with Cities" onPress={onReplace} />
    <Button title="Save Data" onPress={onSave} />
    <Button title="Retrieve Data" onPress={onRetrieve} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default HeaderButtons;
