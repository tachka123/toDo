import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  taskAcc: { text: "", id: 0 },
};

export const taskReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    setTaskAcc(state, action) {
      state.taskAcc = action.payload;
    },
    editTask(state, action) {
      const index = state.tasks.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export default taskReducer.reducer;

export const taskSelector = {
  getTasks: (state) => state.tasks.tasks,
  getTaskAcc: (state) => state.tasks.taskAcc,
};
