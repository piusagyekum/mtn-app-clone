import React from "react"
import { View, Text, StyleSheet } from "react-native"

const HomeCard = ({ label, value, icon, other }) => {
  
  return (
    <View style={{ gap: 30 }} className="bg-white flex-row  rounded-lg p-3 mb-2">
      <View style={{ gap: 10 }} className="  items-center">
        <Text className="text-sm ">{label}</Text>
        {/* icon */}
        {icon}
      </View>
      <View className="flex-1">
        <Text className="text-cyan-900 font-extrabold text-xl">{value}</Text>
        <View className="flex-row gap-x-5">
          {other && <Text className="font-bold">Bonus</Text>}
          <Text>{other}</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeCard
