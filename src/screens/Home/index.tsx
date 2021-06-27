import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import ButtonAdd from "~/components/ButtonAdd";
import Profile from "~/components/Profile";
import ListHeader from "~/components/ListHeader";
import CategorySelect from "~/components/CategorySelect";
import Appointment from "~/components/Appointment";
import ListDivider from "~/components/ListDivider";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { appointments } from "~/mocks/appointments";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  const handleAppointmentDetails = () => {
    navigation.navigate("AppointmentDetails");
  };

  const handleAppointmentCreate = () => {
    navigation.navigate("AppointmentCreate");
  };
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
      <ListHeader title="Partidas agendadas" subtitle="Total 6" />
      <FlatList
        style={styles.matches}
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointment data={item} onPress={handleAppointmentDetails} />
        )}
        contentContainerStyle={{ paddingBottom: 69 }}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </View>
  );
};

export default Home;
