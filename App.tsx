import { QueryProvider } from "@/lib/tanstack-query";
import { Router } from "@/routes/router";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <QueryProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>

      <StatusBar style="auto" translucent backgroundColor="transparent" />
    </QueryProvider>
  );
}
