import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  buttonStyle: {
    height: scale(50),
    width: scale(200),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  buttonText: {
    color: colors.white,
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
});

export default styles;
