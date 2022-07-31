import { createSlice, current } from '@reduxjs/toolkit'
import initialData from '../config';
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
      state.columns.dicesColumn.itemIds = Object.keys(newDices)
      state.columns.operatorsColumn.itemIds = Object.keys(newOperators) 
      state.columns.boardColumn.itemIds = [] 
    },
    updateColumn: (state, action, draggableId) => {
      const { destination, source } = action.payload
      const sourceColumn = current(state).columns[source.droppableId]
      const destinationColumn = current(state).columns[destination.droppableId]
      const sourceItemIds = Array.from(sourceColumn.itemIds)
      const destinationItemIds = Array.from(destinationColumn.itemIds)
      const draggableItem = sourceItemIds.splice(source.index, 1)[0]

      if (destination.droppableId === source.droppableId) {
        sourceItemIds.splice(destination.index, 0, draggableItem)

        state.columns[source.droppableId].itemIds = sourceItemIds
      } else {
        destinationItemIds.splice(destination.index, 0, draggableItem)

        state.columns[source.droppableId].itemIds = sourceItemIds
        state.columns[destination.droppableId].itemIds = destinationItemIds
      }
    }
  },
})

export const { updateColumn, rollDices } = dndSlice.actions

export default dndSlice.reducer