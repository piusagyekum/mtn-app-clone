import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"

const BuyCard = ({label,info,icon}) => {
  return (
    <View className="rounded-lg overflow-hidden bg-white p-4 shadow-xl mb-6">
      <Text className="text-cyan-700 font-extrabold text-xl mb-3">{label}</Text>

      <View className="flex-row">
        {/* icon */}
        {icon}
        <Text className="text-gray-500 ml-3">{info}</Text>
      </View>
      <View className="bg-cyan-700 absolute right-0 top-0 bottom-0 w-10 justify-center items-center">
        <Entypo name="chevron-right" size={35} color="white" />
      </View>
    </View>
  )
}

export default BuyCard
