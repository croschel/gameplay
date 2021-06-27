import React from "react";
import { View, TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

const SmallInput = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput style={styles.container} {...rest} keyboardType="numeric" />
  );
};

export default SmallInput;
