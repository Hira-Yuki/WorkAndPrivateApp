import { Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { theme } from './color';
import { HeaderSwitch, InputForm } from './components';
import { useHeaderButton, useInput, useToDos } from './hooks';
import { styles } from './styles/styleSheet';

export default function App() {
  const { isWorking, travel, work } = useHeaderButton();
  const { value: text, onChange: onChangeText, reset: resetText } = useInput('');
  const { toDos, addToDo, deleteToDo, toggleComplete } = useToDos();

  const handleAddToDo = async () => {
    await addToDo(text, isWorking);
    resetText();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderSwitch work={work} isWorking={isWorking} travel={travel} />
      </View>
      <View>
        <InputForm handleAddToDo={handleAddToDo} onChangeText={onChangeText} text={text} isWorking={isWorking} />
      </View>
      <ScrollView>
        {Object.keys(toDos).map(key => (
          toDos[key].isWorking === isWorking && (
            <View style={styles.toDo} key={key} >
              <View style={styles.toDoFunctions}>
                <TouchableOpacity onPress={() => { toggleComplete(key) }}>
                  {toDos[key].isComplete
                    ? <Fontisto name="checkbox-active" size={16} color={theme.white} />
                    : <Fontisto name="checkbox-passive" size={16} color={theme.white} />}
                </TouchableOpacity>
                {toDos[key].isComplete
                  ? <Text style={styles.completeText}>{toDos[key].text}</Text>
                  : <Text style={styles.toDoText}>{toDos[key].text}</Text>
                }
              </View>
              <TouchableOpacity onPress={() => { deleteToDo(key) }}>
                <Fontisto name='trash' size={16} color={theme.ashGrey} />
              </TouchableOpacity>
            </View>
          )
        ))}
      </ScrollView>
      <StatusBar style='light' />
    </View>
  );
}