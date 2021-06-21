import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

const ButtonIcon: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>Entrar com Discord</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
