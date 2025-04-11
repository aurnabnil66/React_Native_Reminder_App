/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import AlarmScreen from './src/screens/AlarmScreen/AlarmScreen';
import {store} from './src/store/store';

AppRegistry.registerComponent(appName, () => App);

const AlarmScreenIntent = () => {
  return (
    <Provider store={store}>
      <AlarmScreen />
    </Provider>
  );
};

AppRegistry.registerComponent('AlarmScreen', () => AlarmScreenIntent);
