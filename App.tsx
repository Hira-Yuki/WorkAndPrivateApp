import { Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from './color';
import { useHeaderButton, useInput, useToDos } from './hooks';

export default function App() {
  const { working, travel, work } = useHeaderButton();
  const { value: text, onChange: onChangeText, reset: resetText } = useInput('');
  const { toDos, addToDo, deleteToDo } = useToDos();

  const handleAddToDo = async () => {
    await addToDo(text, working);
    resetText();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.btnText,
              color: working
                ? theme.white
                : theme.darkGrey
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: working
                ? theme.darkGrey
                : theme.white
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          returnKeyType='done'
          onSubmitEditing={handleAddToDo}
          onChangeText={onChangeText}
          value={text}
          placeholder={working ? 'add a To Do' : 'Where do you want to go?'}
          style={styles.input}
        />
      </View>
      <ScrollView>
        {Object.keys(toDos).map(key => (
          toDos[key].working === working && (
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: '600'
  },
  input: {
    backgroundColor: theme.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toDoText: {
    color: theme.white,
    fontSize: 16,
    fontWeight: '500'
  }
});
