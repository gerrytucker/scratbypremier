import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Body,
  Title,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from "native-base";
import ProductsList from "./components/ProductsList";

export default function App() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Scratby Premier</Title>
        </Body>
      </Header>
      <View style={{ flex: 1 }}>
        <ProductsList title="Latest Products" />
      </View>
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button vertical active>
            <Icon name="compass" />
            <Text>Compass</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
      <StatusBar style="dark" />
    </Container>
  );
}
