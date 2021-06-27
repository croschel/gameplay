import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import Guild, { GuildProps } from "~/components/Guild";
import ListDivider from "~/components/ListDivider";
import { Load } from "~/components/Load";
import { api } from "~/services/api";
import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

const Guilds = ({ handleGuildSelected }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGuilds = async () => {
    const response = await api.get("/users/@me/guilds");
    setGuilds(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
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
      )}
    </View>
  );
};

export default Guilds;
