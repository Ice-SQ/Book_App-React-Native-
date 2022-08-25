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

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image source={require("../assets/Book_welocome_image.png")} style={styles.img} />
      <Text style={styles.labal}>User name</Text>
      <TextInput style={styles.txtInput} />
      <Text style={styles.labal}>Password</Text>
      <TextInput style={styles.txtInput} />
      <View style={{ marginTop: 30 }}>


        <TouchableOpacity style={styles.btn}
        onPress={() => {navigation.navigate("main");}}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("register");}}>
          <Text style={styles.btnTxt}>Register</Text>
        </TouchableOpacity>

        
        <TouchableOpacity 
          onPress={() => {navigation.navigate("pwreset");}}>
          <Text style={styles.pwreset}>Forgot password? Reset</Text>
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

  welcome: {
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
    top:-20,
    
  },

  labal: {
    marginLeft: 20,
    color: "rgba(0, 0, 0, 0.9)",
    fontSize: 15,
    marginTop:-15,
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
  pwreset: {
      textAlign: 'center',
  }
});
