import {FC, useEffect} from 'react';
import {View, Text} from 'react-native';

import {NativeModules} from 'react-native';

const App: FC = () => {
  useEffect(() => {
    NativeModules.AlarmModule.setAlarmInSeconds(10);
  }, [1]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
};

export default App;
