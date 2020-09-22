import React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Icon,
} from "native-base";
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

const ProductsList = () => {
  const [data, loading] = useFetch(
    "https://scratbygardencentre.com/wp/wp-json/premier/v2/products"
  );

  return (
    <List
      dataArray={data}
      keyExtractor={(data, index) => index.toString()}
      renderItem={({ item }) => (
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: item.thumbnail_url }} />
          </Left>
          <Body>
            <Text>{item.name}</Text>
            <Text note numberOfLines={1}>
              £{item.regular_price}
            </Text>
          </Body>
          <Right>
            <Icon name="ios-arrow-forward" />
          </Right>
        </ListItem>
      )}
    />
  );
};

export default ProductsList;
