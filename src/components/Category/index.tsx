import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "~/global/styles/theme";
import { SvgProps } from "react-native-svg";

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

const Category = ({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryProps) => {
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[colors.secondary50, colors.secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
};

export default Category;
