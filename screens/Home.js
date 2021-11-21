import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomHome from "../components/BottomHome";
import { Divider } from "react-native-elements";
import Categories from "../components/Categories";
import Header from "../components/Header";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBox from "../components/SearchBox";

const YELP_API_KEY =
  "OzFG_hxdDcWgQQ64y9c6p1IFwlQMsCtFsG6joW2BJYR6wqStIlgyd4Vs9BzVXSC1wpynyxvIVlShVQ9gpm0NgqrpotRPKuhdHbR4iwjxeMa2d_HFUszgwA23WoCIYXYx ";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Wellington");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  // to display the restautrants based on the city selected by the user
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBox cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={3} />
      <BottomHome />
    </SafeAreaView>
  );
}
