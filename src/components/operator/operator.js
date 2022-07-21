import React from 'react';

import './operator.css';

function Operator(props) {

  return (
    <div className='operator'>
      <div>{props.operator}</div> 
    </div>
  );
}

export default Operator;
