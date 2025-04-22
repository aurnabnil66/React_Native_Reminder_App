import {createAsyncThunk} from '@reduxjs/toolkit';
import {nanoid} from '@reduxjs/toolkit';
import {addTask} from '../slices/taskSlice';
import type {Task} from '../slices/taskSlice';

export const createTaskWithId = createAsyncThunk(
  'tasks/createTaskWithId',
  async (taskData: Omit<Task, 'id'>, {dispatch}) => {
    const id = nanoid();
    const fullTask = {id, ...taskData};
    dispatch(addTask(fullTask));
    return fullTask; // Return it so you can use it in the component
  },
);

// this is created to add id to the task using nano id and dispatch
// it is needed to add id to the task when creating a new task
