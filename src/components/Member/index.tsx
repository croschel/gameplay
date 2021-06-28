import React from "react";
import { View, Text } from "react-native";
import { colors } from "~/global/styles/theme";
import Avatar from "../Avatar";

import { styles } from "./styles";

export type MemberProps = {
  id: string;
  username: string;
  avatar: string;
  status: string;
  avatar_url: string;
};

type Props = {
  data: MemberProps;
};

const Member = ({ data }: Props) => {
  const isOnline = data.status === "online";
  const defaultUri =
    "https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-discord.png?w=585&scale=down";

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url ? data.avatar_url : defaultUri} />
      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? colors.on : colors.primary,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Member;
