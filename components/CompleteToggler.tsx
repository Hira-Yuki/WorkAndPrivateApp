import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { theme } from "../color";
import { ToDo } from '../hooks/useToDos';


interface CompleteTogglerPropsType {
  toggleComplete: () => void,
  toDo: ToDo,
}

export default function CompleteToggler({ toggleComplete, toDo }: CompleteTogglerPropsType) {
  return (
    <TouchableOpacity onPress={toggleComplete}>
      {toDo.isComplete
        ? <Fontisto name="checkbox-active" size={16} color={theme.white} />
        : <Fontisto name="checkbox-passive" size={16} color={theme.white} />
      }
    </TouchableOpacity>
  )
}
