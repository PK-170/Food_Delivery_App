import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'

export default function Home() {
  return (
    <SafeAreaView>
    <View>
      <Header />
      <SearchBox />
    </View>
    </SafeAreaView>
  )
}
