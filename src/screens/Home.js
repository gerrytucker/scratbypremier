import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <StatusBar style="light-dark" />
    </SafeAreaView>
  );
};

export default Home;
