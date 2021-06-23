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
    marginTop: Platform.OS === "ios" ? getStatusBarHeight() + 36 : 36,
    marginBottom: 42,
  },
});
