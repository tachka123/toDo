import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Tasks";

const store = configureStore({
  devTools: true,
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
