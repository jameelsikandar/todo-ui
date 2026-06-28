import { globalStyles } from "@/styles/global";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ServiceTwo() {
  return (
    <LinearGradient
      colors={["#1253AA", "#05243E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={globalStyles.container}
    >
      <View>
        <Image source={require("@/assets/images/service2.png")} />
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            color: "#ffff",
            fontSize: 20,
            width: 250,
            fontFamily: "Poppins",
            fontWeight: "medium",
            alignSelf: "center",
          }}
        >
          Make a full schedule for the whole week and stay organized and
          productive all days
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flex: 1 }} />

        <View style={{ flex: 2, alignItems: "center" }}>
          <Image source={require("@/assets/images/slider.png")} />
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Image source={require("@/assets/images/next_button.png")} />
        </View>
      </View>
    </LinearGradient>
  );
}
