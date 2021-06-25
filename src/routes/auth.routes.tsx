import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "~/screens/Home";
import SignIn from "~/screens/SignIn";
import { colors } from "~/global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AuthRoutes;
