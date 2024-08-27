import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Login } from "@/screens/auth/@exports";

type AuthRoutes = {
  Welcome: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Stack.Navigator id="auth-navigator" initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
