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
  hasCheckedBox?: boolean;
};

const Category = ({
  title,
  icon: Icon,
  checked = false,
  hasCheckedBox = false,
  ...rest
}: CategoryProps) => {
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[colors.secondary50, colors.secondary70]}
      >
        <LinearGradient
          colors={[
            checked ? colors.secondary85 : colors.secondary50,
            colors.secondary40,
          ]}
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
        >
          {hasCheckedBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};

export default Category;
