import {GestureHandlerRootView} from "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackContainer from "./screen/StackContainer";
import { Color } from "./GlobalStyle";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>

      <NavigationContainer style={styles.safeArea}>
        <StackContainer />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignContent: 'stretch',
  },
});