import { useState } from "react"
import { StatusBar, TouchableOpacity } from "react-native"
import { Image, Text, TextInput, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"
import Entry from "../components/Entry"
import Checkbox from "../components/Checkbox"
import WideButton from "../components/WideButton"


type LoginProps = {
  navigation: any
}

export default function Login({ navigation }: LoginProps) {
  const [statusBarHeight, setStatusBarHeight] = useState(StatusBar.currentHeight)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRememberMe, setIsRememberMe] = useState(false)

  return (
    <View className={`w-full h-full items-center bg-white mt-[${statusBarHeight}px]`}>
      <StatusBar backgroundColor="black" translucent={true} />
      <KeyboardAwareScrollView>

        {/* Header Illustration */}
        <View className="w-screen h-[40%] flex-col-reverse">
          <Image source={require("../assets/login-bg.png")} resizeMode="contain" resizeMethod="resize" className="h-[150%] w-full bottom-8"/>
        </View>

        {/* Main container */}
        <View className="w-screen h-screen px-[24px]">

          {/* Login header label */}
          <Text className="text-heading font-bold mb-[18px]">Login</Text>

          {/* Forms */}
          <Entry label="Email" placeholder="Enter your email" onChange={(value: string) => setEmail(value)}/>
          <Entry label="Password" placeholder="Enter your password" isPassword onChange={(value: string) => setPassword(value)}/>

          {/* "Remember me" checkbox */}
          <View className="flex-row justify-between mb-[42px]">
            <Checkbox label="Remember me" onChange={(status) => setIsRememberMe(status)}/>
            <Text className="text-primary">Forgot password?</Text>
          </View>

          {/* Login button */}
          <WideButton label="Login" onPress={() => navigation.replace("Main")}/>

          {/* Footer */}
          <View className="flex-row justify-center mt-[24px]">
            <Text className="text-caption">Don't have an account? </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Register")}>
              <Text className="text-caption font-bold text-primary">Sign up</Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}