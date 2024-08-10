import React, { ReactNode } from 'react';
import { Modal } from 'react-native';

interface GeneralModalPropsType {
  children: ReactNode,
  modalVisible: boolean,
  setModalVisible: (prev: boolean) => void,
}

export default function GeneralModal({ children, modalVisible, setModalVisible }: GeneralModalPropsType) {


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {children}
    </Modal>
  )
}
