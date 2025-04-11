import {FC, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import CustomSearchBox from '../../components/CustomSearchBox/CustomSearchBox';
import {colors} from '../../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {deleteTask} from '../../store/slices/taskSlice';
import ToastPopUp from '../../utils/ToastPopUp';
import {RootStackParamsList} from '../../Navigator/RootStackParamsList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>;

const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const allTasks = useSelector(
    (state: RootState) => state.taskAcivities?.tasks,
  );

  const [filteredTasks, setFilteredTasks] = useState(allTasks || []);

  // Filter tasks and implement search
  useEffect(() => {
    // Filter tasks when searchTerm changes
    if (searchTerm.trim().length === 0) {
      setFilteredTasks(allTasks); // Show all tasks when search is empty
    } else {
      setFilteredTasks(
        allTasks?.filter(task =>
          task.title?.toLowerCase().includes(searchTerm.toLowerCase()),
        ) || [],
      );
    }
  }, [searchTerm, allTasks]);

  const handleGoToNewTask = () => {
    navigation.navigate('NewTask' as never);
  };

  const handleGoToEditTask = (task: any) => {
    navigation.navigate('EditTask', {task});
  };

  const handleDeleteTask = (taskId: string) => {
    try {
      dispatch(deleteTask(taskId));
      ToastPopUp('Task Deleted Successfully');
    } catch (error) {
      ToastPopUp('Failed to delete task. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerPosition}>
        <Text style={styles.headerText}>Tasks</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchBoxPosition}>
        <CustomSearchBox
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search..."
          placeholderTextColor={colors.gray}
        />
      </View>

      {/* Task Chip */}
      <View style={styles.taskChipPosition}>
        {
          <FlatList
            style={styles.flatlistStyle}
            data={filteredTasks}
            renderItem={({item}: any) => (
              <View style={styles.taskChip}>
                <View style={styles.taskChipInside}>
                  <View style={styles.taskAndDateTimeStyle}>
                    <Text style={styles.taskChipText}>{item.title}</Text>
                    <Text style={styles.dueDateText}>
                      Due: {item.reminderDate}
                    </Text>
                    <Text style={styles.dueDateText}>
                      Time: {item.reminderTime}
                    </Text>
                  </View>
                  <View style={styles.editAndDeleteStyle}>
                    <TouchableOpacity onPress={() => handleGoToEditTask(item)}>
                      <FontAwesome
                        name="edit"
                        size={24}
                        color={colors.purple}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDeleteTask(item?.id)}>
                      <FontAwesome name="trash" size={24} color={colors.red} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        }
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
