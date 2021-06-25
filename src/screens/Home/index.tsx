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

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendário",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às  20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendário",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às  20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

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
        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList
            style={styles.matches}
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleAppointmentDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
