import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import Background from "~/components/Background";

const Routes: React.FC = () => {
  return (
    <Background>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Background>
  );
};

export default Routes;
