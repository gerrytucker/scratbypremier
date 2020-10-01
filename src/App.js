<<<<<<< HEAD
import React, { PureComponent } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
=======
import 'react-native-gesture-handler';
import React from "react";
>>>>>>> 160fcb42d2bb82a0ed77ae8c3309f5ea3351382d
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/TabNavigator";

export default class App extends PureComponent {
  state = {
    categoryData: {},
    loading: true,
  };

  async componentDidMount() {
    try {
      const getCategoryData = await fetch(
        "https://scratbygardencentre.com/wp/wp-json/premier/v2/categories"
      );
      const responseJSON = await getCategoryData.json();
      await AsyncStorage.setItem("@categories", responseJSON);
      this.setState = { loading: false };
    } catch (err) {
      console.log("Error fetching categories");
    }
  }
  render() {
    const { categoryData, loading } = this.state;

    if (!loading) {
      return (
        <SafeAreaProvider>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      );
    } else {
      return <ActivityIndicator size="large" color="#fff" />;
    }
  }
}
