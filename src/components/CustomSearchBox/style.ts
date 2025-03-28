import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    height: scale(40),
    width: scale(330),
    borderRadius: scale(30),
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: '#BDBDBD',
  },
  searchBoxInside: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(10),
  },
  focused: {
    borderColor: colors.blue,
  },
  input: {
    fontSize: 16,
  },
});

export default styles;
