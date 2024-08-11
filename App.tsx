import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Button, ScrollView, Text, View } from 'react-native';
import { theme } from './color';
import { CompleteToggler, GeneralModal, HeaderSwitch, InputForm, TodoFunctions, ToDoText } from './components';
import { useHeaderButton, useInput, useToDos } from './hooks';
import { styles } from './styles/styleSheet';

export default function App() {
  const { isWorking, travel, work } = useHeaderButton();
  const { toDos, addToDo, deleteToDo, toggleComplete, isLoading, callEdit, editToDo } = useToDos();
  const { value: text, onChange: onChangeText, reset: resetText } = useInput('');
  const { value: editValue, onChange: onChangeEditValue, reset: resetEditValue } = useInput('');
  const [targetKey, setTargetKey] = useState('')
  const [modalVisible, setModalVisible] = useState(false);


  const handleAddToDo = async () => {
    await addToDo(text, isWorking);
    resetText();
  };

  const toggleEdit = (key?: string) => {
    if (key) {
      const { toDoKey, editValue: targetText } = callEdit(key);
      onChangeEditValue(targetText)
      setModalVisible(prev => !prev)
      setTargetKey(toDoKey)
    } else {
      resetEditValue()
      resetText();
      setModalVisible(prev => !prev)
    }
  };

  const submitEditedToDo = () => {
    editToDo(targetKey, editValue)
    toggleEdit()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderSwitch
          work={work}
          isWorking={isWorking}
          travel={travel}
        />
      </View>
      <View>
        {/* 입력 폼 */}
        <InputForm
          onSubmit={handleAddToDo}
          onChangeText={onChangeText}
          text={text}
          isWorking={isWorking}
        />
      </View>
      {/* 로딩 인디케이터 조건부 랜더링 */}
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={theme.white} />
        </View>
      )}
      <ScrollView>
        {/* To Do List 출력 */}
        {Object.keys(toDos).map(key => (
          toDos[key].isWorking === isWorking && (
            <View style={styles.toDo} key={key} >
              <View style={styles.toDoFunctions}>
                {/* 완료 토글 기능  */}
                <CompleteToggler
                  toggleComplete={() => toggleComplete(key)}
                  toDo={toDos[key]}
                />
                {/* 완료 여부에 따른 조건부 랜더링*/}
                <ToDoText toDo={toDos[key]} />
              </View>
              {/* To Do 조작 버튼 */}
              <TodoFunctions
                toggleEdit={() => toggleEdit(key)}
                deleteToDo={() => deleteToDo(key)}
              />
            </View>
          )
        ))}
      </ScrollView>
      {/* 모달 테스트 */}
      <GeneralModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
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
      </GeneralModal>
      <StatusBar style='light' />
    </View>
  );
}