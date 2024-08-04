import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Alert } from 'react-native';

interface ToDo {
  text: string;
  isWorking: boolean;
};

interface ToDos {
  [key: string]: ToDo;
};

const STORAGE_KEY = '@toDos'

export default function useToDos() {
  const [toDos, setToDos] = useState<ToDos>({});

  useEffect(() => { loadToDos(); }, []);

  const saveToDos = async (toSave: ToDos) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (error) {
      // 저장공간 접근 불가 or 저장공간 용량 부족등 이슈 있을 때 에러 처리
    }
  };

  const loadToDos = async () => {
    try {
      const storageData = await AsyncStorage.getItem(STORAGE_KEY) as string;
      storageData && setToDos(JSON.parse(storageData));
    } catch (error) {
      // 저장공간 접근 불가 등 에러 처리
    }
  };

  const addToDo = async (text: string, isWorking: boolean) => {
    if (text === '') return;

    const newToDos = {
      ...toDos,
      [Date.now()]: { text, isWorking }
    };

    // save to do
    await saveToDos(newToDos);
    setToDos(newToDos);

  };

  const deleteToDo = async (key: string) => {
    Alert.alert('Delete To Do?', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: "I'm Sure.",
        style: 'destructive',
        onPress: async () => {
          try {
            const newToDos = { ...toDos };
            delete newToDos[key];
            await saveToDos(newToDos);
            setToDos(newToDos);
          } catch (error) {
            // 저장공간 접근 불가 등 에러 처리
          }
        }
      }
    ])
  }

  return {
    toDos,
    addToDo,
    deleteToDo,
  };

}
