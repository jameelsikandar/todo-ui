import { StyleSheet, Text, View, Modal, Image } from "react-native";

export function SuccessModal() {
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true}>
        {/* Semi-transparent background overlay */}
        <View style={styles.overlay}>
          {/* The White Card Container */}
          <View style={styles.card}>
            {/* Green Checkmark Circle */}
            <View style={styles.circleContainer}>
              <Image source={require("@/assets/images/CheckmarkGreen.png")} />
            </View>

            {/* Content Text */}
            <Text style={styles.titleText}>
              Your account has been created successfully
            </Text>

            <Text style={styles.subText}>
              You are going to receive a verification code in your email
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export function VerifiedMailPopUp() {
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true}>
        {/* Semi-transparent background overlay */}
        <View style={styles.overlay}>
          {/* The White Card Container */}
          <View style={styles.card}>
            {/* Green Checkmark Circle */}
            <View style={styles.circleContainer}>
              <Image source={require("@/assets/images/CheckmarkGreen.png")} />
            </View>

            {/* Content Text */}
            <Text style={styles.titleText}>
              example2023@gmail.com is verified
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  circleContainer: {
    marginBottom: 24,
  },
  titleText: {
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  subText: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 5,
    marginBottom: 16,
  },
});
