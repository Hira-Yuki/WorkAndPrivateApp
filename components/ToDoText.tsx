import { Text } from 'react-native';
import { ToDo } from '../hooks/useToDos';
import { styles } from '../styles/styleSheet';

interface ToDoTextPropsType {
  toDo: ToDo,
}
/**
 * 
 * @param toDos to Do List를 담고 있는 객체
 * @param toDoKey 특정 값을 가져오기 위한 key
 * 
 * 할일 완료 여부에 따른 조건부 랜더링된 ReactNode
 */
export default function ToDoText({ toDo }: ToDoTextPropsType) {

  return (
    <>
      {toDo.isComplete ? (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.completeText}
        >
          {toDo.text}
        </Text>
      ) : (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.toDoText}
        >
          {toDo.text}
        </Text>
      )}
    </>
  )
}
