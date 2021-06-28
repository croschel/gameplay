import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Text, ImageURISource, TouchableOpacity } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  icon?: ImageURISource;
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
