import React from 'react';

import Operator from '../operator/operator';
import './operators.css';

function Operators({operators}) {

  return (
    <div className='operators'>
      <div className='operators-title'>Operators:</div>
      {operators.map(op => <Operator operator={op} key={op} />)}
    </div>
  );
}

export default Operators;
