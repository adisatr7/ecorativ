import { useState } from "react"
import { StatusBar, TouchableOpacity } from "react-native"
import { Image, Text, TextInput, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"
import Entry from "../components/Entry"
import Checkbox from "../components/Checkbox"
import WideButton from "../components/WideButton"


type RegisterProps = {
  navigation: any
}


export default function Register({ navigation }: RegisterProps) {
  const [statusBarHeight, setStatusBarHeight] = useState(StatusBar.currentHeight)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRememberMe, setIsRememberMe] = useState(false)

  return (
    <View className={`w-full h-full items-center bg-white mt-[${statusBarHeight}px]`}>
      <StatusBar backgroundColor="black" translucent={true} />
      <KeyboardAwareScrollView>

        {/* Header Illustration */}
        <View className="w-screen h-[25%] flex-col-reverse">
          <Image source={require("../assets/register-bg.png")} resizeMode="contain" resizeMethod="resize" className="h-full w-full bottom-0"/>
        </View >

        {/* Main container */}
        <View className="w-screen h-screen px-[24px]">

          {/* Login header label */}
          <Text className="text-heading font-bold mb-[18px]">Register</Text>

          {/* Forms */}
          <Entry label="Full name" placeholder="Enter your full name" onChange={(value: string) => setEmail(value)}/>
          <Entry label="Email" placeholder="Enter your email" onChange={(value: string) => setEmail(value)}/>
          <Entry label="Phone" placeholder="Enter your phone number" onChange={(value: string) => setEmail(value)}/>
          <Entry label="Password" placeholder="Enter your password" isPassword onChange={(value: string) => setPassword(value)}/>

          {/* Spacer */}
          <View className="mb-[36px]"/>
          <WideButton label="Sign Up" onPress={() => console.log("Login button pressed")}/>

          {/* Footer */}
          <View className="flex-row justify-center mt-[24px]">
            <Text className="text-caption">Already have an account? </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Login")} >
              <Text className="text-caption font-bold text-primary">Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}