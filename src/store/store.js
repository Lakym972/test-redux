import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.js'
import taskReducer from '../features/task/taskSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
  },
})