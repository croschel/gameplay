import React from "react";
import { ReactNode } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "~/global/styles/theme";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  title: string;
  actions?: ReactNode;
};

const Header = ({ title, actions }: HeaderProps) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.secondary100, colors.secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={colors.heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {actions ? <View>{actions}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
};

export default Header;
