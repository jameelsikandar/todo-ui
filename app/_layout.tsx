import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    DarumadropOne: require("../assets/fonts/DarumadropOne-Regular.ttf"),
    Poppins: require("@/assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#05243E" },
      }}
    >
      <Stack.Screen name="index" options={{ animation: "fade" }} />
      <Stack.Screen name="service-one" />
      <Stack.Screen name="service-two" />
      <Stack.Screen name="service-three" />
      <Stack.Screen name="service-four" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="verification" />
    </Stack>
  );
}
