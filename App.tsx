import { Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { theme } from './color';
import HeaderSwitch from './components/HeaderSwitch';
import InputForm from './components/InputForm';
import { useHeaderButton, useInput, useToDos } from './hooks';
import Header from './layout/Header';
import { styles } from './styles/styleSheet';

export default function App() {
  const { isWorking, travel, work } = useHeaderButton();
  const { value: text, onChange: onChangeText, reset: resetText } = useInput('');
  const { toDos, addToDo, deleteToDo } = useToDos();

  const handleAddToDo = async () => {
    await addToDo(text, isWorking);
    resetText();
  };

  return (
    <View style={styles.container}>
      <Header>
        <HeaderSwitch work={work} isWorking={isWorking} travel={travel} />
      </Header>
      <View>
        <InputForm handleAddToDo={handleAddToDo} onChangeText={onChangeText} text={text} isWorking={isWorking} />
      </View>
      <ScrollView>
        {Object.keys(toDos).map(key => (
          toDos[key].isWorking === isWorking && (
            <View style={styles.toDo} key={key} >
              <Text style={styles.toDoText}>
                {toDos[key].text}
              </Text>
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