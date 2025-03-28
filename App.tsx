import {FC, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './src/Navigator/AppStackNavigator';

//import {NativeModules} from 'react-native';

const App: FC = () => {
  // useEffect(() => {
  //   NativeModules.AlarmModule.setAlarmInSeconds(10);
  // }, [1]);

  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default App;
