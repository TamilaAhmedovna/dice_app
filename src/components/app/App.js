import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd';

import DndColumn from '../dnd-column/dnd-column';
import Result from '../result/result';
import RollBtn from '../roll-btn/roll-btn';
import { updateColumn, rollDices } from '../../store/dnd-slice';
import initialData from '../../config';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const dices = useSelector(state => state.dnd.dices)
  const operators = useSelector(state => state.dnd.operators)
  const dicesColumn = useSelector(state => state.dnd
    .columns[initialData.columns.dicesColumn.id])
  const operatorsColumn = useSelector(state => state.dnd
    .columns[initialData.columns.operatorsColumn.id])
  const boardColumn = useSelector(state => state.dnd
    .columns[initialData.columns.boardColumn.id])

  const onDragEnd = result => {
    const { destination, source } = result
    if (!destination) return

    const operatorsColumnId = initialData.columns.operatorsColumn.id
    const dicesColumnId = initialData.columns.dicesColumn.id
    if (source.droppableId === dicesColumnId
      && destination.droppableId === operatorsColumnId) return
    if (source.droppableId === operatorsColumnId
      && destination.droppableId === dicesColumnId) return

    dispatch(updateColumn(result))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <RollBtn rollDices={() => dispatch(rollDices())} />
        <section className='app-section'>
          <DndColumn
            items={dices}
            column={dicesColumn}
          />
          <DndColumn
            items={operators}
            column={operatorsColumn}
          />
          <div className='app-board-content'>
            <DndColumn
              items={dices}
              items2={operators}
              column={boardColumn}
            />
            <Result
              dices={dices}
              operators={operators}
              itemIds={boardColumn.itemIds}
            />
          </div>
        </section>
      </div>
    </DragDropContext>
  );
}

export default App;
