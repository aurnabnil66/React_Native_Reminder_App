import {FC, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './src/Navigator/AppStackNavigator';
import {Provider as StoreProvider} from 'react-redux';
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

import {NativeModules} from 'react-native';

const App: FC = () => {
  useEffect(() => {
    NativeModules.AlarmModule.setAlarmInSeconds(10);
  }, [1]);

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
