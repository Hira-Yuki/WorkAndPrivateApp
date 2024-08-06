import { useEffect, useState } from "react";
import { Alert } from 'react-native';
import useAsyncStorage from './useAsyncStorage';

export interface ToDo {
  text: string;
  isWorking: boolean;
  isComplete: boolean;
  isEditing?: boolean;
};

export interface ToDos {
  [key: string]: ToDo;
};

const STORAGE_KEY = '@toDos'

export default function useToDos() {
  const [toDos, setToDos] = useState<ToDos>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { saveItem: saveToDos, loadItem: loadToDos } = useAsyncStorage({ STORAGE_KEY, toSave: toDos, setState: setToDos, setIsLoading })

  useEffect(() => { loadToDos(); }, []);
  useEffect(() => { saveToDos(); }, [toDos]);

  const addToDo = async (text: string, isWorking: boolean) => {
    if (text === '') return;

    const newToDos = {
      ...toDos,
      [Date.now()]: { text, isWorking, isComplete: false }
    };

    setToDos(newToDos);
  };

  const toggleComplete = async (key: string) => {
    try {
      const newToDos = { ...toDos };
      newToDos[key].isComplete = !newToDos[key].isComplete;
      setToDos(newToDos);
    } catch (error) {
      // 저장공간 접근 불가 등 에러 처리
      console.error('toggleComplete function failed: ', error)
    }
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
            setToDos(newToDos);
          } catch (error) {
            // 저장공간 접근 불가 등 에러 처리
            console.error('deleteToDo function failed: ', error)
          }
        }
      }
    ])
  };

  const toggleEdit = async (key: string) => {
    const newToDos = { ...toDos };
    newToDos[key].isEditing = !newToDos[key].isEditing;
    setToDos(newToDos);
  };

  const editToDo = async (key: string, newText: string) => {
    const newToDos = { ...toDos };
    newToDos[key].text = newText;
    newToDos[key].isEditing = false;
    setToDos(newToDos);
  };

  return {
    toDos,
    addToDo,
    deleteToDo,
    toggleComplete,
    toggleEdit,
    editToDo,
    isLoading
  };

}
