import React from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { colors } from "~/global/styles/theme";

type AvatarProps = {
  urlImage: string;
};

const Avatar = ({ urlImage }: AvatarProps) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.secondary50, colors.secondary70]}
    >
      <Image style={styles.avatar} source={{ uri: urlImage }} />
    </LinearGradient>
  );
};

export default Avatar;
