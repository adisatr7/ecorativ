import { View, Text, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native"


export default function Activity() {
  const activityTextStyle = "mt-[12px] ml-[12px] mb-[4px] text-white"
  const activityImageStyle = "w-full h-[60%]"
  const activeOpacity = 0.85

  return (
    <SafeAreaView className="bg-white w-screen h-screen pt-[28px]">
    <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="dark-content"/>
      <ScrollView className="h-[1000px] px-[20px]">

        {/* Mockup: Rainbow Diagram */}
        <Text className="font-bold text-subheading">Diagram</Text>
        <Image 
          source={require("../assets/mockup-rainbow-diagram.png")} 
          resizeMode="contain"
          resizeMethod="resize"
          className="w-full h-[250px]"
          />
        
        {/* Mockup: Activity */}
        <Text className="font-bold text-subheading mt-[16px] mb-[16px]">Activity</Text>

        {/* First Row */}
        <View className="flex-row flex justify-between mb-[20px]">
          {/* Organics */}
          <TouchableOpacity activeOpacity={activeOpacity} className="bg-[#9539FE] w-[150px] h-[140px] rounded-[12px]">
            <Text className={activityTextStyle}>Organics</Text>
            <Image source={require("../assets/organics.png")} resizeMode="contain" className={activityImageStyle}/>
          </TouchableOpacity>

          {/* Plastics */}
          <TouchableOpacity activeOpacity={activeOpacity} className="bg-[#407BFF] w-[150px] h-[140px] rounded-[12px]">
            <Text className={activityTextStyle}>Plastics</Text>
            <Image source={require("../assets/plastics.png")} resizeMode="contain" className={activityImageStyle}/>
          </TouchableOpacity>
        </View>

        {/* First Row */}
        <View className="flex-row flex justify-between">
          {/* Paper */}
          <TouchableOpacity activeOpacity={activeOpacity} className="bg-[#FD8D74] w-[150px] h-[140px] rounded-[12px]">
            <Text className={activityTextStyle}>Papers</Text>
            <Image source={require("../assets/papers.png")} resizeMode="contain" className={activityImageStyle}/>
          </TouchableOpacity>

          {/* Glasses */}
          <TouchableOpacity activeOpacity={activeOpacity} className="bg-[#1D202D] w-[150px] h-[140px] rounded-[12px]">
            <Text className={activityTextStyle}>Glasses</Text>
            <Image source={require("../assets/glasses.png")} resizeMode="contain" className={activityImageStyle}/>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}