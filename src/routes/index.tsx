import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import Background from "~/components/Background";
import SignIn from "~/screens/SignIn";
import { AuthProvider, useAuth } from "~/hooks/auth";

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <Background>
      <NavigationContainer>
        {user.id ? <AuthRoutes /> : <SignIn />}
      </NavigationContainer>
    </Background>
  );
};

export default Routes;
