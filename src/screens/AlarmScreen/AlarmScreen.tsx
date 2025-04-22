import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  NativeModules,
} from 'react-native';
import {RootState} from '../../store/store';
import {useAppSelector} from '../../store/hooks';
import {colors} from '../../theme/colors';

const AlarmScreen = () => {
  const {AlarmSoundModule} = NativeModules;

  const tasks = useAppSelector((state: RootState) => state.taskAcivities.tasks);

  const currentTaskId = useAppSelector(
    (state: RootState) => state.taskAcivities.currentTaskId,
  );

  const task = tasks.find(t => t.id === currentTaskId);

  console.log(tasks);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.purple,
        flex: 1,
      }}>
      <Text style={{fontSize: 20, color: 'white'}}>Title: {task?.title}</Text>
      <Text style={{fontSize: 20, color: 'white'}}>
        Description: {task?.description}
      </Text>
      <Text style={{fontSize: 20, color: 'white'}}>
        Reminder Date: {task?.reminderDate}
      </Text>
      <Text style={{fontSize: 20, color: 'white'}}>
        Reminder Time: {task?.reminderTime}
      </Text>
      <TouchableOpacity
        onPress={() => {
          BackHandler.exitApp();
          AlarmSoundModule.stopAlarmSound();
        }}>
        <Text style={{fontSize: 20, color: 'yellow'}}>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlarmScreen;
