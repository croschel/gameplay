import React, { ReactNode } from "react";
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Background from "../Background";
import ColorButton from "../ColorButton";
import NoColorButton from "../NoColorButton";
import { styles } from "./styles";

type Props = ModalProps & {
  closeModal: () => void;
  actionModal: () => void;
};

const ModalBottom = ({ actionModal, closeModal, ...rest }: Props) => {
  return (
    <Modal transparent animationType="none" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <Text style={styles.title}>Deseja sair do GamePlay?</Text>
              <View style={styles.buttonContainer}>
                <NoColorButton title="Não" onPress={closeModal} />
                <ColorButton title="Sim" onPress={actionModal} />
              </View>
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalBottom;
