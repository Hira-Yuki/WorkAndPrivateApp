import { TextInput } from "react-native";
import { styles } from "../styles/styleSheet";

interface InputFormPropsType {
  onSubmit: () => void;
  onChangeText: (text: string) => void;
  text: string;
  isWorking: boolean;
}

export default function InputForm({ onSubmit, onChangeText, text, isWorking }: InputFormPropsType) {
  return (
    <TextInput
      numberOfLines={1}
      returnKeyType='done'
      onSubmitEditing={onSubmit}
      onChangeText={onChangeText}
      value={text}
      placeholder={isWorking ? 'add a To Do' : 'Where do you want to go?'}
      style={styles.input}
    />
  )
}
