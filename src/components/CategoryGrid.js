// code by @spencercarli
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { useFetch } from "../hooks";

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  data = JSON.stringify(data);
  console.log(data);
  return data;
};

const numColumns = 3;
const CategoryGrid = () => {
  const [data, loading] = useFetch(
    "https://scratbygardencentre.com/wp/wp-json/premier/v2/categories"
  );

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.thumbnail }} />
      </View>
    );
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={renderItem}
      numColumns={numColumns}
    />
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: "#fff",
  },
});
