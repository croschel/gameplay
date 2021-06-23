import React, { useState } from "react";
import { View } from "react-native";
import ButtonAdd from "~/components/ButtonAdd";
import Profile from "~/components/Profile";
import CategorySelect from "~/components/CategorySelect";
import { styles } from "./styles";

const Home: React.FC = () => {
  const [category, setCategory] = useState("");
  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={(categoryId) => handleCategorySelect(categoryId)}
        />
      </View>
    </View>
  );
};

export default Home;
