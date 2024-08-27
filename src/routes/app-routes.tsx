import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res) =>
        res.json(),
      ),
  });
  return (
    <>
      <Text>Home</Text>

      {isLoading ? (
        <Text>loading</Text>
      ) : (
        <Text>{data.time.updated.toString()}</Text>
      )}
    </>
  );
}

function About() {
  return <Text>About</Text>;
}
