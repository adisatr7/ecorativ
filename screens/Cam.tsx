import { Button, Image, Modal, Pressable, Text, TouchableOpacity, View } from "react-native"
import { Camera } from "expo-camera"
import { useEffect, useState } from "react"
import Popup from "../components/Popup"
import WideButton from "../components/WideButton"


export default function Cam({ navigation }: any) {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [showModal, setShowModal] = useState(0)
  
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

          <View className="flex-row justify-between h-full w-screen absolute top-[200px]">
            {/* Hitbox 1 */}
            <TouchableOpacity onPress={() => setShowModal( showModal === 0? 1 : 0)}>
              <View className="w-[90px] h-[300px]"/>
            </TouchableOpacity>

            {/* Hitbox 2 */}
            <TouchableOpacity onPress={() => setShowModal(2)} >
              <View className="w-[90px] h-[300px]"/>
            </TouchableOpacity>

          </View>
        </View>

        {/* Modal Popup: Plastics */}
        <Modal visible={showModal === 1} transparent animationType="slide">
          <View className="h-screen justify-end bottom-10 -z-10">
            <View className="flex-row bg-white m-[20px] p-[20px] rounded-xl">

              {/* Icon | Thumbnail */}
              <Image source={require("../assets/icon-plastics.png")} resizeMode="contain" className="bg-[#f6e07d] w-[85px] h-[100px] rounded-lg"/>
              <View className="ml-[14px] flex-1">

                <View className="flex-row justify-between items-center">

                  {/* Title */}
                  <Text className="text-body font-bold">Plastics</Text>

                  {/* Close Button */}
                  <TouchableOpacity className="px-[10px]" activeOpacity={0.7} onPress={() => setShowModal(0)}>
                    <Text className="text-heading">⨯</Text>
                  </TouchableOpacity>
                </View>

                {/* Caption */}
                <Text className="text-caption mb-[5px] mr-[8px] text-gray-400">Includes types of waste that can be recycled</Text>

                {/* Learn more */}
                <TouchableOpacity onPress={() => {
                  setShowModal(0)
                  navigation.replace("Tips")
                }}>
                  <Text className="text-primary text-caption font-bold">Learn more</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal Popup: Tissue */}
        <Modal visible={showModal === 2} transparent animationType="slide">
          <View className="h-screen justify-end bottom-10 -z-10">
            <View className="flex-row bg-white m-[20px] p-[20px] rounded-xl">

              {/* Icon | Thumbnail */}
              <Image source={require("../assets/icon-tissues.png")} className="bg-[#f6e07d] w-[85px] h-[100px] rounded-lg"/>
              <View className="ml-[14px] flex-1">

                <View className="flex-row justify-between items-center">

                  {/* Title */}
                  <Text className="text-body font-bold">Tissues</Text>

                  {/* Close Button */}
                  <TouchableOpacity className="px-[10px]" activeOpacity={0.7} onPress={() => setShowModal(0)}>
                    <Text className="text-heading">⨯</Text>
                  </TouchableOpacity>
                </View>

                {/* Caption */}
                <Text className="text-caption mb-[5px] mr-[8px] text-gray-400">Includes types of waste that can be recycled</Text>
                
                {/* Learn more */}
                <TouchableOpacity activeOpacity={1.0} onPress={() => {
                  setShowModal(0)
                  // navigation.replace("Tips")
                }}>
                  <Text className="text-primary text-caption font-bold">Learn more</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </Camera>
    </View>
  )
}