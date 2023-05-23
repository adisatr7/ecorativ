import { Image, Text, TouchableOpacity } from "react-native"


type ProfileButtonProps = {
  label: string
}

export default function ProfileButton({ label }: ProfileButtonProps) {
  return (
    <TouchableOpacity className="flex-row justify-between items-center" activeOpacity={0.8} >
      <Text className="text-caption text-gray-400 my-[20px] ml-[8px]">{label}</Text>
      <Image source={require("../assets/icon-chevron-right.png")} className="w-[28px] h-[28px]"/>
    </TouchableOpacity>
  )
}