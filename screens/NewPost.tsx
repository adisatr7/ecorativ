import { useState } from "react"
import { Alert, Image, SafeAreaView, StatusBar, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"
import * as ImagePicker from "expo-image-picker"
import { posts, user } from "../data"


export default function NewPost({ navigation }: any) {
  const [caption, setCaption] = useState("")
  const [imageUri, setImageUri] = useState("")

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) 
      setImageUri(result.assets[0].uri)
  }

  const renderAddImageButton = () => (
    <View className="w-screen h-[50px]">
      <View className={`bg-gray-300 border border-gray-400 flex-1 justify-center`}>
        <TouchableOpacity onPress={pickImage}>
          <Text className="text-body text-gray-500 text-center">Attach a picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const renderSelectedImage = () => (
    <View className="flex-1">
      <Image className="flex-1" resizeMode="cover" source={{ uri: imageUri }}/>
      <View className={`bg-red-700 justify-center`}>
        <TouchableOpacity onPress={() => setImageUri("")}>
          <Text className="text-body text-white text-center my-[12px]">Remove attachment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const submitHandler = () => {

    if(!imageUri) {
      Alert.alert("Hold on", "Please attach a picture in your post")
      return
    }

    const newPost = {
      "userName": user.userName,
      "userAddress": user.userAddress,
      "postCaption": caption,
      "postImageUri": imageUri,
      "profilePictureUri": user.profilePictureUri,
      "likes": 8,
      "comments": 0,
      "shares": 0
    }

    posts.push(newPost)
    navigation.navigate("Feed")
  }

  return (
    <SafeAreaView className="flex-1">
      <View className={`w-screen h-[${StatusBar.currentHeight}px]`}/>
      <View className="flex-1">

        {/* Header Container */}
        <View className="flex-row justify-between items-center px-[24px] mt-[42px] mb-[14px]">

          {/* Back button */}
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
            <Image className="w-[18px] h-[18px]" source={require("../assets/icon-chevron-left-black.png")}/>
          </TouchableOpacity>

          {/* Header label */}
          <Text className="text-gray-500 text-subheading font-bold text-center ">New Post</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={submitHandler}>
            <Image source={require("../assets/icon-send.png")} className="w-[24px] h-[24px]"/>
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View className="justify-between flex-1">
          <KeyboardAwareScrollView className="mx-[18px]">
            <TextInput 
              placeholder="Tell the world what you've done today"
              className="text-body"
            />
          </KeyboardAwareScrollView>
          { imageUri? renderSelectedImage() : renderAddImageButton() }
          
        </View>
      </View>
    </SafeAreaView>
  )
}