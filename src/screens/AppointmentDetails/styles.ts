import { Platform, StyleSheet } from "react-native";
import { colors, fonts } from "~/global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 234,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.title700,
    color: colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: fonts.text400,
    color: colors.heading,
    lineHeight: 21,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    marginTop: 8,
    marginBottom: Platform.OS === "ios" ? getBottomSpace() : 8,
  },
});
