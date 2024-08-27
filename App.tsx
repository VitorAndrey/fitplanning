import { QueryProvider } from "@/lib/tanstack-query";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "@/routes/app-routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <QueryProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>

      <StatusBar style="auto" />
    </QueryProvider>
  );
}
