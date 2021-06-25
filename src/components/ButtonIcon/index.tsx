import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageURISource,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import DiscordImg from "~/assets/discord.png";
import { styles } from "./styles";

type ButtonIconProps = {
  icon?: ImageURISource;
  title: string;
  onPress: () => void;
};

const ButtonIcon = ({ icon = DiscordImg, title, onPress }: ButtonIconProps) => {
  return (
    <RectButton style={styles.container} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default ButtonIcon;
