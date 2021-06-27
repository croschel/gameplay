import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import Background from "~/components/Background";

import { AuthProvider } from "~/hooks/auth";

const Routes: React.FC = () => {
  return (
    <Background>
      <NavigationContainer>
        <AuthProvider>
          <AuthRoutes />
        </AuthProvider>
      </NavigationContainer>
    </Background>
  );
};

export default Routes;
