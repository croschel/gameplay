import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

const GuildIcon = ({ guildId, iconId }: Props) => {
  const defaultUri =
    "https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-discord.png?w=585&scale=down";

  const customUri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  return (
    <Image
      source={{ uri: iconId ? customUri : defaultUri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
};

export default GuildIcon;
