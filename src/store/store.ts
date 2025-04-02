import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateSagaMiddleware from 'redux-saga';

const sagaMiddleware = CreateSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
