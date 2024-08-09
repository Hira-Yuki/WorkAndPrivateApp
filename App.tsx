import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { theme } from './color';
import { CompleteToggler, HeaderSwitch, InputForm, TodoFunctions, ToDoText } from './components';
import { useHeaderButton, useInput, useToDos } from './hooks';
import { styles } from './styles/styleSheet';

export default function App() {
  const { isWorking, travel, work } = useHeaderButton();
  const { toDos, addToDo, deleteToDo, toggleComplete, isLoading, callEdit } = useToDos();
  const { value: text, onChange: onChangeText, reset: resetText } = useInput('');
  const { value: target, onChange: onChangeTarget, reset: resetTarget } = useInput('')

  const handleAddToDo = async () => {
    await addToDo(text, isWorking);
    resetText();
  };

  const toggleEdit = (key?: string) => {
    if (key) {
      const { toDoKey, newValue: targetText } = callEdit(key);
      onChangeTarget(toDoKey);
      onChangeText(targetText);
    } else {
      resetTarget();
      resetText();
    }
  };

  const submitEditedToDo = () => {

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
        {target === ''
          ? (
            <InputForm
              onSubmit={handleAddToDo}
              onChangeText={onChangeText}
              text={text}
              isWorking={isWorking}
            />
          )
          : (
            <InputForm
              onSubmit={submitEditedToDo}
              onChangeText={onChangeText}
              text={text}
              isWorking={isWorking}
            />
          )
        }
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
      <StatusBar style='light' />
    </View>
  );
}