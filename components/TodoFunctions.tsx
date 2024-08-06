import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity, View } from "react-native";
import { theme } from "../color";
import { styles } from "../styles/styleSheet";

interface TodoFunctionsPropsType {
  toggleEdit: () => void,
  deleteToDo: () => void,
}

export default function TodoFunctions({ toggleEdit, deleteToDo }: TodoFunctionsPropsType) {

  return (
    <View style={styles.toDoFunctions}>
      <TouchableOpacity onPress={toggleEdit}>
        <Fontisto name="eraser" size={16} color={theme.ashGrey} />
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteToDo}>
        <Fontisto name='trash' size={16} color={theme.ashGrey} />
      </TouchableOpacity>
    </View>
  )
}
