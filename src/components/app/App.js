import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd';

import Board from '../board/board';
import Dices from '../dices/dices';
import Operators from '../operators/operators';
import Result from '../result/result';
import RollBtn from '../roll-btn/roll-btn';
import { update } from '../../store/dnd-slice';
import './App.css';

function App({ initialData }) {
  const operators = ['+', '-', '/', '*']
  const result = 14

  const dices = useSelector(state => {
    return state.dnd.dices
  })
  const dispatch = useDispatch()

  const state = initialData

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) return

    dispatch(update(result))

    const column = initialData.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <aside className="app-aside">
          <RollBtn />
        </aside>
        <section className='app-section'>
          <Dices dices={dices} />
          <div className='app-content'>
            <Operators operators={operators} />
            <div className='app-board-content'>
              <Board />
              <Result result={result} />
            </div>
          </div>
        </section>
      </div>
    </DragDropContext>
  );
}

export default App;
