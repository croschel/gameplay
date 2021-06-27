import React from "react";
import { View, FlatList, Text } from "react-native";
import Guild, { GuildProps } from "~/components/Guild";
import ListDivider from "~/components/ListDivider";
import { guilds } from "~/mocks/guilds";
import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

const Guilds = ({ handleGuildSelected }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 32, paddingTop: 24 }}
        showsVerticalScrollIndicator={false}
        style={styles.guild}
      />
    </View>
  );
};

export default Guilds;
