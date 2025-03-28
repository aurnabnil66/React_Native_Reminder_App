import {FC, useState} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import CustomSearchBox from '../../components/CustomSearchBox/CustomSearchBox';
import {colors} from '../../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: FC = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState('');

  const handleGoToNewTask = () => {
    navigation.navigate('NewTask' as never);
  };

  const handleGoToEditTask = () => {
    navigation.navigate('EditTask' as never);
  };

  const handleDeleteTask = () => {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerPosition}>
        <Text style={styles.headerText}>Tasks</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchBoxPosition}>
        <CustomSearchBox
          value={value}
          onChange={setValue}
          placeholder="Search..."
          placeholderTextColor={colors.gray}
        />
      </View>

      {/* Task Chip */}
      <View style={styles.taskChipPosition}>
        <View style={styles.taskChip}>
          <View style={styles.taskChipInside}>
            <View style={styles.taskAndDateTimeStyle}>
              <Text style={styles.taskChipText}>Task 1</Text>
              <Text style={styles.dueDateText}>Due: 1/1/2023</Text>
              <Text style={styles.dueDateText}>Time: 1:00 PM</Text>
            </View>
            <View style={styles.editAndDeleteStyle}>
              <TouchableOpacity onPress={handleGoToEditTask}>
                <FontAwesome name="edit" size={24} color={colors.purple} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteTask}>
                <FontAwesome name="trash" size={24} color={colors.red} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Add Task */}
      <View style={styles.addTaskButtonPosition}>
        <TouchableOpacity onPress={handleGoToNewTask}>
          <FontAwesome name="plus-circle" size={45} color={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
