import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "~/screens/Home";
import SignIn from "~/screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default AuthRoutes;
