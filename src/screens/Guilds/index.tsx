import React from "react";
import { View, FlatList, Text } from "react-native";
import Guild, { GuildProps } from "~/components/Guild";
import ListDivider from "~/components/ListDivider";
import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

const Guilds = ({ handleGuildSelected }: Props) => {
  const guilds = [
    {
      id: "1",
      name: "Lendarios",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "Outros",
      icon: null,
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guild}
      />
    </View>
  );
};

export default Guilds;
