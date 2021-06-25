import { StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 15,
  },
  check: {
    width: 12,
    height: 12,
    backgroundColor: colors.secondary100,
    position: "absolute",
    top: 7,
    right: 7,
    borderBottomColor: colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 7,
    right: 7,
    borderRadius: 3,
    borderWidth: 1,
  },
});
