import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  headerPosition: {
    top: scale(20),
    alignItems: 'center',
  },
  headerProperties: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
  },
  headerText: {
    fontSize: moderateScale(30),
    color: colors.black,
    fontWeight: '600',
  },
  taskFormPosition: {
    alignItems: 'center',
    marginTop: scale(10),
  },
  inputHeaderStyle: {
    gap: 5,
  },
  inputHeaderText: {
    fontSize: moderateScale(16),
    color: colors.black,
    fontWeight: '500',
  },
  errorText: {
    color: colors.red,
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
  createButtonPosition: {
    marginTop: scale(20),
  },
  inputPosition: {
    marginTop: scale(15),
  },
  clearButtonPosition: {
    marginTop: scale(20),
  },
  clearText: {
    color: colors.white,
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  clearButtonStyle: {
    height: scale(50),
    width: scale(200),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
});

export default styles;
