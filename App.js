import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Home from './src/components/Home';
import Constants from 'expo-constants';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Home />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
