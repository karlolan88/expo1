import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    { id: '1', title: 'Restaurant Reservation System' },
    { id: '2', title: 'Cinema Booking System' },
    { id: '3', title: 'Inventory Management System' },
  ];

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Fixed Header */}
      <View style={[styles.header, darkMode ? styles.darkHeader : styles.lightHeader]}>
        <Text style={[styles.headerText, darkMode ? styles.darkText : styles.lightText]}>
          My Portfolio
        </Text>
      </View>

      {/* Tappable Profile Picture for Dark Mode Toggle */}
      <TouchableOpacity onPress={() => setDarkMode(!darkMode)} style={styles.profileContainer}>
        <Image source={require('./assets/self.jpg')} style={styles.profilePic} />
      </TouchableOpacity>

      <Text style={[styles.name, darkMode ? styles.darkText : styles.lightText]}>
        Karl Andrew Katigbak Olan
      </Text>
      <Text style={[styles.tags, darkMode ? styles.darkText : styles.lightText]}>
        Computer Science Student | React & Node.js Developer
      </Text>

      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Skills</Text>
      <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>
        C++, React, Node.js, UiPath
      </Text>

      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Biography</Text>
      <Text style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}>
        Karl Andrew Olan has been a student at De La Salle Lipa since Nursery and is currently pursuing a
        Bachelor’s degree in Computer Science. Passionate about technology and innovation, he explores various
        fields, including software development and IoT systems. Outside academics, he enjoys long walks on the
        streets, finding inspiration in everyday life.
      </Text>

      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Projects</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>• {item.title}</Text>
        )}
      />

      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Contact</Text>
      <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>Email: olan.karl88@gmail.com</Text>
      <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>GitHub: github.com/karlolan88</Text>

      <StatusBar style={darkMode ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 80, // Adjust padding to lower content
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  lightHeader: {
    backgroundColor: '#fff',
  },
  darkHeader: {
    backgroundColor: '#121212',
  },
  headerText: {
    marginTop:20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  profileContainer: {
    marginTop: 20, // Added margin to lower the profile picture
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tags: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
  },
  bio: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

