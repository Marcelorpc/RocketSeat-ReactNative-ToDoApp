import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksView: {
    minHeight: 64,
    padding: 12,
    backgroundColor: "#262626",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  checkbox: {
    justifyContent: "center",
    padding: 0,
    backgroundColor: "transparent",
  },
  checkboxText: {
    flex: 1,
    color: "#fff",
  },
  button: {
    marginLeft: 8,
    width: 20,
    backgroundColor: "#333333",
    alignItems: "center",
    borderRadius: 50
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 22,
    color: "red"
  }
})