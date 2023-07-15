import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { Feather } from "@expo/vector-icons"
import HomeCard from "../components/HomeCard"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { SimpleLineIcons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

export default function Home() {
  return (
    <View style={globalStyles.container} className="bg-gray-100">
      <ScrollView>
        <Text className="font-bold text-xl text-center my-7">
          Y'ello <Text className="font-semibold">Pius Kwabena</Text>
        </Text>
        {/* card */}
        <HomeCard
          label="Airtime"
          value="Ghc 3.52"
          icon={<AntDesign name="mobile1" size={24} color="yellow" />}
        />
        <HomeCard
          label="Data"
          value="2.22 GB"
          other="0.00 MB"
          icon={
            <MaterialCommunityIcons name="broadcast" size={24} color="yellow" />
          }
        />
        <HomeCard
          label="SMS"
          value="20614 SMS"
          other="0 SMS"
          icon={<AntDesign name="message1" size={24} color="yellow" />}
        />
        <HomeCard
          label="Voice"
          value="15.00 Minutes"
          other="0.00 Min"
          icon={
            <MaterialCommunityIcons
              name="microphone-outline"
              size={28}
              color="yellow"
            />
          }
        />
        {/* BROADBAND CARD */}
        <View
          style={{ gap: 30 }}
          className="bg-white flex-row  rounded-lg p-3 mb-8"
        >
          <View style={{ gap: 10 }} className="  items-center">
            <Text className="text-sm ">Broadband</Text>
            {/* icon */}
            <MaterialCommunityIcons
              name="access-point-network"
              size={27}
              color="yellow"
            />
          </View>
          <View className="flex-1">
            <Text className="text-cyan-900 font-extrabold text-lg">
              Get Broadband
            </Text>
            <View className="flex-row gap-x-5">
              <Text className="font-bold">Get to the fastest speed</Text>
            </View>
          </View>
        </View>
        {/* POPULAR BUNDLE */}
        <Text className="font-bold mb-2">Popular Bundle</Text>
        <View className="bg-white mb-12 relative p-3 pb-6">
          <Text className="text-cyan-900 font-bold text-xl">401.61 MB</Text>
          <View className="self-start rounded-full overflow-hidden">
            <Text
              style={{ borderRadius: 10 }}
              className="text-white text-lg bg-cyan-700 px-4 py-2 "
            >
              Stay Connected
            </Text>
          </View>
          {/* amount */}
          <View className="border border-cyan-900  overflow-hidden absolute right-3 -bottom-6 rounded-lg bg-white">
            <Text className="text-lg px-3 py-1  ">Ghc 3</Text>
          </View>
        </View>
      </ScrollView>
      {/* HELP */}
      <View className="bg-cyan-700 absolute bottom-32 p-2 rounded-tr-xl rounded-br-lg ">
        <Ionicons name="help-circle-outline" size={24} color="white" />
        <Text className="text-white text-xs">Help</Text>
      </View>
      {/* BOTTOM NAV */}
      <View className="bg-white  flex-row justify-around absolute bottom-0 left-0 right-0 ">
        {/* home */}
        <View className="items-center  p-5">
          {/* icon */}
          <Ionicons name="ios-home-outline" size={24} color="black" />
          {/* label */}
          <Text className="">Home</Text>
        </View>
        {/* buysend */}
        <View className="items-center  p-5">
          {/* icon */}
          <Feather name="shopping-cart" size={24} color="black" />
          {/* label */}
          <Text className="">Buy/Send</Text>
        </View>
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
    </View>
  )
}
