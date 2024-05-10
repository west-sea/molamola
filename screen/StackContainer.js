import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Home from "./Home";
import Challenges from "./Challenges";
import Statistics from "./Statistics";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false, }} />
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, }} />
      <Tab.Screen name="Challenges" component={Challenges} options={{ headerShown: false, }} />
      <Tab.Screen name="Statistics" component={Statistics} options={{ headerShown: false, }} />

    </Tab.Navigator>

  );
}
