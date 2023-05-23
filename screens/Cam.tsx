import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import { Camera } from "expo-camera"
import { useEffect } from "react"


export default function Cam({ navigation }: any) {
  const [permission, requestPermission] = Camera.useCameraPermissions()

  
  useEffect(() => {
    requestPermission()
  }, [permission])

  return (
    <View>
      <Camera 
        className="w-full h-full"
        ratio="16:9"
        autoFocus
      >
        <View className="w-full h-full p-[24px]">

          {/* Header Container */}
          <View className="flex-row justify-between items-center">

            {/* Back button */}
            <TouchableOpacity onPress={() => navigation.replace("Main")} activeOpacity={0.8}>
              <Image className="w-[24px] h-[24px]" source={require("../assets/icon-chevron-left.png")}/>
            </TouchableOpacity>

            {/* Header label */}
            <Text className="text-white text-heading font-bold text-center ">Scan</Text>
            <View className="w-[24px] h-[24px]"/>
          </View>


          {/* Square thingy */}
          <Image 
            resizeMode="contain"
            className="w-[65%] h-[65%] self-center mt-[70px]" 
            source={require("../assets/camera-square-thingy.png")}
          />

        </View>
      </Camera>
    </View>
  )
}