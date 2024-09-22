import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function BicepsCircumference() {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'purple',
    },
  });
  
  return (
    <View style={styles.container}>
      <Text>This is the Biceps Circumference screen</Text>
      <Button title="du kleiner ayri" />
      <Button title="du kleiner ayri" />
      <Button title="du kleiner ayri" />
      <Button title="du kleiner ayri" />
      <Button title="du kleiner ayri" />
      <Button title="du kleiner ayri" />
    </View>
  );
}
