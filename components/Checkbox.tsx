import { useState } from "react"
import { View, Text, TextInput, Pressable } from "react-native"


type CheckboxProps = {
  label: string,
  onChange: (status: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {

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
          mr-[12px] 
          items-center 
          justify-center"
        onPress={toggleHandler}>
        {isChecked && <View className="w-[10px] h-[10px] bg-primary rounded-[3px]"></View>}
      </Pressable>
      <Text onPress={toggleHandler} >{label}</Text>
    </View>
  )
}

export default Checkbox