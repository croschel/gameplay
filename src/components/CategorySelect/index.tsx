import React from "react";
import { ScrollView } from "react-native";
import Category from "../Category";
import { categories } from "~/utils/categories";
import { styles } from "./styles";

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckedBox?: boolean;
};

const CategorySelect = ({
  categorySelected,
  setCategory,
  hasCheckedBox = false,
}: CategorySelectProps) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckedBox={hasCheckedBox}
        />
      ))}
    </ScrollView>
  );
};

export default CategorySelect;
