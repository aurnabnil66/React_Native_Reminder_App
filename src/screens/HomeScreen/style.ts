import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  headerPosition: {
    top: scale(20),
    left: scale(15),
  },
  headerText: {
    fontSize: moderateScale(30),
    color: colors.black,
    fontWeight: '600',
  },
  searchBoxPosition: {
    alignItems: 'center',
    marginTop: scale(40),
  },
  taskChipPosition: {
    alignItems: 'center',
    marginTop: scale(40),
  },
  taskChip: {
    backgroundColor: colors.white,
    width: scale(330),
    height: scale(87),
    borderRadius: scale(10),
    justifyContent: 'center',
    marginBottom: scale(10),
  },
  taskChipInside: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: scale(15),
  },
  taskChipText: {
    fontSize: moderateScale(20),
    color: colors.black,
    fontWeight: '500',
  },
  dueDateText: {
    fontSize: moderateScale(14),
    color: colors.black,
    fontWeight: '400',
  },
  taskAndDateTimeStyle: {
    gap: scale(3),
  },
  editAndDeleteStyle: {
    flexDirection: 'row',
    gap: scale(20),
    right: scale(15),
  },
  addTaskButtonPosition: {
    marginTop: scale(20),
    left: scale(290),
  },
  flatlistStyle: {
    maxHeight: 390,
  },
});

export default styles;
