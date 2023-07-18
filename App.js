import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "./styles/globalStyles"
import Home from "./screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Buy from "./screens/Buy"
import BottomNav from "./components/BottomNav"
import Momo from "./screens/Momo"
import Just4U from "./screens/Just4U"
import GetMore from "./screens/GetMore"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Just4U">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Buy" component={Buy} />
        <Stack.Screen name="Momo" component={Momo} />
        <Stack.Screen name="Just4U" component={Just4U} />
        <Stack.Screen name="GetMore" component={GetMore} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
