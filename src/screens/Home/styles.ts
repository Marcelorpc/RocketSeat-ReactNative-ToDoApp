import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 173,
    padding: 24,
    backgroundColor: "#0D0D0D",
  },
  logo: {
    alignSelf: "center",
    marginTop: 40
  },
  form: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 4,
    transform: [{translateY: -30}]
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: "#262626",
    borderRadius: 6,
    color: "#F2F2F2",
    fontSize: 16
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F"
  },
  buttonText: {
    color: "#F2F2F2",
    fontSize: 16,
    fontWeight: '700',
    borderColor: "#fff"
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  }
})