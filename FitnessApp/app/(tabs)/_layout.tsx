import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, Pressable, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming you're using Ionicons
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false); // Example switch state
  const [isMetric, setIsMetric] = useState(true); // Example switch state for unit system
  const [isRemindersEnabled, setIsRemindersEnabled] = useState(false); // Example switch state for reminders

  // Function to handle opening the Settings modal
  const handleSettingsPress = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* The Modal for Settings */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            {/* Close "X" Button at the Top-Right */}
            <Pressable style={styles.closeIcon} onPress={handleCloseModal}>
              <Text style={styles.closeIconText}>×</Text>
            </Pressable>

            <Text style={styles.modalTitle}>Settings</Text>

            {/* Toggle for Notifications */}
            <View style={styles.toggleRow}>
              <Text>Enable Notifications</Text>
              <Switch
                onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
                value={isNotificationsEnabled}
              />
            </View>

            {/* Toggle for Units (Metric/Imperial) */}
            <View style={styles.toggleRow}>
              <Text>Use Metric Units</Text>
              <Switch
                onValueChange={() => setIsMetric(!isMetric)}
                value={isMetric}
              />
            </View>

            {/* Toggle for Workout Reminders */}
            <View style={styles.toggleRow}>
              <Text>Enable Workout Reminders</Text>
              <Switch
                onValueChange={() => setIsRemindersEnabled(!isRemindersEnabled)}
                value={isRemindersEnabled}
              />
            </View>

            {/* Button to manage Account */}
            <Pressable style={styles.manageAccountButton}>
              <Text style={styles.manageAccountText}>Manage Account</Text>
            </Pressable>

            {/* Button to manage Privacy Settings */}
            <Pressable style={styles.privacyButton}>
              <Text style={styles.privacyText}>Privacy Settings</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarStyle: {
            paddingBottom: 20,
          },
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitle: 'Welcome Home',
            headerShown: true,
            headerRight: () => (
              <Pressable onPress={handleSettingsPress} style={styles.iconButton}>
                <Ionicons name="settings-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
              </Pressable>
            ),
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        {/* Add the rest of your Tabs.Screens here... */}
        <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          headerTitle: 'Progress',
          headerShown: true,
          headerRight: () => (
            <Pressable onPress={handleSettingsPress} style={styles.iconButton}>
              <Ionicons name="settings-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            </Pressable>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'analytics' : 'analytics-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          headerTitle: 'Add your Workouts',
          headerShown: true,
          headerRight: () => (
            <Pressable onPress={handleSettingsPress} style={styles.iconButton}>
              <Ionicons name="settings-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            </Pressable>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add-circle' : 'add-circle-sharp'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          headerTitle: 'Calendar',
          headerShown: true,
          headerRight: () => (
            <Pressable onPress={handleSettingsPress} style={styles.iconButton}>
              <Ionicons name="settings-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            </Pressable>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          headerTitle: 'Account',
          headerShown: true,
          headerRight: () => (
            <Pressable onPress={handleSettingsPress} style={styles.iconButton}>
              <Ionicons name="settings-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            </Pressable>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'body' : 'body-outline'} color={color} />
          ),
        }}
      />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161719',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 10,
    padding: 5,
  },
  closeIconText: {
    fontSize: 24,
    color: '#333',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  manageAccountButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#3A86FF',
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  manageAccountText: {
    color: '#fff',
    fontSize: 16,
  },
  privacyButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#3A86FF',
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  privacyText: {
    color: '#fff',
    fontSize: 16,
  },
  iconButton: {
    marginRight: 15,
  },
});
