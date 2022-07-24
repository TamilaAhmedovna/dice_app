import { createSlice, current } from '@reduxjs/toolkit'
import initialData from '../config';

const initialState = initialData;

export const dndSlice = createSlice({
  name: 'dnd',
  initialState,
  reducers: {
    updateColumn: (state, action) => {
      const { destination, source } = action.payload
      const sourceColumn = current(state).columns[source.droppableId]
      const destinationColumn = current(state).columns[destination.droppableId]
      const sourceTaskIds = Array.from(sourceColumn.taskIds)
      const destinationTaskIds = Array.from(destinationColumn.taskIds)
      const draggableItem = sourceTaskIds.splice(source.index, 1)[0]

      if (destination.droppableId === source.droppableId) {
        sourceTaskIds.splice(destination.index, 0, draggableItem)

        state.columns.diceColumn.taskIds = sourceTaskIds
      } else {
        destinationTaskIds.splice(destination.index, 0, draggableItem)

        state.columns.diceColumn.taskIds = sourceTaskIds
        state.columns.boardColumn.taskIds = destinationTaskIds
      }


    }
  },
})


// Action creators are generated for each case reducer function
export const { updateColumn } = dndSlice.actions

export default dndSlice.reducer