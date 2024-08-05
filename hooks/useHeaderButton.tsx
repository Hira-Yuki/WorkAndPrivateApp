import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

const STORAGE_KEY = '@isWorking'

export default function useHeaderButton() {
  const [isWorking, setIsWorking] = useState(true);
  const travel = () => setIsWorking(false);

  const work = () => setIsWorking(true);

  useEffect(() => {
    loadIsWorking();
  }, []);

  useEffect(() => {
    saveIsWorking();
  }, [isWorking]);

  const saveIsWorking = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(isWorking));
    } catch (error) {
      // 저장공간 접근 불가 or 저장공간 용량 부족등 이슈 있을 때 에러 처리
    }
  };

  const loadIsWorking = async () => {
    try {
      const storageData = await AsyncStorage.getItem(STORAGE_KEY) as string;
      storageData && setIsWorking(JSON.parse(storageData));
    } catch (error) {
      // 저장공간 접근 불가 등 에러 처리
    }
  }

  return {
    isWorking,
    travel,
    work,
  }
}
