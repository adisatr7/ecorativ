import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./Home"
import Activity from "./Activity"
import Scan from "./Scan"
import Feed from "./Feed"
import Profile from "./Profile"


const Tab = createBottomTabNavigator()

export default function Main() {
  return (
    <Tab.Navigator initialRouteName="Home" backBehavior="initialRoute" screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}