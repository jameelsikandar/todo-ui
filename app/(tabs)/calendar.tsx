import { Text, View } from "react-native";

export default function Calendar() {
  return (
    <View style={{ flex: 1, backgroundColor: "#05243E", padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>
        Good Morning! Calendar 👋
      </Text>
      <Text style={{ color: "#aaa", marginTop: 10 }}>
        Lets make today productive
      </Text>
    </View>
  );
}
