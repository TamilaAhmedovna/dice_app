import React from 'react';

import './dice.css';

function Dice(props) {

  return (
    <div className='dice'>{props.num}</div>
  );
}

export default Dice;
