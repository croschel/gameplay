import React, { useCallback, useState } from "react";
import { View, FlatList, Text } from "react-native";
import ButtonAdd from "~/components/ButtonAdd";
import Profile from "~/components/Profile";
import ListHeader from "~/components/ListHeader";
import CategorySelect from "~/components/CategorySelect";
import Appointment, { AppointmentProps } from "~/components/Appointment";
import { Load } from "~/components/Load";
import ListDivider from "~/components/ListDivider";
import { styles } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "~/configs/database";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentProps[]>();

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory(null) : setCategory(categoryId);
  };

  const handleAppointmentDetails = (appointmentSelected: AppointmentProps) => {
    navigation.navigate("AppointmentDetails", {
      appointmentSelected,
    });
  };

  const handleAppointmentCreate = () => {
    navigation.navigate("AppointmentCreate");
  };

  const loadAppointments = async () => {
    setLoading(true);
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const appointments: AppointmentProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointments(
        appointments.filter((appointment) => appointment.category === category)
      );
    } else {
      setAppointments(appointments);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={(categoryId) => handleCategorySelect(categoryId)}
        />
      </View>
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments?.length}`}
          />
          <FlatList
            style={styles.matches}
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 69 }}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </>
      )}
    </View>
  );
};

export default Home;
