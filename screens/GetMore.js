import React from "react"
import { globalStyles } from "../styles/globalStyles"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

import GetMoreCard from "../components/GetMoreCard"

const GetMore = () => {
  return (
    <View className="" style={globalStyles.container}>
      <ScrollView>
        <Text className="text-2xl font-semibold tracking-wide text-center mb-3">
          Get More
        </Text>
        <Text className="text-center text-sm mb-4">
          Get access to ther great products and services
        </Text>
        {/* card */}
        <GetMoreCard
          icon={<MaterialIcons name="sim-card" size={24} color="black" />}
          label="eSIM"
          subtitle="eSIM request portal"
        /><GetMoreCard
          icon={<MaterialIcons name="sim-card" size={24} color="black" />}
          label="Ayoba"
          subtitle="A super app"
        />
        <GetMoreCard
          icon={<MaterialIcons name="send-to-mobile" size={24} color="black" />}
          label="MoMo"
          subtitle="Transactions and Payments"
        />
        <GetMoreCard
          icon={<Ionicons name="md-game-controller" size={24} color="black" />}
          label="Games"
          subtitle="Games & More"
        />
        <GetMoreCard
          icon={<Ionicons name="ios-desktop-sharp" size={24} color="black" />}
          label="Videos"
          subtitle="Videos & More"
        />
        <GetMoreCard
          icon={<MaterialIcons name="add" size={24} color="black" />}
          label="Others"
          subtitle="More Services"
        />
      </ScrollView>
    </View>
  )
}

export default GetMore
