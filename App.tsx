import { tw } from "@/utils/twrnc";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={tw("flex-1 items-center justify-center")}>
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
