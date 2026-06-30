import { colors } from "@/styles/global";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Wellcome to HomeScreen of DO IT!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  heading: {
    fontSize: 20,
    fontFamily: "DarumadropOne",
    color: colors.text,
  },
});
