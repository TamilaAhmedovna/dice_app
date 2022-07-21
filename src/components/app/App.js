import React from 'react';

import Board from '../board/board';
import Dices from '../dices/dices';
import Operators from '../operators/operators';
import Result from '../result/result';
import RollBtn from '../roll-btn/roll-btn';
import './App.css';

function App() {
  const dices = [1, 2, 3, 4, 5, 6]
  const randomDices = dices.sort(() => Math.random() - 0.5);
  randomDices.pop()
  console.log(randomDices)
  const operators = ['+', '-', '/', '*']
  console.log(operators)
  const result = 14

  return (
    <div className="app">
      <aside className="app-aside">
        <RollBtn />
      </aside>
      <section className='app-section'>
        <Dices dices={randomDices}/>
        <div className='app-content'>
          <Operators operators={operators} />
          <div className='app-board-content'>
            <Board />
            <Result result={result} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
