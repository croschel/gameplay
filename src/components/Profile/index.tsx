import React from "react";
import { View, Text } from "react-native";
import Avatar from "~/components/Avatar";
import { styles } from "./styles";

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage="http://github.com/croschel.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Caique</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};

export default Profile;
