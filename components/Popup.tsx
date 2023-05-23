import { Modal, Text, View } from "react-native";


export default function Popup({ title, caption, onPress }: any) {
  return (
    <View>
      <Modal visible animationType="slide">
        <View className="flex-row w-[300px] h-[150px]">
          <View className="bg-[#f6e07d] w-[85px] h-[100px] rounded-md" />
          <View>
            <Text>{title}</Text>
            <Text>{caption}</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}