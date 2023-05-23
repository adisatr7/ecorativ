import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Main from "./screens/Main"
import Login from "./screens/Login";
import Register from "./screens/Register";
import Cam from "./screens/Cam";
import RecyclingTips from "./screens/RecyclingTips";
import Plastics from "./screens/Plastics";


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Camera" component={Cam}/>
        <Stack.Screen name="Tips" component={RecyclingTips}/>
        <Stack.Screen name="Plastics" component={Plastics}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

