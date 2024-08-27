import { tw } from "@/lib/twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppRoutes } from "./app-routes";
import { AuthRoutes } from "./auth-routes";

export function Router() {
  const isUserAuthenticaded = true;

  return (
    <SafeAreaView style={tw("flex-1")}>
      {isUserAuthenticaded ? <AppRoutes /> : <AuthRoutes />}
    </SafeAreaView>
  );
}
