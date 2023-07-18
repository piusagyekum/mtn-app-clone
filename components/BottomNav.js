import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { Feather } from "@expo/vector-icons"
import HomeCard from "../components/HomeCard"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { SimpleLineIcons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

const BottomNav = ({navigation}) => {
  return (
    <View className="bg-white  flex-row justify-around absolute bottom-0 left-0 right-0 ">
      {/* home */}
      <View className="items-center  p-5">
        {/* icon */}
        <Ionicons name="ios-home-outline" size={24} color="black" />
        {/* label */}
        <Text className="">Home</Text>
      </View>
      {/* buysend */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Buy")
        }}
      >
        <View className="items-center  p-5">
          {/* icon */}
          <Feather name="shopping-cart" size={24} color="black" />
          {/* label */}
          <Text className="">Buy/Send</Text>
        </View>
      </TouchableOpacity>
      {/* momo */}
      <View className="items-center rounded-full border-2 px-5 py-2 relative -top-8 border-gray-400 bg-white">
        {/* icon */}
        <MaterialIcons
          name="send-to-mobile"
          size={50}
          color="#022c5e"
          className="text-red-500"
        />
        {/* label */}
        <Text className="">Momo</Text>
      </View>
      {/* for you */}
      <View className="items-center p-5 ">
        {/* icon */}
        <SimpleLineIcons name="handbag" size={24} color="black" />
        {/* label */}
        <Text className="">Home</Text>
      </View>
      {/* Get more */}
      <View className="items-center p-5">
        {/* icon */}
        <Text className="border px-1 rounded-lg ">
          <Feather
            style={{ fontWeight: 500 }}
            name="more-horizontal"
            size={24}
            color="black"
          />
        </Text>
        {/* label */}
        <Text className="">Get more</Text>
      </View>
    </View>
  )
}

export default BottomNav
