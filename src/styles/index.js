import { StyleSheet, Dimensions } from "react-native";

const numColumns = 3;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // Grid
  gridContainer: {
    flex: 1,
  },
  gridItem: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns, // approximate a square
  },
  gridItemInvisible: {
    backgroundColor: "blue",
    borderColor: "blue",
  },
  gridItemText: {
    color: "#fff",
  },
});
