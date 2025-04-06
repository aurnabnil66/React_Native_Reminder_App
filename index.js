/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import AlarmScreen from './src/screens/AlarmScreen/AlarmScreen';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent('AlarmScreen', () => AlarmScreen);
