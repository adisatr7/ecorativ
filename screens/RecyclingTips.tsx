import { FlatList, Image, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { tips } from "../data"


export default function RecyclingTips({ navigation }: any) {
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
          <Text className="text-gray-500 text-subheading font-bold text-center ">Recycling Tips</Text>
          <View className="w-[24px] h-[24px]"/>
        </View>
      </View>

      {/*  */}
      <ScrollView className="mx-[24px]">
        { tips.map(( tip, index ) => (
          <View className="border border-gray-400 rounded-lg flex-row p-[12px] mb-[12px]" key={index}>
            <Image className="flex-[5] rounded-md mr-[10px]" source={{ uri: tip.thumbnailUri }} resizeMode="contain"/>

            <View className="flex-[10]">
              <Text className="text-caption" numberOfLines={3} >{tip.title}</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => Linking.openURL(tip.redirectUrl)}>
                <Text className="text-primary font-bold mt-[4px]">Open in Browser</Text>
              </TouchableOpacity>
            </View>
          </View>
        )) }
      </ScrollView>

    </SafeAreaView>
  )
}