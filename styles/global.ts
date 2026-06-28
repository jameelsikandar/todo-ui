import { StyleSheet } from "react-native";

export const colors = {
  background: "#1a1a2e",
  header: "#242444",
  surface: "#2a2a4a",
  primary: "#4fc3f7",
  text: "#ffffff",
  textSecondary: "#a0a0b0",
  alert: "#ff5252",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 65,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    fontFamily: "DarumadropOne",
    fontSize: 36,
    fontWeight: "regular",
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "medium",
    color: colors.text,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
