import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Main() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.Tmain}>Categories</Text>

      <Image source={require("../assets/cat.jpg")} style={styles.img} />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Childrens");
        }}
      >
        <Text style={styles.btnTxt}>Childrens</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("young");
        }}
      >
        <Text style={styles.btnTxt}>Youngers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("elder");
        }}
      >
        <Text style={styles.btnTxt}>Elders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    backgroundColor: "lightyellow",
  },
  Tmain: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    fontWeight: "500",
    color: "green",
  },
  btn: {
    backgroundColor: "green",
    marginHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 40,
    top: 50,
    borderRadius: 20,
  },

  btnTxt: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    alignItems: "center",
  },
  img: {
    height: 220,
    width: 400,
    alignSelf: "center",
    marginBottom: 10,
    top: -10,
  },
});
