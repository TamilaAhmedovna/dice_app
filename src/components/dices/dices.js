import React from 'react';

import Dice from '../dice/dice';
import './dices.css';

function Dices({dices}) {

  return (
    <div className='dices'>
      <div className='dices-title'>Dices:</div>
      {dices.map(num => <Dice num={num} key={num} />)}
    </div>
  );
}

export default Dices;
