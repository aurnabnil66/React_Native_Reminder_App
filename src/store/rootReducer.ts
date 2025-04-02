import {combineReducers} from '@reduxjs/toolkit';
import {taskReducer} from './slices/taskSlice';

const rootReducer = combineReducers({
  taskAcivities: taskReducer,
});

export default rootReducer;
