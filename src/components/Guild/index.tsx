import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import GuildIcon from "../GuildIcon";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "~/global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

const Guild = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon iconId={data.icon} guildId={data.id} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>
      <Feather name="chevron-right" size={24} color={colors.heading} />
    </TouchableOpacity>
  );
};

export default Guild;
