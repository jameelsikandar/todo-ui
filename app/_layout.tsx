import { Stack } from "expo-router";
import { useFonts } from "expo-font";

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
        headerTitle: "Todo app",
        headerShown: false,
      }}
    />
  );
}
