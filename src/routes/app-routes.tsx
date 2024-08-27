import { Home, About } from "@/screens/app/@exports";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

type AppRoutes = {
  Home: undefined;
  About: undefined;
};

const BottomTab = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <BottomTab.Navigator
      id="app-navigator"
      initialRouteName="Home"
      backBehavior="history"
      detachInactiveScreens={false}
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Text>Home</Text>,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: () => <Text>About</Text>,
        }}
      />
    </BottomTab.Navigator>
  );
}
