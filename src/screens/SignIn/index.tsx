import React from "react";
import { View, Image, Text } from "react-native";
import IllustrationImg from "../assets/illustration.png";
import ButtonIcon from "../components/ButtonIcon";
import { styles } from "./styles";

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={IllustrationImg}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon />
      </View>
    </View>
  );
};

export default SignIn;
