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
  ScrollView,
} from "react-native";
import ScrollViewContext from "react-native/Libraries/Components/ScrollView/ScrollViewContext";


export default function Elder() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.Tmain}>Elders</Text>

     <Image source={require("../assets/el.jpg")} style={styles.img} />

  <ScrollView>
      
      <Text style={styles.labal}>01) Pat the bunny</Text>
      <Text style={styles.labal}>02) Eyes that speak to the stars</Text>
      <Text style={styles.labal}>03) Elmo's Little library </Text>
      <Text style={styles.labal}>04) MIXED</Text>
      <Text style={styles.labal}>05) When Lola Visits</Text>
      <Text style={styles.labal}>06) I AM GOLDEN</Text>
      <Text style={styles.labal}>07) Festival of colors</Text>
      <Text style={styles.labal}>08) Hair Twins</Text>
      <Text style={styles.labal}>09) Good night little elizabeth</Text>
      <Text style={styles.labal}>10) Winnie the pooh</Text>

     
      <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("books");}}>
          <Text style={styles.btnTxt}>More Books</Text>
        </TouchableOpacity>
      </ScrollView>
      
     
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
  Tmain:{
        fontSize: 50,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    fontWeight: "500",
    color:"green",
      

  },
  btn: {
    backgroundColor: "green",
    marginHorizontal: 140,
    paddingVertical: 10,
    marginBottom: 40,
    top: 20,
    borderRadius:20,
  },

  btnTxt: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 400,
    alignSelf: "center",
    marginBottom: 10,
    top:-10,
  },
  labal: {
    backgroundColor: "#cacce5",
    padding: 30,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
    top: -50,
  },


  
});