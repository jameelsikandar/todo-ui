import { Text, View, Image, StyleSheet } from "react-native";
import { colors, globalStyles } from "@/styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Services() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/service-one");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <LinearGradient
      colors={["#1253AA", "#05243E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={{ gap: 28, alignItems: "center" }}>
        <Image source={require("../assets/images/Checkmark.png")} />
        <Text style={globalStyles.title}>DO IT</Text>
      </View>

      <Text style={{ fontSize: 20, fontWeight: "medium", color: colors.text }}>
        v 1.0.0
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 240,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
