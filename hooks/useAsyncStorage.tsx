import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToDos } from './useToDos';

interface useAsyncStoragePropsType {
  STORAGE_KEY: string;
  toSave: ToDos | Boolean;
  setState: (item: any) => void;
  setIsLoading?: (boolean: boolean) => void;
}

export default function useAsyncStorage(initialValue: useAsyncStoragePropsType) {
  const { STORAGE_KEY, toSave, setState, setIsLoading } = initialValue;

  const saveItem = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (error) {
      // 저장공간 접근 불가 or 저장공간 용량 부족등 이슈 있을 때 에러 처리
      console.error('saveItem function failed: ', error)
    }
  };

  const loadItem = async () => {
    try {
      const storageData = await AsyncStorage.getItem(STORAGE_KEY) as string;
      storageData && setState(JSON.parse(storageData));
    } catch (error) {
      // 저장공간 접근 불가 등 에러 처리
      console.error('loadItem function failed: ', error)
    } finally {
      if (setIsLoading != undefined) setIsLoading(false);
    }
  };

  return {
    saveItem,
    loadItem
  }
}
