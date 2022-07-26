import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd';

import Board from '../board/board';
import Dices from '../dices/dices';
import Operators from '../operators/operators';
import Result from '../result/result';
import RollBtn from '../roll-btn/roll-btn';
import { updateColumn, rollDices } from '../../store/dnd-slice';
import './App.css';

function App() {
  const operators = ['+', '-', '/', '*']
  
  const dices = useSelector(state => state.dnd.dices)
  const diceIds = useSelector(state => {
    return state.dnd.columns.diceColumn.taskIds
  })
  const boardIds = useSelector(state => {
    return state.dnd.columns.boardColumn.taskIds
  })
  const dispatch = useDispatch()

  const onDragEnd = result => {
    const { destination, source } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) return

      dispatch(updateColumn(result))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <aside className="app-aside">
          <RollBtn rollDices={() => dispatch(rollDices())} />
        </aside>
        <section className='app-section'>
          <Dices dices={dices} taskIds={diceIds} />
          <div className='app-content'>
            <Operators operators={operators} />
            <div className='app-board-content'>
              <Board dices={dices} taskIds={boardIds} />
              <Result dices={dices} taskIds={boardIds} />
            </div>
          </div>
        </section>
      </div>
    </DragDropContext>
  );
}

export default App;
  