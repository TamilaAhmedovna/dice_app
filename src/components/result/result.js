import React from 'react';

import './result.css';

function Result(props) {

  return (
    <div className='result'>
      <div className='result-title'>Result:</div>
      <div className='result-number'>{props.result}</div>
    </div>
  );
}

export default Result;
