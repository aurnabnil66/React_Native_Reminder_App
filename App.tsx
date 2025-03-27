import {FC, useEffect} from 'react';
import {View, Text} from 'react-native';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';

//import {NativeModules} from 'react-native';

const App: FC = () => {
  // useEffect(() => {
  //   NativeModules.AlarmModule.setAlarmInSeconds(10);
  // }, [1]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <HomeScreen />
    </View>
  );
};

export default App;
