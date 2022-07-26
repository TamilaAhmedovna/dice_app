import React from 'react';

import './roll-btn.css';

function RollBtn(props) {

  return (
    <button 
      className='roll-btn'
      onClick={() => props.rollDices()}
    >Roll
    </button>
  );
}

export default RollBtn;
