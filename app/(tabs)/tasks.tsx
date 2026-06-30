import { Text, View } from "react-native";

export default function Tasks() {
  return (
    <View style={{ flex: 1, backgroundColor: "#05243E", padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>
        Good Morning! DO IT👋
      </Text>
      <Text style={{ color: "#aaa", marginTop: 10 }}>
        Lets make today productive
      </Text>
    </View>
  );
}
