import React from "react"
import { Entypo } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native"

const GetMoreCard = ({ label, subtitle, icon }) => {
  return (
    <View
      style={{ gap: 10 }}
      className="flex-row shadow-lg rounded-lg p-4 bg-white overflow-hidden mb-7"
    >
      {/* icon */}
      <View className="bg-#ffcb00-400 rounded-full self-start p-3">{icon}</View>
      <View className="">
        <Text className=" text-xl font-semibold text-cyan-800 tracking-wider">
          {label}
        </Text>
        <Text className="text-sm text-gray-700">{subtitle}</Text>
      </View>
      <View className="bg-cyan-700 absolute right-0 top-0 bottom-0 w-10 justify-center items-center">
        <Entypo name="chevron-right" size={35} color="white" />
      </View>
    </View>
  )
}

export default GetMoreCard
