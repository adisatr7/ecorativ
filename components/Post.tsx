import { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

type PostProps = {
  userName: string,
  userAddress: string,
  postImageUri?: string,
  profilePictureUri?: string,
  postCaption?: string,
  likes?: number,
  comments?: number,
  shares?: number,
  isLiked?: boolean
}

export default function Post({ userName, userAddress, profilePictureUri="", postImageUri="", postCaption="", likes=0, comments=0, shares=0, isLiked=false }: PostProps) {

  const [liked, setLiked] = useState(isLiked)
  
  return (
    <View className="w-fit h-fit mb-[30px]">
      
      {/* Header */}
      <View className="flex-row justify">

        {/* Profile Picture */}
        <Image source={{ uri: profilePictureUri }} className="w-[36px] h-[36px] bg-gray-300 rounded-full mr-[12px]"/>

        {/* User name and address container */}
        <View>

          {/* User name */}
          <Text className="text-body font-bold">{userName}</Text>

          {/* User address */}
          <View className="flex-row items-center">
            <Image source={require("../assets/icon-location.png")} className="w-[12px] h-[12px] mr-[6px]"/>
            <Text className="text-gray-400">{userAddress}</Text>
          </View>
        </View>

      </View>

      <Text className="text-body text-gray-500 my-[12px]">{postCaption}</Text>

      {/* Post picture */}
      <Image source={{ uri: postImageUri }} className="rounded-md bg-red-400 w-full h-[200px]"/>

      {/* Bottom container */}
      <View className="flex-row mt-[18px]">

        {/* Likes */}
        <View className="flex-row items-center">
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={require("../assets/icon-like.png")} resizeMode="contain" className="mr-[8px] w-[18px] h-[18px]"/>
          </TouchableOpacity>
          <Text className="text-gray-400 text-caption font-bold">{likes}</Text>
        </View>

        {/* Comments */}
        <View className="flex-row items-center mx-[24px]">
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={require("../assets/icon-comment.png")} resizeMode="contain" className="mr-[8px] w-[18px] h-[18px]"/>
          </TouchableOpacity>
          <Text className="text-gray-400 text-caption font-bold">{comments}</Text>
        </View>

        {/* Shares */}
        <View className="flex-row items-center">
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={require("../assets/icon-share.png")} resizeMode="contain" className="mr-[8px] w-[18px] h-[18px]"/>
          </TouchableOpacity>
          <Text className="text-gray-400 text-caption font-bold">{shares}</Text>
        </View>

      </View>
    </View>
  )
}