import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Task {
  id?: string;
  title?: string;
  description?: string;
  reminderDate?: string;
  reminderTime?: string;
}

interface TaskState {
  tasks: Task[];
  currentTask: Task;
  currentTaskId?: string; // ID of the currently selected task -> needed for alarm screen
}

const initialState: TaskState = {
  tasks: [],
  currentTask: {
    title: '',
    reminderDate: '',
    reminderTime: '',
    description: '',
  },
  currentTaskId: undefined, // initially undefined
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // addTask: (state, action: PayloadAction<Task>) => {
    //   state.tasks.push({id: nanoid(), ...action.payload});
    // },

    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload); // task with ID is passed by thunk
    },

    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        task => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },

    // reducer to set the current task
    setCurrentTaskId: (state, action: PayloadAction<string>) => {
      state.currentTaskId = action.payload;
    },
  },
});

export const {addTask, editTask, deleteTask, setCurrentTaskId} =
  taskSlice.actions;

export const taskReducer = taskSlice.reducer;
