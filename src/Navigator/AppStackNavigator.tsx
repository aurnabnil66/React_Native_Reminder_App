import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewTaskScreen from '../screens/NewTskScreen/NewTaskScreen';
import EditTaskScreen from '../screens/EditTaskScreen/EditTaskScreen';

const stack = createNativeStackNavigator();

const AppStackNavigator: FC = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="NewTask"
        component={NewTaskScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};

export default AppStackNavigator;
