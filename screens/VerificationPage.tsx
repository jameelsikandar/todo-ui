import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/styles/global";
import { BlurView } from "expo-blur";

export default function VerificationPage() {
  return (
    <LinearGradient
      colors={["#1253AA", "#05243E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/* verify account text  */}
          <View style={{ marginBottom: 30 }}>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 30,
                color: colors.text,
              }}
            >
              Verify account
            </Text>
          </View>

          {/* card  */}

          <BlurView
            intensity={25} // Adjusts the blur strength (0 - 100)
            tint="light" // Gives it that soft white glass look over the blue
            style={styles.card}
          >
            <Text
              style={{
                fontFamily: "DarumadropOne",
                fontSize: 36,
                color: colors.text,
                textAlign: "center",
              }}
            >
              DO IT
            </Text>

            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                color: colors.text,
              }}
            >
              By verifying your account, you data will be secured and be default
              you are accepting our terms and policies
            </Text>

            <View style={{ gap: 23 }}>
              <TextInput
                placeholder="Verification code"
                placeholderTextColor="rgba(0,0,0,0.44)"
                style={{
                  height: 52,
                  width: 274,
                  backgroundColor: colors.text,
                  textAlign: "center",
                  fontSize: 19,
                  borderRadius: 10,
                }}
              />

              <TouchableOpacity
                style={{
                  height: 52,
                  width: 274,
                  backgroundColor: "#0EA5E9",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}
                >
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    width: 359,
    height: 468,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingRight: 42,
    paddingLeft: 42,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
});
