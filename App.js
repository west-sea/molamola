<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home';

export default function App() {
  return (
    <Home/>
=======
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackContainer from "./screen/StackContainer";

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <StackContainer />
  </NavigationContainer>
>>>>>>> 7bb1a80230b8f4a02dcad458bbd25920b051f8a1
  );
}
