import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image } from "react-native"
import { posts } from "../data"
import Post from "../components/Post"


export default function Feed() {
  return (
    <SafeAreaView className={`bg-white w-screen h-screen pt-[${StatusBar.currentHeight}px]`}>
    <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="dark-content"/>
      <View className="mt-[20px]"/>

      <ScrollView className="px-[20px]">

        <View className="flex-row">
          <TouchableOpacity>
            <Image className="w-[40px] h-[40px] mr-[8px]" source={require("../assets/mockup-profile-picture.png")}/>
          </TouchableOpacity>

          {/* New post */}
          <TouchableOpacity activeOpacity={0.6} className="bg-gray-100 border border-gray-300 flex-row rounded-full px-[18px] py-[8px] flex-1 items-center">
            <Text className="text-gray-400 text-body text-center">Write a new post</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-[18px]"/>
        
        {/* Mockup: Feed */}
        { posts.map(( post, index ) => <Post {...post} key={index}/>) }

        <View className="py-[22px]"/>
        
      </ScrollView>
    </SafeAreaView>
  )
}