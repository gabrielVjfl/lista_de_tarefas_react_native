import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground} from 'react-native';
import StackMain from './src/stacks/Stack'
import {NavigationContainer} from '@react-navigation/native'
export default function App() {
  return (
    <>
   
    <StatusBar/>

      
      <NavigationContainer>
     
        <StackMain/>
 
      </NavigationContainer>

    </>
  );
}


