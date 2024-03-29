import { StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    color: colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: fonts.text500,
  },
});
