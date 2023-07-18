import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native"

const Just4UCard = ({offer,price,subtitle}) => {
  return (
    <View className="bg-white p-5 px-8 pb-10 rounded-lg shadow mb-5 ">
      <View style={{ gap: 10 }} className="flex-row mb-3">
        <Text className="text-cyan-700 font-bold text-2xl w-[55%] ">
          {offer}
        </Text>
        <View className="border border-gray-300 rounded-full self-start">
          <Text className=" text-center text-cyan-700 font-bold text-2xl px-3 py-3">
           {price}
          </Text>
        </View>
      </View>
      <Text className="mb-3 text-gray-600 text-sm">
       {subtitle}
      </Text>
      <View className="bg-cyan-700 rounded-xl self-start">
        <Text className="text-sm leading-6 px-1 text-white tracking-tight">
          Stay Connected
        </Text>
      </View>
    </View>
  )
}

export default Just4UCard
