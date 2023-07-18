import React,{useState} from "react"

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
    const pinHandler = value => {
      setPin(current => {
        return [current].push(value)
      })
    }
    
    const [pin, setPin] = useState({
        firstDigit:null,
        secondDigit:null,
        thirdDigit:null,
        forthDigit:null,
    });


  return (
    <View style={globalStyles.container} className="bg-white items-center">
      <Text className=" text-3xl text-center mb-3">Enter Momo Pin</Text>
      <Text className="text-center text-3xl mb-10">(055 849 4055)</Text>
      <View className="flex-row w-52 mb-4" style={{ gap: 10 }}>
        <TextInput style={styles.textInput} keyboardType="numeric" maxLength={1} autoFocus name="dssd" onChangeText={function(val) {
            console.log(val)
            
        }
        } />
        <TextInput style={styles.textInput} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.textInput} keyboardType="numeric" maxLength={1}/>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          cursorColor="yellow"
        />
      </View>
      <Text className="text-sm">Make sure noone is looking at your PIN</Text>
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
