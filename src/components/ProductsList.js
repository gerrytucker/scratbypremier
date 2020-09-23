import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ListItem, Image } from "react-native-elements";
import { useFetch } from "../hooks";
import ContentHeader from "./ContentHeader";

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
    "https://scratbygardencentre.com/wp/wp-json/premier/v2/products"
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

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={() => <ContentHeader title="Recent Products" />}
        data={data}
        keyExtractor={(data, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductsList;
