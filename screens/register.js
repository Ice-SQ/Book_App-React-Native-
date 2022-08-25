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

export default function Register() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.registration}>Registration</Text>
      <Image source={require("../assets/registation.jpg")} style={styles.img} />
      <Text style={styles.labal}>User name</Text>
      <TextInput style={styles.txtInput} />
      <Text style={styles.labal}>Password</Text>
      <TextInput style={styles.txtInput} />
      <Text style={styles.labal}>Email</Text>
      <TextInput style={styles.txtInput} />
      <Text style={styles.labal}>Telephone</Text>
      <TextInput style={styles.txtInput} />
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={styles.login}>Already have account? Login</Text>
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
    backgroundColor:"lightyellow",
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
    height: 230,
    width: 230,
    alignSelf: "center",
    marginBottom: 10,
    top:-50,
    
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
    borderRadius: 20,
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
