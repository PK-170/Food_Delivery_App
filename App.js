import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBVASTnFE1PZfRclI49MXAEBYsf62fH5SU';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en', // language of the results
      }}
      onPress={(data, details) => console.log(data, details)}
      textInputProps={{
        InputComp: Input,
        leftIcon: { type: 'font-awesome', name: 'chevron-left' },
        errorStyle: { color: 'red' },
      }}
    />
  );
};

export default GooglePlacesInput;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Magic Meal app!</Text>
//       <Text>Get your food now!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
