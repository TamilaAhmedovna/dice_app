import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Board from '../board/board';
import Dices from '../dices/dices';
import Operators from '../operators/operators';
import Result from '../result/result';
import RollBtn from '../roll-btn/roll-btn';
import './App.css';

function App({ initialData }) {
  const operators = ['+', '-', '/', '*']
  // console.log(operators)
  const result = 14
  const { dices } = initialData

  const onDragEnd = result => {
    console.log(result)
    // todo: reorder our column
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
