import React from "react";
import { Text, ImageURISource } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

type ButtonProps = {
  icon?: ImageURISource;
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <RectButton style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default Button;
