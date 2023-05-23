import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image, Text, View } from "react-native"
import Home from "./Home"
import Activity from "./Activity"
import Scan from "./Scan"
import Feed from "./Feed"
import Profile from "./Profile"



const Tab = createBottomTabNavigator()

export default function Main() {

  const iconStyle = "w-[24px] h-[24px]"
  const textStyle = "text-[12px] text-primary my-[2px]"

  return (
    <Tab.Navigator 
      initialRouteName="Home" 
      backBehavior="initialRoute" 
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#9539FE", 
        tabBarInactiveTintColor: "#D9BCF7",
        tabBarBackground: () => {
          return (
            <View className="bg-white h-screen bottom-2"/>
          )
        }
      }}>

      {/* Home */}
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View className="items-center" >
              { focused? 
                <Image source={require("../assets/icon-home.png")} className={iconStyle}/> :
                <Image source={require("../assets/icon-home-inactive.png")} className={iconStyle}/> }
              
              <Text className={textStyle} >Home</Text>
            </View>
          )
        }
      }}/>

      {/* Activity */}
      <Tab.Screen name="Activity" component={Activity} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View className="items-center" >
              { focused? 
                <Image source={require("../assets/icon-activity.png")} className={iconStyle}/> :
                <Image source={require("../assets/icon-activity-inactive.png")} className={iconStyle}/> }
              
              <Text className={textStyle} >Activity</Text>
            </View>
          )
        }
      }}/>

      {/* Scan */}
      <Tab.Screen name="Scan" component={Scan} options={{
        tabBarIcon: () => {
          return (
            <View className="rounded-full bg-primary w-[64px] h-[64px] items-center justify-center mb-[44px]">
              <Image source={require("../assets/icon-scan.png")}/>
              <Text className="text-white mt-[5px] text-[12px]">Scan</Text>
            </View>
          )
        } 
      }}/>

      {/* Feed */}
      <Tab.Screen name="Feed" component={Feed} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View className="items-center" >
              { focused? 
                <Image source={require("../assets/icon-post.png")} className={iconStyle}/> :
                <Image source={require("../assets/icon-post-inactive.png")} className={iconStyle}/> }
              
              <Text className={textStyle} >Feed</Text>
            </View>
          )
        }
      }}/>

      {/* Profile */}
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View className="items-center" >
              { focused? 
                <Image source={require("../assets/icon-profile.png")} className={iconStyle}/> :
                <Image source={require("../assets/icon-profile-inactive.png")} className={iconStyle}/> }
              
              <Text className={textStyle} >Profile</Text>
            </View>
          )
        }
      }}/>
    </Tab.Navigator>
  )
}