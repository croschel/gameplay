import { StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: "auto",
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  title: {
    fontFamily: fonts.title500,
    fontSize: 24,
    color: colors.heading,
    textAlign: "center",
    paddingVertical: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 36,
    marginBottom: 24,
  },
});
