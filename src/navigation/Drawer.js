import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import CitiesScreen from "../Screens/CitiesScreen";

const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNavigation.Navigator initialRouteName="Home">
      <DrawerNavigation.Screen name="Home" component={HomeScreen} />
      <DrawerNavigation.Screen name="Cities" component={CitiesScreen} />
    </DrawerNavigation.Navigator>
  );
}
