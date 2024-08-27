import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, SignIn, SignUp } from "@/screens/auth/@exports";

type AuthRoutes = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Stack.Navigator id="auth-navigator" initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
