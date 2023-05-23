import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useEffect } from "react"
import { View, Text } from "react-native"


export default function Scan({ navigation }: any) {
  useEffect(() => {
    navigation.replace("Camera")
    return () => {}
  }, [])
}