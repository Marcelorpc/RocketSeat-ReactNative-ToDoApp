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
    color: "#F2F2F2",
  },
  checkboxTextCompleted: {
    flex: 1,
    color: "#808080",
    textDecorationLine: "line-through"
  },
  button: {
    marginLeft: 8,
    alignItems: "center",
  },
  trashIcon: {
    color: "#E25858"
  }
})