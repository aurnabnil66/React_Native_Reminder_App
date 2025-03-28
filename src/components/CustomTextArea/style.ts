import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    height: scale(130),
    width: scale(330),
    borderRadius: scale(10),
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: '#BDBDBD',
  },
  focused: {
    borderColor: colors.blue,
  },
  icon: {
    right: scale(20),
  },
  input: {
    fontSize: 16,
    marginLeft: scale(12),
  },
});

export default styles;
