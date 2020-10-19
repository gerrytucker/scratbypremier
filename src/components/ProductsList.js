import React from "react";
import { AppLoading } from "expo";
import { View, StyleSheet, FlatList } from "react-native";
import { ListItem, Image } from "react-native-elements";
import { useFetch } from "../hooks";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const ProductsList = ({ title }) => {
  const [data, loading] = useFetch(
    "https://scratbygardencentre.com/wp-json/premier/v2/products"
  );

  renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Image
        source={{ url: item.thumbnail_url }}
        style={{ height: 56, width: 56 }}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>£{item.regular_price}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return loading ? (
    <AppLoading />
  ) : (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(data, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductsList;
