import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function AccountScreen() {
  const router = useRouter();
  const [selectedHeight, setSelectedHeight] = useState(170); // Default height
  const [showHeightPicker, setShowHeightPicker] = useState(false); // Toggle height picker visibility
  const heights = Array.from({ length: 121 }, (_, i) => 100 + i); // Heights from 100 to 220 cm

  const [selectedWeight, setSelectedWeight] = useState(70); // Default weight
  const [showWeightPicker, setShowWeightPicker] = useState(false); // Toggle weight picker visibility
  const weights = Array.from({ length: 121 }, (_, i) => 40 + i); // Weights from 40 to 160 kg

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center', // Centers vertically
    },
    pickerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10, // Remove margin between pickers
    },
    scrollView: {
      height: 80,
    },
    scrollContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    heightItem: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedItem: {
      backgroundColor: 'black',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
    },
    selectionText: {
      fontSize: 16,
      color: 'white',
    },
    heightButton: {
      padding: 10,
      width: 360,
      borderWidth: 1,
      borderRadius: 10,
      alignItems: 'center',
      borderColor: 'white',
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 0, // Eliminate extra space between buttons
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    touchableTextRight: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 16,
      marginLeft: 10,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Height Picker Section */}
      <View style={styles.pickerContainer}>
        <TouchableOpacity 
          onPress={() => setShowHeightPicker(!showHeightPicker)} 
          style={styles.heightButton}
        >
          <Image
            source={require('../../pics/ruler.png')}
            style={styles.image}
            alt="Height Image"
          />
          <Text style={styles.selectionText}>Height: {selectedHeight} cm</Text>
        </TouchableOpacity>

        {showHeightPicker && (
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {heights.map((height, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedHeight(height);
                  setShowHeightPicker(false);
                }}
                style={[
                  styles.heightItem,
                  height === selectedHeight && styles.selectedItem,
                ]}
              >
                <Text style={[styles.text, height === selectedHeight && styles.selectionText]}>
                  {height} cm
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>

      {/* Weight Picker Section */}
      <View style={styles.pickerContainer}>
        <TouchableOpacity 
          onPress={() => setShowWeightPicker(!showWeightPicker)} 
          style={styles.heightButton}
        >
          <Image
            source={require('../../pics/weight.png')}
            style={styles.image}
            alt="Weight Image"
          />
          <Text style={styles.selectionText}>Weight: {selectedWeight} kg</Text>
        </TouchableOpacity>

        {showWeightPicker && (
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {weights.map((weight, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedWeight(weight);
                  setShowWeightPicker(false);
                }}
                style={[
                  styles.heightItem,
                  weight === selectedWeight && styles.selectedItem,
                ]}
              >
                <Text style={[styles.text, weight === selectedWeight && styles.selectionText]}>
                  {weight} kg
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>

      {/* Biceps Circumference Section */}
      <View style={styles.pickerContainer}>
        <TouchableOpacity 
          onPress={() => router.push('/WeightDetail')} 
          style={styles.heightButton} // Reuse the same style for consistency
        >
          <Image
            source={require('../../pics/simoneshund.png')}
            style={styles.image}
            alt="Biceps Image"
          />
          <Text style={styles.selectionText}>Biceps Circumference</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
