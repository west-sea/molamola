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
  );
}
