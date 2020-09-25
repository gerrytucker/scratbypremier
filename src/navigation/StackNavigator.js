import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  CategoryStackNavigator,
  ProfileStackNavigator,
  SettingsStackNavigator,
};
