import { TextInput } from "react-native";
import { styles } from "../styles/styleSheet";

interface InputFormPropsType {
  handleAddToDo: () => void;
  onChangeText: (text: string) => void;
  text: string;
  isWorking: boolean;
}

export default function InputForm({ handleAddToDo, onChangeText, text, isWorking }: InputFormPropsType) {
  return (
    <TextInput
      returnKeyType='done'
      onSubmitEditing={handleAddToDo}
      onChangeText={onChangeText}
      value={text}
      placeholder={isWorking ? 'add a To Do' : 'Where do you want to go?'}
      style={styles.input}
    />
  )
}
