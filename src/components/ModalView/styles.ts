import { StyleSheet } from "react-native";
import { colors, fonts } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.secondary30,
    alignSelf: "center",
    marginTop: 12,
  },
});
