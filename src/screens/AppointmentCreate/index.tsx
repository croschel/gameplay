import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import uuid from "react-native-uuid";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import Button from "~/components/Button";
import Header from "~/components/Header";
import TextArea from "~/components/TextArea";
import CategorySelect from "~/components/CategorySelect";
import SmallInput from "~/components/SmallInput";
import ModalView from "~/components/ModalView";
import Guilds from "../Guilds";
import GuildIcon from "~/components/GuildIcon";
import { styles } from "./styles";
import { colors } from "~/global/styles/theme";
import { GuildProps } from "~/components/Guild";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "~/configs/database";
import { useNavigation } from "@react-navigation/core";
import { useEffect } from "react";

const AppointmentCreate: React.FC = () => {
  const navigation = useNavigation();

  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  const [formChecked, setFormChecked] = useState(false);

  const checkForm = () => {
    if (
      day !== "" &&
      month !== "" &&
      hour !== "" &&
      minute !== "" &&
      description !== ""
    ) {
      setFormChecked(true);
    }
  };

  useEffect(() => {
    checkForm();
  }, [day, month, hour, minute, description]);

  const handleOpenGuilds = () => {
    setOpenGuildsModal(true);
  };

  const handleCloseGuilds = () => {
    setOpenGuildsModal(false);
  };

  const handleGuildSelect = (guildSelected: GuildProps) => {
    setGuild(guildSelected);
    handleCloseGuilds();
  };

  const handleCategorySelect = (categoryId: string) => {
    setCategory(categoryId);
  };

  const handleSave = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}`,
      description,
    };
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];
    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header title="Agendar partida" />
      <ScrollView style={styles.container}>
        <Text
          style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 },
          ]}
        >
          Categoria
        </Text>
        <CategorySelect
          hasCheckedBox
          setCategory={handleCategorySelect}
          categorySelected={category}
        />
        <View style={styles.form}>
          <RectButton onPress={handleOpenGuilds}>
            <View style={styles.select}>
              {guild.icon ? (
                <GuildIcon guildId={guild.id} iconId={guild.icon} />
              ) : (
                <View style={styles.image} />
              )}

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {guild.name ? guild.name : "Selecione um servidor"}
                </Text>
              </View>
              <Feather name="chevron-right" color={colors.heading} size={18} />
            </View>
          </RectButton>
          <View style={styles.field}>
            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Dia e mês
              </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} onChangeText={setDay} />
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2} onChangeText={setMonth} />
              </View>
            </View>
            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Hora e minuto
              </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} onChangeText={setHour} />
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2} onChangeText={setMinute} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
          </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
            onChangeText={setDescription}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          disabled={formChecked ? false : true}
          title="Agendar"
          onPress={handleSave}
        />
      </View>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};

export default AppointmentCreate;
