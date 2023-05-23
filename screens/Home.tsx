import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar, ScrollView, FlatList } from "react-native"
import { posts, user } from "../data"
import Post from "../components/Post"


export default function Home({ navigation }: any) {

  return (
    <SafeAreaView className="bg-white w-screen h-fit">
      <StatusBar translucent backgroundColor="white" barStyle="dark-content"/>
      <View className={`w-screen h-[${StatusBar.currentHeight}px]`}/>
      <ScrollView className="px-[20px] pt-[48px]">

        {/* Header Container */}
        <View className="rounded-full flex-row">

          {/* Profile picture */}
          <TouchableOpacity activeOpacity={0.8} className="justify-center" onPress={() => navigation.navigate("Profile")}>
            <Image source={{ uri: user.profilePictureUri }} className="rounded-full w-[60px] h-[60px] bg-gray-300 mr-[12px]"/>
          </TouchableOpacity>

          {/* User name and user address container */}
          <View className="justify-center flex-1">

            {/* User greetings */}
            <View className="flex-row">
              <Text className="font-bold text-subheading mb-[2px]">Welcome, </Text>
              <Text className="font-bold text-subheading text-primary flex-1 mr-[12px]" numberOfLines={1}>{user.userName}</Text>
            </View>

            {/* User address */}
            <Text className="text-body text-gray-400">{user.userAddress}</Text>
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
            w-full h-[140px] mt-[12px]
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