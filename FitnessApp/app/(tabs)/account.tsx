import React from 'react';
import { View, Button, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';

export default function AccountScreen() {
  const router = useRouter();
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    },

    buttonContainer: {
      backgroundColor: 'blue',
    }
  });


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button
        title="Go to Biceps Circumference"
        onPress={() => router.push( '/BicepsCircumference' )}  // Navigate to BicepsCircumference
      />
      </View>
    </View>
  );
}
