import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../color';

const { width: SCREEN_WIDTH } = Dimensions.get('window'); // 화면의 너비를 가져옵니다.

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: '600',
  },
  input: {
    backgroundColor: theme.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toDoText: {
    flex: 0.82,
    color: theme.white,
    fontSize: 16,
    fontWeight: '500',
  },
  toDoFunctions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  completeText: {
    flex: 0.82,
    color: theme.ashGrey,
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
  loading: {
    flex: 1,
    marginVertical: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: SCREEN_WIDTH * 0.9,
    margin: 20,
    backgroundColor: theme.black,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: theme.white,
    marginBottom: 15,
    textAlign: 'center',
  },
});
