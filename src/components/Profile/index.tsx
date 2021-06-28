import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Avatar from "~/components/Avatar";
import ModalBottom from "../ModalBottom";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "~/hooks/auth";
import { styles } from "./styles";

const Profile = () => {
  const { user, signOut } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleSignOutModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOutModal}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
      <ModalBottom
        visible={showModal}
        closeModal={closeModal}
        actionModal={signOut}
      />
    </View>
  );
};

export default Profile;
