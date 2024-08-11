import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../styles/styleSheet';
import InputForm from './InputForm';

interface EditTaskPropsType {
  editValue: string,
  isWorking: boolean,
  onChangeEditValue: (text: string) => void,
  submitEditedToDo: () => void,
  toggleEdit: () => void
}

export default function EditTask({ editValue, isWorking, onChangeEditValue, submitEditedToDo, toggleEdit }: EditTaskPropsType) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>할일 수정하기</Text>
        <InputForm
          text={editValue}
          isWorking={isWorking}
          onChangeText={onChangeEditValue}
          onSubmit={submitEditedToDo}
        />
        <Button
          title="Cancel"
          onPress={() => toggleEdit()}
        />
      </View>
    </View>
  )
}
