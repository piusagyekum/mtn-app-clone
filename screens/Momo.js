import React, { useRef, useState } from "react"

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native"

import { globalStyles } from "../styles/globalStyles"

const Momo = () => {
  const first = useRef()
  const second = useRef()
  const third = useRef()
  const fourth = useRef()

  const [pin, setPin] = useState({
    firstDigit: "",
    secondDigit: "",
    thirdDigit: "",
    fourthDigit: "",
  })

  const inputChange = (focusNext, key, val) => {
    setPin(current => {
      return { ...current, [key]: val }
    })
    val!=="" ? focusNext?.current?.focus() : ""
  }

  const clearInput = key => {
    setPin(current => {
      return { ...current, [key]: "" }
    })
  }

  return (
    <View style={globalStyles.container} className="bg-white items-center">
      <Text className=" text-3xl text-center mb-3">Enter Momo Pin</Text>
      <Text className="text-center text-3xl mb-10">(055 849 4055)</Text>
      <View className="flex-row w-52 mb-4" style={{ gap: 10 }}>
        <TextInput
          ref={first}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          autoFocus
          value={pin.firstDigit}
          name="firstDigit"
          onChangeText={val => {
            inputChange(second, "firstDigit", val)
          }}
          onFocus={() => {
            clearInput("firstDigit")
          }}
        />
        <TextInput
          ref={second}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          value={pin.secondDigit}
          onChangeText={val => {
            inputChange(third, "secondDigit", val)
          }}
          onFocus={() => {
            clearInput("secondDigit")
          }}
        />
        <TextInput
          ref={third}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          value={pin.thirdDigit}
          onChangeText={val => {
            inputChange(fourth, "thirdDigit", val)
          }}
          onFocus={() => {
            clearInput("thirdDigit")
          }}
        />
        <TextInput
          ref={fourth}
          style={styles.textInput}
          keyboardType="numeric"
          cursorColor="#ffcb00"
          maxLength={1}
          value={pin.fourthDigit}
          onChangeText={val => {
            inputChange(0, "fourthDigit", val)
          }}
          onFocus={() => {
            clearInput("fourthDigit")
          }}
        />
      </View>
      <Text className="text-sm">Make sure noone is looking at your PIN</Text>
      <Text className="">{Object.values(JSON.stringify(pin))}</Text>
    </View>
  )
}

export default Momo

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#0e7490",
    borderBottomWidth: 3,
    flex: 1,
    textAlign: "center",
  },
})
