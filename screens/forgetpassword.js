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

export default function Pwreset() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.registration}>Pasword reset</Text>
      <Image source={require("../assets/lock.jpg")} style={styles.img} />
      <Text style={styles.labal}>Enter User name</Text>
      
      <TextInput style={styles.txtInput} />
      <Text style={styles.labal}>Email</Text>
      <TextInput style={styles.txtInput} />
      <Text style={styles.labal}>Telephone</Text>
      <TextInput style={styles.txtInput} />
      <View style={{ marginTop: 20 }}>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Reset</Text>
        </TouchableOpacity>
      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
  },

  registration: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    fontWeight: "500",
    top:-20,
    color:"green",
  },

  img: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: 40,
  },

  txtInput: {
    marginHorizontal: 20,
    color: "white",
    borderWidth: 1,
    paddingLeft: 20,
    borderBottomColor: "lightgreen",
    borderColor: "white",
    top:-18,
  },

  labal: {
    marginLeft: 20,
    color: "rgba(0, 0, 0, 0.9)",
    fontSize: 15,
    marginTop: -14,
  },

  btn: {
    backgroundColor: "green",
    marginHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius:20,
  },

  btnTxt: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    alignItems: "center",
  },

  login: {
    textAlign: "center",
  },
});
