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

export default function SignUpPage() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#1253AA", "#05243E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* check logo  */}
      <View>
        <Image
          source={require("@/assets/images/Checkmark.png")}
          height={83}
          width={83}
        />
      </View>

      {/* wellcome text  */}
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
          create an account and Join us now!
        </Text>
      </View>

      {/* input fields ith foget pass and sign in btn  */}
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ gap: 40, width: "100%" }}>
          {/* full name input field  */}

          <View style={styles.inputContainer}>
            <Ionicons name="person" size={22} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="rgba(0,0,0,0.44)"
            ></TextInput>
          </View>

          {/* email input field  */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={22} color="black" />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="rgba(0,0,0,0.44)"
            ></TextInput>
          </View>

          {/* password input field  */}
          <View style={styles.inputContainer}>
            <Entypo name="lock" size={22} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="rgba(0,0,0,0.44)"
            ></TextInput>
          </View>

          {/* sign up btn  */}

          <TouchableOpacity style={styles.customButton}>
            <Text style={{ fontWeight: 600, color: "#fff", fontSize: 18 }}>
              sign up
            </Text>
          </TouchableOpacity>
        </View>

        {/* already have an have an account  */}
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>
            {"Already have an account? "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/sign-in")}>
            <Text
              style={{ color: "#17A2E8", fontWeight: "bold", fontSize: 16 }}
            >
              sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* footer incons  */}
      <View style={styles.socialFooter}>
        <Text style={styles.socialText}>Sign Up With: </Text>

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
    gap: 35,
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
