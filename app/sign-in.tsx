import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

export default function SignInPage() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#1253AA", "#05243E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View>
        <Image
          source={require("@/assets/images/Checkmark.png")}
          height={83}
          width={83}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={styles.textstyle}>
          Welcome Back to{" "}
          <Text style={{ fontFamily: "DarumadropOne" }}>DO IT</Text>
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: colors.text,
            fontWeight: 500,
            fontFamily: "Poppins",
          }}
        >
          Have an other productive day !
        </Text>
      </View>
      {/* input fields ith foget pass and sign in btn  */}
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ gap: 56, width: "100%" }}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={22} color="black" />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="rgba(0,0,0,0.44)"
            ></TextInput>
          </View>
          {/* <View style={{ height: 35 }} /> */}
          <View style={styles.inputContainer}>
            <Entypo name="lock" size={22} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="rgba(0,0,0,0.44)"
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                color: "rgba(255, 255, 255, 0.8)",
                textDecorationLine: "underline",
              }}
            >
              forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* sign in btn  */}

        <TouchableOpacity
          style={styles.customButton}
          onPress={() => router.push("/home-screen")}
        >
          <Text style={{ fontWeight: 600, color: "#fff", fontSize: 18 }}>
            sign in
          </Text>
        </TouchableOpacity>

        {/* dont have an account  */}
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>{"Don't have an account? "}</Text>
          <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text
              style={{ color: "#17A2E8", fontWeight: "bold", fontSize: 16 }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.socialFooter}>
        <Text style={styles.socialText}>Sign In With: </Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-apple" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color="#4285F4" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 30,
    paddingBottom: 95,
  },
  textstyle: {
    fontSize: 25,
    color: colors.text,
    fontWeight: 500,
    fontFamily: "Poppins",
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Poppins",
    paddingVertical: 0,
    paddingHorizontal: 0,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  customButton: {
    width: "100%",
    height: 42,
    marginTop: 16,
    backgroundColor: "#17A2E8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 30,
  },
  signUpContainer: {
    flexDirection: "row",

    marginBottom: 80,
  },
  noAccountText: {
    color: colors.text,
    fontSize: 15,
  },
  socialFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    gap: 17,
    // marginBottom: 30,
  },
  socialText: {
    fontSize: 17,
    color: colors.text,
    textAlign: "left",
  },
  socialButton: {
    backgroundColor: "#fff",
    width: 50,
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
