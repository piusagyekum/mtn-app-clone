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
    firstDigit: null,
    secondDigit: null,
    thirdDigit: null,
    forthDigit: null,
  })

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
          onChangeText={val => {
            second.current.focus()
            setPin(pin => {
              return { ...pin, firstDigit: val }
            })
          }}
        />
        <TextInput
          ref={second}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={val => {
            third.current.focus()
            setPin(pin => {
              return { ...pin, secondDigit: val }
            })
          }}
        />
        <TextInput
          ref={third}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={val => {
            fourth.current.focus()
            setPin(pin => {
              return { ...pin, thirdDigit: val }
            })
          }}
        />
        <TextInput
          ref={fourth}
          style={styles.textInput}
          keyboardType="numeric"
          cursorColor="#ffcb00"
          onChangeText={val => {
            setPin(pin => {
              return { ...pin, fourthDigit: val }
            })
          }}
        />
      </View>
      <Text className="text-sm">Make sure noone is looking at your PIN</Text>
      <Text className=''>{pin.toString()}</Text>
    </View>
  )
}

export default Momo

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "blue",
    borderBottomWidth: 3,
    flex: 1,
    textAlign: "center",
  },
})
