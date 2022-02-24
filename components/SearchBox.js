import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBox({ cityHandler }) {
  return (
    <View style={{ marginTop: 18, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: " You need your own api key and paste it here  " }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 18,
            fontWeight: "600",
            marginTop: 8,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 55,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 12,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 12 }}>
            <Ionicons name="location-sharp" size={25} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 9,
              backgroundColor: "white",
              padding: 8,
              borderRadius: 35,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={12}
              style={{ marginRight: 7 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
