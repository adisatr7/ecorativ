import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useState } from "react"
import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar, ScrollView, FlatList } from "react-native"
import Post from "../components/Post"
import posts from "../data"


export default function Home({ navigation }: any) {
  const [profilePicture, setProfilePicture] = useState(require("../assets/mockup-profile-picture.png"))
  const [userName, setUserName] = useState("Andreas")
  const [userAddress, setUserAddress] = useState("Purwokerto Selatan")
  
  // Fetch user data
  // useFocusEffect(() => {
  //   useCallback(() => {
  //     //TODO: Implement?
  //   }, [])
  // })

  return (
    <SafeAreaView className="bg-white w-screen h-fit">
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" barStyle="dark-content"/>
      <View className={`w-screen h-[${StatusBar.currentHeight}px]`}/>
      <ScrollView className="px-[20px] pt-[28px]">

        {/* Header Container */}
        <View className="rounded-full flex-row">

          {/* Profile picture */}
          <TouchableOpacity activeOpacity={0.8} className="justify-center" onPress={() => navigation.navigate("Profile")}>
            <Image source={profilePicture} className="rounded-full w-[60px] h-[60px] bg-gray-300 mr-[14px]"/>
          </TouchableOpacity>

          {/* User name and user address container */}
          <View className="justify-center flex-1">

            {/* User greetings */}
            <View className="flex-row">
              <Text className="font-bold text-subheading mb-[2px]">Welcome, </Text>
              <Text className="font-bold text-subheading text-primary">{userName}</Text>
            </View>

            {/* User address */}
            <Text className="text-body text-gray-400">{userAddress}</Text>
          </View>

          {/* Bell icon */}
          <TouchableOpacity activeOpacity={0.7} className="justify-center">
            <Image source={require("../assets/icon-bell.png")} resizeMode="cover" className="w-[24px] h-[24px]"/>
          </TouchableOpacity>
        </View>

        {/* Mockup: Shows percentage of trash collected */}
        <Image 
          source={require("../assets/mockup-percentage.png")} 
          resizeMode="contain"
          className="
            w-full h-[140px] mt-[20px]
          "/>
        
        {/* Posts */}
        <Text className="font-bold text-subheading mt-[24px] mb-[16px]">Popular Posts</Text>

        { posts.map((post, index) => (
          <Post {...post} key={index}/>
        ))}

      <View className="m-[35px]"/>
      </ScrollView>
    </SafeAreaView>
  )
}