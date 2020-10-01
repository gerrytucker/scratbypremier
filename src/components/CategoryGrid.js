import React, { PureComponent } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, View, Text, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { FlatGrid } from "react-native-super-grid";

import { useFetch } from "../hooks";

export default class CategoryGrid extends PureComponent {
  state = {
    categoryData: {},
    loading: true,
  };

  async componentDidMount() {
    try {
      const getCategoryData = await AsyncStorage.getItem("@categories");
      this.setState({
        categoryData: JSON.parse(getCategoryData),
        loading: false,
      });
    } catch (err) {
      console.log("Error retrieving Categories from Local Storage");
    }
  }

  render() {
    const { categoryData, loading } = this.state;

    if (!loading) {
      return (
        <FlatGrid
          itemDimension={130}
          data={categoryData}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer]}>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.itemImage}
              />
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          )}
        />
      );
    } else {
      return <ActivityIndicator size="large" color="#000" />;
    }
  }
}

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
