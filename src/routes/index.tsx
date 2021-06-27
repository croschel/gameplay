import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import Background from "~/components/Background";
import SignIn from "~/screens/SignIn";
import { AuthProvider, useAuth } from "~/hooks/auth";

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <Background>
      <NavigationContainer>
        {user.id ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
    </Background>
  );
};

export default Routes;
