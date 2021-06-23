import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

const GuildIcon = () => {
  const uri =
    "https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-discord.png?w=585&scale=down";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};

export default GuildIcon;
