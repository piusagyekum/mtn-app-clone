import { Button, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "./styles/globalStyles"
import Home from "./screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Buy from "./screens/Buy"
import BottomNav from "./components/BottomNav"
import Momo from "./screens/Momo"
import Just4U from "./screens/Just4U"
import GetMore from "./screens/GetMore"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { SimpleLineIcons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

export default function App() {
  const HomeStack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  return (
    // <NavigationContainer>
    //   <HomeStack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       headerStyle: {
    //         height: 1000,
    //         backgroundColor: "#ffcb00",
    //       },
    //       headerRight: () => (
    //         <Ionicons name="menu-outline" size={35} color="black" />
    //       ),
    //       headerTintColor: "black",
    //       headerTitleAlign: "center",
    //     }}
    //   >
    //     <HomeStack.Screen name="Home" component={Home} />
    //     <HomeStack.Screen name="Buy" component={Buy} />
    //     <HomeStack.Screen name="Momo" component={Momo} />
    //     <HomeStack.Screen name="Just4U" component={Just4U} />
    //     <HomeStack.Screen name="GetMore" component={GetMore} />
    //   </HomeStack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffcb00",
          },
          headerRight: () => (
            <Ionicons name="menu-outline" size={35} color="black" />
          ),
          tabBarStyle:{
              backgroundColor:'#fff',
          },
          headerTintColor: "black",
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#ffcb00",
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-home-outline" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Buy"
          component={Buy}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="shopping-cart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Momo"
          component={Momo}
          options={{
            tabBarIcon: ({ color }) => (
              <View className="relative -top-5 border rounded-full bg-white pt-1 px-3" style={{height:85}}>
                <MaterialIcons
                  name="send-to-mobile"
                  size={50}
                  color="#022c5e"
                  className="text-red-500"
                />
                <Text className='text-sm text-center'>Momo</Text>
              </View>
            ),
            tabBarLabel:'',
          }}
        />
        <Tab.Screen
          name="Just4U"
          component={Just4U}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="handbag" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="GetMore"
          component={GetMore}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather
                style={{ fontWeight: 500 }}
                name="more-horizontal"
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
