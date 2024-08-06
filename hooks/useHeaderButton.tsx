import { useEffect, useState } from "react";
import useAsyncStorage from "./useAsyncStorage";


const STORAGE_KEY = '@isWorking'

export default function useHeaderButton() {
  const [isWorking, setIsWorking] = useState(true);
  const { saveItem: saveHeader, loadItem: loadHeader } = useAsyncStorage({ STORAGE_KEY, toSave: isWorking, setState: setIsWorking })
  const travel = () => setIsWorking(false);
  const work = () => setIsWorking(true);

  useEffect(() => {
    loadHeader();
  }, []);

  useEffect(() => {
    saveHeader();
  }, [isWorking]);

  return {
    isWorking,
    travel,
    work,
  }
}
