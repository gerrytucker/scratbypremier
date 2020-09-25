import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    padding: 16,
    paddingBottom: 14,
  },
});

const ContentHeader = ({ title }) => {
  return <Text style={styles.header}>{{ title }}</Text>;
};

export default ContentHeader;
