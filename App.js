import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Main} from './src/Screens/Main'
export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={{flex:1}}>
        <Main/>
      </SafeAreaView>
    </>
  );
}

