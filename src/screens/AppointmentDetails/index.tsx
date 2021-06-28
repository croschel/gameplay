import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Share,
  Platform,
} from "react-native";
import ListHeader from "~/components/ListHeader";
import { BorderlessButton } from "react-native-gesture-handler";
import Header from "~/components/Header";
import Member, { MemberProps } from "~/components/Member";
import ListDivider from "~/components/ListDivider";
import ButtonIcon from "~/components/ButtonIcon";
import { Load } from "~/components/Load";
import { Fontisto } from "@expo/vector-icons";
import BannerPng from "~/assets/banner.png";

import { styles } from "./styles";
import { colors } from "~/global/styles/theme";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "~/components/Appointment";
import { api } from "~/services/api";
import { useState } from "react";
import { Alert } from "react-native";
import * as Linking from "expo-linking";

type NavigationProps = {
  appointmentSelected: AppointmentProps;
};

type ServerWidgetAtt = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

const AppointmentDetails: React.FC = () => {
  const route = useRoute();
  const { appointmentSelected } = route.params as NavigationProps;
  const { guild, description } = appointmentSelected;

  const [serverWidget, setServerWidget] = useState<ServerWidgetAtt>(
    {} as ServerWidgetAtt
  );
  const [loading, setLoading] = useState(true);

  const fetchGuildInfo = async () => {
    try {
      const response = await api.get(`/guilds/${guild.id}/widget.json`);
      console.log(response.data);
      setServerWidget(response.data);
    } catch {
      Alert.alert(
        "Verifique as configurações do servidor. Será que o Widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShareInvitation = () => {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guild.name}`
        : serverWidget.instant_invite;
    if (serverWidget.instant_invite !== null) {
      Share.share({
        message,
        url: serverWidget.instant_invite,
      });
    } else {
      Alert.alert("Você precisa autorizar convites em seu server!");
    }
  };

  const openServer = () => {
    Linking.openURL(serverWidget.instant_invite);
  };

  useEffect(() => {
    fetchGuildInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        actions={
          guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guild.name}</Text>
          <Text style={styles.subtitle}>{description}</Text>
        </View>
      </ImageBackground>
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`total ${serverWidget.members.length}`}
          />
          <FlatList
            data={serverWidget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 16 }}
            style={styles.members}
          />
        </>
      )}
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" onPress={openServer} />
      </View>
    </View>
  );
};

export default AppointmentDetails;
