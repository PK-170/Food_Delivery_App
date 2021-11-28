import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import AboutInformation from "../components/AboutInformation";
import Menu from "../components/Menu";
import CartView from "../components/CartView";

//import {onBackPress} from '../components/BackPressHandler';
  
const foods = [
  {
    title: "Potato Gnocchi",
    description: "Potato Gnocchi in Bacon Spinach Cream Sauce",
    price: "$16.50",
    image:
      "https://www.eatwell101.com/wp-content/uploads/2018/05/Potato-Gnocchi-in-Bacon-Spinach-Cream-Sauce.jpg",
  },
  {
    title: "Lasagna",
    description:
      "Broken Lasagna With Parmesan and All the Peas 🔥",
    price: "$20.50",
    image: "https://assets.epicurious.com/photos/6082cd5435f704c34bec1f12/1:1/w_2240%2Cc_limit/SpringPastaWithPeas_RECIPE_042221_14014.jpg",
  },
  {
    title: "Caesar Salad",
    description:
      "Roast Chicken Caesar Salad",
    price: "$19.50",
    image:
      "https://assets.epicurious.com/photos/5f8e0436eb27e3e71e94dd98/1:1/w_2240%2Cc_limit/caesar-salad-roast-chicken-recipe-BA-101920.jpg",
  },
  {
    title: "Margherita",
    description:
      "One can never go wrong with a Pizza!",
    price: "$23.50",
    image:
      "https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg",
  },
  {
    title: "Butter Chicken",
    description: "Barbecued boneless chicken cooked with rich tomato and butter gravy.",
    price: "$19.50",
    image:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken-6.jpg",
  },
];

export default function RestaurantMenu({ route, navigation }) {
  return (
    
    <View>
      <AboutInformation route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <Menu restaurantName={route.params.name} foods={foods} />
      <CartView navigation={navigation} />
    </View>
    
  );
}

