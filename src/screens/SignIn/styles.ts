import { StyleSheet } from "react-native";
import { colors } from "../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  content: {
    marginTop: -40,
  },
  image: {
    width: "100%",
    height: 360,
  },
  title: {
    color: colors.headind,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: colors.headind,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 64,
  },
});
