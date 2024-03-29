import { StyleSheet } from "react-native";
import { colors, fonts } from "~/global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginTop: -40,
  },
  image: {
    width: "100%",
    height: 360,
  },
  title: {
    color: colors.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    fontFamily: fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    color: colors.heading,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 64,
    fontFamily: fonts.title500,
    lineHeight: 25,
  },
});
