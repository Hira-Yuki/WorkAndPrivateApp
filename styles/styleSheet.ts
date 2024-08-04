import { StyleSheet } from 'react-native';
import { theme } from '../color';

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
    color: theme.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
