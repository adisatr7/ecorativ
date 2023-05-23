import { useState } from "react"
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from "react-native"
import ProfileButton from "../components/ProfileButton"
import { user } from "../data"


export default function Profile({ navigation }: any) {

  return (
    <SafeAreaView className="bg-white w-screen h-screen">
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" barStyle="light-content"/>
      <ScrollView className="h-[1000px]">

        {/* Purple Background */}
        <View className="bg-primary w-screen h-[400px] pt-[48px] px-[20px] items-center">
          <Text className="font-bold text-heading text-white">Profile</Text>

          {/* Profile Picture */}
          <View  className="mt-[24px]">
            <Image source={{ uri: user.profilePictureUri }} className="rounded-full w-[130px] h-[130px] bg-gray-300"/>
            <TouchableOpacity 
              activeOpacity={0.8} 
              onPress={() => navigation.navigate("Profile")}
              className="justify-center rounded-full p-[10px] drop-shadow-sm bg-white bottom-0 right-0 absolute"
            >
              <Image 
                source={require("../assets/icon-change-picture.png")} 
                resizeMethod="resize"
                resizeMode="contain"
                className="w-[22px] h-[22px]"/>
            </TouchableOpacity>
          </View>

          {/* Name label */}
          <Text numberOfLines={1} className="font-bold text-subheading text-white mt-[16px]">{user.userName}</Text>

          {/* Level bar */}
          <View className="mt-[18px]">
            <View className="bg-white rounded-full w-[200px] h-[10px]">
              <View className={`bg-[#604465] rounded-full h-full`} style={{ width: `${user.userExp}%` }}/>
              <Text>{user.userExp}</Text>
            </View>
            <View className="flex-row justify-between mt-[3px]">
              <Text className="font-bold text-caption text-white">Level {user.userLevel}</Text>
              <Text className="text-right text-caption text-white">Environmentalist</Text>
            </View>
          </View>

        </View>

        {/* White Background */}
        <View className="bg-white w-screen h-fit px-[20px] pb-[70px] items-center">

          {/* Poin(?) */}
          <View className="bg-white p-[20px] -m-[32px] rounded-md">
            <View className="bg-[#604465] rounded-md w-[200px] h-[40px] justify-center items-center">
              <Text className="text-white text-body font-bold">Poin: {user.points}</Text>
            </View>
            <View className="flex-row w-[200px]">
              <Text className="text-caption text-gray-400 text-center mt-[10px]">
                Level up to reach the position of <Text className="text-caption font-bold text-black">Master of Nature</Text>
              </Text>
            </View>
          </View>

          {/* App Settings */}
          <View className="w-full pt-[42px]">

            {/* Subheader label */}
            <Text className="font-bold text-subheading text-black text-left">Settings</Text>

            {/* Buttons */}
            <ProfileButton label="Change username"/>
            <ProfileButton label="Change email"/>
            <ProfileButton label="Change address"/>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}