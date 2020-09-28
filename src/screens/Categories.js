import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import CategoryGrid from "../components/CategoryGrid";

import { styles } from "../styles";

const Categories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light-dark" />
    </SafeAreaView>
  );
};

export default Categories;
