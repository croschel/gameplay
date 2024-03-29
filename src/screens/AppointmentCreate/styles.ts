import { StyleSheet } from "react-native";
import { colors, fonts } from "~/global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.title700,
    color: colors.heading,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  select: {
    width: "100%",
    height: 68,
    flexDirection: "row",
    borderColor: colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 25,
    overflow: "hidden",
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: colors.secondary50,
    borderColor: colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: fonts.text500,
    color: colors.highlight,
  },
  caracteresLimit: {
    fontFamily: fonts.text400,
    fontSize: 13,
    color: colors.highlight,
  },
  footer: {
    marginVertical: 10,
  },
});
