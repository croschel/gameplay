import { StyleSheet, Platform } from "react-native";
import { colors } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? getStatusBarHeight() + 26 : 26,
    marginBottom: 42,
  },
});
