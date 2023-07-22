import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import BuyCard from "../components/BuyCard"

const Buy = () => {
  return (
    <View className="px-3">
      <ScrollView>
        <View
          style={{ gap: 10 }}
          className="flex-row border-2 border-#ffcb00-300 bg-white p-3 rounded-lg mb-6"
        >
          <MaterialCommunityIcons name="broadcast" size={30} color="#ffcb00" />
          <View className=" flex-1">
            <Text className="font-bold text-base">Special Days Offer</Text>
            <Text className="text-gray-600 text-sm">
              Enjoy 2.5gb of data for only GHc10 on holidays and on special days
              valid for 24hours
            </Text>
          </View>
        </View>
        <BuyCard
          label="Airtime"
          info="TopUp Airtime: Pay with Momo"
          icon={<Feather name="phone-call" size={20} color="gray" />}
        />
        <BuyCard
          label="Data"
          info="Stay connected to the rest of the world"
          icon={<Feather name="phone-call" size={20} color="gray" />}
        />
        <BuyCard
          label="Airtime"
          info="TopUp Airtime: Pay with Momo"
          icon={<Feather name="phone-call" size={20} color="gray" />}
        />
        <BuyCard
          label="Airtime"
          info="TopUp Airtime: Pay with Momo"
          icon={<Feather name="phone-call" size={20} color="gray" />}
        />
        <BuyCard
          label="Airtime"
          info="TopUp Airtime: Pay with Momo"
          icon={<Feather name="phone-call" size={20} color="gray" />}
        />
        <BuyCard
          label="Airtime"
          info="TopUp Airtime: Pay with Momo"
          icon={<Feather name="phone-call" size={20} color="gray" />}
        />
        <BuyCard
          label="Airtime"
          info="TopUp Airtime: Pay with Momo"
          icon={<Feather name="phone-call" size={20} color="gray" />}
        />
      </ScrollView>
    </View>
  )
}

export default Buy
