import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/Pasta.jpg"),
    text: "Pasta",
  },
  {
    image: require("../assets/images/pizza.jpg"),
    text: "Pizza",
  },
  {
    image: require("../assets/images/burger.jpg"),
    text: "Burger",
  },
  {
    image: require("../assets/images/curry.jpg"),
    text: "Curry",
  },
  {
    image: require("../assets/images/vegan.jpg"),
    text: "Vegan",
  },
  {
    image: require("../assets/images/cheese.jpg"),
    text: "Cheese",
  },
  {
    image: require("../assets/images/dessert.jpg"),
    text: "Dessert",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 4,
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingLeft: 15,
      }}
    >
       {/* to display the images horizontal way  */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 25 }}>
            <Image
              source={item.image}
              style={{
                width: 55,
                height: 45,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
