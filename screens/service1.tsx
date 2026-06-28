import { globalStyles } from "@/styles/global";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ServiceOne() {
  return (
    <LinearGradient
      colors={["#1253AA", "#05243E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={globalStyles.container}
    >
      <View>
        <Image source={require("@/assets/images/serviceone.png")} />
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
            width: 230,
            fontFamily: "Poppins",
            fontWeight: "medium",
            alignSelf: "center",
          }}
        >
          Plan your tasks to do, that way you’ll stay organized and you won’t
          skip any
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
