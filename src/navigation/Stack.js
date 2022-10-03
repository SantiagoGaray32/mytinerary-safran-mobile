import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import CitiesScreen from "../Screens/CitiesScreen";
//import CommentsScreen from '../Screens/CommentsScreen';

const Stack = createStackNavigator();
export default function PlaceStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={CitiesScreen} />
    </Stack.Navigator>
  );
}
