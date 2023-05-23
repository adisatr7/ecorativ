import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { challenges } from "../data";
import { useEffect, useState } from "react";


export default function Plastics({ navigation }: any) {
  const [activeChallenges, setActiveChallenges] = useState([])
  const [completedChallenges, setCompletedChallenges] = useState([])

  const renderIcon = (iconName: string) => {

    type IconType = {
      [key: string]: any
    }

    const icons: IconType = {
      bottle: require("../assets/icon-bottle.png"),
      bag: require("../assets/icon-bag.png"),
      product: require("../assets/icon-product.png"),
    }

    if(icons[iconName])
      return icons[iconName]
    
    else {
      alert("Error: Icon not found!")
      return null
    }
  }

  useEffect(() => {
    const tempActive: any = []
    const tempCompleted: any = []

    challenges.forEach(challenge => {
      if(challenge.isCompleted)
        tempCompleted.push(challenge)
      
      else
        tempActive.push(challenge)
    })

    setActiveChallenges(tempActive)
    setCompletedChallenges(tempCompleted)
  }, [challenges])

  return (
    <SafeAreaView className="w-full h-full">
      <View>

        {/* Header Container */}
        <View className="flex-row justify-between items-center p-[24px]">

          {/* Back button */}
          <TouchableOpacity onPress={() => navigation.replace("Main")} activeOpacity={0.8}>
            <Image className="w-[18px] h-[18px]" source={require("../assets/icon-chevron-left-black.png")}/>
          </TouchableOpacity>

          {/* Header label */}
          <Text className="text-gray-500 text-subheading font-bold text-center">Recycling Tips</Text>
          <View className="w-[24px] h-[24px]"/>
        </View>
      </View>

      <ScrollView className="mx-[24px]">

        {/* Challenges progression */}
        <View className="bg-blue-100 rounded-lg p-[26px] items-center mb-[30px]">
          <Text className="text-subheading font-bold text-center">Plastics</Text>
          <Text className="my-[16px] w-full text-center text-gray-600">Continue to follow the challenge to reach 100% bar</Text>
          <View className="w-[90%] h-[14px] bg-white rounded-full">
            <View className="w-[45%] h-full bg-[#13254D] rounded-full"/>
          </View>
        </View>

        {/* Active challenges */}
        <Text className="text-subheading font-bold mb-[16px]">Challenges</Text>

        { activeChallenges.map(( challenge: any, index: number ) => (
          <View className="border border-gray-400 rounded-lg flex-row p-[12px] mb-[12px]" key={index}>
            <Image className="flex-[4] rounded-md mr-[10px]" source={ renderIcon(challenge.icon) } resizeMode="contain"/>

            <View className="flex-[10]">
              <View className="flex-row justify-between items-start">
                <Text className="text-body font-bold" numberOfLines={3} >{challenge.title}</Text>
                <View className="border border-gray-400 w-[16px] h-[16px] rounded-sm"/>
              </View>
              <Text className="mr-[16px] text-caption text-gray-400" numberOfLines={3} >{challenge.desc}</Text>
            </View>
          </View>
        )) }

        {/* Completed challenges */}
        <Text className="text-subheading font-bold my-[16px]">Completed Challenges</Text>

        { activeChallenges.map(( challenge: any, index: number ) => (
          <TouchableOpacity activeOpacity={0.6} className="bg-gray-200 rounded-lg flex-row p-[12px] mb-[12px]" key={index}>
            <View className="items-center bg-[#13254D] rounded-lg p-[10px] mr-[14px] ">
              <Image className="justify-center rounded-md w-[20px] h-[20px]" source={ renderIcon(challenge.icon) } resizeMode="contain"/>
            </View>

            <View className="flex-1 justify-center">
              <Text className="text-body font-bold" numberOfLines={3} >{challenge.title}</Text>
            </View>
          </TouchableOpacity>
        )) }
        <View className="my-[10px]"/>
      </ScrollView>

    </SafeAreaView>
  )
}