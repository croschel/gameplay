import { Platform, StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: fonts.title700,
    fontSize: 20,
    color: colors.heading,
    padding: 24,
  },
});
