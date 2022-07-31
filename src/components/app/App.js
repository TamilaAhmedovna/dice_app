import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd';

import Board from '../board/board';
import Dices from '../dices/dices';
import Operators from '../operators/operators';
import Result from '../result/result';
import RollBtn from '../roll-btn/roll-btn';
import { updateColumn, rollDices } from '../../store/dnd-slice';
import { initialData } from '../../config';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const dices = useSelector(state => state.dnd.dices)
  const operators = useSelector(state => state.dnd.operators)
  const dicesColumn = useSelector(state => state.dnd
    .columns[initialData.columns.dicesColumn.id])
  const operatorsColumn = useSelector(state => state.dnd
    .columns[initialData.columns.operatorsColumn.id])
  const boardIds = useSelector(state => state.dnd
    .columns[initialData.columns.boardColumn.id].taskIds)

  const onDragEnd = result => {
    const { destination, source } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) return
    // if (destination.droppableId !== initialData.columns.boardColumn.id &&
    //   source.droppableId !== initialData.columns.boardColumn.id) return
    if (destination.droppableId === initialData.columns.boardColumn.id &&
      result.draggableId.includes('operator')) {
      console.log()
      console.log(destination.index)
      console.log(boardIds)
      if (boardIds[destination.index].includes('operator') ||
        boardIds[destination.index - 1].includes('operator')) return
      if (boardIds.length === destination.index ||
        boardIds.length === 0) return
    }

    dispatch(updateColumn(result))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <RollBtn rollDices={() => dispatch(rollDices())} />
        <section className='app-section'>
          <Dices 
            dices={dices}
            dicesColumn={dicesColumn} 
          />
          <div className='app-content'>
            <Operators 
              operators={operators} 
              operatorsColumn={operatorsColumn} 
            />
            <div className='app-board-content'>
              <Board 
                dices={dices} 
                operators={operators} 
                taskIds={boardIds} 
              />
              <Result 
                dices={dices} 
                operators={operators} 
                taskIds={boardIds} 
              />
            </div>
          </div>
        </section>
      </div>
    </DragDropContext>
  );
}

export default App;
