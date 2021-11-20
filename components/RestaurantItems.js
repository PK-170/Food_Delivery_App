import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// I added these restaurants to test the function
export const localRestaurants = [
  {
    name: "Logan Brown (Wellington)",
    image_url:
      "https://images.myguide-cdn.com/wellington/companies/logan-brown-restaurant-and-bar/large/logan-brown-restaurant-and-bar-66783.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 566,
    rating: 5.0,
  },
  {
    name: "Leuven (Wellington)",
    image_url:
      "https://images.myguide-cdn.com/md/wellington/companies/leuven-belgium-beer-cafe/large/leuven-belgium-beer-cafe-704748.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 755,
    rating: 4.7,
  },
  {
    name: "Mishmosh (Wellington)",
    image_url:
      "https://goodcms.s3.amazonaws.com/woap/venue/Mishmosh-190521-105646.jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 733,
    rating: 4.5,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}


const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);

