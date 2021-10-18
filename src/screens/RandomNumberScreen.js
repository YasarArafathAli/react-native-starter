import React, {useState} from 'react';
import {View, StyleSheet,TouchableOpacity,FlatList, Text} from 'react-native';

const Randomnumberscreen = () => {
    const [random, setRandom] = useState([]);
    const genRandom = () => {
        const ran = Math.round(Math.random() * 100 ) +1;
        console.log("Clicked");
        setRandom(prev => {
            return [...prev, ran]
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <TouchableOpacity
                style = {styles.button}
                onPress={genRandom} >
                    <Text style={styles.text}>Generate Random Number</Text>
                </TouchableOpacity>
                <FlatList
                showsHorizontalScrollIndicator ={false}
                    data={random} renderItem={({ item }) => <Text style={styles.text}>{item}</Text>} />

      </View>
        </View>
    );
}

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
    borderColor: "#000000",
  },
  countContainer: {
    alignItems: "center",
      padding: 10,
      marginBottom : 50
    },
  text: {
    fontSize: 30,
      padding: 20,
    color: "#081c15"
  }
});
export default Randomnumberscreen;
