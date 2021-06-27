import React from "react";
import { View, Text } from "react-native";
import Avatar from "~/components/Avatar";
import { useAuth } from "~/hooks/auth";
import { styles } from "./styles";

const Profile: React.FC = () => {
  const { user } = useAuth();
  // console.log(user);
  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};

export default Profile;
