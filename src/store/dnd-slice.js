import { createSlice, current } from '@reduxjs/toolkit'
import { initialData } from '../config';
import getRandomDices from '../utils/get-random-dices';
import getRandomOperators from '../utils/get-random-operators';

const initialState = initialData;

export const dndSlice = createSlice({
  name: 'dnd',
  initialState,
  reducers: {
    rollDices: (state) => {
      const newDices = getRandomDices()
      const newOperators = getRandomOperators()
      state.dices = newDices
      state.operators = newOperators
      state.columns.dicesColumn.taskIds = Object.keys(newDices)
      state.columns.operatorsColumn.taskIds = Object.keys(newOperators) 
      state.columns.boardColumn.taskIds = [] 
    },
    updateColumn: (state, action) => {
      const { destination, source } = action.payload
      const sourceColumn = current(state).columns[source.droppableId]
      const destinationColumn = current(state).columns[destination.droppableId]
      const sourceTaskIds = Array.from(sourceColumn.taskIds)
      const destinationTaskIds = Array.from(destinationColumn.taskIds)
      const draggableItem = sourceTaskIds.splice(source.index, 1)[0]

      if (destination.droppableId === source.droppableId) {
        sourceTaskIds.splice(destination.index, 0, draggableItem)

        state.columns[source.droppableId].taskIds = sourceTaskIds
      } else {
        destinationTaskIds.splice(destination.index, 0, draggableItem)

        state.columns[source.droppableId].taskIds = sourceTaskIds
        state.columns[destination.droppableId].taskIds = destinationTaskIds
      }
    }
  },
})


// Action creators are generated for each case reducer function
export const { updateColumn, rollDices } = dndSlice.actions

export default dndSlice.reducer