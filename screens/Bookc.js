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

export default function Books() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.Tmain}>Books</Text>

      <ScrollView>
        <View style={styles.vini}>
          <Image source={require("../assets/wini.jpg")} style={styles.img} />
          <Text style={styles.vini}> Author :- Tin tin</Text>
          <Text style={styles.vini}>
            Discription :- Winnie-the-Pooh was based on a real-life bear who
            lived in the London Zoo. He got there thanks to a Canadian soldier
            and veterinarian named Harry Colebourn
          </Text>
          <Text style={styles.price}>Price Rs 850/=</Text>
          <Text style={styles.qt}> Qty :- 20</Text>
        </View>

        <View style={styles.vini}>
          <Image source={require("../assets/i2.jpg")} style={styles.img} />
          <Text style={styles.vini}> Author :- Eddie</Text>
          <Text style={styles.vini}>
            Discription :- This beautifully illustrated book showcases women who
            changed the world.Featuring 18 trailblazing black women in American
            history,
          </Text>
          <Text style={styles.price}>Price Rs 700/=</Text>
          <Text style={styles.qt}> Qty :- 10</Text>
        </View>

        <View style={styles.vini}>
          <Image source={require("../assets/gold.jpg")} style={styles.img} />
          <Text style={styles.vini}> Author :- Anne</Text>
          <Text style={styles.vini}>
            Discription :- I Am Golden is a children's picture book by Eva Chen
            and illustrated by Sophie Diao. It tells the story of Mei, the
            daughter of Chinese immigrants to New York, who is shown to be a
            bridge connecting her parents to their new home.{" "}
          </Text>
          <Text style={styles.price}>Price Rs 750/=</Text>
          <Text style={styles.qt}> Qty :- 15</Text>
        </View>

        <View style={styles.vini}>
          <Image source={require("../assets/eye.jpg")} style={styles.img} />
          <Text style={styles.vini}> Author :- John Graze</Text>
          <Text style={styles.vini}>
            Discription :- "Eyes that Speak to the Stars" is a picture book
            about a boy, who discovers the shining, rising light in his eyes and
            in the eyes of his family members. The story begins with a hurtful
            incident
          </Text>
          <Text style={styles.price}>Price Rs 650/=</Text>
          <Text style={styles.qt}> Qty :- 13</Text>
        </View>

        <View style={styles.vini}>
          <Image source={require("../assets/lora.jpg")} style={styles.img} />
          <Text style={styles.vini}> Author :- Tin tin</Text>
          <Text style={styles.vini}>
            Discription :- Her debut picture book When Lola Visits, about a
            Filipina American girl and her grandmother who comes for her annual
            summer visit, will be out on May 18, 2021.
          </Text>
          <Text style={styles.price}>Price Rs 900/=</Text>
          <Text style={styles.qt}> Qty :- 25</Text>
        </View>
      </ScrollView>
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

  img: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: 10,
    top: -10,
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
  vini: {
    textAlign: "center",
    color: "green",
  },
  price: {
    color: "red",
    left: 10,
  },
  qt: {
    top: -20,
    left: 340,
  },
});
