import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import PlayerSvg from "~/assets/player.svg";
import CalendarSvg from "~/assets/calendar.svg";
import { colors } from "~/global/styles/theme";
import { categories } from "~/utils/categories";
import GuildIcon from "../GuildIcon";
import { styles } from "./styles";
import { GuildProps } from "../Guild";

type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

const Appointment = ({ data, ...rest }: Props) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[colors.secondary50, colors.secondary70]}
        >
          <GuildIcon />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? colors.primary : colors.on} />
              <Text
                style={[
                  styles.player,
                  { color: owner ? colors.primary : colors.on },
                ]}
              >
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

export default Appointment;
