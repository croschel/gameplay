import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import ListHeader from "~/components/ListHeader";
import { BorderlessButton } from "react-native-gesture-handler";
import Header from "~/components/Header";
import Member from "~/components/Member";
import ListDivider from "~/components/ListDivider";
import ButtonIcon from "~/components/ButtonIcon";

import { Fontisto } from "@expo/vector-icons";

import BannerPng from "~/assets/banner.png";

import { styles } from "./styles";
import { colors } from "~/global/styles/theme";

const AppointmentDetails: React.FC = () => {
  const members = [
    {
      id: "1",
      username: "Caique",
      avatar: "https://github.com/croschel.png",
      status: "online",
    },
    {
      id: "2",
      username: "Caique",
      avatar: "http://github.com/croschel.png",
      status: "offline",
    },
  ];
  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        actions={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" onPress={() => {}} />
      </View>
    </View>
  );
};

export default AppointmentDetails;
