import { createSlice } from '@reduxjs/toolkit'
import initialData from '../config';

const initialState = initialData;

export const dndSlice = createSlice({
  name: 'dnd',
  initialState,
  reducers: {
    update: (state, action) => {
      console.log(state)
      console.log(action)
    },
    remove: (state, action) => {
      state.value -= 1
    },
    changePosition: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = dndSlice.actions

export default dndSlice.reducer
