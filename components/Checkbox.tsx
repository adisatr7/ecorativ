import { useState } from "react"
import { View, Text, TextInput, Pressable, Image } from "react-native"


type CheckboxProps = {
  label: string,
  onChange: (status: boolean) => void
}

export default function Checkbox({ label, onChange }: CheckboxProps) {

  const [isChecked, setIsChecked] = useState(false)

  const toggleHandler = () => {
    setIsChecked(!isChecked)
    onChange(isChecked)
  }

  return (
    <View className="flex-row flex">
      <Pressable 
        className="
          w-[20px] 
          h-[20px] 
          border-2 
          border-gray-400 
          rounded-md 
          mr-[10px] 
          items-center 
          justify-center"
        onPress={toggleHandler}>
        {isChecked && <Image className="w-fit h-fit" source={require("../assets/icon-check.png")}/>}
      </Pressable>
      <Text onPress={toggleHandler} >{label}</Text>
    </View>
  )
}