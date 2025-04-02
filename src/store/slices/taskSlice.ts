import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit';

interface Task {
  id?: string;
  title?: string;
  description?: string;
  reminderDate?: string;
  reminderTime?: string;
}

interface TaskState {
  tasks: Task[];
  currentTask: Task;
}

const initialState: TaskState = {
  tasks: [],
  currentTask: {
    title: '',
    reminderDate: '',
    reminderTime: '',
    description: '',
  },
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push({id: nanoid(), ...action.payload});
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
  },
});

export const {addTask, editTask, deleteTask} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
