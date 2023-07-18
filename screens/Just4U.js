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
import Just4UCard from "../components/Just4UCard"

const Just4U = () => {
  return (
    <View className="" style={globalStyles.container}>
      <ScrollView>
        <Text className="text-lg text-center font-medium mb-3">
          Exclusive offers Just4U
        </Text>
        {/* card */}
        <Just4UCard
          offer="100MB 30-day pack"
          price="GHc8.3"
          subtitle="Buy the 1000MB 30-day pack at GHc8.3"
        />
        <Just4UCard
          offer="100MB 30-day pack"
          price="GHc8.3"
          subtitle="Buy the 1000MB 30-day pack at GHc8.3"
        />
        <Just4UCard
          offer="100MB 30-day pack"
          price="GHc8.3"
          subtitle="Buy the 1000MB 30-day pack at GHc8.3"
        />
        <Just4UCard
          offer="100MB 30-day pack"
          price="GHc8.3"
          subtitle="Buy the 1000MB 30-day pack at GHc8.3"
        />
        <Just4UCard
          offer="100MB 30-day pack"
          price="GHc8.3"
          subtitle="Buy the 1000MB 30-day pack at GHc8.3"
        />
        <Just4UCard
          offer="100MB 30-day pack"
          price="GHc8.3"
          subtitle="Buy the 1000MB 30-day pack at GHc8.3"
        />
        <Just4UCard
          offer="100MB 30-day pack"
          price="GHc8.3"
          subtitle="Buy the 1000MB 30-day pack at GHc8.3"
        />
      </ScrollView>
    </View>
  )
}

export default Just4U
