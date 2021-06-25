import React from "react";
import { View } from "react-native";
import Header from "~/components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "~/global/styles/theme";

const AppointmentDetails: React.FC = () => {
  return (
    <View>
      <Header
        title="Detalhes"
        actions={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={colors.primary} />
          </BorderlessButton>
        }
      />
    </View>
  );
};

export default AppointmentDetails;
