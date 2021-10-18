import React from "react";
import { Text, StyleSheet, View ,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return <View style={styles.bg}>
    <Text style={styles.heading}>Yasar Arafath's{"\n"}React Native Apps collection</Text>
    <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Counter")}> 
      <Text style = {styles.text}>Counter</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Random")}> 
      <Text style = {styles.text}>Random Number Generator</Text>
    </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#d8f3dc",
    justifyContent:"center"

  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    // padding: 10,
    textAlign: "center",
    borderBottomColor: "#000000",
    color: "#202020"
  },
  heading: {
    fontSize: 30,
    fontWeight: "800",
    padding: 10,
    textAlign: "center",
  },
  button: {
    padding: 10,
    margin: 20,
    textAlign: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#000000",
    backgroundColor: "#95d5b2"
  }
});

export default HomeScreen;
