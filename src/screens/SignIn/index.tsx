import React from "react";
import { View, Image, Text, Alert } from "react-native";
import ButtonIcon from "~/components/ButtonIcon";
import IllustrationImg from "~/assets/illustration.png";
import DiscordImg from "~/assets/discord.png";

import { styles } from "./styles";

import { useAuth } from "~/hooks/auth";

const SignIn: React.FC = () => {
  const { user, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={IllustrationImg}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize suas {`\n`}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          icon={DiscordImg}
          title="Entrar com Discord"
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
};

export default SignIn;
