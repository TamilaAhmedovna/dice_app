import { configureStore } from '@reduxjs/toolkit'
import dndReducer from './dnd-slice'

export const store = configureStore({
  reducer: {
    dnd: dndReducer
  },
})
