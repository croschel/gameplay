import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "~/global/styles/theme";

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.secondary80, colors.secondary100]}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
