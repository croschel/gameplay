import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
