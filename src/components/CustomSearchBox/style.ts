import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: scale(40),
    width: scale(300),
    borderRadius: scale(30),
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  searchBoxInside: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(10),
  },
  focused: {
    borderColor: 'red',
  },
  input: {
    fontSize: 16,
  },
});

export default styles;
