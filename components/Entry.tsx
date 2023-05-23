import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"


type EntryProps = {
  label: string,
  placeholder: string,
  type?: any,
  isPassword?: boolean,
  onChange: (value: any) => void
}

export default function Entry({ label, placeholder, type="default", isPassword=false, onChange }: EntryProps) {

  const [isHidden, setIsHidden] = useState(isPassword)

  return (
    <View>
      <Text className="text-body mb-[8px]">{label}</Text>
      <View className="border-2 border-gray-400 rounded-md px-[18px] py-[8px] mb-[12px] flex-row justify-between">
        <TextInput 
          placeholder={placeholder}
          onChange={onChange}
          keyboardType={type}
          secureTextEntry={isHidden}
          className="flex-auto h-full"
        />

        {/* Show password button */}
        { !isPassword? null : (
          <TouchableOpacity activeOpacity={0.7} className="w-auto items-center justify-center" onPress={() => setIsHidden(!isHidden)}>
            <Image source={isHidden? require("../assets/icon-eye-close.png") : require("../assets/icon-eye-open.png")}/>
          </TouchableOpacity>
        )}

      </View>
    </View>
  )
}