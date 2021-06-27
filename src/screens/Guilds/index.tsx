import React from "react";
import { View, FlatList } from "react-native";
import Guild from "~/components/Guild";
import ListDivider from "~/components/ListDivider";
import { styles } from "./styles";

const Guilds: React.FC = () => {
  const guilds = [
    {
      id: "1",
      name: "Lendarios",
      icon: null,
      owner: true,
    },
  ];
  return (
    <View>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Guild data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guild}
      />
    </View>
  );
};

export default Guilds;
