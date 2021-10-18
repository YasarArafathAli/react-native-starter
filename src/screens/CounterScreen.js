import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style = {styles.text}>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style = {styles.text}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8f3dc",
    justifyContent:"center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#95d5b2",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#000000"
  },
  countContainer: {
    alignItems: "center",
      padding: 10,
      marginBottom : 50
    },
  text: {
    fontSize: 30,
    padding: 20
  }
});

export default CounterScreen;