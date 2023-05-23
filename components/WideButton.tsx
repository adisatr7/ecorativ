import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"


type WideButtonProps = {
  label: string,
  onPress: () => void
}

export default function WideButton({ label, onPress }: WideButtonProps) {

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} className="w-full py-[12px] rounded-[10px] bg-primary">
      <Text className="text-center text-white text-body font-bold">{label}</Text>
    </TouchableOpacity>
  )
}