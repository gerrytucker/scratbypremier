import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import { useFetch } from "../hooks";

const CategoryGrid = () => {
  return (
    <FlatGrid
      itemDimension={130}
      data={data}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer]}>
          <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    backgroundColor: "#4c0743",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#4c0743",
    fontWeight: "800",
  },
  itemImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.8,
  },
});

export default CategoryGrid;
